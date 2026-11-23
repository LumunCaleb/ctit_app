import Link from 'next/link';
import Icon from '@/components/Icon';
import Seo from '@/components/Seo';
import { Reveal } from '@/components/motion';
import { CTABand, IconBadge, PageHero, Picture, SectionHeader } from '@/components/ui';
import { mission, services, values, vision } from '@/lib/content';

export default function About() {
  return (
    <>
      <Seo title="About us" description={vision} />

      <PageHero
        eyebrow="About us"
        title="Engineers who build both sides of the system"
        subtitle="CT Integrated Technologies is a Nigerian engineering startup working where electronics, software and electrical infrastructure meet."
      />

      {/* Story */}
      <section className="container pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal from="left">
            <Picture src="/images/workshop.svg" alt="Our engineering workshop" className="shadow-2xl shadow-brand-900/10" />
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Our story"
              title="Started by an electrical engineer, built around embedded systems"
            />
            <Reveal delay={100} className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
              <p>
                We started as electrical engineers wiring buildings, installing solar and setting up security systems.
                Again and again we saw the same gap: good hardware let down by poor software, and good software that
                never reached the physical world.
              </p>
              <p>
                So we built a company that does both. Today our core is <strong className="text-ink">custom embedded systems</strong> —
                the electronics and firmware inside smart devices — supported by app and web development, electrical
                projects and hands-on training.
              </p>
            </Reveal>
            <Reveal delay={200} className="mt-8 flex flex-wrap gap-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-brand-300 hover:text-brand-800"
                >
                  <Icon name={s.icon} className="h-4 w-4" /> {s.short}
                </Link>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="container pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal from="left" className="relative overflow-hidden rounded-3xl bg-brand-950 p-8 text-slate-300 md:p-10">
            <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
            <div className="absolute -right-16 -top-16 h-56 w-56 animate-glow rounded-full bg-accent-500 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-300">
                <Icon name="eye" className="h-6 w-6" />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-white">Our vision</h2>
              <p className="mt-4 text-lg leading-relaxed">{vision}</p>
            </div>
          </Reveal>
          <Reveal from="right" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-50 to-white p-8 ring-1 ring-accent-100 md:p-10">
            <IconBadge name="target" color="accent" size="lg" />
            <h2 className="mt-6 text-2xl font-bold">Our mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">{mission}</p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50/70 py-24">
        <div className="container">
          <SectionHeader center eyebrow="Core values" title="What we stand for" subtitle="Eight principles that shape how we hire, build and partner." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.name} delay={(i % 4) * 90} className="card card-hover h-full">
                <IconBadge name={v.icon} color={['brand', 'accent', 'leaf'][i % 3]} />
                <h3 className="mt-5 text-lg font-bold">{v.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Want to build with us?" text="We’re always looking for partners, clients and young engineers who want to solve real problems." />
    </>
  );
}
