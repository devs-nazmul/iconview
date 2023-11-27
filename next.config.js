/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['iconview'],
	
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com"
			}
		],
	},
}

module.exports = nextConfig
