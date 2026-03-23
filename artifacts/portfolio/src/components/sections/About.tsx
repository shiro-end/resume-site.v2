import { motion } from "framer-motion";

export function About() {
  const skills = [
    "Frontend Development",
    "UI/UX Design",
    "Design Systems",
    "React & Next.js",
    "TypeScript",
    "Framer Motion",
    "Tailwind CSS",
    "Creative Coding"
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-display font-bold"
            >
              About Me
            </motion.h2>
          </div>

          <div className="md:col-span-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg dark:prose-invert"
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground text-balance">
                Hello, I'm Yuki. I'm a passionate Design Engineer blending the boundaries between design and development. I believe that great products require meticulous attention to both aesthetics and architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-6">
                With a background in traditional graphic design and modern web development, I bring a unique perspective to digital products. I focus on creating interfaces that are not just usable, but delightful—prioritizing clean typography, refined spacing, and meaningful motion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">
                Core Capabilities
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 border border-border rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
