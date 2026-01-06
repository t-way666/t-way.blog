# Personal Blog & Portfolio

A modern, high-performance personal website built with Next.js 15, Tailwind CSS, and TypeScript.

## 🚀 Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Themes:** Light/Dark mode support (`next-themes`)
- **i18n:** English & Russian support (`next-intl`)
- **Icons:** [Lucide React](https://lucide.dev/)

## ✨ Features

### 📚 Interactive Bookshelf
- Custom-built book cards with local cover storage.
- Modal dialogs for detailed reviews (Synopsis, Personal Opinion, Critique).
- Responsive grid layout.
- Star rating system.

### 🌍 Internationalization
- Full i18n routing (`/en`, `/ru`).
- Localized interface (Navigation, Buttons).
- Content-agnostic architecture (Content remains in original language where appropriate).

### 🎨 Design
- Clean, minimalist UI.
- Mobile-first approach.
- Smooth transitions and interactive states.
- Off-canvas mobile menu.

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open:** [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/[locale]/    # i18n Pages & Layouts
├── components/      # UI & Feature Components
│   ├── books/       # Book-related components
│   └── ui/          # shadcn/ui primitives
├── lib/             # Utilities & Data types
├── messages/        # i18n JSON dictionaries
└── public/          # Static assets (images)
```