import { Suspense } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ConvexClientProvider } from '@/providers/convex-client-provider';
import { ModalProvider } from '@/providers/modal-provider';

import { Toaster } from '@/components/ui/sonner';

import { Loading } from '@/components/auth/loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Insight Board',
  description:
    'Insight Board provides complete, turnkey, localized capabilities that help teams of all sizes creatively build their vision.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <ConvexClientProvider>
            {children}
            <Toaster richColors />
            <ModalProvider />
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
