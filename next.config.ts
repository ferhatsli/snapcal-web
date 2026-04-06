import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.snapcalai.app",
          },
        ],
        destination: "https://snapcalai.app/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
