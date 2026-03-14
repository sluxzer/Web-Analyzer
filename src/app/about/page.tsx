export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Web Analyzer
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Web Analyzer is a free, open-source tool designed to help website owners, developers, and marketers understand and improve their website's performance, SEO, accessibility, and best practices.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe that everyone should have access to professional-grade website analysis tools without breaking the bank. Our goal is to provide actionable insights that help you create better, faster, and more accessible websites.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What We Analyze
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span><strong>Performance:</strong> Core Web Vitals, loading speed, and optimization opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span><strong>SEO:</strong> Meta tags, structured data, sitemap, and search engine optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span><strong>Accessibility:</strong> WCAG compliance and inclusive design practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">•</span>
                <span><strong>Best Practices:</strong> Security, modern web standards, and code quality</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Web Analyzer is built with modern, open-source technologies:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Next.js 16 - React framework for production</li>
              <li>• Lighthouse - Google's open-source website analysis tool</li>
              <li>• Tailwind CSS - Utility-first CSS framework</li>
              <li>• TypeScript - Type-safe JavaScript</li>
              <li>• Vercel - Cloud platform for frontend deployment</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Open Source
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Web Analyzer is completely open source. You can view the source code, contribute, or even host your own instance.
            </p>
            <a
              href="https://github.com/sluxzer/Web-Analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}