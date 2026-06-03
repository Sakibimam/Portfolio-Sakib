"use client";

import { useEffect, useRef } from "react";

export function InteractiveEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    if (!cursor || !ring || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frame = requestAnimationFrame(animateRing);
    };

    const interactiveElements = document.querySelectorAll("a, button");
    const onEnter = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
      ring.style.opacity = "0.15";
    };
    const onLeave = () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
      ring.style.opacity = "0.4";
    };

    document.addEventListener("mousemove", onMove);
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", onEnter);
      element.addEventListener("mouseleave", onLeave);
    });
    frame = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", onEnter);
        element.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("visible"), index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
