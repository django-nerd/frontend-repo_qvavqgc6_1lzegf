import React from 'react';

export const CatalogPage = ({ onOpenProduct }) => {
  const imgs = [
    'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520970004556-34b58175ad4a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520974735194-5f5736b6a239?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526154002-d07d9e7b2f28?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1503342394121-41b7b1929a3d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop',
  ];

  const items = imgs.map((img, i) => ({
    id: i + 1,
    name: `UKWH Piece ${i + 1}`,
    category: i % 3 === 0 ? 'Outerwear' : i % 3 === 1 ? 'T‑Shirt' : 'Accessory',
    img,
  }));

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">Catalog</h2>
          <span className="text-sm text-[#1A1A1A]/60">Browse the collection</span>
        </div>
        <div className="mt-8 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {items.map((item) => (
            <button key={item.id} onClick={() => onOpenProduct(item)} className="w-full mb-4 group text-left">
              <div className="overflow-hidden rounded-xl border border-[#D9D9D9] bg-white">
                <img src={item.img} alt={item.name} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[#1A1A1A]">{item.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[#F5F5F5] text-[#1A1A1A]/70 border border-[#EAEAEA]">{item.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ProductDetail = ({ product, onBack }) => {
  if (!product) return null;
  const description = `Crafted from breathable cotton with a relaxed silhouette. Available sizes: S, M, L, XL. Inspired by the ease of everyday movement.`;
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <button onClick={onBack} className="text-sm text-[#1A1A1A]/60 hover:text-[#1E90FF] transition-colors">← Back to Catalog</button>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[#D9D9D9] rounded-xl overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-[#1A1A1A]">{product.name}</h1>
            <p className="mt-2 text-sm text-[#1A1A1A]/60">{product.category}</p>
            <p className="mt-6 text-[#1A1A1A]/80 leading-relaxed">{description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-sm hover:bg-[#1E90FF] transition-colors">Inquire via WhatsApp</a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-[#D9D9D9] text-[#1A1A1A] text-sm hover:border-[#1E90FF] hover:text-[#1E90FF] transition-colors">View on Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutPage = () => {
  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl font-semibold text-[#1A1A1A]">About UKWH</h2>
        <p className="mt-4 text-[#1A1A1A]/80 leading-relaxed">
          UKWH is a casual daily wear label built on one idea: simplicity feels good. Our pieces are
          designed to fit seamlessly into your routine — versatile, breathable, and quietly confident.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1520970004556-34b58175ad4a?q=80&w=1200&auto=format&fit=crop',
          ].map((src, i) => (
            <img key={i} src={src} alt={`About ${i}`} className="rounded-xl border border-[#D9D9D9] object-cover h-56 w-full" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
};

export const LookbookContact = () => {
  const looks = [
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1526154002-d07d9e7b2f28?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
  ];

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">Lookbook</h2>
          <span className="text-sm text-[#1A1A1A]/60">Editorial moments</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {looks.map((src, i) => (
            <img key={i} src={src} alt={`Look ${i + 1}`} className="rounded-xl border border-[#D9D9D9] object-cover h-64 w-full" loading="lazy" />
          ))}
        </div>

        <div className="mt-12 border-t border-[#D9D9D9] pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-[#1A1A1A]">Contact</h3>
            <p className="mt-2 text-sm text-[#1A1A1A]/70">For inquiries, collaborations, or stockists, reach out via:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-[#D9D9D9] text-[#1A1A1A] text-sm hover:border-[#1E90FF] hover:text-[#1E90FF] transition-colors">Instagram</a>
              <a href="https://tiktok.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-[#D9D9D9] text-[#1A1A1A] text-sm hover:border-[#1E90FF] hover:text-[#1E90FF] transition-colors">TikTok</a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-sm hover:bg-[#1E90FF] transition-colors">WhatsApp</a>
            </div>
          </div>
          <form className="bg-white border border-[#D9D9D9] rounded-xl p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="w-full border border-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40" placeholder="Name" />
              <input className="w-full border border-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40" placeholder="Email" type="email" />
            </div>
            <textarea className="mt-4 w-full border border-[#D9D9D9] rounded-md px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40" placeholder="Message" />
            <button type="button" className="mt-4 px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-sm hover:bg-[#1E90FF] transition-colors">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};
