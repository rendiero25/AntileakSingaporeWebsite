import { useEffect, useRef } from "react";
import { FaSearchLocation, FaCogs, FaAward } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const USPSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Header animation
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

    // USP cards animation with stagger
    gsap.fromTo(
      section.querySelectorAll(".usp-card"),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".usp-grid"),
          start: "top 80%",
        },
      },
    );
  }, []);

  const usps = [
    {
      icon: FaSearchLocation,
      number: "01",
      title: "Scientific Site Analysis",
      description:
        "We identify existing failure points using thermal detection and moisture mapping before quoting. No guesswork—just data-driven assessment.",
      features: ["Thermal Detection", "Moisture Mapping", "Detailed Report"],
    },
    {
      icon: FaCogs,
      number: "02",
      title: "Standardized Materials & Process",
      description:
        "We don't mix-and-match cheap compounds. We use industrial-grade waterproofing membranes and a standardized application protocol that leaves zero room for error.",
      features: [
        "Industrial-Grade Materials",
        "Strict Protocol",
        "Quality Control",
      ],
    },
    {
      icon: FaAward,
      number: "03",
      title: "Permanent Outcomes",
      description:
        "We strip the bathroom to the bare concrete and rebuild it with a multi-layer waterproofing system. We don't do \"overlay\" unless it's structurally sound.",
      features: ["Full Strip & Rebuild", "Multi-Layer System", "Flood Tested"],
    },
  ];

  return (
    <section
      id="usp"
      ref={sectionRef}
      className="bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Our Difference</span>
          <h2 className="mb-4">
            Engineered for{" "}
            <span className="text-[var(--color-secondary)]">Dryness</span>
          </h2>
          <p className="text-lg">
            Function Over Form. Reliability Over Aesthetics.
            <br />
            We specialize in Anti-Leak Bathroom Renewal—a complete overhaul to
            eliminate leak risks permanently.
          </p>
        </div>

        {/* USP Grid */}
        <div className="usp-grid grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="usp-card group relative bg-gradient-to-br from-[var(--color-bg-light)] to-[var(--color-bg-gray)] rounded-2xl p-8 border border-gray-100 hover:border-[var(--color-secondary)] hover:shadow-xl transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                {usp.number}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <usp.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
                {usp.title}
              </h3>
              <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                {usp.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {usp.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="px-3 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
