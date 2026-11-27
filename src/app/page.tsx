"use client";

import { FadeImage } from "@/components/ui/FadeImage";
import { useGhibli } from "@/context/GhibliContext";
import { BOOK_CHAPTERS, getChapterForPage } from "@/data/book";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const SPARKLE_INDICES = [0, 1, 2, 3, 4, 5, 6, 7];

function HotspotSparkles() {
	return (
		<span className="hotspot-sparkles" aria-hidden="true">
			{SPARKLE_INDICES.map((i) => (
				<i key={i} />
			))}
		</span>
	);
}

export default function HomePage() {
	const { savedPage } = useGhibli();
	const [mushroomOnCave, setMushroomOnCave] = useState(false);
	const [mushroomReady, setMushroomReady] = useState(false);
	const stageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mspot = new URLSearchParams(window.location.search).get("mspot");
		if (mspot === "cave") setMushroomOnCave(true);
		else if (mspot === "fire") setMushroomOnCave(false);
		else setMushroomOnCave(Math.random() < 0.5);
		setMushroomReady(true);
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
					<FadeImage
						className="island-img"
						src="/ghibli/floating-island.png"
						alt="Ilha flutuante musgosa com caverna de pedra tribal, fogueira central, golem ancestral de madeira com barba de folhas e árvore"
					/>

					{/* Fogueira central: acesa à noite ou sempre que a Chinu está no chão assando o cogumelo */}
					<div
						className={`fire-fx-overlay${mushroomOnCave ? " is-chinu-roasting" : ""}`}
						id="fire-fx"
						aria-hidden="true"
					>
						<div className="fire-core-glow" />
						<img className="camp-flames-img" src="/ghibli/flames.png" alt="" />
						<span className="camp-fire-embers" aria-hidden="true">
							<i />
							<i />
							<i />
							<i />
							<i />
							<i />
							<i />
						</span>
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
						<HotspotSparkles />
						<span className="orb-aura" aria-hidden="true" />
						<span className="orb-sphere" aria-hidden="true">
							<FadeImage className="orb-img" src="/ghibli/magic-orb.png" alt="" />
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
						<HotspotSparkles />
						<span className="stone-tag">
							<strong>Autor</strong>
						</span>
					</Link>

					{/* 3. COGUMELO (-> Capítulos) — alterna de lugar com a Chinu ao recarregar */}
					<Link
						href="/capitulos"
						className={`island-hotspot mushroom-hotspot${mushroomOnCave ? " is-on-cave" : ""}`}
						id="mushroom-hotspot"
						style={{
							opacity: mushroomReady ? 1 : 0,
							transition:
								"opacity 1.15s cubic-bezier(0.22, 1, 0.36, 1) 0.08s, transform 0.25s ease",
						}}
						aria-label="Espírito Cogumelo — Capítulos"
					>
						<HotspotSparkles />
						<FadeImage
							key={mushroomOnCave ? "mush-cave" : "mush-ground"}
							className="mushroom-img"
							src={mushroomOnCave ? "/ghibli/mushroom-pipe-cave.png" : "/ghibli/mini-mushroom.png"}
							alt=""
						/>
						<span className="mushroom-chapter-num" id="mushroom-chapter-num">
							{chapterIndex}
						</span>
						<span className="stone-tag">
							<strong>Capítulos</strong>
						</span>
					</Link>

					{/* 4. CHINU (-> Apoie) — alterna de lugar com o Cogumelo ao recarregar */}
					<Link
						href="/apoie"
						className={`island-hotspot chinu-hotspot${mushroomOnCave ? " is-on-ground" : " is-on-cave"}`}
						id="chinu-hotspot"
						style={{
							opacity: mushroomReady ? 1 : 0,
							transition:
								"opacity 1.15s cubic-bezier(0.22, 1, 0.36, 1) 0.08s, transform 0.25s ease",
						}}
						aria-label="Chinu — Apoie o Mangá"
					>
						<HotspotSparkles />
						<FadeImage
							key={mushroomOnCave ? "chinu-ground" : "chinu-cave"}
							className="chinu-img"
							src={mushroomOnCave ? "/ghibli/chinu-ground.png" : "/ghibli/chinu-pipe-cave.png"}
							alt=""
						/>
						<span className="stone-tag">
							<strong>Apoie</strong>
						</span>
					</Link>
				</div>
			</main>
		</section>
	);
}
