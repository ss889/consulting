# AI Consultant Portfolio

A simple, reproducible portfolio system for AI consultants. Build your professional presence with **zero cost**, **no build process**, and **no coding required** after initial setup.

## What This Is

- **Portfolio Content Management:** All your content lives in a single `content.json` file
- **Zero Hosting Costs:** Deploy free on GitHub Pages
- **Forkable Template:** Others can fork and customize for their own portfolio
- **Ollama Integration:** Generate professional content using local LLMs
- **No Build Process:** Works directly in the browser; edit JSON → push to GitHub → done

## Quick Start (5 Minutes)

### 1. Edit Your Content

Open `src/content.json` and fill in:

```json
{
  "name": "Your Name",
  "title": "AI Consultant",
  "bio": "Your professional summary...",
  "contact": {
    "email": "your@email.com",
    "social": {
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourprofile",
      "twitter": "https://twitter.com/yourprofile"
    }
  }
}
```

### 2. Generate Professional Content with Ollama

See `OLLAMA_PROMPTS.md` for 7 targeted prompts to generate:
- Professional bio
- Service descriptions
- Project descriptions

**Quick example:**
```bash
ollama run mistral
# Paste a prompt from OLLAMA_PROMPTS.md
# Copy response → paste into content.json
```

### 3. Test Locally

```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### 4. Deploy to GitHub

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

### 5. Enable GitHub Pages

1. Go to **Settings → Pages**
2. Set Source to `Deploy from a branch`
3. Select `main` branch
4. Save

Your portfolio is live! 🎉

## Project Structure

```
consulting/
├── README.md                 ← You are here
├── src/
│   └── content.json         ← EDIT THIS - your portfolio data
├── OLLAMA_PROMPTS.md        ← Content generation guide
├── START_HERE.md            ← Getting started guide
├── SETUP_GUIDE.md           ← Detailed setup & customization
├── QUICK_REFERENCE.md       ← Common tasks & commands
└── .gitignore
```

## Using content.json

### Required Fields

```json
{
  "name": "Your Name",
  "title": "Your Job Title",
  "bio": "Your professional summary",
  "contact": {
    "email": "your@email.com"
  }
}
```

### Optional Fields

```json
{
  "headline": "Catchy description",
  "services": [
    {
      "title": "Service Name",
      "description": "What you offer"
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "description": "What you built",
      "link": "https://example.com"
    }
  ],
  "contact": {
    "callToAction": "Let's work together!",
    "email": "you@example.com",
    "social": {
      "linkedin": "https://linkedin.com/in/you",
      "github": "https://github.com/you",
      "twitter": "https://twitter.com/you"
    }
  }
}
```

## Generate Content with Ollama

See [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md) for detailed instructions.

**Setup:**
```bash
# Download from https://ollama.com
ollama serve              # Terminal 1
ollama pull mistral       # Terminal 2
ollama run mistral        # Terminal 3 - Copy prompts here
```

**Workflow:**
1. Copy a prompt from OLLAMA_PROMPTS.md
2. Paste into Ollama chat
3. Copy response
4. Paste into content.json
5. Refresh browser

## Documentation

- **[START_HERE.md](START_HERE.md)** - Getting started guide
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Common tasks
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete walkthrough
- **[OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md)** - Content generation prompts

## File Explanations

| File | Purpose |
|------|---------|
| `content.json` | All your portfolio content |
| `OLLAMA_PROMPTS.md` | Prompts for generating professional copy |
| `START_HERE.md` | Getting started guide |
| `SETUP_GUIDE.md` | Detailed setup & deployment |
| `QUICK_REFERENCE.md` | Quick command reference |
| `README.md` | This file |

## For Others (Forkable Distribution)

This repo is designed to be forked and customized. Anyone can:

1. **Fork this repo**
2. **Edit `src/content.json`** with their information
3. **Deploy to GitHub Pages** (or their own hosting)
4. **Have a live portfolio** in minutes

No technical expertise required beyond basic text editing.

## Building a Custom Portfolio Website

This currently holds documentation and content structure. To **build an actual website**, you can:

- **Option 1:** Use the original Simplefolio template (static HTML/CSS/JS)
- **Option 2:** Build your own custom website (React, Vue, plain HTML, etc.)
- **Option 3:** Use a portfolio builder (Webflow, Notion, etc.)

Choose based on your technical level and needs.

## Support

- **Can't launch locally?** See QUICK_REFERENCE.md → "Troubleshooting"
- **Questions about deployment?** See SETUP_GUIDE.md
- **Want to generate content?** See OLLAMA_PROMPTS.md
- **New to all this?** Start with START_HERE.md

## License

This content structure and documentation are open source. Use freely, modify, and share.

---

**Next Step:** Read [START_HERE.md](START_HERE.md) 🚀
