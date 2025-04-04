import { motion } from "framer-motion"; // Add this import statement

export default function Skills() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center py-20 px-6 bg-gradient-to-r from-purple-700 to-purple-900 text-white"
      id="skills"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 to-indigo-800 opacity-50"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Skills & Expertise
      </h2>

      {/* Skills Carousel */}
      <motion.div
        className="relative flex gap-6 overflow-hidden w-full max-w-7xl mx-auto"
        animate={{
          x: ["0%", "-100%", "0%"], // Creates the effect of continuous scrolling
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10, // Control the speed here
            ease: "linear",
          },
        }}
      >
        <div className="flex gap-10">
          {/* Skill 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">
              Programming Languages
            </h3>
            <p>Python, Java, JavaScript, PHP, HTML/CSS</p>
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Database</h3>
            <p>MySQL, MongoDB, SQLite3, PostgreSQL, Redis</p>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">
              Technologies/Frameworks
            </h3>
            <p>
              Node.js, Spring Boot, Express.js, Vue.js, React.js, React Native,
              Typescript, Django, TailwindCSS, Flask, .NET
            </p>
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Tools</h3>
            <p>Git, Eclipse, Maven, Github, LaTeX, Figma, Docker, JUnit</p>
          </div>

          {/* Skill 5 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Data Analytics</h3>
            <p>Scikit-learn, Pandas, Numpy</p>
          </div>

          {/* Skill 6 */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">Cloud Platforms</h3>
            <p>DigitalOcean, Netlify, Vercel</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
