/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'alpha-clothing.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;