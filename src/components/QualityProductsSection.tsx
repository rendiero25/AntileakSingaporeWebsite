import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Quality Product Logos
import Davco from "../assets/qualityproductLogo/davco.webp";
import Dreb from "../assets/qualityproductLogo/dreb.webp";
import Hafary from "../assets/qualityproductLogo/hafary.webp";
import Quicseal from "../assets/qualityproductLogo/quicseal.webp";
import Warrior from "../assets/qualityproductLogo/warrior.webp";
import Weber from "../assets/qualityproductLogo/weber.webp";

gsap.registerPlugin(ScrollTrigger);

const QualityProductsSection = () => {
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

    // Logo cards animation
    gsap.fromTo(
      section.querySelectorAll(".quality-logo-card"),
      { opacity: 0, y: 40, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      },
    );
  }, []);

  const qualityProducts = [
    {
      name: "Davco",
      website: "https://sgp.sika.com/en/serp.html?q=davco&box=Top",
      logo: Davco,
    },
    {
      name: "Dreb",
      website: "https://jimei.com.my/",
      logo: Dreb,
    },
    {
      name: "Hafary",
      website: "https://www.hafary.com.sg/",
      logo: Hafary,
    },
    {
      name: "Quicseal",
      website: "https://ardex-quicseal.com/",
      logo: Quicseal,
    },
    {
      name: "Warrior",
      website: "https://www.warrior.com.sg/",
      logo: Warrior,
    },
    {
      name: "Weber",
      website: "https://www.weber-marine.com/",
      logo: Weber,
    },
  ];

  return (
    <section
      id="quality-products"
      ref={sectionRef}
      className="bg-white text-slate-800 py-20"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center mb-16">
          <span className="section-label text-[#10b981]">
            Premium Materials
          </span>
          <h2 className="text-slate-800! mb-4">We Use Only Quality Products</h2>
          <p className="text-slate-600! max-w-2xl mx-auto">
            Your bathroom deserves the best. We partner with industry-leading
            brands to ensure every waterproofing job is done with premium-grade
            materials that last for years.
          </p>
        </div>

        {/* Quality Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {qualityProducts.map((product, index) => (
            <div
              key={index}
              className="quality-logo-card bg-white rounded-xl p-6 border border-slate-200 hover:border-[#10b981] hover:bg-slate-100 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex flex-col items-center justify-center h-full">
                {/* Logo */}
                <div className="w-full h-20 flex items-center justify-center mb-4">
                  <img
                    src={product.logo}
                    alt={`${product.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <h4 className="text-slate-800 font-semibold text-lg mb-1 group-hover:text-[#10b981] transition-colors">
                  {product.name}
                </h4>
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-slate-500 text-xs text-center hover:text-[#10b981] transition-color"
                >
                  Official Website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Trusted by over{" "}
            <span className="text-[#10b981] font-semibold">
              500+ homeowners
            </span>{" "}
            in Singapore
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityProductsSection;
