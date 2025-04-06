import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles"; // Import particles
import AuroraBackground from "./AuroraBackground"; // Import the AuroraBackground component

// Array of tech icons
const techIcons = [
  "https://img.icons8.com/color/48/000000/javascript.png", // JavaScript
  "https://img.icons8.com/color/48/000000/nodejs.png", // Node.js
  "https://img.icons8.com/color/48/000000/react-native.png", // React Native
  "https://img.icons8.com/color/48/000000/nextjs.png", // Next.js
  "https://img.icons8.com/color/48/000000/git.png", // Git
  "https://img.icons8.com/color/48/000000/docker.png", // Docker
  "https://img.icons8.com/color/48/000000/typescript.png", // TypeScript
  "https://img.icons8.com/color/48/000000/sass.png", // Sass
  "https://img.icons8.com/color/48/000000/flask.png", // Flask
  "https://img.icons8.com/color/48/000000/express.png", // Express.js
  "https://img.icons8.com/color/48/000000/mysql-logo.png", // MySQL
  "https://img.icons8.com/color/48/000000/mongodb.png", // MongoDB
  "https://img.icons8.com/color/48/000000/redis.png", // Redis
  "https://img.icons8.com/color/48/000000/spring-logo.png", // Spring Boot
  "https://img.icons8.com/color/48/000000/amazon-web-services.png", // AWS
  "https://img.icons8.com/color/48/000000/vue-js.png", // Vue.js
  "https://img.icons8.com/ios/50/000000/postgresql.png", // PostgreSQL
  "https://img.icons8.com/ios/50/000000/sqlite.png", // SQLite
  "https://img.icons8.com/color/48/000000/.net-core.png", // .NET Core
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

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <AuroraBackground className="relative z-0 py-10">
      {/* Particles background */}
      <Particles
        id="particles-js"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // Full viewport height
          zIndex: -1, // Ensure particles are behind the content
        }}
        options={{
          particles: {
            number: {
              value: 40, // Reduced the number of particles for better performance
              density: { enable: true, value_area: 800 },
            },
            shape: {
              type: "circle", // Shape of particles
            },
            size: {
              value: 3, // Particle size
              random: true, // Random sizes
            },
            move: {
              speed: 1, // Speed of particle movement
              direction: "none", // Allows particles to move in random directions
              outMode: "out", // Particles go outside of the canvas bounds
            },
          },
        }}
      />

      <h2 className="text-3xl md:text-4xl font-bold text-purple-600 text-center mb-10 z-10">
        Skills and Expertise
      </h2>

      {/* Skills Section Content with Glassmorphism */}
      <div className="w-full max-w-screen-lg overflow-hidden z-10">
        <div className="relative w-full max-w-screen-lg py-20 flex flex-col items-center justify-center backdrop-blur-[25px] bg-white/30 rounded-xl shadow-lg z-10">
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
