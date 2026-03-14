export default function TutorialsPage() {
  const tutorials = [
    {
      title: "Getting Started with Web Analyzer",
      description: "Learn how to use Web Analyzer to analyze your website and interpret the results.",
      level: "Beginner",
      duration: "10 min",
      icon: "🚀"
    },
    {
      title: "Understanding Performance Metrics",
      description: "Deep dive into LCP, FID, CLS, and other performance metrics.",
      level: "Intermediate",
      duration: "15 min",
      icon: "⚡"
    },
    {
      title: "SEO Optimization Guide",
      description: "Step-by-step guide to improving your website's SEO score.",
      level: "Intermediate",
      duration: "20 min",
      icon: "🔍"
    },
    {
      title: "Accessibility Best Practices",
      description: "Learn how to make your website accessible to all users.",
      level: "Beginner",
      duration: "15 min",
      icon: "♿"
    },
    {
      title: "Security and Best Practices",
      description: "Implement security measures and follow web development best practices.",
      level: "Advanced",
      duration: "25 min",
      icon: "🔒"
    },
    {
      title: "Deploying Your Own Instance",
      description: "How to deploy Web Analyzer on your own server or cloud platform.",
      level: "Advanced",
      duration: "30 min",
      icon: "🛠️"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
      case 'Intermediate':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
      case 'Advanced':
        return 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tutorials & Guides
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Learn how to use Web Analyzer and improve your website
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{tutorial.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getLevelColor(tutorial.level)}`}>
                    {tutorial.level}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {tutorial.duration}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {tutorial.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {tutorial.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Video Tutorials
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Coming soon! We're working on video tutorials to help you get the most out of Web Analyzer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🎥</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Quick Start Guide
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Get started in 5 minutes
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <div className="text-2xl mb-2">🎥</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Advanced Analysis
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Deep dive into metrics
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/sluxzer/Web-Analyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Contribute a Tutorial
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}