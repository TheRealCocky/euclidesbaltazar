import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**', // Isso autoriza qualquer imagem vinda do teu Cloudinary
            },
        ],
    },
};

export default nextConfig;
