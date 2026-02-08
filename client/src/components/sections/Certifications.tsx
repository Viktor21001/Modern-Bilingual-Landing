import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
const tesolIcon = "/assets/tesol_certificate_icon.png";
const diplomaIcon = "/assets/university_diploma_icon.png";

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('certifications.title')}</h2>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-12 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative rounded-full bg-secondary/30 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
              <img src={diplomaIcon} alt={t('certifications.diploma_alt')} className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <h3 className="text-xl font-bold font-heading">{t('certifications.diploma')}</h3>
            <p className="text-muted-foreground mt-2">{t('certifications.diploma_subtitle')}</p>
            <p className="text-muted-foreground text-sm mt-1">{t('certifications.diploma_detail')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative rounded-full bg-secondary/30 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
              <img src={tesolIcon} alt={t('certifications.tesol_alt')} className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <h3 className="text-xl font-bold font-heading">{t('certifications.tesol')}</h3>
            <p className="text-muted-foreground mt-2">{t('certifications.tesol_subtitle')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 mb-8 relative rounded-full bg-secondary/30 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
              <img src={diplomaIcon} alt={t('certifications.mba_alt')} className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <h3 className="text-xl font-bold font-heading">{t('certifications.mba')}</h3>
            <p className="text-muted-foreground mt-2">{t('certifications.mba_subtitle')}</p>
            <p className="text-muted-foreground text-sm mt-1">{t('certifications.mba_detail')}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
