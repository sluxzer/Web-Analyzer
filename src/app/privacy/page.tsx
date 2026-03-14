export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Last updated: March 14, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Analyzer collects the following information when you use our service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Website URLs that you submit for analysis</li>
                <li>Analysis results and performance metrics</li>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>IP address (anonymized)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide website analysis services</li>
                <li>Improve our service quality and performance</li>
                <li>Analyze usage patterns and trends</li>
                <li>Prevent abuse and ensure service availability</li>
                <li>Develop new features and improvements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Data Storage and Retention
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Analysis results are cached for up to 24 hours to improve performance and reduce server load. After this period, the data is automatically deleted.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We do not store personal information, and we do not sell or share your data with third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Cookies and Local Storage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Analyzer uses cookies and local storage to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Remember your preferences</li>
                <li>Improve user experience</li>
                <li>Analyze website usage patterns</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                You can disable cookies in your browser settings, but this may affect the functionality of our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Vercel:</strong> Hosting and deployment platform</li>
                <li><strong>Google Lighthouse:</strong> Website analysis tool</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                These services have their own privacy policies, which we encourage you to review.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We implement appropriate security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Access your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of data collection</li>
                <li>File a complaint with data protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy, please contact us through our GitHub repository or open an issue.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}