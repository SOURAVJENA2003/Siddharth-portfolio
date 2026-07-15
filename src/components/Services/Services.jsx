"use client";
import "./Services.css";
import { servicesData } from "./ServicesData.js";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServicesSection = () => {
  const servicesSectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1000px)", () => {
        const serviceCards = document.querySelectorAll(".service-card");
        const cardContainers = document.querySelectorAll(
          ".service-card-container"
        );

        cardContainers.forEach((cardContainer, index) => {
          const rotation = index % 2 === 0 ? 3 : -3;
          gsap.set(cardContainer, { rotation: rotation });
        });

        const scrollTriggerInstances = [];

        gsap.delayedCall(0.1, () => {
          serviceCards.forEach((card, index) => {
            if (index < serviceCards.length - 1) {
              const trigger = ScrollTrigger.create({
                trigger: card,
                start: "top top",
                endTrigger: serviceCards[serviceCards.length - 1],
                end: "top top",
                pin: true,
                pinSpacing: false,
                scrub: 1,
              });
              scrollTriggerInstances.push(trigger);
            }

            // if (index < serviceCards.length - 1) {
            //   const trigger = ScrollTrigger.create({
            //     trigger: serviceCards[index + 1],
            //     start: "top bottom",
            //     end: "top top",
            //   });
            //   scrollTriggerInstances.push(trigger);
            // }
          });
        });

        const refreshHandler = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("orientationchange", refreshHandler);
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad, { passive: true });

        return () => {
          scrollTriggerInstances.forEach((trigger) => trigger.kill());
          window.removeEventListener("orientationchange", refreshHandler);
          window.removeEventListener("load", onLoad);
        };
      });

      mm.add("(max-width: 999px)", () => {
        const serviceCards = document.querySelectorAll(".service-card");
        const cardContainers = document.querySelectorAll(
          ".service-card-container"
        );

        serviceCards.forEach((card) => {
          if (card) gsap.set(card, { clearProps: "all" });
        });
        cardContainers.forEach((cardContainer) => {
          if (cardContainer) gsap.set(cardContainer, { clearProps: "all" });
        });

        ScrollTrigger.refresh();

        const refreshHandler = () => {
          ScrollTrigger.refresh();
        };
        window.addEventListener("orientationchange", refreshHandler);
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad, { passive: true });

        return () => {
          window.removeEventListener("orientationchange", refreshHandler);
          window.removeEventListener("load", onLoad);
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: servicesSectionRef }
  );

  return (
    <div className="services-section" ref={servicesSectionRef}>
      {servicesData.map((item, index) => (
        <div className="service-card" key={item.title}>
          <div
            className="service-card-container"
            id={`service-card-${index + 1}`}
          >
            <div className="service-card-content">
              <div className="service-card-content-wrapper">
                {/* <p className="service-card-label sm">Service {index + 1}</p> */}
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-description lg">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
