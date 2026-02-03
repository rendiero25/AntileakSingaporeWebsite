import { useEffect, useRef } from "react";
import { FaHammer, FaShieldAlt, FaTh, FaClipboardCheck } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
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

    // Timeline line animation
    gsap.fromTo(
      section.querySelector(".timeline-line"),
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.querySelector(".process-timeline"),
          start: "top 70%",
        },
      },
    );

    // Process steps animation
    gsap.fromTo(
      section.querySelectorAll(".process-step"),
      { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".process-timeline"),
          start: "top 75%",
        },
      },
    );
  }, []);

  const steps = [
    {
      icon: FaHammer,
      step: 1,
      title: "The Tear Down",
      description:
        "Full hacking of existing tiles and compromised substrates to expose the structural core. No shortcuts, no overlays on potentially damaged surfaces.",
      color: "#ef4444",
    },
    {
      icon: FaShieldAlt,
      step: 2,
      title: "The Fortification",
      description:
        "Application of our proprietary 3-layer waterproofing system, tested for standing water integrity. Industry-leading materials from our trusted partners.",
      color: "#3b82f6",
    },
    {
      icon: FaTh,
      step: 3,
      title: "The Reconstruction",
      description:
        "Installing new tiles and fixtures with high-grade sealants and anti-mold grout. Precision installation for both form and function.",
      color: "#10b981",
    },
    {
      icon: FaClipboardCheck,
      step: 4,
      title: "The Handover",
      description:
        "Final flood test to prove water-tightness before you pay the balance. Your bathroom is guaranteed leak-free or we fix it at no extra cost.",
      color: "#8b5cf6",
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f3f4f6] to-transparent opacity-50"></div>

      <div className="container relative">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Our Process</span>
          <h2 className="mb-4">
            How We Guarantee a{" "}
            <span className="text-[#2563eb]">Leak-Free</span>{" "}
            Bathroom
          </h2>
          <p className="text-lg">
            A systematic, proven 4-step approach that eliminates guesswork and
            ensures permanent results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="process-timeline relative max-w-4xl mx-auto">
          {/* Vertical timeline line - desktop only */}
          <div className="timeline-line hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563eb] to-[#1e3a5f] -translate-x-1/2 origin-top rounded-full"></div>

          {/* Steps */}
          <div className="space-y-8 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-step relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-gray-100 hover:border-[#2563eb] hover:shadow-xl transition-all ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <step.icon
                          className="w-6 h-6"
                          style={{ color: step.color }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-[#1e3a5f]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[#6b7280] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="relative z-10 order-first lg:order-none">
                  <div
                    className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
