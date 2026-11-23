import Link from 'next/link';
import Icon from './Icon';
import { CircuitLines, Reveal } from './motion';

// Tailwind needs full class names in source, so map tones to literal classes.
export const tone = {
  brand: { bg: 'bg-brand-50', text: 'text-brand-700', ring: 'ring-brand-100', solid: 'bg-brand-600' },
  accent: { bg: 'bg-accent-50', text: 'text-accent-600', ring: 'ring-accent-100', solid: 'bg-accent-500' },
  leaf: { bg: 'bg-leaf-50', text: 'text-leaf-600', ring: 'ring-leaf-100', solid: 'bg-leaf-500' },
};

export function IconBadge({ name, color = 'brand', size = 'md' }) {
  const t = tone[color];
  const s = size === 'lg' ? 'h-14 w-14' : 'h-11 w-11';
  const i = size === 'lg' ? 'h-7 w-7' : 'h-5 w-5';
  return (
    <span className={`inline-flex ${s} shrink-0 items-center justify-center rounded-xl ring-1 ${t.bg} ${t.text} ${t.ring}`}>
      <Icon name={name} className={i} />
    </span>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, center = false, dark = false, className = '' }) {
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow &&
        (dark ? (
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-300">
            {eyebrow}
          </span>
        ) : (
          <span className="eyebrow">{eyebrow}</span>
        ))}
      <h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${dark ? 'text-white' : ''}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{subtitle}</p>}
    </Reveal>
  );
}

/* Image with a subtle frame and zoom on hover. Works for .svg, .jpg, .png, .webp. */
export function Picture({ src, alt, className = '', aspect = 'aspect-[4/3]', rounded = 'rounded-3xl' }) {
  return (
    <div className={`group/pic relative overflow-hidden ${rounded} bg-brand-950 ring-1 ring-slate-900/5 ${aspect} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 ease-out group-hover/pic:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16 md:-mt-20 md:pt-20">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[880px] -translate-x-1/2 animate-glow rounded-full bg-gradient-to-r from-brand-300 via-accent-200 to-leaf-200 blur-3xl" aria-hidden="true" />
      <div className="container relative py-20 text-center md:py-28">
        {eyebrow && <span className="eyebrow animate-fade-up">{eyebrow}</span>}
        <h1 className="mx-auto mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold leading-tight [animation-delay:80ms] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-600 [animation-delay:160ms]">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

const catColor = { Embedded: 'bg-accent-500', Software: 'bg-brand-500', Engineering: 'bg-leaf-500' };

export function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group">
      <div className="relative">
        <Picture src={project.image} alt={project.title} />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
          <span className={`h-1.5 w-1.5 rounded-full ${catColor[project.category]}`} /> {project.category}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold transition group-hover:text-brand-700">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.text}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export function CTABand({
  title = 'Have an idea that needs hardware and software?',
  text = 'From a single prototype to a full installation — tell us what you’re building and we’ll help you make it real.',
}) {
  return (
    <section className="container py-20">
      <Reveal from="scale">
        <div className="relative overflow-hidden rounded-3xl bg-brand-950 px-6 py-14 text-center sm:px-12 md:py-20">
          <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
          <CircuitLines />
          <div className="absolute -right-24 -top-24 h-72 w-72 animate-glow rounded-full bg-accent-500 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-leaf-500/20 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">{text}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a project <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="btn-ghost-light">
                See our work
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
