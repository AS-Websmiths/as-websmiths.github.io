// components/OrbitIcon.jsx
import React from "react";

const OrbitIcon = ({ children, index, total }) => {
  const angle = (360 / total) * index;
  const radius = 130; // Adjust for larger/smaller circles

  const x = radius * Math.cos((angle * Math.PI) / 180);
  const y = radius * Math.sin((angle * Math.PI) / 180);

  return (
    <div
      className="orbit-icon"
      style={{
        position: "absolute",
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {children}
    </div>
  );
};

export default OrbitIcon;
