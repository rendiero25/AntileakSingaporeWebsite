import { useEffect } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    // Hero animation timeline
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      ".hero-headline",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    )
      .fromTo(
        ".hero-subheadline",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        ".hero-badges .trust-badge",
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      )
      .fromTo(
        ".hero-cta",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
        "-=0.2",
      );
  }, []);

  const whatsappNumber = "+6591218788";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi, I'd like to book a free site assessment for bathroom renewal.`;

  const trustBadges = [
    "100% Failure-Proof Methodology",
    "Transparent Pricing (No Hidden Costs)",
    "Specialized in HDB & Condo Bathrooms",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#132840] via-[#1e3a5f] to-[#2563eb]">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#2563eb] opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#10b981] opacity-10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-16 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
            Singapore's Anti-Leak Bathroom Specialist
          </div>

          {/* Headline */}
          <h1 className="text-[#34d399]! hero-headline mb-3 lg:mb-6 leading-tight">
            Don't Just Renovate. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#34d399] to-[#10b981]">
              Eliminate Leaks Permanently.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline text-xl md:text-2xl text-white! mb-8 max-w-3xl mx-auto leading-relaxed">
            The Only Bathroom Renewal Service in Singapore Designed to Prevent
            Water Seepage & Failure. We are not general contractors. We are{" "}
            <strong className="text-white">Anti-Leak Specialists</strong>.
          </p>

          {/* Trust Badges */}
          <div className="hero-badges flex flex-wrap justify-center gap-3 mb-8 lg:mb-10">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="trust-badge bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2"
              >
                <FaCheckCircle className="w-4 h-4 text-[#10b981]" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hero-cta">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-transform"
            >
              <FaWhatsapp className="w-6 h-6" />
              Get a Free Site Assessment
            </a>
            <p className="mt-4 text-white! text-sm">
              📍 Serving all areas in Singapore • HDB & Condo
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 sm:flex flex-col items-center gap-2 text-white/80 pb-10">
        <span className="text-xs uppercase tracking-widest">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/80 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
