# Portfolio Website - Dineshprabhu A

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring dark mode, smooth animations, and a clean design.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion powered animations
- **Modern UI**: Clean and professional design with Tailwind CSS
- **Interactive Components**: Dynamic navigation, contact form, and project showcase
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 📦 Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

## 🛠️ Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with mobile menu
│   │   ├── Hero.jsx          # Landing section
│   │   ├── About.jsx         # About me section
│   │   ├── Skills.jsx        # Technical skills showcase
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Projects.jsx      # Project portfolio grid
│   │   ├── Education.jsx     # Education and certifications
│   │   ├── Contact.jsx       # Contact form and information
│   │   ├── Footer.jsx        # Footer section
│   │   └── ScrollToTop.jsx   # Scroll to top button
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles and Tailwind directives
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and description
   - Modify social media links

2. **About Section** (`src/components/About.jsx`):
   - Update bio and personal details
   - Modify statistics (experience, projects, etc.)

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove technologies
   - Organize into different categories

4. **Experience Section** (`src/components/Experience.jsx`):
   - Update with your work history
   - Add job descriptions and achievements

5. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your own projects
   - Update project images, descriptions, and links

6. **Education Section** (`src/components/Education.jsx`):
   - Update educational background
   - Add certifications and achievements

7. **Contact Section** (`src/components/Contact.jsx`):
   - Update contact information
   - Configure email service for form submission

### Styling

- **Colors**: Edit the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `tailwind.config.js` and `index.html`
- **Dark Mode**: Customize dark mode colors in components and `index.css`

### Adding Your Resume

Place your PDF resume in the `public` folder and name it `resume.pdf`. The download button in the Hero section will automatically link to it.

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

1. **Option 1: EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Install EmailJS: `npm install @emailjs/browser`
   - Update the Contact component with your service credentials

2. **Option 2: Backend API**
   - Create a backend endpoint to handle form submissions
   - Update the `handleSubmit` function in Contact.jsx to send data to your API

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 🛠️ Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Scroll**: Smooth scrolling navigation

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Dineshprabhu A**
- GitHub: [@dineshprabhu](https://github.com/dineshprabhu)
- LinkedIn: [@dineshprabhu](https://linkedin.com/in/dineshprabhu)
- Email: dineshprabhu@example.com

---

Feel free to customize this portfolio to match your personal style and professional needs!
