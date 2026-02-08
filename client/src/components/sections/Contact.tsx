import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary/50 to-background border rounded-3xl p-8 md:p-16 text-center shadow-lg relative overflow-hidden">
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t('contact.title')}</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
            
            {/* TODO: Замените на вашу ссылку Telegram */}
            <Button 
              size="lg" 
              className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              onClick={() => window.open('https://t.me/username', '_blank')}
              data-testid="button-contact-telegram"
            >
              <Send className="mr-2 h-5 w-5" />
              {t('contact.button')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
