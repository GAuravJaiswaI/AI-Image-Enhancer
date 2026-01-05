# 📁 Project Structure Guide

## 🎯 Interview-Safe Folder Structure

This project follows a **production-grade, scalable structure** that demonstrates best practices for React + Vite applications.

```
project-root/
├── .github/
│   └── workflows/
│       └── ci.yml                    # CI/CD Pipeline
├── public/
│   └── vite.svg                      # Public assets
├── src/
│   ├── assets/
│   │   └── images/                   # Image assets
│   ├── components/
│   │   ├── ui/                       # Reusable UI components
│   │   ├── common/                   # Common components
│   │   └── layout/                   # Layout components (Header, Footer)
│   ├── sections/                     # Page sections
│   ├── pages/                        # Page components
│   ├── hooks/                        # Custom React hooks
│   ├── services/                     # API services
│   │   └── api.ts                    # Axios instance & API calls
│   ├── utils/                        # Utility functions
│   │   └── constants.ts              # App constants
│   ├── lib/                          # Legacy library files
│   ├── styles/                       # Global styles
│   ├── routes/                       # Routing configuration
│   ├── App.tsx                       # Main App component
│   └── main.tsx                      # Entry point
├── .env.example                      # Environment variables template
├── .gitignore                        # Git ignore rules
├── index.html                        # HTML entry point
├── package.json                      # Dependencies
├── vite.config.js                    # Vite configuration
└── README.md                         # Project documentation
```

## 🎯 Why Interview-Safe?

### ✅ **services/** → API Logic Separation
- Centralized API configuration
- Reusable axios instance
- Easy to mock for testing
- Environment-based configuration

### ✅ **routes/** → Scalable Routing
- Organized route definitions
- Easy to add new pages
- Route guards and middleware ready

### ✅ **components/ui** → Reusable Design System
- Consistent UI components
- Easy to maintain
- Design system approach
- Reusable across projects

### ✅ **utils/** → Utility Functions
- Constants management
- Helper functions
- Type definitions
- Business logic separation

## 📂 Folder Details

### `.github/workflows/`
- **ci.yml**: GitHub Actions CI/CD pipeline
- Automatically builds and tests on push/PR
- Ensures code quality before deployment

### `src/services/`
- **api.ts**: Centralized API service
- Axios instance with interceptors
- Environment-based configuration
- Error handling

### `src/utils/`
- **constants.ts**: Application constants
- File size limits
- API endpoints
- Configuration values

### `src/components/`
- **ui/**: Reusable UI components (Button, Card, Badge)
- **layout/**: Layout components (Header, Footer)
- **sections/**: Page sections (Hero, Features, Pricing)

## 🔐 Environment Variables

### `.env.example` (Template)
```env
VITE_API_BASE_URL=https://techhk.aoscdn.com
VITE_API_KEY=your_api_key_here
VITE_MAX_RETRIES=20
VITE_APP_ENV=development
```

### `.env` (Local - DO NOT COMMIT)
```env
VITE_API_BASE_URL=https://techhk.aoscdn.com
VITE_API_KEY=wxfbyckwupscddy5a
VITE_MAX_RETRIES=20
VITE_APP_ENV=development
```

## 🚀 CI/CD Pipeline

### GitHub Actions Workflow
- **Trigger**: Push to main/master or PR
- **Steps**:
  1. Checkout code
  2. Setup Node.js
  3. Install dependencies
  4. Run linter
  5. Build project
  6. Verify build output

### Vercel Deployment
- **Automatic**: Deploys on push to main
- **Preview**: Creates preview URLs for PRs
- **Environment**: Separate env vars for prod/preview/dev

## 📝 Best Practices

### ✅ Code Organization
- Separation of concerns
- Reusable components
- Centralized API logic
- Environment-based config

### ✅ Security
- `.env` in `.gitignore`
- API keys in environment variables
- Secrets in GitHub/Vercel

### ✅ Scalability
- Modular structure
- Easy to add features
- Clear file organization
- TypeScript ready

## 🎓 Interview Talking Points

### "How did you structure your project?"
> "I organized the project with a scalable folder structure separating concerns: services for API logic, components/ui for reusable design system, and utils for constants. This makes the codebase maintainable and follows industry best practices."

### "How do you handle environment variables?"
> "I use Vite's environment variable system with VITE_ prefix. Local .env files are gitignored, and I maintain .env.example as a template. Production secrets are managed through Vercel's environment variables."

### "How do you ensure code quality?"
> "I've set up a CI/CD pipeline using GitHub Actions that runs on every push. It installs dependencies, runs linting, builds the project, and verifies the output. This ensures no broken code reaches production."

## ✅ Checklist

- [x] `.env` in `.gitignore`
- [x] `.env.example` committed
- [x] `VITE_` prefix used
- [x] CI pipeline configured
- [x] Services folder organized
- [x] Constants centralized
- [x] Build works locally
- [x] GitHub → Vercel connected

---

**This structure demonstrates production-ready practices and is interview-safe! 🚀**

