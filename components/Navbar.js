import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Icon from './Icon';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/training', label: 'Training' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // On the dark home hero a pure-white bar is too loud, so the home page uses a soft milky tone.
  const milky = pathname === '/';

  return (
    // Full-width bar flush with the top. Bar height (64px / 80px) matches the
    // -mt-16 / md:-mt-20 on page heroes.
    <header className="sticky top-0 z-50">
      <nav
        className={`border-b border-slate-900/5 transition-shadow duration-300 ${milky ? 'bg-[#e2e7ef]' : 'bg-white'} ${
          scrolled || open ? 'shadow-xl shadow-brand-950/10' : 'shadow-lg shadow-brand-950/5'
        }`}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center" aria-label="CT Integrated Technologies home">
            <Image
              src="/logo-transparent.png"
              alt="CT Integrated Technologies"
              width={200}
              height={81}
              priority
              className="h-12 w-auto md:h-[60px]"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition lg:px-4 ${
                    active ? 'bg-brand-900 text-white' : 'text-slate-600 hover:bg-slate-900/5 hover:text-ink'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          <Link href="/contact" className="btn-primary hidden !py-2.5 lg:inline-flex">
            Work with us
            <Icon name="arrow" className="h-4 w-4" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/60 text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="container absolute inset-x-0 top-full pt-2 md:hidden">
          <div className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  pathname === l.href ? 'bg-brand-50 text-brand-800' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2">
              Work with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
