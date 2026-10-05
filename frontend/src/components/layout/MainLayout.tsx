import React, { useState } from 'react';
import { Sidebar } from '@nobix-react/sidebar';
import { Menu, Home, Settings, LogOut } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MainLayoutProps } from '../structs/MainLayoutProps';

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const sidebarItems = [
    {
      id: '1',
      label: 'Home',
      icon: Home,
      href: '/',
    },
    {
      id: '2',
      label: 'Settings',
      icon: Settings,
      href: '/settings',
    },
    {
      id: '3',
      label: 'Logout',
      icon: LogOut,
      href: '/logout',
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        <Sidebar
          items={sidebarItems}
          template="default"
          className={`h-screen ${isOpen ? '' : 'w-20'}`}
        />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header />

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-8 left-8 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>

        <main className="flex-1 overflow-y-auto">{children}</main>

        <Footer />
      </div>
    </div>
  );
};
