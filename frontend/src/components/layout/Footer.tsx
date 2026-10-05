import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-slate-600 dark:text-slate-400">
          &copy; 2026 Frontend App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
