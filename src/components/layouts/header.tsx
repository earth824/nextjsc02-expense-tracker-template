import ThemeToggle from '@/components/layouts/theme-toggle';
import UserMenu from '@/components/layouts/user-menu';
import { ROUTE } from '@/config/route.config';
import { APP_NAME } from '@/constants';
import { fredoka } from '@/styles/font';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-4 py-2 sticky border-b flex justify-between items-center">
      <Link href={ROUTE.HOME}>
        <div className="flex gap-2 items-center">
          <Image
            src="/images/logo.png"
            alt={`${APP_NAME} logo`}
            width={40}
            height={40}
          />
          <h3
            className={`${fredoka.className} text-primary text-2xl font-bold`}
          >
            {APP_NAME}
          </h3>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  );
}
