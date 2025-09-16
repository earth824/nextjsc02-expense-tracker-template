import { APP_DESCRIPTION, APP_NAME } from '@/constants';
import { roboto } from '@/styles/font';
import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME
  },
  description: APP_DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${roboto.className}`}>{children}</body>
    </html>
  );
}
