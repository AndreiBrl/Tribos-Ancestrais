"use client";

import { useGhibli } from "@/context/GhibliContext";
import { BOOK_CHAPTERS } from "@/data/book";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CapitulosPage() {
	const { savedPage, showToast } = useGhibli();
	const [loadedCards, setLoadedCards] = useState<Record<string, boolean>>({});

	useEffect(() => {
		let cancelled = false;
		BOOK_CHAPTERS.forEach((ch, idx) => {
			const img = new window.Image();
			const markReady = () => {
				if (cancelled) return;
				setLoadedCards((prev) => (prev[ch.number] ? prev : { ...prev, [ch.number]: true }));
			};
			img.onload = markReady;
			img.onerror = markReady;
			img.src = `/ghibli/card-${idx + 1}.png`;
			if (img.complete && img.naturalWidth > 0) {
				markReady();
			}
		});
		return () => {
			cancelled = true;
		};
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

				<div className="chapters-grid" id="chapters-grid">
					{BOOK_CHAPTERS.map((ch, idx) => {
						const cardUrl = `/ghibli/card-${idx + 1}.png`;
						const isReady = Boolean(loadedCards[ch.number]);
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
									className={`ghibli-card is-locked${isReady ? " is-card-ready" : ""}`}
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
								className={`ghibli-card ghibli-card-link${isReading ? " is-current" : ""}${isReady ? " is-card-ready" : ""}`}
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
