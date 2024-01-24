/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		domains: ["flowbite.com", "image.tmdb.org"],
		// remotePatterns: [
		// 	{
		// 		protocol: "https",
		// 		hostname: "flowbite.com",
		// 		pathname: "**",
		// 	},
		// ],
	},
};

export default nextConfig;
