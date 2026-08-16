import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/config/site";
import type { Dict } from "@/i18n/dict";

export default function Contact({ t }: { t: Dict }) {
  return (
    <section id="contact" className="px-5 py-28 sm:px-8 sm:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl">{t.contact.title}</h2>
        <p className="mt-5 text-muted">{t.contact.lead}</p>

        <WhatsAppButton
          message={t.contact.wa}
          label={t.contact.cta}
          className="mt-10"
        />

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted">
          {t.contact.reply}
        </p>
        <p className="mt-2 text-sm text-muted">{t.contact.languages}</p>

        <p className="mt-12 text-sm text-muted">
          {t.contact.emailLabel}:{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="border-b border-ink/20 pb-0.5 text-ink transition-colors hover:border-ink"
          >
            {SITE.email}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
