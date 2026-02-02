import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      name: "SIKA",
      role: "Waterproofing Membrane & Chemical Integrity",
      logo: (
        <svg viewBox="0 0 120 40" className="h-10 w-auto">
          <text
            x="10"
            y="30"
            className="fill-[var(--color-primary)] font-bold text-2xl"
          >
            SIKA
          </text>
        </svg>
      ),
    },
    {
      name: "BOSCH",
      role: "Precision Hacking & Drilling",
      logo: (
        <svg viewBox="0 0 120 40" className="h-10 w-auto">
          <text
            x="10"
            y="30"
            className="fill-[var(--color-primary)] font-bold text-2xl"
          >
            BOSCH
          </text>
        </svg>
      ),
    },
    {
      name: "RUBI",
      role: "Precision Tile Cutting",
      logo: (
        <svg viewBox="0 0 120 40" className="h-10 w-auto">
          <text
            x="10"
            y="30"
            className="fill-[var(--color-primary)] font-bold text-2xl"
          >
            RUBI
          </text>
        </svg>
      ),
    },
    {
      name: "MAKITA",
      role: "Heavy-duty Construction Tools",
      logo: (
        <svg viewBox="0 0 120 40" className="h-10 w-auto">
          <text
            x="10"
            y="30"
            className="fill-[var(--color-primary)] font-bold text-2xl"
          >
            MAKITA
          </text>
        </svg>
      ),
    },
  ];

  // Duplicate partners for infinite scroll
  const allPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="bg-gradient-to-b from-[var(--color-bg-dark)] to-[var(--color-primary-dark)] text-white py-20 overflow-hidden"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <span className="section-label text-[var(--color-accent)]">
            Industrial Partners
          </span>
          <h2 className="text-white mb-4">Global Quality. Zero Compromise.</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We are proud to work with global leaders to bring the best tools and
            waterproofing materials to your home. Every layer of your bathroom
            is built using industrial-grade solutions.
          </p>
        </div>

        {/* Small label */}
        <p className="text-center text-white/50 text-sm uppercase tracking-widest mb-8">
          Proudly Using Quality Brands
        </p>
      </div>

      {/* Partner Logo Slider */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-dark)] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-primary-dark)] to-transparent z-10"></div>

        <div
          ref={sliderRef}
          className="flex gap-12 items-center py-8"
          style={{ width: "fit-content" }}
        >
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className="partner-slide flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl p-6 px-10 border border-white/10 hover:border-[var(--color-accent)] hover:bg-white/20 transition-all group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {partner.name}
                </div>
                <div className="text-xs text-white/50 text-center max-w-[150px]">
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
