"use client";

import { FadeImage } from "@/components/ui/FadeImage";
import { useGhibli } from "@/context/GhibliContext";
import { gsap } from "@/lib/gsap";
import { usePathname } from "next/navigation";
import { type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";

interface SkyKeyframe {
	h: number;
	top: [number, number, number];
	mid: [number, number, number];
	low: [number, number, number];
	abyss: [number, number, number, number];
	stars: number;
	fire: number;
	bri: number;
	sat: number;
}

const SKY_KEYFRAMES: SkyKeyframe[] = [
	{
		h: 0.0,
		top: [8, 13, 30],
		mid: [16, 26, 52],
		low: [24, 38, 70],
		abyss: [6, 9, 18, 0.9],
		stars: 0.95,
		fire: 1.0,
		bri: 0.42,
		sat: 0.88,
	},
	{
		h: 4.5,
		top: [14, 20, 44],
		mid: [28, 38, 70],
		low: [48, 56, 88],
		abyss: [10, 14, 26, 0.85],
		stars: 0.78,
		fire: 1.0,
		bri: 0.48,
		sat: 0.9,
	},
	{
		h: 5.8,
		top: [88, 92, 146],
		mid: [198, 142, 150],
		low: [248, 206, 168],
		abyss: [34, 28, 44, 0.65],
		stars: 0.15,
		fire: 0.75,
		bri: 0.78,
		sat: 1.04,
	},
	{
		h: 7.5,
		top: [52, 124, 186],
		mid: [126, 188, 224],
		low: [222, 240, 244],
		abyss: [24, 42, 58, 0.55],
		stars: 0.0,
		fire: 0.0,
		bri: 1.02,
		sat: 1.06,
	},
	{
		h: 12.0,
		top: [34, 104, 172],
		mid: [96, 174, 218],
		low: [206, 234, 242],
		abyss: [18, 34, 48, 0.58],
		stars: 0.0,
		fire: 0.0,
		bri: 1.05,
		sat: 1.06,
	},
	{
		h: 16.5,
		top: [56, 118, 176],
		mid: [134, 182, 212],
		low: [232, 224, 198],
		abyss: [24, 34, 46, 0.6],
		stars: 0.0,
		fire: 0.12,
		bri: 0.98,
		sat: 1.05,
	},
	{
		h: 18.0,
		top: [54, 52, 102],
		mid: [192, 98, 106],
		low: [242, 172, 102],
		abyss: [24, 16, 32, 0.74],
		stars: 0.32,
		fire: 0.9,
		bri: 0.65,
		sat: 1.06,
	},
	{
		h: 19.3,
		top: [18, 24, 54],
		mid: [44, 46, 90],
		low: [82, 66, 104],
		abyss: [12, 14, 26, 0.86],
		stars: 0.82,
		fire: 1.0,
		bri: 0.48,
		sat: 0.92,
	},
	{
		h: 21.0,
		top: [8, 13, 30],
		mid: [16, 26, 52],
		low: [24, 38, 70],
		abyss: [6, 9, 18, 0.9],
		stars: 0.95,
		fire: 1.0,
		bri: 0.42,
		sat: 0.88,
	},
	{
		h: 24.0,
		top: [8, 13, 30],
		mid: [16, 26, 52],
		low: [24, 38, 70],
		abyss: [6, 9, 18, 0.9],
		stars: 0.95,
		fire: 1.0,
		bri: 0.42,
		sat: 0.88,
	},
];

function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

function lerpRgb(c1: [number, number, number], c2: [number, number, number], t: number) {
	const r = Math.round(lerp(c1[0], c2[0], t));
	const g = Math.round(lerp(c1[1], c2[1], t));
	const b = Math.round(lerp(c1[2], c2[2], t));
	return `rgb(${r}, ${g}, ${b})`;
}

function lerpRgba(
	c1: [number, number, number, number],
	c2: [number, number, number, number],
	t: number,
) {
	const r = Math.round(lerp(c1[0], c2[0], t));
	const g = Math.round(lerp(c1[1], c2[1], t));
	const b = Math.round(lerp(c1[2], c2[2], t));
	const a = lerp(c1[3], c2[3], t).toFixed(2);
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function getRealMinutes() {
	const now = new Date();
	return now.getHours() * 60 + now.getMinutes();
}

function screenFromPath(pathname: string): string {
	if (pathname === "/capitulos") return "capitulos";
	if (pathname === "/leitura") return "ler";
	if (pathname === "/mapa") return "mapa";
	if (pathname === "/sobre") return "autor";
	if (pathname === "/apoie") return "apoie";
	return "inicio";
}

interface CloudSpec {
	id: string;
	top: string;
	width: string;
	dur: number;
	delay: number;
	isFront: boolean;
}

const BASE_CLOUDS: Omit<CloudSpec, "isFront">[] = [
	{ id: "c1", top: "11%", width: "clamp(115px, 16vw, 210px)", dur: 66, delay: 0 },
	{ id: "c2", top: "23%", width: "clamp(95px, 13vw, 175px)", dur: 82, delay: 14 },
	{ id: "c3", top: "8%", width: "clamp(82px, 11vw, 145px)", dur: 72, delay: 30 },
	{ id: "c4", top: "48%", width: "clamp(110px, 15vw, 195px)", dur: 76, delay: 6 },
];

export function GhibliShell({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const { toastMessage, toastVisible } = useGhibli();

	const [manualMinutes, setManualMinutes] = useState<number | null>(null);
	const [sliderMinutes, setSliderMinutes] = useState(540);
	const [modalMounted, setModalMounted] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [clouds, setClouds] = useState<CloudSpec[]>([]);

	const sunRef = useRef<HTMLImageElement>(null);
	const moonRef = useRef<HTMLImageElement>(null);

	const stars = useMemo(() => {
		const rand = (seed: number) => {
			const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
			return x - Math.floor(x);
		};
		return Array.from({ length: 46 }, (_, i) => ({
			id: `star-${i}`,
			left: `${(3 + rand(i * 2 + 1) * 94).toFixed(1)}%`,
			top: `${(4 + rand(i * 2 + 2) * 88).toFixed(1)}%`,
			delay: `${-(i * 0.35)}s`,
		}));
	}, []);

	// Sync body[data-screen] with current route
	useEffect(() => {
		document.body.dataset.screen = screenFromPath(pathname);
	}, [pathname]);

	// Initialize clouds on client so random front/back matches Prototype 5 without hydration mismatch
	useEffect(() => {
		setClouds(
			BASE_CLOUDS.map((cfg, i) => ({
				...cfg,
				isFront: i === 3 ? true : Math.random() < 0.38,
			})),
		);
	}, []);

	// Optional ?time=HH:MM or ?sky=day|night|dawn|dusk
	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const tParam = params.get("time");
		const skyParam = params.get("sky");
		if (tParam && /^\d{1,2}:\d{2}$/.test(tParam)) {
			const [h, m] = tParam.split(":").map(Number);
			setManualMinutes(Math.min(1439, Math.max(0, h * 60 + m)));
		} else if (skyParam === "day") {
			setManualMinutes(12 * 60);
		} else if (skyParam === "night") {
			setManualMinutes(22 * 60);
		} else if (skyParam === "dawn") {
			setManualMinutes(6 * 60);
		} else if (skyParam === "dusk") {
			setManualMinutes(18 * 60);
		}
	}, []);

	const applySkyForMinutes = useCallback((totalMinutes: number) => {
		const mins = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
		const hourFloat = mins / 60;

		let a = SKY_KEYFRAMES[0];
		let b = SKY_KEYFRAMES[SKY_KEYFRAMES.length - 1];
		for (let i = 0; i < SKY_KEYFRAMES.length - 1; i++) {
			if (hourFloat >= SKY_KEYFRAMES[i].h && hourFloat <= SKY_KEYFRAMES[i + 1].h) {
				a = SKY_KEYFRAMES[i];
				b = SKY_KEYFRAMES[i + 1];
				break;
			}
		}

		const span = Math.max(0.001, b.h - a.h);
		const t = (hourFloat - a.h) / span;

		const root = document.documentElement.style;
		root.setProperty("--sky-top", lerpRgb(a.top, b.top, t));
		root.setProperty("--sky-mid", lerpRgb(a.mid, b.mid, t));
		root.setProperty("--sky-low", lerpRgb(a.low, b.low, t));
		root.setProperty("--abyss-color", lerpRgba(a.abyss, b.abyss, t));
		root.setProperty("--stars-opacity", lerp(a.stars, b.stars, t).toFixed(2));
		root.setProperty("--fire-opacity", lerp(a.fire, b.fire, t).toFixed(2));
		root.setProperty(
			"--scenery-filter",
			`brightness(${lerp(a.bri, b.bri, t).toFixed(2)}) saturate(${lerp(a.sat, b.sat, t).toFixed(2)})`,
		);

		const sunEl = sunRef.current;
		if (sunEl) {
			if (hourFloat >= 5.25 && hourFloat <= 18.75) {
				const st = (hourFloat - 5.25) / 13.5;
				sunEl.style.left = `${10 + st * 80}%`;
				sunEl.style.top = `${42 - Math.sin(st * Math.PI) * 31}%`;
				sunEl.style.opacity = Math.min(1, Math.sin(st * Math.PI) * 3.2).toFixed(2);
			} else {
				sunEl.style.opacity = "0";
			}
		}

		const moonEl = moonRef.current;
		if (moonEl) {
			if (hourFloat >= 18 || hourFloat <= 6) {
				const nightHour = hourFloat >= 18 ? hourFloat - 18 : hourFloat + 6;
				const mt = nightHour / 12;
				moonEl.style.left = `${12 + mt * 76}%`;
				moonEl.style.top = `${40 - Math.sin(mt * Math.PI) * 28}%`;
				moonEl.style.opacity = Math.min(1, Math.sin(mt * Math.PI) * 3.2).toFixed(2);
			} else {
				moonEl.style.opacity = "0";
			}
		}

		setSliderMinutes(mins);
	}, []);

	useEffect(() => {
		const refresh = () => {
			applySkyForMinutes(manualMinutes !== null ? manualMinutes : getRealMinutes());
		};
		refresh();
		const id = window.setInterval(refresh, 30_000);
		return () => window.clearInterval(id);
	}, [manualMinutes, applySkyForMinutes]);

	// Smooth mouse parallax powered by GSAP
	useEffect(() => {
		const onMove = (e: PointerEvent) => {
			if (e.pointerType !== "mouse") return;
			const tx = (e.clientX / window.innerWidth - 0.5) * 2;
			const ty = (e.clientY / window.innerHeight - 0.5) * 2;
			const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
			for (const el of layers) {
				const d = Number(el.dataset.parallax) * 100;
				gsap.to(el, {
					x: -tx * d,
					y: -ty * d * 0.5,
					duration: 0.65,
					ease: "power2.out",
					overwrite: "auto",
				});
			}
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, []);

	const openSkyModal = useCallback(() => {
		setModalMounted(true);
		requestAnimationFrame(() => setModalOpen(true));
	}, []);

	const closeSkyModal = useCallback(() => {
		setModalOpen(false);
		window.setTimeout(() => {
			setModalMounted(false);
		}, 280);
	}, []);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape" && modalOpen) closeSkyModal();
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [modalOpen, closeSkyModal]);

	const backClouds = clouds.filter((c) => !c.isFront);
	const frontClouds = clouds.filter((c) => c.isFront);

	return (
		<>
			{/* CÉU DINÂMICO CONTÍNUO ESTILO GHIBLI */}
			<div className="sky-backdrop" id="sky-backdrop" aria-hidden="true">
				<svg
					className="sky-passage-lines"
					viewBox="0 0 1440 900"
					preserveAspectRatio="none"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Linhas sutis do céu</title>
					<path
						d="M-40 190 Q 380 120 760 220 T 1490 150"
						stroke="rgba(255,255,255,0.16)"
						strokeWidth="1"
						strokeDasharray="6 10"
					/>
					<path
						d="M-60 340 Q 420 260 880 350 T 1500 280"
						stroke="rgba(255,255,255,0.11)"
						strokeWidth="1"
					/>
					<path
						d="M120 60 Q 560 150 980 75 T 1480 120"
						stroke="rgba(255,255,255,0.12)"
						strokeWidth="0.9"
						strokeDasharray="3 8"
					/>
					<path
						d="M-20 510 Q 520 440 1020 520 T 1490 460"
						stroke="rgba(255,255,255,0.09)"
						strokeWidth="1"
					/>
				</svg>

				<div className="stars-field" id="stars-field">
					{stars.map((s) => (
						<span
							key={s.id}
							className="star-dot"
							style={{ left: s.left, top: s.top, animationDelay: s.delay }}
						/>
					))}
				</div>

				<img ref={sunRef} className="celestial-img sun-body" src="/ghibli/sun.png" alt="" />
				<img ref={moonRef} className="celestial-img moon-body" src="/ghibli/moon.png" alt="" />

				<div className="clouds-layer clouds-back" id="clouds-back" data-parallax="0.014">
					{backClouds.map((c) => (
						<FadeImage
							key={c.id}
							src="/ghibli/cloud.png"
							alt=""
							className="cloud-img"
							style={{
								top: c.top,
								width: c.width,
								animationDuration: `${c.dur}s`,
								animationDelay: `${c.delay}s`,
							}}
						/>
					))}
				</div>
				<div className="abyss-mist" />
			</div>

			{/* TOPO ESQUERDO: Título + Botão de Configuração */}
			<header className="top-left-bar">
				<button
					type="button"
					className="cfg-btn"
					aria-label="Configurar hora do dia"
					aria-expanded={modalOpen}
					aria-controls="sky-modal"
					title="Hora do dia"
					onClick={() => (modalMounted ? closeSkyModal() : openSkyModal())}
				>
					<svg
						viewBox="0 0 24 24"
						width="20"
						height="20"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.9"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="3.2" />
						<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.79 1.02 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
					</svg>
				</button>

				<div className="ghibli-brand">
					<h1>
						<span className="brand-top">TRIBOS</span>
						<span className="brand-bottom">ANCESTRAIS</span>
					</h1>
				</div>
			</header>

			{/* MODAL GENTIL DO CICLO DO CÉU */}
			{modalMounted && (
				<div
					className={`sky-modal-backdrop${modalOpen ? " is-open" : ""}`}
					id="sky-modal"
					onClick={(e) => {
						if (e.target === e.currentTarget) closeSkyModal();
					}}
					onKeyDown={(e) => {
						if (e.key === "Escape") closeSkyModal();
					}}
				>
					<dialog open className="sky-modal-card" aria-labelledby="sky-modal-title">
						<div className="sky-modal-head">
							<h2 id="sky-modal-title">Ciclo do Sol</h2>
							<button
								type="button"
								className="sky-modal-close"
								aria-label="Fechar"
								onClick={closeSkyModal}
							>
								✕
							</button>
						</div>

						<label className="sky-slider-wrap" htmlFor="sky-hour-slider">
							<span className="sr-only">Ajustar hora do dia</span>
							<input
								type="range"
								id="sky-hour-slider"
								className="sky-slider"
								min={0}
								max={1439}
								step={1}
								value={sliderMinutes}
								onChange={(e) => {
									const val = Number(e.target.value);
									setManualMinutes(val);
									applySkyForMinutes(val);
								}}
							/>
						</label>

						<button
							type="button"
							className="sky-auto-btn"
							onClick={() => {
								setManualMinutes(null);
								applySkyForMinutes(getRealMinutes());
							}}
						>
							Hora real
						</button>
					</dialog>
				</div>
			)}

			{children}

			{/* Nuvens que passam na frente */}
			<div
				className="clouds-layer clouds-front"
				id="clouds-front"
				data-parallax="0.028"
				aria-hidden="true"
			>
				{frontClouds.map((c) => (
					<FadeImage
						key={c.id}
						src="/ghibli/cloud.png"
						alt=""
						className="cloud-img is-front-cloud"
						style={{
							top: c.top,
							width: c.width,
							animationDuration: `${c.dur}s`,
							animationDelay: `${c.delay}s`,
						}}
					/>
				))}
			</div>

			<output className={`toast${toastVisible ? " visible" : ""}`} id="toast" aria-live="polite">
				{toastMessage}
			</output>
		</>
	);
}
