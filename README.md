# 🚀 AI Image Enhancer

A modern, responsive web application for AI-powered image enhancement. Upload your images and get professional-quality results instantly using cutting-edge AI technology.

**🌐 Live Demo:** [https://ai-image-enhancer-phi.vercel.app/](https://ai-image-enhancer-phi.vercel.app/)

---

## ✨ Features

- 🎨 **AI-Powered Enhancement** - Upscale, denoise, and restore images with advanced AI
- ⚡ **Instant Processing** - Fast image enhancement with real-time progress tracking
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎭 **Interactive Comparison** - Drag slider to compare original vs enhanced images
- 🔒 **Privacy First** - Secure image processing with instant deletion
- 🎯 **Modern UI/UX** - Clean, minimalist design with smooth animations

---

## 🛠️ Tech Stack

### **Frontend Framework & Build Tools**
- ⚛️ **React 19.0** - Latest React with modern hooks and features
- ⚡ **Vite 6.2** - Lightning-fast build tool and dev server
- 📦 **ESLint** - Code quality and linting

### **Styling & UI**
- 🎨 **Tailwind CSS 4.1** - Utility-first CSS framework
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🎪 **GSAP** - Advanced animation library
- 🎯 **Lucide React** - Beautiful icon library
- 🧩 **Class Variance Authority** - Component variant management
- 🔗 **Tailwind Merge** - Intelligent Tailwind class merging

### **3D Graphics & Visual Effects**
- 🎬 **Three.js** - 3D graphics library
- 🌟 **React Three Fiber** - React renderer for Three.js
- ✨ **@react-three/drei** - Useful helpers for React Three Fiber
- 📐 **Maath** - Math utilities for 3D graphics

### **API & Data Fetching**
- 🌐 **Axios** - HTTP client for API requests
- 🔄 **Custom API Service** - Centralized API management

### **UI Components**
- 🎴 **Custom UI Components** - Button, Card, Badge, Slider
- 📱 **Responsive Layout** - Header, Footer, Sections

### **Deployment & CI/CD**
- 🚀 **Vercel** - Hosting and automatic deployments
- 🔄 **GitHub Actions** - CI/CD pipeline
- 🔐 **Environment Variables** - Secure configuration management

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Header, Footer
│   └── sections/        # Hero, Features, Pricing, Blog, etc.
├── services/
│   └── api.ts          # API service layer
├── utils/
│   └── constants.ts    # Application constants
├── lib/
│   └── enhanceImageAPI.jsx  # Image enhancement logic
└── App.jsx             # Main application component
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GAuravJaiswal/AI-Image-Enhancer.git
   cd AI-Image-Enhancer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
   
   Add your environment variables:
   ```env
   VITE_API_BASE_URL=https://techhk.aoscdn.com
   VITE_API_KEY=your_api_key_here
   VITE_MAX_RETRIES=20
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically on every push

**Live URL:** [https://ai-image-enhancer-phi.vercel.app/](https://ai-image-enhancer-phi.vercel.app/)

### Environment Variables

Add these in Vercel dashboard:
- `VITE_API_BASE_URL`
- `VITE_API_KEY`
- `VITE_MAX_RETRIES`

---

## 🎯 Key Features Implementation

### Image Upload
- Drag & drop support
- File validation (JPG, PNG, WebP up to 5MB)
- Real-time preview

### Image Enhancement
- AI-powered upscaling
- Progress tracking
- Error handling

### Comparison View
- Interactive slider
- Before/After comparison
- Download enhanced image

### Responsive Design
- Mobile-first approach
- Breakpoint optimization
- Touch-friendly interactions

---

## 📚 Documentation

- [CI/CD Setup Guide](./CI-CD-SETUP.md)
- [Deployment Guide](./DEPLOYMENT-GUIDE.md)
- [Project Structure](./PROJECT-STRUCTURE.md)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

ISC License

---

## 👨‍💻 Author

**Gaurav Jaiswal**

- GitHub: [@GAuravJaiswaI](https://github.com/GAuravJaiswaI)
- LinkedIn: [gaurav005](https://linkedin.com/in/gaurav005)
- Twitter: [@GauravJ85182753](https://x.com/@GauravJ85182753)

---

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

---

**⭐ If you like this project, give it a star on GitHub!**
