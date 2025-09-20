'use client';

import Image from 'next/image';
import lightImage from '../../../public/images/themes/light-app.png';
import darkImage from '../../../public/images/themes/dark-app.png';
import { useTheme } from 'next-themes';
import { THEME } from '@/config/theme.config';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ExampleImage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <Skeleton className="w-full aspect-[16/9] bg-accent/10" />;

  return (
    <div className="w-full aspect-[16/9] relative border rounded-xl overflow-hidden">
      <Image
        src={theme === THEME.LIGHT ? lightImage : darkImage}
        alt="app example"
        fill
        priority
        sizes="60vw"
      />
    </div>
  );
}
