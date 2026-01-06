import Image from "next/image"
import { BookWithReview } from "@/lib/types"
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
  DialogTitle, // Добавляем DialogTitle для доступности
} from "@/components/ui/dialog"
// ScrollArea убираем, используем нативный скролл

interface BookCardProps {
  book: BookWithReview
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer group">
          <div className="relative w-full aspect-[3/4] bg-muted">
            <Image
              src={book.thumbnail}
              alt={book.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-2 right-2">
               <Badge variant={book.status === 'read' ? "default" : "secondary"}>
                 {book.status === 'read' ? 'Прочитано' : 'Читаю'}
               </Badge>
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {book.title}
            </CardTitle>
            <CardDescription className="text-sm font-medium">
              {book.author}
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
              "{book.review}"
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-2xl w-[95vw] p-0 overflow-hidden flex flex-col h-[90vh]">
        {/* Скрытый заголовок для доступности, так как мы рисуем свой кастомный хедер */}
        <DialogTitle className="sr-only">{book.title}</DialogTitle>

        <div className="flex-1 overflow-y-auto">
          {/* Обложка сверху */}
          <div className="relative w-full aspect-video bg-muted shrink-0">
             <Image
                src={book.thumbnail}
                alt={book.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">{book.title}</h2>
                <p className="text-white/90 font-medium drop-shadow-md">{book.author}</p>
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
               <Badge variant="outline" className="text-sm">{book.status === 'read' ? 'Прочитано' : 'В процессе'}</Badge>
            </div>

            {/* Мое мнение */}
            <section className="space-y-3">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Моё мнение
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {book.myOpinion}
              </div>
            </section>

             {/* Конспект */}
             <section className="space-y-3">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full" />
                Конспект / Основные идеи
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap bg-muted/50 p-4 rounded-lg">
                {book.synopsis}
              </div>
            </section>

            {/* Критика */}
            <section className="space-y-3 pb-6">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <span className="w-1.5 h-6 bg-destructive rounded-full" />
                Критика
              </h3>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap italic">
                {book.critique}
              </div>
            </section>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
