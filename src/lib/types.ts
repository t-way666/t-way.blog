export interface GoogleBookData {
  id: string;
  thumbnail: string;
}

export interface MyBookEntry {
  title: string;       // Наше название (RU)
  author: string;      // Наш автор (RU)
  isbn: string;        // ISBN оригинала (для обложки)
  rating: number;      
  status: 'read' | 'reading' | 'planned';
  review: string;
  // coverUrl убрали, так как теперь полагаемся на Google API с правильными ISBN
}

export type BookWithReview = MyBookEntry & { thumbnail: string; id: string };

export const MY_BOOKS: MyBookEntry[] = [
  {
    title: "12 недель в году",
    author: "Брайан Моран, Майкл Леннингтон",
    isbn: "9781118509234", // Eng ISBN
    rating: 5,
    status: 'read',
    review: "Эта книга изменила мой подход к планированию. Вместо годовых целей, которые откладываешь на декабрь, я теперь живу спринтами. Очень практично."
  },
  {
    title: "Хорошая стратегия, плохая стратегия",
    author: "Ричард Румельт",
    isbn: "9780307886231", // Eng ISBN
    rating: 5,
    status: 'read',
    review: "Румельт открыл глаза на то, что большинство 'стратегий' — это просто набор лозунгов. Настоящая стратегия требует выявления главной проблемы и концентрации сил."
  },
  {
    title: "Антихрупкость",
    author: "Нассим Николас Талеб",
    isbn: "9781400067824", // Eng ISBN
    rating: 4,
    status: 'read',
    review: "Сложно читается, но концепция гениальна. То, что не убивает, делает нас сильнее — это и есть антихрупкость. Нужно любить хаос."
  },
  {
    title: "Черный лебедь",
    author: "Нассим Николас Талеб",
    isbn: "9781400063512", // Eng ISBN
    rating: 5,
    status: 'read',
    review: "Мы не умеем прогнозировать будущее. Книга о том, как готовиться к событиям, которые невозможно предсказать."
  }
];