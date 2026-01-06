"use client"

import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname, routing } from "@/i18n/routing"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const t = useTranslations("Language")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  function onLocaleChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- pathname is correct
      { pathname, params },
      { locale: nextLocale }
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">{t("toggle")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((cur) => (
          <DropdownMenuItem
            key={cur}
            onClick={() => onLocaleChange(cur)}
            disabled={locale === cur}
          >
            {t(cur)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
