import { useEffect, useRef, useState } from "react";
import { FaShower, FaCheckCircle, FaTint, FaWrench } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PricePackage {
  icon: React.ElementType;
  title: string;
  price: string;
  priceTwo: string;
  originalPrice?: string;
  features: string[];
  highlight?: boolean;
  pipeType: "exposed" | "concealed";
}

const PricesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "exposed" | "concealed"
  >("all");

  const whatsappNumber = "+6591218788";
  const getWhatsAppLink = (packageTitle: string) =>
    `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in the ${packageTitle} package. Can I get a quote?`;

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

    // Price cards animation with stagger
    gsap.fromTo(
      section.querySelectorAll(".price-card"),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".price-grid"),
          start: "top 85%",
        },
      },
    );
  }, []);

  const packages: PricePackage[] = [
    {
      icon: FaShower,
      title: "HDB Bathroom (Exposed Pipe)",
      price: "Standard Market Range: S$9,800 - S$11,500",
      priceTwo: "Our Package: S$8,500",
      pipeType: "exposed",
      features: [
        "Full hacking of floor & wall tiles",
        "Professional re-tiling (floor + wall)",
        "Full-layer waterproofing system",
        "Instant heater shower installation",
        "New toilet bowl installation",
        "Basin + tap installation",
        "Heavy-duty site protection",
        "Full debris disposal",
        "Chemical cleaning before handover",
        "17 - 20 Day Completion"
      ],
    },
    {
      icon: FaTint,
      title: "HDB 2 Bathrooms (Exposed Pipe)",
      price: "S$15,000",
      priceTwo: "",
      originalPrice: "S$17,000",
      pipeType: "exposed",
      highlight: true,
      features: [
        "Full hacking of floor & wall tiles",
        "Professional re-tiling (floor + wall)",
        "Full-layer waterproofing system",
        "Instant heater shower installation",
        "New toilet bowl installation",
        "Basin + tap installation",
        "Heavy-duty site protection",
        "Full debris disposal",
        "Chemical cleaning before handover",
        "25 - 30 Day Completion"
      ],
    },
    {
      icon: FaWrench,
      title: "HDB Bathroom (Concealed Pipe)",
      price: "Standard Market Range: S$10,600 - S$12,800.",
      priceTwo: "Our Package: S$9,200",
      pipeType: "concealed",
      features: [
        "Full hacking of floor & wall tiles",
        "Professional re-tiling (floor + wall)",
        "Full-layer waterproofing system",
        "Instant heater shower installation",
        "New toilet bowl installation",
        "Basin + tap installation",
        "Heavy-duty site protection",
        "Full debris disposal",
        "Chemical cleaning before handover",
        "17 - 20 Day Completion"
      ],
    },
    {
      icon: FaCheckCircle,
      title: "HDB 2 Bathrooms (Concealed Pipe)",
      price: "S$16,200",
      priceTwo: "",
      originalPrice: "S$18,400",
      pipeType: "concealed",
      highlight: true,
      features: [
        "Full hacking of floor & wall tiles",
        "Professional re-tiling (floor + wall)",
        "Full-layer waterproofing system",
        "Instant heater shower installation",
        "New toilet bowl installation",
        "Basin + tap installation",
        "Heavy-duty site protection",
        "Full debris disposal",
        "Chemical cleaning before handover",
        "25 - 30 Day Completion"
      ],
    },
  ];

  const filteredPackages =
    activeFilter === "all"
      ? packages
      : packages.filter((pkg) => pkg.pipeType === activeFilter);

  return (
    <section
      id="prices"
      ref={sectionRef}
      className="py-20 bg-linear-to-b from-[#0f172a] to-[#132840] text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563eb] to-[#1e3a5f] opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2563eb] to-[#1e3a5f] opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          {/* <span className="inline-block px-4 py-2 bg-[#2563eb]/20 text-[#10b981] text-sm font-semibold rounded-full mb-4">
            Transparent Pricing
          </span> */}
          <h2 className="text-4xl md:text-5xl font-bold text-white! mb-4">
            Leak-Proof <span className="text-[#2563eb]">Bathroom Packages</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto text-white!">
            Leak-Proof Bathroom Packages - Fixed Price Zero Surprises <br />
            Everything Included. Nothing hidden. Built to last.d price, zero surprises. <br />
            Only 3 slots available per month to ensure quality control.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 xl:gap-4 mb-12 bg">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 xl:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/30"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            All Packages
          </button>
          <button
            onClick={() => setActiveFilter("exposed")}
            className={`px-4 xl:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "exposed"
                ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/30"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Exposed Pipe
          </button>
          <button
            onClick={() => setActiveFilter("concealed")}
            className={`px-4 xl:px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeFilter === "concealed"
                ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/30"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            Concealed Pipe
          </button>
        </div>

        {/* Price Grid */}
        <div className="price-grid grid md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {filteredPackages.map((pkg, index) => (
            <div
              key={index}
              className={`price-card group relative bg-white hover:bg-white/95 rounded-2xl p-6 border-2 transition-all duration-300 ease-out hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] cursor-pointer flex flex-col ${
                pkg.highlight
                  ? "border-[#2563eb] shadow-xl shadow-[#2563eb]/20 hover:border-[#10b981] hover:shadow-[0_20px_40px_rgba(16,185,129,0.4)]"
                  : "border-gray-100 hover:border-[#2563eb] hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]"
              }`}
            >
              {/* Popular Badge */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] text-white text-sm font-semibold rounded-full shadow-lg">
                  Best Value
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-[#2563eb] to-[#1e3a5f]"
                    : "bg-[#2563eb]/10"
                }`}
              >
                <pkg.icon
                  className={`w-7 h-7 ${pkg.highlight ? "text-white" : "text-[#2563eb]"}`}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#1e3a5f] mb-2 leading-tight">
                {pkg.title}
              </h3>

              {/* Pipe Type Badge */}
              <span
                className={`inline-block px-3 py-1 mt-2 text-xs font-medium rounded-full mb-4 w-fit ${
                  pkg.pipeType === "exposed"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {pkg.pipeType === "exposed"
                  ? "Stainless Steel Pipe"
                  : "Copper Pipe"}
              </span>

              {/* Price */}
              <div className="mb-6">
                {pkg.originalPrice ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-gray-400 line-through text-lg">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-[#2563eb]">
                      {pkg.price}
                    </span>
                  </div>
                ) : (
                  <p className="text-sm font-medium text-[#1e3a5f]">
                    {pkg.price}
                  </p>
                )}
                {pkg.priceTwo && (
                  <p className="text-3xl! font-bold! text-[#2563eb]!">
                    {pkg.priceTwo}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={getWhatsAppLink(pkg.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-gradient-to-r from-[#2563eb] to-[#1e3a5f] text-white hover:shadow-lg hover:shadow-[#2563eb]/30"
                    : "bg-[#2563eb]/10 text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                }`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white! text-sm">
            * Prices are subject to site inspection. Additional charges may
            apply for special requirements.
          </p>
          <p className="text-white! text-sm mt-2">
            * Tiles and sanitary fittings are not included in the package price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
