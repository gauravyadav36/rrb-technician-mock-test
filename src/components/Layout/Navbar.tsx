import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/mock-test', label: 'Mock Test' },
  { to: '/notes', label: 'Study Notes' },
  { to: '/history', label: 'History' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  return (
    <header className="border-b border-slate-700/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container flex items-center justify-between gap-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">R</span>
          RRB Tech Grade 3
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm text-slate-200 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <Link to="/mock-test" className="accent-button text-sm">
          Start Test
        </Link>
      </nav>
    </header>
  );
}
