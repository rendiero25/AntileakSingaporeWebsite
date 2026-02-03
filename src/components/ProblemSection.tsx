import { useEffect, useRef } from "react";
import { FaExclamationTriangle, FaTools, FaShieldAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProblemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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

    // Cards animation
    gsap.fromTo(
      section.querySelectorAll(".problem-card"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".problem-grid"),
          start: "top 85%",
        },
      },
    );
  }, []);

  const problems = [
    {
      icon: FaExclamationTriangle,
      title: "The Hidden Danger",
      description:
        'Many "aesthetic" renovations are merely cosmetic covers over potential disasters. They look good on day one, but hidden cracks and poor waterproofing lead to ceiling leaks later.',
      color: "#f59e0b",
    },
    {
      icon: FaTools,
      title: "The Common Trap",
      description:
        "Focusing on tiles and vanity units while neglecting the sub-floor waterproofing. Most contractors prioritize looks over leak prevention.",
      color: "#ef4444",
    },
    {
      icon: FaShieldAlt,
      title: "Our Solution",
      description:
        "A renovation engineered around failure prevention. We fix the root cause and remove ambiguity before work starts—not after problems appear.",
      color: "#10b981",
    },
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="bg-[#f3f4f6] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563eb] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">The Problem</span>
          <h2 className="mb-4">
            Why Most Bathroom Renovations{" "}
            <span className="text-[#ef4444]">Fail</span> Within 3
            Years
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            At AntiLeak SG, we've seen it all—neighbor complaints, costly
            hacking works, and recurring water damage. Here's what goes wrong
            and how we fix it.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="problem-grid grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card card group hover:border-l-4 transition-all"
              style={{ borderLeftColor: problem.color }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${problem.color}15` }}
              >
                <problem.icon
                  className="w-7 h-7"
                  style={{ color: problem.color }}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1e3a5f]">
                {problem.title}
              </h3>
              <p className="text-[#6b7280] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
