# Shaurya Manjkhola — Portfolio

A modern, dark-themed portfolio website for **Shaurya Manjkhola**, Mathematics and Computing undergraduate at BITS Pilani, Goa Campus (2024–2028).

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and an integrated **AI Copilot** powered by Claude (Anthropic).

---

## Features

- **Hero** — Name, tagline, stats, and interests at a glance
- **Projects** — Detailed cards for ML research and causal inference work
- **Skills** — Programming languages, ML stack, tools, and what's being learned
- **Experience** — Industry internship details (Caarya Innovative / BITS PS-I)
- **Competitive Programming** — Codeforces rating and profile link
- **Education** — BITS Pilani, Goa academic background
- **AI Copilot** — Ask Claude anything about Shaurya's portfolio (powered by Anthropic API)
- **Contact** — Email, phone, GitHub, and location

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| AI | Anthropic Claude (claude-haiku-4-5) |
| Deployment | Vercel (recommended) |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the root of the project:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```

> Get your API key from [console.anthropic.com](https://console.anthropic.com)

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
shaurya-portfolio/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts        # AI Copilot API endpoint
│   ├── globals.css             # Global styles + Tailwind
│   ├── layout.tsx              # Root layout + metadata
│   └── page.tsx                # Main page (section composition)
├── components/
│   ├── ui/
│   │   └── index.tsx           # Reusable UI primitives (Card, Tag, Button, etc.)
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── CompetitiveProgramming.tsx
│   ├── Education.tsx
│   ├── AICopilot.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.json          # All portfolio content (edit this to update info)
├── lib/
│   └── portfolio.ts            # Data access helper
└── README.md
```

---

## Customizing Content

All portfolio data lives in **`data/portfolio.json`**. Edit this file to update:

- Personal info, tagline, bio
- Skills and tools
- Projects (add/remove/edit)
- Experience entries
- Competitive programming stats
- Contact details

No code changes needed for content updates.

---

## Deploying to Vercel

1. Push the project to a GitHub repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add the environment variable:
   - `ANTHROPIC_API_KEY` = your key
4. Click **Deploy**

---

## AI Copilot

The AI Copilot uses the Anthropic API (`claude-haiku-4-5-20251001`) to answer questions about Shaurya's portfolio. It is grounded strictly in `data/portfolio.json` — it will not fabricate information.

The API route is at `app/api/chat/route.ts`. The API key is read server-side from `ANTHROPIC_API_KEY` and never exposed to the browser.

---

## License

MIT — feel free to fork and adapt for your own portfolio.
