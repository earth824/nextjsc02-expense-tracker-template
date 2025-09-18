import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ROUTE } from '@/config/route.config';
import { EllipsisVertical } from 'lucide-react';
import Link from 'next/link';

export default function TransactionItemAction() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="focus-visible:ring-0">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-20">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={ROUTE.DUPLICATE_TRANSACTION('uuid')}>Duplicate</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={ROUTE.EDIT_TRANSACTION('uuid')}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer w-full">
          <button>Delete</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
