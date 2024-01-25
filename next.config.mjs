/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		domains: ["168moviehd.com", "image.tmdb.org"],
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
