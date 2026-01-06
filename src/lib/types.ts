export interface LocalizedString {
  ru: string;
  en: string;
}

// --- BOOKS TYPES ---
export interface MyBookEntry {
  id: string;
  title: LocalizedString;
  author: LocalizedString;
  rating: number;
  status: 'read' | 'reading' | 'planned';
  review: LocalizedString;
  synopsis: LocalizedString;
  myOpinion: LocalizedString;
  critique: LocalizedString;
  thumbnail: string;
}

export type BookWithReview = MyBookEntry;

// --- TIMELINE TYPES ---
export interface TimelineItem {
  year: string;
  icon: 'baby' | 'school' | 'plane' | 'code' | 'work' | 'sales' | 'linux' | 'target';
  title: LocalizedString;
  description: LocalizedString;
  tags?: string[];
}

export interface HobbyItem {
  title: LocalizedString;
  description: LocalizedString;
  icon: 'draw' | 'music' | 'video' | 'book' | 'linux';
}

// --- DATA ---

export const MY_BOOKS: MyBookEntry[] = [
  {
    id: "12-weeks",
    title: { ru: "12 недель в году", en: "The 12 Week Year" },
    author: { ru: "Брайан Моран, Майкл Леннингтон", en: "Brian P. Moran, Michael Lennington" },
    rating: 5,
    status: 'read',
    review: {
      ru: "Эта книга изменила мой подход к планированию. Вместо годовых целей, я теперь живу спринтами.",
      en: "This book changed my approach to planning. Instead of annual goals, I now live in sprints."
    },
    synopsis: {
      ru: "Главная идея: Год из 12 месяцев — это слишком долго. Мы расслабляемся в начале и паникуем в конце.",
      en: "Core Idea: A 12-month year is too long. We slack off at the beginning and panic at the end."
    },
    myOpinion: {
      ru: "Для меня это стало открытием. Самое крутое — это 'система счета'.",
      en: "This was a revelation for me. The coolest part is the 'scoring system'."
    },
    critique: {
      ru: "Иногда авторы слишком 'американизированы'.",
      en: "Sometimes the authors are too repetitive."
    },
    thumbnail: "/images/books/12weeksyear.png"
  },
  {
    id: "strategy",
    title: { ru: "Хорошая стратегия, плохая стратегия", en: "Good Strategy Bad Strategy" },
    author: { ru: "Ричард Румельт", en: "Richard Rumelt" },
    rating: 5,
    status: 'read',
    review: {
      ru: "Румельт открыл глаза на то, что большинство 'стратегий' — это просто набор лозунгов.",
      en: "Rumelt opened my eyes to the fact that most 'strategies' are just a collection of slogans."
    },
    synopsis: {
      ru: "Ядро хорошей стратегии: Диагноз, Направляющая политика, Согласованные действия.",
      en: "The Kernel of Good Strategy: Diagnosis, Guiding Policy, Coherent Actions."
    },
    myOpinion: {
      ru: "Лучшая книга по стратегии, которую я читал.",
      en: "The best book on strategy I've read."
    },
    critique: {
      ru: "Примеры из военной истории могут показаться скучными.",
      en: "Examples from military history might seem boring."
    },
    thumbnail: "/images/books/goodstrategybadstrategy.png"
  },
  {
    id: "antifragile",
    title: { ru: "Антихрупкость", en: "Antifragile" },
    author: { ru: "Нассим Николас Талеб", en: "Nassim Nicholas Taleb" },
    rating: 4,
    status: 'read',
    review: {
      ru: "Сложно читается, но концепция гениальна.",
      en: "Hard to read, but the concept is brilliant."
    },
    synopsis: {
      ru: "Триада свойств: Хрупкое, Неуязвимое, Антихрупкое.",
      en: "The Triad: Fragile, Robust, Antifragile."
    },
    myOpinion: {
      ru: "Фундаментальная вещь. Изменила мое отношение к ошибкам.",
      en: "A fundamental piece. Changed my attitude towards mistakes."
    },
    critique: {
      ru: "Талеб — жуткий сноб.",
      en: "Taleb is a terrible snob."
    },
    thumbnail: "/images/books/antyfragile.png"
  },
  {
    id: "black-swan",
    title: { ru: "Черный лебедь", en: "The Black Swan" },
    author: { ru: "Нассим Николас Талеб", en: "Nassim Nicholas Taleb" },
    rating: 5,
    status: 'read',
    review: {
      ru: "Мы не умеем прогнозировать будущее.",
      en: "We cannot predict the future."
    },
    synopsis: {
      ru: "Черный лебедь — это событие, которое аномально и обладает огромной силой воздействия.",
      en: "A Black Swan is an event that is an outlier and carries an extreme impact."
    },
    myOpinion: {
      ru: "Помогает снять розовые очки.",
      en: "Helps to take off rose-colored glasses."
    },
    critique: {
      ru: "Очень много воды и философских отступлений.",
      en: "A lot of water and philosophical digressions."
    },
    thumbnail: "/images/books/blackswan.png"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "200x - 201x",
    icon: "plane",
    title: { ru: "Жизнь на две страны", en: "Life Between Two Countries" },
    description: {
      ru: "Родился в Самарканде. Школьные годы прошли в постоянных переездах между Узбекистаном и Россией.",
      en: "Born in Samarkand. My school years were spent moving between Uzbekistan and Russia."
    }
  },
  {
    year: "201x",
    icon: "school",
    title: { ru: "Колледж и первые шаги", en: "College & First Steps" },
    description: {
      ru: "Закончил колледж по специальности 'Техник компьютерного инжиниринга'.",
      en: "Graduated as a 'Computer Engineering Technician'."
    }
  },
  {
    year: "2018 - 2021",
    icon: "sales",
    title: { ru: "Школа жизни: Продажи", en: "School of Life: Sales" },
    description: {
      ru: "Работал везде: от официанта до колл-центра и торгового представителя. Прокачал Soft Skills.",
      en: "Worked everywhere: from waiter to call center and sales rep. Maxed out Soft Skills."
    },
    tags: ["Soft Skills", "Communication", "Negotiation"]
  },
  {
    year: "2022",
    icon: "code",
    title: { ru: "Поворотный момент", en: "The Turning Point" },
    description: {
      ru: "Выгорание привело к паузе. Начал учить Python. Понял: дисциплина важнее мотивации.",
      en: "Burnout led to a break. Started learning Python. Realized: discipline beats motivation."
    },
    tags: ["Self-education", "Discipline", "Python"]
  },
  {
    year: "2023 - 2024",
    icon: "linux",
    title: { ru: "Linux & Deep Dive", en: "Linux & Deep Dive" },
    description: {
      ru: "Погрузился в мир Linux. Дистрохопил (Arch, CachyOS). Сейчас на Windows + WSL2.",
      en: "Dove into Linux. Distro-hopping (Arch, CachyOS). Now on Windows + WSL2."
    },
    tags: ["Linux", "Bash", "Arch", "WSL2"]
  },
  {
    year: "2025 - Present",
    icon: "target",
    title: { ru: "Frontend Developer", en: "Frontend Developer" },
    description: {
      ru: "Сфокусировался на вебе. Создаю современные интерфейсы. Веду базу знаний в Obsidian.",
      en: "Focused on Web. Building modern interfaces. Keeping a knowledge base in Obsidian."
    },
    tags: ["React", "Next.js", "TypeScript", "Tailwind"]
  }
];

export const HOBBIES: HobbyItem[] = [
  {
    icon: "draw",
    title: { ru: "Рисование", en: "Drawing" },
    description: { ru: "Карандашные наброски, скетчинг.", en: "Pencil sketches, art." }
  },
  {
    icon: "music",
    title: { ru: "Музыка", en: "Music" },
    description: { ru: "FL Studio, меломан (все жанры).", en: "FL Studio, music lover." }
  },
  {
    icon: "video",
    title: { ru: "Монтаж", en: "Video Editing" },
    description: { ru: "DaVinci Resolve.", en: "DaVinci Resolve." }
  },
  {
    icon: "book",
    title: { ru: "Писательство", en: "Writing" },
    description: { ru: "Фантастика, романы, манга.", en: "Sci-Fi, novels, manga." }
  }
];
