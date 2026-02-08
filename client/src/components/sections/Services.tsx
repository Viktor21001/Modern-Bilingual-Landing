import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const { t } = useTranslation();

  const features = t('services.includes', { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('services.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('services.subtitle')}
            </p>
            
            <div className="bg-secondary/30 p-8 rounded-2xl border border-secondary space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{t('services.trial_title')}</h3>
                  <p className="text-muted-foreground">{t('services.trial_desc')}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-white/70 border rounded-2xl p-5">
                  <div className="text-sm font-semibold text-primary mb-1">{t('services.format_primary_title')}</div>
                  <div className="text-sm text-muted-foreground">{t('services.format_primary_desc')}</div>
                </div>
                <div className="bg-white/70 border rounded-2xl p-5">
                  <div className="text-sm font-semibold text-primary mb-1">{t('services.format_other_title')}</div>
                  <div className="text-sm text-muted-foreground">{t('services.format_other_desc')}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90 opacity-40" />
            
            <div className="relative bg-white border rounded-3xl p-8 md:p-10 shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{t('services.format_primary_title')}</h3>
                  <p className="text-muted-foreground">{t('services.duration')}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-bold text-primary">{t('services.price')}</div>
                  <div className="text-sm text-muted-foreground">{t('services.per_lesson')}</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full h-12 text-base rounded-xl shadow-lg shadow-primary/20" onClick={() => window.location.href = '#contact'} data-testid="button-pricing-cta">
                {t('hero.cta_trial')}
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
