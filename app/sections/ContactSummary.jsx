import {useRef} from 'react';
import MarqueePage from './Marquee';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';

const ContactSummaryPage = ()=>{
    useGSAP(()=>{
        gsap.to(containerRef.current , {
            scrollTrigger:{
                trigger:containerRef.current,
                start :"center center",
                end:"+=800 center ",
                scrub:0.5,
                pins:true,
                pinSpacing:true,
            }
        })
    },[])
    const containerRef = useRef(null);
    const items = ["Innovation", "Precision", "Trust", "collaboration",
        "Excellence",
    ]
    const item2=["Contact Us", "Contact Us", "Contact Us", "Contact Us", "Contact Us"]
    return(
        <section ref={containerRef} className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16" >
            <MarqueePage items={items}/>
            <div className="overflow-hidden font-light text-center contact-text-responsive">
                <p>
                    " Let's build a <br/>
                    <span className="font-normal">memorable</span> & <span className="italic">inspiring</span><br/>
                    web applications <span className="text-gold">together</span>"
                </p>
            </div>
            <MarqueePage items={item2} reverse={true} className="text-black bg-transparent border-y-2"
            iconClassName='stroke-gold stroke-2 text-primary'
            icon="material-symbols-light:square"/>
            
        </section>
    )
}
export default ContactSummaryPage;