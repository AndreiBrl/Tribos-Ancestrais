"use client";

import { BookPageRenderer } from "@/components/ui/BookPageRenderer";
import { ChapterMenuOverlay } from "@/components/ui/ChapterMenuOverlay";
import { TOTAL_BOOK_PAGES } from "@/data/book";
import { useBookReader } from "@/hooks/useBookReader";
import Image from "next/image";
import Link from "next/link";

export function ReaderSection() {
	const {
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
	} = useBookReader();

	const blurStyle = {
		filter: menuOpen ? "blur(10px)" : "none",
	};

	return (
		<main className="flex justify-center items-center w-screen h-screen max-[768px]:flex-col max-[768px]:h-fit max-[768px]:opacity-0 max-[768px]:animate-apareceHome">
			{/* Menu de Capítulos (Mobile) */}
			<ChapterMenuOverlay
				menuOpen={menuOpen}
				onOpenMenu={() => setMenuOpen(true)}
				onCloseMenu={() => setMenuOpen(false)}
				onSelectChapter={handleChapterSelect}
			/>

			{/* Aviso Desktop */}
			<div className="block max-[768px]:hidden text-center px-6">
				<h1 className="text-[2em] font-bold">
					Modo Leitura disponível apenas para formato Celular
				</h1>
			</div>

			{/* Botão Voltar (Mobile) */}
			<Link
				href="/"
				style={blurStyle}
				className="hidden max-[768px]:block text-[3.5vw] ml-[50vw] mt-[10vw] w-fit font-potta"
			>
				<h1 className="text-[2em] font-bold">Voltar</h1>
			</Link>

			{/* Controles de Página e Mapa (Mobile) */}
			<div
				style={blurStyle}
				className="hidden max-[768px]:flex w-fit justify-center items-center gap-[3vw] mt-[30vw] mr-[27vw]"
			>
				<Link
					href="/mapa"
					style={blurStyle}
					aria-label="Abrir Mapa"
					className="hidden max-[768px]:block mr-[5vw] w-fit"
				>
					<Image src="/img/iconeMap.png" alt="Mapa" width={80} height={80} />
				</Link>

				<Image
					src="/img/setaDireita.png"
					alt="Página anterior"
					width={30}
					height={30}
					onClick={decrementarPagina}
					style={{ transform: "rotate(180deg)" }}
					className="cursor-pointer"
				/>

				<input
					type="number"
					min={0}
					max={TOTAL_BOOK_PAGES}
					aria-label="Número da página"
					value={pagina}
					onChange={(e) => setPagina(Number(e.target.value))}
					className="w-[20vw] h-[15vw] text-[10vw] text-center rounded-[10px] bg-[#ffffffd1] border border-[rgb(184,184,184)]"
				/>

				<Image
					src="/img/setaDireita.png"
					alt="Próxima página"
					width={30}
					height={30}
					onClick={incrementarPagina}
					style={{ filter: "grayscale(100%)" }}
					className="cursor-pointer"
				/>
			</div>

			{/* Conteúdo da Leitura (Mobile) */}
			<div
				style={blurStyle}
				onClick={() => {
					if (menuOpen) setMenuOpen(false);
				}}
				onKeyDown={(e) => {
					if (e.key === "Escape" && menuOpen) setMenuOpen(false);
				}}
				className="hidden max-[768px]:block select-none mt-[5vw] text-center w-screen"
			>
				<div>
					<h1
						style={{ fontSize: isChapterStart ? "12vw" : "7vw" }}
						className="uppercase text-tribos-red font-bold"
					>
						{capitulo.numero}
					</h1>
					<h2 style={{ fontSize: isChapterStart ? "9vw" : "5vw" }} className="font-bold">
						{capitulo.titulo}
					</h2>
				</div>

				<div
					ref={dragContainerRef}
					onPointerDown={handlePointerDown}
					onPointerMove={handlePointerMove}
					onPointerUp={handlePointerUpOrCancel}
					onPointerCancel={handlePointerUpOrCancel}
					className="touch-pan-y"
				>
					<BookPageRenderer pageData={currentPageData} />
				</div>
			</div>
		</main>
	);
}
