"use client";

import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function MapaPage() {
	const frameRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = frameRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 18, scale: 0.985 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section className="screen screen-inner active" data-screen="mapa">
			<div className="inner-shell">
				<header className="chapters-topbar">
					<Link href="/" className="ghibli-back-btn" aria-label="Voltar para a ilha">
						<svg
							viewBox="0 0 24 24"
							width="16"
							height="16"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.2"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="M15 18l-6-6 6-6" />
						</svg>
						<span>Ilha</span>
					</Link>
					<div className="chapters-heading">
						<h2>Mapa do Mundo</h2>
						<p>Terras de Tribos Ancestrais</p>
					</div>
				</header>

				<div className="map-frame" ref={frameRef}>
					<img
						className="world-map-img"
						src="/img/mapOri.jpg"
						alt="Mapa original de Tribos Ancestrais"
					/>
				</div>
			</div>
		</section>
	);
}
