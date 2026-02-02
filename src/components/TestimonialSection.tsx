import { useEffect, useRef } from "react";
import { FaStar, FaQuoteLeft, FaMapMarkerAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
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

    // Testimonial cards animation
    gsap.fromTo(
      section.querySelectorAll(".testimonial-card"),
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section.querySelector(".testimonial-grid"),
          start: "top 80%",
        },
      },
    );
  }, []);

  const testimonials = [
    {
      name: "Jason Tan",
      location: "Punggol HDB",
      rating: 5,
      quote:
        "After 2 renovations with other contractors failed to stop the leak to my neighbor's unit, AntiLeak SG fixed it once and for all. Their approach is totally different.",
      image: null,
    },
    {
      name: "Sarah Lim",
      location: "Bedok Condo",
      rating: 5,
      quote:
        "The thermal detection showed exactly where the old waterproofing had failed. No one else bothered to do this. Professional and thorough from start to finish.",
      image: null,
    },
    {
      name: "David Wong",
      location: "Tampines HDB",
      rating: 5,
      quote:
        "Worth every dollar. My bathroom looks great AND I have peace of mind knowing it won't leak. The flood test at the end was impressive - they really stand behind their work.",
      image: null,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-bg-dark)] text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-label text-[var(--color-accent)]">
            Testimonials
          </span>
          <h2 className="text-white mb-4">Trusted by Singapore Homeowners</h2>
          <p className="text-white/70 text-lg">
            Real feedback from homeowners who chose permanent leak prevention
            over cosmetic fixes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonial-grid grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[var(--color-accent)] hover:bg-white/15 transition-all group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <FaQuoteLeft className="w-10 h-10 text-[var(--color-accent)] opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/90 leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-primary)] flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="flex items-center gap-1 text-white/60 text-sm">
                    <FaMapMarkerAlt className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "100+", label: "Bathrooms Renewed" },
            { value: "100%", label: "Satisfaction Rate" },
            { value: "0", label: "Post-Renewal Leaks" },
            { value: "10+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-[var(--color-accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
