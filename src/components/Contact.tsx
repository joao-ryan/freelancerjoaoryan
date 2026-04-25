import { motion } from 'motion/react';
import { Send, CheckCircle2, Mail, MessageSquare, Copy } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import confetti from 'canvas-confetti';
import { Button } from './ui/Button';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/joaoryandesenvolvedor@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            _subject: "Novo Contato pelo Portfolio!"
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#0ea5e9']
        });
        setTimeout(() => {
          setIsSubmitted(false);
          reset();
        }, 5000);
      } else {
        alert("Desculpe, ocorreu um erro ao enviar a mensagem. Tente o WhatsApp!");
      }
    } catch (e) {
      console.error(e);
      alert("Desculpe, ocorreu um erro ao enviar a mensagem. Tente o WhatsApp!");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('joaoryandesenvolvedor@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="processo" className="py-24 px-4 bg-bg-primary transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ perspective: 1200 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary"
            >
              Vamos elevar o seu <span className="text-gradient">padrão</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-secondary text-lg mb-10 max-w-md"
            >
              Vamos desenhar a melhor solução com o máximo custo-benefício para o seu momento. 
              Entre em contato agora e agende uma consultoria estratégica direta comigo.
            </motion.p>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                onClick={copyEmail}
                className="flex items-center gap-4 glass p-6 rounded-3xl cursor-pointer hover:border-accent-blue/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-accent-blue" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">E-mail</p>
                  <p className="text-lg font-medium text-text-primary">joaoryandesenvolvedor@gmail.com</p>
                </div>
                {emailCopied ? <CheckCircle2 className="text-blue-500" /> : <Copy className="text-text-secondary group-hover:text-accent-blue" />}
              </motion.div>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                href="https://wa.me/5585991779064"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass p-6 rounded-3xl cursor-pointer hover:border-accent-blue/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-blue-500" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-lg font-medium text-text-primary">+55 (85) 99177-9064</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-tighter">Online Agora</div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="relative" style={{ perspective: 1200 }}>
          <div className="absolute inset-0 bg-accent-blue/5 blur-[120px] rounded-full" />
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-[2.5rem] relative z-10 border border-glass-border"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-text-primary">Mensagem Enviada!</h3>
                <p className="text-text-secondary">João Ryan entrará em contato em breve.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-text-secondary mb-2">Nome Completo</label>
                  <input
                    {...register('name', { required: true })}
                    className="w-full bg-accent-blue/5 border border-glass-border rounded-2xl p-4 focus:border-accent-blue focus:outline-none transition-colors text-text-primary"
                    placeholder="Ex: Musk"
                  />
                  {errors.name && <span className="text-xs text-red-500 mt-1">Campo obrigatório</span>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-sm font-medium text-text-secondary mb-2">E-mail Profissional</label>
                  <input
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-accent-blue/5 border border-glass-border rounded-2xl p-4 focus:border-accent-blue focus:outline-none transition-colors text-text-primary"
                    placeholder="contato@empresa.com"
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1">E-mail inválido</span>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-text-secondary mb-2">Seu Desafio</label>
                  <textarea
                    {...register('message', { required: true })}
                    rows={4}
                    className="w-full bg-accent-blue/5 border border-glass-border rounded-2xl p-4 focus:border-accent-blue focus:outline-none transition-colors resize-none text-text-primary"
                    placeholder="Conte-me sobre o seu projeto..."
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 text-lg font-bold bg-gradient text-white"
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>Enviar Mensagem <Send className="ml-2 w-5 h-5" /></>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
