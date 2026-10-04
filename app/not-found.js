import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section id="not-found">
      <div className="container" style={{ textAlign: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="section-number" style={{ justifyContent: 'center' }}>
          404
        </div>
        <div className="section-head" style={{ maxWidth: '640px', margin: '0 auto 40px' }}>
          <h2 style={{ maxWidth: 'none' }}>This page doesn&apos;t exist.</h2>
          <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            The link may be old, or the page moved. Head back home and pick a section from the menu.
          </p>
        </div>
        <Link href="/" className="btn btn-solid">
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
