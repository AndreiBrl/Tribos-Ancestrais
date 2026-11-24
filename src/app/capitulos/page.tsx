"use client";

import { useGhibli } from "@/context/GhibliContext";
import { BOOK_CHAPTERS } from "@/data/book";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CapitulosPage() {
	const { savedPage, showToast } = useGhibli();
	const gridRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = gridRef.current;
		if (!el) return;
		const ctx = gsap.context(() => {
			gsap.fromTo(
				".ghibli-card",
				{ opacity: 0, y: 18, scale: 0.96 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.48,
					stagger: 0.045,
					ease: "power2.out",
					clearProps: "transform",
				},
			);
		}, el);
		return () => ctx.revert();
	}, []);

	return (
		<section className="screen screen-chapters active" data-screen="capitulos">
			<div className="chapters-shell">
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
						<h2>Capítulos</h2>
					</div>
				</header>

				<div className="chapters-grid" id="chapters-grid" ref={gridRef}>
					{BOOK_CHAPTERS.map((ch, idx) => {
						const cardUrl = `/ghibli/card-${idx + 1}.png`;
						const isReading = ch.available && savedPage >= ch.startPage && savedPage <= ch.endPage;
						const isDone = ch.available && savedPage > ch.endPage;
						const badge = !ch.available
							? "Em breve"
							: isReading
								? "Em leitura"
								: isDone
									? "Lido"
									: "";

						if (!ch.available) {
							return (
								<button
									key={ch.number}
									type="button"
									className="ghibli-card is-locked"
									data-chapter={ch.number}
									style={{ backgroundImage: `url('${cardUrl}')` }}
									onClick={() => showToast(`Capítulo ${ch.number} ainda está sendo escrito!`)}
								>
									<span className="card-inner">
										<span className="card-num">{ch.number}</span>
										<strong className="card-title">{ch.title}</strong>
										{badge && <span className="card-badge">{badge}</span>}
									</span>
								</button>
							);
						}

						return (
							<Link
								key={ch.number}
								href={`/leitura?page=${ch.startPage}`}
								className={`ghibli-card ghibli-card-link${isReading ? " is-current" : ""}`}
								data-chapter={ch.number}
								style={{ backgroundImage: `url('${cardUrl}')` }}
							>
								<span className="card-inner">
									<span className="card-num">{ch.number}</span>
									<strong className="card-title">{ch.title}</strong>
									{badge && <span className="card-badge">{badge}</span>}
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
