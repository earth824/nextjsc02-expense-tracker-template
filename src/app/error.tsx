'use client';

import { Button } from '@/components/ui/button';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-full flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col gap-3 items-center">
        <h2 className="text-6xl font-extrabold">500</h2>
        <p className="text-3xl font-bold">Oops! Something went wrong</p>
        <p className="text-muted-foreground text-sm">
          The server encoutered an internal server error and was unable to
          complete your request
        </p>
      </div>
      <Button variant="outline" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
