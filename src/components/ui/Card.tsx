import { motion } from 'motion/react';
import React from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export const Card = ({ children, className, glowColor = 'rgba(59, 130, 246, 0.1)' }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group relative rounded-3xl p-8 glass overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
      
      {/* Decorative inner glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent-blue/5 blur-3xl rounded-full" />
    </motion.div>
  );
};
