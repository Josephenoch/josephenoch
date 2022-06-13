/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["i.scdn.co","mosaic.scdn.co","blend-playlist-covers.spotifycdn.com","lineup-images.scdn.co","firebasestorage.googleapis.com"]
  }
}

module.exports = nextConfig
