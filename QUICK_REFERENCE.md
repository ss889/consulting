# Quick Reference - AI Consultant Portfolio

## 📝 What To Do Now

### 1. Edit Your Content
Open `content.json` and fill in:
- `name` - Your name
- `title` - Your job title (e.g., "AI Consultant")
- `headline` - Catchy description of what you do
- `bio` - Professional summary (2-3 sentences)
- `contact.email` - Your email address
- `contact.social` - Your social media links

### 2. Generate Better Content with Ollama

```bash
# Terminal 1: Start Ollama server
ollama serve

# Terminal 2: Run a model
ollama run mistral
```

Then use prompts from [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md) to generate:
- Professional bio
- Service descriptions
- Project descriptions

Copy-paste outputs into `content.json`.

### 3. Replace Your Images

Copy these files to `assets/`:
- `profile.jpg` - Your headshot (sq preferred)
- `project.jpg` - Screenshots of your work
- `resume.pdf` - Your CV

### 4. Test Locally

```bash
python -m http.server 8000
# Visit http://localhost:8000
```

### 5. Deploy to GitHub Pages

```bash
git add .
git commit -m "My AI consultant portfolio"
git push origin main
```

Visit: `https://yourusername.github.io`

---

## ⚡ Common Tasks

### Update Bio or Services
1. Edit `content.json` (any text editor)
2. Save
3. Push to GitHub: `git add . && git commit -m "message" && git push`
4. Wait 1-2 minutes
5. Refresh your site

### Add a New Project
Edit `content.json` and add to `projects` array:
```json
{
  "title": "Your Project Name",
  "description": "What you built and the impact",
  "image": "assets/project-name.jpg",
  "liveLink": "https://project-url.com",
  "sourceCode": "https://github.com/your-project"
}
```

### Change Colors
Edit `src/sass/abstracts/_variables.scss` and change:
```scss
$main-color: #ff0000;  // Change to your color
```

### Edit On GitHub (No Terminal)
1. Go to GitHub.com → your repo
2. Click `content.json`
3. Click the pencil icon (Edit)
4. Make changes
5. Click "Commit changes"
6. Done! Updates in 2 minutes

---

## 🚀 Deployment Checklist

Before going live:
- [ ] `content.json` filled with your details
- [ ] Images added to `assets/`
- [ ] Email address correct in `content.json`
- [ ] All links work (tested locally)
- [ ] Looks good on phone (browser DevTools)
- [ ] GitHub repo is `yourusername.github.io`
- [ ] Pages enabled in Settings → Pages

---

## 📂 Files You'll Edit

| File | Edit It? | Why |
|------|----------|-----|
| `content.json` | ✅ YES | Your portfolio data |
| `assets/*` | ✅ YES | Your images and resume |
| `src/styles.scss` | 🟡 MAYBE | Custom colors/fonts |
| `src/index.html` | ❌ NO | Template (render.js handles it) |
| `render.js` | ❌ NO | Already set up |

---

## 🎯 Success = This Works

✅ Can edit `content.json` and see changes after refresh  
✅ Images load correctly  
✅ Email link works (`mailto:your@email.com`)  
✅ Social links go to your profiles  
✅ Mobile responsive (looks good on phone)  
✅ Live on GitHub Pages at your URL  

---

## 💡 Pro Tips

- **Use Version Control:** `git add`, `git commit`, `git push` often
- **Test First:** Run locally before pushing (saves GitHub rebuild time)
- **Generate Content:** Use Ollama for professional-sounding copy
- **Iterate:** You can update anytime - just edit JSON and push
- **No Downtime:** Content updates happen in real-time (they're in JSON, not built)

---

## 🆘 Quick Fixes

**"Content not showing up?"**
- Hard refresh: `Ctrl+Shift+R`
- Check browser console for errors: `F12 → Console`
- Validate JSON: `python -m json.tool content.json`

**"Images broken?"**
- Make sure file names match exactly in `content.json`
- Files must be in `assets/` folder
- Check file size (images should be < 1MB)

**"Site not live?"**
- Check repo name is `yourusername.github.io` (exactly)
- Settings → Pages → ensure it's set to build from `main` branch
- Wait 2-3 minutes for GitHub to build
- Check for red X icon in Settings → Pages (build error)

---

## 📚 Full Guides

- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Complete setup & deployment
- [OLLAMA_PROMPTS.md](OLLAMA_PROMPTS.md) - Content generation prompts

---

**Ready to go?** Start with editing `content.json` and testing locally! 🚀
