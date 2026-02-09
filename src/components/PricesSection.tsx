import { useEffect, useRef, useState } from "react";
import { FaShower, FaCheckCircle, FaTint, FaWrench } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface PricePackage {
  icon: React.ElementType;
  title: string;
  price: string;
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
      price: "$6,500",
      pipeType: "exposed",
      features: [
        "Hack and dispose 1 bathroom floor and wall tiles including all accessories",
        "Labour to tile 1 bathroom floor and wall",
        "Labour to waterproof 1 bathroom floor",
        "Supply of quality waterproofing and cement materials",
        "Plumbing works for 1 bathroom using exposed cold stainless steel pipe including installation of: 1 instant heater shower set, 1 toilet bowl, 1 basin and tap, 1 bidet hand spray, 1 toilet roll holder",
        "Uploading materials to site with lift access",
        "Heavy-duty protective sheet for material storage",
        "Disposal of all materials and debris after work is completed",
        "General chemical cleaning for bathroom",
      ],
    },
    {
      icon: FaTint,
      title: "HDB 2 Bathrooms (Exposed Pipe)",
      price: "$11,900",
      originalPrice: "$13,000",
      pipeType: "exposed",
      highlight: true,
      features: [
        "Hack and dispose 2 bathrooms floor and wall tiles including all accessories",
        "Labour to tile 2 bathrooms floor and wall",
        "Labour to waterproof 2 bathrooms floor",
        "Supply of quality waterproofing and cement materials",
        "Plumbing works for 2 bathrooms using exposed cold stainless steel pipe including installation of: 2 instant heater shower sets, 2 toilet bowls, 2 basins and taps, 2 bidet hand sprays, 2 toilet roll holders",
        "Uploading materials to site with lift access",
        "Heavy-duty protective sheet for material storage",
        "Disposal of all materials and debris after work is completed",
        "General chemical cleaning for bathroom",
      ],
    },
    {
      icon: FaWrench,
      title: "HDB Bathroom (Concealed Pipe)",
      price: "$7,500",
      pipeType: "concealed",
      features: [
        "Hack and dispose 1 bathroom floor and wall tiles including all accessories",
        "Labour to tile 1 bathroom floor and wall",
        "Labour to waterproof 1 bathroom floor",
        "Supply of quality waterproofing and cement materials",
        "Plumbing works for 1 bathroom using concealed copper pipe including installation of: 1 shower mixer set, 1 toilet bowl, 1 basin and tap (cold water only), 1 bidet hand spray, 1 toilet roll holder",
        "Uploading materials to site with lift access",
        "Heavy-duty protective sheet for material storage",
        "Disposal of all materials and debris after work is completed",
        "General chemical cleaning for bathroom",
      ],
    },
    {
      icon: FaCheckCircle,
      title: "HDB 2 Bathrooms (Concealed Pipe)",
      price: "$13,800",
      originalPrice: "$15,000",
      pipeType: "concealed",
      highlight: true,
      features: [
        "Hack and dispose 2 bathrooms floor and wall tiles including all accessories",
        "Labour to tile 2 bathrooms floor and wall",
        "Labour to waterproof 2 bathrooms floor",
        "Supply of quality waterproofing and cement materials",
        "Plumbing works for 2 bathrooms using concealed copper pipe including installation of: 2 shower mixer sets, 2 toilet bowls, 2 basins and taps, 2 bidet hand sprays, 2 toilet roll holders, 1 storage heater",
        "Uploading materials to site with lift access",
        "Heavy-duty protective sheet for material storage",
        "Disposal of all materials and debris after work is completed",
        "General chemical cleaning for bathroom",
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
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563eb] to-[#1e3a5f] opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2563eb] to-[#1e3a5f] opacity-5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="section-header text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#2563eb]/10 text-[#2563eb] text-sm font-semibold rounded-full mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Our <span className="text-[#2563eb]">Packages</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete bathroom renewal solutions with no hidden costs. All prices
            include materials, labour, and professional installation.
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
        <div className="price-grid grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredPackages.map((pkg, index) => (
            <div
              key={index}
              className={`price-card group relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-2xl ${
                pkg.highlight
                  ? "border-[#2563eb] shadow-xl shadow-[#2563eb]/10"
                  : "border-gray-100 hover:border-[#2563eb]/50"
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
                className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
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
                {pkg.originalPrice && (
                  <span className="text-gray-400 line-through text-lg mr-2">
                    {pkg.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-bold text-[#2563eb]">
                  {pkg.price}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
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
          <p className="text-gray-500 text-sm">
            * Prices are subject to site inspection. Additional charges may
            apply for special requirements.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            * Tiles and sanitary fittings are not included in the package price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
