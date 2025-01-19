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
  sdaiaIcon,
  tawuniyaIcon,
  jarasIcon,
  umIcon,
  seaIcon,
  birmaIcon
} from "../assets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

// Copy the entire Home component from landing.tsx
export default function Home() {
  const [isMobile, setIsMobile] = useState(true);
  const partners = [
    { name: "خدمات الشرق الاوسط", logo: mesiotIcon },
    { name: "HUBUP", logo: hubspotIcon },
    { name: "تمت للمزادات", logo: tamtIcon },
    { name: "اوتاد العقارية", logo: awtadIcon },
    { name: "اساس الثبات", logo: asasIcon },
    { name: "ديار العقارية", logo: diarIcon },
    { name: "مدرب", logo: mudptIcon },
  ];

  const experiences = [
    { name: "سدايا", logo: sdaiaIcon },
    { name: "التعاونية", logo: tawuniyaIcon },
    { name: "جرس", logo: jarasIcon },
    { name: "جامعة المعرفة", logo: umIcon },
    { name: "جمعية الاقتصاد", logo: seaIcon },
    { name: "شركة بيرما", logo: birmaIcon }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        className="p-2 md:p-6 fixed w-full z-50 backdrop-blur-lg bg-gray-900/50 border-b border-emerald-400/20 shadow-lg shadow-emerald-400/10"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <motion.h1
            className="text-xl md:text-3xl font-black bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent"
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: isMobile ? 0.95 : 1 }}
          >
            بصيرة التحليل
          </motion.h1>

          <nav className="flex space-x-reverse space-x-2 md:space-x-8 text-xs md:text-base">
            {["عن الشركة", "المنتجات", "شركاؤنا", "اتصل بنا"].map((item) => (
              <motion.a
                key={item}
                href={`#${item === "عن الشركة"
                  ? "about"
                  : item === "المنتجات"
                    ? "products"
                    : item === "شركاؤنا"
                      ? "partners"
                      : "contact"
                  }`}
                className="relative px-4 py-2 font-medium text-gray-100"
                whileHover={{ scale: isMobile ? 1 : 1.1 }}
                whileTap={{ scale: isMobile ? 0.95 : 1 }}
              >
                <motion.span
                  className="absolute inset-0 bg-emerald-400/10 rounded-lg -z-10 hidden md:block"
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
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 md:px-0 md:py-2 pt-20 md:pt-0">
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
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    x: isMobile ? 10 : 0,
                  }}
                  transition={{ type: "spring" }}
                >
                  تحويل
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r h-20 from-emerald-400 to-emerald-300 bg-clip-text text-transparent font-extrabold"
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    x: isMobile ? 10 : 0,
                  }}
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
                  className="px-8 py-4 bg-emerald-400  rounded-full hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-400/30 font-medium"
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
                    d={`M ${100 + i * 50} ${100 + i * 30} Q ${200 + i * 20} ${150 + i * 20
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

      {/* Services & Expertise Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-emerald-400"
          >
            خدماتنا واختصاصاتنا
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              //   {
              //     title: "الذكاء الاصطناعي",
              //     description:
              //       "نوظف تقنيات الذكاء الاصطناعي لتحسين العمليات وتقديم حلول مبتكرة",
              //     icon: "🤖",
              //     features: [
              //       "معالجة اللغات الطبيعية",
              //       "التعلم الآلي",
              //       "تحليل البيانات المتقدم",
              //     ],
              //   },
              {
                title: "حلول السحابة",
                description:
                  "نقدم خدمات سحابية متكاملة لتحسين أداء وكفاءة أعمال عملائنا",
                icon: "☁️",
                features: [
                  "هندسة السحابة",
                  "إدارة البنية التحتية",
                  "التكامل مع الأنظمة المختلفة",
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-emerald-400/20 hover:border-emerald-400/40 transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400">
                      <span className="text-emerald-400 ml-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Expertise Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2"
              >
                15+
              </motion.div>
              <div className="text-gray-300">سنوات خبرة</div>
            </motion.div>

            {/* Founding Partners */}
            {[
              {
                name: "عبدالله بن عبدالرحمن",
                title: "شريك مؤسس",
                desc: "مهندس برمجيات متميز مع خبرة واسعة في تطوير الحلول التقنية المبتكرة وإنترنت الأشياء وقيادة فرق التطوير. متخصص في تطوير البرمجيات المتقدمة وأنظمة إنترنت الأشياء",
              },
              {
                name: "راكان القريني",
                title: "شريك مؤسس",
                desc: "مهندس برمجيات متميز مع خبرة عميقة في تصميم وتطوير البنية التحتية السحابية والأنظمة المتقدمة. متخصص في البنية التحتية السحابية وتطوير البرمجيات",
              },
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center bg-gray-800/50 p-6 rounded-xl border border-emerald-400/20"
              >
                <h3 className="text-xl font-bold text-emerald-400 mb-2">
                  {founder.name}
                </h3>
                <div className="text-gray-300 mb-3">{founder.title}</div>
                <p className="text-gray-400 text-sm">{founder.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Partners Section - Sleek Grid Layout with Larger Icons */}
      <section
        id="partners"
        className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">
            خبرات الفريق
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 4}
            onSwiper={(swiper) => {
              // Add mouseenter and mouseleave event listeners
              swiper.el.addEventListener("mouseenter", () =>
                swiper.autoplay.stop()
              );
              swiper.el.addEventListener("mouseleave", () =>
                swiper.autoplay.start()
              );
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            //   bulletActiveClass:
            //     "swiper-pagination-bullet-active bg-emerald-400",
            // }}
            // navigation
            loop={true}
            className="pb-12 px-4"
          >
            {experiences.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: -5,
                  }}
                  className="relative bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-gray-800/30 
                    backdrop-blur-md border border-emerald-400/10 hover:border-emerald-400/30
                    p-8 md:p-10 rounded-3xl shadow-xl flex items-center justify-center 
                    transition-all duration-300 min-h-[200px] md:min-h-[220px]
                    group overflow-hidden isolate"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Ambient Light Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  />

                  {/* Shimmer Effect */}
                  <div
                    className="absolute -inset-[500px] group-hover:animate-[spin_8s_linear_infinite] bg-gradient-to-r 
                    from-transparent via-emerald-400/5 to-transparent rotate-45 -z-10"
                  />

                  {/* Glass Reflection */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"
                  />

                  {/* Partner Logo with 3D Effect */}
                  <motion.div
                    whileHover={{ rotateY: 10, z: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 md:h-20 w-auto object-contain transition-all duration-300 
                        group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]"
                    />
                  </motion.div>

                  {/* Partner Name with Floating Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent 
                      backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 
                      transition-transform duration-500 ease-out"
                  >
                    <p
                      className="text-center text-sm font-medium bg-gradient-to-r from-emerald-400 to-emerald-300 
                      bg-clip-text text-transparent"
                    >
                      {partner.name}
                    </p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Subtitle */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-lg">
           
            </p>
          </div>
        </motion.div>
      </section>

      {/* Products Section with Larger Cards */}
      <section id="products" className="py-8 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-8 md:mb-12">
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
              desc: "صُممت منصتنا لتزويدك بالأدوات الذكية والفعالة التي تساعدك في تحليل الأسواق وفهم الفرص الواعدة. نعتمد على تقنيات الذكاء الاصطناعي وبيوت الخبرة لتحليل القوائم المالية للشركات وإجراء التحليلات الفنية",
              features: [
                " أدوات لتحليل السوق",
                "أكثر من مئات الفرصة استثمارية يومياً",
                " تنبيهات فورية للفرص الاستثمارية",
                "تحليل الأسهم والعملات",
                "تحليل القطاعات والأسهم القيادية",
              ],
              gradient: "from-emerald-300 to-emerald-400",
              link: "https://dblplat.co",
              icon: dblplatIcon,
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: isMobile ? 1 : 1.02,
                rotateX: isMobile ? 0 : 5,
                rotateY: isMobile ? 0 : -5,
              }}
              className="relative group cursor-pointer"
              onClick={() => window.open(product.link, "_blank")}
            >
              <div
                className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-emerald-600/5
                backdrop-blur-sm border border-emerald-400/20 hover:border-emerald-400/40
                transition-all duration-300 h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-emerald-400">
                    {product.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 relative"
                  >
                    <Image
                      src={product.icon}
                      alt={product.title}
                      layout="fill"
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                <p className="text-lg text-gray-300 mb-6">{product.desc}</p>

                <ul className="space-y-3">
                  {product.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-400"
                    >
                      <span className="text-emerald-400">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="absolute bottom-6 right-6 text-emerald-400">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
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
        </motion.div>
      </section>

      {/* Partners Section - Sleek Grid Layout with Larger Icons */}
      <section
        id="partners"
        className="py-12 md:py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">
            عملاؤنا
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 4}
            onSwiper={(swiper) => {
              // Add mouseenter and mouseleave event listeners
              swiper.el.addEventListener("mouseenter", () =>
                swiper.autoplay.stop()
              );
              swiper.el.addEventListener("mouseleave", () =>
                swiper.autoplay.start()
              );
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            //   bulletActiveClass:
            //     "swiper-pagination-bullet-active bg-emerald-400",
            // }}
            // navigation
            loop={true}
            className="pb-12 px-4"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    rotateX: 5,
                    rotateY: -5,
                  }}
                  className="relative bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-gray-800/30 
                    backdrop-blur-md border border-emerald-400/10 hover:border-emerald-400/30
                    p-8 md:p-10 rounded-3xl shadow-xl flex items-center justify-center 
                    transition-all duration-300 min-h-[200px] md:min-h-[220px]
                    group overflow-hidden isolate"
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Ambient Light Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                  />

                  {/* Shimmer Effect */}
                  <div
                    className="absolute -inset-[500px] group-hover:animate-[spin_8s_linear_infinite] bg-gradient-to-r 
                    from-transparent via-emerald-400/5 to-transparent rotate-45 -z-10"
                  />

                  {/* Glass Reflection */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"
                  />

                  {/* Partner Logo with 3D Effect */}
                  <motion.div
                    whileHover={{ rotateY: 10, z: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      className="h-16 md:h-20 w-auto object-contain transition-all duration-300 
                        group-hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]"
                    />
                  </motion.div>

                  {/* Partner Name with Floating Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/95 via-gray-900/70 to-transparent 
                      backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 
                      transition-transform duration-500 ease-out"
                  >
                    <p
                      className="text-center text-sm font-medium bg-gradient-to-r from-emerald-400 to-emerald-300 
                      bg-clip-text text-transparent"
                    >
                      {partner.name}
                    </p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Subtitle */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-lg">
              نحن فخورون بالثقة التي منحنا إياها شركاؤنا من مختلف القطاعات.
            </p>
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
              <p style={{ direction: "ltr", float: "right" }}>+966 568 584 311</p>
              <p>info@bassiratahlil.com</p>
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
