import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export function TransactionItemSkeleton() {
  return (
    <div className="flex justify-between items-center border border-accent/50 not-last:border-b-0 p-3">
      <div className="flex items-center gap-3">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-25" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-30" />
        <Skeleton className="h-9 w-10" />
      </div>
    </div>
  );
}

export function PaginationSkeleton() {
  return (
    <div className="flex justify-between items-center pb-4">
      <Skeleton className="h-5 w-44" />
      <div className="flex items-center gap-2">
        <Skeleton className="h-9 w-36" />
        <Skeleton className="h-9 w-70" />
      </div>
    </div>
  );
}

export function TransactionListSkeleton() {
  return (
    <>
      <div>
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
      <PaginationSkeleton />
    </>
  );
}
