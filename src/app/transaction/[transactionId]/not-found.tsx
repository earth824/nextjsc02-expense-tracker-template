import { Button } from '@/components/ui/button';
import { ROUTE } from '@/config/route.config';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-6xl font-extrabold">404</h2>
        <p className="text-3xl font-bold">Transaction not found</p>
        <p className="text-muted-foreground text-sm">
          The transaction you&apos;re looking for doesn&apos;t exist
        </p>
      </div>
      <Button asChild variant="outline">
        <Link href={ROUTE.TRANSACTION}>Go to Transaction</Link>
      </Button>
    </div>
  );
}
