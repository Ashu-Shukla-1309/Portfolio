import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const mindlinkRef = useRef(null);
  const researchGptRef = useRef(null);
  const technologiaRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [mindlinkRef.current, researchGptRef.current, technologiaRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          
          {/* 1. MindLink AI */}
          <a 
            href="https://github.com/Ashu-Shukla-1309/MindLink-AI" 
            target="_blank" 
            rel="noopener noreferrer"
            ref={mindlinkRef} 
            className="first-project-wrapper block hover:opacity-90 transition-opacity duration-300"
          >
            <div className="image-wrapper">
              {/* Remember to update this image source */}
              <img src="/images/mindlink.png" alt="MindLink AI Interface" />
            </div>
            <div className="text-content">
              <h2>
                MindLink AI - An Intelligent Assistant with Voice Integration
              </h2>
              <p className="text-white-50 md:text-xl mt-2">
                An AI-powered application featuring voice input/output and live market data capabilities.
              </p>
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            
            {/* 2. ResearchGPT */}
            <a 
              href="https://github.com/Ashu-Shukla-1309/ResearchGPT"
              target="_blank" 
              rel="noopener noreferrer"
              className="project block hover:opacity-90 transition-opacity duration-300" 
              ref={researchGptRef}
            >
{/* Add w-full and p-0 (padding: 0) to the wrapper */}
<div className="image-wrapper w-full p-0 bg-[#FFEFDB]">
  <img
    src="/images/researchgpt.png"
    alt="ResearchGPT Platform"
    className="w-full h-full object-cover" 
  />
</div>
              <h2 className="mt-4">ResearchGPT - AI Research Tool</h2>
            </a>

            {/* 3. Technologia */}
            <a 
              href="https://github.com/Ashu-Shukla-1309/Technologia"
              target="_blank" 
              rel="noopener noreferrer"
              className="project block hover:opacity-90 transition-opacity duration-300" 
              ref={technologiaRef}
            >
              {/* Add w-full and p-0 (padding: 0) to the wrapper */}
<div className="image-wrapper w-full p-0 bg-[#FFEFDB]">
  <img
    src="/images/technologia.png"
    alt="Technologia E-Commerec"
    className="w-full h-full object-cover" 
  />
</div>
              <h2 className="mt-4">Technologia - Full-Stack E-Commerce Platform</h2>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;