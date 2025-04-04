import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experienceData = [
  {
    title: "Software Engineer I",
    date: "Sep 2021 - Oct 2022",
    company: "Rainier Technologies, Dhaka, Bangladesh",
    points: [
      "Developed a microservices-based cloud EHR system with modules for patient records, appointments, treatment management, prescriptions, and billing.",
      "Designed and implemented 300+ RESTful APIs using Node.js, Typescript, Express.js for seamless data exchange.",
      "Built Vue.js-based dashboards for clinicians and administrators, improving usability and efficiency.",
      "Optimized performance with Redis caching, reducing database queries for doctor and medicine information by 40%.",
      "Implemented CI/CD pipelines (GitHub Actions, Docker), reducing deployment time by 25%.",
      "Designed and maintained secure authentication and authorization (JWT, OAuth2, Role-Based Access Control).",
      "Optimized MongoDB queries, reducing response time by 30%.",
      "Worked in an Agile (Scrum) environment, delivering 3+ microservices-based modules per sprint through continuous collaboration with cross-functional teams.",
    ],
  },
  {
    title: "Software Engineer Intern",
    date: "Mar 2021 - Aug 2021",
    company: "Rainier Technologies, Dhaka, Bangladesh",
    points: [
      "Assisted in microservices architecture design, improving modularity and maintainability.",
      "Developed backend functionalities using Java and Node.js, ensuring high-performance data handling and API responsiveness.",
      "Proficiently translated Figma prototypes into front-end code and constructed templates, using Tailwind CSS.",
      "Conducted data processing for a dental clinic, processing 5,000 patient records and 50,000 billing entries.",
      "Also optimized appointment scheduling and reduced data cleaning time by 40% using Python scripts",
    ],
  },
];

export default function WorkExperienceTimelineCards() {
  // Parallax effect for background image
  const { scrollYProgress } = useScroll();
  const backgroundImageY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center py-20 px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg-img.png')", // Background image path
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Parallax effect on background */}
      <motion.div
        style={{
          y: backgroundImageY, // Applying the parallax effect here
        }}
        className="absolute inset-0 z-0"
      ></motion.div>

      {/* Softer faded overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-600 text-center mb-20">
          Work Experience
        </h2>

        <div className="relative max-w-7xl w-full flex flex-col md:flex-row md:justify-center md:gap-10 gap-20">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  // ✨ Left or right animation depending on index
  const sideVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100, // left or right
    },
    show: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit="hidden"
      variants={sideVariants}
      transition={{ duration: 1.5, ease: "easeOut" }} // Slower transition
      className="relative min-h-[600px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col gap-8 overflow-hidden w-full md:max-w-xl"
    >
      {/* Title and Date */}
      <div>
        <h3 className="text-2xl font-bold text-purple-600">{item.title}</h3>
        <p className="text-purple-700 text-sm md:text-base">
          {item.date} | {item.company}
        </p>
      </div>

      {/* Timeline container */}
      <motion.div
        className="relative flex flex-col gap-8 mt-6 pl-1.5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: "100%" } : { height: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-3 w-px bg-purple-400"
        />

        {/* Points */}
        {item.points
          .filter((point) => point.trim() !== "")
          .map((point, index) => (
            <TimelinePoint key={index} text={point} />
          ))}
      </motion.div>
    </motion.div>
  );
}

// Container variants for points
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.8, // Increased delay for slower reveal
      staggerChildren: 0.25, // Slower stagger for points
    },
  },
};

// Each timeline point
function TimelinePoint({ text }) {
  return (
    <motion.div
      variants={pointVariants}
      className="relative flex items-start gap-6"
    >
      {/* Circle */}
      <div className="flex flex-col items-center">
        <div className="w-3.5 h-3.5 bg-purple-500 border-2 border-purple-300 rounded-full z-10" />
      </div>
      {/* Text */}
      <p className="text-purple-700 text-sm md:text-base leading-relaxed max-w-[600px]">
        {text}
      </p>
    </motion.div>
  );
}

// Animation for each point
const pointVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
