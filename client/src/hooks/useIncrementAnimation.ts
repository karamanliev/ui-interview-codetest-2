import { useState, useEffect } from "react";

export const useIncrementAnimation = (
  targetValue: number,
  duration: number = 800
): number => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOut * targetValue;

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(targetValue); // Ensure we end at exact value
      }
    };

    requestAnimationFrame(animate);
  }, [targetValue, duration]);

  return displayValue;
};
