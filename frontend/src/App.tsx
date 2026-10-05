import React from 'react';
import { Header, Footer } from './components/layout';
import { Home } from './pages';
import './styles/globals.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
