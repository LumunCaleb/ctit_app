import Link from 'next/link';
import Seo from '@/components/Seo';
import { PageHero } from '@/components/ui';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" />
      <PageHero eyebrow="404" title="This page went off-grid" subtitle="The page you’re looking for doesn’t exist or has moved.">
        <Link href="/" className="btn-primary mt-8">Back to home</Link>
      </PageHero>
    </>
  );
}
