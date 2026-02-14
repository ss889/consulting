# 🚀 AI Consultant Portfolio - START HERE

This is your redistributable GitHub Pages portfolio for showcasing AI consulting work.

## 🎯 What You Have

✅ **Simplefolio template** - Professional, responsive design  
✅ **Dynamic rendering** - Content from `content.json` (edit JSON, site updates)  
✅ **Ollama integration** - Generate professional content locally  
✅ **Zero cost** - Works on GitHub Pages (free)  
✅ **No build process** - Works directly in browser  
✅ **Forkable** - Others can use this as a template  

## ⚡ The 5-Minute Quick Start

### Step 1: Edit Your Content
```bash
# Open content.json in any text editor
# Update these fields:
# - name: Your name
# - title: Your job title
# - bio: Your professional summary
# - contact.email: Your email
# - contact.social: Your social links
```

### Step 2: Add Your Images
Copy to `assets/` folder:
- `profile.jpg` - Your headshot
- `project.jpg` - Your work screenshots
- `resume.pdf` - Your CV

### Step 3: Test It
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### Step 4: Deploy
```bash
git add .
git commit -m "AI consultant portfolio"
git push origin main
```

### Step 5: Go Live
- Repo must be named: `yourusername.github.io`
- Enable Pages in Settings
- Visit: `https://yourusername.github.io` (wait 1-2 minutes)

**Done!** Your portfolio is live. 🎉

---

## 📖 Documentation Structure

Choose the guide that fits your need:

### **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** (⭐ Start here)
- Common tasks (edit content, add projects, deploy)
- Quick command reference
- Troubleshooting

### **[SETUP_GUIDE.md](SETUP_GUIDE.md)** (Complete walkthrough)
- Detailed setup instructions
- GitHub Pages deployment
- Customization options
- Security notes
- Full troubleshooting

### **[OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md)** (Generate content)
- 7 targeted prompts to generate professional copy with Ollama
- Bio, services, projects, call-to-action
- Step-by-step usage guide

---

## 🤖 Using Ollama for Content Generation

Ollama lets you run local LLMs to generate professional portfolio content.

### Quick Setup
```bash
# Download Ollama: https://ollama.com

# Terminal 1: Start Ollama
ollama serve

# Terminal 2: Get a model
ollama pull mistral

# Terminal 3: Chat
ollama run mistral
```

### Generate Content
1. Open [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md)
2. Copy a prompt into the Ollama chat
3. Get back generated content
4. Paste into `content.json`
5. Refresh browser to see changes

**Examples:**
- "Write a professional bio for an AI consultant"
- "Create 3 service offerings for AI consulting"
- "Describe a project implementing LLMs for customer support"

---

## 📁 Project Structure

```
your-portfolio/
├── 📄 content.json              ← EDIT THIS - all your content
├── 📄 index.html                ← Reusable template (do not edit)
├── 📄 render.js                 ← Dynamic content engine
├── 📁 assets/
│   ├── profile.jpg              ← Your headshot
│   ├── project.jpg              ← Project screenshots
│   ├── resume.pdf               ← Your CV
│   └── favicon.png
├── 📁 src/
│   ├── sass/                    ← Styling (optional to customize)
│   └── styles.scss              ← Compiled styles
│
├── 📘 README.md                 ← Original Simplefolio info
├── 📘 SETUP_GUIDE.md            ← Full setup & deployment guide
├── 📘 OLLAMA_PROMPTS.md         ← Content generation prompts
├── 📘 QUICK_REFERENCE.md        ← Common tasks & commands
└── 📘 START_HERE.md             ← This file
```

---

## 🎯 How It Works

```
You edit: content.json
          ↓
Browser loads: index.html
          ↓
JavaScript runs: render.js
          ↓
render.js reads: content.json
          ↓
Template populates: index.html
          ↓
You see: Your portfolio! 🎉
```

**Key advantage:** Edit JSON, push to GitHub, site updates in 1-2 minutes. No rebuilds, no complicated processes.

---

## ✏️ Typical Workflow

### Day 1: Initial Setup
1. Clone repo locally
2. Edit `content.json` with your info
3. Add your images to `assets/`
4. Test locally
5. Push to GitHub Pages
6. Share your URL!

### Day 2+: Updates
1. Think of new project to showcase
2. Edit `content.json` - add project details
3. Add project screenshot to `assets/`
4. Push to GitHub
5. Site updates automatically in 2 minutes

### Anytime: Polish Content
1. Run Ollama locally with a prompt
2. Generate professional copy
3. Paste into `content.json`
4. Push to GitHub
5. Done!

---

## 💡 What to Put in Your Portfolio

### About You
- **Bio:** 2-3 sentence summary of your expertise
  - "I help businesses implement AI solutions..."
  - "Specialist in LLMs and machine learning..."
  - "10+ years in data science and AI..."

### Services You Offer
- AI/ML Strategy Consulting
- LLM Integration & Deployment
- Custom Model Development
- AI Training & Workshops
- Data Pipeline Architecture
- MLOps & Model Monitoring

### Projects
Show 2-3 best examples:
- What you built
- Technologies used
- Business impact (saved $X, improved Y%, processed Z records)
- Links to live demo or source code (optional)

### Contact
- Email for inquiries
- Social links (LinkedIn, GitHub, Twitter)

---

## 🚀 Deployment Steps

### Option 1: Use Existing `.github.io` Repo
```bash
cd your-github.github.io
# Copy/unzip simplefolio files here
# Edit content, add images
git add .
git commit -m "Portfolio initialized"
git push origin main
# Visit https://username.github.io in 2 minutes
```

### Option 2: Create New `.github.io` Repo
```bash
# On GitHub.com:
# Create new repo: "yourusername.github.io"
# Clone it locally

git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy simplefolio files here
# Edit content, add images
git add .
git commit -m "Initial commit"
git push origin main

# GitHub automatically enables Pages
# Visit https://yourusername.github.io in 2 minutes
```

### Option 3: GitHub Settings
If deployed but not showing:
1. Go to Settings → Pages
2. Set "Source" to "Deploy from a branch"
3. Set "Branch" to `main` (or `master`)
4. Set "Folder" to `/ (root)`
5. Save
6. Wait 2-3 minutes

---

## ✅ Verification Checklist

Before sharing your portfolio:

- [ ] Site loads without errors (open browser console: F12)
- [ ] Your name and title display in the hero section
- [ ] Your profile image loads
- [ ] Bio/services display correctly
- [ ] All projects show with images and descriptions
- [ ] Email link works (`mailto:your@email.com`)
- [ ] Social media links go to YOUR profiles
- [ ] Mobile responsive (use DevTools: F12 → Toggle device)
- [ ] Resume PDF link works
- [ ] No broken images or 404 errors
- [ ] Site is live at `https://yourusername.github.io`

---

## 📚 File Guide

| File | What to Do |
|------|-----------|
| **content.json** | ✏️ EDIT - Your portfolio data |
| **assets/profile.jpg** | 📸 REPLACE - Your photo |
| **assets/project.jpg** | 📸 REPLACE - Your project screenshots |
| **assets/resume.pdf** | 📄 REPLACE - Your resume/CV |
| **sidebar** | ℹ️ READ - See guide files below |
| **QUICK_REFERENCE.md** | Read for common tasks |
| **SETUP_GUIDE.md** | Read for detailed walkthrough |
| **OLLAMA_PROMPTS.md** | Read for content generation |

---

## 🆘 Common Issues

**"My content isn't showing"**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Check `content.json` is valid JSON: `python -m json.tool content.json`

**"Images aren't loading"**
- Files must be in `assets/` folder
- Filenames must match exactly (case-sensitive on GitHub)
- Try clearing browser cache

**"Site not live after pushing"**
- Repo name must be `yourusername.github.io` exactly
- Wait 2-3 minutes for GitHub Pages to build
- Check Settings → Pages for any red error messages

**"Links broken"**
- Email should be: `mailto:your@email.com`
- Test all links locally before pushing
- Check for typos in URLs

**"Styling looks wrong"**
- Refresh with `Ctrl+Shift+R`
- Check if CSS files loaded in browser (F12 → Network tab)

For more troubleshooting, see [SETUP_GUIDE.md](SETUP_GUIDE.md).

---

## 🎓 Next Steps

1. **Now:** Read [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
2. **Then:** Edit `content.json` with your info
3. **Next:** Generate content using [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md)
4. **Then:** Add your images to `assets/`
5. **Next:** Test locally
6. **Finally:** Deploy to GitHub Pages

---

## 🎨 Customization

Want to make it yours beyond content? You can:
- **Change colors:** Edit `src/sass/abstracts/_variables.scss`
- **Change fonts:** Edit `src/sass/abstracts/_variables.scss`
- **Add sections:** Modify `index.html` and `render.js`
- **Custom CSS:** Edit `src/styles.scss`

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for details.

---

## 💬 Tips for Success

✨ **Use Ollama** to generate professional-sounding copy locally  
✨ **Test everything locally first** before pushing to GitHub  
✨ **Use git commits** to track changes: `git log`  
✨ **Keep content updated** - add new projects as you complete them  
✨ **Share your URL** - email signature, LinkedIn, etc.  
✨ **Iterate** - portfolios are living documents, update often  

---

## 📖 You Have All The Tools Needed

Your portfolio comes with:
1. ✅ Responsive template (Simplefolio)
2. ✅ Dynamic rendering system (render.js)
3. ✅ Content schema (content.json)
4. ✅ Ollama prompts for content generation
5. ✅ Full deployment guide
6. ✅ Troubleshooting help
7. ✅ Free hosting (GitHub Pages)
8. ✅ Custom domain ready (optional)

**You've got everything. Let's build! 🚀**

---

## 🔗 Quick Links

- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Common commands
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed walkthrough
- [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md) - Generate content
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Ollama](https://ollama.com) - Local LLMs

---

**Questions?** Troubleshooting? Check the relevant guide file above. You've got this! 💪
