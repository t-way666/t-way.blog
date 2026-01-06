import { getPostBySlug, getAllPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/routing"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export async function generateStaticParams() {
  // Для статики генерируем пути для всех языков, предполагая что слаги одинаковые
  // Но в реальном проекте тут нужно быть аккуратнее. Пока оставим 'ru' как дефолт для списка слагов.
  const posts = await getAllPosts('ru') 
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { slug, locale } = await params
  const post = await getPostBySlug(slug, locale)

  if (!post) {
    return {}
  }

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: 'article',
      publishedTime: post.metadata.date,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Blog")

  const post = await getPostBySlug(slug, locale)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-primary">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("back")}
        </Button>
      </Link>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="mb-8 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            {post.metadata.title}
          </h1>
          <p className="text-muted-foreground">
            {post.metadata.date}
          </p>
        </div>
        
        {post.content}
      </article>
    </div>
  )
}
