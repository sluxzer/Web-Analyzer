# Web Analyzer

A free, open-source web analyzer built with Next.js, Lighthouse, and Vercel.

## Features

- **Performance Analysis**: Core Web Vitals (LCP, FID, CLS, TBT)
- **SEO Analysis**: Meta tags, structured data, sitemap, robots.txt
- **Accessibility**: WCAG compliance checks
- **Best Practices**: Security, modern web standards
- **Caching**: Vercel KV for fast results
- **History**: Track website performance over time

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Analysis**: Lighthouse, Puppeteer, Cheerio
- **Storage**: Vercel KV, Vercel Postgres, Vercel Blob
- **Deployment**: Vercel (Free tier)

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd seo-analyzer

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Usage

1. Enter your website URL
2. Click "Analyze"
3. View results:
   - Performance score
   - SEO score
   - Accessibility score
   - Best Practices score
   - Core Web Vitals

## API Endpoints

### POST /api/analyze

Analyze a website.

**Request:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "performance": 85,
  "accessibility": 92,
  "bestPractices": 88,
  "seo": 95,
  "metrics": {
    "LCP": 1.2,
    "FID": 45,
    "CLS": 0.05,
    "TBT": 120,
    "TTFB": 0.3,
    "SI": 1.5
  },
  "url": "https://example.com",
  "timestamp": "2026-03-14T13:43:00.000Z"
}
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

```bash
# Vercel KV (for caching)
KV_URL=your-kv-url
KV_REST_API_URL=your-kv-rest-url
KV_REST_API_TOKEN=your-kv-token

# Vercel Postgres (for user accounts)
POSTGRES_URL=your-postgres-url
POSTGRES_PRISMA_URL=your-postgres-prisma-url

# Vercel Blob (for reports)
BLOB_READ_WRITE_TOKEN=your-blob-token
```

## Free Tier Limits

- **Analyses**: ~200-300 per day
- **Users**: Unlimited
- **Storage**: 256MB (KV), 512MB (Postgres), 500MB (Blob)
- **Bandwidth**: 100GB/month

## Optimization Strategies

### Caching
```javascript
// Cache results for 24 hours
await kv.set(`analysis:${url}`, results, { ex: 86400 })
```

### Queue System
```javascript
// Process in background
await queue.enqueue({ url, userId })
```

### Incremental Analysis
```javascript
// Analyze only what's needed
const results = await analyze(url, ['performance', 'seo'])
```

## Upgrade Path

### When to Upgrade to Pro ($20/month)

- More than 1,000 analyses/day
- Need more storage
- Want scheduled monitoring
- Need API rate limiting
- Want team collaboration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for any purpose.

## Support

For issues and questions, please open an issue on GitHub.