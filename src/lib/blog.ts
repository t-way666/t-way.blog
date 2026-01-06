import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const contentDir = path.join(process.cwd(), 'src/content')

export interface Post {
  slug: string
  metadata: {
    title: string
    date: string
    summary: string
    lang?: string
  }
  content: any // React node
}

// Теперь функция принимает locale
export async function getPostBySlug(slug: string, locale: string): Promise<Post | null> {
  // Сначала пробуем найти файл с локалью (например, hello-world.en.mdx)
  let filePath = path.join(contentDir, `${slug}.${locale}.mdx`)
  
  // Если файла нет, можно попробовать дефолтный (без локали) или вернуть null
  if (!fs.existsSync(filePath)) {
    // Fallback: пробуем найти .mdx без суффикса (как дефолт)
    filePath = path.join(contentDir, `${slug}.mdx`)
    if (!fs.existsSync(filePath)) {
      return null
    }
  }

  const fileContent = fs.readFileSync(filePath, 'utf8')

  const { frontmatter, content } = await compileMDX<{ title: string; date: string; summary: string; lang?: string }>({
    source: fileContent,
    options: { 
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      }
    },
    components: useMDXComponents({}),
  })

  return {
    slug,
    metadata: frontmatter,
    content,
  }
}

export async function getAllPosts(locale: string): Promise<Post[]> {
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir)
  const posts: Post[] = []
  
  // Собираем уникальные слаги
  const slugs = new Set<string>()
  
  for (const file of files) {
    if (!file.endsWith('.mdx')) continue
    // hello-world.ru.mdx -> hello-world
    const slug = file.replace(/\.(ru|en)\.mdx$/, '').replace(/\.mdx$/, '')
    slugs.add(slug)
  }

  for (const slug of Array.from(slugs)) {
    const post = await getPostBySlug(slug, locale)
    if (post) {
      posts.push(post)
    }
  }

  return posts.sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
}
