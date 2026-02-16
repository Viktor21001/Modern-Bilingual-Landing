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
        title_suffix: "— Mini-Group & Personal English Lessons",
        subtitle: "Join cozy offline mini-groups (up to 4 people) in my office. Need online or 1:1? We can arrange it individually.",
        experience: "Teaching since 2010",
        cta_trial: "Book a Free Trial Lesson",
        cta_contact: "Contact via Telegram",
        image_alt: "English tutor lesson",
        highlight_1: "TESOL Certified",
        highlight_2: "Offline mini-groups (max 4 students)",
        highlight_3: "Online & 1:1 by arrangement",
        badge_title: "Mini-group focus",
        badge_subtitle: "Up to 4 students"
      },
      about: {
        title_prefix: "About",
        intro: "Hi! I’m a certified English teacher helping students speak confidently — in a calm, friendly environment.",
        desc1: "I’ve been teaching since 2010, I’m TESOL certified, and hold a degree in International Relations, with my education and professional experience conducted entirely in english. I've studied and lived abroad, worked in international companies, and use English as a real working tool - not just an academic subject.",
        desc2: "The main format is offline mini-group lessons (max 4 students) in my office. Online lessons and personal 1:1 sessions are also available — we can discuss and choose what fits your goals.",
        stat1: "Teaching since",
        stat2: "Mini-group size",
        stat3: "Lesson length",
        stat1_value: "2010",
        stat2_value: "4 max",
        stat3_value: "60 min"
      },
      process: {
        title: "How Lessons Work",
        step1_title: "Choose Your Format",
        step1_desc: "Main option: offline mini-groups (max 4 students) in my office. Online or 1:1 is available by arrangement.",
        step2_title: "Interactive Practice",
        step2_desc: "Modern materials, real-life topics, and plenty of speaking time.",
        step3_title: "Clear Structure",
        step3_desc: "Step-by-step progress: vocabulary, grammar, and fluency — without overload.",
        step4_title: "Support Between Lessons",
        step4_desc: "Homework, feedback, and progress tracking so you stay consistent."
      },
      services: {
        title: "Formats & Pricing",
        subtitle: "Choose the format that fits you: offline mini-groups in my office (max 4 students), or online / personal 1:1 by arrangement.",
        price: "2000 RUB",
        per_lesson: "per lesson",
        duration: "(60 minutes)",
        format_primary_title: "Offline mini-group\n(4 students max)",
        format_primary_desc: "A small group in my office: more speaking, more motivation, friendly atmosphere.",
        format_other_title: "Online & 1:1 by arrangement",
        format_other_desc: "Online lessons or personal 1:1 sessions in the office can be discussed individually.",
        includes: [
          "Mini-group speaking practice",
          "Clear structure and goals",
          "Modern interactive materials",
          "Homework + feedback",
          "Progress tracking"
        ],
        trial_title: "Free Trial Lesson",
        trial_desc: "A quick meeting to check your level and choose the best format (mini-group, online, or 1:1). Duration varies, including for absolute beginners."
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
          { title: "Mini-groups (4 students max)", desc: "You get attention and speaking time — without the stress of a big class." },
          { title: "Offline office format", desc: "A focused space for learning, with all materials ready." },
          { title: "Flexible options", desc: "Online lessons and personal 1:1 sessions are available by arrangement." },
          { title: "Experience since 2010", desc: "Certified TESOL teacher with a degree in International Relations and experience in using the language." }
        ]
      },
      contact: {
        title: "Let’s pick the right format",
        subtitle: "Message me on Telegram to book your free trial lesson and discuss: mini-group in the office, online, or 1:1.",
        button: "Message on Telegram",
        map_button: "How to find us",
        map_title: "How to find us",
        map_address_label: "Address",
        map_address_value: "New Vnukovo ЖК, Aerostatnaya street 6 bldg 1, 108809, Moscow, Vnukovo",
        map_telegram_label: "Telegram",
        map_note_label: "Note",
        map_note_value: "Please contact in advance to confirm availability"
      },
      footer: {
        role: "English lessons: mini-groups (4 students max) + online / 1:1 by arrangement",
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
        title_suffix: "— Мини‑группы и персональные уроки английского",
        subtitle: "Основной формат — офлайн мини‑группы до 4 человек. Онлайн и 1:1 тоже возможны — обсудим индивидуально.",
        experience: "Опыт с 2010 года",
        cta_trial: "Записаться на бесплатный пробный урок",
        cta_contact: "Написать в Telegram",
        image_alt: "Занятие с преподавателем английского",
        highlight_1: "Сертификат TESOL",
        highlight_2: "Офлайн мини‑группы (до 4 учеников)",
        highlight_3: "Онлайн и 1:1 по договоренности",
        badge_title: "Фокус мини‑группы",
        badge_subtitle: "До 4 учеников"
      },
      about: {
        title_prefix: "О",
        intro: "Привет! Я сертифицированный преподаватель английского и помогаю ученикам говорить уверенно — спокойно и по делу.",
        desc1: "Преподаю с 2010 года. Имею сертификат TESOL и высшее образование по направлению Международные отношения, а также диплом MBA. Обучение и профессиональная деятельность проходили на английском языке. Я жил и учился за рубежом, работал в международной компании и использую английский как рабочий инструмент, а не только как академический предмет",
        desc2: "Основной формат — офлайн мини‑группы (до 4 человек) в комфортабельном офисе. Онлайн‑занятия и персональные уроки 1:1 тоже доступны — формат выбираем вместе под ваши цели.",
        stat1: "Опыт",
        stat2: "Мини‑группа",
        stat3: "Длительность",
        stat1_value: "2010",
        stat2_value: "4 макс",
        stat3_value: "60 мин"
      },
      process: {
        title: "Как проходят занятия",
        step1_title: "Выбираем формат",
        step1_desc: "Основной формат — офлайн мини‑группы до 4 человек. Онлайн и 1:1 возможны по договорённости.",
        step2_title: "Интерактивная практика",
        step2_desc: "Современные материалы, живые темы и много разговорной практики.",
        step3_title: "Понятная структура",
        step3_desc: "Двигаемся по плану: лексика, грамматика, беглость — без перегруза.",
        step4_title: "Поддержка между уроками",
        step4_desc: "Домашние задания, обратная связь и контроль прогресса."
      },
      services: {
        title: "Форматы и стоимость",
        subtitle: "Выберите формат: офлайн мини‑группы (до 4 человек) или онлайн / 1:1 по договоренности.",
        price: "2000 ₽",
        per_lesson: "за урок",
        duration: "(60 минут)",
        format_primary_title: "Офлайн мини‑группа\n(до 4 учеников)",
        format_primary_desc: "Небольшая группа: больше говорения, больше мотивации, дружелюбная атмосфера.",
        format_other_title: "Онлайн и 1:1 по договорённости",
        format_other_desc: "Онлайн‑занятия или персональные уроки 1:1 — обсудим индивидуально.",
        includes: [
          "Разговорная практика в мини‑группе",
          "Понятная структура и цели",
          "Современные интерактивные материалы",
          "ДЗ + обратная связь",
          "Отслеживание прогресса"
        ],
        trial_title: "Бесплатный пробный урок",
        trial_desc: "Короткая встреча, чтобы определить уровень и выбрать формат: мини‑группа, онлайн или 1:1. Длительность зависит от уровня, включая A0."
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
          { title: "Мини‑группы до 4 учеников", desc: "Достаточно внимания и времени на говорение — без \"толпы\"." },
          { title: "Офлайн в комфортабельном офисе", desc: "Спокойное пространство для занятий, все материалы под рукой." },
          { title: "Гибкие варианты", desc: "Онлайн и персональные уроки 1:1 доступны по договорённости." },
          { title: "Опыт с 2010", desc: "Сертификат TESOL, диплом по направлению Международные отношения и MBA зарубежного ВУЗа." }
        ]
      },
      contact: {
        title: "Давайте выберем формат",
        subtitle: "Напишите мне в Telegram, чтобы записаться на бесплатный пробный урок и обсудить: мини‑группа, онлайн или 1:1.",
        button: "Написать в Telegram",
        map_button: "Как нас найти",
        map_title: "Как нас найти",
        map_address_label: "Адрес",
        map_address_value: "ЖК Новое Внуково, Аэростатная улица, 6 к1, 108809, Москва, Внуково",
        map_telegram_label: "Телеграм",
        map_note_label: "Примечание",
        map_note_value: "Пишите заранее, чтобы согласовать время"
      },
      footer: {
        role: "Английский: мини‑группы (до 4 учеников) + онлайн / 1:1 по договорённости",
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
