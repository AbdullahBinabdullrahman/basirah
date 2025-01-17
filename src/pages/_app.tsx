import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "../../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSansArabic.className}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
