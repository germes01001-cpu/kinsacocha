import { SITE } from "@/config/site";

/** Ссылка на WhatsApp с предзаполненным сообщением. Единственный CTA на сайте. */
export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
