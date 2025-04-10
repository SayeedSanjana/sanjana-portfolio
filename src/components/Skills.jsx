import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground"; // Import the AuroraBackground component

// Array of tech icons (Skills)
const techIcons = [
  "https://img.icons8.com/color/48/000000/javascript.png", // JavaScript
  "https://img.icons8.com/color/48/000000/nodejs.png", // Node.js
  "https://img.icons8.com/color/48/000000/react-native.png", // React Native
  "https://img.icons8.com/color/48/000000/nextjs.png", // Next.js
  "https://img.icons8.com/color/48/000000/git.png", // Git
  "https://img.icons8.com/color/48/000000/docker.png", // Docker
  "https://img.icons8.com/color/48/000000/typescript.png", // TypeScript
  "https://img.icons8.com/color/48/000000/sass.png", // Sass
  "https://img.icons8.com/ios-filled/50/4E5D94/flask.png", // Flask (better)
  "https://img.icons8.com/color/48/000000/express.png", // Express.js (new better express icon)
  "https://img.icons8.com/color/48/000000/mysql-logo.png", // MySQL
  "https://img.icons8.com/color/48/000000/mongodb.png", // MongoDB
  "https://img.icons8.com/color/48/000000/redis.png", // Redis
  "https://img.icons8.com/color/48/000000/spring-logo.png", // Spring Boot
  "https://img.icons8.com/color/48/000000/amazon-web-services.png", // AWS
  "https://img.icons8.com/color/48/000000/vue-js.png", // Vue.js
  "https://img.icons8.com/color/48/000000/postgreesql.png", // ✅ Fixed PostgreSQL icon
  "https://img.icons8.com/ios/50/000000/sqlite.png", // SQLite
  "https://img.icons8.com/color/48/000000/bootstrap.png", // ✅ Bootstrap
  "/prisma.svg", // ✅ Prisma
  "/netcore.svg",
  "/Django.svg",
  "PHP.SVG", // ✅ Shadcn (manually upload if unavailable)
];

const Icon = React.memo(({ src, alt }) => (
  <div className="relative flex-shrink-0 group">
    <div className="icon-container overflow-hidden group-hover:scale-110 group-hover:shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-16 h-16 transition-transform duration-300 ease-in-out"
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
      <div className="w-full max-w-screen-lg overflow-hidden z-10">
        <div className="relative w-full max-w-screen-lg py-20 md:py-40 flex flex-col items-center justify-center  rounded-xl shadow-lg z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-10">
            Skills and Expertise
          </h2>

          {/* Row 1 */}
          <motion.div
            className="flex space-x-10 justify-center"
            animate={{ x: rowOffsets[0] }}
            transition={{ type: "tween", duration: 2 }}
          >
            {techIcons.slice(0, 8).map((icon, index) => (
              <Icon key={index} src={icon} alt={`Tech Icon ${index}`} />
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="flex space-x-10 justify-center mt-6"
            animate={{ x: rowOffsets[1] }}
            transition={{ type: "tween", duration: 2 }}
          >
            {techIcons.slice(8, 16).map((icon, index) => (
              <Icon key={index} src={icon} alt={`Tech Icon ${index + 8}`} />
            ))}
          </motion.div>

          {/* Row 3 */}
          <motion.div
            className="flex space-x-10 justify-center mt-6"
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
