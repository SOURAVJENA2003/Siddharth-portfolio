"use client";
import "./studio.css";
import TeamCards from "@/components/TeamCards/TeamCards";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTACard from "@/components/CTACard/CTACard";
import Footer from "@/components/Footer/Footer";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "@/components/Copy/Copy";

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
    <div className="studio-page">
      <section className="studio-header">
        <div className="container">
          <div className="studio-header-row">
            <Copy delay={0.8}>
              <h1>Built for Movement</h1>
            </Copy>
          </div>

          <div className="studio-header-row">
            <Copy delay={0.95}>
              <h1>Driven by Reliability</h1>
            </Copy>
          </div>
        </div>
      </section>

      <section className="studio-copy">
        <div className="container">
          <div className="studio-copy-img">
            <img src="/studio/studio-header.jpg" alt="" />
          </div>

          <Copy animateOnScroll={true}>
            <p className="lg">
              Siddharth Transport is an Odisha-based transport partner focused
              on hyba movement, deeper-route operations, and dependable
              regional logistics. We work with businesses that need practical
              coordination, careful handling, and consistent delivery
              performance.
            </p>

            <p className="lg">
              Our approach is grounded in route discipline, fleet readiness,
              and responsive communication. Whether the requirement is recurring
              movement or one-off dispatch support, we aim to deliver transport
              solutions that are safe, timely, and built for long-term trust.
            </p>
          </Copy>
        </div>
      </section>

      <TeamCards />

      <Spotlight />

      <CTACard />

      <Footer />
    </div>
  );
};

export default Page;
