/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    REF_ID: process.env.REF_ID,
  },
};

export default nextConfig;
