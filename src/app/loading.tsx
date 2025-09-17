import { APP_NAME } from '@/constants';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-col gap-4 h-full">
      <Image
        src="/images/logo.png"
        alt={`${APP_NAME} logo`}
        width={72}
        height={72}
      />
      <Loader2 className="animate-spin text-primary" />
    </div>
  );
}
