import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Video, BookOpen, MessageCircle, TrendingUp } from 'lucide-react';

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    { 
      title: t('process.step1_title'), 
      desc: t('process.step1_desc'),
      icon: Video
    },
    { 
      title: t('process.step2_title'), 
      desc: t('process.step2_desc'),
      icon: BookOpen
    },
    { 
      title: t('process.step3_title'), 
      desc: t('process.step3_desc'),
      icon: MessageCircle
    },
    { 
      title: t('process.step4_title'), 
      desc: t('process.step4_desc'),
      icon: TrendingUp
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('process.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-transparent hover:border-primary/10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              
              {/* Линия связи (только для десктопа) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-muted-foreground/20 -translate-y-1/2 z-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
