export interface LocalizedString {
  ru: string;
  en: string;
}

export interface MyBookEntry {
  id: string;
  title: LocalizedString;     // Теперь с переводом
  author: LocalizedString;    // Автор тоже (имена пишутся по-разному)
  rating: number;
  status: 'read' | 'reading' | 'planned';
  review: LocalizedString;
  synopsis: LocalizedString;
  myOpinion: LocalizedString;
  critique: LocalizedString;
  thumbnail: string;
}

export type BookWithReview = MyBookEntry;

export const MY_BOOKS: MyBookEntry[] = [
  {
    id: "12-weeks",
    title: {
      ru: "12 недель в году",
      en: "The 12 Week Year"
    },
    author: {
      ru: "Брайан Моран, Майкл Леннингтон",
      en: "Brian P. Moran, Michael Lennington"
    },
    rating: 5,
    status: 'read',
    review: {
      ru: "Эта книга изменила мой подход к планированию. Вместо годовых целей, я теперь живу спринтами.",
      en: "This book changed my approach to planning. Instead of annual goals, I now live in sprints."
    },
    synopsis: {
      ru: `Главная идея: Год из 12 месяцев — это слишком долго. Мы расслабляемся в начале и паникуем в конце.
      
Основные принципы:
1. Видение: Четко понимать, чего хочешь через 3 года.
2. Планирование: План на 12 недель, расписанный по дням.
3. Контроль: Еженедельные метрики (Lead vs Lag indicators).
4. Время: Использовать "Блоки времени" (Стратегическая, Буферная, Рекреационная).`,
      en: `Core Idea: A 12-month year is too long. We slack off at the beginning and panic at the end.
      
Key Principles:
1. Vision: Clearly understand what you want in 3 years.
2. Planning: A 12-week plan, scheduled day by day.
3. Controls: Weekly metrics (Lead vs Lag indicators).
4. Time Use: Using "Time Blocks" (Strategic, Buffer, Breakout).`
    },
    myOpinion: {
      ru: "Для меня это стало открытием. Самое крутое — это 'система счета'. Когда ты оцениваешь не результат (деньги/вес), а свои действия (сделал ли я тренировку?). Это дает контроль над ситуацией.",
      en: "This was a revelation for me. The coolest part is the 'scoring system'. When you evaluate not the result (money/weight), but your actions (did I workout?). It gives you control over the situation."
    },
    critique: {
      ru: "Иногда авторы слишком 'американизированы' и повторяют одно и то же по 10 раз. Можно было бы сократить книгу вдвое без потери смысла.",
      en: "Sometimes the authors are too repetitive, stating the same thing 10 times. The book could be cut in half without losing meaning."
    },
    thumbnail: "/images/books/12weeksyear.png"
  },
  {
    id: "strategy",
    title: {
      ru: "Хорошая стратегия, плохая стратегия",
      en: "Good Strategy Bad Strategy"
    },
    author: {
      ru: "Ричард Румельт",
      en: "Richard Rumelt"
    },
    rating: 5,
    status: 'read',
    review: {
      ru: "Румельт открыл глаза на то, что большинство 'стратегий' — это просто набор лозунгов.",
      en: "Rumelt opened my eyes to the fact that most 'strategies' are just a collection of slogans."
    },
    synopsis: {
      ru: `Плохая стратегия:
- Много "воды" и сложных слов (fluff).
- Игнорирование главной проблемы.
- Принятие желаемого за действительное (цели вместо стратегии).
      
Ядро хорошей стратегии:
1. Диагноз: Что именно происходит? В чем суть вызова?
2. Направляющая политика: Общий подход к решению проблемы.
3. Согласованные действия: Конкретные шаги, которые не противоречат друг другу.`,
      en: `Bad Strategy:
- Lots of "fluff" and buzzwords.
- Ignoring the main challenge.
- Mistaking goals for strategy (wishful thinking).
      
The Kernel of Good Strategy:
1. Diagnosis: What is happening? What is the challenge?
2. Guiding Policy: An overall approach to dealing with the obstacle.
3. Coherent Actions: Concrete steps that support each other.`
    },
    myOpinion: {
      ru: "Лучшая книга по стратегии, которую я читал. Она отрезвляет. Теперь я вижу 'плохую стратегию' повсюду — в бизнесе, в планах людей, в политике.",
      en: "The best book on strategy I've read. It's sobering. Now I see 'bad strategy' everywhere — in business, in personal plans, in politics."
    },
    critique: {
      ru: "Примеры из военной истории могут показаться скучными тем, кто далек от этой темы, но они идеально иллюстрируют принципы концентрации сил.",
      en: "Examples from military history might seem boring to those far from the topic, but they perfectly illustrate the principles of force concentration."
    },
    thumbnail: "/images/books/goodstrategybadstrategy.png"
  },
  {
    id: "antifragile",
    title: {
      ru: "Антихрупкость",
      en: "Antifragile"
    },
    author: {
      ru: "Нассим Николас Талеб",
      en: "Nassim Nicholas Taleb"
    },
    rating: 4,
    status: 'read',
    review: {
      ru: "Сложно читается, но концепция гениальна. То, что не убивает, делает нас сильнее.",
      en: "Hard to read, but the concept is brilliant. What doesn't kill us makes us stronger."
    },
    synopsis: {
      ru: `Триада свойств:
1. Хрупкое: Ломается под стрессом (ваза, бюрократия).
2. Неуязвимое: Не меняется под стрессом (камень, Феникс).
3. Антихрупкое: Становится лучше под стрессом (Гидра, мышцы, эволюция).
      
Как применять:
- Любить мелкие ошибки (они дают информацию).
- Избегать больших рисков (риск разорения).
- Стратегия штанги: 90% в полной безопасности, 10% в максимальном риске.`,
      en: `The Triad:
1. Fragile: Breaks under stress (vase, bureaucracy).
2. Robust: Resists stress (stone, Phoenix).
3. Antifragile: Gains from disorder (Hydra, muscles, evolution).
      
How to apply:
- Love small mistakes (they provide information).
- Avoid ruin (risks that take you out of the game).
- Barbell Strategy: 90% in extreme safety, 10% in maximum risk.`
    },
    myOpinion: {
      ru: "Фундаментальная вещь. Изменила мое отношение к ошибкам. Ошибка — это не провал, это бесплатный урок и порция 'антихрупкости'.",
      en: "A fundamental piece. Changed my attitude towards mistakes. A mistake is not a failure, it's a free lesson and a dose of 'antifragility'."
    },
    critique: {
      ru: "Талеб — жуткий сноб. Он постоянно оскорбляет академиков и экономистов. К этому нужно привыкнуть, иначе чтение превратится в борьбу с автором.",
      en: "Taleb is a terrible snob. He constantly insults academics and economists. You have to get used to it, otherwise reading becomes a struggle with the author."
    },
    thumbnail: "/images/books/antyfragile.png"
  },
  {
    id: "black-swan",
    title: {
      ru: "Черный лебедь",
      en: "The Black Swan"
    },
    author: {
      ru: "Нассим Николас Талеб",
      en: "Nassim Nicholas Taleb"
    },
    rating: 5,
    status: 'read',
    review: {
      ru: "Мы не умеем прогнозировать будущее. Книга о том, как готовиться к событиям, которые невозможно предсказать.",
      en: "We cannot predict the future. A book on how to prepare for events that are impossible to predict."
    },
    synopsis: {
      ru: `Черный лебедь — это событие, которое:
1. Аномально (ничто в прошлом его не предвещало).
2. Обладает огромной силой воздействия.
3. После наступления мы придумываем ему объяснение ("это было очевидно").
      
Вывод: Не пытайтесь предсказывать. Пытайтесь быть готовыми ко всему. Наращивайте "жир" и запасы прочности.`,
      en: `A Black Swan is an event that is:
1. An outlier (nothing in the past pointed to it).
2. Carries an extreme impact.
3. Retrospective predictability (we explain it after the fact).
      
Conclusion: Don't try to predict. Try to be prepared for anything. Build redundancy and robustness.`
    },
    myOpinion: {
      ru: "Помогает снять розовые очки. Мы живем в мире 'Крайнезеландии', где редкие события решают всё. Важно понимать, где ты хрупок, а где — нет.",
      en: "Helps to take off rose-colored glasses. We live in 'Extremistan', where rare events decide everything. It's important to understand where you are fragile and where you are not."
    },
    critique: {
      ru: "Очень много воды и философских отступлений. Если выжать суть, книга станет в три раза тоньше.",
      en: "A lot of water and philosophical digressions. If you squeeze out the essence, the book would be three times thinner."
    },
    thumbnail: "/images/books/blackswan.png"
  }
];
