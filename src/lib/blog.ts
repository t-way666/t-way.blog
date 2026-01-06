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

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) {
    return null
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

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir)
  const posts: Post[] = []

  for (const file of files) {
    if (!file.endsWith('.mdx')) continue
    
    const slug = file.replace('.mdx', '')
    const post = await getPostBySlug(slug)
    if (post) {
      posts.push(post)
    }
  }

  return posts.sort((a, b) => 
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
}