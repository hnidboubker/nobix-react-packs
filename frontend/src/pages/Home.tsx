import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common';
import { Square, BookOpen, Type, LayoutIcon } from 'lucide-react';

interface ComponentItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
  description: string;
  variants: number;
}

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const components: ComponentItem[] = [
    {
      id: 'button',
      name: 'Button',
      icon: <Square className="w-8 h-8" />,
      href: '/components/button',
      description: 'Versatile action button with multiple variants, sizes, and states',
      variants: 36,
    },
    {
      id: 'sidebar',
      name: 'Sidebar',
      icon: <BookOpen className="w-8 h-8" />,
      href: '/components/sidebar',
      description: 'Navigation sidebar with multiple templates and responsive behavior',
      variants: 9,
    },
    {
      id: 'header',
      name: 'Header',
      icon: <Type className="w-8 h-8" />,
      href: '/components/header',
      description: 'Top navigation bar with sticky positioning',
      variants: 1,
    },
    {
      id: 'footer',
      name: 'Footer',
      icon: <Type className="w-8 h-8" />,
      href: '/components/footer',
      description: 'Footer section for page bottom with responsive layout',
      variants: 1,
    },
    {
      id: 'layout',
      name: 'MainLayout',
      icon: <LayoutIcon className="w-8 h-8" />,
      href: '/components/layout',
      description: 'Main layout wrapper combining all components',
      variants: 2,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
            Component Showcase
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore all available components with interactive demos, variants, and code examples.
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate('/components/button')}>
            Explore Components
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Components</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">36</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Button Variants</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Responsive</div>
          </div>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">Dark</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Mode Ready</div>
          </div>
        </div>

        {/* Components Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Available Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <div
                key={component.id}
                onClick={() => navigate(component.href)}
                className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600 group-hover:bg-blue-100 dark:group-hover:bg-slate-700 transition-colors">
                    {component.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {component.variants} {component.variants === 1 ? 'variant' : 'variants'}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600">
                  {component.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {component.description}
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  View Component
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Section */}
        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-lg border border-blue-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">See Them in Action</h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Visit our integration example to see how all components work together in a real application.
          </p>
          <Button variant="primary" onClick={() => navigate('/integration')}>
            View Integration Example
          </Button>
        </div>
      </div>
    </main>
  );
};
