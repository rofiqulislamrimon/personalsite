import Projects from '../../components/Projects';

export const metadata = {
  title: 'Projects',
  description:
    'Selected work: Zaplane workflow automation, the shared integration engine core, and 15+ production API integrations.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return <Projects />;
}
