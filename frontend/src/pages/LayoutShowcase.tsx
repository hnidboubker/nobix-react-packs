import React from 'react';

export const LayoutShowcase: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">MainLayout Component</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        Main layout wrapper that combines Header, Sidebar, Footer, and responsive content area.
      </p>

      {/* Architecture */}
      <section className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-12">
        <h2 className="text-2xl font-bold mb-6">Layout Structure</h2>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded font-mono text-sm overflow-auto">
          <pre className="text-slate-900 dark:text-slate-100">
{`
┌────────────────────────────────────┐
│         HEADER                     │
├────┬────────────────────────────────┤
│    │                                │
│ S  │        MAIN CONTENT            │
│ I  │                                │
│ D  │                                │
│ E  │                                │
│ B  │                                │
│ A  │                                │
│ R  ├────────────────────────────────┤
│    │         FOOTER                 │
└────┴────────────────────────────────┘

Features:
- Sidebar toggle with animation
- Responsive grid layout
- Flex-based content positioning
- Dark mode support
`}
          </pre>
        </div>
      </section>

      {/* Props Documentation */}
      <section className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-12">
        <h2 className="text-2xl font-bold mb-6">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="text-left py-2 px-4 font-semibold">Prop</th>
                <th className="text-left py-2 px-4 font-semibold">Type</th>
                <th className="text-left py-2 px-4 font-semibold">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 font-mono text-blue-600">children</td>
                <td className="py-2 px-4 font-mono text-slate-600">ReactNode</td>
                <td className="py-2 px-4">Content to display in main area</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Layout</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>✓ Flexbox-based responsive grid</li>
              <li>✓ Sidebar toggle button</li>
              <li>✓ Smooth animations</li>
              <li>✓ Full-height layout</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Styling</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>✓ Dark mode support</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Responsive breakpoints</li>
              <li>✓ Accessible design</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
