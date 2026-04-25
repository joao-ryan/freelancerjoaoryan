import { motion } from 'motion/react';
import { Rocket, Layout, Code2, Users, CheckCircle2, Cpu } from 'lucide-react';
import React from 'react';
import { Card } from './ui/Card';

export const BentoGrid = () => {
  return (
    <section id="diferenciais" className="py-24 px-4 bg-bg-primary transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4 text-text-primary">Engenharia de <span className="text-gradient">Conversão</span></h2>
          <p className="text-text-secondary max-w-2xl mx-auto">Ativos digitais estrategicamente projetados para marcas que buscam o topo absoluto do mercado.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Performance Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="h-full flex flex-col justify-between overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-6">
                  <Rocket className="text-accent-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-text-primary">Performance que Retém</h3>
                <p className="text-text-secondary">Otimização extrema gera carregamento instantâneo. Usuários não desistem da compra, elevando seu faturamento sem gastar mais em anúncios.</p>
              </div>
              <div className="mt-8 flex gap-4 overflow-hidden">
                 {['99', '100', '98'].map((score, i) => (
                   <div key={i} className="flex-1 glass p-4 rounded-2xl text-center border-t-2 border-accent-blue/30 bg-accent-blue/5">
                      <div className="text-2xl font-bold text-accent-blue">{score}</div>
                      <div className="text-[10px] uppercase tracking-tighter text-text-secondary">Lighthouse</div>
                   </div>
                 ))}
              </div>
            </Card>
          </motion.div>

          {/* UI/UX Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.1 }}
            className="md:col-span-1"
          >
            <Card className="h-full">
              <div className="w-12 h-12 rounded-xl bg-accent-sky/10 flex items-center justify-center mb-6">
                <Layout className="text-accent-sky" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Design de Conversão</h3>
              <p className="text-text-secondary text-sm">Cada pixel é posicionado para transmitir sofisticação e guiar seu cliente até a compra. Um investimento que se paga rapidamente.</p>
              <div className="mt-12 relative h-24 bg-accent-blue/5 rounded-xl border border-glass-border overflow-hidden">
                 <motion.div 
                   animate={{ x: [0, 10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute top-4 left-4 w-12 h-2 rounded-full bg-accent-blue/40" 
                 />
                 <motion.div 
                   animate={{ x: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute top-8 left-4 w-20 h-2 rounded-full bg-zinc-400/20" 
                 />
                 <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-accent-blue shadow-[0_0_30px_rgba(59,130,246,0.6)]" />
              </div>
            </Card>
          </motion.div>

          {/* Technical Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="md:col-span-1"
          >
            <Card className="h-full">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6">
                <Code2 className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-text-primary">Tecnologia Anti-Refação</h3>
              <p className="text-text-secondary text-sm">Stack das Big Techs. O verdadeiro custo-benefício está em construir a arquitetura certa da primeira vez, evitando reescritas amadoras.</p>
            </Card>
          </motion.div>

          {/* Scalability Card */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="h-full">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <Cpu className="text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-text-primary">Escalabilidade Inteligente</h3>
                <p className="text-text-secondary text-sm">Sistemas que crescem com a sua demanda. Invista em infraestrutura apenas conforme a sua base de clientes aumenta, protegendo seu caixa.</p>
              </div>
              <div className="flex-1 glass border-blue-500/20 flex items-center justify-center relative overflow-hidden rounded-2xl p-4 bg-accent-blue/5">
                 <div className="grid grid-cols-4 gap-2 w-full">
                    {Array.from({length: 12}).map((_, i) => (
                      <div key={i} className="h-12 bg-accent-blue/10 rounded-lg border border-glass-border animate-pulse" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                 </div>
              </div>
            </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
