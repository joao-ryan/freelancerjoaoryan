import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '../lib/utils';

const PROJECTS = [
  {
    title: 'Nik Makeup Studio',
    category: 'Estética & Beleza',
    image: '/nikmakeup.png',
  },
  {
    title: 'Paju Automóveis',
    category: 'Concessionárias',
    image: '/pajuautomoveis.png',
  },
  {
    title: 'Dra. Rafaela – Odontologia',
    category: 'Clínicas & Saúde',
    image: '/rafaeladentista.png',
  },
  {
    title: 'Valentina Designer',
    category: 'Designers',
    image: '/valentinadesigner.png',
  },
  {
    title: 'Arizona Barbearia',
    category: 'Estética & Beleza',
    image: '/arizonabarbearia.png',
  },
  {
    title: 'Cartilho Advocacia',
    category: 'Advogados',
    image: '/cartilho.png',
  }
];

const CATEGORIES = ['All', 'Estética & Beleza', 'Concessionárias', 'Clínicas & Saúde', 'Designers', 'Advogados'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = PROJECTS.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projetos" className="py-24 px-4 bg-bg-primary transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent-blue" />
              <span className="text-accent-blue font-bold tracking-widest uppercase text-xs">Portfólio Premium</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-text-primary">Projetos <span className="text-gradient">Animados</span></h2>
          </div>
          <div className="flex flex-col gap-4 max-w-md">
            <p className="text-text-secondary text-sm">
              Mais que beleza visual, sistemas projetados para maximizar métricas de negócio. Veja como transformo investimento em ativos rentáveis.
            </p>
            <div className="border-l-2 border-accent-blue/50 pl-4 py-1">
              <p className="text-[11px] font-bold uppercase tracking-widest text-accent-blue mb-1">
                Atendimento Especializado
              </p>
              <p className="text-text-secondary text-sm">
                Desenvolvo soluções de alto padrão para: <strong className="text-text-primary">Designers, Profissionais de Estética, Lojas, Companhias Corporativas, Advogados, Barbeiros, Cabeleireiras, Manicures, Maquiadoras e Clínicas.</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filter UI */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300",
                activeCategory === category
                  ? "bg-accent-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  : "glass text-text-secondary hover:text-text-primary hover:border-accent-blue/30"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.8, rotateX: -15, y: 50 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: 15, y: -50 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden glass cursor-pointer h-full shadow-lg hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-shadow duration-500"
                style={{ perspective: 1200 }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-6 relative z-20 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent-sky font-bold">{project.category}</span>
                    <ArrowUpRight className="w-5 h-5 text-text-secondary group-hover:text-accent-blue transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
