import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Asus from "../assets/partnersLogo/asus.png";
import Bosch from "../assets/partnersLogo/bosch.png";
import Ebay from "../assets/partnersLogo/ebay.png";
import Thinkpad from "../assets/partnersLogo/thinkpad.png";

gsap.registerPlugin(ScrollTrigger);

const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

    gsap.to(slider, {
      x: -totalWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  const partners = [
    {
      name: "ASUS",
      role: "Waterproofing Membrane & Chemical Integrity",
      logo: (
        <img src={Asus} alt="Asus Logo" className="w-50 object-cover"/>
      ),
    },
    {
      name: "BOSCH",
      role: "Precision Hacking & Drilling",
      logo: (
        <img src={Bosch} alt="Bosch Logo" className="w-50 object-cover"/>
      ),
    },
    {
      name: "EBAY",
      role: "Precision Tile Cutting",
      logo: (
        <img src={Ebay} alt="Asus Logo" className="w-50 object-cover"/>
      ),
    },
    {
      name: "THINKPAD",
      role: "Heavy-duty Construction Tools",
      logo: (
        <img src={Thinkpad} alt="Asus Logo" className="w-50 object-cover"/>
      ),
    },
  ];

  // Duplicate partners for infinite scroll
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="bg-linear-to-b from-[#0f172a] to-[#132840] text-white py-20 overflow-hidden"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <span className="section-label text-[#10b981]">
            Industrial Partners
          </span>
          <h2 className="text-white! mb-4">Global Quality. Zero Compromise.</h2>
          <p className="text-white/70! max-w-2xl mx-auto">
            We are proud to work with global leaders to bring the best tools and
            waterproofing materials to your home. Every layer of your bathroom
            is built using industrial-grade solutions.
          </p>
        </div>

        {/* Small label */}
        <p className="text-center text-white! text-sm uppercase tracking-widest mb-8">
          Proudly Using Quality Brands
        </p>
      </div>

      {/* Partner Logo Slider */}
      <div className="relative">
        {/* Gradient overlays */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0f172a] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#132840] to-transparent z-10"></div> */}

        <div
          ref={sliderRef}
          className="flex gap-12 items-center py-8"
          style={{ width: "fit-content" }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="partner-slide shrink-0 p-5 hover:border-[#10b981] hover:bg-white/20 transition-all group cursor-pointer"
            >
              <div className="flex flex-col items-center justify-start">
                <div>{partner.logo}</div>

                {/* <div className="text-2xl font-bold text-white group-hover:text-[#10b981] transition-colors">
                  {partner.name}
                </div> */}

                <div className="text-sm text-white/80 text-center max-w-[150px]">
                  {partner.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
