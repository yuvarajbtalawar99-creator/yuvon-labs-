import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#020408]">
      {/* Background Effects - Removed grid and haze for clear black vibe */}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Next-Gen Technology Solutions</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-foreground">Engineering</span>
              <br />
              <span className="gradient-text">the Future</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
              We build cutting-edge AI solutions, cloud infrastructure, and digital products
              that propel businesses into tomorrow. Innovation is not just what we do —
              it's who we are.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="glow-button inline-flex items-center justify-center gap-2 text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#services"
                className="ghost-button inline-flex items-center justify-center text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              {[
                { value: '10+', label: 'Projects Delivered' },
                { value: '99%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - 3D Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Sun - Central Orb with multi-layered glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Solar Corona / Atmosphere - CRYSTAL CLEAR & SUBTLE */}
                <motion.div
                  className="absolute w-32 h-32 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, hsl(185 80% 50% / 0.1) 0%, transparent 70%)',
                    filter: 'blur(4px)',
                  }}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Core Sun - High Contrast & Sharp */}
                <motion.div
                  className="w-28 h-28 rounded-full z-10 border border-white/30"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, hsl(185 80% 65%), hsl(210 80% 45%) 60%, hsl(220 50% 25%))',
                    boxShadow: '0 0 20px hsl(185 80% 50% / 0.2)',
                  }}
                >
                  <div className="absolute inset-1 rounded-full bg-white/5 backdrop-blur-[1px]" />
                </motion.div>
              </div>

              {/* Orbital Paths - ULTRACLEAR & TRANSPARENT (NO MASKING) */}
              {[120, 180, 240, 320].map((radius, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 8, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}

              {/* Orbiting Planets - HIGH VISIBILITY */}
              {[
                { size: 10, color: 'bg-indigo-400', glow: 'rgba(129, 140, 248, 0.6)', radius: 120, speed: 12 },
                { size: 14, color: 'bg-cyan-400', glow: 'rgba(34, 211, 238, 0.6)', radius: 180, speed: 20 },
                { size: 20, color: 'bg-blue-500', glow: 'rgba(59, 130, 246, 0.6)', radius: 240, speed: 30, hasRing: true },
                { size: 12, color: 'bg-emerald-400', glow: 'rgba(52, 211, 153, 0.6)', radius: 320, speed: 45 },
              ].map((planet, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    width: planet.radius * 2,
                    height: planet.radius * 2,
                    left: '50%',
                    top: '50%',
                    marginLeft: -planet.radius,
                    marginTop: -planet.radius,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: planet.speed, repeat: Infinity, ease: 'linear' }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: planet.size,
                      height: planet.size,
                      right: -planet.size / 2,
                      top: '50%',
                      marginTop: -planet.size / 2,
                      background: `radial-gradient(
                        circle at 30% 30%,
                        #ffffff 0%,
                        ${planet.color === 'bg-indigo-400' ? '#818cf8' :
                          planet.color === 'bg-cyan-400' ? '#22d3ee' :
                            planet.color === 'bg-blue-500' ? '#3b82f6' : '#34d399'} 60%,
                        #000 100%
                      )`,
                      boxShadow: `0 0 15px ${planet.glow}`,
                    }}
                  >
                    {/* Depth shadow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-black/60 to-transparent" />

                    {/* Planet Ring */}
                    {planet.hasRing && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220%] h-[30%] border border-white/20 rounded-full rotate-[25deg] shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Starfield - High Definition Points */}
              <div className="absolute inset-0 pointer-events-none opacity-60">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-[1.2px] h-[1.2px] bg-white rounded-full"
                    style={{
                      left: `${(Math.sin(i * 123.45) * 0.5 + 0.5) * 100}%`,
                      top: `${(Math.cos(i * 456.78) * 0.5 + 0.5) * 100}%`,
                      boxShadow: '0 0 3px white',
                    }}
                  />
                ))}
              </div>

              {/* Decorative Galaxies - Tiny & Subtle Spiral/Nebula effect */}
              <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
                {[
                  { left: '10%', top: '15%', color: 'from-purple-500/20 via-blue-500/10 to-transparent', size: 60, duration: 40 },
                  { left: '85%', top: '20%', color: 'from-cyan-500/20 via-blue-500/10 to-transparent', size: 80, duration: 55 },
                  { left: '15%', top: '80%', color: 'from-indigo-500/20 via-purple-500/10 to-transparent', size: 70, duration: 45 },
                  { left: '80%', top: '75%', color: 'from-blue-600/20 via-cyan-500/10 to-transparent', size: 90, duration: 60 },
                ].map((galaxy, i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full bg-gradient-to-br ${galaxy.color} blur-xl`}
                    style={{
                      left: galaxy.left,
                      top: galaxy.top,
                      width: galaxy.size,
                      height: galaxy.size,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{
                      rotate: { duration: galaxy.duration, repeat: Infinity, ease: 'linear' },
                      default: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
                    }}
                  >
                    {/* Inner core represention */}
                    <div className="absolute inset-1/3 bg-white/10 rounded-full blur-md" />
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
