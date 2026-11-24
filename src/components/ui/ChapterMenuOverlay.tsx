"use client";

import { BOOK_CHAPTERS } from "@/data/book";
import Image from "next/image";

interface ChapterMenuOverlayProps {
	menuOpen: boolean;
	onOpenMenu: () => void;
	onCloseMenu: () => void;
	onSelectChapter: (startPage: number) => void;
}

export function ChapterMenuOverlay({
	menuOpen,
	onOpenMenu,
	onCloseMenu,
	onSelectChapter,
}: ChapterMenuOverlayProps) {
	return (
		<div
			className={
				menuOpen
					? "hidden max-[768px]:block fixed top-0 left-0 w-screen h-[130vw] pb-[5vh] bg-white/30 rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out z-[3] overflow-visible"
					: "hidden max-[768px]:block fixed top-0 left-0 w-[40vw] h-[35vw] overflow-hidden transition-all duration-300 ease-in-out"
			}
		>
			{/* Galho Seco (Abre o Menu) */}
			<Image
				src="/img/galhoSeco.png"
				alt="Abrir menu de capítulos"
				width={90}
				height={130}
				quality={100}
				onClick={onOpenMenu}
				className={
					menuOpen
						? "rotate-[100deg] absolute opacity-0 transition-all duration-300 ease-in-out left-[2vw] -z-[1]"
						: "rotate-[100deg] absolute opacity-100 transition-all duration-300 ease-in-out left-[2vw] z-[1] cursor-pointer"
				}
			/>

			{/* Galho Energia (Fecha o Menu) */}
			<Image
				src="/img/galhoEnergia2.png"
				alt="Fechar menu de capítulos"
				width={120}
				height={180}
				quality={100}
				onClick={onCloseMenu}
				className={
					menuOpen
						? "rotate-[100deg] absolute opacity-100 transition-all duration-300 ease-in-out left-[2vw] z-[1] cursor-pointer"
						: "rotate-[100deg] absolute opacity-0 transition-all duration-300 ease-in-out left-[2vw] -z-[1]"
				}
			/>

			{/* Lista de Capítulos */}
			<div
				className={`mt-[30vw] w-screen h-[100vw] flex-col justify-center items-center p-[10vw] overflow-x-auto ${
					menuOpen ? "block" : "hidden"
				}`}
			>
				{BOOK_CHAPTERS.map((chapter) => (
					<div
						key={chapter.number}
						onClick={chapter.available ? () => onSelectChapter(chapter.startPage) : undefined}
						onKeyDown={
							chapter.available
								? (e) => {
										if (e.key === "Enter" || e.key === " ") {
											onSelectChapter(chapter.startPage);
										}
									}
								: undefined
						}
						className={`border-b border-[rgb(88,88,88)] flex flex-col justify-center items-center p-[5vw] ${
							chapter.available ? "opacity-100 cursor-pointer" : "opacity-50"
						}`}
					>
						<h1 className="text-[4.5vw] text-tribos-red w-fit font-potta font-bold">
							{chapter.number}
						</h1>
						<h2 className="text-[5vw] font-potta font-bold">{chapter.title}</h2>
					</div>
				))}
			</div>

			{/* Galho Inferior do Menu */}
			<Image
				src="/img/galhoMenuFinal2.png"
				alt="Ornamento inferior do menu"
				width={202}
				height={1024}
				quality={100}
				className="w-[15vw] h-[130vw] rotate-90 absolute top-[65vw] left-[45vw] transition-all duration-300 ease-in-out pointer-events-none"
			/>
		</div>
	);
}
