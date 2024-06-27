"use client";

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration / 10);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.ceil(start));
      }, 10);

      return () => clearInterval(counter);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className='text-4xl font-bold text-[#002315]'>
      {count}{suffix}
    </div>
  );
};

export default Counter;
