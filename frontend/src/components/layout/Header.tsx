import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Frontend</h1>
        <ul className="flex gap-6">
          <li><a href="/" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Home</a></li>
          <li><a href="/about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">About</a></li>
        </ul>
      </nav>
    </header>
  );
};
