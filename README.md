# Manohar Kumar | Personal Portfolio

A modern, responsive, and aesthetically pleasing personal portfolio website built with Next.js and Tailwind CSS. The portfolio showcases my projects, professional experience, skills, certifications, and educational background.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theming**: `next-themes` for seamless light/dark mode support
- **Fonts**: Space Grotesk (via `next/font/google`)

## 🌟 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Dark Mode**: Built-in support for system, light, and dark color schemes.
- **Interactive Animations**: Smooth scroll animations and page transitions using Framer Motion.
- **Sections**:
  - **Hero**: Introduction and greeting.
  - **Projects**: Highlights of selected works and applications.
  - **Experience**: Professional journey and roles.
  - **Skills**: Technical skills and technologies mastered.
  - **Certification**: Achievements and professional certificates.
  - **Education**: Academic background.
  - **Contact**: Reach out easily.

## 📦 Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/` - Next.js App Router layout, pages, and global styles.
- `components/` - Reusable React components grouped by sections (Header, HeroSection, Projects, Experience, etc.).
- `public/` - Static assets like images and icons.

## 📝 Customization

To personalize this portfolio:
1. Update the metadata in `app/layout.js`.
2. Modify the individual sections in the `components/` folder to reflect your own information.
3. Add your resume or other assets to the `public/` directory.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
