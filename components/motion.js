import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { stack, tools } from '@/lib/content';

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/* Fades and slides children in when they scroll into view. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', from = 'up' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced() || !('IntersectionObserver' in window)) return setShown(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const hidden = { up: 'translate-y-8', left: '-translate-x-8', right: 'translate-x-8', scale: 'scale-95' }[from];
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out ${shown ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `opacity-0 ${hidden}`} ${className}`}
    >
      {children}
    </Tag>
  );
}

const toolDot = {
  software: 'bg-brand-400 shadow-brand-400/60',
  embedded: 'bg-accent-400 shadow-accent-400/60',
  power: 'bg-leaf-400 shadow-leaf-400/60',
};

/* Endless horizontal strip of tool / platform names (on a dark band). */
export function Marquee() {
  const row = [...tools, ...tools];
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex shrink-0 animate-marquee gap-3 pr-3 group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span
            key={i}
            aria-hidden={i >= tools.length}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-sm font-medium text-slate-100 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            <span className={`h-2 w-2 rounded-full shadow-[0_0_8px_1px] ${toolDot[t.domain]}`} />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

const domainStyle = {
  software: { chip: 'bg-brand-500/15 text-brand-300 ring-brand-400/30', dot: 'bg-brand-400', label: 'Software' },
  embedded: { chip: 'bg-accent-500/15 text-accent-300 ring-accent-400/30', dot: 'bg-accent-400', label: 'Embedded' },
  power: { chip: 'bg-leaf-500/15 text-leaf-400 ring-leaf-400/30', dot: 'bg-leaf-400', label: 'Power' },
};

/* Hero visual: the full stack from power to app, with data pulses travelling through it. */
export function StackVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReduced()) return;
    const id = setInterval(() => setActive((a) => (a + 1) % stack.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-accent-500/30 via-brand-500/20 to-leaf-500/20 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-3xl border border-white/10 bg-brand-950/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-4 flex items-center justify-between px-1">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-leaf-400/80" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">ctit://full-stack</span>
        </div>

        <div className="relative">
          {/* vertical bus line with travelling packets */}
          <div className="absolute bottom-6 left-[26px] top-6 w-px bg-gradient-to-b from-brand-400/60 via-accent-400/60 to-leaf-400/60" aria-hidden="true" />
          <span className="absolute left-[23px] h-2 w-2 animate-packet-up rounded-full bg-accent-300 shadow-[0_0_12px_2px] shadow-accent-400" aria-hidden="true" />
          <span className="absolute left-[23px] h-2 w-2 animate-packet-up rounded-full bg-brand-300 shadow-[0_0_12px_2px] shadow-brand-400 [animation-delay:1.6s]" aria-hidden="true" />

          <ul className="space-y-2">
            {stack.map((layer, i) => {
              const s = domainStyle[layer.domain];
              const on = i === active;
              return (
                <li
                  key={layer.name}
                  onMouseEnter={() => setActive(i)}
                  className={`relative flex items-center gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-500 ${
                    on ? 'translate-x-1 border-white/20 bg-white/[0.08]' : 'border-transparent bg-white/[0.02]'
                  }`}
                >
                  <span className={`relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ${s.chip}`}>
                    <Icon name={layer.icon} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{layer.name}</p>
                    <p className="truncate text-xs text-slate-400">{layer.text}</p>
                  </div>
                  <span className={`h-1.5 w-1.5 rounded-full ${s.dot} ${on ? 'animate-ping' : 'opacity-40'}`} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 px-1">
          {Object.values(domainStyle).map((d) => (
            <span key={d.label} className="inline-flex items-center gap-1.5 text-[11px] text-slate-400">
              <span className={`h-1.5 w-1.5 rounded-full ${d.dot}`} /> {d.label}
            </span>
          ))}
          <span className="ml-auto text-[11px] font-medium text-accent-300">One team · every layer</span>
        </div>
      </div>
    </div>
  );
}

const logLines = [
  { t: '[boot]', m: 'ctit-node v2.4 — ESP32 @ 240MHz', c: 'text-slate-400' },
  { t: '[pwr]', m: 'solar 18.6V · battery 12.9V (92%)', c: 'text-leaf-400' },
  { t: '[adc]', m: 'mains 231.4V · 3.42A · pf 0.97', c: 'text-accent-300' },
  { t: '[net]', m: 'wifi connected · rssi -58dBm', c: 'text-brand-300' },
  { t: '[mqtt]', m: 'publish site/04/energy → ok', c: 'text-brand-300' },
  { t: '[app]', m: 'user toggled relay #2 → ON', c: 'text-white' },
  { t: '[ota]', m: 'firmware up to date', c: 'text-leaf-400' },
];

/* A serial-monitor style log that types itself out, line by line, on loop. */
export function SerialMonitor({ className = '' }) {
  const [n, setN] = useState(logLines.length);

  useEffect(() => {
    if (prefersReduced()) return;
    setN(1);
    const id = setInterval(() => setN((x) => (x >= logLines.length + 2 ? 1 : x + 1)), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#070f24] shadow-2xl ${className}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-xs text-slate-400">serial monitor · 115200 baud</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-leaf-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-leaf-400" /> live
        </span>
      </div>
      <div className="h-56 space-y-1.5 p-4 font-mono text-[12.5px] leading-relaxed">
        {logLines.slice(0, Math.min(n, logLines.length)).map((l, i) => (
          <p key={i} className="animate-fade-in truncate">
            <span className="text-slate-500">{l.t}</span> <span className={l.c}>{l.m}</span>
          </p>
        ))}
        <span className="inline-block h-4 w-2 animate-blink bg-accent-400 align-middle" />
      </div>
    </div>
  );
}

/* Venn diagram: hardware ∩ software = embedded systems. */
export function IntersectionDiagram() {
  return (
    <svg viewBox="0 0 520 360" className="h-auto w-full" role="img" aria-label="Hardware and software overlap in embedded systems">
      <defs>
        <radialGradient id="vd-hw" cx="35%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#f7841a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#f7841a" stopOpacity="0.05" />
        </radialGradient>
        <radialGradient id="vd-sw" cx="65%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#3563ea" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3563ea" stopOpacity="0.05" />
        </radialGradient>
        <clipPath id="vd-clip">
          <circle cx="190" cy="180" r="140" />
        </clipPath>
      </defs>

      <g className="origin-center animate-drift-l" style={{ transformBox: 'fill-box' }}>
        <circle cx="190" cy="180" r="140" fill="url(#vd-hw)" stroke="#f7841a" strokeOpacity="0.6" strokeWidth="1.5" />
      </g>
      <g className="origin-center animate-drift-r" style={{ transformBox: 'fill-box' }}>
        <circle cx="330" cy="180" r="140" fill="url(#vd-sw)" stroke="#5b8af9" strokeOpacity="0.6" strokeWidth="1.5" />
      </g>
      <circle cx="330" cy="180" r="140" clipPath="url(#vd-clip)" fill="#fbbf24" className="animate-glow" />

      {/* orbiting packets */}
      <circle r="5" fill="#fb9a3c">
        <animateMotion dur="9s" repeatCount="indefinite" path="M190 40 a140 140 0 1 1 -0.1 0" />
      </circle>
      <circle r="5" fill="#93b4fd">
        <animateMotion dur="11s" repeatCount="indefinite" path="M330 320 a140 140 0 1 1 0.1 0" />
      </circle>

      <text x="110" y="150" textAnchor="middle" className="fill-accent-300 text-[15px] font-bold">Hardware</text>
      <text x="110" y="176" textAnchor="middle" className="fill-slate-400 text-[11px]">Electronics · Power</text>
      <text x="110" y="192" textAnchor="middle" className="fill-slate-400 text-[11px]">Solar · Installation</text>

      <text x="410" y="150" textAnchor="middle" className="fill-brand-300 text-[15px] font-bold">Software</text>
      <text x="410" y="176" textAnchor="middle" className="fill-slate-400 text-[11px]">Mobile · Web</text>
      <text x="410" y="192" textAnchor="middle" className="fill-slate-400 text-[11px]">Cloud · Data</text>

      <text x="260" y="168" textAnchor="middle" className="fill-white text-[14px] font-extrabold">Embedded</text>
      <text x="260" y="186" textAnchor="middle" className="fill-white text-[14px] font-extrabold">Systems</text>
      <text x="260" y="206" textAnchor="middle" className="fill-amber-200 text-[10px] font-semibold uppercase tracking-widest">where we live</text>
    </svg>
  );
}

/* Animated circuit-trace background for dark sections. */
export function CircuitLines({ className = '' }) {
  const paths = [
    'M0 80 H180 L220 120 H420 L460 80 H800',
    'M0 220 H120 L160 180 H360 L400 220 H620 L660 260 H800',
    'M0 360 H240 L280 320 H520 L560 360 H800',
    'M100 0 V60 L140 100 V200',
    'M640 400 V320 L600 280 V160',
  ];
  return (
    <svg viewBox="0 0 800 400" preserveAspectRatio="none" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true">
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
          <path
            d={d}
            fill="none"
            stroke={i % 2 ? '#5b8af9' : '#f7841a'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="40 760"
            className="animate-trace"
            style={{ animationDelay: `${i * 1.1}s`, animationDuration: `${6 + i}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
