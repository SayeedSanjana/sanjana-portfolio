import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GithubBentoStats() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for background
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      id="github"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-50 to-white py-24"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{
          y: bgY,
          backgroundImage: 'url("/bg-img2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.05,
        }}
        className="absolute inset-0"
      >
        {/* Optional tint layer */}
        <div className="absolute inset-0 bg-purple-50/30" />
      </motion.div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-16 relative z-10"
      >
        GitHub Journey
      </motion.h2>

      {/* Bento Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* GitHub Stats */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-3xl bg-white/20 backdrop-blur-md p-6 shadow-xl hover:shadow-purple-300 flex flex-col items-center"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=SayeedSanjana&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="rounded-lg w-full"
          />
        </motion.div>

        {/* GitHub Trophies */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="rounded-3xl bg-white/20 backdrop-blur-md p-6 shadow-xl hover:shadow-purple-300 flex flex-col items-center"
        >
          <img
            src="https://github-profile-trophy.vercel.app/?username=SayeedSanjana&theme=tokyonight&no-bg=true&no-frame=true&row=2&column=3"
            alt="GitHub Trophies"
            className="rounded-lg w-full"
            style={{
              transform: "scale(0.8)", // slightly smaller than before
              transformOrigin: "center",
            }}
          />
        </motion.div>

        {/* GitHub Streak */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="rounded-3xl bg-white/20 backdrop-blur-md p-6 shadow-xl hover:shadow-purple-300 flex flex-col items-center"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=SayeedSanjana&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
            className="rounded-lg w-full"
          />
        </motion.div>
      </div>

      {/* GitHub Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
        className="relative z-10 mt-24 w-full flex justify-center"
      >
        <motion.img
          src="https://ghchart.rshah.org/5e4db0/SayeedSanjana"
          alt="GitHub Contribution Chart"
          className="w-[95%] md:w-[95%] lg:w-[90%] xl:w-[80%] max-w-[1200px] h-auto rounded-3xl shadow-md mb-20 lg:mb-40"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            filter:
              "drop-shadow(0 0 8px rgba(128, 90, 213, 0.3)) brightness(0.95)",
          }}
        />
      </motion.div>
    </section>
  );
}
