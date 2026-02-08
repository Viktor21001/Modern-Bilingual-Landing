import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type ReviewItem = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

const REVIEWS_URL = "/data/reviews.json";

export default function Testimonials() {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<ReviewItem[]>([
    { name: "Elena K.", role: "Parent", text: t('reviews.placeholder_1'), rating: 5 },
    { name: "Sergey M.", role: "Adult Student", text: t('reviews.placeholder_2'), rating: 5 },
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
        // ignore fetch errors, keep fallback
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert("Review submitted for moderation!");
  };

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
              <span className="text-muted-foreground ml-2 text-sm">(5.0 Average)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {canScrollLeft || canScrollRight ? (
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Scroll reviews left"
                  onClick={() => sliderRef.current?.scrollBy({ left: -360, behavior: "smooth" })}
                  disabled={!canScrollLeft}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Scroll reviews right"
                  onClick={() => sliderRef.current?.scrollBy({ left: 360, behavior: "smooth" })}
                  disabled={!canScrollRight}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            ) : null}

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">{t('reviews.leave_review')}</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>{t('reviews.leave_review')}</DialogTitle>
                  <DialogDescription>
                    Share your experience with others.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">{t('reviews.form.name')}</Label>
                    <Input id="name" required />
                  </div>
                  <div className="grid gap-2">
                    <Label>{t('reviews.form.type')}</Label>
                    <RadioGroup defaultValue="adult">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="adult" id="adult" />
                        <Label htmlFor="adult">{t('reviews.form.type_adult')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="parent" id="parent" />
                        <Label htmlFor="parent">{t('reviews.form.type_parent')}</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="review">{t('reviews.form.review')}</Label>
                    <Textarea id="review" required />
                  </div>
                  <Button type="submit">{t('reviews.form.submit')}</Button>
                </form>
              </DialogContent>
            </Dialog>
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
