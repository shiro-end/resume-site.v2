import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Aura E-Commerce",
    category: "Web Development / UI Design",
    description: "A headless e-commerce platform focusing on brutalist design and lightning-fast performance.",
    // landing page hero minimal clean architecture interior
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    id: 2,
    title: "Kyoto Architecture",
    category: "Brand Identity / Website",
    description: "Digital presence for an award-winning architecture studio based in Kyoto, Japan.",
    // landing page hero minimal japanese architecture wood
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&q=80",
  },
  {
    id: 3,
    title: "Fintech Dashboard",
    category: "Product Design",
    description: "Complex financial data distilled into a clean, actionable, and beautiful interface.",
    // landing page hero minimal abstract dark texture
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  },
  {
    id: 4,
    title: "Lumina Furniture",
    category: "Frontend Development",
    description: "Interactive catalog for a modern furniture brand utilizing WebGL and smooth transitions.",
    // landing page hero minimal elegant furniture chair
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
  }
];

export function Works() {
  return (
    <section id="works" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold">Selected Works</h2>
          <p className="mt-4 text-muted-foreground max-w-xl text-lg">
            A collection of recent projects demonstrating a commitment to clean design and solid engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => {
                // In a real app this would route to project details
                console.log(`Navigate to ${project.title}`);
              }}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-secondary/50">
                <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-muted-foreground transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <p className="text-muted-foreground max-w-md text-balance">
                    {project.description}
                  </p>
                </div>
                
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center -rotate-45 group-hover:bg-foreground group-hover:text-background group-hover:rotate-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
