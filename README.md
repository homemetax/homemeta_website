# HomeMetaX Personal Website

A professional personal brand website showcasing your vision, expertise, and projects in the crypto and Web3 space.

## 🎨 Color Palette

The website uses a dark theme color palette derived from your pixel art logo:

- **Deep Black**: `#0d0d15` - Main background
- **Dark Navy**: `#1a1a2e` - Secondary background
- **Mint Green**: `#A8E6CF` - Primary accent color
- **Tan/Beige**: `#D4A574` - Secondary accent
- **Brown**: `#8B6F47` - Tertiary accent

See `COLOR_PALETTE.md` for the complete palette documentation.

## 🚀 Getting Started

### Progressive Enhancement Architecture

This website is built with **progressive enhancement** in mind:
- **Base HTML/CSS**: All content is in `public/index.html` and works **without JavaScript**
- **React Enhancements**: React only loads for interactive parts (Projects tabs and Contact form)
- **Graceful Degradation**: If JavaScript is disabled, users still see all content and can use a fallback form

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note**: The website is fully functional even with JavaScript disabled! Try disabling JS in your browser to see the static version.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment. The HTML works without JavaScript, and React enhances only the interactive components.

## 📁 Project Structure

```
personal website/
├── public/
│   ├── index.html          # Complete HTML with all content (works without JS)
│   └── styles.css          # All CSS styles combined
├── src/
│   ├── enhancements/       # React components for interactive parts only
│   │   ├── ProjectsTabs.js  # Tab functionality for Projects section
│   │   └── ContactForm.js  # Form handling for Contact section
│   └── index.js            # Entry point - only enhances interactive parts
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

### Key Architecture Points

1. **`public/index.html`**: Contains all website content in plain HTML. Works perfectly without JavaScript.
2. **`public/styles.css`**: All styles in one file for easy loading.
3. **`src/enhancements/`**: React components only for interactive features (tabs, form).
4. **`src/index.js`**: Only loads React to enhance specific DOM elements, doesn't render the entire page.

## 🎓 Learning Resources

The code includes extensive comments explaining:
- React concepts (components, hooks, state)
- CSS techniques (flexbox, grid, animations)
- Web development best practices
- Component structure and organization

## 🔧 Customization

### Updating Content

- **Hero Section**: Edit `src/components/Hero.js`
- **Vision**: Edit `src/components/Vision.js`
- **Expertise**: Edit the `expertiseAreas` array in `src/components/Expertise.js`
- **Projects**: Edit the `projects` array in `src/components/Projects.js`
- **Social Links**: Edit the `socialLinks` array in `src/components/Contact.js`

### Changing Colors

All colors are defined in the component CSS files. Search for color codes (like `#A8E6CF`) and replace them with your preferred colors.

### Modifying the Logo

Edit the SVG in `src/components/Logo.js` to customize your pixel art logo.

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚢 Deployment

You can deploy this website to:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `build` folder
- **GitHub Pages**: Use the `gh-pages` package
- Any static hosting service

## 📝 License

This project is private and personal.

## 🙏 Acknowledgments

Built with React, HTML5, and CSS3.

