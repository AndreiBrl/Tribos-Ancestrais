import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

interface ParchmentTextSectionProps {
	bannerSrc: string;
	bannerAlt: string;
	bannerWidth: number;
	bannerHeight: number;
	containerHeightClass?: string;
	children: ReactNode;
}

export function ParchmentTextSection({
	bannerSrc,
	bannerAlt,
	bannerWidth,
	bannerHeight,
	containerHeightClass = "h-fit pb-[20vw] min-[601px]:pb-[5vw]",
	children,
}: ParchmentTextSectionProps) {
	return (
		<section
			className={`relative mx-0 min-[601px]:mx-[20vw] bg-parchment-card opacity-0 animate-apareceHome ${containerHeightClass}`}
		>
			<Link href="/" aria-label="Voltar para a página inicial">
				<Image
					src="/img/setaVolta.png"
					alt="Voltar"
					width={500}
					height={500}
					className="block min-[601px]:hidden absolute top-[5vw] z-[5] brightness-0 [transform:rotateY(180deg)] w-[15vw] h-[15vw]"
				/>
			</Link>

			<Image
				src={bannerSrc}
				alt={bannerAlt}
				width={bannerWidth}
				height={bannerHeight}
				quality={100}
				className="w-screen min-[601px]:w-[59.2vw] h-auto absolute top-[-2vw] min-[601px]:top-[-1.2vw]"
			/>

			<div className="mx-[12vw] min-[601px]:mx-[10vw] flex">
				<div className="border-l-2 min-[601px]:border-l-[3px] border-tribos-brown mt-[25vw] min-[601px]:mt-[15vw] text-justify flex flex-col gap-[5vw] min-[601px]:gap-[1vw] text-[4.3vw] min-[601px]:text-[1.3vw] font-['Times_New_Roman',Times,serif] pl-[3vw] min-[601px]:pl-[1vw]">
					{children}
				</div>
			</div>
		</section>
	);
}
