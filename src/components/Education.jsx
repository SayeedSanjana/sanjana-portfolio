import React, { useRef } from "react";
import { motion, useScroll, useInView, useTransform } from "framer-motion";

const EducationTimeline = () => {
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
      id="education"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/bg-img2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          y: parallaxEffect,
        }}
      >
        <div className="absolute inset-0 bg-purple-50/20" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-20">
            Education
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* --- Vertical Fixed Line --- */}
            <div className="absolute top-0 left-6 md:left-6 w-[2px] h-full bg-purple-300" />

            <div className="space-y-16 pl-8 md:pl-16">
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
      <div className="w-4 h-4 bg-purple-600 rounded-full mt-2" />

      {/* Content */}
      <div className="flex-1 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-purple-600">
          {title}
        </h3>
        <p className="text-lg text-gray-700">{institution}</p>
        <p className="text-sm text-gray-600 mb-4">{date}</p>

        {/* Courses */}
        <div className="mb-8 flex flex-wrap gap-3">
          {courses.map((course, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-600 px-3 py-2 hover:bg-purple-200 transition duration-300 border border-purple-300 rounded-full text-xs md:text-sm font-semibold shadow-sm"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationTimeline;
