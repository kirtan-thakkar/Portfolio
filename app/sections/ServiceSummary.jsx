"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummaryPage = () => {
  const titleService1Ref = useRef(null);
  const titleService2Ref = useRef(null);
  const titleService3Ref = useRef(null);
  const titleService4Ref = useRef(null);

  useGSAP(() => {
    // Check if refs are available before creating animations
    if (
      !titleService1Ref.current ||
      !titleService2Ref.current ||
      !titleService3Ref.current ||
      !titleService4Ref.current
    )
      return;

    gsap.from(titleService1Ref.current, {
      xPercent: 20,
      duration: 1,
      scrollTrigger: {
        trigger: titleService1Ref.current,
        scrub: true,
      },
    });

    gsap.to(titleService2Ref.current, {
      xPercent: -30,
      scrollTrigger: {
        trigger: titleService2Ref.current,
        scrub: true,
      },
    });

    gsap.to(titleService3Ref.current, {
      xPercent: 100,
      scrollTrigger: {
        trigger: titleService3Ref.current,
        scrub: true,
      },
    });

    gsap.to(titleService4Ref.current, {
      xPercent: -100,
      scrollTrigger: {
        trigger: titleService4Ref.current,
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <div>
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive ">
          <div ref={titleService1Ref}>
            <p>Architecture</p>
          </div>
          <div
            ref={titleService2Ref}
            className="flex justify-center items-center gap-3 translate-x-16 "
          >
            <p className="font-normal">Development</p>
            <div className="w-10 h-1 md:w-32 bg-[#FFD700]" />
            <p>Deployment</p>
          </div>
          <div
            ref={titleService3Ref}
            className="flex justify-center items-center gap-3 -translate-x-48"
          >
            <p>APIs</p>
            <div className="w-10 h-1 md:w-32 bg-[#FFD700]" />
            <p className="italic">Full Stack Development</p>
            <div className="w-10 h-1 md:w-32 bg-[#FFD700]" />
            <p>Scalability</p>
          </div>
          <div ref={titleService4Ref} className="translate-x-48 ">
            <p>Databases</p>
          </div>
        </section>
      </div>
    </>
  );
};
export default ServiceSummaryPage;
