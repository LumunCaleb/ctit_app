import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Icon from '@/components/Icon';
import Seo from '@/components/Seo';
import { IconBadge, PageHero } from '@/components/ui';
import { company, services } from '@/lib/content';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', topic: '', message: '' });
  const [sent, setSent] = useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const { query } = useRouter();

  // Pre-select the topic when arriving from a "Discuss a project" / "Register interest" link.
  useEffect(() => {
    if (typeof query.topic === 'string') setForm((f) => ({ ...f, topic: query.topic }));
  }, [query.topic]);

  // No backend yet: open the visitor's email client with the message pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = `Website enquiry${form.topic ? ` — ${form.topic}` : ''} from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.org && `Organisation: ${form.org}`,
      form.topic && `Interested in: ${form.topic}`,
      '',
      form.message,
    ]
      .filter((l) => l !== false && l !== '')
      .join('\n');
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <Seo title="Contact" description="Talk to CT Integrated Technologies about a project, partnership or careers." />

      <PageHero
        eyebrow="Contact"
        title="Let’s build something that works"
        subtitle="Tell us about your project, partnership idea or question."
      />

      <section className="container pb-24">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: 'mail', title: 'Email us', body: <a href={`mailto:${company.email}`} className="break-all text-brand-700 hover:underline">{company.email}</a> },
              { icon: 'pin', title: 'Where we are', body: `Based in ${company.location}, working across Africa.` },
              { icon: 'users', title: 'Partnerships & careers', body: 'Universities, NGOs, utilities and young talent — we’d love to hear from you.' },
            ].map((c, i) => (
              <div key={c.title} className="card flex gap-4">
                <IconBadge name={c.icon} color={['brand', 'accent', 'leaf'][i]} />
                <div>
                  <h2 className="font-semibold text-ink">{c.title}</h2>
                  <div className="mt-1 text-sm text-slate-600">{c.body}</div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} className="card space-y-5 p-6 shadow-xl shadow-brand-900/5 md:p-10 lg:col-span-3">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Full name</span>
                <input required className="input" value={form.name} onChange={update('name')} placeholder="Ada Okafor" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
                <input required type="email" className="input" value={form.email} onChange={update('email')} placeholder="you@company.com" />
              </label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">Organisation <span className="text-slate-400">(optional)</span></span>
                <input className="input" value={form.org} onChange={update('org')} placeholder="Company or institution" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-ink">I’m interested in</span>
                <select className="input" value={form.topic} onChange={update('topic')}>
                  <option value="">Choose a topic</option>
                  {services.map((d) => (
                    <option key={d.slug}>{d.name}</option>
                  ))}
                  <option>Partnership</option>
                  <option>Careers</option>
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">How can we help?</span>
              <textarea required rows={5} className="input resize-y" value={form.message} onChange={update('message')} placeholder="Tell us a little about the problem you’re trying to solve…" />
            </label>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="btn-primary">
                Send message <Icon name="arrow" className="h-4 w-4" />
              </button>
              {sent && (
                <p className="flex items-center gap-2 text-sm text-leaf-700">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.5} /> Your email app should open with the message ready.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
