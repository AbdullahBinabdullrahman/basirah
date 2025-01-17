"use client";
import { motion } from "framer-motion";
import {
  wslahIcon,
  mesiotIcon,
  hubspotIcon,
  dblplatIcon,
  asasIcon,
  diarIcon,
  awtadIcon,
  tamtIcon,
  mudptIcon,
} from "../assets";
import Image from "next/image";

// Copy the entire Home component from landing.tsx
export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800"
      style={{ direction: "rtl" }}
    >
      {/* <AnimatedBackground /> */}

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="p-4 md:p-6 fixed w-full z-50 backdrop-blur-lg bg-gray-900/50 border-b border-emerald-400/20 shadow-lg shadow-emerald-400/10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <motion.h1
            className="text-2xl md:text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            بصيرة التحليل
          </motion.h1>

          <nav className="flex space-x-reverse space-x-4 md:space-x-8 text-sm md:text-base">
            {["عن الشركة", "المنتجات", "شركاؤنا", "اتصل بنا"].map((item) => (
              <motion.a
                key={item}
                href={`#${
                  item === "عن الشركة"
                    ? "about"
                    : item === "المنتجات"
                    ? "products"
                    : item === "شركاؤنا"
                    ? "partners"
                    : "contact"
                }`}
                className="relative px-4 py-2 font-medium text-gray-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-emerald-400/10 rounded-lg -z-10"
                  layoutId="navbar-hover"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Enhanced Hero Section with More 3D Elements */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 md:px-0">
        <motion.div className="absolute inset-0 z-0">
          {/* 3D Grid Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(52, 211, 153, 0.1) 1px, transparent 1px),
                                   linear-gradient(to bottom, rgba(52, 211, 153, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              transform:
                "perspective(1000px) rotateX(60deg) translateY(-100px)",
            }}
          />
        </motion.div>

        <motion.div className="relative w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
            {/* Enhanced Text Content with New Font Styles */}
            <motion.div className="space-y-4 md:space-y-6 relative text-center md:text-right">
              <motion.h1
                className="text-4xl md:text-6xl font-bold relative tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  className="block text-5xl md:text-7xl font-extrabold text-emerald-400"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring" }}
                >
                  تحويل
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent font-extrabold"
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: "spring" }}
                >
                  المستقبل الرقمي
                </motion.span>
              </motion.h1>

              <p className="text-xl text-gray-300 leading-relaxed font-light">
                نقدم حلولاً مبتكرة تجمع بين التكنولوجيا المتقدمة والذكاء
                الاصطناعي
                <span className="text-emerald-400 font-medium"> لتحسين </span>
                تجربة عملائنا
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
              >
                <a
                  href="#products"
                  className="px-8 py-4 bg-emerald-400 text-gray-900 rounded-full hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-400/30 font-medium"
                >
                  استكشف منتجاتنا
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-full hover:bg-emerald-400/10 transition-all font-medium"
                >
                  تعرف علينا
                </a>
              </motion.div>
            </motion.div>

            {/* Enhanced 3D Elements Group */}
            <motion.div className="relative h-[300px] md:h-[500px] hidden md:flex items-center justify-center">
              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400/40 rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${30 + i * 10}%`,
                    top: `${40 + i * 5}%`,
                  }}
                />
              ))}

              {/* Main 3D Card with Enhanced Effects */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0],
                }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute z-20 w-72 h-72"
              >
                {/* Card Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-300 rounded-2xl shadow-2xl" />
                <div className="absolute inset-1 bg-gray-900/90 rounded-xl backdrop-blur-sm" />

                {/* Interactive Elements */}
                <motion.div
                  className="absolute inset-4 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Animated Lines */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1 bg-emerald-400/20 rounded-full mb-3"
                      initial={{ width: "0%" }}
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{
                        duration: 3,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  {/* Glowing Orb */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-6 right-6 w-12 h-12 bg-emerald-400/30 rounded-full"
                    style={{
                      filter: "blur(8px)",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Previous Secondary Elements with Enhanced Animations */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute z-10 w-60 h-60 bg-emerald-300/20 rounded-2xl backdrop-blur-sm"
                style={{
                  right: "15%",
                  top: "20%",
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px) rotateY(-10deg)",
                }}
              />

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute z-0 w-40 h-40 bg-emerald-400/10 rounded-full blur-xl"
                style={{
                  left: "20%",
                  bottom: "20%",
                }}
              />

              {/* New Connecting Network Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 opacity-20">
                {[...Array(3)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M ${100 + i * 50} ${100 + i * 30} Q ${200 + i * 20} ${
                      150 + i * 20
                    }, ${300 + i * 30} ${200 + i * 40}`}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-emerald-400"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Products Section with Larger Cards */}
      <section id="products" className="py-8 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          منتجات بصيرة التحليل
        </h2>
        <motion.div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              title: "وصلة",
              desc: "نظام ذكي لإدارة المباني يوفر التحكم الذكي والمراقبة المتقدمة باستخدام تقنيات إنترنت الأشياء.",
              features: [
                "إدارة ذكية للمباني عبر تطبيق موحد.",
                "تحكم آلي بالأقفال الذكية، الإضاءة، وأجهزة التكييف.",
                "تحليل متقدم يتيح توقع الصيانة وتقليل التكاليف.",
                "مراقبة مباشرة واستهلاك طاقة محسّن.",
                "تكامل سلس مع الأنظمة الأخرى لإدارة المباني.",
              ],
              gradient: "from-emerald-400 to-emerald-300",
              link: "https://wslah.co",
              icon: wslahIcon,
            },
            {
              title: "منصة دبل",
              desc: "منصة تحليل بيانات متقدمة تساعد الشركات على تحويل البيانات الضخمة إلى رؤى قابلة للتنفيذ باستخدام أدوات ذكاء اصطناعي متطورة.",
              features: [
                "تحليل البيانات باستخدام خوارزميات ذكاء اصطناعي متقدمة.",
                "إعداد تقارير مخصصة لتسهيل اتخاذ القرار.",
                "لوحات عرض تفاعلية تسلط الضوء على أهم المؤشرات.",
                "إمكانيات التنبؤ بالبيانات لتوقع المستقبل.",
                "دعم التكامل مع قواعد البيانات والأنظمة المختلفة.",
              ],
              gradient: "from-emerald-300 to-emerald-400",
              link: "https://dblplat.co",
              icon: dblplatIcon,
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{
                rotateX: 5,
                rotateY: -5,
                scale: 1.02,
              }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
              }}
              className="relative group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              onClick={() => (window.location.href = product.link)}
            >
              <div className="relative p-8 md:p-12 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-transparent transition-all duration-300 cursor-pointer min-h-[600px]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-emerald-400">
                    {product.title}
                  </h3>
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      z: 20,
                    }}
                    transition={{ duration: 0.5 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="w-32 h-32 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-emerald-400/10"
                  >
                    <Image
                      src={product.icon}
                      alt={product.title}
                      layout="fill"
                      className=" object-contain p-2"
                    />
                  </motion.div>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 font-light mb-8">
                  {product.desc}
                </p>
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-lg md:text-xl text-gray-400 font-light"
                    >
                      <span className="text-2xl text-emerald-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={product.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20 transition-colors"
                >
                  اعرف المزيد
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.a>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-2xl -z-10 group-hover:opacity-70 transition-opacity"
                style={{
                  transform: "translateZ(-40px)",
                  transformStyle: "preserve-3d",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partners Section - Sleek Grid Layout with Larger Icons */}
      <section id="partners" className="py-8 md:py-16 px-4 bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            عملاؤنا
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "خدمات الشرق الاوسط", logo: mesiotIcon },
              { name: "HUBUP", logo: hubspotIcon },
              { name: "تمت للمزادات", logo: tamtIcon },
              { name: "اوتاد العقارية", logo: awtadIcon },
              { name: "اساس الثبات", logo: asasIcon },
              { name: "ديار العقارية", logo: diarIcon },
              { name: "مدرب", logo: mudptIcon },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -15px rgba(52, 211, 153, 0.3)",
                }}
                className="bg-white p-12 md:p-16 rounded-xl shadow-lg flex items-center justify-center transition-shadow duration-300 min-h-[200px]"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">بصيرة التحليل</h3>
            <p className="text-gray-400">
              نقود التحول الرقمي من خلال الابتكار والتكنولوجيا المتقدمة
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {["عن الشركة", "المنتجات", "شركاؤنا", "اتصل بنا"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-2 text-gray-400">
              <p>الرياض، المملكة العربية السعودية</p>
              <p>هاتف: 966-11-000-0000+</p>
              <p>البريد الإلكتروني: info@baseerah.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">تابعنا</h4>
            <div className="flex space-x-4">
              {["twitter", "linkedin", "facebook"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/baseerah`}
                  className="text-gray-400 hover:text-white"
                >
                  <i className={`fab fa-${social} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-emerald-400/20 text-center text-gray-400">
          <p>© {new Date().getFullYear()} بصيرة التحليل. جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}
