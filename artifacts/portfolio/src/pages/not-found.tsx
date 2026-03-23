import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <h1 className="text-8xl font-display font-extrabold tracking-tighter text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-medium text-muted-foreground mb-8">Page not found</h2>
        <p className="text-muted-foreground mb-12 text-balance">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
