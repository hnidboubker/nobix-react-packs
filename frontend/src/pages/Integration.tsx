import React from 'react';
import { Button } from '../components/common';

export const Integration: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Component Integration Example</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        See how all components work together to create a complete application.
      </p>

      {/* Full Integration Example */}
      <section className="mb-16 p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">Complete Dashboard Example</h2>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Dashboard Header</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Welcome to the component demo! Use the sidebar to explore all available components.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold mb-2">Component Count</h4>
                <p className="text-2xl font-bold text-blue-600">8</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold mb-2">Button Variants</h4>
                <p className="text-2xl font-bold text-green-600">36</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold mb-2">Sidebar Templates</h4>
                <p className="text-2xl font-bold text-purple-600">3</p>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="danger">Dangerous Action</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Pattern */}
      <section className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-16">
        <h2 className="text-2xl font-bold mb-6">Typical Integration Pattern</h2>
        <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded font-mono text-sm overflow-auto">
          <pre className="text-slate-900 dark:text-slate-100">
{`import { MainLayout } from './components/layout';
import { Button } from './components/common';

export function App() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1>My Application</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Your content here */}
        </div>
        <div className="flex gap-4">
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
    </MainLayout>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Data Flow */}
      <section className="p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6">Component Hierarchy</h2>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded font-mono text-sm overflow-auto">
          <pre className="text-slate-900 dark:text-slate-100">
{`App
├── Router (React Router)
├── MainLayout
│   ├── Sidebar (@nobix-react/sidebar)
│   ├── Header
│   ├── Main Content Area
│   │   ├── Page Component (dynamic)
│   │   ├── Button (when needed)
│   │   └── ... other components
│   └── Footer
└── Hooks
    └── useLocalStorage (utility hook)`}
          </pre>
        </div>
      </section>
    </div>
  );
};
