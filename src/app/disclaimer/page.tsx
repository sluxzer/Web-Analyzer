export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Disclaimer
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Last updated: March 14, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                General Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The information provided by Web Analyzer is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Analysis Results
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The analysis results provided by Web Analyzer are based on automated testing using Google's Lighthouse tool. While we strive to provide accurate and helpful insights:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Results may vary depending on network conditions, device performance, and other factors</li>
                <li>Scores and recommendations are guidelines, not absolute requirements</li>
                <li>Website performance can fluctuate over time</li>
                <li>Some recommendations may not be applicable to all websites or use cases</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Advice
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Analyzer is not a substitute for professional advice. The information provided does not constitute:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Professional SEO consulting services</li>
                <li>Legal advice regarding website compliance</li>
                <li>Accessibility audit or certification</li>
                <li>Security assessment or penetration testing</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                For critical websites or applications, we recommend consulting with qualified professionals in the relevant fields.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                External Links
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Web Analyzer may contain links to external websites that are not provided or maintained by or in any way affiliated with Web Analyzer. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                These links are provided for your convenience only and you rely on them at your own risk. We have no control over the nature, content, and availability of those sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Errors and Omissions
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                The information on Web Analyzer may contain typographical errors, technical inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                In no event shall Web Analyzer or its developers be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the service, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Loss of data, revenue, or profits</li>
                <li>Business interruption</li>
                <li>Loss of information or other intangible losses</li>
                <li>Damage to your computer system or loss of data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Changes to Disclaimer
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after modifications constitutes acceptance of the updated disclaimer.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}