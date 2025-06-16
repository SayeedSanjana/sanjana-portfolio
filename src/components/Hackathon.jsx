import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

const Hackathon = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxEffect = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={sectionRef}
      className="education-section py-20 min-h-screen relative"
      id="hackathons"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/bg-img.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          y: parallaxEffect,
          opacity: 0.5,
        }}
      >
        <div className="absolute inset-0 bg-purple-50/30" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-20">
            Hackathons
          </h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-0 left-6 md:left-6 w-[2px] h-full bg-purple-300" />

            <div className="space-y-16 pl-8 md:pl-16">
              <TimelineItem
                title="CONUHACKS IX"
                institution="Concordia University, Montreal, Canada"
                date="February 2025"
                description="At ConUHacks, one of the largest collegiate hackathons in Canada held at Concordia University in Montreal, I had the opportunity to participate in SAP’s Wildfire Response Prediction Challenge — a company-sponsored competition aimed at leveraging AI for disaster management. Our team strategically selected this real-world challenge and built a real-time predictive model to anticipate wildfire spread and optimize emergency response strategies. Throughout the intense 24-hour event, I not only deepened my technical expertise in machine learning and real-time data analytics but also strengthened my adaptability and critical thinking skills under pressure. Above all, the experience reinforced the importance of effective collaboration, teamwork, and agile problem-solving in high-stakes, fast-paced environments."
                githubLink1="https://github.com/SayeedSanjana/conuhacks_sap_challenge"
                githubLink2="https://github.com/SayeedSanjana/conuhacks_sap_challenge_clientside"
                githubLink3="https://devpost.com/software/conuhacks_sap_challenge"
                techStack={[
                  "Python",
                  "Flask",
                  "React",
                  "Leaflet.js",
                  "TailwindCSS",
                  "Typescript",
                  "MongoDB",
                  "Pandas",
                  "Scikit-learn",
                  "Real-time Data Streams",
                  "Random Forest Model",
                ]}
              />
              <TimelineItem
                title="JACHacks"
                institution="John Abbott College, Montreal, Canada"
                date="April 2025"
                description="Doable is a progressive web application that I built during JACHacks to revolutionize the travel planning experience. Whether you're organizing a detailed itinerary or making spontaneous plans, Doable empowers users to turn travel ideas into safe, personalized adventures with the help of an AI companion. Featuring intelligent trip planning, real-time suggestions, and an instant 'Spontaneous Mode', it adapts to both planners and impulsive explorers. Doable ensures a seamless and secure experience for modern travelers who want to make every journey truly doable."
                githubLink1="https://github.com/SayeedSanjana/Doable/tree/main/doable-api"
                githubLink2="https://github.com/SayeedSanjana/Doable/tree/main/doable-app"
                githubLink3="https://devpost.com/software/doable"
                techStack={[
                  "Next.js",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express.js",
                  "TypeScript",
                  "Gemini AI",
                  "MongoDB Atlas",
                  "Auth0",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({
  title,
  institution,
  date,
  description,
  githubLink1,
  githubLink2,
  githubLink3,
  techStack,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit="hidden"
      variants={{
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex items-start space-x-4"
    >
      {/* Bullet */}
      <div className="w-4 h-4 bg-purple-600 rounded-full mt-2"></div>

      {/* Content */}
      <div className="flex-1 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-purple-600">
          {title}
        </h3>
        <p className="text-lg text-gray-700">{institution}</p>
        {date && <p className="text-sm text-gray-600 mb-4">{date}</p>}
        {description && (
          <p className="text-base text-gray-600 mb-4">{description}</p>
        )}

        {/* Tech Stack */}
        {techStack && techStack.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-purple-700 mb-2">Tech Stack:</h4>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="text-sm px-3 py-1 bg-purple-100 text-purple-800 rounded-full border border-purple-200"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* GitHub Buttons */}
        {(githubLink1 || githubLink2 || githubLink3) && (
          <div className="flex flex-wrap gap-4 mt-4">
            {githubLink1 && (
              <a
                href={githubLink1}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-purple-600 bg-white rounded-full border hover:bg-purple-600 hover:text-white border-purple-400 transition duration-300 shadow-md"
              >
                Visit GitHub (Server)
              </a>
            )}
            {githubLink2 && (
              <a
                href={githubLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-purple-600 bg-white rounded-full border hover:bg-purple-600 hover:text-white border-purple-400 transition duration-300 shadow-md"
              >
                Visit GitHub (Client)
              </a>
            )}
            {githubLink3 && (
              <a
                href={githubLink3}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold text-purple-600 bg-white rounded-full border hover:bg-purple-600 hover:text-white border-purple-400 transition duration-300 shadow-md"
              >
                Visit the Project
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Hackathon;
