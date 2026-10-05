import React from 'react';
import { Sidebar } from '@nobix-react/sidebar';
import { Home, Settings, LogOut } from 'lucide-react';

export const SidebarShowcase: React.FC = () => {
  const sidebarItems = [
    { id: '1', label: 'Home', icon: Home, href: '/' },
    { id: '2', label: 'Settings', icon: Settings, href: '/settings' },
    { id: '3', label: 'Logout', icon: LogOut, href: '/logout' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Sidebar Component</h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
        A flexible navigation sidebar with multiple templates and states.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Default Template */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold mb-4">Default Template</h2>
          <div className="border border-slate-200 dark:border-slate-700 rounded overflow-hidden">
            <Sidebar items={sidebarItems} template="default" className="h-96" />
          </div>
        </div>

        {/* Compact Template */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
          <h2 className="text-xl font-bold mb-4">Compact Template</h2>
          <div className="border border-slate-200 dark:border-slate-700 rounded overflow-hidden">
            <Sidebar items={sidebarItems} template="compact" className="h-96" />
          </div>
        </div>
      </div>

      {/* Props Documentation */}
      <section className="mt-12 p-8 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
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
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-mono text-blue-600">items</td>
                <td className="py-2 px-4 font-mono text-slate-600">SidebarItem[]</td>
                <td className="py-2 px-4">Navigation items</td>
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <td className="py-2 px-4 font-mono text-blue-600">template</td>
                <td className="py-2 px-4 font-mono text-slate-600">'default' | 'compact' | 'floating'</td>
                <td className="py-2 px-4">Sidebar layout template</td>
              </tr>
              <tr>
                <td className="py-2 px-4 font-mono text-blue-600">className</td>
                <td className="py-2 px-4 font-mono text-slate-600">string</td>
                <td className="py-2 px-4">Custom CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
