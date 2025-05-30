/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**', // This allows all paths from Unsplash
        },
      ],
    },
  };
  
  export default nextConfig;
  