import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="text-xl text-muted-foreground">{t('subtitle')}</p>
      
      <div className="mt-8 flex gap-4">
        {/* Здесь будут наши переключатели тем и языка */}
        <div className="rounded border p-4">
          Placeholder: Theme Switcher
        </div>
        <div className="rounded border p-4">
           Placeholder: Lang Switcher
        </div>
      </div>
    </div>
  );
}