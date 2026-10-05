import React from 'react';
import { MainLayout } from './components/layout';
import { Home } from './pages';
import './styles/globals.css';

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
