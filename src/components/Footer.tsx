import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+6588888888";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`;

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Why Us", href: "#problem" },
    { name: "Our Process", href: "#process" },
    { name: "Partners", href: "#partners" },
    { name: "FAQ", href: "#faq" },
  ];

  const services = [
    "HDB Bathroom Renewal",
    "Condo Bathroom Renewal",
    "Waterproofing Services",
    "Leak Detection",
    "Bathroom Renovation",
  ];

  return (
    <footer className="bg-[#0f172a] text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient
                      id="footerLogoGradient"
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
                    fill="url(#footerLogoGradient)"
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
              <div>
                <span className="font-heading font-bold text-xl text-white">
                  AntiLeak SG
                </span>
                <span className="block text-xs text-white/60">
                  Bathroom Renewal Specialist
                </span>
              </div>
            </a>

            <p className="text-white! text-sm leading-relaxed mb-6 lg:max-w-md">
              Singapore's dedicated Anti-Leak Bathroom Renewal Specialist. We
              deliver full bathroom overhauls with a standardized process to
              ensure your toilet never leaks again.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[FaFacebook, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#2563eb] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:pl-1 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-[#10b981] transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#10b981]" />
                  +65 8888 8888
                </a>
              </li>
              <li>
                <a
                  href="tel:+6588888888"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <FaPhone className="w-5 h-5" />
                  +65 8888 8888
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@antileaksg.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                >
                  <FaEnvelope className="w-5 h-5" />
                  hello@antileaksg.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <FaMapMarkerAlt className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Serving all areas in Singapore
                  <br />
                  HDB & Condo Specialists
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {currentYear} AntiLeak SG. All rights reserved. Singapore's
            Anti-Leak Bathroom Specialist | developed by{" "}
            <a
              href="https://www.rendiero.site"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white!"
            >
              rendiero.
            </a>
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
