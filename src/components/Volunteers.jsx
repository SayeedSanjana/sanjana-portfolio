import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

const Volunteer = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="education-section py-0 min-h-screen relative" id="education">
      {/* Centered Volunteer content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-20">
            Volunteering And Leadership
          </h2>

          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline Vertical Line */}
            <motion.div
              className="absolute top-0 left-6 md:left-6 w-[2px] bg-purple-300"
              style={{
                height: useTransform(scrollYProgress, [0, 1], ["0%", "110%"]),
              }}
            ></motion.div>

            {/* Timeline Items */}
            <div className="space-y-16 pl-8 md:pl-16">
              <TimelineItem
                title="Bangladeshi Graduate Student Association"
                institution="President"
                date="Concordia University, Montreal, Canada"
                description="Served as President, leading the association's strategic initiatives, organizing cultural events, academic workshops, and fostering a supportive community for Bangladeshi students at Concordia University."
              />
              <TimelineItem
                title="Bangali Abhibashi Network: a Glocal Linguo-cultural Association"
                institution="Executive Director - Artistic Engagement"
                date="Montreal, Canada"
                description="Voluntarily developed the organization's portfolio website and content management system (CMS). Collaborated with editorial and visual teams to produce and publish a cultural magazine, overseeing content coordination, editorial workflows, and visual production."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ title, institution, date, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    show: { scale: [1.3, 1], transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      exit="hidden"
      variants={itemVariants}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex items-start space-x-4"
    >
      {/* Animated Circle */}
      <motion.div
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={circleVariants}
        className="w-4 h-4 bg-purple-600 rounded-full mt-2"
      ></motion.div>

      {/* Text Content */}
      <div className="flex-1 text-left">
        <h3 className="text-xl md:text-2xl font-bold text-purple-600">{title}</h3>
        <p className="text-lg text-gray-700">{institution}</p>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <p className="text-base text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default Volunteer;
