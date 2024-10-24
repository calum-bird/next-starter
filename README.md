# Calum's NextJS Starter Template

This is a NextJS starter template created by [Calum Bird](https://github.com/calum-bird) to help kickstart your NextJS projects.

## Features

- NextJS + Tailwind CSS
- ShadCN UI components
- Clerk.com Authentication
- Theme switching (Light/Dark/System)

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Set up your Clerk.com account and add your API keys to the `.env.local` file:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx`: Main page component
- `src/app/layout.tsx`: Root layout component
- `src/components/`: Reusable components (e.g., ThemeSwitcher, ThemeProvider)

## Authentication

This template uses Clerk.com for authentication. You can access protected routes after signing in.

## Customization

- Modify `src/app/page.tsx` to customize the home page content
- Update the theme in `tailwind.config.js` and `src/app/globals.css`
- Add new components in the `src/components/` directory

## Learn More

To learn more about the technologies used in this template:

- [Next.JS Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [ShadCN UI Documentation](https://ui.shadcn.com/)
- [Clerk.com Documentation](https://clerk.com/docs)

## Deployment

Deploy your Next.js app using platforms like Vercel, Netlify, or your preferred hosting service.
