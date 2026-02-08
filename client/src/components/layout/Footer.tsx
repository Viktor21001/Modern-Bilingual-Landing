import { useTranslation } from 'react-i18next';
import { Send, Globe } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  return (
    <footer className="bg-foreground text-background py-12 md:py-16 dark:bg-[hsl(var(--card))] dark:text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl mb-2">MYEnglish</h3>
            <p className="text-muted-foreground" data-testid="text-footer-role">{t('footer.role')}</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            {/* TODO: Замените на вашу ссылку Telegram */}
            <a 
              href="https://t.me/MaximYeliseyev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              data-testid="button-footer-telegram"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>
          </div>

          <div className="flex items-center gap-6">
             {/* TODO: Переключатель языка находится здесь */}
             <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              data-testid="toggle-language-footer"
            >
              <Globe className="h-4 w-4" />
              <span>{i18n.language === 'en' ? 'RU' : 'EN'}</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-muted-foreground">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
