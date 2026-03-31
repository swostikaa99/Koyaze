import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FullPageSection({ children }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;

    // Create the ScrollTrigger instance
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false, // allows sections to overlap
      scrub: 1,
    });

    // Return cleanup to kill THIS trigger only
    return () => {
      trigger.kill(); // THIS is correct
    };
  }, []);

  return (
    <section ref={ref} className="min-h-screen w-full relative">
      {children}
    </section>
  );
}
