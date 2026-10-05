import React from 'react';
import { Footer } from '../components/layout';

export const FooterShowcase: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Footer Component</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        Footer section for page bottom with responsive layout.
      </p>

      <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="border border-slate-200 dark:border-slate-700 rounded overflow-hidden">
          <Footer />
        </div>
      </div>

      {/* Features */}
      <section className="mt-12 p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          <li>✓ Full-width footer layout</li>
          <li>✓ Darker background for contrast</li>
          <li>✓ Responsive design for all screen sizes</li>
          <li>✓ Dark mode support</li>
          <li>✓ Copyright/info section</li>
        </ul>
      </section>
    </div>
  );
};
