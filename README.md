# MY English Club Landing

Одностраничный статический лендинг для преподавателя английского.  
Проект на Vite + React + Tailwind, без сервера и базы данных.

## Что внутри
- Секции: Hero, About, Process, Services, TargetAudience, Certifications, Testimonials, WhyMe, Contact.
- Двухъязычность (RU/EN) через i18next.
- Отзывы подгружаются из локального файла JSON.
- Анимации на framer-motion.

## Как запустить локально
1. Установить зависимости:
   - `npm install`
2. Запустить dev-сервер:
   - `npm run dev`
3. Открыть в браузере URL из консоли Vite.

## Где менять тексты
Основные тексты хранятся в `client/src/lib/i18n.ts`.
- Русский текст: блок `ru.translation`
- Английский текст: блок `en.translation`

Отдельные статические подписи (если нужно):
- `client/src/components/sections/Hero.tsx`
- `client/src/components/sections/Certifications.tsx`

## Где менять язык по умолчанию
Файл: `client/src/lib/i18n.ts`  
Параметры:
- `lng: "ru"` — язык по умолчанию
- `fallbackLng: "ru"` — запасной язык

Переключатель языка находится в:
- `client/src/components/layout/Navbar.tsx`
- `client/src/components/layout/Footer.tsx`

## Где вставить ссылки на Telegram
Заменить `https://t.me/username` на ваш Telegram:
- `client/src/components/sections/Hero.tsx`
- `client/src/components/sections/Contact.tsx`
- `client/src/components/layout/Footer.tsx`

## Где добавлять отзывы
Файл с отзывами:
- `client/public/data/reviews.json`

Формат записи:
```
{
  "name": "Имя",
  "role": "Роль (например: Родитель)",
  "text": "Текст отзыва",
  "rating": 5
}
```
