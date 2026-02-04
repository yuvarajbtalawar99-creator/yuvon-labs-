import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Cloud, Globe, Code2, GraduationCap, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Advanced ML models, NLP, computer vision, predictive analytics.',
    tags: ['Neural Networks', 'NLP Solutions', 'Computer Vision', 'Predictive Models'],
    color: 'from-purple-500 to-pink-500',
    glow: 'rgba(168, 85, 247, 0.5)',
    delay: 0,
  },
  {
    icon: Cloud,
    title: 'Cloud & Backend',
    description: 'Scalable cloud infrastructure, microservices, serverless systems.',
    tags: ['AWS', 'Azure', 'GCP', 'Microservices', 'DevOps'],
    color: 'from-blue-500 to-cyan-400',
    glow: 'rgba(59, 130, 246, 0.5)',
    delay: 0.1,
  },
  {
    icon: Globe,
    title: 'Web & Mobile Apps',
    description: 'High-performance web and mobile applications with modern frameworks.',
    tags: ['React', 'Next.js', 'React Native', 'PWA', 'UI/UX'],
    color: 'from-emerald-400 to-teal-500',
    glow: 'rgba(52, 211, 153, 0.5)',
    delay: 0.2,
  },
  {
    icon: Code2,
    title: 'Custom Software',
    description: 'Tailor-made enterprise software and system integrations.',
    tags: ['Enterprise Solutions', 'API Development', 'Legacy Modernization'],
    color: 'from-orange-500 to-yellow-400',
    glow: 'rgba(249, 115, 22, 0.5)',
    delay: 0.3,
  },
  {
    icon: GraduationCap,
    title: 'College Projects',
    description: 'Industry-level college and final-year projects with real-world architecture, documentation, and deployment support.',
    tags: ['Final Year Projects', 'AI/ML', 'Blockchain', 'Web Apps', 'Cloud'],
    color: 'from-amber-400 to-yellow-600',
    glow: 'rgba(251, 191, 36, 0.5)',
    badge: 'Student Focused',
    featured: true,
    delay: 0.4,
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase">
            What We Build
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From concept to deployment, we deliver next-generation solutions
            that drive innovation and transform businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="group relative"
            >
              {/* Floating Animation */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                  rotate: [0, 0.5, 0, -0.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="h-full"
              >
                {/* Card */}
                <div className={`
                  relative h-full p-6 rounded-2xl transition-all duration-700
                  backdrop-blur-xl bg-gradient-to-br from-white/10 to-transparent
                  border ${service.featured ? 'border-primary/40' : 'border-white/10'}
                  group-hover:border-primary/50 group-hover:-translate-y-3
                  shadow-2xl shadow-black/40 group-hover:shadow-primary/30
                  perspective-1000 overflow-hidden
                `}>
                  {/* Subtle Shimmer Effect on view */}
                  <motion.div
                    className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                    initial={{ left: '-100%' }}
                    whileInView={{ left: '100%' }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeInOut" }}
                  />

                  {/* Featured Badge */}
                  {service.badge && (
                    <div className={`absolute -top-2.5 -right-2 px-3 py-1 rounded-full
                      bg-gradient-to-r ${service.color}
                      text-white text-[10px] font-bold
                      shadow-lg shadow-black/20
                      flex items-center gap-1
                      animate-pulse z-20`}
                    >
                      <Sparkles className="w-2.5 h-2.5" />
                      {service.badge}
                    </div>
                  )}

                  {/* Icon with Breathing Glow */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 15px ${service.glow}`,
                          `0 0 30px ${service.glow}`,
                          `0 0 15px ${service.glow}`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} 
                        flex items-center justify-center relative
                        transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 translate-z-10 shadow-lg`}
                    >
                      <service.icon className="w-7 h-7 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" strokeWidth={2} />

                      {/* Inner highlight */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 rounded-xl" />
                    </motion.div>

                    {/* Shadow/Glow reflection */}
                    <div className={`absolute -inset-2 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${service.color} -z-10`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-5 leading-relaxed text-xs group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-medium
                          border border-white/5 bg-white/5
                          text-muted-foreground
                          group-hover:border-primary/40 group-hover:text-foreground group-hover:bg-primary/5
                          transition-all duration-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
