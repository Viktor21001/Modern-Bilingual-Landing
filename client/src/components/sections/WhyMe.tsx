import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, UserCheck, Mic } from 'lucide-react';

export default function WhyMe() {
  const { t } = useTranslation();

  const reasons = t('whyme.reasons', { returnObjects: true }) as { title: string, desc: string }[];
  const icons = [Globe, UserCheck, Mic];

  return (
    <section className="py-20 bg-primary text-primary-foreground dark:bg-[hsl(var(--card))] dark:text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('whyme.title_prefix')}{" "}
            <span className="text-white dark:text-primary">M.Y.</span>{" "}
            <span className="text-white">{t('brand.name_suffix')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
                <p className="text-blue-100">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
