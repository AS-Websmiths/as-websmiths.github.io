/* eslint-disable no-unused-vars */
// components/RotatingRing.jsx
import React from "react";
import { motion } from "framer-motion";
import icons from "./IconList.jsx";
import OrbitIcon from "./OrbitIcon";

const RotatingRing = () => {
  return (
    <motion.div
      className="icon-ring"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 20,
      }}
    >
      {icons.map(({ component: Component, color }, i) => {
        if (!Component) {
          // Helps you debug which icon is missing
          console.error(`Icon at index ${i} is undefined. Check your IconList.js exports.`);
          return null;
        }
        return (
          <OrbitIcon key={i} index={i} total={icons.length}>
            <Component size={28} color={color} />
          </OrbitIcon>
        );
      })}
    </motion.div>
  );
};

export default RotatingRing;
