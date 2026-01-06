import { TimelineItem as TimelineItemType } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon } from "@/components/ui/icon"

interface TimelineProps {
  item: TimelineItemType;
  locale: string;
  isLast?: boolean;
}

export function TimelineItem({ item, locale, isLast }: TimelineProps) {
  const t = (field: any) => field[locale as 'ru' | 'en'] || field.ru;

  return (
    <div className="relative pl-8 md:pl-10 pb-8 group">
      {/* Вертикальная линия */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[13px] top-8 bottom-0 w-[2px] bg-border group-hover:bg-primary/50 transition-colors" />
      )}
      
      {/* Точка с иконкой */}
      <div className="absolute left-0 top-1 w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-primary bg-background flex items-center justify-center text-primary shadow-sm z-10 group-hover:scale-110 transition-transform">
        <div className="w-2 h-2 bg-primary rounded-full" />
      </div>

      <Card className="relative hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
             <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
                <Icon name={item.icon} className="w-5 h-5" />
                {item.year}
             </div>
          </div>
          <CardTitle className="text-xl mt-1">{t(item.title)}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {t(item.description)}
          </p>
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {item.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
