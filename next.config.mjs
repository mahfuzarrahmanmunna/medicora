/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            // new URL('https://assets.example.com/account123/**'),
            {
                protocol: 'https',
                hostname: "i.ibb.co.com",
                // hostname: "i.ibb.co"
            }
        ],
    },
};

export default nextConfig;
