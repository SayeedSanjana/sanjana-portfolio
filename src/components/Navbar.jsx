import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [iconSpin, setIconSpin] = useState(false);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 18 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 100, y: 20 }, // Start right + little down
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.3, // Slower and smoother
        duration: 0.8, // Long smooth floaty
        type: "spring", // Soft spring effect
        stiffness: 50, // Soft bounce
        damping: 12, // Slow stop
      },
    }),
    exit: { opacity: 0, x: 100, transition: { duration: 0.4 } }, // Exit smoothly
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.6, ease: "easeOut" },
    },
  };

  const handleOpen = () => {
    setIconSpin(true);
    setTimeout(() => {
      setIsOpen(true);
      setIconSpin(false);
    }, 400);
  };

  const handleClose = () => {
    setIconSpin(true);
    setTimeout(() => {
      setIsOpen(false);
      setIconSpin(false);
    }, 400);
  };

  return (
    <>
      {/* Navbar Top Right */}
      <div className="fixed top-0 right-0 z-50 flex items-center justify-end p-4 w-full">
        <div className="flex gap-4 items-center">
          {/* Social Icons - hidden on mobile */}
          <div className="hidden sm:flex gap-4">
            <a
              href="https://github.com/SayeedSanjana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-black transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sanjana-sayeed-917b12135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-blue-600 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/sanjanasayeed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-pink-500 transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/sanjana.sayeed.98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-blue-600 transition-all"
            >
              <FaFacebook />
            </a>
          </div>

          {/* Hamburger */}
          {!isOpen && (
            <motion.div
              className="p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.button
                className="text-purple-600 text-5xl md:text-4xl focus:outline-none"
                onClick={handleOpen}
                animate={{ rotate: iconSpin ? 90 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <HiMenuAlt3 />
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Blur Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 md:w-1/3 bg-white bg-opacity-60 backdrop-blur-2xl shadow-2xl rounded-l-3xl flex flex-col justify-between py-10 px-6 z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <motion.button
              className="absolute top-6 right-6 text-purple-600 text-5xl md:text-4xl focus:outline-none"
              onClick={handleClose}
              animate={{ rotate: iconSpin ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <HiX />
            </motion.button>

            {/* Navigation Links */}
            <div className="flex flex-col gap-8">
              {[
                "Home",
                "Work Experience",
                "Skills and Expertise",
                "Projects",
                "Education",
                "Hackathons and Competition",
                "Publications",
              ].map((text, index) => (
                <motion.a
                  key={text}
                  href={`#${text.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-purple-700 text-xl text-center md:text-2xl font-semibold hover:text-purple-800 transition-all duration-300"
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index}
                  onClick={handleClose}
                >
                  {text}
                </motion.a>
              ))}
            </div>

            {/* Social Icons inside drawer (only visible here for mobile) */}
            <motion.div
              className="flex justify-center gap-6 pt-8 sm:hidden"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <a
                href="https://github.com/SayeedSanjana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-black transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/sanjana-sayeed-917b12135"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-blue-600 transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-pink-500 transition-all"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-blue-600 transition-all"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
