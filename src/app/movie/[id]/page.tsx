import Image from "next/image";
import React from "react";

type Props = {
	params: any;
};

export default async function MovieDetail({ params }: Props) {
	const { id } = params;
	const key = process.env.NEXT_PUBLIC_API_KEY;
	const imagePath = `https://image.tmdb.org/t/p/original`;

	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
	const data = await fetch(url, { next: { revalidate: 10 } });

	const res = await data.json();

	return (
		<div>
			<h2 className="text-4xl">{res.title}</h2>
			<h2 className="text-4xl">Runtime: {res.runtime}</h2>
			<Image
				src={imagePath + res.backdrop_path}
				width={800}
				height={800}
				alt={res.title}
				priority
				className="my-12 w-full"
			/>
		</div>
	);
}
