import Link from 'next/link';
import Icon from '@/components/Icon';
import Seo from '@/components/Seo';
import { Reveal, SerialMonitor, StackVisual } from '@/components/motion';
import { CTABand, IconBadge, PageHero, Picture, SectionHeader, tone } from '@/components/ui';
import { services } from '@/lib/content';

export default function Services() {
  return (
    <>
      <Seo title="Services" description="Embedded systems and IoT at the core, supported by web & mobile development, electrical engineering projects and training." />

      <PageHero
        eyebrow="Services"
        title="One team, from the circuit board to the app store"
        subtitle="Embedded systems are our core. Software, electrical engineering and training make sure every system we build works in the real world."
      >
        <div className="mt-10 flex animate-fade-up flex-wrap justify-center gap-2 [animation-delay:240ms]">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium backdrop-blur transition ${
                s.core
                  ? 'border-accent-300 bg-accent-50 text-accent-700 hover:bg-accent-100'
                  : 'border-slate-200 bg-white/80 text-slate-700 hover:border-brand-300 hover:text-brand-800'
              }`}
            >
              <Icon name={s.icon} className="h-4 w-4" /> {s.short}
              {s.core && <span className="rounded-full bg-accent-500 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">Core</span>}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="container space-y-24 pb-24">
        {services.map((s, idx) => {
          const t = tone[s.color];
          const flip = idx % 2 === 1;
          return (
            <div key={s.slug} id={s.slug} className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2">
              <Reveal from={flip ? 'right' : 'left'} className={`relative ${flip ? 'lg:order-2' : ''}`}>
                <Picture src={s.image} alt={s.name} className="shadow-xl shadow-brand-900/10" />
                {s.core && (
                  <div className="absolute -bottom-8 -right-4 hidden w-72 sm:block">
                    <SerialMonitor />
                  </div>
                )}
              </Reveal>
              <div>
                <Reveal className="flex items-center gap-3">
                  <IconBadge name={s.icon} color={s.color} />
                  <span className="text-sm font-semibold text-slate-400">0{idx + 1}</span>
                  {s.core && <span className="eyebrow !border-accent-200 !bg-accent-50 !text-accent-700">Our core</span>}
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="mt-5 text-3xl font-bold sm:text-4xl">{s.name}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">{s.summary}</p>
                </Reveal>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.items.map((it, i) => (
                    <Reveal as="li" key={it.title} delay={120 + i * 60} className="rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100">
                      <p className="flex items-start gap-2 font-semibold text-ink">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${t.solid}`} /> {it.title}
                      </p>
                      <p className="mt-1 pl-3.5 text-sm text-slate-600">{it.text}</p>
                    </Reveal>
                  ))}
                </ul>
                <Link
                  href={s.slug === 'training' ? '/training' : `/contact?topic=${encodeURIComponent(s.name)}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900"
                >
                  {s.slug === 'training' ? 'See training programmes' : 'Discuss a project'} <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* How it fits together */}
      <section className="relative overflow-hidden bg-brand-950 py-24">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="container relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              dark
              eyebrow="How it fits together"
              title="Every layer of a connected system, under one roof"
              subtitle="Most projects need several of our services at once. A smart meter needs electronics, firmware, an app, a dashboard and a proper installation. With us, that’s one contract and one team."
            />
            <Link href="/projects" className="btn-primary mt-8">
              See it in our projects <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <Reveal from="scale">
            <StackVisual />
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
