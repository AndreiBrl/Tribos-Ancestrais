import { HOME_MENU_ITEMS } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";

export function HomeMenuSection() {
	return (
		<main className="relative overflow-hidden bg-parchment bg-cover bg-no-repeat h-[191vw] md:h-[47vw] opacity-0 animate-apareceHomeSlow">
			{/* Background Mobile */}
			<Image
				src="/img/backHome.png"
				alt="Cenário Tribos Ancestrais"
				width={1080}
				height={1920}
				priority
				quality={100}
				className="block md:hidden absolute top-0 left-0 w-screen h-[114vh] max-w-none"
			/>

			{/* Título / Topo */}
			<div className="mt-[70vw] mb-[58vw] md:mt-0 md:pt-[1vw] md:mb-[5vw] text-center">
				<Image
					src="/img/tituloHome.png"
					alt="Tribos Ancestrais"
					width={950}
					height={167}
					priority
					quality={100}
					className="hidden md:inline-block w-[50vw] h-[10vw]"
				/>
			</div>

			{/* Menu Interativo */}
			<nav aria-label="Menu Principal" className="relative block md:flex md:justify-center">
				{/* Base do Menu Desktop */}
				<Image
					src="/img/menuDesk.png"
					alt="Menu Desktop"
					width={457}
					height={377}
					priority
					quality={100}
					className="hidden md:block w-[30vw] h-[30vw]"
				/>

				{/* Palavra Menu Mobile */}
				<Image
					src="/img/palavraMenu.png"
					alt="Palavra Menu"
					width={288}
					height={149}
					quality={100}
					className="block md:hidden absolute bottom-[62vw] left-[42vw] w-[21vw] h-[12vw]"
				/>

				{/* Base do Menu Mobile */}
				<Image
					src="/img/menu.png"
					alt="Menu Mobile"
					width={1334}
					height={703}
					priority
					quality={100}
					className="block md:hidden h-[63vw] w-auto max-w-none"
				/>

				{/* Ícones de Navegação (Leitura, Sobre, Apoie) */}
				{HOME_MENU_ITEMS.map((item) => (
					<Link key={item.id} href={item.href} aria-label={item.label}>
						<Image
							src={item.imageSrc}
							alt={item.alt}
							width={item.width}
							height={item.height}
							quality={100}
							className={item.className}
						/>
					</Link>
				))}
			</nav>
		</main>
	);
}
