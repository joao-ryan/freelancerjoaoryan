import { motion } from 'motion/react';
import { Instagram, Linkedin, ArrowUpRight, Zap, Shield, Globe } from 'lucide-react';
import React from 'react';
import { Button } from './ui/Button';
import joaoRyanImg from './joaoryan.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="magnetic-pill mb-8"
            style={{ perspective: 1000 }}
          >
            Software Architect & Conversão 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl lg:text-[72px] font-extrabold leading-[0.9] tracking-tight mb-8 text-text-primary"
            style={{ perspective: 1000 }}
          >
            Sistemas que <span className="text-gradient">escalam.</span><br /> 
            Designs que <span className="text-gradient">dominam.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="mb-10 max-w-xl"
            style={{ perspective: 1000 }}
          >
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
              Olá, eu sou o <span className="font-bold text-text-primary text-xl">João Ryan</span>. 
              <br className="hidden md:block" /> Desenvolvo ecossistemas digitais de alta performance que transformam complexidade em lucro. Como seu parceiro técnico direto, entrego o padrão das Big Techs com a agilidade e o investimento inteligente que agências tradicionais não conseguem equiparar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mb-12"
          >
            <a href="https://wa.me/5585991779064" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full px-10 rounded-2xl bg-gradient text-white group">
                Me Chame <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </a>
            <div className="flex items-center gap-3 text-text-secondary font-sans text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Disponível Ceará/Global
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <SocialLink icon={<Instagram />} href="https://instagram.com/ryancastrodev_" label="Instagram" />
            <SocialLink icon={<Linkedin />} href="https://linkedin.com/in/joaoryan" label="LinkedIn" />
          </motion.div>
        </div>

        {/* Right side Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: -15, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full sm:w-[80%] lg:w-[45%] relative mt-12 lg:mt-0"
          style={{ perspective: 1200 }}
        >
           <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden glass p-3 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent rounded-[2.5rem] opacity-70" />
              <img 
                src={joaoRyanImg} 
                alt="João Ryan" 
                className="w-full h-full object-cover rounded-[1.5rem] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Element on Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-8 -right-4 lg:-right-8 glass px-6 py-4 rounded-3xl border border-glass-border hidden sm:flex items-center gap-4 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <Zap className="text-accent-blue w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-display font-bold text-text-primary">100%</p>
                  <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Lighthouse</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 -left-4 lg:-left-8 glass px-6 py-4 rounded-3xl border border-glass-border hidden sm:flex items-center gap-4 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center">
                  <Shield className="text-accent-blue w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-display font-bold text-text-primary">Exclusivo</p>
                  <p className="text-[10px] text-text-secondary uppercase tracking-widest font-bold">Código Autoral</p>
                </div>
              </motion.div>
           </div>
        </motion.div>
      </div>

      {/* Background Floating badges (removed top/bottom to clean design up) */}
    </section>
  );
};

const SocialLink = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, scale: 1.1 }}
    className="p-4 rounded-full glass text-text-secondary hover:text-accent-blue transition-all group relative border border-glass-border shadow-lg"
  >
    {icon}
    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 glass rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-text-primary">
      {label}
    </span>
  </motion.a>
);
