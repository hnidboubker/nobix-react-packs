# Frontend

A modern React application built with Create React App, TypeScript, and Tailwind CSS 4.3.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Opens [http://localhost:3000](http://localhost:3000) in the browser.

### Build

```bash
npm run build
```

Builds the app for production.

### Test

```bash
npm test
```

Runs the test suite.

## 📁 Project Structure

```
frontend/
├── public/           # Static assets
├── src/
│  ├── components/    # React components
│  │  ├── common/     # Reusable UI components
│  │  └── layout/     # Layout components (Header, Footer, etc.)
│  ├── pages/         # Page components
│  ├── hooks/         # Custom React hooks
│  ├── utils/         # Utility functions
│  ├── types/         # TypeScript type definitions
│  ├── styles/        # Global styles (Tailwind CSS)
│  ├── constants/     # Application constants
│  ├── App.tsx        # Main App component
│  └── index.tsx      # Entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠️ Technologies

- **React** 19.3.0 - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** 4.3 - Utility-first CSS framework
- **React Scripts** - Build tooling

## 📝 Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from CRA (⚠️ irreversible)

## 🎨 Styling

This project uses Tailwind CSS 4.3 for styling. All components are styled with utility classes.

### Global Styles

Global styles are defined in `src/styles/globals.css`.

### Component Styles

Components use Tailwind’s utility classes directly in the JSX.

## 🚀 Getting Started with Development

1. Create a new page in `src/pages/`
2. Create reusable components in `src/components/common/`
3. Use layout components from `src/components/layout/`
4. Export and import as needed

## 📦 Dependencies

Check `package.json` for the complete list of dependencies.

## 📄 License

© 2026 Frontend App
