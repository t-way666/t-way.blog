"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "@/i18n/routing"
import { Github, Send, ArrowRight } from "lucide-react"

export function Hero() {
  const t = useTranslations("HomePage")

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden text-center px-4">
      <div className="z-10 max-w-3xl space-y-6 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          {t("greeting")} <span className="text-primary block sm:inline">T-Way</span>
        </h1>
        
        <div className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto leading-relaxed">
          {t("intro_start")}{" "}
          <Popover>
            <PopoverTrigger asChild>
              <span className="cursor-pointer font-semibold text-foreground underline decoration-dotted underline-offset-4 hover:text-primary transition-colors">
                {t("t_shaped")}
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-80 text-left">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">T-shaped skills</h4>
                <p className="text-sm text-muted-foreground">
                  {t("t_shaped_desc")}
                </p>
                <div className="flex items-center pt-2">
                  <a 
                    href="https://en.wikipedia.org/wiki/T-shaped_skills" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-primary hover:underline flex items-center"
                  >
                    Wikipedia <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          {" "}{t("intro_end")}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/blog">
            <Button size="lg" className="rounded-full px-8">
              {t("read_blog")}
            </Button>
          </Link>
          <a href="https://github.com/wayer" target="_blank" rel="noreferrer">
            <Button variant="default" size="lg" className="rounded-full px-6">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
          <a href="https://t.me/T_w_a_y" target="_blank" rel="noreferrer">
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full px-6 bg-[#24A1DE] hover:bg-[#24A1DE]/90 text-white border-0"
            >
              <Send className="mr-2 h-4 w-4" />
              {t("contact")}
            </Button>
          </a>

        </div>
      </div>
    </section>
  )
}
