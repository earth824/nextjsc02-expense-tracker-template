import { Button } from '@/components/ui/button';
import { ROUTE } from '@/config/route.config';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404: This page could not be found'
};

export default function NotFound() {
  return (
    <div className="min-h-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-6xl font-extrabold">404</h2>
        <p className="text-3xl font-bold">Oops! Page not found</p>
        <p className="text-muted-foreground text-sm">
          Sorry, we couldn&apos;t find the page you&apos;re looking for
        </p>
      </div>
      <Button asChild variant="outline">
        <Link href={ROUTE.HOME}>Go Back Home</Link>
      </Button>
    </div>
  );
}
