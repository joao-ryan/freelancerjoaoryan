import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';

interface NavbarProps {
  onThemeToggle: () => void;
  currentTheme: 'dark' | 'light';
}

export const Navbar = ({ onThemeToggle, currentTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Contato', href: '#processo' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center justify-between w-full max-w-7xl px-8 py-3 rounded-full transition-all duration-500 glass border-glass-border`}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient flex items-center justify-center font-display font-bold text-sm text-white">
            JR
          </div>
          <span className="font-display font-bold text-lg tracking-tighter uppercase text-text-primary">
            João Ryan
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (i * 0.1), duration: 0.5 }}
              className="text-xs uppercase tracking-widest font-bold text-text-secondary hover:text-accent-blue transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {currentTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <a href="https://wa.me/5585991779064" target="_blank" rel="noopener noreferrer" className="bg-gradient text-white font-sans font-extrabold text-[10px] tracking-widest px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all uppercase">
            Me Chame
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass p-6 rounded-3xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-accent-blue transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                href="https://wa.me/5585991779064" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient text-white font-sans font-extrabold text-sm tracking-widest py-3 rounded-xl flex items-center justify-center uppercase shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                Me Chame
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
