import { MY_BOOKS } from "@/lib/types"
import { BookCard } from "@/components/books/book-card"
import { setRequestLocale } from "next-intl/server"

export default async function BooksPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Книжная полка</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Это не просто список литературы. Это идеи, которые сформировали мое мировоззрение.
          Здесь мои честные отзывы, а не копипаста с обложки.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {MY_BOOKS.map((book) => (
          <BookCard key={book.id} book={book} locale={locale} />
        ))}
      </div>
    </div>
  )
}
