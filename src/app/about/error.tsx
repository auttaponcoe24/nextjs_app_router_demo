"use client";

import React from "react";

type Props = {
	error: any;
	reset: any;
};

export default function ErrorPage({ error, reset }: Props) {
	return (
		<div className="w-full text-center">
			<div className="text-2xl text-red-500">
				Error due to: {error.message}
			</div>
			<p>Handled by error.tsx in AppRouter</p>
		</div>
	);
}
