'use client';

import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { THEME } from '@/config/theme.config';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Skeleton className="w-10 h-9" />;

  return (
    <Button
      variant="ghost"
      onClick={() =>
        setTheme(prev => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT))
      }
    >
      {theme === THEME.LIGHT ? <Moon /> : <Sun />}
    </Button>
  );
}
