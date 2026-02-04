import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Shield, Scale, Clock, Award, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Speed',
    description: 'Rapid development cycles with agile methodology',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols and compliance',
  },
  {
    icon: Scale,
    title: 'Infinite Scale',
    description: 'Architecture built for millions of users',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance when you need it',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized excellence in innovation',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership',
    description: 'We grow with you as true partners',
  },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Why VYON LABS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
            The <span className="gradient-text">VYON</span> Advantage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
            Experience the difference of working with a team that's truly invested in your success.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <motion.div
                className="relative mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Hexagon shape */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(185 80% 50% / 0.2)" />
                        <stop offset="100%" stopColor="hsl(210 80% 50% / 0.1)" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="50,3 93,25 93,75 50,97 7,75 7,25"
                      fill={`url(#gradient-${i})`}
                      stroke="hsl(185 40% 40% / 0.5)"
                      strokeWidth="1"
                      className="group-hover:stroke-primary transition-colors"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <reason.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                </div>
              </motion.div>

              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
