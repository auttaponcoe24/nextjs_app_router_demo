import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

type Readonly = {
	children: React.ReactNode;
};

export default function AboutLayout({ children }: Readonly) {
	return (
		<>
			<b>about section</b>
			{children}
		</>
	);
}
