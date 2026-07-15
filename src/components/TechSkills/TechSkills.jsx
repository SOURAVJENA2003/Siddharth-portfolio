"use client";
import React, { useRef } from "react";
import "./TechSkills.css";
import Copy from "../Copy/Copy";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skillsData = [
  {
    category: "Transport Solutions",
    skills: [
      "Hyba Transport",
      "Deeper Route Movement",
      "Regional Logistics",
      "Industrial Dispatch",
      "Bulk Load Support",
      "Scheduled Delivery Runs",
    ],
  },
  {
    category: "Operational Focus",
    skills: [
      "Route Planning",
      "Fleet Coordination",
      "Loading Supervision",
      "Dispatch Management",
      "Delivery Tracking",
      "Client Communication",
    ],
  },
  {
    category: "Coverage & Support",
    skills: [
      "Odisha Coverage",
      "Regional Networks",
      "Flexible Scheduling",
      "Business Dispatch Support",
      "Recurring Movement Planning",
      "On-Time Coordination",
    ],
  },
  {
    category: "Business Values",
    skills: [
      "Reliability",
      "Safety",
      "Accountability",
      "Responsive Service",
      "Cost Awareness",
      "Long-Term Partnerships",
    ],
  },
];

const TechSkills = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".skill-item");
      
      gsap.from(items, {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          once: true,
        },
      });

      // Refresh ScrollTrigger after a short delay to ensure layout is settled
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    },
    { scope: containerRef }
  );

  return (
    <section className="tech-skills" ref={containerRef}>
      <div className="container">
        <div className="tech-skills-header">
          <Copy animateOnScroll={true}>
            <h1>Service Strengths</h1>
          </Copy>
        </div>

        <div className="skills-grid">
          {skillsData.map((group, idx) => (
            <div key={idx} className="skills-group">
              <div className="skills-category">
                <div className="category-index">
                   <p className="sm">0{idx + 1}</p>
                </div>
                <Copy animateOnScroll={true} delay={0.2}>
                  <p className="sm">{group.category}</p>
                </Copy>
              </div>
              <div className="skills-list">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
