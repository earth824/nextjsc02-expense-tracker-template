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
      <DropdownMenuTrigger asChild className="focus-visible:ring-0">
        <Button variant="ghost">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={ROUTE.DUPLICATE_TRANSACTION('uuid')}>Duplicate</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link href={ROUTE.EDIT_TRANSACTION('uuid')}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="cursor-pointer focus-visible:ring-0 h-auto w-full font-normal justify-start"
        >
          <Button variant="ghost">Delete</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
