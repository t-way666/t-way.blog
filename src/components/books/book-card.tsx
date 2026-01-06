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
  CardFooter
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BookCardProps {
  book: BookWithReview
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative w-full aspect-[3/4] bg-muted">
        <Image
          src={book.thumbnail}
          alt={book.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
           <Badge variant={book.status === 'read' ? "default" : "secondary"}>
             {book.status === 'read' ? 'Прочитано' : 'Читаю'}
           </Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg leading-tight line-clamp-2">{book.title}</CardTitle>
        </div>
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
  )
}