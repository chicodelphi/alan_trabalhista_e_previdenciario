import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";

export const LEGAL_EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_CONFIG = {
  once: true,
  margin: "-60px",
} as const;

/**
 * Top fixed scroll reading hairline across the viewport
 */
export function ScrollReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] origin-left bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-400 pointer-events-none"
      aria-hidden="true"
    />
  );
}

/**
 * Crisp weighted reveal for headings, paragraphs, and legal dossiers
 */
interface DossierRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function DossierReveal({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 20,
  className = "",
}: DossierRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{
        duration,
        delay,
        ease: LEGAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated counter for legal track-record metrics (5 UFs, 50%, 5 anos)
 */
interface CaseMetricCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  formatThousands?: boolean;
  className?: string;
}

export function CaseMetricCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.6,
  formatThousands = false,
  className = "",
}: CaseMetricCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = (timestamp - startTimestamp) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out quint for dignified deceleration
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  const formatted = formatThousands
    ? displayValue.toLocaleString("pt-BR")
    : displayValue.toString();

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/**
 * Interactive spotlight card tracking pointer coordinates via MotionValues without re-renders
 */
interface SpotlightCaseCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: "amber" | "emerald";
}

export function SpotlightCaseCard({
  children,
  className = "",
  accentColor = "amber",
}: SpotlightCaseCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const glowColor =
    accentColor === "emerald"
      ? "rgba(16, 185, 129, 0.14)"
      : "rgba(245, 158, 11, 0.13)";

  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F1623]/90 transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
        aria-hidden="true"
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/**
 * Seamless infinite ticker showing Brazilian Courts & Jurisdictions of Practice
 */
interface JurisdictionTickerProps {
  items: string[];
}

export function JurisdictionTicker({ items }: JurisdictionTickerProps) {
  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#080C14] to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#080C14] to-transparent"
        aria-hidden="true"
      />
      <motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 34,
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((label, idx) => (
          <div
            key={`${label}-${idx}`}
            className="flex items-center gap-3 whitespace-nowrap text-xs font-medium tracking-wider text-slate-400 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80" />
            <span>{label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
