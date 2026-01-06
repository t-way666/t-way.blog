import { getAllPosts } from "@/lib/blog"
import { Link } from "@/i18n/routing"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { setRequestLocale, getTranslations } from "next-intl/server"

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("Blog")

  const posts = await getAllPosts(locale)

  return (
    <div className="container mx-auto py-10 px-4 max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">{t("title")}</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="hover:bg-muted/50 transition-colors cursor-pointer border-0 shadow-none hover:shadow-none ring-1 ring-border">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                   <span className="text-sm text-muted-foreground">{post.metadata.date}</span>
                </div>
                <CardTitle className="text-2xl">{post.metadata.title}</CardTitle>
                <CardDescription className="text-base mt-2 line-clamp-2">
                  {post.metadata.summary}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
