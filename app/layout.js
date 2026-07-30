import './globals.css';

export const metadata = {
  title: 'Md Rofiqul Islam — WordPress Plugin & PHP Developer',
  description:
    'WordPress plugin and PHP developer building Zaplane, a workflow automation platform. Integrations, OAuth, webhooks, and clean WPCS-compliant code.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
