import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

    // FAQ items animation
    gsap.fromTo(
      section.querySelectorAll(".faq-item"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".faq-list"),
          start: "top 85%",
        },
      },
    );
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "Do you do cosmetic renovations?",
      answer:
        "Our primary focus is Anti-Leak Renewal. While your bathroom will look brand new and modern, our design choices are dictated by what prevents leaks best, not just what is trendy. We prioritize function and durability without sacrificing aesthetics.",
    },
    {
      question: "How long does the anti-leak renewal take?",
      answer:
        "A comprehensive leak-proof overhaul typically takes 10-14 days depending on the size of your HDB or Condo bathroom, as we allow proper curing time for waterproofing layers. Rushing this process compromises the integrity of the waterproofing system.",
    },
    {
      question: "Is there a warranty?",
      answer:
        "Yes. Because we standardize our process and materials to reduce risk, we offer a comprehensive warranty on water tightness. Our warranty covers any leaks that may occur due to workmanship or material failure.",
    },
    {
      question: "What areas in Singapore do you serve?",
      answer:
        "We serve all areas in Singapore including HDB flats, condominiums, and landed properties. From Punggol to Jurong, Bedok to Woodlands - we cover the entire island with the same high-quality service.",
    },
    {
      question: "How do you detect existing leak problems?",
      answer:
        "We use advanced thermal detection and moisture mapping technology to identify existing failure points before any work begins. This scientific approach allows us to quote accurately and address all problem areas without surprises.",
    },
    {
      question: "What makes your waterproofing different from others?",
      answer:
        "We use a proprietary 3-layer waterproofing system with industrial-grade materials from trusted partners like SIKA. Every bathroom undergoes a final flood test to prove water-tightness before handover. We don't cut corners or use substandard materials.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="bg-[#f3f4f6] relative overflow-hidden"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="mb-4">
            Frequently Asked Questions About{" "}
            <span className="text-[#2563eb]">
              Bathroom Leaks
            </span>
          </h2>
          <p className="text-lg">
            Get answers to common questions about our anti-leak bathroom renewal
            service.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 ${
                openIndex === index
                  ? "ring-2 ring-[#2563eb]"
                  : ""
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#1e3a5f] pr-4 text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-5 h-5 text-[#2563eb] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 lg:p-6 pt-0 text-[#6b7280] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional help text */}
        <div className="text-center mt-12">
          <p className="text-[#6b7280] mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/6588888888"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:underline"
          >
            Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
