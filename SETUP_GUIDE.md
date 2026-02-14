# AI Consultant Portfolio - Complete Setup Guide

This is a redistributable, GitHub Pages-hosted portfolio for AI consultants. Built on Simplefolio with dynamic content rendering from a single JSON file.

## 🎯 What This Is

- **Portfolio Template** for AI consultants/practitioners
- **Zero-Cost Hosting** via GitHub Pages
- **No Build Process** - just edit JSON and push to GitHub
- **Forkable & Customizable** - anyone can use this as a template
- **Fully Dynamic** - content rendered from `content.json` file

## ⚡ How It Works

```
content.json (your data)
      ↓
   render.js (reads JSON)
      ↓
  index.html (displays it)
      ↓
  Your Live Portfolio 🚀
```

**Key Feature:** Edit one JSON file, push to GitHub, site updates instantly. No HTML editing needed.

---

## 📋 Project Structure

```
your-portfolio/
├── content.json          ← Edit this file to update content
├── index.html            ← Modified Simplefolio template
├── render.js             ← Dynamic rendering engine
├── styles.scss           ← Styling (don't edit unless customizing CSS)
├── assets/              
│   ├── profile.jpg       ← Your profile photo
│   ├── project.jpg       ← Project screenshot(s)
│   ├── resume.pdf        ← Your resume
│   └── favicon.png
├── README.md             ← Original Simplefolio README
├── OLLAMA_PROMPTS.md     ← Guide to generate content with Ollama
└── SETUP_GUIDE.md        ← This file
```

---

## 🚀 Quick Start (5 minutes)

### For Your Own Portfolio

1. **Clone this repo:**
   ```bash
   git clone https://github.com/yourusername/simplefolio.git
   cd simplefolio
   ```

2. **Open `content.json` and edit:**
   - Your name, title, bio
   - Your contact email
   - Social links
   - Project information
   - Service offerings

3. **Replace images:**
   - `assets/profile.jpg` → Your headshot
   - `assets/project.jpg` → Your project screenshots
   - `assets/resume.pdf` → Your resume

4. **Test locally:**
   ```bash
   # Simple HTTP server (Python 3)
   python -m http.server 8000
   # or Python 2
   python -m SimpleHTTPServer 8000
   ```
   Then visit `http://localhost:8000`

5. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated portfolio content"
   git push origin main
   ```

### For GitHub Pages Hosting

1. **Fork or use this as a template**

2. **Rename repo to:** `yourusername.github.io`

3. **Settings → Pages:**
   - Source: `Deploy from a branch`
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Save

4. **Wait 1-2 minutes** and visit: `https://yourusername.github.io`

---

## ✏️ Customizing Content

### 1. Edit `content.json`

This single file controls all your portfolio content:

```json
{
  "name": "Jane Doe",
  "title": "AI Consultant",
  "headline": "Transforming Businesses With AI",
  "bio": "I help companies implement machine learning solutions...",
  "profileImage": "assets/profile.jpg",
  "resume": "assets/resume.pdf",
  "services": [
    {
      "title": "AI Strategy",
      "description": "Assess your needs and build a roadmap..."
    }
  ],
  "projects": [
    {
      "title": "Customer Chatbot",
      "description": "Built an LLM-powered support bot that...",
      "image": "assets/project.jpg",
      "liveLink": "https://example.com",
      "sourceCode": "https://github.com/example/project"
    }
  ],
  "contact": {
    "callToAction": "Let's work together!",
    "email": "jane@example.com",
    "social": {
      "twitter": "https://twitter.com/jane",
      "linkedin": "https://linkedin.com/in/jane",
      "github": "https://github.com/jane"
    }
  }
}
```

### 2. Generate Content with Ollama

See [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md) for detailed prompts to generate professional content locally.

**Quick example:**
```bash
ollama run mistral
# Then paste a prompt and get back content to copy into content.json
```

### 3. Replace Images

All images are in `assets/`:
- **profile.jpg** (300x300) - Your headshot
- **project.jpg** - Screenshots of your work
- **resume.pdf** - Your resume (for CV download link)

### 4. Update CSS (Optional)

If you want to customize styling:
- `src/sass/abstracts/_variables.scss` - Colors, fonts, spacing
- `src/sass/components/_buttons.scss` - Button styling
- `src/styles.scss` - Main stylesheet

---

## 🤖 Using Ollama for Content

Ollama lets you run LLMs locally to generate professional portfolio content.

### Install Ollama

```bash
# Download from https://ollama.com
ollama serve  # In one terminal

# In another terminal
ollama pull mistral  # Download a model (or neural-chat, llama2, etc.)
ollama run mistral   # Start chatting
```

### Run a Content Prompt

See [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md) for 7 detailed prompts to generate:
- Professional bio
- Service descriptions
- Project descriptions
- Call-to-action copy

**Workflow:**
1. Run `ollama run mistral`
2. Copy a prompt from OLLAMA_PROMPTS.md
3. Paste response into content.json
4. Refresh browser to see changes

---

## 📱 Testing

### Local Testing

```bash
# Navigate to your portfolio directory
cd simplefolio

# Start a local server
python -m http.server 8000

# Visit http://localhost:8000
# Test on mobile using browser DevTools (F12 → Toggle device toolbar)
```

### Check Your Work

- [ ] Name and title display correctly in hero
- [ ] Bio and services show in About section
- [ ] Projects display with correct images and links
- [ ] Contact email link works (`mailto:your@email.com`)
- [ ] Social media links in footer work
- [ ] Responsive on mobile (check with DevTools)
- [ ] Images load correctly

---

## 🚀 Deployment to GitHub Pages

### Option 1: Quickest (If repo already created)

```bash
# Make sure you're in the repo directory
git add .
git commit -m "Update portfolio"
git push origin main

# Then go to Settings → Pages and ensure it's set to deploy from main branch
```

Wait 1-2 minutes and your site will be live at `https://yourusername.github.io`

### Option 2: From Scratch

```bash
# Create new repo on GitHub called: yourusername.github.io

# Clone it locally
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy portfolio files into it
# (or unzip simplefolio here)

# Push
git add .
git commit -m "Initial portfolio"
git push origin main

# GitHub automatically detects .github.io repo and enables Pages
# Visit https://yourusername.github.io
```

### Troubleshooting Deployment

If your site doesn't show up:

1. **Check repo name:** Must be `yourusername.github.io` (exactly)
2. **Check Settings → Pages:** 
   - Source should be `Deploy from a branch`
   - Branch should be `main` (or `master`)
3. **Wait 2-3 minutes:** GitHub takes time to build
4. **Check for errors:** Settings → Pages → scroll down for build logs
5. **Clear browser cache:** Hard refresh with `Ctrl+Shift+R`

---

## 📋 Making Updates

Once deployed:

1. **Edit content:**
   ```bash
   # Edit content.json in your text editor or on github.com
   # Change bio, projects, contact info, etc.
   ```

2. **Push changes:**
   ```bash
   git add content.json
   git commit -m "Updated portfolio with new project"
   git push origin main
   ```

3. **Live in 1-2 minutes** - no rebuild needed!

### Edit on GitHub.com Directly

You don't even need the terminal:

1. Go to `https://github.com/yourusername/yourusername.github.io`
2. Click on `content.json`
3. Click the edit button (pencil icon)
4. Make changes
5. Click "Commit changes"
6. Done! Site updates in 1-2 minutes

---

## 👥 For Classmates / Forkable Distribution

### How Someone Can Use This Template

1. **Go to your repo:** `github.com/yourusername/simplefolio` (or .github.io)

2. **Click "Fork"** (top right)

3. **Rename their fork:** Settings → General → Rename to `theirname.github.io`

4. **Edit `content.json`** with their information

5. **Replace images** in `assets/`

6. **Push to GitHub**

7. **Their portfolio is live at:** `https://theirname.github.io`

**That's it!** No build tools, no complicated setup. Just edit JSON and push.

---

## 📁 File Explanations

| File | Purpose |
|------|---------|
| `content.json` | All your portfolio content (edit this) |
| `render.js` | Reads `content.json` and populates HTML |
| `index.html` | Simplefolio template with JS placeholders |
| `styles.scss` | All styling (compiled to CSS) |
| `assets/` | Images, PDFs, favicon |
| `OLLAMA_PROMPTS.md` | Guide to generate content with Ollama |

---

## 🎨 Customization Ideas

### Change Colors
Edit `src/sass/abstracts/_variables.scss`:
```scss
$main-color: #00d4ff;      // Change primary color
$dark-blue-text: #333;     // Change text color
```

### Change Fonts
Edit `src/sass/abstracts/_variables.scss`:
```scss
$font-family-main: 'Roboto'; // Change main font
```

### Add More Projects
Add another object to the `projects` array in `content.json`:
```json
{
  "title": "New Project",
  "description": "...",
  "image": "assets/new-project.jpg",
  "liveLink": "...",
  "sourceCode": "..."
}
```

### Change Hero Section
Edit the hero background color in `src/sass/layout/_sections.scss`

---

## ✅ Checklist Before Going Live

- [ ] `content.json` completely filled out with your info
- [ ] Profile image (`assets/profile.jpg`) uploaded
- [ ] Project images (`assets/project*.jpg`) added
- [ ] Resume PDF (`assets/resume.pdf`) added
- [ ] Email in contact section is correct
- [ ] Social media links are correct (or removed)
- [ ] Tested locally and it all displays correctly
- [ ] All links work (internal anchors and external)
- [ ] Mobile responsive (tested in DevTools)
- [ ] GitHub Pages enabled in Settings
- [ ] Deployed and live on GitHub Pages
- [ ] DNS/custom domain set up (optional)

---

## 🔒 Security Notes

- **No sensitive data in JSON:** Don't put passwords or API keys in `content.json`
- **Email in public:** Your email will be visible (it's a contact email, that's the point!)
- **CORS:** File-based fetch works in browsers when served over HTTP/HTTPS

---

## 📚 Further Customization

### Want to modify the HTML structure?

Edit `src/index.html` and update `src/render.js` accordingly. The render.js file uses DOM selectors to find and update elements.

### Want to add a new section?

1. Add HTML to `src/index.html`
2. Add a new function to `src/render.js` that populates it
3. Call that function in `loadAndRenderContent()`
4. Add data to `content.json`

### Want to use a different theme?

The portfolio structure works with any Bootstrap 5+ template. Just:
1. Replace `index.html`
2. Update the selectors in `render.js` to match the new HTML structure
3. Update `content.json` structure if needed

---

## 🆘 Troubleshooting

### "Portfolio didn't load"
- Check browser console for errors (F12 → Console)
- Make sure `content.json` syntax is valid JSON
- Try `python -m json.tool content.json` to validate JSON

### "Images not showing"
- Check the `assets/` folder has the images
- Make sure filenames match exactly (case-sensitive on Linux/GitHub)
- Try with an absolute path: `https://yourusername.github.io/assets/image.jpg`

### "Content not updating"
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check that `content.json` was actually committed and pushed
- Give GitHub 1-2 minutes to rebuild

### "Render.js not running"
- Open the browser console (F12 → Console)
- Look for JavaScript errors
- Make sure `render.js` is in the same directory as `index.html`

---

## 📖 Original Simplefolio

This template is based on [Simplefolio](https://github.com/cobiwave/simplefolio) by Jacobo Martinez.

**Original features:**
- Scroll reveal animations
- Tilt effect on project images
- Responsive design
- Bootstrap v4.3 + Custom SCSS

**Our modifications:**
- Dynamic content from `content.json`
- Custom `render.js` to populate content
- No build process (works in browser)

---

## 🤝 Sharing Your Portfolio

Once it's live, share the URL:
- `https://yourusername.github.io`
- Include in your email signature
- LinkedIn, Twitter bios
- GitHub profile
- Resume/Cover letters

---

## 📝 License

Original Simplefolio template: [MIT License](https://github.com/cobiwave/simplefolio/blob/master/LICENSE.md)

This modified version maintains the same license.

---

## 🎓 Learning Resources

- **Ollama:** https://ollama.com (local LLMs)
- **GitHub Pages:** https://docs.github.com/en/pages
- **Simplefolio:** https://github.com/cobiwave/simplefolio
- **JSON Guide:** https://www.json.org/

---

**Questions?** Check the Troubleshooting section or review the code comments in `render.js`.

**Ready to build?** Start with step 1 of the Quick Start above! 🚀
