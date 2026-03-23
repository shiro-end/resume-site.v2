import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[10vw] md:text-[6vw] font-display font-extrabold leading-none tracking-tighter mb-8">
              Let's create <br/> something.
            </h2>
            
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-4 text-2xl md:text-3xl font-light hover:opacity-70 transition-opacity group"
            >
              hello@example.com
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8 md:items-end"
          >
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4 md:text-right">
                Socials
              </h3>
              <ul className="flex flex-col gap-2 md:items-end text-lg font-medium">
                <li><a href="#" className="hover:opacity-70 transition-opacity">Twitter / X</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">GitHub</a></li>
                <li><a href="#" className="hover:opacity-70 transition-opacity">Dribbble</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold tracking-widest uppercase opacity-50 mb-4 md:text-right mt-8 md:mt-0">
                Location
              </h3>
              <p className="text-lg font-medium md:text-right">
                Tokyo, Japan <br/>
                <span className="opacity-50 text-sm font-normal">Available for remote work</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
