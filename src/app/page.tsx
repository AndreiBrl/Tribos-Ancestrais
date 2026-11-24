"use client";

import { useGhibli } from "@/context/GhibliContext";
import { BOOK_CHAPTERS, getChapterForPage } from "@/data/book";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

export default function HomePage() {
	const { savedPage } = useGhibli();
	const [mushroomOnCave, setMushroomOnCave] = useState(false);
	const stageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mspot = new URLSearchParams(window.location.search).get("mspot");
		if (mspot === "cave") setMushroomOnCave(true);
		else if (mspot === "fire") setMushroomOnCave(false);
		else setMushroomOnCave(Math.random() < 0.4);
	}, []);

	useEffect(() => {
		const el = stageRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 18, scale: 0.98 },
				{ opacity: 1, y: 0, scale: 1, duration: 0.75, ease: "power2.out" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	const chapterIndex = useMemo(() => {
		const ch = getChapterForPage(savedPage);
		if (!ch) return 1;
		const idx = BOOK_CHAPTERS.findIndex((c) => c.number === ch.numero);
		return idx >= 0 ? idx + 1 : 1;
	}, [savedPage]);

	return (
		<section className="screen screen-home active" data-screen="inicio">
			<main className="home-stage-wrap" data-parallax="0.02">
				<div className="island-stage" id="island-stage" ref={stageRef}>
					<img
						className="island-img"
						src="/ghibli/floating-island.png"
						alt="Ilha flutuante musgosa com caverna de pedra tribal, fogueira central, golem ancestral de madeira com barba de folhas e árvore"
					/>

					{/* Fogueira central em SVG detalhado + fumaça sutil */}
					<div className="fire-fx-overlay" id="fire-fx" aria-hidden="true">
						<div className="fire-core-glow" />
						<div className="fire-smoke">
							<span className="smoke-wisp s1" />
							<span className="smoke-wisp s2" />
							<span className="smoke-wisp s3" />
						</div>
						<svg
							className="svg-flame svg-flame-camp"
							viewBox="0 0 120 130"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Fogueira central</title>
							<defs>
								<linearGradient
									id="campOuter"
									x1="60"
									y1="12"
									x2="60"
									y2="124"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0%" stopColor="#ff6a1a" />
									<stop offset="55%" stopColor="#f28424" />
									<stop offset="100%" stopColor="#cc3b0c" />
								</linearGradient>
								<linearGradient
									id="campMid"
									x1="60"
									y1="30"
									x2="60"
									y2="122"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0%" stopColor="#ffd04d" />
									<stop offset="100%" stopColor="#ff7e1c" />
								</linearGradient>
								<linearGradient
									id="campCore"
									x1="60"
									y1="62"
									x2="60"
									y2="120"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0%" stopColor="#fff8c8" />
									<stop offset="100%" stopColor="#ffcf52" />
								</linearGradient>
							</defs>
							<path
								className="flame-tongue t-outer"
								d="M60 12 C69 34 86 48 87 74 C93 64 100 58 98 48 C108 66 105 94 90 109 C80 120 68 123 60 123 C50 123 36 119 27 107 C14 91 13 65 24 46 C23 58 29 64 34 72 C35 46 51 34 60 12 Z"
								fill="url(#campOuter)"
								stroke="#7a2a0d"
								strokeWidth="2"
								strokeLinejoin="round"
							/>
							<path
								className="flame-tongue t-mid"
								d="M60 32 C66 50 78 60 77 82 C83 75 86 70 86 64 C91 78 88 99 77 110 C70 117 65 119 60 119 C53 119 45 115 39 107 C31 96 30 78 36 63 C37 70 40 75 44 80 C44 60 54 49 60 32 Z"
								fill="url(#campMid)"
							/>
							<path
								className="flame-tongue t-core"
								d="M60 64 C66 76 72 86 70 100 C69 110 65 115 60 115 C54 115 49 109 48 99 C47 86 53 76 60 64 Z"
								fill="url(#campCore)"
							/>
							<circle className="ember e1" cx="42" cy="30" r="2.2" fill="#ffd966" />
							<circle className="ember e2" cx="78" cy="24" r="1.8" fill="#ffb84d" />
							<circle className="ember e3" cx="62" cy="6" r="1.6" fill="#ffe699" />
						</svg>
					</div>

					{/* 3 Tochas da ilha em SVG detalhado */}
					{[1, 2, 3].map((n) => (
						<div key={n} className={`torch-fx torch-${n}`} aria-hidden="true">
							<div className="torch-glow" />
							<svg
								className="svg-flame svg-flame-torch"
								viewBox="0 0 60 90"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Tocha</title>
								<path
									className="flame-tongue t-outer"
									d="M30 8 C37 26 48 38 46 58 C44 74 37 82 30 82 C22 82 14 73 13 57 C12 38 23 26 30 8 Z"
									fill="#f57a20"
									stroke="#78280c"
									strokeWidth="1.8"
									strokeLinejoin="round"
								/>
								<path
									className="flame-tongue t-mid"
									d="M30 24 C35 37 41 47 40 61 C39 72 35 78 30 78 C24 78 20 71 19 60 C19 46 25 37 30 24 Z"
									fill="#ffbf3f"
								/>
								<path
									className="flame-tongue t-core"
									d="M30 46 C33 55 35 61 34 69 C34 74 32 76 30 76 C27 76 26 73 25 68 C25 61 27 54 30 46 Z"
									fill="#fff5be"
								/>
							</svg>
						</div>
					))}

					{/* 1. ESFERA DE MAGIA LEVITANDO NA MÃO DO GOLEM (-> Ler) */}
					<Link
						href="/leitura"
						className="island-hotspot orb-hotspot"
						aria-label="Esfera Mágica — Ler"
					>
						<span className="orb-aura" aria-hidden="true" />
						<span className="orb-sphere" aria-hidden="true">
							<img className="orb-img" src="/ghibli/magic-orb.png" alt="" />
						</span>
						<span className="stone-tag">
							<strong>Ler</strong>
						</span>
					</Link>

					{/* 2. GOLEM ANCESTRAL DE MADEIRA (-> Autor) */}
					<Link
						href="/sobre"
						className="island-hotspot golem-hotspot"
						aria-label="Golem Ancestral — Autor"
					>
						<span className="stone-tag">
							<strong>Autor</strong>
						</span>
					</Link>

					{/* 3. COGUMELO SENTADO NO CHÃO COM PLACA ACIMA DA CABEÇA (-> Capítulos) */}
					<Link
						href="/capitulos"
						className={`island-hotspot mushroom-hotspot${mushroomOnCave ? " is-on-cave" : ""}`}
						id="mushroom-hotspot"
						style={
							mushroomOnCave ? { left: "25.0%", top: "-9.5%" } : { left: "34.5%", top: "40.5%" }
						}
						aria-label="Espírito Cogumelo — Capítulos"
					>
						<img className="mushroom-img" src="/ghibli/mini-mushroom.png" alt="" />
						<span className="mushroom-chapter-num" id="mushroom-chapter-num">
							{chapterIndex}
						</span>
						<span className="stone-tag">
							<strong>Capítulos</strong>
						</span>
					</Link>

					{/* 4. CAVERNA DE PEDRA TRIBAL (-> Mapa) */}
					<Link
						href="/mapa"
						className="island-hotspot cave-hotspot"
						aria-label="Caverna Tribal — Mapa"
					>
						<span className="stone-tag">
							<strong>Mapa</strong>
						</span>
					</Link>

					{/* 5. ARMAS APOIADAS (-> Apoie) */}
					<Link
						href="/apoie"
						className="island-hotspot weapons-hotspot"
						aria-label="Armas Tribais — Apoie"
					>
						<span className="stone-tag">
							<strong>Apoie</strong>
						</span>
					</Link>
				</div>
			</main>
		</section>
	);
}
