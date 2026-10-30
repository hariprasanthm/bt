import { COMPANY } from '@/constants/company';
import { RightOutlined } from '@ant-design/icons';
import { Helmet, Link, useLocation, useParams } from '@umijs/max';
import { EVENTS } from '../static';

// Human-readable labels for breadcrumb segments (keyed by full path)
const LABELS: Record<string, string> = {
  '/services': 'Services',
  '/services/ceet': 'CEET',
  '/services/employment-readiness': 'Employment Readiness',
  '/services/imats': 'IMATS',
  '/services/imap': 'IMAP',
  '/services/imaira': 'IMAIRA',
  '/services/itlf': 'ITLF',
  '/services/industry-academia-connect': 'Industry-Academia Connect',
  '/services/faculty-development-programs': 'Faculty Development Programs',
  '/services/fresher-hiring': 'Fresher Hiring & Apprenticeship',
  '/services/lateral-hiring': 'Lateral & Contract Hiring',
  '/services/hiring-suite': 'Hiring Suite',
  '/events': 'Events',
};

type Crumb = { label: string; path?: string };

/**
 * Auto breadcrumb for sub pages (/services/*, /event-preview/:id).
 * Rendered once from the layout (see app.tsx); top-level pages show nothing.
 * Also emits BreadcrumbList JSON-LD for search engines.
 */
const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const params = useParams();

  let crumbs: Crumb[] | null = null;

  if (pathname.startsWith('/services/')) {
    crumbs = [
      { label: 'Home', path: '/' },
      { label: 'Services', path: '/services' },
      { label: LABELS[pathname] || 'Service' },
    ];
  } else if (pathname.startsWith('/event-preview/')) {
    const event = EVENTS.find((e: any) => e.id === Number(params.id));
    crumbs = [
      { label: 'Home', path: '/' },
      { label: 'Events', path: '/events' },
      { label: event ? event.title : 'Event' },
    ];
  }

  if (!crumbs) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(crumb.path ? { item: `${COMPANY.websiteUrl}${crumb.path}` } : {}),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="im-container im-breadcrumbs">
        <ol>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs!.length - 1;
            return (
              <li key={index}>
                {crumb.path && !isLast ? (
                  <Link to={crumb.path}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
                {!isLast && <RightOutlined className="im-breadcrumbs-sep" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
