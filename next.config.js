
const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', "avatars.githubusercontent.com", 'lh3.googleusercontent.com', 'platform-lookaside.fbsbx.com']
  }

})

module.exports = nextConfig
