# Student Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized performance
- 🎯 Interactive skills showcase with filtering
- 📂 Project gallery with detailed modals
- 📧 Contact form with validation
- 🔍 SEO optimized
- ♿ Accessibility compliant (WCAG 2.1 AA)

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd student-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect it's a Vite project and deploy it

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Personal story and education
- `src/components/Skills.tsx` - Your skills and proficiency levels
- `src/components/Projects.tsx` - Your projects and achievements
- `src/components/Contact.tsx` - Contact information and social links

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind utility classes

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update the navigation in `src/components/Header.tsx`

## Performance

- ⚡ Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- 📦 Optimized bundle size with code splitting
- 🖼️ Lazy loading for images
- 🎨 CSS optimization with Tailwind's purge

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions!

- Email: john.smith@email.com
- LinkedIn: [linkedin.com/in/johnsmith](https://linkedin.com/in/johnsmith)
- GitHub: [github.com/johnsmith](https://github.com/johnsmith)