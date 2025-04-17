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
      className="education-section py-24 min-h-screen relative overflow-hidden"
      id="education"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          y: parallaxEffect,
          backgroundImage: 'url("/bg-img2.png")',
        }}
      >
        <div className="absolute inset-0 bg-purple-50/20" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-20">
            Education
          </h2>

          {/* Timeline Container */}
          <div className="relative pl-10 md:pl-16">
            {/* Vertical Line */}
            <div className="absolute top-0 left-2 md:left-4 w-[2px] h-full bg-purple-300" />

            {/* Timeline Items */}
            <div className="space-y-16">
              <TimelineItem
                title="Master of Engineering in Software Engineering"
                institution="Concordia University, Montreal, Canada"
                date="2023 - 2024"
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
                date="2017 - 2020"
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
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative flex items-start gap-4"
    >
      {/* Year Indicator with Dot */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute -left-28 md:-left-36 top-0"
      >
        <div className="flex flex-col items-center space-y-1">
          <div className="text-sm md:text-base text-purple-700 font-bold bg-purple-100 border border-purple-300 rounded-full px-3 py-1 shadow-md">
            {date}
          </div>
          {/* <div className="w-2 h-2 bg-purple-700 rounded-full" /> */}
        </div>
      </motion.div>

      {/* Timeline Bullet */}
      <div className=" mt-2" />

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
