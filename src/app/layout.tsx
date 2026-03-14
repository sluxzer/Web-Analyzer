import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Web Analyzer - Free Website Performance & SEO Analysis Tool",
  description: "Analyze your website's performance, SEO, accessibility, and best practices. Get actionable insights to improve your online presence.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}