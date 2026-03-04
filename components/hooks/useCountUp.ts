"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number; // Millisekunden
  start?: number;
  decimals?: number;
}

export function useCountUp({
  end,
  duration = 1800,
  start = 0,
  decimals = 0,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const diff = end - start;

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + diff * eased;

      setCount(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, end, start, duration, decimals]);

  return { count, ref };
}
