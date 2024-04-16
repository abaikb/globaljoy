/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    i18n: {
          locales: ['en', 'ru', 'ty', 'kgz'],
          defaultLocale: 'en',
          localeDetection: false,
      },
    env: {
      API_URL: process.env.API_URL,
      API_ENV: process.env.API_ENV,
      APP_SERVER_URL: process.env.APP_SERVER_URL,
    },
    images: {
      domains: ['localhost']
    },
  };
  
  export default nextConfig;