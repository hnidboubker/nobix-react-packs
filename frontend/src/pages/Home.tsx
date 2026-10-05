import React from 'react';
import { Button } from '../components/common';

export const Home: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Welcome to Frontend
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            A modern React app with Tailwind CSS 4.3
          </p>
          <Button variant="primary" size="lg">
            Get Started
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, i) => (
            <div key={i} className="p-6 border border-slate-200 dark:border-slate-800 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Description of {feature.toLowerCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
