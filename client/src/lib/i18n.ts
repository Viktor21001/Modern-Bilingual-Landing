import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// TODO: Основные тексты для всех секций хранятся здесь (RU/EN).
const resources = {
  en: {
    translation: {
      brand: {
        name_suffix: "English Club"
      },
      nav: {
        about: "About",
        process: "Process",
        pricing: "Pricing",
        reviews: "Reviews",
        contact: "Contact",
        book: "Book a Lesson"
      },
      hero: {
        title_suffix: "— Personal Online English Lessons",
        subtitle: "Main format — online 1:1 lessons.",
        experience: "Teaching since 2010",
        cta_trial: "Book a Free Trial Lesson",
        image_alt: "English tutor lesson",
        highlight_1: "TESOL Certified",
        highlight_2: "Online 1:1",
        badge_title: "Online 1:1 focus"
      },
      about: {
        title_prefix: "About",
        intro: "Hi! I’m a certified English teacher helping students speak confidently — in a calm, friendly environment.",
        desc1: "I’ve been teaching since 2010, I’m TESOL certified, and hold a degree in International Relations as well as an MBA, with my education and professional experience conducted entirely in english. I've studied and lived abroad, worked in international companies, and use English as a real working tool - not just an academic subject.",
        desc2: "Main format — online 1:1 lessons.",
        stat1: "Teaching since",
        stat2: "Online format",
        stat3: "Lesson length",
        stat1_value: "2010",
        stat2_value: "1:1",
        stat3_value: "60 min"
      },
      process: {
        title: "How Lessons Work",
        step1_title: "Online format",
        step1_desc: "Lessons take place online, one-on-one with the teacher.",
        step2_title: "Interactive Practice",
        step2_desc: "Modern materials, real-life topics, and plenty of speaking time.",
        step3_title: "Clear Structure",
        step3_desc: "Step-by-step progress: vocabulary, grammar, and fluency — without overload.",
        step4_title: "Support Between Lessons",
        step4_desc: "Feedback and progress tracking."
      },
      services: {
        title: "Format & Pricing",
        subtitle: "Personal online English lessons, 1:1.",
        price: "10 000 RUB",
        per_lesson: "per month",
        duration: "(2 classes a week)",
        format_primary_title: "Online",
        format_primary_desc: "Individual lessons: pace and program tailored to your goals.",
        includes: [
          "Speaking practice",
          "Clear structure and goals",
          "Modern interactive materials",
          "Feedback",
          "Progress tracking"
        ],
        trial_title: "Free Trial Lesson",
        trial_desc: "A quick meeting to check your level and goals. Duration varies, including for absolute beginners."
      },
      audience: {
        title: "Who These Lessons Are For",
        child: "Children",
        teen: "Teenagers",
        adult: "Adults",
        levels: "From Beginner (A0) to Advanced"
      },
      certifications: {
        title: "Education & Certifications",
        diploma: "Education",
        tesol: "International Certification",
        mba: "Education",
        diploma_subtitle: "International Relations",
        diploma_detail: "St. Petersburg State University 2006-2011",
        tesol_subtitle: "TESOL",
        mba_subtitle: "Master of Business Administration",
        mba_detail: "University of International Business and Economics 2011-2013",
        diploma_alt: "University diploma",
        tesol_alt: "TESOL certificate",
        mba_alt: "MBA diploma"
      },
      reviews: {
        title: "Student Reviews",
        leave_review: "Leave a Review",
        placeholder_1: "Great tutor! My son loves the lessons.",
        placeholder_2: "I finally feel confident speaking English at work.",
        average: "{{value}} average",
        scroll_left: "Scroll reviews left",
        scroll_right: "Scroll reviews right",
        dialog_desc: "Share your experience with others.",
        alert_submitted: "Review submitted for moderation!",
        form: {
          name: "Your Name (Optional)",
          type: "Student Type",
          type_adult: "Adult",
          type_parent: "Parent of Child",
          rating: "Rating",
          review: "Your Review",
          submit: "Submit Review"
        }
      },
      whyme: {
        title_prefix: "Why Choose",
        reasons: [
          { title: "Online from anywhere", desc: "Study from home — all you need is a computer and the internet." },
          { title: "Personal 1:1", desc: "The teacher’s full attention is on you: pace and program fit your goals." },
          { title: "Experience since 2010", desc: "TESOL certificate, a degree in International Relations and an MBA from a foreign university." }
        ]
      },
      contact: {
        title: "Book a lesson",
        subtitle: "Message me on Telegram or WhatsApp to book your free trial lesson.",
        button: "Message on Telegram",
        whatsapp_button: "Message on WhatsApp",
        map_button: "How to find us",
        map_title: "How to find us",
        map_address_label: "Address",
        map_address_value: "New Vnukovo ЖК, Aerostatnaya street 6 bldg 1, 108809, Moscow, Vnukovo",
        map_telegram_label: "Telegram",
        map_note_label: "Note",
        map_note_value: "Please contact in advance to confirm availability"
      },
      footer: {
        role: "Online 1:1 English lessons",
        copyright: "",
        dev_by: "Website by Viktor Yeliseyev",
        dev_tg: "Telegram - "
      }
    }
  },
  ru: {
    translation: {
      brand: {
        name_suffix: "English Club"
      },
      nav: {
        about: "Обо мне",
        process: "Как проходит",
        pricing: "Стоимость",
        reviews: "Отзывы",
        contact: "Контакты",
        book: "Пробный урок"
      },
      hero: {
        title_suffix: "— Персональные онлайн‑уроки английского",
        subtitle: "Основной формат — онлайн 1:1.",
        experience: "Опыт с 2010 года",
        cta_trial: "Записаться на бесплатный пробный урок",
        image_alt: "Занятие с преподавателем английского",
        highlight_1: "Сертификат TESOL",
        highlight_2: "Онлайн 1:1",
        badge_title: "Фокус онлайн 1:1"
      },
      about: {
        title_prefix: "О",
        intro: "Привет! Я сертифицированный преподаватель английского и помогаю ученикам говорить уверенно — спокойно и по делу.",
        desc1: "Преподаю с 2010 года. Имею сертификат TESOL и высшее образование по направлению Международные отношения, а также диплом MBA. Обучение и профессиональная деятельность проходили на английском языке. Я жил и учился за рубежом, работал в международной компании и использую английский как рабочий инструмент, а не только как академический предмет",
        desc2: "Основной формат — онлайн 1:1.",
        stat1: "Опыт",
        stat2: "Онлайн‑формат",
        stat3: "Длительность",
        stat1_value: "2010",
        stat2_value: "1:1",
        stat3_value: "60 мин"
      },
      process: {
        title: "Как проходят занятия",
        step1_title: "Онлайн формат",
        step1_desc: "Занятия проходят онлайн, один на один с преподавателем.",
        step2_title: "Интерактивная практика",
        step2_desc: "Современные материалы, живые темы и много разговорной практики.",
        step3_title: "Понятная структура",
        step3_desc: "Двигаемся по плану: лексика, грамматика, беглость — без перегруза.",
        step4_title: "Поддержка между уроками",
        step4_desc: "Обратная связь и контроль прогресса."
      },
      services: {
        title: "Формат и стоимость",
        subtitle: "Персональные онлайн‑уроки английского 1:1.",
        price: "10 000 ₽",
        per_lesson: "месяц",
        duration: "(2 занятия в неделю)",
        format_primary_title: "Онлайн",
        format_primary_desc: "Индивидуальные занятия: темп и программа под ваши цели.",
        includes: [
          "Разговорная практика",
          "Понятная структура и цели",
          "Современные интерактивные материалы",
          "Обратная связь",
          "Отслеживание прогресса"
        ],
        trial_title: "Бесплатный пробный урок",
        trial_desc: "Короткая встреча, чтобы определить уровень и цели. Длительность зависит от уровня, включая A0."
      },
      audience: {
        title: "Для кого эти уроки",
        child: "Дети",
        teen: "Подростки",
        adult: "Взрослые",
        levels: "От нуля (A0) до продвинутого"
      },
      certifications: {
        title: "Образование и сертификаты",
        diploma: "Высшее образование",
        tesol: "Международная сертификация",
        mba: "Высшее образование",
        diploma_subtitle: "Международные отношения",
        diploma_detail: "СПбГУ 2006-2011",
        tesol_subtitle: "TESOL",
        mba_subtitle: "Master of Business Administration",
        mba_detail: "University of International Business and Economics 2011-2013",
        diploma_alt: "Диплом университета",
        tesol_alt: "Сертификат TESOL",
        mba_alt: "Диплом MBA"
      },
      reviews: {
        title: "Отзывы учеников",
        leave_review: "Оставить отзыв",
        placeholder_1: "Отличный репетитор! Сыну очень нравятся уроки.",
        placeholder_2: "Наконец-то чувствую уверенность, говоря на английском на работе.",
        average: "Средняя оценка: {{value}}",
        scroll_left: "Прокрутить отзывы влево",
        scroll_right: "Прокрутить отзывы вправо",
        dialog_desc: "Поделитесь своим опытом с другими.",
        alert_submitted: "Отзыв отправлен на модерацию!",
        form: {
          name: "Ваше имя (необязательно)",
          type: "Кто вы",
          type_adult: "Взрослый ученик",
          type_parent: "Родитель ученика",
          rating: "Оценка",
          review: "Ваш отзыв",
          submit: "Отправить отзыв"
        }
      },
      whyme: {
        title_prefix: "Почему",
        reasons: [
          { title: "Онлайн из любой точки", desc: "Занимайтесь из дома — нужны только компьютер и интернет." },
          { title: "Персонально 1:1", desc: "Всё внимание преподавателя — вам: темп и программа под ваши цели." },
          { title: "Опыт с 2010", desc: "Сертификат TESOL, диплом по направлению Международные отношения и MBA зарубежного ВУЗа." }
        ]
      },
      contact: {
        title: "Записаться на урок",
        subtitle: "Напишите мне в Telegram или WhatsApp, чтобы записаться на бесплатный пробный урок.",
        button: "Написать в Telegram",
        whatsapp_button: "Написать в WhatsApp",
        map_button: "Как нас найти",
        map_title: "Как нас найти",
        map_address_label: "Адрес",
        map_address_value: "ЖК Новое Внуково, Аэростатная улица, 6 к1, 108809, Москва, Внуково",
        map_telegram_label: "Телеграм",
        map_note_label: "Примечание",
        map_note_value: "Пишите заранее, чтобы согласовать время"
      },
      footer: {
        role: "Онлайн‑уроки английского 1:1",
        copyright: "",
        dev_by: "Сайт разработал - Виктор Елисеев",
        dev_tg: "Телеграм для связи - "
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    // TODO: Язык по умолчанию задается здесь.
    resources,
    lng: "ru", // default language
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
