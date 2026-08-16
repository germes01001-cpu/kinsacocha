"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Тяжёлое медленное проявление при скролле.
 *
 * IntersectionObserver вместо библиотеки анимации: ноль килобайт в бандле.
 * Основной трафик придёт из Instagram, с телефонов, часто на слабой связи.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  as?: "div" | "section" | "li" | "article" | "details";
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // проявляем один раз, назад не убираем
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
}
