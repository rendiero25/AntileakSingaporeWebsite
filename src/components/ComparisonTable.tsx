import { useEffect, useRef } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ComparisonTable = () => {
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

    // Table animation
    gsap.fromTo(
      section.querySelector(".comparison-table"),
      { opacity: 0, y: 40, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".comparison-table"),
          start: "top 85%",
        },
      },
    );

    // Row animations
    gsap.fromTo(
      section.querySelectorAll(".comparison-row"),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".comparison-table"),
          start: "top 80%",
        },
      },
    );
  }, []);

  const comparisons = [
    {
      feature: "Primary Goal",
      typical: "Aesthetics (Looks)",
      antileak: "Security (Leak Prevention)",
      typicalGood: false,
      antileakGood: true,
    },
    {
      feature: "Waterproofing",
      typical: "Standard / Subcontracted",
      antileak: "Core Expertise / Industrial Grade",
      typicalGood: false,
      antileakGood: true,
    },
    {
      feature: "Process",
      typical: "Ad-hoc / Varies by worker",
      antileak: "Standardized & Strict Protocol",
      typicalGood: false,
      antileakGood: true,
    },
    {
      feature: "Result",
      typical: "Might leak in 2-5 years",
      antileak: "Permanent Peace of Mind",
      typicalGood: false,
      antileakGood: true,
    },
    {
      feature: "Site Analysis",
      typical: "Visual inspection only",
      antileak: "Thermal & Moisture Detection",
      typicalGood: false,
      antileakGood: true,
    },
    {
      feature: "Warranty",
      typical: "Limited or none",
      antileak: "Comprehensive coverage",
      typicalGood: false,
      antileakGood: true,
    },
  ];

  return (
    <section
      id="comparison"
      ref={sectionRef}
      className="bg-[var(--color-bg-gray)] relative overflow-hidden"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">The Comparison</span>
          <h2 className="mb-4">
            General Renovation vs.{" "}
            <span className="text-[var(--color-secondary)]">AntiLeak SG</span>
          </h2>
          <p className="text-lg">
            See the difference between typical interior designers and our
            specialized approach.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="comparison-table max-w-5xl mx-auto">
          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              <div className="p-6 text-white font-semibold">Feature</div>
              <div className="p-6 text-white/80 text-center font-semibold border-l border-white/20">
                Typical Interior Designer
              </div>
              <div className="p-6 text-white text-center font-bold border-l border-white/20 bg-white/10">
                ✨ AntiLeak SG Specialist
              </div>
            </div>

            {/* Data Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`comparison-row grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-[var(--color-bg-gray)]"
                } hover:bg-blue-50 transition-colors`}
              >
                <div className="p-5 font-medium text-[var(--color-primary)] border-b border-gray-100">
                  {item.feature}
                </div>
                <div className="p-5 text-center border-l border-b border-gray-100 flex items-center justify-center gap-2">
                  <FaTimes className="w-4 h-4 text-red-400" />
                  <span className="text-[var(--color-text-muted)]">
                    {item.typical}
                  </span>
                </div>
                <div className="p-5 text-center border-l border-b border-gray-100 bg-green-50/50 flex items-center justify-center gap-2">
                  <FaCheck className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-[var(--color-primary)] font-medium">
                    {item.antileak}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="comparison-row bg-white rounded-xl p-5 shadow-lg"
              >
                <div className="font-bold text-[var(--color-primary)] mb-4 pb-3 border-b">
                  {item.feature}
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <FaTimes className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-red-400 font-medium mb-1">
                        Typical
                      </div>
                      <div className="text-sm text-[var(--color-text-muted)]">
                        {item.typical}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <FaCheck className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-[var(--color-accent)] font-medium mb-1">
                        AntiLeak SG
                      </div>
                      <div className="text-sm text-[var(--color-primary)] font-medium">
                        {item.antileak}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
