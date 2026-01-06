import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'books.google.com' },
      { protocol: 'https', hostname: 'books.googleusercontent.com' },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
      {
        protocol: 'https',
        hostname: 'cv0.litres.ru',
      },
      { protocol: 'https', hostname: 'cv1.litres.ru' },
      { protocol: 'https', hostname: 'cv2.litres.ru' },
      { protocol: 'https', hostname: 'cv3.litres.ru' },
      { protocol: 'https', hostname: 'cv4.litres.ru' },
      { protocol: 'https', hostname: 'cv5.litres.ru' },
      { protocol: 'https', hostname: 'cv6.litres.ru' },
      { protocol: 'https', hostname: 'cv7.litres.ru' },
      { protocol: 'https', hostname: 'cv8.litres.ru' },
      { protocol: 'https', hostname: 'cv9.litres.ru' },
    ],
  },
};

export default withNextIntl(nextConfig);