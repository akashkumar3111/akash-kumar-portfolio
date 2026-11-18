 "use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function ExperienceMotion() {
  const [loading, setLoading] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1250);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY * 0.12}px`);
    };
    const onPointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    onScroll();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      audioRef.current?.close();
    };
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".skill-card, .project-card, .about-card, .contact-panel"));
    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const move = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--mx", `${x * 100}%`);
        card.style.setProperty("--my", `${y * 100}%`);
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          card.style.transform = `perspective(900px) rotateX(${(0.5-y)*5}deg) rotateY(${(x-0.5)*6}deg) translateY(-5px)`;
        }
      };
      const leave = () => { card.style.transform = ""; };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      cleanups.push(() => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); });
    });
    return () => cleanups.forEach(fn => fn());
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".stat-item strong[data-count]"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = Number(el.dataset.count || 0);
        const start = performance.now();
        const duration = 1100;
        const frame = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          el.textContent = String(Math.round(target * (1 - Math.pow(1-t, 3)))).padStart(2, "0");
          if (t < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
        observer.unobserve(el);
      });
    }, { threshold: 0.6 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  

  return <>
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
    <div className="pointer-aura" aria-hidden="true" />
    <div className="cursor-trail" aria-hidden="true" />
    
    <AnimatePresence>
      {loading && <motion.div className="preloader" initial={{opacity:1}} exit={{opacity:0, transition:{duration:.55}}}>
        <motion.div className="preloader-mark" initial={{scale:.72, rotate:-18}} animate={{scale:1, rotate:0}} transition={{type:"spring", stiffness:150, damping:12}}>AK</motion.div>
        <motion.div className="preloader-name" initial={{opacity:0, y:12}} animate={{opacity:1,y:0}} transition={{delay:.25}}>AKASH KUMAR</motion.div>
        <div className="preloader-track"><motion.span initial={{width:"0%"}} animate={{width:"100%"}} transition={{duration:1.05,ease:"easeInOut"}}/></div>
        <span className="preloader-caption">CREATIVE DEVELOPER · PORTFOLIO</span>
      </motion.div>}
    </AnimatePresence>
  </>;
}
