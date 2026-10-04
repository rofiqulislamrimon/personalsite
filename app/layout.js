import Script from 'next/script';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SITE_URL = 'https://rofiqul.dev';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rofiqul Islam Rimon — WordPress Plugin & PHP Developer',
    template: '%s — Rofiqul Islam Rimon',
  },
  description:
    'WordPress plugin and PHP developer building Zaplane, a workflow automation platform. Integrations, OAuth, webhooks, and clean WPCS-compliant code.',
  keywords: [
    'WordPress plugin developer',
    'PHP developer',
    'Zaplane',
    'API integrations',
    'OAuth2',
    'webhooks',
    'WPCS',
    'Bangladesh',
  ],
  authors: [{ name: 'Rofiqul Islam Rimon' }],
  creator: 'Rofiqul Islam Rimon',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Rofiqul Islam Rimon',
    title: 'Rofiqul Islam Rimon — WordPress Plugin & PHP Developer',
    description:
      'WordPress plugin and PHP developer building Zaplane, a workflow automation platform. Integrations, OAuth, webhooks, and clean WPCS-compliant code.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Rofiqul Islam Rimon — WordPress Plugin & PHP Developer',
    description:
      'WordPress plugin and PHP developer building Zaplane, a workflow automation platform.',
    creator: '@rimon44190',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Fonts: requested at runtime so `next build` never needs network access. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
