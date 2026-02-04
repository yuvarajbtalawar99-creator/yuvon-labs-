import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#020408]/80 backdrop-blur-2xl border-b border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'bg-transparent border-b border-transparent'
        }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/40 via-primary to-primary/40 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <motion.a
              href="#home"
              className="flex items-center gap-3 group relative"
              whileHover={{ scale: 1.02 }}
            >
              {/* Logo Pulsing Ground Glow */}
              <motion.div
                className="absolute inset-x-0 bottom-[-10px] h-6 bg-primary/25 blur-2xl rounded-full"
                animate={{
                  opacity: isScrolled ? [0.2, 0.4, 0.2] : [0.4, 0.7, 0.4],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="flex items-end gap-[1.5px] items-center relative z-10">
                {/* V Logo Mark */}
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[2.5rem] md:h-[3.5rem] w-auto"
                >
                  <motion.path
                    d="M0 0L40 100L55 100L15 0H0Z"
                    fill="#22d3ee"
                    animate={{ fill: ['#22d3ee', '#3b82f6', '#22d3ee'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <motion.path
                    d="M100 0L60 100L45 100L85 0H100Z"
                    fill="#3b82f6"
                    animate={{ fill: ['#3b82f6', '#22d3ee', '#3b82f6'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                </svg>

                {/* YO */}
                <span className="text-[2.5rem] md:text-[3.5rem] font-bold leading-none tracking-tight font-['Outfit'] text-cyan-400 group-hover:text-white transition-colors duration-500">
                  YO
                </span>

                {/* N + LABS */}
                <div className="flex flex-col items-center leading-none translate-y-[1px]">
                  <span className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight font-['Outfit'] text-cyan-400 group-hover:text-white transition-colors duration-500">
                    N
                  </span>
                  <span className="mt-[1px] text-[0.45rem] md:text-[0.55rem] font-medium tracking-[0.35em] text-white glowing-text-labs">
                    LABS
                  </span>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium py-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="/#contact"
              className="glow-button text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="glow-button inline-block text-sm mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
