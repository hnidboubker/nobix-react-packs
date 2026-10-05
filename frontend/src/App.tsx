import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout';
import { Home, ButtonShowcase, SidebarShowcase, HeaderShowcase, FooterShowcase, LayoutShowcase, Integration } from './pages';
import './styles/globals.css';
import './index.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/button" element={<ButtonShowcase />} />
          <Route path="/components/sidebar" element={<SidebarShowcase />} />
          <Route path="/components/header" element={<HeaderShowcase />} />
          <Route path="/components/footer" element={<FooterShowcase />} />
          <Route path="/components/layout" element={<LayoutShowcase />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
