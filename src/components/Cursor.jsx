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

    return () => {
      cursor.destroy();
    };
  }, []);
}