'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PAGES = [
  { href: '/docs', title: 'Введение' },
  { href: '/docs/flask-architecture', title: 'Часть 1. Архитектура Flask' },
  { href: '/docs/practice-guide', title: 'Часть 2. Практическая часть' },
];

export default function DocsNav() {
  const pathname = usePathname();

  return (
    <nav className="docs-nav">
      <ul>
        {PAGES.map((page) => {
          const isActive = pathname === page.href;
          return (
            <li key={page.href}>
              <Link
                href={page.href}
                className={isActive ? 'docs-nav-link active' : 'docs-nav-link'}
              >
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .docs-nav {
          margin-bottom: 1.5rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(148, 163, 184, 0.6);
          background: rgba(15, 23, 42, 0.02);
        }
        .docs-nav ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin: 0;
          padding: 0;
        }
        .docs-nav-link {
          font-size: 0.95rem;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          border: 1px solid transparent;
          text-decoration: none;
        }
        .docs-nav-link:hover {
          border-color: rgba(59, 130, 246, 0.5);
        }
        .docs-nav-link.active {
          background: rgba(59, 130, 246, 0.08);
          border-color: rgba(59, 130, 246, 0.9);
        }
      `}</style>
    </nav>
  );
}