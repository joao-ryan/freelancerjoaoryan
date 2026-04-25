import { motion } from 'motion/react';
import { Target, Trophy, ChevronRight, Fingerprint } from 'lucide-react';
import React from 'react';
// Import removed

export const About = () => {
  return (
    <section id="sobre" className="py-24 px-4 bg-bg-primary transition-colors duration-500 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side: Photo */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotateY: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 relative"
          style={{ perspective: 1200 }}
        >
          <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 relative rounded-[2.5rem] p-3 glass border border-glass-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-transparent rounded-[2.5rem] opacity-50" />
            <img 
              src="/joaoryan2.webp" 
              alt="João Ryan - Arquiteto de Software" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
            
            {/* Floating Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:-right-12 glass p-6 rounded-3xl border border-glass-border max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <Trophy className="text-accent-blue w-5 h-5" />
                </div>
              </div>
              <p className="text-sm font-bold text-text-primary leading-tight">Elite Standard</p>
              <p className="text-[10px] text-text-secondary uppercase tracking-widest mt-1">Design & Code</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          style={{ perspective: 1200 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Fingerprint className="w-5 h-5 text-accent-blue" />
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs">Sobre a Mente</span>
          </div>

          <h2 className="font-display text-4xl mt-2 md:text-6xl font-bold mb-8 text-text-primary">
            A Arte da <span className="text-gradient">Engenharia</span> Complexa.
          </h2>

          <div className="space-y-6 text-text-secondary text-base lg:text-lg leading-relaxed max-w-xl">
            <p>
              Contratar grandes agências ou manter equipes internas de TI infladas gera custos fixos absurdos e processos burocráticos. Minha proposta é atuar como seu <strong className="text-text-primary">Diretor de Tecnologia e Desenvolvedor Principal</strong>, tudo em um só ponto de contato.
            </p>
            <p>
              Você investe exclusivamente naquilo que gera retorno: código de alto padrão, arquitetura escalável e design focado em conversão. Sem intermediários, entregando a qualidade das maiores startups do mundo com um <strong className="text-text-primary">custo-benefício incomparável e execução ágil</strong>.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
