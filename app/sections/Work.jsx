"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const worksRef = useRef(null);
  const completedRef = useRef(null);
  const ongoingRef = useRef(null);
  
  const text = `Crafted with precision and passion,
    each project showcases innovation
    and attention to detail.`;

  useGSAP(() => {
    // Animate completed project card
    gsap.fromTo(completedRef.current, {
      y: 80,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: completedRef.current,
        start: "top 85%",
      },
    });

    // Animate ongoing project card
    gsap.fromTo(ongoingRef.current, {
      y: 80,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ongoingRef.current,
        start: "top 85%",
      },
    });

    // Hover animations for cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  // Completed project
  const completedProject = {
    title: "Darsh Dental Clinic",
    description: "A modern, full-stack healthcare platform featuring an elegant UI, appointment management, and comprehensive service showcase for a professional dental clinic.",
    url: "https://www.darshdentalclinic.com",
    status: "Live",
    tech: ["Next.js", "React", "Tailwind CSS", "GSAP", "Framer Motion"]
  };

  // Ongoing project
  const ongoingProject = {
    title: "AI Budget Tracker",
    description: "An intelligent personal finance application powered by AI to help users track expenses, analyze spending patterns, and make smarter financial decisions.",
    status: "90% Complete",
    tech: ["Next.js", "React", "Node.js", "MongoDB", "OpenAI", "Tailwind CSS"]
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      
      {/* Works Content */}
      <div ref={worksRef} className="flex-1 px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
          
          {/* Completed Project Section */}
          <div ref={completedRef}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h3 className="text-sm md:text-base uppercase tracking-[0.3em] text-black/50 font-light">
                Completed Project
              </h3>
            </div>
            
            <a 
              href={completedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block group"
            >
              <div className="relative overflow-hidden border-2 border-black/20 rounded-2xl md:rounded-3xl p-6 md:p-10 transition-all duration-500 hover:border-black/60 hover:shadow-2xl bg-gradient-to-br from-white/50 to-transparent">
                {/* Status Badge */}
                <div className="absolute top-6 md:top-8 right-6 md:right-8">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-700 text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    {completedProject.status}
                  </span>
                </div>

                <div className="pr-24 md:pr-32">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {completedProject.title}
                  </h2>
                  
                  <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed mb-6 max-w-3xl">
                    {completedProject.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {completedProject.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 text-xs md:text-sm uppercase tracking-wider bg-black/5 text-black/70 rounded-full border border-black/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Link */}
                  <div className="flex items-center gap-2 text-black/80 group-hover:text-black transition-colors">
                    <span className="text-base md:text-lg font-light tracking-wide">Visit Website</span>
                    <Icon 
                      icon="lucide:arrow-up-right" 
                      className="size-5 md:size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                    />
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <Icon icon="lucide:sparkles" className="size-5 text-black/30" />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
          </div>

          {/* Ongoing Project Section */}
          <div ref={ongoingRef}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
              <h3 className="text-sm md:text-base uppercase tracking-[0.3em] text-black/50 font-light">
                In Development
              </h3>
            </div>
            
            <div className="project-card relative overflow-hidden border-2 border-black/15 rounded-2xl md:rounded-3xl p-6 md:p-10 bg-gradient-to-br from-amber-50/30 to-transparent">
              {/* Status Badge */}
              <div className="absolute top-6 md:top-8 right-6 md:right-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-sm font-medium">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse" />
                  {ongoingProject.status}
                </span>
              </div>

              <div className="pr-24 md:pr-32">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4">
                  {ongoingProject.title}
                </h2>
                
                <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed mb-6 max-w-3xl">
                  {ongoingProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {ongoingProject.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 text-xs md:text-sm uppercase tracking-wider bg-black/5 text-black/70 rounded-full border border-black/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="max-w-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-black/50 font-light tracking-wide">Progress</span>
                    <span className="text-sm text-black/70 font-medium">90%</span>
                  </div>
                  <div className="h-2 bg-black/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-1000"
                      style={{ width: '90%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Coming Soon Badge */}
              <div className="mt-8 flex items-center gap-3 text-black/50">
                <Icon icon="lucide:rocket" className="size-5" />
                <span className="text-sm font-light tracking-wide">Launching Soon</span>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <p className="text-lg md:text-xl text-black/50 font-light mb-6">
              Interested in working together?
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 group rounded-full"
            >
              <span className="text-base md:text-lg font-light tracking-wide">Let's Connect</span>
              <Icon icon="lucide:arrow-right" className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Works;