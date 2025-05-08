import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const navLinks = [
    { text: "About Me", href: "#home" },
    { text: "Work Experience", href: "#work-experience" },
    { text: "Skills and Expertise", href: "#skills-and-expertise" },
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#education" },
    { text: "Hackathons", href: "#hackathons" },
    { text: "Publications", href: "#publications" },
    { text: "Volunteering and Leadership", href: "#volunteers" },
    { text: "Github Journey", href: "#github" },
  ];

  // Disable scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const slideVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Navbar Top Right */}
      <div className="fixed top-0 right-0 z-50 flex items-center justify-end p-4 w-full">
        <div className="flex gap-4 items-center">
          <div className="hidden sm:flex gap-4">
            <a
              href="https://github.com/SayeedSanjana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sanjana-sayeed-917b12135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/sanjanasayeed/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/sanjana.sayeed.98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-purple-800 hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>

          {!isOpen && (
            <button
              className="text-purple-600 text-5xl md:text-4xl"
              onClick={handleOpen}
            >
              <HiMenuAlt3 />
            </button>
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
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Sliding Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-3/4 md:w-1/3 bg-white bg-opacity-60 backdrop-blur-2xl shadow-2xl rounded-l-3xl flex flex-col justify-between py-10 px-6 z-50"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-purple-600 text-5xl md:text-4xl"
              onClick={handleClose}
            >
              <HiX />
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-purple-700 text-xl md:text-2xl text-center font-semibold hover:text-purple-800"
                  onClick={handleClose}
                >
                  {link.text}
                </a>
              ))}
            </div>

            {/* Social Icons inside Drawer for Mobile */}
            <div className="flex justify-center gap-6 pt-8 sm:hidden">
              <a
                href="https://github.com/SayeedSanjana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-black"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/sanjana-sayeed-917b12135"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/sanjanasayeed/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/sanjana.sayeed.98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-700 hover:text-blue-600"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
