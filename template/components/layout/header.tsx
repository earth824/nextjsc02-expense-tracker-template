import { fredoka } from '@/styles/font';
import { ClipboardList, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="px-4 py-2 sticky border-b flex justify-between items-center">
      <div className="flex gap-2 items-center">
        {/* LOGO IMAGE width:40, height:40 */}
        <h3 className={`${fredoka.className} text-primary text-2xl font-bold`}>
          {/* APP NAME */}
        </h3>
      </div>

      <div className="flex items-center gap-2">
        <a>
          <ClipboardList />
        </a>
        <a>
          <Plus />
        </a>
        {/* <SearchButton /> */}
        {/* <ThemeToggle /> */}
        {/* <UserMenu /> */}
      </div>
    </header>
  );
}
