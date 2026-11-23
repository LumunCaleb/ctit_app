import Link from 'next/link';
import Icon from '@/components/Icon';
import Seo from '@/components/Seo';
import { CircuitLines, IntersectionDiagram, Marquee, Reveal, SerialMonitor, StackVisual } from '@/components/motion';
import { CTABand, IconBadge, Picture, ProjectCard, SectionHeader } from '@/components/ui';
import { company, industries, mission, projects, services } from '@/lib/content';

const steps = [
  { title: 'Discover', text: 'We understand the problem on-site, with the people who live it.', icon: 'target' },
  { title: 'Design', text: 'Circuits, firmware architecture, app flows — planned as one system.', icon: 'layers' },
  { title: 'Build & test', text: 'Prototype in our workshop, test on the bench, then in the field.', icon: 'cpu' },
  { title: 'Deploy & support', text: 'We install, connect, train your team and keep it running.', icon: 'shield' },
];

export default function Home() {
  const core = services.find((s) => s.core);
  const supporting = services.filter((s) => !s.core);

  return (
    <>
      <Seo />

      {/* Hero */}
      <section className="relative -mt-16 overflow-hidden bg-brand-950 pt-16 text-slate-300 md:-mt-20 md:pt-20">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <CircuitLines />
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] animate-glow rounded-full bg-accent-500 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />

        <div className="container relative grid items-center gap-16 pb-24 pt-14 md:pt-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" /> Software · Embedded systems · Engineering
            </span>
            <h1 className="mt-6 animate-fade-up text-5xl font-extrabold leading-[1.05] text-white [animation-delay:80ms] sm:text-6xl lg:text-7xl">
              Where{' '}
              <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">hardware</span>
              <br />
              meets{' '}
              <span className="bg-gradient-to-r from-brand-300 to-brand-400 bg-clip-text text-transparent">software.</span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-300 [animation-delay:160ms]">
              {company.description}
            </p>
            <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a project <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="btn-ghost-light">
                See our work
              </Link>
            </div>
            <ul className="mt-10 grid animate-fade-up gap-3 text-sm text-slate-300 [animation-delay:320ms] sm:grid-cols-3">
              {['Apps & web platforms', 'Custom electronics & firmware', 'Installation & training'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-leaf-400" strokeWidth={2.5} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-fade-up [animation-delay:300ms]">
            <StackVisual />
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative overflow-hidden border-t border-white/10 bg-brand-950 py-10">
        <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mb-6 flex items-center justify-center gap-4 px-5">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent-400/70 sm:w-20" />
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-300">Platforms & tools we build with</p>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent-400/70 sm:w-20" />
        </div>
        <div className="relative">
          <Marquee />
        </div>
      </section>

      {/* Intersection */}
      <section className="container py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Our approach"
              title="Most companies do hardware or software. We do the space in between."
              subtitle="A smart device is only as good as its weakest layer. Because one team designs the circuit, writes the firmware, builds the app and installs the system, everything fits — and you have one partner accountable for all of it."
            />
            <div className="mt-8 space-y-4">
              {[
                { icon: 'cpu', c: 'accent', t: 'Engineered from the circuit up', d: 'Led by electrical engineers who design the electronics themselves.' },
                { icon: 'code', c: 'brand', t: 'Software that knows the hardware', d: 'Apps and dashboards built around real device behaviour.' },
                { icon: 'bolt', c: 'leaf', t: 'Installed and supported in the field', d: 'We wire it, power it, and keep it running.' },
              ].map((x, i) => (
                <Reveal key={x.t} delay={i * 100} className="flex gap-4">
                  <IconBadge name={x.icon} color={x.c} />
                  <div>
                    <p className="font-semibold text-ink">{x.t}</p>
                    <p className="mt-1 text-sm text-slate-600">{x.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal from="scale" className="relative overflow-hidden rounded-3xl bg-brand-950 p-6 sm:p-10">
            <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <IntersectionDiagram />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core: embedded */}
      <section className="relative overflow-hidden bg-brand-950 py-24 text-slate-300">
        <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
        <CircuitLines className="opacity-60" />
        <div className="container relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="left" className="relative">
            <Picture src={core.image} alt="Custom embedded electronics" className="shadow-2xl shadow-black/40" />
            <div className="absolute -bottom-10 -right-4 hidden w-80 sm:block md:-right-10">
              <SerialMonitor />
            </div>
          </Reveal>
          <div>
            <SectionHeader dark eyebrow="Our core" title={core.name} subtitle={core.summary} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {core.items.map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 70} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-accent-400/40 hover:bg-white/[0.06]">
                  <p className="flex items-center gap-2 font-semibold text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> {it.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{it.text}</p>
                </Reveal>
              ))}
            </ul>
            <Link href="/services#embedded" className="btn-primary mt-8">
              Explore embedded services <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Supporting services */}
      <section className="container py-24">
        <SectionHeader
          center
          eyebrow="Around the core"
          title="Everything a smart system needs to succeed"
          subtitle="Our supporting services make sure the devices we build are powered, connected, usable — and that there are people trained to run them."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {supporting.map((s, i) => (
            <Reveal key={s.slug} delay={i * 120}>
              <Link href={`/services#${s.slug}`} className="card card-hover group block h-full overflow-hidden p-0">
                <Picture src={s.image} alt={s.name} aspect="aspect-[16/10]" rounded="rounded-none" />
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <IconBadge name={s.icon} color={s.color} />
                    <h3 className="text-lg font-bold">{s.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-50/70 py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader eyebrow="Featured work" title="Built, wired and shipped" subtitle="A look at the kind of systems we design and deliver." />
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
              All projects <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.title} project={p} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container py-24">
        <SectionHeader center eyebrow="How we work" title="From idea to installed system" />
        <div className="relative mt-14 grid gap-10 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-6 hidden h-px overflow-hidden bg-slate-200 md:block" aria-hidden="true">
            <div className="h-full w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-accent-500 to-transparent bg-[length:200%_100%]" style={{ width: '100%' }} />
          </div>
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 150} className="relative text-center">
              <span className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-700 shadow-sm">
                <Icon name={s.icon} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent-600">Step {i + 1}</p>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-slate-600">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="container pb-8">
        <Reveal className="rounded-3xl border border-slate-200 p-8 md:p-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400">Industries we serve</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((x) => (
              <div key={x.name} className="flex flex-col items-center gap-3 rounded-2xl p-4 text-center transition hover:bg-slate-50">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={x.icon} />
                </span>
                <span className="text-sm font-medium text-ink">{x.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Training + mission */}
      <section className="container py-16">
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal from="left" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-500 to-accent-600 p-8 text-white md:p-10 lg:col-span-2">
            <div className="absolute -right-10 -top-10 h-40 w-40 animate-spin-slow rounded-full border-[16px] border-dashed border-white/15" aria-hidden="true" />
            <Icon name="cap" className="relative h-10 w-10" />
            <h2 className="relative mt-6 text-2xl font-bold text-white">Learn embedded systems, IoT and solar — hands-on.</h2>
            <p className="relative mt-3 text-accent-50">Project-based training for students, graduates and technicians.</p>
            <Link href="/training" className="btn relative mt-8 bg-white text-accent-700 hover:bg-accent-50">
              View training <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal from="right" className="rounded-3xl bg-gradient-to-br from-brand-50 via-white to-accent-50 p-8 ring-1 ring-slate-200/70 md:p-10 lg:col-span-3">
            <span className="eyebrow">Our mission</span>
            <p className="mt-5 text-xl font-semibold leading-snug text-ink sm:text-2xl">“{mission}”</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900">
              More about us <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
