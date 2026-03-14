import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
            Web Analyzer
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Blog
            </Link>
            <Link href="/tutorials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Tutorials
            </Link>
            <Link href="/faq" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://github.com/sluxzer/Web-Analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}