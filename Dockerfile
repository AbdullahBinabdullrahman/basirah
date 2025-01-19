# Stage 1: Builder
FROM node:22-alpine AS builder

# Add required dependencies for sharp and other builds
RUN apk add --no-cache \
    libc6-compat \
    python3 \
    make \
    g++ \
    build-base \
    vips-dev

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install the latest version of npm
RUN npm install -g npm@latest

# Install dependencies (including sharp)
RUN npm ci
RUN npm install sharp

# Copy the rest of the application code
COPY . .

# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED 1

# Build the Next.js application
RUN npm run build

# Stage 2: Runner
FROM node:18-alpine AS runner

# Add sharp dependencies for production
RUN apk add --no-cache vips-dev

# Set the working directory
WORKDIR /app

# Set environment variables for production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only the necessary files from the builder stage
COPY --from=builder /app ./

# Use the non-root user
USER nextjs

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
