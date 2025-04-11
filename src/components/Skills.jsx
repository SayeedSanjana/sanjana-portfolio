import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";

// Array of tech icons (Skills)
const techIcons = [
  "https://img.icons8.com/color/48/000000/javascript.png",
  "https://img.icons8.com/color/48/000000/nodejs.png",
  "https://img.icons8.com/color/48/000000/react-native.png",
  "https://img.icons8.com/color/48/000000/nextjs.png",
  "https://img.icons8.com/color/48/000000/git.png",
  "https://img.icons8.com/color/48/000000/docker.png",
  "https://img.icons8.com/color/48/000000/typescript.png",
  "https://img.icons8.com/color/48/000000/sass.png",
  "https://img.icons8.com/ios-filled/50/4E5D94/flask.png",
  "https://img.icons8.com/color/48/000000/express.png",
  "https://img.icons8.com/color/48/000000/mysql-logo.png",
  "https://img.icons8.com/color/48/000000/mongodb.png",
  "https://img.icons8.com/color/48/000000/redis.png",
  "https://img.icons8.com/color/48/000000/spring-logo.png",
  "https://img.icons8.com/color/48/000000/amazon-web-services.png",
  "https://img.icons8.com/color/48/000000/vue-js.png",
  "https://img.icons8.com/color/48/000000/postgreesql.png",
  "https://img.icons8.com/ios/50/000000/sqlite.png",
  "https://img.icons8.com/color/48/000000/bootstrap.png",
  "/prisma.svg",
  "/netcore.svg",
  "/Django.svg",
  "php.svg",
];

const Icon = React.memo(({ src, alt }) => (
  <div className="relative flex-shrink-0 group">
    <div className="icon-container overflow-hidden group-hover:scale-110 group-hover:shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 transition-transform duration-300 ease-in-out"
      />
      <div className="ripple-effect"></div> {/* Ripple effect */}
    </div>
  </div>
));

export default function SkillsSection() {
  const [rowOffsets, setRowOffsets] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRowOffsets((prev) =>
        prev.map((offset, index) => {
          if (index === 0) return offset === -50 ? 0 : offset - 50;
          if (index === 1) return offset === 50 ? 0 : offset + 50;
          return offset === -50 ? 0 : offset - 50;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuroraBackground className="relative z-0 py-10">
      <div className="w-full max-w-screen-lg overflow-hidden z-10 px-4 md:px-8">
        <div className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center rounded-xl  z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-10">
            Skills and Expertise
          </h2>

          {/* Row 1 */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center"
            animate={{ x: rowOffsets[0] }}
            transition={{ type: "tween", duration: 2 }}
          >
            {techIcons.slice(0, 8).map((icon, index) => (
              <Icon key={index} src={icon} alt={`Tech Icon ${index}`} />
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center mt-8"
            animate={{ x: rowOffsets[1] }}
            transition={{ type: "tween", duration: 2 }}
          >
            {techIcons.slice(8, 16).map((icon, index) => (
              <Icon key={index} src={icon} alt={`Tech Icon ${index + 8}`} />
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center mt-8"
            animate={{ x: rowOffsets[2] }}
            transition={{ type: "tween", duration: 2 }}
          >
            {techIcons.slice(16).map((icon, index) => (
              <Icon key={index} src={icon} alt={`Tech Icon ${index + 16}`} />
            ))}
          </motion.div>
        </div>
      </div>
    </AuroraBackground>
  );
}
