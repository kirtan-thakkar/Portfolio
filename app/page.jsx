"use client";
import Hero from "./sections/Hero";
import Navbar from "@/components/Navbar";
import ServiceSummaryPage from "./sections/ServiceSummary";
import ServicePage from "./sections/Services";
import { ReactLenis } from "lenis/react";
import AboutPage from "./sections/About";
import Works from "./sections/Work";
import ContactSummaryPage from "./sections/ContactSummary";
import ContactPage from "./sections/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setHasMounted(true);

    let rafId;
    let finishTimeoutId;
    let failsafeTimeoutId;

    const start = performance.now();
    const durationMs = 2500;

    const tick = (now) => {
      const elapsed = now - start;
      const nextProgress = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(nextProgress);

      if (nextProgress < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        finishTimeoutId = setTimeout(() => setIsLoaded(true), 300);
      }
    };

    rafId = requestAnimationFrame(tick);

    const handleLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad, { once: true });
    }

    // Failsafe: never let the loader block the UI indefinitely.
    failsafeTimeoutId = setTimeout(() => setIsLoaded(true), 6000);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (finishTimeoutId) clearTimeout(finishTimeoutId);
      if (failsafeTimeoutId) clearTimeout(failsafeTimeoutId);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="relative w-screen min-h-screen">
        {hasMounted && !isLoaded && (
          <div className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
            <p className="mb-4 text-xl tracking-widest animate-pulse">
              Loading {Math.floor(progress)}%
            </p>
            <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
              <div
                className="absolute left-0 h-full transition-all duration-300 bg-white"
                style={{ 
                  top: "0px",
                  width: `${progress}%` 
                }}
              ></div>
            </div>
          </div>
        )}
        <div
          className={`${
            isLoaded ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <nav className="z-[-1]">
            <Navbar />
          </nav>
          <main>
            <Hero />
            <ServiceSummaryPage />
            <ServicePage />
            <AboutPage />
            <Works />
            <ContactSummaryPage />
            <ContactPage />
          </main>
        </div>
      </div>
    </ReactLenis>
  );
}
