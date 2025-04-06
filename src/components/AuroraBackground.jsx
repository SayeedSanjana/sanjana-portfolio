import React from "react";

const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <main>
      <div
        className={`relative flex h-[100vh] flex-col items-center justify-center text-slate-950 ${className}`}
        {...props}
      >
        {/* Aurora Effect Background with Glassmorphism */}
        <div
          className="absolute inset-0 overflow-hidden backdrop-blur-lg bg-white/30 z-0" // Glassmorphism applied here
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, #a1f0e5 10%, #f7c5d9 20%, #b5b0f4 30%, #ffb7da 40%, #8bb8f7 50%, #d7a8f7 60%, #f3c1f5 70%, #c2f0e1 80%)", // More frequent and multicolor gradient
            backgroundSize: "200% 200%", // Increase frequency of the effect
            animation: "aurora 30s linear infinite", // Continuous aurora animation
            opacity: 0.35, // Darker effect
            filter: "blur(12px)", // Increased blur for smoothness
          }}
        >
          <div className="absolute -inset-[10px] opacity-60 mix-blend-difference dark:invert-0 pointer-events-none"></div>
        </div>

        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;
