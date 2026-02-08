import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
const heroImage = "/assets/friendly_online_english_tutor_teaching_a_lesson.jpg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Фоновые декоративные элементы */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 text-primary text-xs font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t('hero.experience')}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <Button size="lg" className="rounded-full w-full sm:w-auto text-base h-12 px-8" onClick={() => window.location.href = '#contact'}>
                {t('hero.cta_trial')}
              </Button>
              {/* TODO: Замените на вашу ссылку Telegram */}
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto text-base h-12 px-8 gap-2 group" onClick={() => window.open('https://t.me/username', '_blank')}>
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                {t('hero.cta_contact')}
              </Button>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{t('hero.highlight_1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{t('hero.highlight_2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{t('hero.highlight_3')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
              <img 
                src={heroImage} 
                alt={t('hero.image_alt')}
                className="w-full h-full object-cover"
              />
              
              {/* Плавающий бейдж */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg rounded-xl p-4 flex items-center gap-4 max-w-[200px] md:bottom-3 md:left-3 md:p-2 md:gap-2 md:max-w-[120px]"
              >
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs md:h-7 md:w-7 md:text-[10px]">
                  A+
                </div>
                <div>
                  <p className="font-bold text-sm md:text-[11px]">{t('hero.badge_title')}</p>
                  <p className="text-xs text-muted-foreground md:text-[10px]">{t('hero.badge_subtitle')}</p>
                </div>
              </motion.div>
            </div>
            
            {/* Декор за изображением */}
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 scale-105 -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
