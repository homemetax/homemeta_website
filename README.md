# HomeMetaX Personal Website

A professional personal brand website showcasing expertise in crypto, Web3, and GameFi, built with modern React architecture and beautiful full-screen overlay navigation.

## 🎨 Design Features

- **Full-Screen Overlay Navigation**: Animated burger menu with stunning full-screen overlay
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile
- **Dark Theme**: Professional color palette with mint green accents
- **Smooth Animations**: Polished interactions throughout
- **Modern UI/UX**: Clean, professional design with pixel art branding

## 🎨 Color Palette

The website uses a cohesive dark theme color palette:

- **Dark Gray**: `#212121` - Main background
- **Dark Teal/Green**: `#1D382C` - Secondary background, cards
- **Dark Blue-Gray**: `#2a2a3e` - Borders, accents
- **Mint Green**: `#8DFFA4` - Primary accent color
- **Light Mint**: `#C8F4E0` - Hover states
- **Tan/Beige**: `#E9BE83` - Secondary accent
- **Brown**: `#8B6F47` - Tertiary accent

See `note/COLOR_PALETTE.md` for complete color documentation.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/homemetax/homemeta_website.git
cd homemeta_website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📁 Project Structure

```
personal website/
├── public/
│   ├── index.html              # HTML shell
│   └── assets/
│       └── Doginal-dog-9723.svg # Logo
├── src/
│   ├── App.js                  # Main app component
│   ├── App.css                 # App-level styles
│   ├── index.js                # React entry point
│   ├── index.css               # Global styles
│   └── components/             # All React components
│       ├── Header.js           # Full-screen overlay navigation
│       ├── Header.css
│       ├── Hero.js             # Hero section with intro
│       ├── Hero.css
│       ├── Vision.js           # Vision and mission
│       ├── Vision.css
│       ├── Newsletter.js       # Substack newsletter signup
│       ├── Newsletter.css
│       ├── Expertise.js        # Skills and experience
│       ├── Expertise.css
│       ├── Projects.js         # Projects and communities
│       ├── Projects.css
│       ├── Contact.js          # Contact form and social links
│       ├── Contact.css
│       ├── ContactForm.js      # Contact form component
│       ├── ContactForm.css
│       ├── Footer.js           # Footer with links
│       ├── Footer.css
│       ├── Logo.js             # Pixel art logo component
│       ├── Logo.css
│       ├── SocialButtons.js    # Floating social media buttons
│       ├── SocialButtons.css
│       ├── NavigationArrows.js # Floating navigation arrows
│       └── NavigationArrows.css
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎯 Key Features

### 1. Full-Screen Overlay Navigation
- Animated burger menu icon
- Full-screen overlay with staggered animations
- Colorful navigation sections
- Smooth transitions and hover effects

### 2. Component-Based Architecture
- Modular React components
- Clean separation of concerns
- Component-level CSS for maintainability
- Reusable and scalable structure

### 3. Sections
- **Hero**: Eye-catching introduction with tagline
- **Vision**: Mission and values
- **Newsletter**: Substack newsletter integration
- **Expertise**: Skills showcase with statistics
- **Projects**: Project portfolio
- **Contact**: Contact form and social media links
- **Footer**: Additional navigation and copyright

## 🔧 Customization

### Updating Content

#### Hero Section
Edit `src/components/Hero.js`:
```javascript
// Change your tagline, description, etc.
```

#### Vision
Edit `src/components/Vision.js` to update your mission statement.

#### Expertise
Edit the `expertiseAreas` array in `src/components/Expertise.js`:
```javascript
const expertiseAreas = [
  {
    icon: '🎮',
    title: 'Your Title',
    description: 'Your description'
  },
  // Add more...
];
```

#### Projects
Edit the `projects` array in `src/components/Projects.js`:
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    role: 'Your Role',
    // ...
  }
];
```

#### Social Links
Edit `src/components/Contact.js`:
```javascript
const socialLinks = [
  {
    name: 'Twitter',
    handle: '@yourhandle',
    url: 'https://twitter.com/yourhandle',
    // ...
  }
];
```

### Changing Colors

Colors are defined in component CSS files. Search for color codes (like `#8DFFA4`) and replace with your preferred colors. For consistency, use the colors from `note/COLOR_PALETTE.md`.

### Modifying the Logo

The logo is located at `public/assets/Doginal-dog-9723.svg`. Replace this file with your own logo (SVG format recommended).

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish directory: `build`
3. Drag and drop or connect GitHub

### GitHub Pages
```bash
npm install gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
npm run deploy
```

## 🛠️ Development

### Running Linter
```bash
npm run lint
```

### Running Tests
```bash
npm test
```

## 📚 Tech Stack

- **React 18**: Modern React with hooks
- **Create React App**: Build tooling
- **CSS3**: Component-level styling
- **Font Awesome**: Icon library
- **Google Fonts**: Work Sans & Open Sans

## 🎓 Code Quality

- ✅ Clean component architecture
- ✅ Comprehensive code comments
- ✅ Responsive design
- ✅ Optimized performance
- ✅ Accessibility considerations
- ✅ Error boundary for graceful error handling

## 📝 License

This project is private and personal.

## 🙏 Acknowledgments

Built with React, HTML5, and CSS3.  
Designed for the modern Web3 entrepreneur.

## 📞 Support

For questions or issues with this website, contact via the form on the website or through social media links.

---

**Made with ❤️ for the Web3 Community**
