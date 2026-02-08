import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ReviewItem = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

// TODO: Путь к файлу отзывов (редактируйте данные здесь)
const REVIEWS_URL = "/data/reviews.json";

export default function Testimonials() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<ReviewItem[]>([
    { name: "Елена К.", role: "Родитель", text: t('reviews.placeholder_1'), rating: 5 },
    { name: "Сергей М.", role: "Взрослый ученик", text: t('reviews.placeholder_2'), rating: 5 },
  ]);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadReviews = async () => {
      try {
        const res = await fetch(REVIEWS_URL, { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as ReviewItem[];
        if (!Array.isArray(data)) return;

        // TODO: Текст отзывов берется из JSON-файла выше
        const cleaned = data
          .filter((item) => item && item.name && item.text && item.role)
          .map((item) => ({
            name: String(item.name),
            role: String(item.role),
            text: String(item.text),
            rating: Math.min(5, Math.max(1, Number(item.rating) || 5)),
          }));

        if (isMounted && cleaned.length > 0) {
          setReviews(cleaned);
        }
      } catch {
        // игнорируем ошибки загрузки, остаемся на запасных данных
      }
    };

    loadReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const updateArrows = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < maxScrollLeft - 1);
    };

    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('reviews.title')}</h2>
            <div className="flex items-center gap-2 text-yellow-500">
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <Star className="fill-current h-5 w-5" />
              <span className="text-muted-foreground ml-2 text-sm">
                {t('reviews.average', { value: "5.0" })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {canScrollLeft || canScrollRight ? (
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label={t('reviews.scroll_left')}
                  onClick={() => sliderRef.current?.scrollBy({ left: -360, behavior: "smooth" })}
                  disabled={!canScrollLeft}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label={t('reviews.scroll_right')}
                  onClick={() => sliderRef.current?.scrollBy({ left: 360, behavior: "smooth" })}
                  disabled={!canScrollRight}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ) : null}
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-secondary min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-start"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.role}</div>
                  </div>
                </div>
                <div className="flex text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
