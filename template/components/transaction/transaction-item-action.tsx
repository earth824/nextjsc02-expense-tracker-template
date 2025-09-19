import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';

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
          {/* <Link>Duplicate</Link> */}
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          {/* <Link>Edit</Link> */}
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer w-full">
          <button>Delete</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
