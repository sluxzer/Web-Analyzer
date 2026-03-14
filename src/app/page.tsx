"use client"

import { useState } from "react"

export default function Home() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState("")

  const analyzeWebsite = async () => {
    if (!url) {
      setError("Please enter a URL")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error("Analysis failed")
      }

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError("Failed to analyze website. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Web Analyzer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Analyze your website's performance, SEO, accessibility, and best practices
          </p>
        </div>

        {/* Analysis Form */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="flex gap-4">
              <input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                disabled={loading}
              />
              <button
                onClick={analyzeWebsite}
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Analyzing..." : "Analyze"}
              </button>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Performance Score */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Performance
                </h3>
                <div className="text-5xl font-bold text-blue-600">
                  {results.performance?.toFixed(0) || 0}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  / 100
                </p>
              </div>

              {/* SEO Score */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  SEO
                </h3>
                <div className="text-5xl font-bold text-green-600">
                  {results.seo?.toFixed(0) || 0}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  / 100
                </p>
              </div>

              {/* Accessibility Score */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Accessibility
                </h3>
                <div className="text-5xl font-bold text-purple-600">
                  {results.accessibility?.toFixed(0) || 0}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  / 100
                </p>
              </div>

              {/* Best Practices Score */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Best Practices
                </h3>
                <div className="text-5xl font-bold text-orange-600">
                  {results.bestPractices?.toFixed(0) || 0}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  / 100
                </p>
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Web Vitals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    LCP
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {results.metrics?.LCP?.toFixed(0) || 0}s
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Largest Contentful Paint
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    FID
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {results.metrics?.FID?.toFixed(0) || 0}ms
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    First Input Delay
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    CLS
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {results.metrics?.CLS?.toFixed(3) || 0}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Cumulative Layout Shift
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    TBT
                  </h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {results.metrics?.TBT?.toFixed(0) || 0}ms
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Total Blocking Time
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}