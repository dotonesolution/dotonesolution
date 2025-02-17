# DotOne Solutions

A modern, responsive business website built with Astro and TailwindCSS. This website features a clean design with smooth animations, dynamic content management, and a contact form integration.

![DotOne Solutions](public/assets/images/logo.png)

## 🚀 Features

- ⚡️ **Lightning Fast Performance** - Built with Astro for optimal speed
- 🎨 **Modern UI/UX** - Clean and professional design with TailwindCSS
- 📱 **Fully Responsive** - Looks great on all devices
- ✨ **Smooth Animations** - Engaging user experience with AOS
- 📧 **Contact Form** - Integrated with FormSubmit.co
- 🗺️ **Interactive Map** - Location visualization
- 📊 **Dynamic Content** - JSON-driven content management
- 🔍 **SEO Friendly** - Built with best practices

## 🛠️ Tech Stack

- [Astro](https://astro.build) - The web framework for content-driven websites
- [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [MDI Icons](https://pictogrammers.com/library/mdi/) - Material Design Icons

## 🚀 Quick Start

### Prerequisites

- Node.js 16 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/dotonesolution/dotonesolution.git>
cd dotonesolution
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

## 📁 Project Structure

```
src/
├── assets/
├── components/
├── data/
├── layouts/
├── pages/
└── styles/
```

## 📄 Pages

- **Home** (`/`) - Landing page with hero section and key features
- **About** (`/about`) - Company information and team
- **Services** (`/services`) - Detailed service offerings
- **Contact** (`/contact`) - Contact form and information

## 🔧 Configuration

The project uses various configuration files:

- `astro.config.mjs` - Astro configuration
- `tailwind.config.cjs` - TailwindCSS configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Content Management

All website content is managed through JSON files in the `src/data/` directory:

- `CompanyInfo.json` - Company details
- `ContactDetails.json` - Contact information
- `ServiceList.json` - Services offered
- `StatsData.json` - Company statistics
- `WhatWeOffer.json` - Features and offerings

## 🎨 Styling

The project uses TailwindCSS for styling with custom configurations:

- Custom color schemes
- Responsive design utilities
- Custom animations
- Shadow configurations

## 🚀 Deployment

The site is configured for easy deployment on platforms like Netlify or Vercel. The build command is \`pnpm build\` which generates a static site in the \`dist\` directory.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request
