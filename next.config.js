/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => [
    {
      source: '/talk',
      destination: 'https://discord.gg/gygdr3PQKu',
      permanent: true
    }
  ]
}

module.exports = nextConfig
