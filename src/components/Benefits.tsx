import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Globe, PenTool, TrendingUp, Wallet, Clock, CheckCircle2 } from 'lucide-react';
import React from 'react';

const BENEFITS = [
  {
    title: "Stack das Big Techs",
    description: "Uso as tecnologias corporativas mais poderosas do mercado. Seu projeto nasce com a mesma infraestrutura que as maiores empresas do mundo utilizam.",
    icon: <Cpu className="w-6 h-6 text-accent-blue" />
  },
  {
    title: "Dominância de Mercado",
    description: "Imagine seu sistema ofuscando concorrentes maiores. Com código premium e UX envolvente, te posiciono acima do padrão atual da sua indústria.",
    icon: <TrendingUp className="w-6 h-6 text-accent-blue" />
  },
  {
    title: "Retorno Inteligente",
    description: "Máximo custo-benefício. Ao trabalhar direto comigo, você tem o nível técnico de uma grande agência corporativa, mas sem os altos custos inflados.",
    icon: <Wallet className="w-6 h-6 text-accent-blue" />
  },
  {
    title: "Prototipagem de Alta Fidelidade",
    description: "Você visualiza todo o fluxo e design do projeto antes da primeira linha de código ser escrita, garantindo alinhamento e precisão impecáveis.",
    icon: <PenTool className="w-6 h-6 text-accent-blue" />
  },
  {
    title: "Velocidade de Entrega",
    description: "Processos ágeis e execução implacável. Entrego seu ativo digital de ponta em tempo recorde, para que seu negócio comece a faturar rapidamente.",
    icon: <Clock className="w-6 h-6 text-accent-blue" />
  },
  {
    title: "Infra & Domínio Próprio",
    description: "Cuido de toda a infraestrutura: desde a configuração do seu domínio exclusivo até a hospedagem em nuvem de alta disponibilidade.",
    icon: <Globe className="w-6 h-6 text-accent-blue" />
  },
  {
    title: "Manutenção & Evolução",
    description: "Seu sistema protegido, atualizado e funcionando perfeitamente. Ofereço suporte premium para garantir que a máquina de vendas nunca pare.",
    icon: <ShieldCheck className="w-6 h-6 text-accent-blue" />
  },
  {
    title: "Foco Total no Cliente",
    description: "Muito além do código. Meu papel é entender seu negócio para entregar as melhores soluções, focando em conversão e no seu posicionamento.",
    icon: <CheckCircle2 className="w-6 h-6 text-accent-blue" />
  }
];

export const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 px-4 bg-bg-primary transition-colors duration-500 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-accent-blue" />
            <span className="text-accent-blue font-bold tracking-widest uppercase text-xs">Vantagem Competitiva</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
            O Valor de um <span className="text-gradient">Arquiteto de Software</span>.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base lg:text-lg">
            Um panorama do que significa trabalhar ao lado de um parceiro tecnológico de elite, focado em trazer resultados e dominar sua categoria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
              className="glass p-8 rounded-3xl border border-glass-border hover:border-accent-blue/30 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-accent-blue/10 bg-gradient-to-b from-white/5 to-transparent dark:from-white/5 dark:to-transparent bg-[length:100%_200%] bg-top hover:bg-bottom"
              style={{ perspective: 1000 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-text-primary tracking-tight">{benefit.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
