import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Categories, LatestGrid, Footer } from './components/Sections';
import { CatalogPage, ProductDetail, AboutPage, LookbookContact } from './components/Pages';

function App() {
  const [route, setRoute] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigate = (to) => {
    setSelectedProduct(null);
    setRoute(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const content = useMemo(() => {
    if (route === 'home') {
      return (
        <>
          <Hero onCatalog={() => handleNavigate('catalog')} />
          <Categories />
          <LatestGrid />
        </>
      );
    }
    if (route === 'catalog') {
      return selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        <CatalogPage onOpenProduct={(p) => setSelectedProduct(p)} />
      );
    }
    if (route === 'about') return <AboutPage />;
    if (route === 'lookbook') return <LookbookContact />;
    return null;
  }, [route, selectedProduct]);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      <Navbar current={route} onNavigate={handleNavigate} />
      {content}
      <Footer />
    </div>
  );
}

export default App;
