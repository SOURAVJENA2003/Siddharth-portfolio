"use client";
import "./home.css";
import Button from "@/components/Button/Button";
import TechSkills from "@/components/TechSkills/TechSkills";
import FeaturedWork from "@/components/FeaturedWork/FeaturedWork";
import ServicesSection from "@/components/Services/Services";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";
import Preloader, { isInitialLoad } from "@/components/Preloader/Preloader";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <>
      <Preloader />
      <section className="hero">
        <div className="container">
          <div className="hero-content-main">
            <div className="hero-left">
              <div className="hero-header">
                <Copy animateOnScroll={false} delay={isInitialLoad ? 5.75 : 0.75}>
                  <h1>Siddharth Transport</h1>
                </Copy>
                <Copy animateOnScroll={false} delay={isInitialLoad ? 6.05 : 1.15}>
                  <h2>Reliable Hyba, Deeper & Regional Logistics</h2>
                </Copy>
              </div>

              {/* <div className="hero-cta">
                <Button delay={isInitialLoad ? 6.35 : 1.55} href="/studio">
                  Explore Services
                </Button>
              </div> */}
            </div>

            <div className="hero-right">
              <div className="hero-image-container" style={{ animationDelay: `${isInitialLoad ? 6.35 : 1.55}s` }}>
                <img src="/profile.jpg" alt="Siddharth Transport" />
              </div>
              <div className="hero-description">
                <Copy animateOnScroll={false} delay={isInitialLoad ? 6.35 : 1.65}>
                  <p className="lg">
                    <span>HYBA TRANSPORT</span>
                    <span>FLEET MOVEMENT</span>
                    <span>ODISHA LOGISTICS</span>
                  </p>
                </Copy>
              </div>
            </div>

            {/* <div className="hero-footer-outer">
              <Copy animateOnScroll={false} delay={isInitialLoad ? 6.65 : 1.85}>
                <div className="hero-footer-copy">
                  <p className="sm">&copy; Siddharth Transport</p>
                  <p className="sm">( Odisha )</p>
                </div>
              </Copy>
            </div> */}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <TechSkills />

      <div className="section-divider"></div>

      <section className="featured-work">
        <div className="container">
          <div className="featured-work-header-content">
            <div className="featured-work-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>Operations</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="featured-work-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  A snapshot of how Siddharth Transport supports industrial
                  movement, regional dispatch, fleet readiness, and dependable
                  delivery across Odisha.
                </p>
              </Copy>
            </div>
          </div>

          <FeaturedWork />
        </div>
      </section>

      <div className="section-divider"></div>

      <section className="services-header-container">

        <div className="container">
          <div className="services-header-content">
            <div className="services-header">
              <Copy animateOnScroll={true} delay={0.25}>
                <h1>SERVICES</h1>
              </Copy>
            </div>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 32 32"
                fill="none"
                className="icon"
              >
                <path
                  d="M16 26.6665L16 5.33317"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M22.6667 19.9999L16 26.6665L9.33337 19.9998"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>

            <div className="services-header-copy">
              <Copy animateOnScroll={true} delay={0.25}>
                <p className="lg">
                  Transport support built around dependable routing,
                  coordinated fleets, safe handling, and long-term client
                  service for regional and industrial movement.
                </p>
              </Copy>
            </div>
          </div>
        </div>
        <ServicesSection />
      </section>
      
      <Spotlight />

      <CTACard />

      <Footer />
    </>
  );
};

export default Page;
