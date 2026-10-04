import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from '@shared/context/ThemeContext';
import { getCommonContent } from '../content/common';
import { Container } from '@shared/ui/Container';
import { NavBrand } from './NavBrand';
import { NavLinks } from './NavLinks';
import { NavControls } from './NavControls';

export const Navbar: React.FC = () => {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const common = getCommonContent(locale);
  const t = common.nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.experience, href: '#experience' },
    { label: t.projects, href: '#projects' },
    { label: t.recommendations, href: '#recommendations' },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'nav-shell' : 'border-b border-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <NavBrand />

          <div className="hidden items-center gap-8 md:flex">
            <NavLinks items={navItems} onNavigate={handleNavClick} className="items-center gap-6" />
            <span className="h-4 w-px bg-[var(--border)]" />
            <NavControls />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <NavControls />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-default text-fg"
              aria-label={common.a11y.toggleMenu}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="nav-shell overflow-hidden border-t md:hidden"
          >
            <Container className="py-4">
              <NavLinks
                items={navItems}
                onNavigate={handleNavClick}
                className="flex-col items-stretch gap-1"
              />
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
};