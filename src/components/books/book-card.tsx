import Image from "next/image"
import { BookWithReview, LocalizedString } from "@/lib/types"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

interface BookCardProps {
  book: BookWithReview;
  locale: string;
}

export function BookCard({ book, locale }: BookCardProps) {
  // Хелпер для получения перевода
  const t = (field: LocalizedString) => {
    return field[locale as 'ru' | 'en'] || field.ru;
  };
  
  // Простые переводы для UI элементов
  const ui = {
    read: locale === 'ru' ? 'Прочитано' : 'Read',
    reading: locale === 'ru' ? 'Читаю' : 'Reading',
    opinion: locale === 'ru' ? 'Моё мнение' : 'My Opinion',
    synopsis: locale === 'ru' ? 'Конспект / Основные идеи' : 'Synopsis / Key Ideas',
    critique: locale === 'ru' ? 'Критика' : 'Critique',
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group">
          <div className="relative w-full aspect-[3/4] bg-muted">
            <Image
              src={book.thumbnail}
              alt={t(book.title)}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-2 right-2">
               <Badge variant={book.status === 'read' ? "default" : "secondary"}>
                 {book.status === 'read' ? ui.read : ui.reading}
               </Badge>
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {t(book.title)}
            </CardTitle>
            <CardDescription className="text-sm font-medium">
              {t(book.author)}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-1 pb-2">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-4 h-4", 
                    i < book.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
                  )} 
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground italic line-clamp-4">
              "{t(book.review)}"
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl w-[95vw] p-0 overflow-hidden flex flex-col h-[90vh]">
        <DialogTitle className="sr-only">{t(book.title)}</DialogTitle>

        <div className="flex-1 overflow-y-auto">
          {/* Обложка сверху */}
          <div className="relative w-full aspect-video bg-muted shrink-0">
             <Image
                src={book.thumbnail}
                alt={t(book.title)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">{t(book.title)}</h2>
                <p className="text-white/90 font-medium drop-shadow-md">{t(book.author)}</p>
              </div>
          </div>

          <div className="p-6 space-y-8">
            <div className="flex items-center justify-between border-b pb-4">
               <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-5 h-5", 
                        i < book.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"
                      )} 
                    />
                  ))}
               </div>
               <Badge variant="outline" className="text-sm">{book.status === 'read' ? ui.read : ui.reading}</Badge>
            </div>

            {/* Мое мнение */}
            <section className="space-y-3">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                {ui.opinion}
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {t(book.myOpinion)}
              </div>
            </section>

             {/* Конспект */}
             <section className="space-y-3">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full" />
                {ui.synopsis}
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap bg-muted/50 p-4 rounded-lg">
                {t(book.synopsis)}
              </div>
            </section>

            {/* Критика */}
            <section className="space-y-3 pb-6">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <span className="w-1.5 h-6 bg-destructive rounded-full" />
                {ui.critique}
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap italic">
                {t(book.critique)}
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
