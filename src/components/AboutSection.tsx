import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Rocket } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We focus on delivering solutions that make a real impact on your business goals.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly pushing boundaries with cutting-edge AI and cloud technologies.',
    },
    {
      icon: Rocket,
      title: 'Rapid Delivery',
      description: 'Agile methodologies ensure quick turnaround without compromising quality.',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 radial-glow opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Abstract shapes */}
              <motion.div
                className="absolute inset-0 glass-card rounded-3xl"
                style={{
                  transform: 'rotate(-6deg)',
                }}
                animate={isInView ? { rotate: [-6, -4, -6] } : {}}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-4 glass-card rounded-3xl"
                style={{
                  transform: 'rotate(3deg)',
                }}
                animate={isInView ? { rotate: [3, 5, 3] } : {}}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Center content */}
              <div className="absolute inset-6 sm:inset-8 glass-card rounded-3xl flex flex-col items-center justify-center p-6 text-center">
                <motion.span
                  className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-primary/80 mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Founded in 2025
                </motion.span>

                <motion.div
                  className="text-5xl sm:text-6xl font-bold gradient-text mb-1"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3, type: 'spring' }}
                >
                  10+
                </motion.div>
                <div className="text-base sm:text-lg font-bold text-foreground mb-3">Projects Built</div>

                <p className="text-[11px] sm:text-xs glowing-text-white leading-relaxed px-2 line-clamp-2">
                  Building the Next Generation of Digital Products
                </p>

                <div className="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-5 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <div className="grid gap-3 w-full px-1">
                  <div className="group">
                    <div className="text-[10px] sm:text-[11px] font-medium glowing-text-white group-hover:text-primary transition-colors text-center uppercase tracking-wider">
                      Multiple Domains Served
                    </div>
                  </div>
                  <div className="group">
                    <div className="text-[10px] sm:text-[11px] font-medium glowing-text-white group-hover:text-primary transition-colors text-center uppercase tracking-wider">
                      End-to-End Product Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Section header */}
            <div>
              <motion.span
                className="text-primary text-sm font-semibold tracking-wider uppercase"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                Who We Are
              </motion.span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                A Vision-Driven{' '}
                <span className="gradient-text">Technology Lab</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-bold">VYON LABS</span> is at the forefront of digital innovation. We are a team of passionate
              engineers, designers, and strategists dedicated to building transformative
              solutions that shape the future of technology.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From AI-powered platforms to scalable cloud architectures, we combine
              deep technical expertise with creative problem-solving to deliver
              exceptional results for clients worldwide.
            </p>

            {/* Features */}
            <div className="space-y-6 pt-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
