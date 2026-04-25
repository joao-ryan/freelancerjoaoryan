import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-glass-border glass transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient flex items-center justify-center font-display font-bold text-2xl text-white">
            JR
          </div>
          <div>
            <p className="font-display font-bold text-xl tracking-tighter text-text-primary uppercase">RYAN</p>
            <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Software Architect</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="https://instagram.com/ryancastrodev_" target="_blank" className="hover:text-accent-blue transition-colors">@ryancastrodev_</a>
          <a href="https://linkedin.com/in/joaoryan" target="_blank" className="hover:text-accent-blue transition-colors">LinkedIn</a>
          <a href="#diferenciais" className="hover:text-accent-blue transition-colors">Diferenciais</a>
          <a href="#processo" className="hover:text-accent-blue transition-colors">Contato</a>
        </div>

        <div className="text-right">
          <p className="text-sm text-text-secondary mb-1">Disponível para projetos globais 2026</p>
          <p className="text-[10px] font-bold text-accent-blue uppercase tracking-[0.2em]">Designed in Brazil for the World</p>
        </div>
      </div>
    </footer>
  );
};
