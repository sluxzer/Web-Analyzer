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

    // Simulate analysis (in production, use a separate service or worker)
    // This is a simplified version for demonstration
    const startTime = Date.now()

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate realistic scores based on URL characteristics
    const urlHash = url.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    const randomSeed = urlHash % 100

    const scores = {
      performance: 70 + (randomSeed % 30),
      accessibility: 75 + ((randomSeed * 2) % 25),
      bestPractices: 80 + ((randomSeed * 3) % 20),
      seo: 85 + ((randomSeed * 4) % 15),
    }

    const metrics = {
      LCP: 1.5 + (randomSeed % 20) / 10,
      FID: 50 + (randomSeed % 150),
      CLS: 0.05 + (randomSeed % 10) / 100,
      TBT: 100 + (randomSeed % 300),
      TTFB: 0.2 + (randomSeed % 30) / 100,
      SI: 1.2 + (randomSeed % 20) / 10,
    }

    const analysisTime = Date.now() - startTime

    return NextResponse.json({
      ...scores,
      metrics,
      url,
      timestamp: new Date().toISOString(),
      analysisTime,
      note: 'This is a demo version. For production, integrate with Lighthouse via a separate service.'
    })
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze website' },
      { status: 500 }
    )
  }
}