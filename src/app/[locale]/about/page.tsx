import { TIMELINE_DATA, HOBBIES } from "@/lib/types"
import { TimelineItem } from "@/components/timeline/timeline-item"
import { setRequestLocale } from "next-intl/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil, Music, Clapperboard, BookOpen, Terminal } from "lucide-react"

const getHobbyIcon = (iconName: string) => {
  switch (iconName) {
    case 'draw': return <Pencil className="w-8 h-8 mb-2 text-primary" />;
    case 'music': return <Music className="w-8 h-8 mb-2 text-primary" />;
    case 'video': return <Clapperboard className="w-8 h-8 mb-2 text-primary" />;
    case 'book': return <BookOpen className="w-8 h-8 mb-2 text-primary" />;
    case 'linux': return <Terminal className="w-8 h-8 mb-2 text-primary" />;
    default: return <Pencil className="w-8 h-8 mb-2 text-primary" />;
  }
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = (field: any) => field[locale as 'ru' | 'en'] || field.ru;

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{locale === 'ru' ? 'Мой путь' : 'My Journey'}</h1>
        <p className="text-muted-foreground text-lg mb-8">
          {locale === 'ru' 
            ? 'От Самарканда до Frontend-разработки. Это не просто карьера, это поиск себя.' 
            : 'From Samarkand to Frontend Development. It is not just a career, it is a search for self.'}
        </p>
        
        <div className="mt-8">
          {TIMELINE_DATA.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              locale={locale} 
              isLast={index === TIMELINE_DATA.length - 1} 
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold tracking-tight mb-6">{locale === 'ru' ? 'Вне кода' : 'Beyond Code'}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HOBBIES.map((hobby, idx) => (
            <Card key={idx} className="hover:bg-muted/50 transition-colors text-center">
              <CardHeader className="flex flex-col items-center pb-2">
                {getHobbyIcon(hobby.icon)}
                <CardTitle className="text-base">{t(hobby.title)}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                 <p className="text-xs text-muted-foreground">{t(hobby.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
