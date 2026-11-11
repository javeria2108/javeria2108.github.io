import type { Metadata } from 'next';
import '@fontsource/space-mono/latin-400.css';
import '@fontsource/space-mono/latin-700.css';
import '@fontsource/silkscreen/latin-400.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Javeria Zaheer — Personal Archive',
  description: 'Javeria Zaheer is a software engineer in Lahore working on backend systems, full-stack applications, reliable workflows, and AI integrations.',
  applicationName: 'Javeria Zaheer — Personal Archive',
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Javeria Zaheer — Personal Archive', title: 'Javeria Zaheer — Software Engineer', description: 'Backend systems, full-stack applications, and reliable software. A personal engineering archive from Lahore, Pakistan.' },
  twitter: { card: 'summary', title: 'Javeria Zaheer — Software Engineer', description: 'Backend systems, full-stack applications, and reliable software.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
