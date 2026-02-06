import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: (props: any) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      ),
      href: 'https://x.com/VyonLabs',
      label: 'X (Twitter)'
    },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yuvaraj-b-talawar-4280842b9/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/vyonailabs?tab=repositories', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/vyonlabs/', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@VyonLabs', label: 'YouTube' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative border-t border-primary/10">
      {/* Footer Top Neon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Gradient overlay */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020408] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          {/* Logo & Description */}
          <div className="space-y-6 flex-1">
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-end gap-[1.5px] items-center">
                  {/* V Logo Mark */}
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[2rem] w-auto"
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
                  <span className="text-[2rem] font-bold leading-none tracking-tight font-['Outfit'] text-cyan-400 group-hover:text-white transition-colors duration-500">
                    YO
                  </span>

                  {/* N + LABS */}
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-[2rem] font-bold tracking-tight font-['Outfit'] text-cyan-400 group-hover:text-white transition-colors duration-500">
                      N
                    </span>

                    <span className="mt-[1px] text-[0.35rem] font-medium tracking-[0.32em] text-white/90 glowing-text-labs">
                      LABS
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Engineering the future with cutting-edge AI, cloud, and software solutions.
              Transforming bold ideas into global-scale reality.
            </p>
          </div>

          {/* Navigation & Socials Parent */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 w-full md:w-auto">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © {currentYear} VYON LABS. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
