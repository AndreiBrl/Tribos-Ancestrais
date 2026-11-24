export interface HomeMenuItem {
	id: "leitura" | "sobre" | "apoie";
	href: string;
	label: string;
	imageSrc: string;
	alt: string;
	width: number;
	height: number;
	className: string;
}

export const HOME_MENU_ITEMS: HomeMenuItem[] = [
	{
		id: "leitura",
		href: "/leitura",
		label: "Ler Tribos Ancestrais",
		imageSrc: "/img/livroAkin.png",
		alt: "Livro Akin",
		width: 206,
		height: 153,
		className:
			"absolute cursor-pointer transition-all duration-200 ease-linear " +
			"top-[36.5vw] left-[22.2vw] w-[26vw] h-[20vw] grayscale-0 animate-cresceLivro " +
			"md:bottom-0 md:top-[16vw] md:left-[34vw] md:w-[13.8vw] md:h-[13.8vw] md:grayscale md:animate-none md:hover:grayscale-0 md:hover:scale-[1.09]",
	},
	{
		id: "sobre",
		href: "/sobre",
		label: "Sobre o Autor",
		imageSrc: "/img/homenzin.png",
		alt: "Homenzinho",
		width: 169,
		height: 152,
		className:
			"absolute cursor-pointer transition-all duration-200 ease-linear " +
			"top-0 left-[42vw] w-[21vw] h-[21vw] grayscale-0 animate-cresceLivro " +
			"md:top-[-5.1vw] md:left-[44.6vw] md:w-[10.9vw] md:h-[10.9vw] md:grayscale md:animate-none md:hover:grayscale-0 md:hover:scale-[1.09]",
	},
	{
		id: "apoie",
		href: "/apoie",
		label: "Apoie o Projeto",
		imageSrc: "/img/saco.png",
		alt: "Saco",
		width: 199,
		height: 175,
		className:
			"absolute cursor-pointer transition-all duration-200 ease-linear " +
			"top-[28.5vw] left-[55vw] w-[26vw] h-[24vw] grayscale-0 animate-cresceLivro " +
			"md:top-auto md:bottom-[3.5vw] md:left-[51.7vw] md:w-[14vw] md:h-[14vw] md:grayscale md:animate-none md:hover:grayscale-0 md:hover:scale-[1.09]",
	},
];
