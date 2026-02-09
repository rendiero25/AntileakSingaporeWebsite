import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Davco from "../assets/partnersLogo/davco.png";
import Dreb from "../assets/partnersLogo/dreb.png";
import Duravit from "../assets/partnersLogo/duravit.png";
import Grohe from "../assets/partnersLogo/grohe.png";
import Hafary from "../assets/partnersLogo/hafary.png";
import Kohler from "../assets/partnersLogo/kohler.png";
import Quicseal from "../assets/partnersLogo/quicseal.png";
import Warrior from "../assets/partnersLogo/warrior.png";
import Weber from "../assets/partnersLogo/weber.png";

gsap.registerPlugin(ScrollTrigger);

const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    if (!section || !slider) return;

    // Section header animation
    gsap.fromTo(
      section.querySelectorAll(".section-header > *"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      },
    );

    // Infinite scroll animation
    const slides = slider.querySelectorAll(".partner-slide");
    const totalWidth = Array.from(slides).reduce(
      (acc, slide) => acc + (slide as HTMLElement).offsetWidth + 48,
      0,
    );

    tweenRef.current = gsap.to(slider, {
      x: -totalWidth / 2,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const handleMouseEnter = () => {
    tweenRef.current?.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.resume();
  };

  const partners = [
    {
      name: "Davco",
      website: "https://sgp.sika.com/en/serp.html?q=davco&box=Top",
      logo: (
        <img src={Davco} alt="Davco Logo" className="w-50 object-contain" />
      ),
    },
    {
      name: "Dreb",
      website: "https://jimei.com.my/",
      logo: <img src={Dreb} alt="Dreb Logo" className="w-50 object-contain" />,
    },
    {
      name: "Duravit",
      website: "https://www.duravit.com/en-en/",
      logo: (
        <img src={Duravit} alt="Duravit Logo" className="w-50 object-contain" />
      ),
    },
    {
      name: "Grohe",
      website: "https://www.grohe.sg/en_sg/",
      logo: (
        <img src={Grohe} alt="Grohe Logo" className="w-50 object-contain" />
      ),
    },
    {
      name: "Hafary",
      website: "https://www.hafary.com.sg/",
      logo: (
        <img src={Hafary} alt="Hafary Logo" className="w-50 object-contain" />
      ),
    },
    {
      name: "Kohler",
      website: "https://www.kohler.com.sg/",
      logo: (
        <img src={Kohler} alt="Kohler Logo" className="w-50 object-contain" />
      ),
    },
    {
      name: "Quicseal",
      website: "https://ardex-quicseal.com/",
      logo: (
        <img
          src={Quicseal}
          alt="Quicseal Logo"
          className="w-40 object-contain"
        />
      ),
    },
    {
      name: "Warrior",
      website: "https://www.warrior.com.sg/",
      logo: (
        <img src={Warrior} alt="Warrior Logo" className="w-40 object-contain" />
      ),
    },
    {
      name: "Weber",
      website: "https://www.weber-marine.com/",
      logo: (
        <img src={Weber} alt="Weber Logo" className="w-40 object-contain" />
      ),
    },
  ];

  // Duplicate partners for infinite scroll
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="bg-white text-slate-800 py-20 overflow-hidden"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <span className="section-label text-[#10b981]">
            Premium Materials Only
          </span>
          <h2 className="text-slate-800! mb-4">
            Global Quality. Zero Compromise.
          </h2>
          <p className="text-slate-600! max-w-2xl mx-auto">
            We are proud to work with global leaders to bring the best tools and
            waterproofing materials to your home. Every layer of your bathroom
            is built using industrial-grade solutions.
          </p>
        </div>

        {/* Small label */}
        {/* <p className="text-center text-white! text-sm uppercase tracking-widest mb-8">
          Proudly Using Quality Brands
        </p> */}
      </div>

      {/* Partner Logo Slider */}
      <div className="relative">
        {/* Gradient overlays */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0f172a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#132840] to-transparent z-10"></div> */}

        <div
          ref={sliderRef}
          className="flex gap-12 items-center pt-8"
          style={{ width: "fit-content" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="partner-slide shrink-0 p-5 transition-all group cursor-pointer"
            >
              <div className="flex flex-col items-center justify-start">
                <div>{partner.logo}</div>

                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-slate-500 hover:text-[#10b981] transition-colors"
                >
                  Official Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
