# Robotics Club Website

A modern, animated website for the Robotics Club built with React, TypeScript, and Vite. This sleek black and white themed website showcases club projects, team members, achievements, and upcoming events with smooth animations and responsive design.

## 🚀 Features

- **Modern Design**: Clean black and white theme with smooth transitions
- **Animated UI**: Built with Framer Motion for engaging user interactions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Pages**: Home, Projects, Team, Announcements, Resources, Past Teams, Gallery
- **Project Showcase**: Filterable project gallery with categories and years
- **Loading Animation**: Professional loading screen for enhanced user experience
- **Interactive Navigation**: Dynamic navbar with scroll effects and mobile menu
- **Component-Based Architecture**: Well-organized, reusable React components

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 7.0.6
- **Styling**: Tailwind CSS 3.4.1
- **Routing**: React Router DOM 7.7.1
- **Animations**: Framer Motion 12.23.9
- **Icons**: Lucide React 0.526.0
- **Development**: ESLint, PostCSS, Autoprefixer

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Robotics-Society.git
   cd Robotics-Society
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or if using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website.

## 📖 Usage

### Development

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Run linting**: `npm run lint`

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   └── Navbar.tsx
├── pages/              # Page components
│   ├── Announcements.tsx
│   ├── Gallery.tsx
│   ├── Home.tsx
│   ├── PastTeams.tsx
│   ├── Projects.tsx
│   ├── Resources.tsx
│   └── Team.tsx
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── App.css            # Global styles
└── index.css          # Base styles
```

### Customization

- **Theme**: Modify Tailwind CSS configuration in `tailwind.config.js`
- **Animations**: Adjust Framer Motion animations in component files
- **Content**: Update page content in respective files under `src/pages/`
- **Navigation**: Modify navbar items in `src/components/Navbar.tsx`

## 🔧 Configuration

### Build Configuration

The project uses Vite as the build tool. Configuration is available in:
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
VITE_API_URL=your-api-url
VITE_APP_TITLE=Robotics Club
```

## 🧪 Testing

To run the linting and type checking:

```bash
npm run lint
```

For production build testing:

```bash
npm run build
npm run preview
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Design System

### Color Palette
- **Primary**: Black (#000000)
- **Secondary**: White (#FFFFFF)
- **Accent**: Gray variations for UI elements

### Typography
- **Headings**: Bold, large-scale typography
- **Body**: Clean, readable sans-serif fonts
- **Code**: Monospace font for technical content

### Animations
- **Page Transitions**: Smooth fade and slide effects
- **Hover States**: Interactive element animations
- **Loading**: Professional loading screen with animated elements

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Deploy to Static Hosting

The built application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting

### Example Netlify Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use descriptive component and variable names
- Maintain consistent code formatting
- Test on multiple screen sizes
- Ensure accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Fast build tool
- [React](https://reactjs.org/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
---

⭐ **Star this repository if it helped you build something amazing!**