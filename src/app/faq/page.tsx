export default function FAQPage() {
  const faqs = [
    {
      question: "What is Web Analyzer?",
      answer: "Web Analyzer is a free, open-source tool that analyzes websites for performance, SEO, accessibility, and best practices. It uses Google's Lighthouse to provide actionable insights to improve your website."
    },
    {
      question: "How much does it cost?",
      answer: "Web Analyzer is completely free to use. We offer a generous free tier that allows approximately 200-300 analyses per day. For higher volume needs, you can deploy your own instance using our open-source code."
    },
    {
      question: "What metrics does Web Analyzer analyze?",
      answer: "Web Analyzer analyzes four main categories: Performance (loading speed, Core Web Vitals), SEO (meta tags, structured data), Accessibility (WCAG compliance), and Best Practices (security, modern standards)."
    },
    {
      question: "How accurate are the results?",
      answer: "Web Analyzer uses Google's Lighthouse, which is the industry standard for website analysis. The results are highly accurate and reflect real-world performance and best practices."
    },
    {
      question: "Is my data stored?",
      answer: "Analysis results are cached for up to 24 hours to improve performance. After this period, the data is automatically deleted. We do not store personal information or sell your data to third parties."
    },
    {
      question: "Can I use Web Analyzer for commercial purposes?",
      answer: "Yes! Web Analyzer is open-source under the MIT License, which means you can use it for any purpose, including commercial projects. You can also deploy your own instance for internal use."
    },
    {
      question: "What are the rate limits?",
      answer: "The free tier allows approximately 200-300 analyses per day. This helps ensure fair usage and service availability for all users. Excessive usage may result in temporary rate limiting."
    },
    {
      question: "How long does an analysis take?",
      answer: "Most analyses complete within 30-60 seconds, depending on the size and complexity of the website being analyzed. Larger websites with more pages may take longer."
    },
    {
      question: "Can I analyze any website?",
      answer: "You can analyze any publicly accessible website. However, you should only analyze websites that you own or have permission to analyze. Analyzing websites without permission may violate terms of service."
    },
    {
      question: "What browsers are supported?",
      answer: "Web Analyzer works in all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your browser for the best experience."
    },
    {
      question: "Is Web Analyzer mobile-friendly?",
      answer: "Yes! Web Analyzer is fully responsive and works great on mobile devices, tablets, and desktop computers."
    },
    {
      question: "How can I contribute to Web Analyzer?",
      answer: "Web Analyzer is open-source! You can contribute by reporting bugs, suggesting features, or submitting pull requests on our GitHub repository. We welcome contributions from the community."
    },
    {
      question: "What technologies does Web Analyzer use?",
      answer: "Web Analyzer is built with Next.js 16, React 19, TypeScript, and Tailwind CSS. It uses Google's Lighthouse for analysis and is deployed on Vercel."
    },
    {
      question: "Can I host my own instance?",
      answer: "Absolutely! Since Web Analyzer is open-source, you can deploy your own instance on any platform that supports Node.js. Check our GitHub repository for deployment instructions."
    },
    {
      question: "How do I interpret the scores?",
      answer: "Scores range from 0-100, with higher scores being better. Generally, scores above 90 are considered good, 50-89 need improvement, and below 50 require significant attention. Each category has specific recommendations."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Can't find the answer you're looking for? Feel free to reach out!
              </p>
              <a
                href="https://github.com/sluxzer/Web-Analyzer/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
              >
                Ask on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}