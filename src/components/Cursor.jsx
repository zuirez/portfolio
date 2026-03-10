import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

export default function Cursor() {
  useEffect(() => {
    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.5,
      skewing: 2,
      ease: "expo.out",
    });

    // Select all elements with data-cursor
    const hoverElements = document.querySelectorAll("[data-cursor]");

    const handlers = [];

    hoverElements.forEach((el) => {
      const bgColor = el.getAttribute("data-cursor-bg") || "#fff";
      const borderColor = el.getAttribute("data-cursor-border") || "#000";

      const onEnter = () => {
        gsap.to(cursor.el, {
          scale: 2,
          backgroundColor: bgColor,
          borderColor: borderColor,
          mixBlendMode: "difference",
          duration: 0.3,
        });
      };

      const onLeave = () => {
        gsap.to(cursor.el, {
          scale: 1,
          backgroundColor: "#000",
          borderColor: "#fff",
          mixBlendMode: "normal",
          duration: 0.3,
        });
      };

      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      handlers.push({ el, onEnter, onLeave });
    });

    return () => {
      cursor.destroy();
      handlers.forEach(({ el, onEnter, onLeave }) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return null;
}