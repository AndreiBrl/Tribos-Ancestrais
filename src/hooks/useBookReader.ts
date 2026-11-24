"use client";

import {
	BOOK_PAGES,
	type BookPageData,
	CHAPTER_START_PAGES,
	TOTAL_BOOK_PAGES,
	getChapterForPage,
} from "@/data/book";
import { gsap } from "@/lib/gsap";
import {
	type PointerEvent as ReactPointerEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";

export function useBookReader() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [pagina, setPaginaState] = useState(0);
	const [hydrated, setHydrated] = useState(false);

	const dragContainerRef = useRef<HTMLDivElement>(null);
	const dragStartXRef = useRef<number | null>(null);

	const setPagina = useCallback((nextPage: number | ((prev: number) => number)) => {
		setPaginaState((prev) => {
			const raw = typeof nextPage === "function" ? nextPage(prev) : nextPage;
			if (Number.isNaN(raw)) return prev;
			return Math.max(0, Math.min(TOTAL_BOOK_PAGES, raw));
		});
	}, []);

	const incrementarPagina = useCallback(() => {
		setPagina((prev) => (prev < TOTAL_BOOK_PAGES ? prev + 1 : prev));
	}, [setPagina]);

	const decrementarPagina = useCallback(() => {
		setPagina((prev) => (prev > 0 ? prev - 1 : prev));
	}, [setPagina]);

	// Carrega a página salva no localStorage na montagem
	useEffect(() => {
		const paginaSalva = localStorage.getItem("pagina");
		const parsed = paginaSalva !== null ? Number(paginaSalva) : 1;
		const validPage =
			!Number.isNaN(parsed) && parsed >= 0 && parsed <= TOTAL_BOOK_PAGES ? parsed : 1;
		setPaginaState(validPage);
		setHydrated(true);
	}, []);

	// Salva a página no localStorage e rola suavemente para o topo ao trocar de página
	useEffect(() => {
		if (!hydrated) return;
		localStorage.setItem("pagina", String(pagina));
		window.scrollTo({ top: 0, behavior: "smooth" });

		if (dragContainerRef.current) {
			gsap.fromTo(
				dragContainerRef.current,
				{ opacity: 0.4, x: 0 },
				{ opacity: 1, x: 0, duration: 0.25, ease: "power2.out" },
			);
		}
	}, [pagina, hydrated]);

	// Atalhos de teclado (Setas Esquerda/Direita)
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.target instanceof HTMLInputElement) return;
			if (event.key === "ArrowRight") {
				incrementarPagina();
			} else if (event.key === "ArrowLeft") {
				decrementarPagina();
			} else if (event.key === "Escape" && menuOpen) {
				setMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [incrementarPagina, decrementarPagina, menuOpen]);

	const handleChapterSelect = useCallback(
		(startPage: number) => {
			setPagina(startPage);
			setMenuOpen(false);
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
		[setPagina],
	);

	// Gestos de arraste horizontal (Swipe) com GSAP
	const handlePointerDown = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
		dragStartXRef.current = e.clientX;
	}, []);

	const handlePointerMove = useCallback((e: ReactPointerEvent<HTMLDivElement>) => {
		if (dragStartXRef.current === null || !dragContainerRef.current) return;
		const deltaX = e.clientX - dragStartXRef.current;
		if (Math.abs(deltaX) > 10) {
			gsap.set(dragContainerRef.current, { x: deltaX * 0.35 });
		}
	}, []);

	const handlePointerUpOrCancel = useCallback(
		(e: ReactPointerEvent<HTMLDivElement>) => {
			if (dragStartXRef.current === null) return;
			const offsetX = e.clientX - dragStartXRef.current;
			dragStartXRef.current = null;

			if (dragContainerRef.current) {
				gsap.to(dragContainerRef.current, { x: 0, duration: 0.2, ease: "power2.out" });
			}

			if (offsetX < -100 && pagina < TOTAL_BOOK_PAGES) {
				incrementarPagina();
			} else if (offsetX > 100 && pagina > 0) {
				decrementarPagina();
			}
		},
		[pagina, incrementarPagina, decrementarPagina],
	);

	const capitulo = getChapterForPage(pagina);
	const isChapterStart = CHAPTER_START_PAGES.has(pagina);
	const currentPageData: BookPageData = BOOK_PAGES[pagina] ?? BOOK_PAGES[0];

	return {
		pagina,
		setPagina,
		incrementarPagina,
		decrementarPagina,
		menuOpen,
		setMenuOpen,
		capitulo,
		isChapterStart,
		currentPageData,
		handleChapterSelect,
		dragContainerRef,
		handlePointerDown,
		handlePointerMove,
		handlePointerUpOrCancel,
	};
}
