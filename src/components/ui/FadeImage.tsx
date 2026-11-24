"use client";

import {
	type ImgHTMLAttributes,
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

type FadeImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const FadeImage = forwardRef<HTMLImageElement, FadeImageProps>(function FadeImage(
	{ className = "", alt = "", onLoad, onError, ...rest },
	forwardedRef,
) {
	const [loaded, setLoaded] = useState(false);
	const localRef = useRef<HTMLImageElement | null>(null);

	const setRefs = useCallback(
		(node: HTMLImageElement | null) => {
			localRef.current = node;
			if (typeof forwardedRef === "function") {
				forwardedRef(node);
			} else if (forwardedRef) {
				forwardedRef.current = node;
			}
		},
		[forwardedRef],
	);

	useEffect(() => {
		const img = localRef.current;
		if (img?.complete && img.naturalWidth > 0) {
			setLoaded(true);
		}
	}, []);

	return (
		<img
			ref={setRefs}
			decoding="async"
			{...rest}
			alt={alt}
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
});
