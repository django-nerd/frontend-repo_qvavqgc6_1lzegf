import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = ({ onCatalog }) => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
            Everyday Comfort in Simplicity
          </h1>
          <p className="mt-5 text-[#1A1A1A]/70 max-w-xl">
            Casual daily wear designed to move with you. Minimal, modern, and made for real life.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button
              onClick={onCatalog}
              className="px-5 py-3 rounded-full bg-[#1A1A1A] text-white text-sm tracking-wide hover:bg-[#1E90FF] transition-colors"
            >
              Explore Catalog
            </button>
            <a
              href="#latest"
              className="px-5 py-3 rounded-full border border-[#D9D9D9] text-[#1A1A1A] text-sm tracking-wide hover:border-[#1E90FF] hover:text-[#1E90FF] transition-colors"
            >
              Latest Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
