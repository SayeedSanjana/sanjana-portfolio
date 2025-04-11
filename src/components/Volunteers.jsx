import React, { useRef } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";

const Volunteer = () => {
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
          opacity: 0.7, // 👈 reduce opacity for background image
        }}
      >
        <div className="absolute inset-0 bg-purple-50/30" /> {/* slight tint */}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-20">
            Volunteering and Leadership
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* --- Vertical Line --- */}
            <div className="absolute top-0 left-6 md:left-6 w-[2px] h-full bg-purple-300" />

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

const TimelineItem = ({
  title,
  institution,
  date,
  description,
  githubLink,
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
      </div>
    </motion.div>
  );
};

export default Volunteer;
