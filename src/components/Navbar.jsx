import React from 'react';

const Navbar = ({ current, onNavigate }) => {
  const linkBase =
    'text-sm md:text-base tracking-wide text-[#1A1A1A] hover:text-[#1E90FF] transition-colors';

  const Link = ({ to, children }) => (
    <button
      onClick={() => onNavigate(to)}
      className={`${linkBase} ${current === to ? 'text-[#1E90FF]' : ''}`}
      aria-current={current === to ? 'page' : undefined}
    >
      {children}
    </button>
  );

  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-[#D9D9D9]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button onClick={() => onNavigate('home')} className="group">
            <span className="text-2xl font-semibold tracking-[0.35em] text-[#1A1A1A] group-hover:text-[#1E90FF] transition-colors">UKWH</span>
          </button>
          <span className="hidden md:block h-4 w-px bg-[#D9D9D9]" />
          <nav className="hidden md:flex items-center gap-6">
            <Link to="home">Home</Link>
            <Link to="catalog">Catalog</Link>
            <Link to="about">About</Link>
            <Link to="lookbook">Lookbook / Contact</Link>
          </nav>
        </div>
        <div className="md:hidden">
          <nav className="flex items-center gap-4">
            <Link to="catalog">Catalog</Link>
            <Link to="about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
