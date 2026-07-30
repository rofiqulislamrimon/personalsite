import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Md Rofiqul Islam — WordPress Plugin & PHP Developer',
  description:
    'WordPress plugin and PHP developer building Zaplane, a workflow automation platform. Integrations, OAuth, webhooks, and clean WPCS-compliant code.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
