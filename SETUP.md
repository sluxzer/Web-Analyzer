# Web Analyzer - Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd /Users/xavier/.nanobot/workspace/projects/seo-analyzer
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

### 3. Test the Analyzer

1. Enter a URL (e.g., https://example.com)
2. Click "Analyze"
3. Wait 30-60 seconds
4. View results

## 📦 Project Structure

```
web-analyzer/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── analyze/
│   │   │       └── route.ts      # API endpoint
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx               # Home page
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── vercel.json
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```bash
# Vercel KV (for caching)
KV_URL=your-kv-url
KV_REST_API_URL=your-kv-rest-url
KV_REST_API_TOKEN=your-kv-rest-api-token

# Vercel Postgres (for user accounts)
POSTGRES_URL=your-postgres-url
POSTGRES_PRISMA_URL=your-postgres-prisma-url

# Vercecel Blob (for reports)
BLOB_READ_WRITE_TOKEN=your-blob-token
```

## 🚀 Deployment

### Deploy to Vercel

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

## 📊 Features

### Current Features (MVP)

- ✅ Performance Analysis
- ✅ SEO Analysis
- ✅ Accessibility Analysis
- ✅ Best Practices Analysis
- ✅ Core Web Vitals (LCP, FID, CLS, TBT)
- ✅ Real-time Analysis
- ✅ Responsive Design
- ✅ Demo Analysis (for demonstration)

### Production Setup

For production use, you have two options:

#### Option 1: Google PageSpeed Insights API
```javascript
// Use Google's official API
const response = await fetch(
  `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${API_KEY}`
)
const data = await response.json()
```

#### Option 2: Separate Lighthouse Service
Deploy Lighthouse as a separate Node.js service:
```bash
# Create a separate service
mkdir lighthouse-service
cd lighthouse-service
npm init -y
npm install lighthouse puppeteer express
```

### Future Features (Upgrade Path)

- 🔄 Caching with Vercel KV
- 🔄 History Tracking
- 🔄 User Accounts
- 🔄 PDF Reports
- 🔄 Competitor Comparison
- 🔄 Scheduled Monitoring
- 🔄 API Rate Limiting
- 🔄 Production Lighthouse Integration

## 📈 Performance

### Free Tier Capacity

- **Analyses**: ~200-300 per day
- **Users**: Unlimited
- **Storage**: 256MB (KV), 512MB (Postgres), 500MB (Blob)
- **Bandwidth**: 100GB/month

### Optimization Strategies

1. **Caching**: Cache results for 24 hours
2. **Queue System**: Process in background
3. **Incremental Analysis**: Analyze only what's needed
4. **Lightweight Mode**: Quick analysis without screenshots

## 🐛 Troubleshooting

### Common Issues

**Issue**: "Chrome not found"
```bash
# Install Chrome
npm install puppeteer
```

**Issue**: "Timeout error"
```bash
# Increase timeout in vercel.json
"maxDuration": 60
```

**Issue**: "Memory limit exceeded"
```bash
# Use lightweight mode
# Reduce concurrent analyses
```

## 📚 Resources

- [Lighthouse Documentation](https://github.com/GoogleChrome/lighthouse)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this project for any purpose.