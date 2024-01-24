import React from "react";

type Props = {};

export default async function About({}: Props) {
	const result = await fetch(
		"https://api.themoviedb.org/3/movie/popular?api_key=643839bd098675576fce2ab7f6d4f1f0"
	);
	const data = await result.json();
	await delay(1000);

	return (
		<>
			<div>About</div>
			<div>{JSON.stringify(data)}</div>
		</>
	);
}

function delay(timeout: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, timeout);
	});
}
