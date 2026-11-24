import { FadeNextImage } from "@/components/ui/FadeNextImage";
import type { BookPageData, PageBlock, ParagraphSegment } from "@/data/book";

interface BookPageRendererProps {
	pageData: BookPageData;
}

function renderSegment(segment: ParagraphSegment, index: number) {
	if (typeof segment === "string") {
		return segment;
	}
	return <i key={`italic-${index}`}>{segment.italic}</i>;
}

function renderBlock(block: PageBlock, index: number, pageNumber: number) {
	const key = `page-${pageNumber}-block-${index}`;

	switch (block.type) {
		case "cover":
			return (
				<div key={key} className="reader-book-cover">
					<FadeNextImage
						src={block.imageSrc}
						alt="Tribos Ancestrais"
						width={block.intrinsicWidth}
						height={block.intrinsicHeight}
						priority
						quality={95}
						className="reader-book-cover-img"
					/>
					<div className="reader-book-cover-titles">
						{block.lines.map((line) => (
							<h1 key={line}>{line}</h1>
						))}
					</div>
				</div>
			);

		case "paragraph":
			return (
				<p key={key} className="reader-book-paragraph">
					{block.segments.map((segment, segIdx) => renderSegment(segment, segIdx))}
				</p>
			);

		case "spacer": {
			const brKeys = Array.from({ length: block.count }, (_, idx) => `${key}-br-${idx + 1}`);
			return (
				<span key={key} className="reader-book-spacer">
					{brKeys.map((brKey) => (
						<br key={brKey} />
					))}
				</span>
			);
		}

		case "divider":
			return (
				<FadeNextImage
					key={key}
					src="/img/divisor.png"
					alt="Divisor de cena"
					width={502}
					height={48}
					className="reader-book-divider"
				/>
			);

		case "image":
			return (
				<FadeNextImage
					key={key}
					src={block.src}
					alt={block.alt ?? `Ilustração da página ${pageNumber}`}
					width={block.intrinsicWidth}
					height={block.intrinsicHeight}
					quality={90}
					className="reader-book-illustration"
				/>
			);
	}
}

export function BookPageRenderer({ pageData }: BookPageRendererProps) {
	return (
		<div className="reader-book-content">
			{pageData.blocks.map((block, index) => renderBlock(block, index, pageData.pageNumber))}
		</div>
	);
}
