"use client";

import { useGhibli } from "@/context/GhibliContext";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const OFFERING_BLESSINGS = [
	"Os espíritos da floresta sorriram para você!",
	"O golem acenou em aprovação junto à fogueira.",
	"O cogumelo anotou sua boa energia na placa!",
	"Mais uma faísca para transformar o livro em mangá!",
];

export default function ApoiePage() {
	const { copyText } = useGhibli();
	const [offeringCount, setOfferingCount] = useState(1);
	const [blessing, setBlessing] = useState(
		"Toque na fogueira ou no botão para enviar energia ao projeto!",
	);
	const stageRef = useRef<HTMLDivElement>(null);
	const hearthImgRef = useRef<HTMLImageElement>(null);
	const glowRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const raw = Number(localStorage.getItem("ta-embers") || 1);
		if (Number.isFinite(raw) && raw >= 1) {
			setOfferingCount(Math.round(raw));
		}
	}, []);

	useEffect(() => {
		const el = stageRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	const stokeFire = () => {
		const next = offeringCount + 1;
		setOfferingCount(next);
		localStorage.setItem("ta-embers", String(next));
		setBlessing(OFFERING_BLESSINGS[next % OFFERING_BLESSINGS.length]);

		if (hearthImgRef.current) {
			gsap.fromTo(
				hearthImgRef.current,
				{ scale: 1 },
				{
					scale: 1.07,
					duration: 0.2,
					yoyo: true,
					repeat: 1,
					ease: "power2.out",
					clearProps: "transform",
				},
			);
		}
		if (glowRef.current) {
			gsap.fromTo(
				glowRef.current,
				{ scale: 1, opacity: 0.8 },
				{ scale: 1.32, opacity: 1, duration: 0.24, yoyo: true, repeat: 1, ease: "power2.out" },
			);
		}
	};

	return (
		<section className="screen screen-inner active" data-screen="apoie">
			<div className="inner-shell narrow-shell">
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
						<h2>Apoie o Mangá</h2>
						<p>Ajude a história a virar mangá</p>
					</div>
				</header>

				<div className="organic-stage support-stage" ref={stageRef}>
					<button
						type="button"
						className="support-hearth-crest"
						onClick={stokeFire}
						aria-label="Acender uma brasa na fogueira da tribo"
					>
						<span className="hearth-glow" ref={glowRef} aria-hidden="true" />
						<span className="hearth-embers" aria-hidden="true">
							<i />
							<i />
							<i />
							<i />
							<i />
						</span>
						<img
							ref={hearthImgRef}
							className="support-hearth-img"
							src="/ghibli/support-hearth.png"
							alt="Fogueira tribal com pena de mangá e tinteiro sobre pedra com musgo"
						/>
					</button>

					<div className="ghibli-parchment organic-scroll-sheet prose-card support-sheet">
						<div className="organic-sheet-head">
							<h3>Está curtindo a jornada?</h3>
							<span className="author-role">Do Livro para o Mangá</span>
						</div>

						<div className="organic-prose">
							<p>
								Inicialmente, <strong>Tribos Ancestrais</strong> seria apenas um livro escrito. Mas
								ao dar vida visual às cenas, a história pediu para virar um <strong>mangá</strong> —
								e hoje estudo desenho para transformar toda essa obra em quadrinhos.
							</p>
						</div>

						<div className="offering-fun-box organic-offering-box">
							<div className="offering-status">
								<div>
									<strong>
										{offeringCount} {offeringCount === 1 ? "brasa acesa" : "brasas acesas"} pela
										tribo
									</strong>
									<small>{blessing}</small>
								</div>
							</div>
							<button type="button" className="ghibli-pill-btn is-ember" onClick={stokeFire}>
								🔥 Acender Brasa
							</button>
						</div>

						<img
							className="organic-branch-divider"
							src="/ghibli/organic-divider.png"
							alt=""
							aria-hidden="true"
						/>

						<div className="support-box organic-pix-plaque">
							<div>
								<span className="support-label">Oferenda via PIX (E-mail)</span>
								<code className="support-pix">contatoandreibr@gmail.com</code>
								<small className="support-owner">Titular: Andrei Barbuto Romanelli Lopes</small>
							</div>
							<button
								type="button"
								className="ghibli-pill-btn"
								onClick={() => copyText("contatoandreibr@gmail.com", "Chave PIX copiada!")}
							>
								Copiar PIX
							</button>
						</div>

						<div className="prose-actions organic-actions">
							<Link href="/sobre" className="ghibli-pill-btn is-secondary">
								← Conhecer o Autor
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
