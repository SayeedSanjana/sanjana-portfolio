import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const cursorRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // Scroll animations
  const backgroundImageOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.04],
    [0, 1]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.04], [0, -80]);
  const wheelY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const wheelOpacity = useTransform(scrollYProgress, [0.02, 0.1], [0, 1]);
  const wheelScale = useTransform(scrollYProgress, [0.01, 0.04], [0.7, 1.2]);
  const stats = [
    { number: "+2", label: "Years of Experience" },
    { number: "+5", label: "Projects Completed" },
    { number: "+10", label: "Technologies Mastered" },
  ];

  // Mouse tracking for blob
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-24 bg-white">
      {/* Email Sidebar */}
      <div className="hidden md:flex flex-col items-center fixed left-8 top-32 z-30">
        <div className="text-gray-600 text-sm tracking-widest rotate-90 origin-bottom-left">
          <Typewriter
            words={["sanjanasayeed68@gmail.com"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="w-px h-20 bg-gray-400 mt-4"></div>
      </div>

      {/* Background Image */}
      <motion.div
        style={{
          opacity: backgroundImageOpacity,
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className="absolute inset-0 z-0"
      />

      {/* Blob following mouse */}
      <motion.div
        className="fixed top-0 left-0 w-72 h-72 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full mix-blend-multiply blur-3xl pointer-events-none z-10"
        animate={{
          x: mouse.x - 150,
          y: mouse.y - 150,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}
        style={{
          opacity: 1,
          boxShadow: "0 0 60px 20px rgba(147, 51, 234, 0.4)",
          filter: "blur(50px)",
          backdropFilter: "blur(20px)",
        }}
      />

      {/* Wheel */}
      <motion.div
        style={{
          y: wheelY,
          rotate: wheelRotate,
          opacity: wheelOpacity,
          scale: wheelScale,
        }}
        className="absolute top-[70%] sm:top-[60%] md:top-1/2 left-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
      >
        <img
          src="/wheel.svg"
          alt="Wheel"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-purple-500 opacity-90 pointer-events-none blur-sm"
        animate={{
          x: mouse.x - 12,
          y: mouse.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{
          zIndex: isHoveringImage ? 50 : 0,
          boxShadow: "0 0 20px 8px rgba(139, 92, 246, 0.6)",
        }}
      />

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto p-8 cursor-none"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
          <div className="min-h-[120px]">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Hey, I'm{" "}
              <span className="inline-block min-w-[250px] text-purple-800">
                <Typewriter
                  words={["Sanjana Sayeed"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
            Software Engineer | Fullstack Developer
          </h2>
          <p className="text-gray-600">
            I'm a passionate Software Engineer with expertise in fullstack
            development, specializing in React.js, Node.js, Vue.js, and Python.
            With hands-on experience building scalable applications, cloud
            platforms, and AI-driven solutions, I transform ideas into
            efficient, user-centric products. Let’s create something incredible
            together!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/SanjanaSayeed--Resume.pdf"
              target="_blank"
              className="button-effect cursor-none"
            >
              <span className="button-effect-content">View Resume</span>
            </a>
            <a
              href="mailto:sanjanasayeed68@gmail.com"
              className="button-effect cursor-none"
            >
              <span className="button-effect-content">Contact Me</span>
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
            className="flex flex-wrap justify-center lg:justify-start gap-12 mt-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                  hidden: { scale: 0.8 },
                  visible: {
                    scale: 1,
                    transition: { duration: 0.6, delay: index * 0.2 },
                  },
                }}
                className="text-center"
              >
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-800 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <div
          className="relative mt-10 lg:mt-0 group w-[300px] sm:w-[400px] md:w-[500px] flex items-center justify-center"
          onMouseEnter={() => setIsHoveringImage(true)}
          onMouseLeave={() => setIsHoveringImage(false)}
        >
          <div className="absolute w-80 h-80 bg-gradient-radial from-purple-400/70 to-transparent opacity-0 scale-75 blur-3xl rounded-full transition-all duration-700 group-hover:opacity-100 group-hover:scale-100" />
          <img
            src="/sanjana1.png"
            alt="Sanjana Sayeed"
            className="relative w-full h-auto animate-float z-10"
          />
        </div>
      </motion.div>
    </div>
  );
}
