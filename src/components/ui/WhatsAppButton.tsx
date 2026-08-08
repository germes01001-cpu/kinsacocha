import { MessageCircle } from "lucide-react";

import { waLink } from "@/lib/whatsapp";

/** Единственный CTA на сайте. Формы бронирования нет намеренно. */
export default function WhatsAppButton({
  message,
  label,
  variant = "solid",
  className = "",
}: {
  message: string;
  label: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const styles = {
    solid:
      "bg-clay text-paper hover:bg-ink focus-visible:outline-clay",
    outline:
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-ink",
    light:
      "border border-paper/30 text-paper hover:bg-paper hover:text-ink focus-visible:outline-paper",
  }[variant];

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${styles} ${className}`}
    >
      <MessageCircle size={17} strokeWidth={1.75} aria-hidden />
      {label}
    </a>
  );
}
