import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.reviews'), href: '#reviews' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="font-heading font-bold text-lg md:text-xl tracking-tight text-left leading-tight" data-testid="link-brand-home">
          <span className="block">
            <span className="text-primary">Мой</span>{" "}
            <span className="text-foreground">Английский Клуб</span>
          </span>
          <span className="block font-bold">
            <span className="text-primary">MY</span>{" "}
            <span className="text-foreground">English Club</span>
          </span>
        </a>

        {/* Десктоп-меню */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
              data-testid="toggle-language-top"
            >
              <Globe className="h-4 w-4" />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center h-9 w-9 rounded-full border border-secondary text-muted-foreground hover:text-primary transition-colors"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
              data-testid="toggle-theme"
            >
              <Moon className="h-4 w-4" />
            </button>
            <Button className="rounded-full px-6" onClick={() => window.location.href = '#contact'} data-testid="button-nav-cta">
              {t('nav.book')}
            </Button>
          </div>
        </div>

        {/* Переключатель мобильного меню */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-medium"
            data-testid="toggle-language-mobile"
          >
            <span>{i18n.language.toUpperCase()}</span>
          </button>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center h-8 w-8 rounded-full border border-secondary text-muted-foreground"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            data-testid="toggle-theme-mobile"
          >
            <Moon className="h-4 w-4" />
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b"
          >
            <div className="container px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium py-2 border-b border-muted/50"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-4 rounded-full" onClick={() => { setIsOpen(false); window.location.href = '#contact'; }}>
                {t('nav.book')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
