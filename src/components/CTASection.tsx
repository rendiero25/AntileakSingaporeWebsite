import { useEffect, useRef } from "react";
import { FaWhatsapp, FaPhone, FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Content animation
    gsap.fromTo(
      section.querySelectorAll(".cta-content > *"),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      },
    );
  }, []);

  const whatsappNumber = "+6591218788";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi, I'd like to schedule a site visit for bathroom renewal.`;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] via-[#1e3a5f] to-[#132840]">
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10b981] opacity-10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container relative">
        <div className="cta-content max-w-3xl mx-auto text-center text-white">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white! leading-tight">
            Stop The Leaks.{" "}
            <span className="text-[#34d399]">Start The Renewal.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/80! mb-10 leading-relaxed">
            Don't wait for the ceiling to drip. Secure your home with
            Singapore's dedicated Anti-Leak Specialist. Get a free,
            no-obligation site assessment today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp Us for a Site Visit
            </a>
            <a
              href={`tel:${whatsappNumber}`}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
            >
              <FaPhone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Benefits reminder */}
          <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <FaArrowRight className="w-3 h-3 text-[#10b981]" />
              Free Site Assessment
            </div>
            <div className="flex items-center gap-2">
              <FaArrowRight className="w-3 h-3 text-[#10b981]" />
              No Hidden Costs
            </div>
            <div className="flex items-center gap-2">
              <FaArrowRight className="w-3 h-3 text-[#10b981]" />
              Warranty Included
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
