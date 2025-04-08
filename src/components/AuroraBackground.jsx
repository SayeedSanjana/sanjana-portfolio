import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  const containerRef = useRef(null); // Using useRef for the container
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [height, setHeight] = useState(0);

  // Set height on scroll event
  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <div
      className={`relative flex h-full flex-col items-center justify-center text-slate-950 ${className}`}
      ref={containerRef} // Reference to container
      {...props}
    >
      {/* Aurora Effect Background with Glassmorphism */}
      <div
        className="absolute inset-0 overflow-hidden backdrop-blur-lg bg-white/30 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(100deg, #a1f0e5 10%, #f7c5d9 20%, #b5b0f4 30%, #ffb7da 40%, #8bb8f7 50%, #d7a8f7 60%, #f3c1f5 70%, #c2f0e1 80%)",
          backgroundSize: "200% 200%",
          animation: "aurora 30s linear infinite",
          opacity: 0.35,
          filter: "blur(12px)",
        }}
      ></div>

      {/* Removed the rotating wheel SVG */}

      {children}
    </div>
  );
};

export default AuroraBackground;
