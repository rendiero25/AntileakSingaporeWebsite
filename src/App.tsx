import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import PricesSection from "./components/PricesSection";
// import QualityProductsSection from "./components/QualityProductsSection";
import PartnersSection from "./components/PartnersSection";
import ComparisonTable from "./components/ComparisonTable";
import ProcessSection from "./components/ProcessSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

// Styles
import "./index.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href",
        );
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="App">
      {/* Header - Sticky Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Problem / Pain Points Section */}
        <ProblemSection />

        {/* Unique Selling Proposition Section */}
        <PricesSection />

        {/* Quality Products Section */}
        {/* <QualityProductsSection /> */}

        {/* Industrial Partners Section */}
        <PartnersSection />

        {/* Comparison Table Section */}
        <ComparisonTable />

        {/* Process Timeline Section */}
        <ProcessSection />

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
