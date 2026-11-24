"use client";

import { FadeImage } from "@/components/ui/FadeImage";
import { useGhibli } from "@/context/GhibliContext";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const AUTHOR_SECRETS = [
	"“No começo, eram só personagens malucos pulando por aí com fone de ouvido no máximo.”",
	"“Goku de DBZ e idas ao cinema acenderam a faísca que hoje move cada capítulo de Tribos Ancestrais.”",
	"“A história nasceu como livro puro — mas os cenários pediram tanto por imagens que virou mangá!”",
	"“Entre linhas de código e estudos de desenho, o universo de Xa’ru ganha vida um quadro por vez.”",
];

export default function SobrePage() {
	const { copyText } = useGhibli();
	const [secretIdx, setSecretIdx] = useState(0);
	const stageRef = useRef<HTMLDivElement>(null);
	const quoteRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const el = stageRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				el,
				{ opacity: 0, y: 14 },
				{ opacity: 1, y: 0, duration: 0.52, ease: "power2.out" },
			);
		}, el);
		return () => ctx.revert();
	}, []);

	const cycleSecret = () => {
		setSecretIdx((prev) => (prev + 1) % AUTHOR_SECRETS.length);
		if (quoteRef.current) {
			gsap.fromTo(
				quoteRef.current,
				{ opacity: 0.3 },
				{ opacity: 1, duration: 0.32, ease: "power2.out" },
			);
		}
	};

	return (
		<section className="screen screen-inner active" data-screen="autor">
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
						<h2>Sobre o Autor</h2>
						<p>Andrei Barbuto</p>
					</div>
				</header>

				<div className="organic-stage author-stage" ref={stageRef}>
					<div className="author-wreath-crest">
						<FadeImage className="author-crest-photo" src="/img/perfil.png" alt="Andrei Barbuto" />
						<FadeImage
							className="author-crest-wreath"
							src="/ghibli/author-wreath.png"
							alt=""
							aria-hidden="true"
						/>
					</div>

					<div className="ghibli-parchment organic-scroll-sheet prose-card author-sheet">
						<div className="organic-sheet-head">
							<h3>Andrei Barbuto</h3>
							<span className="author-role">Autor &amp; Idealizador</span>
						</div>

						<div className="organic-prose">
							<p>
								Olá! Tudo começou com desenhos animados, idas ao cinema e muita influência do Goku
								de DBZ. Hoje sou um devorador de histórias em livros, mangás, séries e filmes.
							</p>
							<p>
								Estudo para ser programador e, nas horas vagas, escrevo{" "}
								<strong>Tribos Ancestrais</strong> — que nasceu de caminhadas pela rua com o fone no
								máximo e música de ação, imaginando personagens malucos pulando por aí desde a
								pandemia.
							</p>
						</div>

						<FadeImage
							className="organic-branch-divider"
							src="/ghibli/organic-divider.png"
							alt=""
							aria-hidden="true"
						/>

						<div className="organic-oracle-stage">
							<button
								type="button"
								className="oracle-spirit-btn"
								onClick={cycleSecret}
								aria-label="Tocar no espírito da floresta para outro segredo"
							>
								<FadeImage
									className="oracle-spirit-img"
									src="/ghibli/author-spirit.png"
									alt="Espírito da floresta segurando um pergaminho"
								/>
							</button>
							<div className="oracle-bubble">
								<span className="oracle-tag">Segredo sussurrado</span>
								<p className="oracle-quote" ref={quoteRef}>
									{AUTHOR_SECRETS[secretIdx]}
								</p>
								<button
									type="button"
									className="ghibli-pill-btn is-secondary"
									onClick={cycleSecret}
								>
									✨ Outro segredo do autor
								</button>
							</div>
						</div>

						<div className="prose-actions organic-actions">
							<a
								className="ghibli-pill-btn"
								href="https://www.instagram.com/tribos_ancestrais?igsh=MWwybzNtZ3dyd2I5dQ=="
								target="_blank"
								rel="noopener noreferrer"
							>
								Instagram
							</a>
							<button
								type="button"
								className="ghibli-pill-btn is-secondary"
								onClick={() => copyText("contatoandreibr@gmail.com", "E-mail copiado!")}
							>
								Copiar E-mail
							</button>
							<Link href="/apoie" className="ghibli-pill-btn is-secondary">
								Apoiar o Mangá →
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
