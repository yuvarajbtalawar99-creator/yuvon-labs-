import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SmartDocs',
    category: 'Digital vault',
    description: 'Enterprise-grade AI platform for real-time storing of ducuments and bills.',
    image: '/team/1.png',
    tags: ['Python', 'TensorFlow', 'AWS'],
    githubUrl: 'https://github.com/yuvarajbtalawar99-creator/smartdocs',
    externalUrl: 'https://smartdocs.pages.dev'
  },
  {
    title: 'CloudScale',
    category: 'Cloud Infrastructure',
    description: 'Auto-scaling cloud architecture serving millions of requests with 99.99% uptime.',
    image: 'linear-gradient(135deg, hsl(210 80% 45%), hsl(250 60% 35%))',
    tags: ['Kubernetes', 'Go', 'GCP'],
    githubUrl: 'https://github.com/yuvarajbtalawar99-creator',
    externalUrl: 'https://github.com/yuvarajbtalawar99-creator'
  },
  {
    title: 'FinanceHub',
    category: 'FinTech',
    description: 'Secure payment processing platform with real-time fraud detection capabilities.',
    image: 'linear-gradient(135deg, hsl(160 70% 40%), hsl(185 80% 35%))',
    tags: ['Node.js', 'React', 'Stripe'],
    githubUrl: 'https://github.com/yuvarajbtalawar99-creator',
    externalUrl: 'https://github.com/yuvarajbtalawar99-creator'
  },
  {
    title: 'HealthSync',
    category: 'HealthTech',
    description: 'HIPAA-compliant healthcare platform connecting patients with providers seamlessly.',
    image: 'linear-gradient(135deg, hsl(280 60% 45%), hsl(320 60% 40%))',
    tags: ['React Native', 'Firebase', 'ML'],
    githubUrl: 'https://github.com/yuvarajbtalawar99-creator',
    externalUrl: 'https://github.com/yuvarajbtalawar99-creator'
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 radial-glow opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
            Explore some of our recent work that showcases our expertise in
            building innovative digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-primary/20 shadow-2xl relative">
                {/* Image/Gradient */}
                <div
                  className="h-48 sm:h-56 relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase rounded-full bg-background/60 backdrop-blur-md text-primary border border-primary/20 shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-10px] group-hover:translate-y-0 z-10">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center border border-primary/20 text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(34, 211, 238, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center border border-primary/20 text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Animated lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                    <motion.line
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      stroke="currentColor"
                      className="text-primary/50"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.2 }}
                    />
                    <motion.line
                      x1="50%"
                      y1="100%"
                      x2="100%"
                      y2="50%"
                      stroke="currentColor"
                      className="text-primary/30"
                      strokeWidth="0.5"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: i * 0.2 + 0.3 }}
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold font-['Outfit'] text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-md bg-primary/5 text-primary/80 border border-primary/10 group-hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="ghost-button inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
