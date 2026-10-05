import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '@nobix-react/sidebar';
import { Menu, Home, BookOpen, Square, Layout as LayoutIcon, Type, Layers } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MainLayoutProps } from '../structs/MainLayoutProps';

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const sidebarItems = [
    {
      id: '1',
      label: 'Overview',
      icon: Home,
      href: '/',
    },
    {
      id: '2',
      label: 'Button',
      icon: Square,
      href: '/components/button',
    },
    {
      id: '3',
      label: 'Sidebar',
      icon: BookOpen,
      href: '/components/sidebar',
    },
    {
      id: '4',
      label: 'Header',
      icon: Type,
      href: '/components/header',
    },
    {
      id: '5',
      label: 'Footer',
      icon: Type,
      href: '/components/footer',
    },
    {
      id: '6',
      label: 'Layout',
      icon: LayoutIcon,
      href: '/components/layout',
    },
    {
      id: '7',
      label: 'Integration',
      icon: Layers,
      href: '/integration',
    },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className={`transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
        <Sidebar
          items={sidebarItems.map(item => ({
            ...item,
            onClick: () => handleNavigation(item.href),
          }))}
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
