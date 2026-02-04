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
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="relative border-t border-border/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="space-y-4">
            <motion.a
              href="/#home"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-end gap-[2px]">
                {/* V Logo Mark */}
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[2rem] w-auto mb-0.5"
                >
                  <path d="M0 0L40 100L55 100L15 0H0Z" fill="#22d3ee" />
                  <path d="M100 0L60 100L45 100L85 0H100Z" fill="#3b82f6" />
                </svg>

                {/* YO */}
                <span className="text-[2rem] font-bold leading-[1] tracking-tight font-['Outfit'] text-cyan-400">
                  YO
                </span>

                {/* N + LABS */}
                <div className="flex flex-col items-start leading-[1]">
                  <span className="text-[2rem] font-bold tracking-tight font-['Outfit'] text-cyan-400">
                    N
                  </span>

                  <span className="mt-[1px] text-[0.35rem] font-medium tracking-[0.32em] text-white/90 glowing-text-labs">
                    LABS
                  </span>
                </div>
              </div>
            </motion.a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Engineering the future with cutting-edge AI, cloud, and software solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-muted-foreground" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} VYON LABS. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors text-blue-400">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors text-blue-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
