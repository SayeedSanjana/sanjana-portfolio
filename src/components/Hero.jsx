import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const cursorRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  // 🎯 Scroll animations — FASTER and smoother
  const backgroundImageOpacity = useTransform(
    scrollYProgress,
    [0.01, 0.04],
    [0, 1]
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.04], [0, -80]);
  const wheelY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const wheelRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const wheelOpacity = useTransform(scrollYProgress, [0.01, 0.04], [0, 1]);
  const wheelScale = useTransform(scrollYProgress, [0.01, 0.04], [0.7, 1.2]);

  // Mouse tracking
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
          backgroundImage: "url('/hero-bg.png')", // Update your image path if needed
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

      {/* Wheel (fade + move + rotate + scale) */}
      <motion.div
        style={{
          y: wheelY,
          rotate: wheelRotate,
          opacity: wheelOpacity,
          scale: wheelScale,
        }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
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
        className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-8 cursor-none"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="min-h-[120px]">
            <h1 className="text-5xl font-extrabold text-gray-900">
              Hey, I'm{" "}
              <span className="inline-block min-w-[250px] text-purple-600">
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
          <h2 className="text-2xl font-semibold text-gray-700">
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
          <div className="flex gap-4">
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
        </div>

        {/* Right Side - Profile Image */}
        <div
          className="relative mt-10 md:mt-0 group w-[600px] h-auto flex items-center justify-center"
          onMouseEnter={() => setIsHoveringImage(true)}
          onMouseLeave={() => setIsHoveringImage(false)}
        >
          <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-purple-400/70 to-transparent opacity-0 scale-75 blur-3xl rounded-full transition-all duration-700 group-hover:opacity-100 group-hover:scale-100" />
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
