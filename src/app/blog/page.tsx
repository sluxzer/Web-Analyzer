export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Improve Your Website's Performance Score",
      excerpt: "Learn practical tips and techniques to boost your website's performance score and provide a better user experience.",
      date: "March 14, 2026",
      category: "Performance",
      readTime: "5 min read"
    },
    {
      title: "SEO Best Practices for 2026",
      excerpt: "Stay ahead of the competition with the latest SEO strategies and best practices for modern websites.",
      date: "March 10, 2026",
      category: "SEO",
      readTime: "7 min read"
    },
    {
      title: "Understanding Core Web Vitals",
      excerpt: "Deep dive into LCP, FID, and CLS - the three Core Web Vitals that Google uses to measure user experience.",
      date: "March 5, 2026",
      category: "Performance",
      readTime: "6 min read"
    },
    {
      title: "Making Your Website Accessible to Everyone",
      excerpt: "A comprehensive guide to web accessibility and how to make your site usable for people with disabilities.",
      date: "February 28, 2026",
      category: "Accessibility",
      readTime: "8 min read"
    },
    {
      title: "Common SEO Mistakes to Avoid",
      excerpt: "Discover the most common SEO mistakes that could be hurting your website's search engine rankings.",
      date: "February 20, 2026",
      category: "SEO",
      readTime: "4 min read"
    },
    {
      title: "The Importance of Mobile Optimization",
      excerpt: "Why mobile optimization matters more than ever and how to ensure your website performs great on all devices.",
      date: "February 15, 2026",
      category: "Performance",
      readTime: "5 min read"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Tips, tutorials, and insights to help you build better websites
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              More articles coming soon!
            </p>
            <a
              href="https://github.com/sluxzer/Web-Analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}