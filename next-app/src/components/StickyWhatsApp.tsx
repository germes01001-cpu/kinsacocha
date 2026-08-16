"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { waLink } from "@/lib/whatsapp";
import type { Dict } from "@/i18n/dict";

/**
 * Закреплённая кнопка WhatsApp. Только мобайл.
 *
 * Трафик придёт из Instagram, с телефонов. Без этой кнопки, чтобы написать,
 * нужно доскроллить до самого низа — самая дешёвая правка с самым заметным
 * влиянием на количество заявок.
 *
 * Появляется после Hero, чтобы не перекрывать первый экран.
 */
export default function StickyWhatsApp({ t }: { t: Dict }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink(t.contact.wa)}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2.5 bg-clay px-6 py-4 text-sm font-medium text-paper shadow-lg transition-all duration-500 lg:hidden ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
      {t.contact.cta}
    </a>
  );
}
