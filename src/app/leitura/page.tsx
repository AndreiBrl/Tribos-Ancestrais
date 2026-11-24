"use client";

import { BookPageRenderer } from "@/components/ui/BookPageRenderer";
import { FadeImage } from "@/components/ui/FadeImage";
import { useGhibli } from "@/context/GhibliContext";
import { BOOK_CHAPTERS, BOOK_PAGES, TOTAL_BOOK_PAGES, getChapterForPage } from "@/data/book";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
	type TouchEvent as ReactTouchEvent,
	Suspense,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";

function LeituraContent() {
	const searchParams = useSearchParams();
	const { setSavedPage } = useGhibli();

	const [currentPage, setCurrentPage] = useState(0);
	const [jumpValue, setJumpValue] = useState("0");
	const [drawerMounted, setDrawerMounted] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const screenRef = useRef<HTMLElement>(null);
	const paperRef = useRef<HTMLElement>(null);
	const touchStartRef = useRef<{ x: number; y: number } | null>(null);
	const pageParam = searchParams.get("page");

	// Initialize page from ?page= query param or localStorage (never snap back when turning pages)
	useEffect(() => {
		if (pageParam !== null && Number.isFinite(Number(pageParam))) {
			const p = Math.max(0, Math.min(TOTAL_BOOK_PAGES, Math.round(Number(pageParam))));
			setCurrentPage(p);
			setJumpValue(String(p));
			setSavedPage(p);
			return;
		}
		const raw = localStorage.getItem("pagina");
		const parsed = raw !== null ? Number(raw) : 0;
		const p =
			Number.isFinite(parsed) && parsed >= 0 && parsed <= TOTAL_BOOK_PAGES ? Math.round(parsed) : 0;
		setCurrentPage(p);
		setJumpValue(String(p));
	}, [pageParam, setSavedPage]);

	const goToPage = useCallback(
		(nextPage: number, direction: -1 | 0 | 1 = 0) => {
			const clamped = Math.max(0, Math.min(TOTAL_BOOK_PAGES, Math.round(nextPage)));
			setCurrentPage(clamped);
			setJumpValue(String(clamped));
			setSavedPage(clamped);
			if (typeof window !== "undefined") {
				const url = new URL(window.location.href);
				url.searchParams.set("page", String(clamped));
				window.history.replaceState(null, "", url.toString());
			}
			if (screenRef.current) {
				screenRef.current.scrollTo({ top: 0, behavior: "smooth" });
			}
			if (paperRef.current) {
				gsap.fromTo(
					paperRef.current,
					{ opacity: 0.45, x: direction * 18 },
					{ opacity: 1, x: 0, duration: 0.28, ease: "power2.out", clearProps: "transform" },
				);
			}
		},
		[setSavedPage],
	);

	const turn = useCallback(
		(delta: -1 | 1) => {
			goToPage(currentPage + delta, delta);
		},
		[currentPage, goToPage],
	);

	const openDrawer = useCallback(() => {
		setDrawerMounted(true);
		requestAnimationFrame(() => setDrawerOpen(true));
	}, []);

	const closeDrawer = useCallback(() => {
		setDrawerOpen(false);
		window.setTimeout(() => setDrawerMounted(false), 280);
	}, []);

	// Keyboard arrows & Escape
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.target instanceof HTMLInputElement) return;
			if (e.key === "ArrowRight") turn(1);
			else if (e.key === "ArrowLeft") turn(-1);
			else if (e.key === "Escape" && drawerOpen) closeDrawer();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [turn, drawerOpen, closeDrawer]);

	const handleTouchStart = (e: ReactTouchEvent<HTMLElement>) => {
		if (e.touches.length !== 1) return;
		touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
	};

	const handleTouchEnd = (e: ReactTouchEvent<HTMLElement>) => {
		if (!touchStartRef.current || e.changedTouches.length !== 1) return;
		const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
		const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
		touchStartRef.current = null;
		if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
			turn(dx < 0 ? 1 : -1);
		}
	};

	const applyJump = () => {
		const raw = Number(jumpValue);
		if (!Number.isFinite(raw)) {
			setJumpValue(String(currentPage));
			return;
		}
		goToPage(raw, raw > currentPage ? 1 : raw < currentPage ? -1 : 0);
	};

	const activeChapter = useMemo(() => {
		const found = getChapterForPage(currentPage);
		if (found) return found;
		return { numero: BOOK_CHAPTERS[0].number, titulo: BOOK_CHAPTERS[0].title };
	}, [currentPage]);
	const pageData = BOOK_PAGES[currentPage] ?? BOOK_PAGES[0];

	return (
		<>
			{/* Menu lateral orgânico fixado à viewport esquerda */}
			<button
				type="button"
				className="ghibli-branch-tab"
				id="branch-menu-btn"
				aria-label="Abrir menu de navegação"
				aria-expanded={drawerOpen}
				aria-controls="reader-drawer"
				onClick={openDrawer}
			>
				<FadeImage src="/ghibli/menu-tab.png" alt="" />
			</button>

			{/* Gaveta do menu do leitor */}
			{drawerMounted && (
				<div
					className={`reader-drawer-backdrop${drawerOpen ? " is-open" : ""}`}
					id="reader-drawer"
					onClick={(e) => {
						if (e.target === e.currentTarget) closeDrawer();
					}}
					onKeyDown={(e) => {
						if (e.key === "Escape") closeDrawer();
					}}
				>
					<dialog open className="reader-drawer-panel" aria-label="Menu do Leitor">
						<div className="drawer-head">
							<h3>Diário da Tribo</h3>
							<button
								type="button"
								className="sky-modal-close"
								aria-label="Fechar menu"
								onClick={closeDrawer}
							>
								✕
							</button>
						</div>

						<div className="drawer-nav-links">
							<Link href="/" className="ghibli-pill-btn" onClick={closeDrawer}>
								Início
							</Link>
							<Link href="/mapa" className="ghibli-pill-btn is-secondary" onClick={closeDrawer}>
								Mapa
							</Link>
						</div>

						<p className="drawer-section-label">Capítulos</p>
						<div className="drawer-chapters" id="drawer-chapters">
							{BOOK_CHAPTERS.filter((c) => c.available).map((c) => (
								<button
									key={c.number}
									type="button"
									className={`drawer-ch-btn${c.number === activeChapter.numero && currentPage > 0 ? " is-active" : ""}`}
									onClick={() => {
										goToPage(c.startPage, 0);
										closeDrawer();
									}}
								>
									<span>{c.number}</span>
									<strong>{c.title}</strong>
								</button>
							))}
						</div>
					</dialog>
				</div>
			)}

			<section className="screen screen-inner active" data-screen="ler" ref={screenRef}>
				<div className="inner-shell reader-shell">
					<header className="chapters-topbar reader-topbar">
						<div className="reader-meta">
							<h2 id="reader-ch-title">
								{currentPage === 0 ? (
									"Prólogo — Tribos Ancestrais"
								) : (
									<>
										<span className="reader-ch-roman">{activeChapter.numero}</span> —{" "}
										{activeChapter.titulo}
									</>
								)}
							</h2>
							<p id="reader-page-meta">
								Página {currentPage} de {TOTAL_BOOK_PAGES}
							</p>
						</div>

						<div className="reader-top-arrows">
							<button
								type="button"
								className="ghibli-arrow-btn"
								disabled={currentPage <= 0}
								onClick={() => turn(-1)}
								aria-label="Página anterior"
							>
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.4"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M15 18l-6-6 6-6" />
								</svg>
							</button>
							<input
								type="number"
								id="page-jump-input"
								className="page-jump-input"
								min={0}
								max={TOTAL_BOOK_PAGES}
								inputMode="numeric"
								aria-label="Ir para página"
								title="Ir para página"
								value={jumpValue}
								onChange={(e) => setJumpValue(e.target.value)}
								onBlur={applyJump}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										e.preventDefault();
										applyJump();
										e.currentTarget.blur();
									}
								}}
							/>
							<button
								type="button"
								className="ghibli-arrow-btn"
								disabled={currentPage >= TOTAL_BOOK_PAGES}
								onClick={() => turn(1)}
								aria-label="Próxima página"
							>
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="none"
									stroke="currentColor"
									strokeWidth="2.4"
									strokeLinecap="round"
									strokeLinejoin="round"
									aria-hidden="true"
								>
									<path d="M9 18l6-6-6-6" />
								</svg>
							</button>
						</div>
					</header>

					<article
						className="ghibli-parchment reader-paper"
						id="reader-paper"
						ref={paperRef}
						onTouchStart={handleTouchStart}
						onTouchEnd={handleTouchEnd}
					>
						<BookPageRenderer pageData={pageData} />
					</article>
				</div>
			</section>
		</>
	);
}

export default function LeituraPage() {
	return (
		<Suspense fallback={null}>
			<LeituraContent />
		</Suspense>
	);
}
