# 🎓 Research Portfolio Template

<div align="center">

![Research Portfolio Template](https://img.shields.io/badge/Template-Research%20Portfolio-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-Custom%20Attribution-orange?style=for-the-badge)

**A sophisticated, academic-focused portfolio template designed specifically for researchers, PhD students, and academics.**

[📖 Documentation](https://github.com/codechitti216/TheDailyPush) • [🐛 Report Issues](https://github.com/codechitti216/TheDailyPush/issues) • [💬 Discussions](https://github.com/codechitti216/TheDailyPush/discussions)

</div>



**Template Design by [Surya GS Chitti](https://github.com/codechitti216)**

---

## ✨ Features

### 🏗️ **Architecture**
- **React 18** with modern functional components
- **TailwindCSS 4.x** for responsive, utility-first styling
- **Vite** for lightning-fast development and builds
- **React Router** for seamless single-page navigation
- **RadixUI** components for accessible, polished UI elements

### 📚 **Academic-Focused Design**
- **Research Garden** - Document your learning journey and research notes
- **Project Showcase** - Highlight your academic and technical projects
- **Markdown Support** - Write content in Markdown with math equations (KaTeX)
- **Responsive Design** - Looks great on desktop, tablet, and mobile
- **Academic Color Scheme** - Professional, clean, and accessible

### 🔧 **Modern Development**
- **TypeScript Ready** (easily configurable)
- **ESLint** configured for code quality
- **GitHub Pages** deployment ready
- **Supabase** integration available for dynamic content
- **Component Library** with 20+ reusable UI components

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16.x or higher
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/codechitti216/TheDailyPush.git

# Navigate to the project directory
cd TheDailyPush

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Your portfolio will be available at `http://localhost:5173`

### 🌐 Deploy Your Own Live Demo

```bash
# For GitHub Pages deployment
npm run deploy

# Your live demo will be at:
# https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

---

## 📁 Project Structure

```
research-portfolio-template/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ui/             # UI component library (buttons, cards, etc.)
│   │   ├── Layout.jsx      # Main layout wrapper
│   │   └── ...
│   ├── pages/              # Route-based page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Garden.jsx      # Research notes
│   │   └── ...
│   ├── lib/                # Utility functions and configurations
│   └── hooks/              # Custom React hooks
├── content/                # Markdown content files
│   ├── projects/           # Project documentation
│   ├── garden/             # Research notes and learning materials
│   └── templates/          # Content templates
├── public/                 # Static assets
└── ...
```

---

## 🎨 Customization Guide

### 1. **Personal Information**
Update the following files with your information:
- `src/pages/Home.jsx` - Hero section, bio, and contact links
- `src/pages/Contact.jsx` - Contact information and social links
- `src/components/Layout.jsx` - Navigation and footer
- `index.html` - Page title and meta tags

### 2. **Content Creation**
- **Projects**: Add Markdown files to `content/projects/`
- **Research Notes**: Add Markdown files to `content/garden/`
- **Assets**: Place images in `public/assets/`

### 3. **Styling**
- Modify `tailwind.config.js` for theme customization
- Update CSS variables in `src/index.css`
- Customize components in `src/components/ui/`

### 4. **Advanced Features**
- **Database Integration**: Uncomment Supabase configuration in `src/lib/supabase.js`
- **Authentication**: Enable the Inner Circle feature for private content
- **Analytics**: Add your analytics code to `index.html`

---

## 📝 Content Management

### Project Structure
```markdown
---
title: "Your Project Title"
date: "2025-01-20"
tags: ["Research", "ML", "Academic"]
status: "completed"
kind: "project"
published: true
---

# Your Project Content Here
```

### Research Notes Structure
```markdown
---
title: "Research Topic"
date: "2025-01-20"
tags: ["Learning", "Research"]
status: "ongoing"
kind: "learning"
published: true
---

# Your Research Notes Here
```

---

## 🌐 Deployment

### GitHub Pages (Recommended)
```bash
# Build and deploy to GitHub Pages
npm run deploy
```

After deployment, your live demo will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

**Note:** Update the README badge and links once you deploy your live demo.

### Other Platforms
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **Custom Server**: Upload the `dist/` folder contents

---

## 🛠️ Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run deploy       # Deploy to GitHub Pages
npm run validate     # Validate content structure
```

---

## 🎯 Template Philosophy

This template is designed with the academic community in mind:

- **Focus on Content**: Clean, distraction-free design that puts your research first
- **Academic Standards**: Professional presentation suitable for academic institutions
- **Researcher Workflow**: Built-in tools for documenting learning and research progress
- **Long-term Maintainability**: Modern tech stack that will age well
- **Community Driven**: Open to contributions and improvements

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Bug Reports**: Open an issue with detailed reproduction steps
2. **Feature Requests**: Suggest new features through issues
3. **Pull Requests**: Submit improvements with clear descriptions
4. **Documentation**: Help improve this README and guides

### Development Guidelines
- Follow the existing code style
- Test thoroughly on multiple devices
- Maintain backward compatibility
- Update documentation when needed

---

## 📄 License & Attribution

This template is provided under a **Custom Attribution License**.

### ✅ **You Can:**
- Use for personal academic portfolios
- Modify content, styling, and functionality
- Deploy commercially for academic purposes
- Contribute improvements back to the community

### ❌ **You Must:**
- **Keep attribution links** in the footer
- **Preserve copyright notices** in code
- **Maintain template credits** visibly

**Full license details**: [LICENSE.md](LICENSE.md)

---

## 🆘 Support & Community

### Getting Help
- 📖 **Documentation**: Check this README and code comments
- 🐛 **Issues**: [GitHub Issues](https://github.com/codechitti216/TheDailyPush/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/codechitti216/TheDailyPush/discussions)

### Template Author
**Surya GS Chitti**  
🎓 Machine Perception Engineer | Mathematics  
📧 [suryachitti216@gmail.com](mailto:suryachitti216@gmail.com)  
🐙 [@codechitti216](https://github.com/codechitti216)  
💼 [LinkedIn](https://linkedin.com/in/surya-g-s-chitti)

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first CSS approach
- **RadixUI** for accessible component primitives
- **Academic Community** for inspiration and feedback

---

## 🔮 Roadmap

- [ ] **TypeScript Migration** - Full TypeScript support
- [ ] **CMS Integration** - Headless CMS options
- [ ] **Publication Tools** - Export to academic formats
- [ ] **Collaboration Features** - Multi-author support
- [ ] **Analytics Dashboard** - Built-in analytics
- [ ] **Mobile App** - React Native companion

---

**⭐ If this template helped you, please star the repository and share it with fellow researchers!**

*Built with ❤️ for the academic and research community.*