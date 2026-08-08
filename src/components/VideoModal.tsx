"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

import { SITE } from "@/config/site";

/**
 * Vimeo в модалке с backdrop-blur.
 *
 * Полные ролики весят 21–62 МБ — самохостить нельзя, убьёт скорость.
 * TODO: SITE.vimeoId сейчас демо-ролик, заменить на настоящий.
 */
export default function VideoModal({
  open,
  onClose,
  closeLabel,
}: {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-stone/80 p-4 backdrop-blur-lg"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-5 top-5 text-paper/70 transition-colors hover:text-paper"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      <div
        className="aspect-video w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://player.vimeo.com/video/${SITE.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Kinsacocha"
        />
      </div>
    </div>
  );
}
