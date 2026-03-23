import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="min-h-[100svh] flex flex-col justify-center px-6 md:px-12 relative pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-muted-foreground font-medium tracking-wide uppercase text-sm md:text-base mb-6">
            Portfolio — 2024
          </h2>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-display font-extrabold tracking-tighter text-foreground mb-8 text-balance">
            Design Engineer <br className="hidden md:block" />
            <span className="text-muted-foreground">Based in Tokyo.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed text-balance">
            I craft digital experiences that live at the intersection of beautiful design and robust engineering. Specialized in React, minimal interfaces, and fluid animations.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-sm font-medium text-muted-foreground"
      >
        <div className="w-[1px] h-12 bg-border relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-foreground"
          />
        </div>
        <span className="uppercase tracking-widest text-xs">Scroll Down</span>
      </motion.div>
    </section>
  );
}
