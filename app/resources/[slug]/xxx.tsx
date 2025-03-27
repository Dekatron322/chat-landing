"use client"
import { useTheme } from "next-themes"
import DashboardNav from "components/Navbar/DashboardNav"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Footer from "components/Footer/Footer"
import MobileNav from "components/Navbar/MobileNav"
import { querySingleBlog } from "utils/blogPosts"
import { useParams } from "next/navigation"

interface SingleBlogResponse {
  blogChats: {
    category: {
      name: string
    }
    description: string
    image: {
      url: string
    }
    slug: string
    title: string
    content: {
      html: string
    }
    publishedAt: string
  }
}

export default function BlogPostPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()
  const [post, setPost] = useState<SingleBlogResponse["blogChats"] | null>(null)
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const slug = params.slug as string

  const getBlogPost = async () => {
    try {
      setLoading(true)
      const response = await querySingleBlog(slug)
      setPost(response.blogChats)
    } catch (error) {
      console.error("Error fetching blog post:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (slug) {
      getBlogPost()
    }
  }, [slug])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (systemTheme && !mounted) {
      setTheme(systemTheme)
    }
  }, [systemTheme, setTheme, mounted])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <DashboardNav />
        <div className="paddings pt-32">
          <div className="mx-auto max-w-4xl">
            <div className="h-10 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-6 h-16 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-8 h-96 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-8 space-y-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <DashboardNav />
        <div className="paddings pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-2xl font-bold">Post not found</h1>
            <Link href="/resources" className="mt-4 inline-block text-blue-500 hover:underline">
              Back to all posts
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <DashboardNav />
      <MobileNav />
      <div className="paddings pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8">
            <span className="rounded-full bg-[#05F29A] px-4 py-1 text-sm font-medium text-[#151E22]">
              {post.category.name}
            </span>
            <h1 className="mt-4 text-4xl font-bold">{post.title}</h1>
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-gray-500 dark:text-gray-400">{formatDate(post.publishedAt)}</span>
              <span className="text-gray-500 dark:text-gray-400">Chats Team</span>
            </div>
          </div>

          <div className="relative mb-12 h-96 w-full overflow-hidden rounded-xl">
            <img src={post.image.url} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content.html }} />

          <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <Link href="/resources" className="inline-flex items-center text-blue-500 hover:underline">
              ← Back to all posts
            </Link>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  )
}
