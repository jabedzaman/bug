> **Warning**
> No longer mantained

# Nextjs Tailwind sanity starter template

## Features

- Sanity CMS
- Nextjs
- Tailwindcss

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_SANITY_DATASET`
`NEXT_PUBLIC_SANITY_PROJECT_ID`
`SANITY_API_TOKEN`

## Extend / Customize

`.env.example` - add your own environmet variables from sanity

`components/containers/Hero.tsx` - Add your own name and introduction

`components/containers/Skills.tsx` - Add your own skills.

`components/containers/Contact.tsx` - navigation links.

`components/containers/Footer.tsx` - update link

`public/assets/data/logo.png` - replace with your own logo.

`public/favicon.ico` - replace favicon

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / GitHub Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations have to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.
