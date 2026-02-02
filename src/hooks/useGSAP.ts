import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
}

export const useGSAP = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Refresh ScrollTrigger after DOM is loaded
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Fade in from bottom
  const fadeInUp = (element: string | Element, config?: AnimationConfig) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: config?.trigger || element,
          start: config?.start || "top 85%",
          toggleActions: config?.toggleActions || "play none none none",
        },
      },
    );
  };

  // Fade in from left
  const fadeInLeft = (element: string | Element, config?: AnimationConfig) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: config?.trigger || element,
          start: config?.start || "top 85%",
          toggleActions: config?.toggleActions || "play none none none",
        },
      },
    );
  };

  // Fade in from right
  const fadeInRight = (element: string | Element, config?: AnimationConfig) => {
    gsap.fromTo(
      element,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: config?.trigger || element,
          start: config?.start || "top 85%",
          toggleActions: config?.toggleActions || "play none none none",
        },
      },
    );
  };

  // Stagger children animation
  const staggerChildren = (
    parent: string | Element,
    children: string,
    config?: AnimationConfig,
  ) => {
    gsap.fromTo(
      `${parent} ${children}`,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: config?.trigger || parent,
          start: config?.start || "top 80%",
          toggleActions: config?.toggleActions || "play none none none",
        },
      },
    );
  };

  // Scale in animation
  const scaleIn = (element: string | Element, config?: AnimationConfig) => {
    gsap.fromTo(
      element,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: config?.trigger || element,
          start: config?.start || "top 85%",
          toggleActions: config?.toggleActions || "play none none none",
        },
      },
    );
  };

  // Hero animation (on page load, no scroll trigger)
  const heroAnimation = (elements: {
    headline?: string;
    subheadline?: string;
    badges?: string;
    cta?: string;
  }) => {
    const tl = gsap.timeline({ delay: 0.3 });

    if (elements.headline) {
      tl.fromTo(
        elements.headline,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      );
    }

    if (elements.subheadline) {
      tl.fromTo(
        elements.subheadline,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4",
      );
    }

    if (elements.badges) {
      tl.fromTo(
        elements.badges,
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
      );
    }

    if (elements.cta) {
      tl.fromTo(
        elements.cta,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(2)" },
        "-=0.2",
      );
    }

    return tl;
  };

  // Header animation
  const headerAnimation = (element: string) => {
    gsap.fromTo(
      element,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    );
  };

  // Parallax effect
  const parallax = (element: string | Element, speed: number = 0.5) => {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  // Counter animation
  const countUp = (
    element: string | Element,
    endValue: number,
    config?: AnimationConfig,
  ) => {
    gsap.fromTo(
      element,
      { innerText: 0 },
      {
        innerText: endValue,
        duration: 2,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: config?.trigger || element,
          start: config?.start || "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    staggerChildren,
    scaleIn,
    heroAnimation,
    headerAnimation,
    parallax,
    countUp,
    gsap,
    ScrollTrigger,
  };
};

export default useGSAP;
