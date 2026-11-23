import Link from 'next/link';
import Icon from './Icon';
import { company, services } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-slate-300">
      <div className="bg-grid-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container relative grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 font-bold text-white">CT</span>
            <span className="text-lg font-semibold text-white">{company.name}</span>
          </div>
          <p className="mt-4 text-xl font-semibold text-white">{company.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">{company.description}</p>
          <a
            href={`mailto:${company.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-400"
          >
            <Icon name="mail" className="h-4 w-4" />
            {company.email}
          </a>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/training" className="hover:text-white">Training</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">What we do</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((d) => (
              <li key={d.slug}>
                <Link href={`/services#${d.slug}`} className="hover:text-white">{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <Icon name="pin" className="h-3.5 w-3.5" /> Proudly built in {company.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
