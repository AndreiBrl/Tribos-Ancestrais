"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

export function FadeNextImage({ className = "", onLoad, onError, ...rest }: ImageProps) {
	const [loaded, setLoaded] = useState(false);

	return (
		<Image
			{...rest}
			className={`fade-img${loaded ? " is-loaded" : ""}${className ? ` ${className}` : ""}`}
			onLoad={(e) => {
				setLoaded(true);
				onLoad?.(e);
			}}
			onError={(e) => {
				setLoaded(true);
				onError?.(e);
			}}
		/>
	);
}
