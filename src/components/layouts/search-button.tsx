import TransactionFilter from '@/components/transaction/transaction-filter';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Search } from 'lucide-react';

export default function SearchButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Filter</DialogTitle>
          <DialogDescription>
            Complete the form below to apply filters and refine your search
          </DialogDescription>
        </DialogHeader>
        <TransactionFilter />
      </DialogContent>
    </Dialog>
  );
}
