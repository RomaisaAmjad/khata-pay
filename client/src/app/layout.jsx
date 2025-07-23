

import { Geist, Geist_Mono } from 'next/font/google';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';
import { Notifications } from '@mantine/notifications'; // ✅ Import notifications
import '@mantine/notifications/styles.css';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const theme = createTheme({
  primaryColor: 'blue',
  colorScheme: 'dark',
  fontFamily: 'var(--font-geist-sans), sans-serif',
});

export const metadata = {
  title: 'Khata Pay',
  description: 'Secure ledger app for businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Notifications /> {/* ✅ Enable toast notifications */}
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
