import React from 'react';
import { Header } from '../components/layout';

export const HeaderShowcase: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Header Component</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        Top navigation bar with responsive design and sticky positioning.
      </p>

      <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="border border-slate-200 dark:border-slate-700 rounded overflow-hidden">
          <Header />
        </div>
      </div>

      {/* Props Documentation */}
      <section className="mt-12 p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li>✓ Sticky positioning at top of page</li>
          <li>✓ Responsive design for all screen sizes</li>
          <li>✓ Dark mode support</li>
          <li>✓ Navigation links</li>
          <li>✓ Logo/branding area</li>
        </ul>
      </section>
    </div>
  );
};
