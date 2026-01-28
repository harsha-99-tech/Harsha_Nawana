# Portfolio Website - Harsha Nawana

A modern, responsive portfolio website showcasing the work and skills of Harsha Nawana, a fullstack developer from Nikaweratiya, Sri Lanka. Built with React and featuring smooth animations, interactive project galleries, and a functional contact form.

🌐 **Live Site:** [https://harshanawana.pages.dev](https://harshanawana.pages.dev)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Project Sections](#project-sections)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Interactive Project Galleries**: Showcase projects with carousel navigation for Web, App, UI/UX, and Graphic Design categories
- **Contact Form**: Functional contact form integrated with EmailJS for direct email communication
- **Smooth Scrolling**: Seamless navigation between sections using react-scroll
- **Modern UI/UX**: Clean, professional design with engaging visual elements
- **Performance Optimized**: Built with React best practices for optimal performance

## 🛠 Technologies Used

### Core Technologies
- **React** (v18.3.1) - UI library
- **React DOM** (v18.3.1) - React rendering
- **React Scripts** (v5.0.1) - Build tooling

### Libraries & Tools
- **Framer Motion** (v11.2.6) - Animation library for smooth transitions
- **React Scroll** (v1.9.0) - Smooth scrolling navigation
- **React CountUp** (v6.5.3) - Animated number counting
- **EmailJS** (@emailjs/browser v4.3.3) - Email service integration
- **Appwrite** (v14.0.1) - Backend-as-a-Service (optional)

### Development Tools
- **ESLint** - Code linting
- **Web Vitals** (v2.1.4) - Performance monitoring

## 📁 Project Structure

```
Harsha_Nawana/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/              # Images, icons, and media files
│   ├── components/          # React components
│   │   ├── About/           # About section component
│   │   ├── Contact/         # Contact form component
│   │   ├── Footer/          # Footer component
│   │   ├── Header/          # Navigation header
│   │   ├── Hero/            # Hero/landing section
│   │   ├── Projects/        # Project showcase components
│   │   │   ├── ProjectA.jsx    # App projects
│   │   │   ├── ProjectG.jsx    # Graphic design projects
│   │   │   ├── ProjectU.jsx    # UI/UX projects
│   │   │   └── ProjectW.jsx    # Web projects
│   │   ├── Reasons/         # Why choose me section
│   │   └── Services/        # Services section
│   ├── data/                # Data files for projects and content
│   │   ├── aboutData.js
│   │   ├── appData.js
│   │   ├── graphicData.js
│   │   ├── uiData.js
│   │   └── webData.js
│   ├── App.js               # Main App component
│   ├── App.css              # Global app styles
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Installation

### Prerequisites

- **Node.js** (v14 or higher recommended)
- **npm** (v6 or higher) or **yarn**

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Harsha_Nawana
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure EmailJS** (Optional - for contact form)
   
   The contact form uses EmailJS. To set it up:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the values in `src/components/Contact/Contact.jsx`:
     ```javascript
     emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
       publicKey: "YOUR_PUBLIC_KEY",
     })
     ```

## 💻 Usage

### Development Mode

Start the development server:

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000) in your browser. The page will automatically reload when you make changes.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

## 📄 Project Sections

### 1. **Hero Section**
- Introduction and tagline
- Animated statistics (Websites, Apps, Graphic Designs)
- Call-to-action buttons
- Hero image with animations

### 2. **About Section**
Showcases four main service categories:
- **App Development**: React Native mobile applications
- **Web Development**: ReactJS single-page applications
- **UI/UX Design**: Figma-based interface design
- **Graphic Design**: Photoshop and Illustrator work

### 3. **Reasons Section**
Highlights qualifications and skills:
- BICT(HONS) Graduate
- Certified courses
- Project experience
- Software proficiency (Photoshop, Illustrator, MS Office, Figma)

### 4. **Projects Sections**
Four separate project galleries:
- **Web Projects**: Restaurant website, Portfolio, Sport Management Site
- **App Projects**: Mobile application showcases
- **UI/UX Projects**: Design portfolio
- **Graphic Design Projects**: Creative work gallery

Each project section includes:
- Project images
- Descriptions
- Technologies used
- Live project links
- Carousel navigation

### 5. **Contact Section**
- Contact information display
- Functional contact form
- Email integration via EmailJS
- Location and contact details

### 6. **Footer**
- Additional links and information
- Social media links (if applicable)

## ⚙️ Configuration

### Customizing Content

Update project data in the `src/data/` directory:
- `webData.js` - Web development projects
- `appData.js` - Mobile app projects
- `uiData.js` - UI/UX design projects
- `graphicData.js` - Graphic design projects
- `aboutData.js` - About section content

### Styling

Each component has its own CSS file in the component directory. Global styles are in:
- `src/index.css` - Global styles
- `src/App.css` - App-level styles

### Navigation

Navigation links are configured in `src/components/Header/Header.jsx` using react-scroll for smooth section navigation.

## 🚢 Deployment

### Deploy to Cloudflare Pages

The site is currently deployed on Cloudflare Pages. To deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your hosting service

### Other Deployment Options

- **Netlify**: Connect your repository or drag-and-drop the `build` folder
- **Vercel**: Connect your Git repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package or GitHub Actions

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Creates production build
- `npm test` - Launches test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🎨 Design Features

- Modern gradient backgrounds
- Smooth scroll animations
- Interactive hover effects
- Responsive mobile menu
- Animated counters
- Image carousels with transitions
- Professional color scheme

## 📧 Contact Information

- **Email**: harshanawana@gmail.com
- **Phone**: +9476-1646525 / +9472-5172343
- **Location**: Nikaweratiya, Sri Lanka

## 🔧 Troubleshooting

### Common Issues

1. **EmailJS not working**: Ensure you've configured the correct Service ID, Template ID, and Public Key in the Contact component.

2. **Build fails**: Clear `node_modules` and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Animations not working**: Ensure Framer Motion is properly installed and imported.

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is private and personal. All rights reserved.

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

**Developed with ❤️ by Harsha Nawana**
