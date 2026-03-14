import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const maxDuration = 60

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate URL
    try {
      new URL(url)
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      )
    }

    // Run Lighthouse analysis
    const lighthouse = require('lighthouse')
    const puppeteer = require('puppeteer')

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()

    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: new URL(browser.wsEndpoint()).port,
    }

    const runnerResult = await lighthouse(url, options)

    await browser.close()

    const result = runnerResult.lhr

    // Extract scores
    const scores = {
      performance: result.categories.performance.score * 100,
      accessibility: result.categories.accessibility.score * 100,
      bestPractices: result.categories['best-practices'].score * 100,
      seo: result.categories.seo.score * 100,
    }

    // Extract metrics
    const metrics = {
      LCP: result.audits['largest-contentful-paint']?.numericValue || 0,
      FID: result.audits['max-potential-fid']?.numericValue || 0,
      CLS: result.audits['cumulative-layout-shift']?.numericValue || 0,
      TBT: result.audits['total-blocking-time']?.numericValue || 0,
      TTFB: result.audits['server-response-time']?.numericValue || 0,
      SI: result.audits['speed-index']?.numericValue || 0,
    }

    return NextResponse.json({
      ...scores,
      metrics,
      url,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze website' },
      { status: 500 }
    )
  }
}