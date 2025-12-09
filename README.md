# Helvetici

**Visual AI IDE for Designers**

Build AI-powered design workflows by connecting visual nodes. No code required, powered by Claude.

## Features

- 🎨 **Node-Based Interface** - Build complex AI workflows visually
- ⚡ **Claude Powered** - Intelligent generation using Anthropic's Claude Sonnet 4
- 📤 **Export Ready** - Generate production-ready HTML/CSS code
- ⌨️ **Keyboard Shortcuts** - `Cmd/Ctrl + Enter` to run flows
- 🎯 **Real-time Preview** - See your designs generated instantly
- 💾 **Copy Code** - One-click code export with syntax highlighting

## Quick Start

### Prerequisites

- Node.js 18+
- Anthropic API key ([get one here](https://console.anthropic.com/))

### Installation

```bash
# Install dependencies
npm install

# Create .env.local file
echo "ANTHROPIC_API_KEY=your_key_here" > .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## How to Use

1. **Drag Nodes** - Drag Text Input, AI Generate, and Preview nodes onto canvas
2. **Connect** - Click and drag between node handles to connect them
3. **Enter Prompt** - Type your design description in Text Input
4. **Generate** - Click "Run Flow" or press `Cmd+Enter`
5. **Export** - Switch to Code tab and copy the generated code

### Example Workflow

```
Text Input → AI Generate → Preview
```

**Prompt:** "A blue button with rounded corners that says Click Me"
**Output:** Production-ready HTML with Tailwind CSS

## Deployment to helvetici.com

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod

# Set env variable
vercel env add ANTHROPIC_API_KEY production
```

Then point helvetici.com DNS to your Vercel deployment.

### Option 2: Netlify

```bash
npm run build
netlify deploy --prod --dir=.next
```

Set `ANTHROPIC_API_KEY` in Netlify dashboard.

### Option 3: Custom Server

```bash
npm run build
npm start
```

Set environment variable and point helvetici.com DNS to your server.

## Tech Stack

- Next.js 14 (App Router)
- React Flow - Node-based canvas
- Zustand - State management
- Tailwind CSS - Styling
- Anthropic Claude API - AI generation
- TypeScript

## Project Structure

```
helvetici/
├── app/
│   ├── editor/page.tsx       # Main editor
│   ├── api/generate/route.ts # Claude API
│   └── page.tsx              # Landing page
├── components/
│   ├── Canvas.tsx            # React Flow wrapper
│   ├── Sidebar.tsx           # Node palette
│   └── nodes/                # Node components
├── lib/
│   └── store.ts              # Zustand store
└── .env.local                # API keys (gitignored)
```

## Environment Variables

Required in `.env.local`:

```env
ANTHROPIC_API_KEY=sk-ant-api03-...
```

## License

MIT

---

Built with Claude by [@osiristephenson](https://github.com/osiristephenson)
