import Link from 'next/link';
import Icon from '@/components/Icon';
import Seo from '@/components/Seo';
import { CircuitLines, Reveal } from '@/components/motion';
import { CTABand, IconBadge, PageHero, Picture, SectionHeader } from '@/components/ui';
import { training } from '@/lib/content';

const journey = [
  { title: 'Learn', text: 'Short, focused lessons on the fundamentals.', icon: 'cap' },
  { title: 'Build', text: 'Real hardware and real code from week one.', icon: 'cpu' },
  { title: 'Get mentored', text: 'Work alongside engineers on live projects.', icon: 'users' },
  { title: 'Showcase', text: 'Leave with a project portfolio that proves your skills.', icon: 'award' },
];

const register = '/contact?topic=Training%20%26%20Mentorship';

export default function Training() {
  return (
    <>
      <Seo title="Training" description="Hands-on training in embedded systems, IoT, solar & electrical installation, and web & mobile development." />

      <PageHero
        eyebrow="Training & mentorship"
        title="Learn to build the hardware and software of the future"
        subtitle="Practical, project-based training taught by working engineers — part of our mission to create jobs for young people."
      >
        <div className="mt-8 flex animate-fade-up justify-center gap-3 [animation-delay:240ms]">
          <Link href={register} className="btn-primary">
            Register interest <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <a href="#tracks" className="btn-ghost">View tracks</a>
        </div>
      </PageHero>

      <section className="container pb-24">
        <Reveal from="scale">
          <Picture src={training.image} alt="Hands-on training session" aspect="aspect-[16/9]" className="shadow-2xl shadow-brand-900/10" />
        </Reveal>
      </section>

      <section id="tracks" className="container scroll-mt-28 pb-24">
        <SectionHeader center eyebrow="Tracks" title="Choose your path" subtitle="Every track ends with a real project you build yourself." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {training.tracks.map((t, i) => (
            <Reveal key={t.title} delay={(i % 2) * 120} className="card card-hover flex flex-col">
              <div className="flex items-center gap-4">
                <IconBadge name={t.icon} color={['accent', 'brand', 'leaf', 'brand'][i]} size="lg" />
                <h3 className="text-xl font-bold">{t.title}</h3>
              </div>
              <p className="mt-4 leading-relaxed text-slate-600">{t.text}</p>
              <ul className="mt-5 grid flex-1 gap-2 sm:grid-cols-2">
                {t.topics.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm text-slate-700">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-leaf-500" strokeWidth={2.5} /> {x}
                  </li>
                ))}
              </ul>
              <Link href={register} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
                Register interest <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-950 py-24">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <CircuitLines className="opacity-70" />
        <div className="container relative">
          <SectionHeader dark center eyebrow="How it works" title="From first circuit to first job" />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal key={j.title} delay={i * 130} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 ring-1 ring-accent-400/30">
                    <Icon name={j.icon} />
                  </span>
                  <span className="text-4xl font-extrabold text-white/10">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{j.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{j.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24">
        <SectionHeader center eyebrow="Who it’s for" title="Built for people who want to build" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {training.audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 100} className="card text-center">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <Icon name={a.icon} />
              </span>
              <h3 className="mt-4 font-bold">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{a.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand title="Ready to start building?" text="Tell us which track interests you and we’ll send details of the next cohort." />
    </>
  );
}
