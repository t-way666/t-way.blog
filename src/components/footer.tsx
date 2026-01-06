import { Link } from "@/i18n/routing"
import { Github, Send } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} <span className="font-bold">T-Way</span>. 
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Next.js
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/t-way666/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://t.me/T_w_a_y" 
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-[#24A1DE] transition-colors"
          >
            <Send className="h-5 w-5" />
            <span className="sr-only">Telegram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
