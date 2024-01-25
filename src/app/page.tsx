import React from "react";

type Props = {};

export default async function Home({}: Props) {
	const key = process.env.NEXT_PUBLIC_API_KEY;
	const url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}`;

	const data = await fetch(url);
	const res = await data.json();
	await delay(1000);

	return (
		<div>
			Home
			<div>
				<ul>
					{res.results.map((movie: any) => (
						<li key={movie.id}>{movie.title}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

function delay(timeout: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
}
