"use client"

import { useState } from "react"
import ScoreCard from "@/components/ScoreCard"
import MetricCard from "@/components/MetricCard"

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
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Web Analyzer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Analyze your website's performance, SEO, accessibility, and best practices
          </p>
        </div>

        {/* Analysis Form */}
        <div className="max-w-2xl mx-auto mb-12 animate-slide-up">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
            <div className="flex gap-4">
              <input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                disabled={loading}
              />
              <button
                onClick={analyzeWebsite}
                disabled={loading}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  "Analyze"
                )}
              </button>
            </div>
            {error && (
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg animate-shake">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        {results && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <ScoreCard
                title="Performance"
                score={results.performance || 0}
                color="blue"
                icon="⚡"
              />
              <ScoreCard
                title="SEO"
                score={results.seo || 0}
                color="green"
                icon="🔍"
              />
              <ScoreCard
                title="Accessibility"
                score={results.accessibility || 0}
                color="purple"
                icon="♿"
              />
              <ScoreCard
                title="Best Practices"
                score={results.bestPractices || 0}
                color="orange"
                icon="✨"
              />
            </div>

            {/* Core Web Vitals */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Core Web Vitals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  label="LCP"
                  value={results.metrics?.LCP || 0}
                  unit="s"
                  description="Largest Contentful Paint"
                  icon="🖼️"
                />
                <MetricCard
                  label="FID"
                  value={results.metrics?.FID || 0}
                  unit="ms"
                  description="First Input Delay"
                  icon="⚡"
                />
                <MetricCard
                  label="CLS"
                  value={results.metrics?.CLS || 0}
                  unit=""
                  description="Cumulative Layout Shift"
                  icon="📊"
                />
                <MetricCard
                  label="TBT"
                  value={results.metrics?.TBT || 0}
                  unit="ms"
                  description="Total Blocking Time"
                  icon="⏱️"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}