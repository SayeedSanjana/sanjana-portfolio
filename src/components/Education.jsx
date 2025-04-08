import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

const EducationTimeline = () => {
  const { scrollYProgress } = useScroll();

  // Parallax effect for background movement
  const parallaxEffect = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <div className="education-section py-0 h-screen relative" id="education">
      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/bg-img2.png")', // Replace with your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: parallaxEffect, // Applying parallax effect here
        }}
      >
        <div className="absolute inset-0 bg-opacity-10 bg-purple-200"></div>{" "}
        {/* Optional dark overlay */}
      </motion.div>

      {/* Centered Education content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-20">
            Education
          </h2>

          {/* Timeline Section */}
          <div className="relative">
            <motion.div
              className="absolute top-0 left-0 w-[4px] bg-purple-300" // Styling the line
              style={{
                height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), // Animate the height
              }}
            ></motion.div>

            {/* Timeline Items */}
            <div className="space-y-16 px-4">
              <TimelineItem
                title="Master of Engineering in Software Engineering"
                institution="Concordia University, Montreal, Canada"
                date="Winter 2023 - Fall 2024"
                courses={[
                  "Distributed System Design",
                  "Total Quality Methodologies in Engineering",
                  "Software Quality Assurance",
                  "Advanced Programming Practices",
                  "Software Comprehension and Maintenance",
                  "Software Project Management",
                  "Problem and Program Solving",
                  "Software Design Methodologies",
                  "Software Requirements Specification",
                  "Software Measurement",
                ]}
              />
              <TimelineItem
                title="Bachelor of Science in Computer Science and Engineering"
                institution="Brac University, Dhaka, Bangladesh"
                date="Spring 2017 - Fall 2020"
                courses={[
                  "Data Structures",
                  "Algorithms",
                  "Database Systems",
                  "Artificial Intelligence",
                  "System Analysis and Design",
                  "Software Engineering",
                  "Digital Signal Processing",
                  "Discrete Mathematics",
                  "Computer Architecture",
                  "Computer Graphics",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, institution, date, courses }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, x: -100 }, // Slide from left
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit="hidden"
      variants={itemVariants}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex  space-x-4"
    >
      <div className="w-4 h-4 bg-purple-600 rounded-full mt-1 z-10"></div>
      <div className="flex-1  text-left">
        <h3 className="text-xl font-bold text-purple-600">{title}</h3>
        <p className="text-lg text-gray-700">{institution}</p>
        <p className="text-sm text-gray-600 mb-4">{date}</p>

        {/* Notable Courses */}
        <div className="text-center mb-8">
          <div className="flex justify-start gap-4 flex-wrap">
            {courses.map((course, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-600 px-4 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-sm font-semibold shadow-md"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Container variants for points
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2, // Increased delay to slow down the appearance of the points
      staggerChildren: 0.6, // Increased delay to slow down each point's appearance
    },
  },
};

// Timeline point component
function TimelinePoint({ text }) {
  return (
    <motion.div
      variants={pointVariants}
      className="relative flex items-start gap-6"
    >
      <div className="flex flex-col items-start">
        {" "}
        {/* Points aligned to the left */}
        <div className="w-3.5 h-3.5 bg-purple-500 border-2 border-purple-300 rounded-full z-10" />
      </div>
      <p className="text-purple-700 text-sm md:text-base leading-relaxed max-w-[600px]">
        {text}
      </p>
    </motion.div>
  );
}

// Point animation
const pointVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default EducationTimeline;
