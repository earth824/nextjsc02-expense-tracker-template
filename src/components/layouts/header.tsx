import { APP_NAME } from '@/constants';
import { fredoka } from '@/styles/font';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="px-4 py-2 sticky border-b">
      <div className="flex gap-2 items-center">
        <Image
          src="/logo.png"
          alt={`${APP_NAME} logo`}
          width={40}
          height={40}
        />
        <h3 className={`${fredoka.className} text-primary text-2xl font-bold`}>
          {APP_NAME}
        </h3>
      </div>
    </header>
  );
}
