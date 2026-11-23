import { useState } from 'react';
import Seo from '@/components/Seo';
import { CTABand, PageHero, ProjectCard } from '@/components/ui';
import { projects } from '@/lib/content';

const filters = ['All', 'Embedded', 'Software', 'Engineering'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Seo title="Projects" description="Embedded devices, IoT platforms and electrical installations designed and delivered by CT Integrated Technologies." />

      <PageHero
        eyebrow="Projects"
        title="Systems we’ve designed, built and installed"
        subtitle="Hardware, firmware, software and installation — often all in the same project."
      >
        <div className="mt-10 inline-flex animate-fade-up flex-wrap justify-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur [animation-delay:240ms]">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f ? 'bg-brand-900 text-white shadow' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="container pb-12">
        <div key={filter} className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={(i % 3) * 100} />
          ))}
        </div>
      </section>

      <CTABand title="Your project could be next" />
    </>
  );
}
