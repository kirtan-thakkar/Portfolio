import AnimatedHeaderSection from "@/components/AnimatedHeaderSection";
import { socials } from "../constants";
import MarqueePage from "./Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ContactPage = () => {
  const text = `Got a question, have a project Idea?
    WE'D love to hear from you and discuss further!`;
    const items = ["just imagine, I code","just imagine, I code","just imagine, I code","just imagine, I code","just imagine, I code"
    ]
    useGSAP(()=>{
        gsap.from(".social-link",{
            y:100,
            opacity:0,
            delay:0.5,
            duration :1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger : ".social-link",
            }
        })
    },[])
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-between bg-black "
      >
        <div>
          <AnimatedHeaderSection
            subTitle={"You Dream It, I Code it"}
            title={"KIRTAN THAKKAR"}
            text={text}
            textColor={"text-white"}
            withScrollTrigger={true}
          />
          <div className="font-light px-10 flex uppercase lg:text-[32px] text-[26px] leading-none mb-10">
            <div className="flex flex-col w-full gap-10">
              <div className="social-link">
                <h2 className="text-white">Email</h2>
                <div className="w-full h-px my-2 bg-white/30" />
                <p className="text-white text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                  connect.with.kirtan@gmail.com
                </p>
              </div>
              <div className="social-link">
                <h2 className="text-white">Phone</h2>
                <div className="w-full h-px my-2 bg-white/30" />
                <p className="text-white text-xl lowercase md:text-2xl lg:text-3xl">
                  +91 9227048988
                </p>
              </div>
              <div className="social-link">
                <h2 className="text-white">Social Media</h2>
                <div className="w-full h-px my-2 bg-white/30" />
                <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs text-white leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
        <MarqueePage items={items} className="text-white bg-transparent"/>
      </section>
    </div>
  );
};
export default ContactPage;
