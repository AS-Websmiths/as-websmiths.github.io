import React, { useEffect, useRef } from 'react';
import './SemiOval.css';

const SemiOval = () => {
  const svgRef = useRef(null);

  // Function to update position
  const updatePosition = () => {
    if (svgRef.current) {
      const height = svgRef.current.getBoundingClientRect().height;
      svgRef.current.style.marginTop = `-${height}px`;
    }
  };

  useEffect(() => {
    updatePosition(); // Initial call

    window.addEventListener('resize', updatePosition); // Listen for resize

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      viewBox="0 0 1280 70"
      fill="none"
      className = 'semiOval'
    >
      <path
        d="M643.699 -0.005101L710.573 0.364938L776.714 1.54621L841.399 3.52577L903.919 6.28194L963.588 9.7845L1019.75 13.9951L1071.8 18.8676L1119.15 24.3486L1161.3 30.3781L1197.77 36.8899L1228.18 43.8129L1252.18 51.071L1262.68 55.785C1265.21 56.9226 1267.57 58.4141 1269.69 60.215L1279.76 68.7951C1279.91 68.9251 1280 69.1155 1280 69.3159V69.3159C1280 69.6937 1279.69 70 1279.32 70L0.625434 70C0.279984 70 -2.42569e-05 69.72 -2.42563e-05 69.3745V69.3745C-2.4256e-05 69.1439 0.12684 68.932 0.330097 68.8232L14 61.5L35.273 51.7553L59.2673 44.4701L89.6651 37.513L126.134 30.9601L168.273 24.8833L215.622 19.349L267.661 14.418L323.821 10.1442L383.486 6.57457L446.002 3.74811L510.684 1.6958L576.825 0.440144L643.699 -0.005101Z"
        fill="white"
      />
    </svg>
  );
};

export default SemiOval;
