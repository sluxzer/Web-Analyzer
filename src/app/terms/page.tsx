export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Last updated: March 14, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                By accessing and using Web Analyzer, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Analyzer provides a free website analysis service that evaluates:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Website performance metrics</li>
                <li>SEO optimization opportunities</li>
                <li>Accessibility compliance</li>
                <li>Best practices adherence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As a user of Web Analyzer, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Only submit URLs that you own or have permission to analyze</li>
                <li>Not use the service for any illegal or unauthorized purpose</li>
                <li>Not attempt to circumvent any security measures</li>
                <li>Not use automated tools to abuse the service</li>
                <li>Respect rate limits and fair usage policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Service Availability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Analyzer is provided on an "as is" and "as available" basis. We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Uninterrupted or error-free service</li>
                <li>That defects will be corrected</li>
                <li>That the service will meet your requirements</li>
                <li>That the service will be available at all times</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Rate Limits and Fair Usage
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                To ensure fair usage and service availability, we implement rate limits:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Free tier: Approximately 200-300 analyses per day</li>
                <li>Excessive usage may result in temporary or permanent suspension</li>
                <li>We reserve the right to modify rate limits at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Analyzer is open-source software licensed under the MIT License. You are free to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use the software for any purpose</li>
                <li>Modify the software</li>
                <li>Distribute the software</li>
                <li>Sublicense the software</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Subject to the conditions of the MIT License, including the inclusion of the copyright notice and license in all copies or substantial portions of the software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Web Analyzer is provided without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Modifications to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify these Terms of Service at any time. Continued use of the service after modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms of Service, please contact us through our GitHub repository or open an issue.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}