import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { TRAVEL } from "@/config/site";
import type { Dict } from "@/i18n/dict";

/**
 * Дорога.
 *
 * Аудитория уже в Куско или Писаке, и её первый вопрос — «далеко ли».
 * Отвечаем только временем: ни карты, ни маршрута, ни координат.
 */
export default function Road({ t }: { t: Dict }) {
  return (
    <section className="bg-paper-deep px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl">{t.road.title}</h2>
            <p className="mt-4 text-muted">{t.road.lead}</p>

            <div className="mt-10 flex gap-12">
              {[
                { value: TRAVEL.fromPisac, label: t.road.pisac },
                { value: TRAVEL.fromCusco, label: t.road.cusco },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-5xl leading-none text-clay">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
                    {t.road.minutes}
                  </p>
                  <p className="mt-1 text-sm text-ink/80">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-[15px] leading-relaxed text-ink/80">
              {t.road.note}
            </p>
            <WhatsAppButton
              message={t.road.wa}
              label={t.road.cta}
              variant="outline"
              className="mt-7"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
