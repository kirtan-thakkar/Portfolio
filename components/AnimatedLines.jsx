import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState,  } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AnimatedLines = ({ text, className }) => {
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  useGSAP(()=>{
    if(lineRefs.current.length>0){
        gsap.from(lineRefs.current,{
            y:100,
            opacity:0,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger :{
                trigger : containerRef.current, // triggers when the container ref enter the view port of the screen 
            }
        })
    }

  },[])

  return (


    <div ref={containerRef} className={className}>
      {lines.map((line, index) => {
        return (
          <span ref={(el)=>(lineRefs.current[index]=el)}
            key={index}
            className="block leading-relaxed tracking-wide text-pretty "
          >
            {line}
          </span>
        );
      })}
    </div>
  );
};
export default AnimatedLines;
