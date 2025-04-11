import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
  });

  // Softer parallax
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden overflow-x-hidden overflow-y-hidden pt-12 pb-8 w-full"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-full bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900"
        style={{ y: parallaxY }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-between"
        >
          {/* Left Section */}
          <div className="mb-10 md:mb-0 md:w-1/2 space-y-4 mt-4">
            <motion.h4
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-semibold text-white"
            >
              Let's keep in touch!
            </motion.h4>

            <motion.h5
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-purple-200"
            >
              Find me on any platform. I will get back to you as soon as possible!
            </motion.h5>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/sanjana-sayeed/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-50 text-blue-600 p-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="https://github.com/SayeedSanjana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-50 text-gray-800 p-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-50 text-blue-800 p-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-50 text-pink-500 p-3 rounded-full shadow-lg hover:bg-purple-100 transition duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-8 md:w-1/2 justify-start md:justify-end mt-4">
            {/* Useful Links */}
            <div>
              <h6 className="uppercase text-purple-300 text-sm font-bold mb-4">
                Useful Links
              </h6>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-purple-200 hover:text-white transition">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-purple-200 hover:text-white transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-purple-200 hover:text-white transition">
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h6 className="uppercase text-purple-300 text-sm font-bold mb-4">
                Resources
              </h6>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/SayeedSanjana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="/SanjanaSayeed--Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sanjanasayeed68@gmail.com"
                    className="text-purple-200 hover:text-white transition"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <hr className="my-8 border-purple-600" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-sm text-purple-300">
            © {new Date().getFullYear()} Sanjana Sayeed | All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
