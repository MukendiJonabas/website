"use client";
import { useState, useEffect, useRef } from "react";

const IncrementOnVisible = () => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            setCount((prevCount) => {
              if (prevCount < 100) {
                return prevCount + 1;
              }
              clearInterval(intervalId);
              return prevCount;
            });
          }, 20);

          return () => clearInterval(intervalId);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center w-full h-auto bg-green-800 justify-center  p-5">
      <div
        ref={elementRef}
        className="p-5 m-5 md:m-5 md:p-5 text-center text-white bg-transparent w-auto"
      >
        <p className="font-medium text-7xl">+{count % 7} M..</p>
        <span className="font-medium"> des gens solicitent nos service</span>
      </div>
      <div
        ref={elementRef}
        className="p-5 m-5 md:m-5 md:p-5 text-center text-white bg-transparent w-auto"
      >
        <p className="font-medium text-7xl">+{count % 18} M..</p>
        <span className="font-medium">
          {" "}
          des gens solicitent sont satisfait de nos service
        </span>
      </div>
      <div
        ref={elementRef}
        className="p-5 m-5 md:m-5 md:p-5 text-center text-white bg-transparent w-auto"
      >
        <p className="font-medium text-7xl">+{count % 6} M..</p>
        <span className="font-medium"> des gens visitents nos service</span>
      </div>
      <div
        ref={elementRef}
        className="p-5 m-5 md:m-5 md:p-5 text-center text-white bg-transparent w-auto"
      >
        <p className="font-medium text-7xl">+{count % 11} M..</p>
        <span className="font-medium">
          {" "}
          des gens se fidelisent à nos service
        </span>
      </div>
    </div>
  );
};

export default IncrementOnVisible;
