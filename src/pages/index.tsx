"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  mesiotIcon,
  hubspotIcon,
  asasIcon,
  diarIcon,
  awtadIcon,
  tamtIcon,
  mudptIcon,
  qunatekIcon,
  wslahIcon,
  dblplatIcon
} from "../assets";
import { FaWhatsapp } from "react-icons/fa";

// Copy the entire Home component from landing.tsx
export default function Home() {
  const [isMobile, setIsMobile] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const partners = [
    { name: "خدمات الشرق الاوسط", logo: mesiotIcon },
    { name: "HUBUP", logo: hubspotIcon },
    { name: "تمت للمزادات", logo: tamtIcon },
    { name: "اوتاد العقارية", logo: awtadIcon },
    { name: "اساس الثبات", logo: asasIcon },
    { name: "ديار العقارية", logo: diarIcon },
    { name: "مدرب", logo: mudptIcon },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check system preference for dark mode
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="relative min-h-screen bg-brand-white dark:bg-brand-dark transition-colors duration-300"
      style={{ direction: "rtl" }}
    >
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="fixed top-4 left-4 z-50 p-2 rounded-full bg-brand-white dark:bg-brand-dark/50 border border-brand-cyan/20 dark:border-brand-cyan/30 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </motion.button>

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,199,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,199,255,0.15),transparent_50%)]" />
        {/* Dark theme grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,199,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,199,255,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(0,199,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,199,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Header with Enhanced Effects */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="p-2 md:p-6 backdrop-blur-lg bg-brand-white/70 dark:bg-brand-dark/70 border-b border-brand-cyan/20 dark:border-brand-cyan/30 shadow-lg shadow-brand-cyan/10 dark:shadow-brand-cyan/20 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <motion.h1
            className="text-xl md:text-3xl font-black bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent flex flex-col md:flex-row items-center gap-2"
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: isMobile ? 0.95 : 1 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-cyan/20 dark:bg-brand-cyan/30 blur-xl rounded-full" />
              <Image
                src={qunatekIcon}
                alt="logo"
                width={100}
                height={100}
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
              />
            </div>
            <span className="text-brand-dark dark:text-brand-white relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-right">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 dark:from-brand-cyan/30 dark:to-brand-purple/30 blur-lg -z-10" />
              كوانتك
            </span>
          </motion.h1>

          <nav className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
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
                className="relative px-2 sm:px-4 py-2 font-medium text-brand-dark dark:text-brand-white group text-center md:text-right"
                whileHover={{ scale: isMobile ? 1 : 1.1 }}
                whileTap={{ scale: isMobile ? 0.95 : 1 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 dark:from-brand-cyan/20 dark:to-brand-purple/20 rounded-lg -z-10 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navbar-hover"
                />
                <span className="relative z-10">{item}</span>
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 md:px-0 md:py-2">
        <motion.div className="absolute inset-0 z-0">
          {/* Enhanced 3D Grid Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,199,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,199,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              transform:
                "perspective(1000px) rotateX(60deg) translateY(-100px)",
            }}
          />
          {/* Ambient Light Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,199,255,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,199,255,0.2),transparent_70%)]" />
        </motion.div>

        <motion.div className="relative w-full max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
            {/* Enhanced Text Content */}
            <motion.div className="space-y-4 md:space-y-6 relative text-right">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-cyan drop-shadow-lg relative"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 dark:from-brand-cyan/30 dark:to-brand-purple/30 blur-2xl -z-10" />
                <motion.span
                  className="block text-4xl sm:text-5xl md:text-7xl font-extrabold text-brand-cyan relative"
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    x: isMobile ? -10 : 0,
                  }}
                  transition={{ type: "spring" }}
                >
                  تحويل
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-brand-cyan  to-brand-purple bg-clip-text text-transparent font-extrabold relative pb-10 pt-5"
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    x: isMobile ? -10 : 0,
                  }}
                  transition={{ type: "spring" }}
                >
                  المستقبل الرقمي
                </motion.span>
              </motion.h1>

              <p className="text-lg sm:text-xl text-brand-dark dark:text-brand-white leading-relaxed font-light text-right relative   ">
                <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 blur-xl -z-10" />
                نقدم حلولاً مبتكرة تجمع بين التكنولوجيا المتقدمة والذكاء
                الاصطناعي
                <span className="text-brand-cyan font-medium"> لتحسين </span>
                تجربة عملائنا
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col sm:flex-row gap-4 justify-end"
              >
                <a
                  href="#products"
                  className="relative px-6 sm:px-8 py-3 sm:py-4 bg-brand-yellow text-brand-dark rounded-full hover:bg-brand-yellow/80 transition-all shadow-lg shadow-brand-yellow/30 font-medium text-center group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-yellow/50 to-brand-yellow/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">استكشف منتجاتنا</span>
                </a>
                <a
                  href="#about"
                  className="relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-brand-cyan text-brand-cyan rounded-full hover:bg-brand-cyan/10 transition-all font-medium text-center group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">تعرف علينا</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Enhanced 3D Elements Group */}
            <motion.div className="relative h-[300px] md:h-[500px] hidden md:flex items-center justify-center">
              {/* Enhanced Floating Particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    opacity: [0, 1, 0],
                    scale: [1, 1.5, 1],
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
                    filter: "blur(1px)",
                  }}
                />
              ))}

              {/* Enhanced Main 3D Card */}
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
                {/* Enhanced Card Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan to-brand-purple rounded-2xl shadow-2xl dark:shadow-brand-cyan/20" />
                <div className="absolute inset-1 bg-gradient-to-br from-brand-white/95 to-brand-white/90 dark:from-brand-dark/95 dark:to-brand-dark/90 rounded-xl backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 rounded-2xl blur-xl opacity-50" />

                {/* Enhanced Interactive Elements */}
                <motion.div
                  className="absolute inset-4 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Enhanced Animated Lines */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 rounded-full mb-3"
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

                  {/* Enhanced Glowing Orb */}
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
                    className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-brand-cyan/30 to-brand-purple/30 rounded-full"
                    style={{
                      filter: "blur(8px)",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Enhanced Secondary Elements */}
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
                className="absolute z-10 w-60 h-60 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-2xl backdrop-blur-sm"
                style={{
                  right: "15%",
                  top: "20%",
                  transformStyle: "preserve-3d",
                  transform: "perspective(1000px) rotateY(-10deg)",
                }}
              />

              {/* Enhanced Decorative Elements */}
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
                className="absolute z-0 w-40 h-40 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 rounded-full blur-xl"
                style={{
                  left: "20%",
                  bottom: "20%",
                }}
              />

              {/* Enhanced Network Lines */}
              <svg className="absolute inset-0 w-full h-full z-10 opacity-20">
                {[...Array(3)].map((_, i) => (
                  <motion.path
                    key={i}
                    d={`M ${100 + i * 50} ${100 + i * 30} Q ${200 + i * 20} ${
                      150 + i * 20
                    }, ${300 + i * 30} ${200 + i * 40}`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className="text-brand-cyan"
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
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00c7ff" />
                    <stop offset="100%" stopColor="#ab84f7" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent dark:via-brand-cyan/10 -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-brand-white dark:bg-brand-dark/50 p-8 md:p-12 rounded-2xl border border-brand-cyan/20 dark:border-brand-cyan/30 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 dark:from-brand-cyan/20 dark:to-brand-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-cyan drop-shadow-md pb-6 text-right relative"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 dark:from-brand-cyan/30 dark:to-brand-purple/30 blur-xl -z-10" />
                نحن نبتكر المستقبل
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-brand-dark dark:text-brand-white leading-relaxed text-right mb-8"
              >
                كوانتك هي شركة تقنية سعودية رائدة تقود ثورة التحول الرقمي في
                المنطقة. نحن نجمع بين أحدث التقنيات والحلول المبتكرة لخلق مستقبل
                رقمي أكثر كفاءة وتطوراً. نسعى دائماً لتجاوز حدود الابتكار وإعادة
                تعريف ما هو ممكن في عالم التكنولوجيا، من خلال تقديم حلول متكاملة
                تلبي احتياجات عملائنا وتواكب تطلعاتهم المستقبلية.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "رؤيتنا",
                    description:
                      "نطمح لأن نكون رواد التحول الرقمي في المنطقة، ونقود ثورة التكنولوجيا نحو مستقبل أكثر تطوراً واستدامة",
                    icon: "🚀",
                  },
                  {
                    title: "رسالتنا",
                    description:
                      "نبتكر حلولاً تقنية متقدمة تلبي احتياجات عملائنا وتدفع عجلة التطور في مختلف القطاعات",
                    icon: "💫",
                  },
                  {
                    title: "قيمنا",
                    description:
                      "الابتكار المستمر، التميز التقني، الشفافية، والشراكة الاستراتيجية لبناء مستقبل رقمي أفضل",
                    icon: "✨",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-cyan/20 dark:border-brand-cyan/30 text-right relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="text-4xl mb-4"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-brand-cyan mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-dark dark:text-brand-white">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "نقاط قوتنا",
                    description:
                      "نتميز بخبرة عميقة في مجال التكنولوجيا، مع فريق من الخبراء المتميزين .",
                    icon: "💪",
                  },
                  {
                    title: "مستقبلنا",
                    description:
                      "نسعى لتوسيع نطاق ابتكاراتنا وتطوير حلول تقنية متقدمة تساهم في بناء مستقبل رقمي متطور ومستدام",
                    icon: "🔮",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-cyan/20 dark:border-brand-cyan/30 text-right relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-brand-cyan mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-dark dark:text-brand-white">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services & Expertise Section */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent dark:via-brand-cyan/10 -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-purple drop-shadow-md pb-8 text-right relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 dark:from-brand-purple/30 dark:to-brand-cyan/30 blur-xl -z-10" />
            خدماتنا واختصاصاتنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "استشارات تقنية",
                description:
                  "نقدم استشارات متخصصة في التحول الرقمي وتطوير استراتيجيات تقنية المعلومات للشركات",
                icon: "💡",
                features: [
                  "تحليل احتياجات العمل",
                  "استراتيجيات التحول الرقمي",
                  "حلول تقنية مخصصة",
                ],
              },
              {
                title: "تطوير البرمجيات",
                description:
                  "نطور حلول برمجية متكاملة باستخدام أحدث التقنيات لتلبية احتياجات عملائنا",
                icon: "⚡",
                features: [
                  "تطبيقات الويب",
                  "تطبيقات الموبايل",
                  "أنظمة إدارة المؤسسات",
                ],
              },
              {
                title: "الذكاء الاصطناعي والوكلاء الذكيون",
                description:
                  "نطور حلول ذكاء اصطناعي متقدمة ونبني وكلاء ذكيين لتحسين الأعمال واتخاذ القرار.",
                icon: "🤖",
                features: [
                  "حلول الذكاء الاصطناعي",
                  "تطوير وكلاء ذكيين",
                  "تحليل البيانات الذكي",
                ],
              },
              {
                title: "حلول السحابة",
                description:
                  "نقدم خدمات سحابية متكاملة لتحسين أداء وكفاءة أعمال عملائنا",
                icon: "☁️",
                features: [
                  "هندسة السحابة",
                  "إدارة البنية التحتية",
                  "أمن المعلومات",
                ],
              },
              {
                title: "إنترنت الأشياء",
                description:
                  "نطور حلول متكاملة لإنترنت الأشياء للمباني الذكية والمدن الذكية",
                icon: "🌐",
                features: [
                  "أنظمة المباني الذكية",
                  "أجهزة الاستشعار",
                  "التحكم الذكي",
                ],
              },
              {
                title: "تحليل البيانات",
                description:
                  "نحول البيانات إلى رؤى قيمة تساعد في اتخاذ القرارات الاستراتيجية",
                icon: "📊",
                features: ["تحليلات تنبؤية", "لوحات المعلومات", "تقارير ذكية"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-cyan/20 dark:border-brand-cyan/30 hover:border-brand-cyan/40 dark:hover:border-brand-cyan/50 transition-all text-right relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 dark:from-brand-cyan/20 dark:to-brand-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-cyan drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-brand-dark dark:text-brand-white mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-brand-dark dark:text-brand-white"
                      >
                        <span className="text-brand-cyan ml-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expertise Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-cyan/20 dark:border-brand-cyan/30 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 dark:from-brand-cyan/20 dark:to-brand-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl font-bold text-brand-cyan mb-2"
                >
                  10+
                </motion.div>
                <div className="text-brand-dark dark:text-brand-white">
                  سنوات خبرة
                </div>
              </div>
            </motion.div>

            {/* Founding Partners */}
            {[
              {
                name: "عبدالله بن عبدالرحمن",
                title: "شريك مؤسس",
                desc: "مهندس برمجيات متميز مع خبرة واسعة في تطوير الحلول التقنية المبتكرة وإنترنت الأشياء وقيادة فرق التطوير. متخصص في تطوير البرمجيات المتقدمة وأنظمة إنترنت الأشياء",
                icon: "👨‍💻",
              },
              {
                name: "راكان القريني",
                title: "شريك مؤسس",
                desc: "مهندس برمجيات متميز مع خبرة عميقة في تصميم وتطوير البنية التحتية السحابية والأنظمة المتقدمة. متخصص في البنية التحتية السحابية وتطوير البرمجيات",
                icon: "👨‍💻",
              },
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-cyan/20 dark:border-brand-cyan/30 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 dark:from-brand-cyan/20 dark:to-brand-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{founder.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-cyan drop-shadow-sm">
                    {founder.name}
                  </h3>
                  <div className="text-brand-dark dark:text-brand-white mb-3">
                    {founder.title}
                  </div>
                  <p className="text-brand-dark dark:text-brand-white text-sm">
                    {founder.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section with Larger Cards */}
      <section id="products" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent dark:via-brand-purple/10 -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-purple drop-shadow-md pb-8 text-right relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 dark:from-brand-purple/30 dark:to-brand-cyan/30 blur-xl -z-10" />
            منتجاتنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "وصلة",
                description:
                  "نظام ذكي لإدارة المباني يوفر التحكم الذكي والمراقبة المتقدمة باستخدام تقنيات إنترنت الأشياء",
                features: [
                  "إدارة ذكية للمباني عبر تطبيق موحد",
                  "تحكم آلي بالأقفال الذكية، الإضاءة، وأجهزة التكييف",
                  "تحليل متقدم يتيح توقع الصيانة وتقليل التكاليف",
                  "مراقبة مباشرة واستهلاك طاقة محسّن",
                  "تكامل سلس مع الأنظمة الأخرى لإدارة المباني",
                ],
                icon: wslahIcon,
                link: "https://wslah.co",
              },
              {
                title: "منصة دبل",
                description:
                  "منصة تحليل بيانات متقدمة تساعد الشركات على تحويل البيانات الضخمة إلى رؤى قابلة للتنفيذ باستخدام أدوات ذكاء اصطناعي متطورة",
                features: [
                  "تحليل البيانات باستخدام خوارزميات ذكاء اصطناعي متقدمة",
                  "إعداد تقارير مخصصة لتسهيل اتخاذ القرار",
                  "لوحات عرض تفاعلية تسلط الضوء على أهم المؤشرات",
                  "إمكانيات التنبؤ بالبيانات لتوقع المستقبل",
                  "دعم التكامل مع قواعد البيانات والأنظمة المختلفة",
                ],
                icon: dblplatIcon,
                link: "https://dblplat.co",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-purple/20 dark:border-brand-purple/30 hover:border-brand-purple/40 dark:hover:border-purple/50 transition-all text-right relative group cursor-pointer"
                onClick={() => window.open(product.link, "_blank")}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-cyan/5 dark:from-brand-purple/10 dark:to-brand-cyan/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 dark:from-brand-purple/20 dark:to-brand-cyan/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 md:w-20 md:h-20 relative"
                    >
                      <Image
                        src={product.icon}
                        alt={product.title}
                        className="object-contain"
                      />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-purple drop-shadow-sm">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-brand-dark dark:text-brand-white mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-brand-dark dark:text-brand-white"
                      >
                        <span className="text-brand-purple ml-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute bottom-6 left-6 text-brand-purple">
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      animate={{ x: [0, -5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Sleek Grid Layout with Larger Icons */}
      <section id="partners" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-yellow/5 to-transparent dark:via-brand-yellow/10 -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-yellow drop-shadow-md pb-8 text-right relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-yellow/20 to-brand-cyan/20 dark:from-brand-yellow/30 dark:to-brand-cyan/30 blur-xl -z-10" />
            شركاؤنا
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-yellow/20 dark:border-brand-yellow/30 hover:border-brand-yellow/40 dark:hover:border-brand-yellow/50 transition-all text-center relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-brand-cyan/5 dark:from-brand-yellow/10 dark:to-brand-cyan/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/10 to-brand-cyan/10 dark:from-brand-yellow/20 dark:to-brand-cyan/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotateY: 10, z: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="h-20 md:h-24 w-auto object-contain mb-4"
                    />
                  </motion.div>
                  <div className="mt-2 text-center font-bold text-brand-dark dark:text-brand-white text-base md:text-lg">
                    {partner.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      {/* <section id="contact" className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent dark:via-brand-cyan/10 -z-10" />
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-cyan drop-shadow-md pb-8 text-right relative"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 dark:from-brand-cyan/30 dark:to-brand-purple/30 blur-xl -z-10" />
            اتصل بنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-brand-white dark:bg-brand-dark/50 p-6 rounded-xl border border-brand-cyan/20 dark:border-brand-cyan/30 text-right relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 dark:from-brand-cyan/10 dark:to-brand-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 dark:from-brand-cyan/20 dark:to-brand-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-brand-cyan mb-4">
                  معلومات الاتصال
                </h3>
                <div className="space-y-4">
                  <p className="flex items-center text-brand-dark dark:text-brand-white">
                    <span className="text-brand-cyan ml-2">📍</span>
                    العنوان: الرياض، المملكة العربية السعودية
                  </p>
                  <p className="flex items-center text-brand-dark dark:text-brand-white">
                    <span className="text-brand-cyan ml-2">📞</span>
                    966 56 672 3503
                  </p>
                  <p className="flex items-center text-brand-dark dark:text-brand-white">
                    <span className="text-brand-cyan ml-2">✉️</span>
                    البريد الإلكتروني: info@qunatek.com
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Enhanced Footer */}
      <footer className="py-8 px-4 bg-brand-dark text-brand-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/5 to-transparent dark:via-brand-cyan/10 -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-right">
              <h3 className="text-xl font-bold mb-4">كوانتك</h3>
              <p className="text-brand-white/80">
                نحن نقدم حلولاً مبتكرة تجمع بين التكنولوجيا المتقدمة والذكاء
                الاصطناعي لتحسين تجربة عملائنا
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                {["عن الشركة", "المنتجات", "شركاؤنا", "اتصل بنا"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${
                          item === "عن الشركة"
                            ? "about"
                            : item === "المنتجات"
                            ? "products"
                            : item === "شركاؤنا"
                            ? "partners"
                            : "contact"
                        }`}
                        className="text-brand-white/80 hover:text-brand-cyan transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <div
                className="flex space-x-4 rtl:space-x-reverse justify-end flex-col gap-2"
                style={{ direction: "ltr" }}
              >
                {/* add whatsup icon  */}
                {[
                  {
                    icon: <FaWhatsapp />,
                    label: "واتساب",
                    value: "966 56 672 3503",
                  },
                  {
                    icon: "📧",
                    label: "بريد إلكتروني",
                    value: "info@qunatek.io",
                  },
                  { icon: "📞", label: "هاتف", value: "966 56 672 3503" },
                ].map((social) => (
                  <div key={social.label}>
                    <div className="flex justify-end items-center gap-4">
                      <span>{social.value}</span>
                      {social.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-brand-white/10 text-center text-brand-white/60">
            <p>© 2025 كوانتك. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
