import React from 'react';

export const Categories = () => {
  const items = [
    { title: 'T-Shirts', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Outerwear', img: 'https://images.unsplash.com/photo-1503342394121-41b7b1929a3d?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Accessories', img: 'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?q=80&w=1600&auto=format&fit=crop' },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">Categories</h2>
          <span className="text-sm text-[#1A1A1A]/60">Essentials for every day</span>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group relative overflow-hidden rounded-xl border border-[#D9D9D9] bg-white">
              <img
                src={it.img}
                alt={it.title}
                className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium tracking-wide">{it.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const LatestGrid = () => {
  const photos = [
    'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520970004556-34b58175ad4a?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520974735194-5f5736b6a239?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526154002-d07d9e7b2f28?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section id="latest" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">Latest Collection</h2>
          <span className="text-sm text-[#1A1A1A]/60">Nine looks, one mood</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-[#D9D9D9] bg-white">
              <img src={src} alt={`UKWH look ${i + 1}`} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#D9D9D9]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="text-xl font-semibold tracking-[0.35em] text-[#1A1A1A]">UKWH</div>
            <p className="mt-2 text-sm text-[#1A1A1A]/60">Everyday Comfort in Simplicity</p>
          </div>
          <nav className="flex gap-6 text-sm text-[#1A1A1A]/80">
            <a href="#" className="hover:text-[#1E90FF] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#1E90FF] transition-colors">TikTok</a>
            <a href="#" className="hover:text-[#1E90FF] transition-colors">WhatsApp</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-[#1A1A1A]/50">© {new Date().getFullYear()} UKWH — All rights reserved.</div>
      </div>
    </footer>
  );
};
