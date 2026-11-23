import Head from 'next/head';
import { company } from '@/lib/content';

export default function Seo({ title, description = company.tagline }) {
  const full = title ? `${title} · ${company.name}` : `${company.name} — ${company.tagline}`;
  return (
    <Head>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/logo.png" />
    </Head>
  );
}
