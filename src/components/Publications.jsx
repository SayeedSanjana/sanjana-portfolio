import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Publication = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxEffect = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const publications = [
    {
      title:
        "Shapley-Additive-Explanations-Based Factor Analysis for Dengue Severity Prediction using Machine Learning",
      description:
        "Dengue is a major public health concern in tropical and subtropical regions, often leading to severe conditions such as Dengue Haemorrhagic Fever (DHF) and Dengue Shock Syndrome (DSS). In this study, we leverage machine learning approaches to analyze two real-world datasets from Vietnam and Bangladesh. We apply supervised learning techniques, particularly XGBoost coupled with SHAP explainability, to structured data for predictive modeling, while utilizing unsupervised hierarchical clustering to uncover hidden patterns within unstructured clinical datasets, aiming to identify critical factors associated with disease severity.",
      tech: "Shapley Additive Explanation | XGBoosting | Hierarchical clustering | Supervised | Unsupervised",
    },
  ];

  return (
    <div
      id="publications"
      ref={sectionRef}
      className="relative py-28 min-h-screen overflow-visible"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg-img3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          y: parallaxEffect,
          opacity: bgOpacity,
        }}
      >
        <div className="absolute inset-0 bg-purple-50/10" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col justify-center min-h-[80vh]">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300 text-center mb-24">
          Publication
        </h2>

        {publications.map((publication, index) => (
          <FeaturedPublicationCard key={index} {...publication} />
        ))}
      </div>
    </div>
  );
};

const FeaturedPublicationCard = ({ title, description, tech }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 100 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="relative flex flex-col xl:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg overflow-visible"
    >
      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="flex-1 text-white text-center xl:text-left xl:pr-72"
      >
        <h3 className="text-2xl font-bold mb-4 text-purple-300">{title}</h3>
        <p className="text-base mb-6 text-gray-300">{description}</p>
        <p className="text-sm text-purple-400">{tech}</p>
      </motion.div>

      {/* Right Floating Card */}
      {/* Different placement depending on screen size */}
      <div className="hidden xl:block absolute right-[-100px] top-1/2 transform -translate-y-1/2">
        {/* Floating card for XL and bigger */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 20px 40px rgba(170, 100, 255, 0.4)",
            transition: { duration: 0.4 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="w-[320px] h-[600px] bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-6 p-6 cursor-pointer"
        >
          <FloatingCardContent />
        </motion.div>
      </div>

      {/* Card below text for screens smaller than XL */}
      <div className="block xl:hidden w-full flex justify-center">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 20px 40px rgba(170, 100, 255, 0.4)",
            transition: { duration: 0.4 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="w-[320px] h-[600px] bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-6 p-6 cursor-pointer mt-8"
        >
          <FloatingCardContent />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Floating Card Content
const FloatingCardContent = () => (
  <div className="text-white text-center space-y-4">
    <p className="text-lg font-semibold">
      PMID: <span className="font-normal">36135395</span>
    </p>

    <div>
      <a
        href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9506144/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-purple-300 transition"
      >
        PMCID: PMC9506144
      </a>
    </div>

    <div>
      <a
        href="https://www.mdpi.com/2313-433X/8/9/229"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-purple-300 transition"
      >
        DOI: 10.3390/jimaging8090229
      </a>
    </div>

    <div className="pt-6">
      <a
        href="https://github.com/SayeedSanjana/ShapleyAdditiveExplanationsBasedFactorAnalysis-DengueSeverityPrediction-ML"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 text-sm font-bold text-purple-700 bg-white rounded-full border-2 border-purple-500 hover:bg-purple-600 hover:text-white transition duration-300 shadow-md"
      >
        Visit GitHub
      </a>
    </div>
  </div>
);


export default Publication;
