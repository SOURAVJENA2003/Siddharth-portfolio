"use client";
import "./Button.css";
import { HiLightningBolt } from "react-icons/hi";
import { useViewTransition } from "@/hooks/useViewTransition";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Button({
  href,
  children,
  variant = "dark",
  icon,
  animateOnScroll = false,
  delay = 0,
  target,
}) {
  const IconComponent = icon || HiLightningBolt;
  const { navigateWithTransition } = useViewTransition();
  const buttonRef = useRef(null);
  const labelRef = useRef(null);
  const iconRef = useRef(null);
  const splitRef = useRef(null);
  const lines = useRef([]);
  const animationRefs = useRef([]);
  const resizeObserverRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const lastWidthRef = useRef(0);

  const waitForFonts = async () => {
    try {
      await document.fonts.ready;

      const customFonts = [
        "Geist Mono",
        "PP Neue Montreal",
        "PP Pangram Sans",
        "Big Shoulders Display",
      ];
      const fontCheckPromises = customFonts.map((fontFamily) => {
        return document.fonts.check(`16px ${fontFamily}`);
      });

      await Promise.all(fontCheckPromises);
      await new Promise((resolve) => setTimeout(resolve, 100));

      return true;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return true;
    }
  };

  useGSAP(
    () => {
      if (!labelRef.current || !buttonRef.current) return;

      const cleanupSplitText = () => {
        animationRefs.current.forEach((animation) => {
          if (animation?.scrollTrigger) {
            animation.scrollTrigger.kill();
          }
          animation?.kill?.();
        });
        animationRefs.current = [];

        if (splitRef.current) {
          splitRef.current.revert();
        }

        splitRef.current = null;
        lines.current = [];
      };

      const initializeSplitText = async () => {
        await waitForFonts();

        if (!buttonRef.current) return;

        cleanupSplitText();
        lastWidthRef.current = Math.round(
          buttonRef.current.getBoundingClientRect().width
        );

        const split = SplitText.create(labelRef.current, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
          lineThreshold: 0.1,
        });

        splitRef.current = split;
        lines.current = split.lines;

        gsap.set(lines.current, { y: "100%" });

        if (iconRef.current) {
          gsap.set(iconRef.current, { scale: 0 });
        }

        const animationProps = {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };

        if (animateOnScroll) {
          const linesAnimation = gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: labelRef.current,
              start: "top 90%",
              once: true,
            },
          });
          animationRefs.current.push(linesAnimation);

          if (iconRef.current) {
            const iconAnimation = gsap.to(iconRef.current, {
              scale: 1,
              duration: 0.8,
              ease: "power4.out",
              delay: delay + 0.3,
              scrollTrigger: {
                trigger: labelRef.current,
                start: "top 90%",
                once: true,
              },
            });
            animationRefs.current.push(iconAnimation);
          }
        } else {
          const linesAnimation = gsap.to(lines.current, animationProps);
          animationRefs.current.push(linesAnimation);

          if (iconRef.current) {
            const iconAnimation = gsap.to(iconRef.current, {
              scale: 1,
              duration: 0.8,
              ease: "power4.out",
              delay: delay,
            });
            animationRefs.current.push(iconAnimation);
          }
        }
      };

      initializeSplitText();

      const handleLayoutChange = () => {
        if (!buttonRef.current) return;

        const nextWidth = Math.round(
          buttonRef.current.getBoundingClientRect().width
        );

        if (nextWidth === lastWidthRef.current) {
          return;
        }

        if (resizeTimeoutRef.current) {
          clearTimeout(resizeTimeoutRef.current);
        }

        resizeTimeoutRef.current = setTimeout(() => {
          initializeSplitText();
          ScrollTrigger.refresh();
        }, 150);
      };

      if (typeof ResizeObserver !== "undefined") {
        resizeObserverRef.current = new ResizeObserver(handleLayoutChange);
        resizeObserverRef.current.observe(buttonRef.current);
      }

      window.addEventListener("resize", handleLayoutChange, { passive: true });
      window.addEventListener("orientationchange", handleLayoutChange);

      return () => {
        if (resizeTimeoutRef.current) {
          clearTimeout(resizeTimeoutRef.current);
        }
        resizeObserverRef.current?.disconnect();
        window.removeEventListener("resize", handleLayoutChange);
        window.removeEventListener("orientationchange", handleLayoutChange);
        cleanupSplitText();
      };
    },
    { scope: buttonRef, dependencies: [animateOnScroll, delay] }
  );

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`button button--${variant}`}
      target={target}
      onClick={(e) => {
        if (!href) return;
        
        // Don't prevent default for external links (mailto, tel, http, https) or when target="_blank"
        if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http://") || href.startsWith("https://") || target === "_blank") {
          return;
        }
        
        e.preventDefault();
        navigateWithTransition(href);
      }}
    >
      <span className="button-label" ref={labelRef}>
        {children}
      </span>
      <span className="button-icon">
        <span className="button-icon-inner" ref={iconRef}>
          <IconComponent size={12} />
        </span>
      </span>
    </a>
  );
}
