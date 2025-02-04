/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/layout/fashion",
        permanent: false,
      },
    ];
  },
  env: {
    API_URL: "https://voxo-next-js.vercel.app",
  },
  reactStrictMode: false,
};

export default nextConfig;
