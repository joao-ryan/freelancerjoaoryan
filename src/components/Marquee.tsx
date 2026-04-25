import { motion } from 'motion/react';
import React from 'react';

const TECHS = [
  'React', 'Node.js', 'TypeScript', 'Next.js', 'MongoDB', 
  'TailwindCSS', 'AWS', 'Docker', 'Framer Motion', 'Three.js',
  'PostgreSQL', 'Redis', 'Vercel', 'Python', 'GraphQL'
];

export const Marquee = () => {
  return (
    <div className="py-12 border-y border-white/5 overflow-hidden bg-surface relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-obsidian to-transparent z-10" />
      
      <motion.div
        animate={{ x: [0, -1035] }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="flex gap-20 whitespace-nowrap"
      >
        {[...TECHS, ...TECHS].map((tech, i) => (
          <div key={i} className="flex items-center gap-6">
            <div className="w-2 h-2 rounded-full bg-accent-blue/50" />
            <span className="text-4xl font-display font-bold text-white/10 hover:text-accent-blue/40 transition-colors cursor-default uppercase tracking-tight">
              {tech}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
