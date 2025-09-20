import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { LogOutIcon } from 'lucide-react';

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:outline-0">
        <Avatar className="size-9">
          <AvatarFallback className="bg-primary text-primary-foreground text-sm hover:opacity-80">
            JD
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60">
        <DropdownMenuLabel className="font-bold">John Doe</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <Button variant="ghost" className="w-full justify-start">
            <LogOutIcon />
            <span>Sign out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
