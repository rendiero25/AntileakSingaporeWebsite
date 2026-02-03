import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Header entrance animation
    gsap.fromTo(
      ".header",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 },
    );

    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Why Us", href: "#problem" },
    { name: "Process", href: "#process" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
  ];

  const whatsappNumber = "+6588888888";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi, I'm interested in Anti-Leak Bathroom Renewal services.`;

  return (
    <header
      className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 md:w-12 md:h-12 relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#2563eb" }} />
                  <stop offset="100%" style={{ stopColor: "#1e3a5f" }} />
                </linearGradient>
              </defs>
              <path
                d="M50 5 L90 20 L90 50 C90 75 70 90 50 95 C30 90 10 75 10 50 L10 20 Z"
                fill="url(#logoGradient)"
              />
              <path
                d="M50 25 C50 25 35 45 35 55 C35 65 42 72 50 72 C58 72 65 65 65 55 C65 45 50 25 50 25 Z"
                fill="white"
              />
              <path
                d="M40 55 L47 62 L62 47"
                stroke="#10b981"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading font-bold text-lg md:text-xl transition-colors ${
                isScrolled ? "text-[#1e3a5f]" : "text-white"
              }`}
            >
              AntiLeak SG
            </span>
            <span
              className={`text-xs hidden md:block transition-colors ${
                isScrolled ? "text-[#6b7280]" : "text-white/70"
              }`}
            >
              Bathroom Renewal Specialist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-[#2563eb] ${
                isScrolled ? "text-[#1f2937]" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${whatsappNumber}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
              isScrolled
                ? "text-[#1e3a5f] hover:bg-[#f3f4f6]"
                : "text-white hover:bg-white/10"
            }`}
          >
            <FiPhone className="w-4 h-4" />
            <span className="hidden xl:inline">Call Us</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled
              ? "text-[#1e3a5f] hover:bg-[#f3f4f6]"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-[#1f2937] font-medium hover:bg-[#f3f4f6] rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <hr className="my-2 border-[#f3f4f6]" />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center justify-center gap-2 mx-4 py-3 rounded-full font-semibold text-white"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
