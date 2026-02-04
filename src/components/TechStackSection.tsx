import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { techIcons } from './TechIcons';

const technologies = Object.keys(techIcons).map((name) => ({
  name,
  ...techIcons[name as keyof typeof techIcons],
}));

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Technology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Tech Icons - Scrolling */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-8 py-4"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, i) => (
              <motion.div
                key={`${tech.name}-${i}`}
                className="flex-shrink-0 w-28 h-28 glass-card rounded-2xl flex flex-col items-center justify-center gap-2 hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-full h-full"
                    fill="currentColor"
                    style={{ color: tech.color }}
                  >
                    <path d={tech.path} />
                  </svg>
                  {/* Subtle glow effect */}
                  <div
                    className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
