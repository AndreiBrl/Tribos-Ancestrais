export type ParagraphSegment = string | { italic: string };

export interface CoverBlock {
	type: "cover";
	imageSrc: string;
	intrinsicWidth: number;
	intrinsicHeight: number;
	lines: string[];
}

export interface ParagraphBlock {
	type: "paragraph";
	segments: ParagraphSegment[];
}

export interface SpacerBlock {
	type: "spacer";
	count: number;
}

export interface DividerBlock {
	type: "divider";
}

export interface ImageBlock {
	type: "image";
	src: string;
	intrinsicWidth: number;
	intrinsicHeight: number;
	heightVw?: string;
	widthVw?: string;
	alt?: string;
}

export type PageBlock = CoverBlock | ParagraphBlock | SpacerBlock | DividerBlock | ImageBlock;

export interface BookPageData {
	pageNumber: number;
	blocks: PageBlock[];
}

export interface BookChapter {
	number: string;
	title: string;
	startPage: number;
	endPage: number;
	available: boolean;
}

export const TOTAL_BOOK_PAGES = 93;

export const BOOK_CHAPTERS: BookChapter[] = [
	{
		number: "I",
		title: "O Eco do Irmão Perdido",
		startPage: 1,
		endPage: 6,
		available: true,
	},
	{
		number: "II",
		title: "A Dor que Desperta",
		startPage: 7,
		endPage: 12,
		available: true,
	},
	{
		number: "III",
		title: "Um Banquete para Porcos",
		startPage: 13,
		endPage: 24,
		available: true,
	},
	{
		number: "IV",
		title: "O Caminho Revelado",
		startPage: 25,
		endPage: 31,
		available: true,
	},
	{
		number: "V",
		title: "A Cabana na Clareira",
		startPage: 32,
		endPage: 40,
		available: true,
	},
	{
		number: "VI",
		title: "Sangue e Sacrifício",
		startPage: 41,
		endPage: 47,
		available: true,
	},
	{
		number: "VII",
		title: "Xa'ru Xaruna",
		startPage: 48,
		endPage: 56,
		available: true,
	},
	{
		number: "VIII",
		title: "Um Sonho Impossível",
		startPage: 57,
		endPage: 73,
		available: true,
	},
	{
		number: "IX",
		title: "Obsidiana Vermelha",
		startPage: 74,
		endPage: 81,
		available: true,
	},
	{
		number: "X",
		title: "Torokar",
		startPage: 82,
		endPage: 93,
		available: true,
	},
	{
		number: "XI",
		title: "O Verdadeiro Propósito",
		startPage: 94,
		endPage: 94,
		available: false,
	},
];

export const CHAPTER_START_PAGES = new Set<number>([0, 1, 7, 13, 25, 32, 41, 48, 57, 74, 82]);

export function getChapterForPage(page: number): { numero: string; titulo: string } {
	if (page <= 0) {
		return { numero: "", titulo: "" };
	}
	const found = BOOK_CHAPTERS.find(
		(chapter) => chapter.available && page >= chapter.startPage && page <= chapter.endPage,
	);
	if (!found) {
		return { numero: "", titulo: "" };
	}
	return { numero: found.number, titulo: found.title };
}

export const BOOK_PAGES: BookPageData[] = [
	{
		pageNumber: 0,
		blocks: [
			{
				type: "cover",
				imageSrc: "/img/tituloWordTribo.png",
				intrinsicWidth: 934,
				intrinsicHeight: 421,
				lines: ["Escrito por", "Andrei Barbuto", "2024"],
			},
		],
	},
	{
		pageNumber: 1,
		blocks: [
			{
				type: "image",
				src: "/img/cap1/paku_1.png",
				intrinsicWidth: 886,
				intrinsicHeight: 817,
			},
			{
				type: "paragraph",
				segments: ["Perguntou Paku."],
			},
			{
				type: "paragraph",
				segments: [
					"Abak lançou-lhe um olhar seco, esporou o cavalo, afastando-se. Paku o acompanhou.",
				],
			},
			{
				type: "paragraph",
				segments: [" — O que foi agora, Paku? — Rebateu, com a voz baixa\r\n            abafada."],
			},
			{
				type: "paragraph",
				segments: [
					"  — Antigamente não era assim, Fakuri errou em trazê-lo. —\r\n            Os dois trotavam em seus cavalos a frente do grupo em uma\r\n            estrada tortuosa cercada por densa floresta. Naquele momento, o\r\n            sol afinava-se no horizonte e seus raios se esparramavam cedendo\r\n            ao crepúsculo que adentrava a floresta.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"     Um silvo leve e contínuo rasgou o ar, chegando ao ouvido dos\r\n            dois. Lá de trás, Fakuri assobiava, sinal de que era hora de montar\r\n            acampamento.",
				],
			},
			{
				type: "paragraph",
				segments: [
					" — Esqueça o passado Paku. — Cortou Abak, puxando as rédeas até\r\n            o cavalo parar. — Respeite a decisão de nosso líder. — Completou ele. Paku\r\n            franziu o cenho irreverente e puxou o cavalo para dar meia volta.",
				],
			},
			{
				type: "paragraph",
				segments: ["\r\n            O primeiro dia de cavalgada terminava."],
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 2,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"   Enquanto isso, atrás deles estavam Fakuri, Kizuno e Akin.\r\n            Fakuri imponente em seu cavalo marrom ornado com couros\r\n            tingidos. Na lateral direita, o cavalo ostentava a marca da tribo em vermelho sangue, mostrando sua posição de líder tribal. A marca tingida no couro era como um círculo cortado por traços em suas bordas. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ao lado do chefe vinha Kizuno, mestre de guerra e conselheiro de Fakuri. No mesmo cavalo, agarrado a ele, estava seu discípulo, um jovem de pele morena clara, cabelo curto mal raspado, e que usava trajes tribais de couro.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri puxou as rédeas de seu cavalo e fez sinal com a mão para que Kizuno também o fizesse.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Kizuno, acompanhe-me na ronda. — Disse Fakuri."],
			},
			{
				type: "paragraph",
				segments: ["Kizuno olha para o chefe hesitante e então se vira para o jovem atrás dele."],
			},
			{
				type: "paragraph",
				segments: [
					"— Akin. — Disse ele em tom leve. — Desça e monte acampamento junto de Abak e Paku.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O garoto olhou nos olhos do homem entendendo do que se tratava, puxou sua lança amarrada na lateral do cavalo e pulou. Kizuno pôs o cavalo a trotar e partiu atrás do chefe, que já se adiantava.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Abak e Paku voltavam e à medida que se aproximavam do garoto diminuiam a velocidade de seus cavalos. Ambos desmontaram e levaram seus animais para perto da margem da estrada, onde iriam amarrá-los. Akin os observava atento, até que Abak se aproximou.",
				],
			},
		],
	},
	{
		pageNumber: 3,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Prepare a caça Akin, Paku e eu faremos a ronda a pé e traremos um pouco de madeira. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin assentiu com a cabeça. Abak e Paku adentraram a lateral da estrada, floresta adentro. O garoto olhou para os alforges de couro dos cavalos, onde provavelmente estariam as lebres que comeriam, andou até eles se aproximando da floresta. Parou ali e fitou a densidade da mata, já não escutava os barulhos dos passos e nem dos cavalos ao longe, estava sozinho. ",
				],
			},
			{
				type: "divider",
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto a lua tomava seu lugar na escuridão banhando os seres com sua luz, Fakuri cavalgava em silêncio ao lado de Kizuno. Era um homem robusto de pele preta e cabeça raspada. Aparentava ter cinquenta anos e usava roupas de couro trabalhado pelo corpo. Fakuri havia passado por mais batalhas que qualquer um da aldeia e carregava na face a dureza de anos de liderança. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Kizuno tinha quase a mesma idade, na verdade, era um pouco mais novo, tinha a pele preta e também usava couros por seu corpo.",
				],
			},
		],
	},
	{
		pageNumber: 4,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Conhecia Fakuri como amigo há muitos anos, desde muito antes dele ser chefe da tribo, eram como irmãos.  ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Me preocupo com Akin. — Lançou Kizuno, rompendo o silêncio."],
			},
			{
				type: "image",
				src: "/img/cap1/kizuno_fakuri.png",
				intrinsicWidth: 891,
				intrinsicHeight: 883,
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri encarava o luar com olhar sereno, como se momentos como aquele fossem raros.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Como foi sua primeira viagem para o banquete de Torokar, meu amigo? — Perguntou o chefe, voltando seu olhar para Kizuno.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Fui desafiado. — Respondeu Kizuno secamente "],
			},
			{
				type: "paragraph",
				segments: ["— E o que você fez? — Devolveu Fakuri."],
			},
			{
				type: "paragraph",
				segments: [
					"— Enfrentei o guerreiro que me desafiava e garanti meu lugar na guarda do chefe. — Respondeu Kizuno, agora com a voz mais aliviada.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Pois então, permita que o garoto mostre seu valor."],
			},
			{
				type: "paragraph",
				segments: ["Kizuno fez uma pausa breve, respirou, sabia que ele tinha razão. "],
			},
			{
				type: "paragraph",
				segments: [
					"— Se te preocupa. — Fakuri acrescentou — Ordenei Paku a não se envolver. Abak dará apenas um susto no garoto. — Disse o chefe, enquanto voltava seu olhar pensativo ao luar.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 5,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akin estava agachado alguns metros de onde os cavalos estavam amarrados e ali temperava as lebres com algumas ervas, sua lança repousava no chão ao seu lado.  ",
				],
			},
			{
				type: "spacer",
				count: 1,
			},
			{
				type: "image",
				src: "/img/cap1/akin.png",
				intrinsicWidth: 717,
				intrinsicHeight: 716,
			},
			{
				type: "spacer",
				count: 1,
			},
			{
				type: "paragraph",
				segments: [
					"Sentiu que algo o espreitava da escuridão, repousou a mão em sua lança de madeira e concentrou-se.",
					{
						italic: " A essa altura Paku e Abak ainda não poderiam estar voltando, pensou. ",
					},
					" ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Algo se moveu atrás dele, Akin girou seu corpo, mas antes que pudesse impedir um impacto forte o atingiu, levando-o ao chão. Recuperou os sentidos e viu um homem esguio encapuzado vestindo roupas de couro. Rolou para perto de sua lança, o homem investiu contra ele novamente, mas desta vez não acertou.  ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin já se levantava quando seu olhar caiu sobre a ponta da lança. Foi então que percebeu que o impacto havia quebrado a extremidade de madeira.   ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Alguns segundo mais se passaram enquanto os dois estavam de frente um para outro. Akin encarou a escuridão no capuz que tampava o rosto do desconhecido, notou que sua lança era peculiar, tinha a ponta feita de obsidiana negra. Uma pedra rara da região que somente os soldados da guarda do chefe possuíam.  ",
				],
			},
		],
	},
	{
		pageNumber: 6,
		blocks: [
			{
				type: "image",
				src: "/img/cap1/akin_paku.png",
				intrinsicWidth: 879,
				intrinsicHeight: 810,
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"O homem partiu para cima de Akin mais uma vez em alta velocidade. Os dois se moviam desviando dos ataques um do outro rapidamente, até que o homem levou sua lança ao rosto de Akin. O garoto sentiu a pedra fria rasgar o canto de sua bochecha esquerda, a dor encheu sua mente fazendo-o agir com velocidade. Levou sua mão a lança do inimigo, agarrou-a com toda força e a puxou para trás ao mesmo tempo que levou seu pé a frente, chutando o rosto do homem. O golpe inesperado o fez cambalear para trás e cair, neste momento, o capuz saiu de sua cabeça revelando o rosto de um homem com piercings de ossos na boca e pinturas tribais na face.  ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Paku! — Gritou Akin espantado."],
			},
			{
				type: "paragraph",
				segments: ["— Vocês desgraçaram minha vida! — Berrou Paku imediatamente."],
			},
			{
				type: "paragraph",
				segments: [
					"Akin hesitou ao escutar aquelas palavras e ver o rosto familiar, o suficiente para Paku levantar e sacar uma pequena faca de caça. Ele partiu para cima proferindo mais insultos de raiva. Akin saltou para trás, jogou sua lança fora ficando apenas com a de obsidiana. Desviou dos golpes com velocidade surpreendente e, mesmo assim, Paku não parou. Akin acertou a mão de Paku que segurava a faca e em seguida pegou em cheio em sua boca com o cabo da lança, fazendo-o gritar. Akin parou, e usando a parte de trás da lança estocou a barriga de Paku, que caiu de joelhos.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Caído sangrando, Paku gemeu de dor. Nesse momento, Akin parou para tomar folego, foi então que tomou uma rasteira violenta. Paku pulou para cima dele colocando a lança em seu pescoço. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin enfurecido segurou a lança antes que essa o esmagasse e a empurrou para cima, medindo forças com Paku. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Naquele instante em que lutava por sua vida, Akin sentiu uma pontada quente na barriga. O rosto louco de Paku beirava perto do seu, ele então fez ainda mais força para não ser esmagado pela lança, mas seu corpo parecia não responder. O ardor transformou-se em uma energia poderosa. Akin sentiu que poderia empurrar Paku para longe com facilidade, mas aquela energia parecia ter assumido controle, tomando mais seu corpo a cada segundo. Uma luz azul vil começou a tremeluzir sobre o rosto de Paku, ressaltando os ossos que saltavam de sua boca como presas sedentas por carne. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Uma força colossal reverberou pelo corpo de Akin, ele urrou com força e empurrou mais uma vez, mas seus braços cederam subitamente, e tudo se escureceu.",
				],
			},
		],
	},
	{
		pageNumber: 7,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Naquele dia o sol estava a pino e o calor abraçava as montanhas das terras Xa’ru. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Perto da aldeia I’akas, uma montanha coberta de vegetação se impõe, de onde brota a mais alta e enorme cachoeira do vale. Suas águas têm uma força estrondosa e desaguam suavemente no vale, nutrindo as plantações da região e os animais que ali vivem. Tamanha era sua altura, que os aldeões e andarilhos costumavam escalá-la como forma de cumprir com antigas tradições e desafios. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap2/yacamim.png",
				intrinsicWidth: 714,
				intrinsicHeight: 714,
			},
			{
				type: "image",
				src: "/img/cap2/yacamimSusto.png",
				intrinsicWidth: 1036,
				intrinsicHeight: 469,
				heightVw: "40vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim abriu os olhos subitamente, ofegante.  Algo lhe tirou a atenção. Por três dias esteve ali, parado, sentado em um pequeno espaço em meio a vegetação e a enorme cachoeira.  Mantivera-se em completa harmonia com a energia Xaruna e durante este tempo pode enxergar e sentir vibrações  vindas de muito longe, de locais separados por grandes águas. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Inspirou e expirou acalmando-se, ficou de pé e olhou para o alto da montanha. O dia que ele tanto esperara havia chegado e era hora de encontrar Iyamora.",
				],
			},
		],
	},
	{
		pageNumber: 8,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Iyamora vivia acima das águas da cachoeira em meio as árvores altas da montanha. Era uma garota xamã que, embora não fosse o costume dessas criaturas, começou a conviver com Yacamin após o incidente que aconteceu no assentamento há muitos anos. Yacamim escalou o restante da montanha, e no topo já bem acima da nascente da cachoeira, uma vegetação densa com árvores prevalecia. O homem adentrou mais a fundo, caminhando até onde seus sentidos o levavam. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap2/YacamimIyamora.png",
				intrinsicWidth: 1006,
				intrinsicHeight: 771,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Avistou Iyamora empoleirada em uma árvore e ao menor sinal ela estava à sua frente. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"As tribos daquele continente nomearam essas criaturas como Xamãs há muito tempo. Eram seres que outrora foram humanos e que um dia receberam um chamado à natureza e por fim nunca mais voltaram à sociedade. Seus poderes eram desconhecidos, assim como seu tempo de existência. A xamã de frente para Yacamim aparentava ser jovem, embora ele soubesse que ela poderia ser dez vezes mais velha que ele. A pequena tinha cabelos longos escuros e o corpo inteiro coberto por marcas e sinais de todos os tipos e formatos, os olhos eram grandes maiores do que de um humano comum e de um verde muito forte. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu finalmente senti o fluxo de energia e as vibrações de meu irmão — Disse ele, olhando para a pequena.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Iyamora o fitou por instantes, os cabelos longos sujos balançavam ao vento forte, andou alguns metros para trás até uma árvore, enfiou-se atrás dela e não voltou mais. Os encontros com ela sempre foram deste jeito, Yacamim não sabia como, ou de que jeito acontecia, mas ela se comunicava com ele apenas por estar perto, sem dizer uma única palavra. Agora, ele sabia de alguma forma o que tinha que fazer. ",
				],
			},
		],
	},
	{
		pageNumber: 9,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Todos já dormiam quando Yacamim passou pela aldeia sob o brilho da lua, o som inquietante do silêncio era rompido por seus passos e por algumas fogueiras que ainda crepitavam.  Atravessou a aldeia, passou pelo portão principal e dali seguiu indo em direção a floresta. Um pouco adiante, Yacamim se sentou.  Inspirou profundamente, e ali pensou o quanto esperara por aquele dia, por muitos anos treinou e aguçou seus sentidos para que pudesse procurar por seus irmãos e, naquele dia, finalmente sentiu florescer um eco do que seria a energia de seu irmão mais velho, forte e revigorante.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap2/YacamimIyamora2.png",
				intrinsicWidth: 903,
				intrinsicHeight: 711,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Por de trás de uma árvore, uma pantera negra subitamente apareceu, com o tamanho maior que o normal e corpo marcado por inscrições vermelhas. O olhar verde quase luminescente fixo em Yacamim. Ele se aproximou da fera pousando a mão em sua pelagem.  ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ao tocá-la, sentiu Iyamora em sua mente. Ela precisava-lhe mostrar algo. Yacamim montou a fera e os dois adentraram na floresta.",
				],
			},
		],
	},
	{
		pageNumber: 10,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap2/YacamimIyamora3.png",
				intrinsicWidth: 725,
				intrinsicHeight: 697,
				heightVw: "90vw",
				widthVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Agarrado ao dorso da criatura, Yacamim viu o quão veloz ela se movia. A fera passava com facilidade entre as árvores e nem parecia que o carregava nas costas. A velocidade parecia aumentar, ele agarrou ainda mais forte pressionando seu rosto contra o pelo do animal. Sentiu o cheiro denso e úmido entrando em sua narina, podia sentir seu gosto, era ruim, mas ele não queria desgrudar, poderia permanecer ali por muito tempo. Olhou para o lado e viu árvores contorcidas de cores estranhas, o céu estava escuro e claro ao mesmo tempo, não sabia para onde estava indo. Sua mente entrou em uma espécie de transe e a única que coisa que se lembrava, era de agarrar-se ao pelo do animal.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A fera parou, Yacamim deslizou como uma larva e caiu no chão. Virou-se de barriga para cima desorientado, olhou para o céu e viu apenas a copa das árvores. Aos poucos foi recobrando sua consciência, até conseguir se sentar. Iyamora estava ali, sentada na sua frente. Ela estendeu a mão oferecendo-lhe algum tipo de carne. Ele inspirou profundamente, sentindo o cheiro puro e úmido do interior da floresta e então pegou o bocado de carne da mão da xamã.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Onde estamos? — Perguntou, enquanto abocanhava um pedaço."],
			},
		],
	},
	{
		pageNumber: 11,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Ela queria mostrar-lhe algo na floresta profunda, perto do Vale Xa’ru onde ficava a grande árvore. Yacamim olhou intrigado, havia rumores de que os animais e demônios que atacavam as aldeias saiam daquele local. Mais uma vez em sua mente, ele pode ouvir Iyamora, como se ela dissesse que ele precisava ver algo antes de partir em jornada.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Em seguida, a xamã começou a recitar palavras xamânicas, Yacamim se surpreendeu, nunca havia presenciado aquilo na vida. A pequena fechou os olhos e do chão bem entre os dois um tambor foi conjurado. Iyamora o pegou e repousou em seu colo. O instrumento era feito de madeira rudimentar com cipós amarrados e em todos os lados possuía inscrições xamânicas que indicavam cura e fortalecimento.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim olhou fixamente para o instrumento, ele já tinha escutado histórias de seus ancestrais sobre os tambores e que eram utilizados para envio de energia. Ele já podia sentir a Xaruna poderosa só por estar perto do objeto.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A pequena levantou-se e foi até ele, estendeu os braços e mostrou as mãos em formato de concha, segurava um pigmento verde musgo avermelhado. Yacamim passou os dedos na tinta e riscou seu corpo imitando as inscrições do tambor, passou por seu rosto, braços e dorso. Olhou de volta para a xamã, que colocava suas mãos sobre o instrumento e começava a ativá-lo. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap2/Iyamora.png",
				intrinsicWidth: 908,
				intrinsicHeight: 707,
				heightVw: "80vw",
				widthVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Um ritmo surgiu e levemente as inscrições nas laterais ganharam vida.  ",
					{
						italic: "Xaruna",
					},
					", pensou ele. Yacamim pousou suas mãos no solo e concentrou-se.  O soar do tambor ganhou intensidade e uma energia poderosa fluiu por seus dedos preenchendo seu corpo. De olhos fechados, sua visão atravessou a floresta inteira, cada árvore, cada planta passou por sua mente. Em instantes encontrou uma fonte de energia absurda, a grande árvore Xa’ru. Levantou-se, estendeu a mão para o chão, então uma raiz brotou do lugar e começou a crescer até sua mão.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap2/yacamimConjurando.png",
				intrinsicWidth: 859,
				intrinsicHeight: 708,
				heightVw: "80vw",
				widthVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"  Yacamim segurou firme no ramo que crescia, que agora já passava sua cabeça e aos poucos tomava forma de um cajado. Com força e firmeza arrancou-o do chão.",
				],
			},
		],
	},
	{
		pageNumber: 12,
		blocks: [
			{
				type: "image",
				src: "/img/cap2/yacamimCajado.png",
				intrinsicWidth: 880,
				intrinsicHeight: 599,
				heightVw: "70vw",
				widthVw: "90vw",
				alt: "teste",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"\r\n            Yacamim encarou seriamente a pequena. ",
					{
						italic: "Que poder é este!",
					},
					"  Ele pensou. Então se virou para direção da grande árvore e partiu, deixando a xamã para trás.\r\n        ",
				],
			},
		],
	},
	{
		pageNumber: 13,
		blocks: [
			{
				type: "paragraph",
				segments: ["Akin abriu os olhos e viu patas de cavalo trotando no chão. "],
			},
			{
				type: "paragraph",
				segments: [
					"Atordoado, levantou a cabeça e viu que estava sendo carregado. Com os braços empurrou seu corpo para trás tentando se colocar sentado no animal. Olhou para frente e viu que seu cavalo estava amarrado ao de Kizuno que cavalgava ao lado de Fakuri.",
				],
			},
			{
				type: "paragraph",
				segments: ["O animal estremeceu e Kizuno olhou para trás."],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/kizuno_Akin.png",
				intrinsicWidth: 938,
				intrinsicHeight: 654,
				heightVw: "70vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["— Você acordou. — Disse ele, vendo Akin se ajeitar no cavalo."],
			},
			{
				type: "paragraph",
				segments: [
					"\t— Mais ou menos. — Disse o garoto, colocando a mão na bochecha sentindo o curativo. — O que aconteceu? — Perguntou, confuso, fazendo uma careta de dor ao tocar o rosto.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Esperava que você nos contasse. — Disse o chefe da aldeia, parando seu cavalo — Ordenei que Abak retornasse com Paku para Or&lsquo;ri, enquanto nós seguimos para o Posto Aimor. — Disse e Akin olhou sem entender para ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Paku me emboscou enquanto eu preparava nosso alimento naquela noite, nós lutamos até que ele tentou me estrangular com sua lança — Disse Akin agora com olhar sério.  ",
				],
			},
			{
				type: "paragraph",
				segments: ["Kizuno e Fakuri trocaram olhares sérios."],
			},
		],
	},
	{
		pageNumber: 14,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Encontramos você estirado no chão com um corte no rosto e marcas no pescoço — Afirmou Kizuno fazendo uma pausa. — Paku estava alguns metros de distância ao pé de uma árvore. Havia marcas de um impacto nela, como se ele tivesse sido arremessado com força. Você não se lembra, Akin? — Perguntou o mestre.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin fez que não com a cabeça e franziu o rosto tentando se lembrar, mas havia um branco em sua mente, embora ele sentisse uma sensação estranha por todo seu corpo.",
				],
			},
			{
				type: "paragraph",
				segments: ["Um silêncio se sucedeu, então Fakuri respirou fundo e esporou seu cavalo."],
			},
			{
				type: "paragraph",
				segments: [
					"— Vamos continuar nossa viagem. — Disse ele secamente. — Tomarei as providências quando retornarmos à aldeia — Completou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin engoliu em seco e agarrou as rédeas do cavalo. Fakuri e Kizuno eram amigos, mas ele sabia que o chefe tomava suas decisões pensando na tribo e não em agradar seus companheiros.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Kizuno deixou que Fakuri se adiantasse, esperando até que Akin chegasse ao seu lado.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Como você está? — Perguntou em tom gentil."],
			},
			{
				type: "paragraph",
				segments: [
					"— Estou bem, só não consigo entender. — Disse o garoto, olhando para o mestre. — Paku estava louco de ódio e pareceu realmente tentar me matar.",
				],
			},
			{
				type: "paragraph",
				segments: ["Kizuno suspirou."],
			},
		],
	},
	{
		pageNumber: 15,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Escute Akin. — Começou ele. — Eu nunca te contei isso, mas quando sua mãe chegou em nossa tribo carregando você no colo, eu, Fakuri e muitos decidimos quebrar as tradições para acolher vocês dois, mas nem todos aceitaram essa decisão. O pai de Paku, Torruk, foi um dos que mais se revoltou contra Fakuri. — Disse Kizuno fazendo uma pausa breve. — Torruk era um dos melhores e mais respeitado guerreiro de nossa tribo e estava sempre espreitando a posição de Fakuri como líder. A sua chegada deu a ele a oportunidade de montar um motim para acabar com Fakuri.",
				],
			},
			{
				type: "paragraph",
				segments: ["Akin olhou assustado e ansioso para o mestre."],
			},
			{
				type: "paragraph",
				segments: [
					"— O que aconteceu? — Perguntou o garoto imediatamente, sem aguentar. Kizuno olhou para frente avistando seu amigo e então se lembrou de tudo que tinham passado juntos. Então voltou seu olhar para Akin.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Em uma noite, Torruk, sua mulher e companheiros atacaram a aldeia buscando eliminar Fakuri e seus apoiadores.   Uma batalha intensa aconteceu e muitos acabaram mortos, entre eles os pais de Paku. — Kizuno parou e suspirou mais uma vez, enquanto deixava o garoto digerir tudo aquilo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Paku cresceu aos cuidados de sua avó e alcançou a posição de um dos melhores guerreiros da tribo, por isso foi escolhido para compor a guarda de Fakuri nesta nossa viagem. — Continuou Kizuno. — Ele sempre demonstrou respeito por mim e por Fakuri, mas parece que ele culpa você e sua mãe pelo passado.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 16,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Na tarde do dia seguinte, Akin percebia mudanças no caminho, que agora ficava mais amplo, com uma vegetação diferente da floresta da que haviam percorrido até ali. A estrada culminava no topo de uma colina. Os três seguiram em frente, e, ao alcançarem o cume, Fakuri fez um sinal para que parassem.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/aimor.png",
				intrinsicWidth: 912,
				intrinsicHeight: 660,
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Podiam ver dali o gigantesco desfiladeiro Aimor, que se estendia até perder de vista e era coberto por pedras e vegetação intensa. O caminho por entre o desfiladeiro era tortuoso e obscuro, rodeado por paredes rochosas altíssimas. Na boca do desfiladeiro havia um acampamento cheio de estandartes e cabanas.  ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A brisa sobrava forte no rosto de Akin que olhava fixamente para horizonte na direção do desfiladeiro interminável. Fakuri se virou para eles.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Então este é o desfiladeiro Aimor? — Perguntou Akin, antes que Fakuri pudesse falar.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Sim. Disse Kizuno. — Nós chegamos ao..."],
			},
			{
				type: "paragraph",
				segments: [
					"— Aqui estão os guerreiros mais fortes das tribos? — Perguntou Akin agitado, interrompendo Kizuno. — Com quem vou lutar no Torokar? — Insistiu ele.",
				],
			},
			{
				type: "paragraph",
				segments: ["Kizuno franziu o cenho e virou seu cavalo ficando de frente para o jovem."],
			},
			{
				type: "paragraph",
				segments: ["— Você não vai lutar com ninguém se não me deixar falar. —Cortou ele. "],
			},
		],
	},
	{
		pageNumber: 17,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— O Torokar não é apenas sobre lutar Akin. — Disse Fakuri, olhando seriamente para ele. — Representa a marca da união dos povos da planície, onde celebramos nossa paz. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Certo... — Respondeu o jovem desanimado."],
			},
			{
				type: "paragraph",
				segments: [
					"— Akin. — Chamou Kizuno ainda olhando para ele. — Nós acolhemos você e sua mãe há muito tempo como um dos nossos. Você mostrou seu valor e tenho orgulho disso, mas lembre-se que aqui você será visto como um estranho, então não arrume problemas e fique atrás de nós sempre. — Akin assentiu com a cabeça, Kizuno virou seu cavalo e então o grupo iniciou a decida para o acampamento Aimor.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"O desfiladeiro do qual eles se aproximavam, era uma das únicas passagens por terra que levava do sul para o norte do continente. Anos atrás, os povos do norte passavam por ali quando queriam comerciar ou atacar as tribos do sul. Nesta época não havia paz entre as tribos, o que as mantinha fracas nas batalhas contra invasores. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os povos da planície se digladiavam, não havia união. Cada tribo tinha sua lei e as lutas por recursos eram constantes. Certo dia, um inimigo forte surgiu pelo desfiladeiro e sobrepujou as aldeias. Foi então que a necessidade de união surgiu, os líderes de cada aldeia começaram a se comunicar buscando por uma força maior para derrotar os forasteiros do norte. A maioria se juntou para lutar, mas o chefe da aldeia Or&aposri, Takni, não acreditava na união e afirmou que não participaria dela. Uma guerra civil se instaurou na aldeia liderada por um jovem muito habilidoso cujo nome era Fakuri.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O jovem tomou o poder, e foi então que as coisas começaram a mudar. Fakuri ganhou o respeito dos líderes das outras tribos e propôs um ataque coordenado contra o inimigo do norte, que acampava na boca do desfiladeiro. Uma batalha feroz se sucedeu, onde as tribos do sul saíram vitoriosas e reconheceram seu inimigo em comum. Em meio a vitória, ali deu-se o primeiro momento de paz entre as tribos da Planície dos Povos. ",
				],
			},
		],
	},
	{
		pageNumber: 18,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Ao pé do desfiladeiro construiu-se o primeiro acampamento em comum, onde a entrada seria vigiada pelos melhores guerreiros da planície. Era uma forma de manter a união e os guerreiros das tribos sempre treinados, estabeleceu-se que uma vez a cada quatro estações, o que poderíamos chamar de uma vez ao ano, as tribos iriam se encontrar para o chamado Torokar. Um festival onde os melhores guerreiros lutariam para decidir quem era o mais forte. Era uma forma de reafirmar os laços e manter suas forças de guerra sempre imponentes.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Akin seguia descendo a colina logo atrás de Kizuno e Fakuri, a trilha tortuosa agora dera lugar a uma vasta colina que descia e culminava no desfiladeiro. O chão era mais duro e tinha pequenos pedregulhos, as árvores eram em menor número e podia-se ver ao longe em qualquer direção. À medida que se aproximavam mais do acampamento, que ficava realmente próximo ao desfiladeiro, Akin sentia imponência das paredes gigantescas e imaginava como algo tão grandioso poderia existir.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/airmorDesfiladeiro.png",
				intrinsicWidth: 854,
				intrinsicHeight: 730,
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto isso, ao fundo um leve ritmar de tambores começou a ser ouvido e o grupo passou pelo primeiro estandarte tribal do posto Aimor. Dali em diante, quanto mais adentravam mais fortes ficavam os sons e alguns aldeões de outras tribos começavam a ser vistos. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os três seguiram até a entrada do acampamento, marcada por dois troncos fincados no chão com um tecido amarrado entre eles. Nele, estavam pintados com tintas naturais os símbolos das sete tribos, cada qual em sua cor. Akin observava curiosamente todos os detalhes, mas não conseguia parar de pensar naquele som dos tambores que ecoava e penetrava em sua cabeça, ele puxava sua atenção deixando-o inquieto.",
				],
			},
		],
	},
	{
		pageNumber: 19,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Kizuno! — Chamou ele, adiantando seu cavalo até o lado do mestre. — Que som é esse?",
				],
			},
			{
				type: "paragraph",
				segments: ["Kizuno olhou para o jovem sabendo que não adiantava pedir para não perguntar."],
			},
			{
				type: "paragraph",
				segments: [
					"— Este som vem dos instrumentos da tribo Oin. — Respondeu ele, vendo o olhar do jovem varrer o acampamento em procura. — Você não vai encontrá-los. — Continuou — A tradição dos tambores não é mais permitida aqui e a tribo Oin acampa fora de Aimor para poder manter seus costumes.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/kizuno_akin2.png",
				intrinsicWidth: 898,
				intrinsicHeight: 704,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— São apenas instrumentos musicais...por que são proibidos? — Retrucou Akin sem compreender. Kizuno suspirou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Os tambores sempre foram ligados a magia, Akin. — Disse o mestre em tom de voz baixo bem próximo do garoto. — Mas este é um assunto para outra hora! Vamos! — Afirmou ele, apertando o passo do cavalo para alcançar Fakuri.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Momentos depois, Fakuri e Kizuno cavalgavam por entre os alojamentos e cumprimentavam os conhecidos com sorrisos e acenos, seguidos por Akin, que recebia olhares estranhos por parte de membros de outras aldeias. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Logo chegaram em uma cabana que tinha um círculo com as bordas cortadas por linhas, pintado em tinta vermelha escura, era o símbolo da tribo Or’ri. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/cabana.png",
				intrinsicWidth: 702,
				intrinsicHeight: 702,
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 20,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Na frente da cabana, um estandarte de madeira vazio estava fincado no chão, nesse momento, Fakuri pulou do cavalo, abriu uma bolsa de couro que estava na lateral e dali retirou um tecido amarrado com tiras de cipó, desamarrou e com as duas mãos estendeu ao vento firmemente. Era a bandeira da tribo. Akin observava enquanto ele encaixava a bandeira no estandarte e o símbolo igual ao da cabana se impunha.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Antes do festival Torokar, era tradição que os líderes das tribos se reunissem para um banquete no acampamento Aimor, acompanhados de suas guardas pessoais e dos participantes do evento. Por isso, o grupo permaneceria por ali nos próximos dias. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin levou seu cavalo, que na verdade era de Abak, para um pequeno estábulo que tinha água e comida ao lado da cabana. Amarrou o animal ali e seguiu para a entrada. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ao entrar, logo sentiu um aroma cítrico refrescante, olhou procurando e avistou uma cumbuca de madeira com ervas em brasa. ",
					{
						italic: "Capim limão",
					},
					", pensou ele. O ambiente era acolhedor e tinha sido preparado para receber cinco pessoas, contava com redes grandes nos cantos e bancos de madeira entalhada envolta de uma pequena fogueira apagada no centro. Ao lado da fogueira, estavam algumas jarras com água e um pouco de madeira para o fogo.",
				],
			},
			{
				type: "paragraph",
				segments: ["A tarde já caminhava para o fim e Fakuri entrou na cabana seguido por Kizuno."],
			},
			{
				type: "paragraph",
				segments: [
					"— Deixem seus pertences, o anfitrião nos espera para o banquete. — Avisou ele olhando para Akin que já acariciava a rede com olhar cansado. O garoto franziu o cenho, mas assentiu em obediência.",
				],
			},
		],
	},
	{
		pageNumber: 21,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"No acampamento, havia uma tenda central enorme onde aconteceria o banquete de boas-vindas. Fakuri e Kizuno saíram da cabana indo em direção à tenda central seguidos por Akin. No caminho, passaram pela cabana da tribo Tizuno, onde estavam parados dois homens altos e uma mulher igualmente alta. Eles tinham a pele preta assim como todos dali e usavam peças de couro no corpo com símbolos pintados em tinta rocha esverdeada. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto passavam, Akin olhava para eles curioso e acabou cruzando seu olhar com a mulher, que imediatamente deu alguns passos à frente, se colocando entre ele e Kizuno. Akin não parou, continuou até que chegasse próximo à mulher, olhou para cima com rosto sério encontrando o olhar da moça e ali ficaram por instantes se encarando.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Olha só o que temos para o Torokar... — Zombou a mulher — Se machucou na floresta no caminho, foi pequeno? — Completou ela, levando a mão ao rosto do garoto. Akin bateu no braço da mulher e saltou para trás botando a mão na cintura. A mulher armou um sorriso largo e seus homens lhe jogaram uma lança. Ela agarrou a lança no ar e partiu em direção de Akin.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/akinXtizuno.png",
				intrinsicWidth: 908,
				intrinsicHeight: 721,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["Foi então que uma voz grave gritou:"],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/motar.png",
				intrinsicWidth: 889,
				intrinsicHeight: 772,
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["— Eu dou conta — Retrucou Akin para Kizuno que parecia tentar protegê-lo."],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu sei. Não é por causa dela que estou aqui. — Respondeu o mestre sem nem olhar para trás.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Mot’ar. — Disse Fakuri. Akin observou o homem chegando e Fakuri parecia diminuir de tamanho à medida que ele se aproximava. Fitou o rosto do homem e sentiu um arrepio ao ver que ele tinha metade de uma caveira pintada em branco no rosto, que começava na parte de cima do lábio e subia cobrindo o resto, como se não bastasse, ele ainda usava um colar de ossos imensos no peitoral.",
				],
			},
		],
	},
	{
		pageNumber: 22,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Irmãos distantes! — Gritou Mot’ar novamente, apertando Fakuri — Espero que todos estejam muito bem acomodados. Hoje nos reunimos mais vez para celebrar a paz que conquistamos tão arduamente! Meus guerreiros estão lhes incomodando? — Perguntou o homem olhando para a mulher que agora estava parada na frente da cabana.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Nem um pouco, meu amigo. — Respondeu Fakuri rapidamente. — Ela deve ter se intrigado com nosso jovem Akin. — Completou ele apontando para o jovem.",
				],
			},
			{
				type: "paragraph",
				segments: ["Akin viu o homem gigantesco notando sua presença."],
			},
			{
				type: "paragraph",
				segments: [
					"— Este não é daqui hein? — Disse o Mot’ar enquanto inspecionava o garoto. O peito do homem batia na altura da cabeça de Akin, que olhou para cima para encará-lo nos olhos. — De onde você é, jovem conhecido como Akin. — Perguntou Mot’ar.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap3/motarEakin.png",
				intrinsicWidth: 842,
				intrinsicHeight: 704,
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["Caçoou ele"],
			},
			{
				type: "paragraph",
				segments: [
					"— Nós o acolhemos há muitos anos, e hoje ele é um dos nossos melhores guerreiros. — Retrucou Kizuno.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Isso veremos em Torokar, meu caro Kizuno. — Cortou Mot’ar enquanto se virava. — Vamos entrando! Um banquete nos espera. — Completou ele, já partindo em direção a tenda. Kizuno apertou o braço de Akin enquanto franzia o rosto e sem dizer nada se virou. Akin se empertigou e o seguiu.",
				],
			},
		],
	},
	{
		pageNumber: 23,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Os três caminharam mais um pouco e adentraram na tenda central. O local era enorme, com grandes mesas postas feitas de blocos de pedras e tochas acesas em todos os cantos. Akin nunca havia visto tanta comida, estava acostumado com pequenas refeições no dia a dia da aldeia.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto todos ainda procuravam um lugar para se sentar, Akin viu Mot’ar se dirigindo ao centro e atrás dele no lado oposto da tenda estava uma figura encapuzada em pé observando a todos.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Boa noite guerreiros! — Bradou Mot’ar. — Sentem-se."],
			},
			{
				type: "paragraph",
				segments: [
					"Sua voz ecoou pela tenda, e todos olharam para ele, que já se sentava ali no centro mesmo. Akin olhou para seus dois companheiros. Kizuno estava calmo, o ambiente lhe era familiar e Fakuri mantinha olhos cerrados na direção de Mot’ar. O garoto percebeu que o chefe também havia reparado no homem atrás de Mot’ar e olhava para ele fixamente. O capuz escondia-lhe o rosto e as mãos à mostra pareciam de um tom estranho, manchas roxeadas brotavam delas. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O banquete seguiu conforme planejado, Mot’ar caminhava por entre as mesas trocando palavras e gargalhadas, abraçando seus velhos amigos. E então, novamente o grandalhão se aproximou dos três.",
				],
			},
			{
				type: "paragraph",
				segments: [
					'—Temos aqui Fakuri "A sombra de Or’ri" — Gritou ele, então todos envolta olharam e aplaudiram.',
				],
			},
			{
				type: "paragraph",
				segments: [
					'— Mot’ar "gigante do desfiladeiro". — Disse Fakuri, tentando retribuir de alguma forma, não gostava muito desses nomes que lembravam outros tempos. Mot’ar se aproximou mais e se sentou com eles.',
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que está achando de nossa comida, pequeno Akin? — Perguntou Mot’ar, sorrindo com o canto da boca.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Quem é aquele no canto, Mot’ar? — Perguntou Fakuri antes que Akin pudesse responder, cortando o riso do homem.",
				],
			},
			{
				type: "paragraph",
				segments: [
					" — Perspicaz como sempre! — Comentou Mot’ar olhando para Fakuri. — Aquele é novo por aqui, seu nome é Grun. O encontramos vagando as margens do desfiladeiro, após ter sido atacado por homens do norte.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri procurou pelo homem encapuzado novamente, mas este estranhamente já havia sumido do canto onde estava.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Espero que não tenha se esquecido de Torokar. — Alfinetou Mot’ar, levantando-se.",
				],
			},
			{
				type: "paragraph",
				segments: ["Desta vez Kizuno se levantou e encarou o homem."],
			},
			{
				type: "paragraph",
				segments: [
					'— A aldeia Or"ri nunca se esquece das tradições. — Disse sem hesitar — Torokar irá acontecer daqui há vinte noites, assim como sempre foi.',
				],
			},
		],
	},
	{
		pageNumber: 24,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Mot’ar o encarou e sem responder se virou em direção de onde estava sentado. Kizuno se sentou e olhou para Fakuri que estava pensativo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					" Os dois haviam reparado na mesma coisa, Mot’ar nunca fora tão mais alto que Kizuno, o homem parecia gigantesco, algo de estranho estava acontecendo, pensaram os dois velhos amigos.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"O banquete continuou, e ignorando olhares indigestos vindos de outros cantos, Akin comeu e só parou quando não aguentava mais. O sabor era intenso, o tempero irresistível, mesmo tendo comido uma quantidade absurda ainda queria mais, sentia um frenesi a cada mordida. Quando conseguiu parar para respirar, olhou ao redor e percebeu que todos comiam vorazmente como porcos incluindo seus companheiros.",
				],
			},
		],
	},
	{
		pageNumber: 25,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Yacamim caminhava pela floresta em direção à grande árvore. A cada passo, a vegetação se fechava mais, e seus sentidos pareciam ser afetados. Ele parou um pouco para avaliar o caminho, fechou os olhos e pousou as mãos no solo. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/YacamimJavali.png",
				intrinsicWidth: 906,
				intrinsicHeight: 716,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Subitamente um javali enorme saiu em velocidade de um arbusto em sua direção. Yacamim saltou, agarrando-se a um galho no último minuto da arremetida da fera. Olhou para o bicho que já dava meia volta. O javali disparou novamente e acertou a árvore onde Yacamim estava, fazendo-o cair no chão.  ",
				],
			},
			{
				type: "paragraph",
				segments: ["Yacamim se levantou rapidamente e apontou o cajado na direção do monstro."],
			},
			{
				type: "paragraph",
				segments: ["— Xa’ru Orokun Sec’to —Proclamou ele, em tom grave e firme."],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/YacaminOrokun.png",
				intrinsicWidth: 902,
				intrinsicHeight: 721,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Raízes emergiram do solo ao redor da criatura, envolvendo-a com força. O javali rugiu vorazmente tentando se libertar.  ",
				],
			},
		],
	},
	{
		pageNumber: 26,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/javali.png",
				intrinsicWidth: 878,
				intrinsicHeight: 705,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim inspirou ofegante tentado assumir controle. ",
					{
						italic: " Como não senti ele se aproximando?",
					},
					" Pensou ele, enquanto se acalmava.",
				],
			},
			{
				type: "paragraph",
				segments: [
					" O javali grunhiu alto se debatendo, mas as raízes eram grossas demais. Yacamim escalou alguns galhos chegando a uma árvore mais alta. Olhou para o javali que se debatia, a fera não tinha um tamanho normal e de sua boca um líquido roxo viscoso pingava. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Aquele ataque tinha sido por pouco, então Yacamim decidiu continuar seu caminho esgueirando-se pelos galhos, evitando ao máximo caminhar no solo, e assim seguiu, deixando a fera para trás.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"À medida que avançava, mais animais apareciam, cervos, javalis, ursos e macacos. Todos de um tamanho maior que o normal. Yacamim começou a ter que se esforçar para passar despercebido e por mais que avançasse, não conseguia chegar na origem daquilo. Parou em uma árvore com muitas folhas, escondido, esgueirou-se até a ponta de um galho para observar. Estava cercado por criaturas estranhas, algumas delas tinham protuberâncias em suas peles, deformações semelhantes às que ele já havia visto nas criaturas que atacavam as aldeias, mas estas eram muito piores. O local exalava um odor intenso e pesado, que entrava e saia de seus pulmões provocando sensações estranhas, cada minuto que passava ali ele sentia que uma energia pesada entrava em seu corpo.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/Yacamim.png",
				intrinsicWidth: 890,
				intrinsicHeight: 664,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 27,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Continuou mais um pouco, esforçando-se para encontrar o caminho. Adiante, viu que a quantidade de árvores diminuía e imaginou estar perto de uma clareira. Seus sentidos estavam bagunçados e ele confiava apenas em seus olhos.  Ao passar pela última árvore, arregalou os olhos espantado. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/ValeXaru.png",
				intrinsicWidth: 725,
				intrinsicHeight: 725,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"À sua frente se abria um imenso vale, onde uma árvore colossal despontava imponente no centro. O local era enorme e por isso escondia em seu centro o tamanho daquela coisa. Yacamim percebeu que um pequeno riacho descia do outro lado do vale e circundava a árvore. Ficou ali, extasiado, seus olhos não acreditavam no que viam. Existiam lendas antigas sobre aquele lugar, mas jamais imaginara que um dia realmente o veria. Os contos de seus ancestrais relatavam que muitos tentaram chegar ali, mas aqueles que ousaram fazê-lo não retornaram.",
				],
			},
			{
				type: "paragraph",
				segments: [
					{
						italic: " O vale todo está encoberto pela copa desta árvore! ",
					},
					"Pensou ele. Aquele era o maior ser vivo que já havia visto, e nesses pensamentos súbitos as palavras de Iyamora passaram por sua cabeça, algo adoeceu essa árvore.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Percorreu os olhos por todo vale, que estava coberto por criaturas grotescas, as piores até agora. Uma névoa de tom roxeado bruxuleante rondava o local e o cheiro, agora muito mais forte, embaralhava seus sentidos. Yacamim cerrou seus olhos para enxergar melhor. Alguns animais se banhavam no riacho. Foi então que seu coração acelerou. ",
					{
						italic: "HUMANOS!",
					},
					"  Sua mente gritou em pânico. Haviam pessoas ali, algumas de tamanhos enormes com aberrações horripilantes saltando de seus corpos. ",
					{
						italic: "Como?!",
					},
					"  Ele se perguntou. Elas vagavam pelo vale como se estivessem em transe. Sua mente conectava tudo agora, ",
					{
						italic: "os demônios vistos, os ataques a aldeia, as pessoas desaparece...",
					},
				],
			},
		],
	},
	{
		pageNumber: 28,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Seu pensamento foi cortado por um tremor. Olhou para baixo e lá estava um homem agarrando o tronco da árvore onde ele estava. De tamanho monstruoso e olhos vidrados, sua boca bufou e rugiu, os músculos saltaram de seus braços e ele arrancou árvore do chão.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/homemMonstruoso.png",
				intrinsicWidth: 903,
				intrinsicHeight: 708,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/YacamimPulando.png",
				intrinsicWidth: 887,
				intrinsicHeight: 696,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim pulou para árvore ao lado, proferiu novamente o encanto e envolveu o homem com raízes assim como fez com o javali.  ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os ramos se engrossaram apertando o homem firmemente, ele urrou, e ignorando o que lhe prendia, bateu o tronco que segurava contra a árvore onde estava Yacamim. Lançando-o vale adentro. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim sentiu o vento zunindo em seu ouvido, abriu os olhos e subitamente percebeu que estava queda, adentrando cada vez mais o vale. Em um único movimento, ele girou seu corpo, estendeu os braços na direção do chão que se aproximava.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Xa’ru Orokun Kin’to!! — Gritou ele com força."],
			},
			{
				type: "paragraph",
				segments: [
					"O solo estremeceu, raízes e plantas enormes surgiram conjuradas em velocidade incrível envolvendo Yacamim e absorvendo sua queda no último segundo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Caído imóvel, escutou o silêncio ali no meio de todas as plantas e raízes em que estava enfiado, então sentiu sua energia vital fortalecer e aguçou seus sentidos. O silêncio foi cortado por grunhidos terríveis de todos os cantos.  ",
					{
						italic: "Preciso chegar na árvore!",
					},
					" Pensou ele. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Levantou-se empurrando as folhas e plantas que estavam por cima. Botou a cabeça para fora e olhou ao redor, animais horrendos corriam em sua direção vorazmente.",
				],
			},
		],
	},
	{
		pageNumber: 29,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/Muktos.png",
				intrinsicWidth: 766,
				intrinsicHeight: 498,
				heightVw: "70vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— Xa’ru Muk’tos Oc’to!! — Vociferou Yacamim. Seu braço se contorceu e ele sentiu a Xaruna percorrendo seu corpo.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/Muktos2.png",
				intrinsicWidth: 702,
				intrinsicHeight: 702,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Raízes brotaram de sua pele mudando a composição de seu braço completamente, em instantes seu membro virou uma lança orgânica composta por seu próprio corpo transmutado pela energia Xaruna.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Naquele instante, um macaco pulou na direção de seu rosto, Yacamim enterrou seu braço enraizado bem no peito do animal que morreu imediatamente. Os gritos surgiam de todas as direções. Ele se abaixou, colocou suas duas mãos na terra e ao seu redor brotaram raízes grossas que agarraram as criaturas mais próximas. Estendeu sua mão para chão e uma lança brotou em segundos, arremessou-a na cabeça de uma mulher grotesca que avançava pelas raízes. Puxou do chão outra lança e continuou a batalha feroz contra as criaturas. ",
				],
			},
		],
	},
	{
		pageNumber: 30,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Aguentou ali por alguns minutos, mas percebeu que sua força parecia estar sendo sugada. As criaturas não paravam, quanto mais as matava mais apareciam. Em um momento de respiro, Yacamim viu o caminho liberado por entre algumas criaturas e começou a correr por ele desesperadamente, os animais loucos o seguiam sedentos. Ele continuou sem olhar para trás. Sem saber por quanto correu, chegou na beira do riacho e pulou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Um alívio imediato atingiu seu corpo ao contato com a água. ",
					{
						italic: "Vou me recuperar",
					},
					". Pensou. ",
					{
						italic: "Água é fonte natural de Xaruna",
					},
					". Yacamim se manteve submerso e nadou em direção a árvore. Naquele instante, enquanto movimentava-se sentiu sua energia se esvaindo, seus braços logo perderam movimento. Ele tentou continuar, mas o resto de energia que tinha apenas mantinha-lhe o fôlego.  Era impossível segurar mais, o medo dominou-o, imaginou se teria o mesmo destino de todas aquelas criaturas, então seus olhos se fecharam e ele não sentiu mais nada.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 31,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Yacamim sentiu o calor tocar sua pele. Percebeu que conseguia se mexer e tentou abrir os olhos. Estava entardecendo e uma fogueira crepitava ao seu lado, ele virou o rosto e viu Iyamora sentada de costas. Aos poucos levantou-se e sentiu como se tivesse dormido por dias, não tinha ideia do que realmente tinha acontecido. Lembrou-se de estar dentro do riacho ao pé da grande árvore, rodeado de criaturas sedentas por sangue. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Iyamora se virou e o encarou. Os olhos verdes refletiam a fogueira intensamente. Ela respirou fundo.",
				],
			},
			{
				type: "paragraph",
				segments: ["Yacamim abriu a boca para falar."],
			},
			{
				type: "paragraph",
				segments: ["— Você me salvou? "],
			},
			{
				type: "paragraph",
				segments: [
					"Dentro de sua cabeça, Yacamim escutou uma voz que não tinha som, mas falava com ele. ",
					{
						italic:
							'"Você nunca esteve lá de verdade. Tudo que você viu e sentiu foram parte de uma visão que lhe concedi. Você precisava sentir na própria pele o que aconteceu naquele lugar, mas não estava preparado para enfrentá-lo de verdade."',
					},
					" — Ecoou a voz em sua mente — ",
					{
						italic: '" Então  lhe dei uma visão do que aconteceria se você tentasse se aproximar."',
					},
				],
			},
			{
				type: "paragraph",
				segments: [
					"Quieto olhando para Iyamora, Yacamim se assustava. Ele teve certeza de que estivera perto da árvore, mas tudo fora uma ilusão.  ",
				],
			},
			{
				type: "paragraph",
				segments: [
					{
						italic: "Os xamãs são seres magníficos",
					},
					" pensou ele, ",
					{
						italic: "ela esteve em minha mente o tempo todo.",
					},
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Por que me mostrou tudo aquilo? — Perguntou ele, e logo soube que em sua jornada atrás de seus irmãos enfrentaria algo parecido, então lembrou-se da batalha violenta que teve com as criaturas do vale e de quanto seus poderes foram necessários. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim se levantou e saiu caminhando, uma brisa leve acariciou seu rosto, sentiu o cheiro da floresta e a paz do local, estava no topo da montanha onde Iyamora vivia. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap4/YacamimIrAtras.png",
				intrinsicWidth: 876,
				intrinsicHeight: 712,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 32,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akin abriu os olhos, estava deitado em sua rede na cabana. Já era de madrugada e o acampamento estava mergulhado em silêncio. Olhou para o lado e viu que Fakuri e Kizuno dormiam.  ",
					{
						italic: "Como cheguei aqui",
					},
					", pensou ele. Se lembrou apenas de estar comendo sentado à mesa e que o banquete estava extremamente delicioso. Então se levantou para tomar um ar fresco. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"No meio do caminho até a entrada da tenda, sentiu uma dor no estômago, caiu de joelhos e subitamente começou a vomitar. Quando parou, uma queimação em sua barriga começou, igual a que sentiu durante o ataque de Paku, mas desta vez parecia conseguir suportá-la. Puxou o tecido que cobria sua barriga e viu que sua marca de nascença queimava. Akin então olhou para o chão onde havia vomitado e num susto cambaleou para trás até se apoiar na parede. ",
					{
						italic: "Larvas!",
					},
					" Sua mente gritou. ",
					{
						italic: "Devo estar sonhando!",
					},
					" Pensou assustado, então andou até onde estava sua rede e se jogou nela como pode. Fechou os olhos desejando sair daquele pesadelo.",
				],
			},
			{
				type: "divider",
			},
			{
				type: "paragraph",
				segments: [
					"O dia amanheceu frio e quando os primeiros feixes de luz entraram na tenda, Fakuri já se levantava.",
				],
			},
			{
				type: "paragraph",
				segments: ["— O que é isso no chão? — Alarmou, ele."],
			},
			{
				type: "paragraph",
				segments: [
					"Kizuno também acordou e foi olhar. Havia uma mancha no chão, como se algum líquido tivesse sido derramado, e dela pequenos rastros saiam em direção a boca da tenda.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Nunca vi algo assim, parece que alguma coisa rastejou para fora da tenda. — Disse olhando para Akin que ainda dormia. Kizuno caminhou até o garoto e balançou seu ombro.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Akin. — Chamou ele suavemente."],
			},
			{
				type: "paragraph",
				segments: [
					"O garoto abriu os olhos e viu o rosto familiar de seu mestre, uma calmaria o atingiu no momento. Levantou-se um pouco e viu Fakuri no meio da tenda.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Parece que exageramos ontem em meu amigo? — Disse Fakuri, soltando um riso alto — Um de nós deve ter vomitado de tanto beber.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Podee.... — Kizuno interrompeu a voz ao sentir que algo se movia bruscamente. Akin pulou da rede até a mancha no chão e ficou olhando fixamente para ela. ",
					{
						italic: "Não pode ser, não é possível!",
					},
					"Pensou ele aterrorizado.",
				],
			},
			{
				type: "paragraph",
				segments: ["— O que foi!? — Perguntou Kizuno subitamente."],
			},
		],
	},
	{
		pageNumber: 33,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akin deu passos para trás e sentou-se na rede ainda respirando ofegante. Inspirou fundo tentando se acalmar e começou a contar cada detalhe da noite passada para os dois companheiros.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Nós precisamos ir embora hoje, algo aconteceu ontem à noite. — Continuou ele depois de explicar tudo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você sonhou isso tudo, Akin — Afirmou Fakuri. — Iremos embora na próxima manhã. Hoje discutiremos assuntos importantes com os líderes das outras tribos.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Ma..."],
			},
			{
				type: "paragraph",
				segments: [
					"—  É uma ordem — Interrompeu Fakuri rispidamente antes que Akin terminasse. — Se aprontem e me encontrem lá fora. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin observou Fakuri sair para fora da tenda e então voltou seu olhar para Kizuno que o encarava sério. Seus olhos transmitiam firmeza, mas as sobrancelhas esboçavam dúvida. O garoto percebeu que seu mestre acreditava nele, mas algo o impedia de demonstrar.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Kizuno se levantou, endireitou o couro que cobria seus ombros e seguiu para fora.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A manhã logo terminou e o restante do dia correu como esperado. Akin participou de algumas reuniões estratégicas e nada pareceu anormal. Ao fim do dia, mais um jantar lhes foi oferecido, mas desta vez o jovem não se arriscou, preferiu comer da comida que havia levado para viagem. Mais tarde, ele se levantou antes que todos terminassem para ir dormir. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A noite passou tranquilamente e no dia seguinte o grupo pegou seus equipamentos deixando o acampamento Aimor ainda cedo.",
				],
			},
			{
				type: "divider",
			},
			{
				type: "paragraph",
				segments: [
					"A viagem de volta para Or'ri fora tranquila, Akin se manteve atento ao comportamento de seus dois companheiros, mas não notou nada de diferente. Os dois pareciam não se importar com o ocorrido em Aimor e Akin achou melhor esquecer também. ",
				],
			},
		],
	},
	{
		pageNumber: 34,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Era manhã quando o grupo começou a se aproximar da aldeia. Akin viu de longe que algumas pessoas pareciam esperar no portão, estavam agitadas e gritavam alguma coisa que ele não conseguia entender. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— TRAIDOR! — Gritou alguém de longe."],
			},
			{
				type: "paragraph",
				segments: ["— Agressor! — Gritou outro."],
			},
			{
				type: "paragraph",
				segments: [
					"Akin olhou para seus companheiros buscando alguma compreensão do que estava acontecendo, mas os dois estavam espantados assim como ele. Aproximavam-se de algumas pessoas, quando uma delas arremessou uma pedra na direção de Akin, que teve que virar seu cavalo bruscamente para desviar. Mais pedras vieram na direção do jovem, agitando seu cavalo e fazendo-o cair no chão. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Mas o que significa isso?! — vociferou Fakuri, conduzindo seu cavalo com fúria, abrindo caminho entre o grupo de pessoas até alcançar Akin.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— JUSTIÇA POR PAKU! — Gritou alguém atrás. Kizuno já estava no chão ajudando Akin a se levantar, enquanto Fakuri espantava as pessoas.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Voltem para seus afazeres! AGORA! — Gritou Fakuri e virou-se para Kizuno. — Reunião urgente em minha tenda, leve o garoto com você. — Disse ele e saiu cavalgando aldeia adentro passando por entre as pessoas. Akin e Kizuno montaram em seus cavalos rapidamente e adentraram Or'ri. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A caminho da tenda de Fakuri, sentiram a tensão e os murmúrios vindos dos aldeões. Olhares inquietos, alguns faziam questão de demonstrar sua raiva gritando e fazendo sinais para eles. Aos poucos a população se acalmou, afinal Fakuri estava de volta, seu líder e todos o respeitavam.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chegando na tenda, deixaram seus cavalos no estábulo e foram direto para dentro. Kizuno foi até Fakuri, que andava de um lado para outro nervoso, para acalmá-lo. Fazendo o chefe se sentar e respirar.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin se sentou em frente aos dois e observou enquanto todos entravam na tenda. Estavam ali todos os altos cargos da aldeia, o chefe de armas, o curandeiro e muitos os outros que correram para a reunião convocada por Fakuri. Todos se olhavam e observavam esperando inquietos por algum movimento do chefe, sabiam que alguém seria responsabilizado por aquele ato de vandalismo, podia-se ver uma mistura de medo e respeito em seus rostos.",
				],
			},
			{
				type: "paragraph",
				segments: ["Após a chegada de todos, Fakuri se levantou."],
			},
			{
				type: "paragraph",
				segments: ["— Quem de vocês pode me explicar o que acabou de acontecer? — Lançou o chefe."],
			},
			{
				type: "paragraph",
				segments: [
					"— Grande chefe guerreiro, estamos todos felizes com seu retorno. — Anunciou o curandeiro enquanto se levantava — Enquanto esteve fora, Paku retornou muito machucado e está sob meus cuidados. Ele recebeu visitas, pude escutar murmúrios de suas conversas. Paku espalhou para todos que Akin tentou matá-lo durante a viagem. O boato correu pela aldeia e os ferimentos de Paku fizeram com que muitos acreditassem.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Presumo que Paku tenha usado de antigas desavenças para atrair alguns para seu lado. — Afirmou o chefe.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto isso, podia-se ouvir passos das pessoas fora da tenda, a população se juntava ali. Resmungos e murmúrios altos começaram a ser ouvidos.",
				],
			},
			{
				type: "paragraph",
				segments: ["Fakuri olhou diretamente para Akin que olhava aflito para os lados."],
			},
			{
				type: "paragraph",
				segments: [
					"— Akin, vá para casa de sua mãe na floresta. Passe alguns dias longe de todos até que essa situação se aplaque. — Disse Fakuri apontando para uma saída atrás da tenda. O jovem se levantou imediatamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Não poderei ser completamente complacente com você Akin. — Interrompeu Fakuri antes de sua saída. — Paku tem apoio de alguns da tribo e como líder não posso fechar os olhos para isso. Sendo assim, você enfrentará Paku em uma luta limpa quando chegar a hora. ",
				],
			},
		],
	},
	{
		pageNumber: 35,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akin estava de frente para a saída. Um pavor lhe subiu o corpo ao sentir a massa que gritava do lado de fora. Sabia que não tinha saída, precisava provar sua verdade sob as leis da aldeia. Olhou para Fakuri, tentou tranquilizar seu rosto e acenou afirmativamente.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/fakuri_x_aldeia.png",
				intrinsicWidth: 919,
				intrinsicHeight: 756,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["Disse Fakuri, caminhando para fora da tenda."],
			},
			{
				type: "paragraph",
				segments: [
					"Chegando do lado de fora, o povo esperava ansioso por seu líder e apesar do respeito por ele, manifestações como aquela eram comuns na tribo Or'ri. Fakuri tinha conquistado liderança e o respeito de todos dando-lhes o poder de fala, todos sabiam que podiam se manifestar e falar o que pensavam. O chefe os escutaria e tomaria uma decisão.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— A tradição foi quebrada! — Gritou um homem no meio da multidão, seguido por outros berros a frente da tenda do chefe.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Akin tent... — A voz vinda da multidão sufocou com o silêncio repentino. "],
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri colocou seu rosto para fora e logo todo o corpo, seguido por Kizuno que apresentava uma feição tranquila.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O chefe se posicionou ereto na frente do povo que ansiava por sua fala, alimentou o silêncio por mais alguns instantes analisando o olhar de cada um deles. Alguns olharam para baixo em respeito, outros o encaravam com certa imponência desafiante, eram estes os que mais acreditavam em Paku.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Vocês me acusam de ter quebrado a tradição e a Akin de ter tentado contra a vida de Paku. — Afirmou Fakuri com a voz direta sem demonstrar nenhuma incerteza.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— De qual tradição falam? — Gritou ele. — Essa tribo já abandonou várias. — Disse ele seriamente e muitos abaixaram a cabeça — Lembro-me bem que no inverno passado realizamos o ritual de passagem dos jovens e Akin foi amplamente convidado a participar e tão oficialmente aceito como um de nós. Portanto, ao levá-lo comigo na viagem estive apenas continuando seu treinamento como guerreiro. Aquele que conseguir provar o contrário sinta-se livre para falar ou então retirarei a acusação. — Argumentou o chefe tranquilamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri varreu com os olhos a população e percebeu alguns que se entreolharem, murmúrios e resmungos começaram, mas nenhum quebrou o silêncio geral. ",
				],
			},
		],
	},
	{
		pageNumber: 36,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Agora a situação de Paku e Akin. Não sabemos o que aconteceu de verdade naquela noite, encontramos os dois estirados no chão ambos machucados, cada um com a sua verdade. — Disse o chefe caminhando na frente da multidão. — Mesmo assim. — Continuou ele — O fato não pode ser ignorado e por isso decido por um combate justo. — Disse ele e a população se agitou — Os dois deverão se enfrentar em Torokar e que o estino decida por suas vidas. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Que o melhor guerreiro vença! — Gritou Kizuno. "],
			},
			{
				type: "paragraph",
				segments: ["A multidão ergueu as mãos e urrou com seus pulmões. "],
			},
			{
				type: "paragraph",
				segments: [
					"Kizuno observava atento a euforia. ",
					{
						italic: "O verdadeiro líder dá ao povo as palavras que ele quer ouvir. ",
					},
					" Pensou ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Aos poucos, cada um ali foi se dispersando e voltando aos seus afazeres da aldeia, logo as novidades chegariam aos ouvidos de Paku, que ainda se recuperava dos ferimentos.",
				],
			},
			{
				type: "divider",
			},
			{
				type: "paragraph",
				segments: [
					"Akin saiu por trás da tenda do chefe e andou por um caminho estreito que levava para fora da aldeia. Passou por tendas abaixado e nesse momento escutou a multidão rugir lá atrás, preferiu continuar correndo e não olhar.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Akin, espere! — Gritou uma voz familiar."],
			},
			{
				type: "paragraph",
				segments: [
					"Ele se virou. Chegavam correndo até ele Aina e Onay, seus amigos e filhos de Fakuri. Pararam na frente dele ofegantes.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que está acontecendo Akin? — Perguntou a garota, atropelando a própria respiração.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os berros da multidão ao longe cortaram a voz de Akin, que desistiu de falar e fez sinal para que os dois irmãos o seguissem. Saíram os três pela parte de trás da aldeia em direção a casa da mãe de Akin. ",
				],
			},
		],
	},
	{
		pageNumber: 37,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Outrora, uma jovem moça chamada Uthane chegou na aldeia carregando uma criança. Os povos da planície enfrentaram muitos inimigos vindos do Norte e por isso nunca aceitavam forasteiros, eram extremamente tradicionais. Uthane pediu abrigo para seu filho, Akin, e disse que iria embora se cuidassem dele. Fakuri e Kizuno aceitaram de bom grado, mesmo sabendo que enfrentariam consequências.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O tempo passou e o garoto teve dificuldade em se envolver com a tribo, sendo aceito por alguns e rejeitado por outros. Cresceu junto dos filhos de Fakuri, um menino e uma menina, que hoje são agricultores na aldeia. Os três se conheceram quando pequenos e se tornaram amigos desde então.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"O grupo já se afastava da aldeia e podia avistar algumas árvores ao longe. Uthane morava em uma cabana dentro da floresta, as margens da tribo Or'ri junto da velha curandeira. Em instantes, os três alcançaram a floresta e nela entraram.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto passavam pelas árvores, Akin respirou fundo sentindo o ar fresco da mata, algo lhe fazia bem ali. Gostava de estar próximo à natureza.  Alguns metros adentro, os três encontraram uma clareira com uma cabana velha feita de madeira bem no centro.  Aliás, parecia mais ser feita de musgos e plantas do que de madeira. Em volta da pequena cabana, cresciam temperos e ervas assim como algumas árvores frutíferas. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/casa_uthane.png",
				intrinsicWidth: 725,
				intrinsicHeight: 725,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Eles entraram na clareira e seguiram por um estreito caminho de pedras cuidadosamente colocadas que levava à porta. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Se aproximaram e bateram na porta que fez um barulho surdo. Alguns passos vieram de dentro até perto da porta e uma moça de cabelos longos pretos abriu.  ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/uthane.png",
				intrinsicWidth: 774,
				intrinsicHeight: 674,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 38,
		blocks: [
			{
				type: "paragraph",
				segments: ["Akin deu um passo à frente e abraçou a mulher imediatamente. "],
			},
			{
				type: "paragraph",
				segments: ["— Mãe. — Disse ele enquanto a abraçava."],
			},
			{
				type: "paragraph",
				segments: [
					"Uthane sorriu e apenas o abraçou. Atrás dela a velha curandeira chamada Chinu apareceu para ver quem batia em sua porta.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Akin e seus amigos entraram na cabana e caminharam até uma fogueira apagada que se encontrava no canto. A cabana tinha cheiro de ervas queimadas e planta molhada. Em cada canto viam-se objetos estranhos, como galhos retorcidos pendurados; ervas amarradas em brasa; cumbucas de madeira com sabe-se lá o que dentro. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Há muitos anos, Chinu, a curandeira, foi expulsa da aldeia acusada de pratica de magia, por isso hoje mora longe de todos. Mesmo diante dessa situação, a velha ainda assim recebe muitas visitas às escondidas e por isso armazena diversos remédios naturais para a população.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Sentaram-se todos à beira da fogueira e Akin começou a contar tudo o que lhe tinha acontecido nos últimos dias. Reparou que todos demonstravam preocupação, e no momento que contou sobre seu vômito e algo ter rastejado dele, Chinu arregalou os olhos e se levantou, parecendo tentar se lembrar de algo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ao fim, ele contou como Paku manipulou algumas pessoas da tribo e sobre a decisão de Fakuri. Ele terminou e estendeu a mão para pegar um copo de pedra com um pouco de água. Todos o observavam quietos.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Como você está agora, meu filho? — Perguntou Uthane ignorando qualquer outro detalhe. O jovem percebeu a sinceridade nos olhos da mãe.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Estou bem mãe, Paku não conseguiu me machucar."],
			},
			{
				type: "paragraph",
				segments: [
					"— Torokar vai acontecer daqui uns dias. — Disse Onay. — Você precisa treinar. — Continuou ele. — Nós podemos trazer alguns equipamentos e treinar aqui com você, enquanto as coisas esfriam na aldeia. — Disse ele olhando com um semblante de esperança e Aina concordou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin sentiu o calor do apoio por um momento e se deixou esvair das preocupações, focando naquele instante ao lado de quem se preocupava com ele. Relaxou e sentiu-se em casa.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A velha curandeira se aproximou de Akin, os cabelos brancos contrastavam com sua pele negra, à luz da fogueira suas feições ficavam fundas e o olhar penetrante como de uma serpente. Ela usava o que parecia ser um tecido longo no corpo, tinha pulseiras e cordões feitos de pedras e brincos de osso nas orelhas. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/chinu_akin.png",
				intrinsicWidth: 842,
				intrinsicHeight: 719,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 39,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Vou manter meus olhos em você, estou intrigada com seu vômito e mais ainda com as marcas no chão que você diz ter visto. — Disse Chinu friamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Eles ficaram em silêncio por alguns instantes encarando uns aos outros. Momentos depois, a noite caiu, então Onay e Aina se despediram de Akin e voltaram para aldeia.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Naquela noite, Uthane e Chinu acordaram com barulhos estranhos do outro lado da cabana. As brasas da fogueira forneciam uma luz bruxuleante que batia na face de Akin, que estava sentado em sua cama olhando para o nada. O silêncio da madrugada foi cortado por palavras indecifráveis que saiam da boca do jovem, as duas mulheres se olharam aterrorizadas. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chinu fez sinal para que Uthane ficasse parada, ela se levantou cuidadosamente e foi até um pequeno cesto que continha alguns ramos de ervas. Calmamente as pegou e jogou em uma cumbuca, caminhou para outro lado, jogou um pó vermelho dentro, pegou seu pilão e começou a triturar com força. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/chinu_ritual1.png",
				intrinsicWidth: 723,
				intrinsicHeight: 722,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Um cheiro acre subiu no ambiente. Chinu foi até perto da brasa e com ajuda do pilão empurrou uns pedaços de madeira incandescente para dentro da cumbuca, que logo começou a exalar fumaça. Nesse instante, Chinu se aproximou sorrateiramente de Akin e colocou a fumaça perto de seu nariz, para que o jovem a inalasse. A fumaça tinha um cheiro tão forte que fez o nariz de Uthane arder e seu estomago embrulhar. Ela correu e pegou um tecido para tampar o nariz e a boca.",
				],
			},
			{
				type: "paragraph",
				segments: ["Chinu se mantinha de pé na frente de Akin, que inalava a fumaça."],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/akin_vomita.png",
				intrinsicWidth: 727,
				intrinsicHeight: 726,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					" De repente, o jovem vomitou diretamente no chão e caiu para o lado sendo amparado por sua rede. A velha encostou a mão em sua testa que ardia em febre e abaixou-se para ver o vômito.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Vermes.  Constatou Chinu. "],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/infectado.png",
				intrinsicWidth: 898,
				intrinsicHeight: 729,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 40,
		blocks: [
			{
				type: "paragraph",
				segments: ["— O que!? — Perguntou Uthane desesperada."],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu não sei, mas as palavras que ele dizia pareciam ser de um dialeto antigo.  — Disse Chinu levantando-se — Seja o que for, nós vamos extrair de dentro dele. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"No dia seguinte, ao raiar do sol. Uthane saiu para colher algumas plantas, enquanto a velha curandeira preparava o ritual de Akin, que ainda dormia em sono profundo. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Abaixada enquanto colhia um pouco de gengibre, Uthane pensava em seu filho e temia por sua vida, não conseguia imaginar falhar com ele. Levantou-se, e foi caminhando para próximo da cabana, ali, hesitou por um instante, lembrando de como Chinu tinha sido boa para ela todos esses anos. Sentiu uma sensação de alívio no corpo e então adentrou a cabana. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap5/ritual_na_cabana.png",
				intrinsicWidth: 729,
				intrinsicHeight: 729,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Lá dentro, tochas e velas estavam acesas em todos os cantos, Chinu se aproximou e tomou o gengibre da mão de Uthane, então o jogou em uma bancada.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin estava deitado nu no chão ao lado da fogueira, o corpo com inscrições antigas de cura do povo Or'ri, pintadas em cor verde musgo. A velha curandeira agora tinha nas mãos uma cuia e amassava o gengibre junto de um líquido escuro.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Prepare-se. — Disse Chinu. — Quando ele beber este líquido espere meu sinal e jogue isto no fogo. — Uthane estendeu a mão para pegar um pequeno saco de couro e viu dentro um pó branco, que parecia ser sal misturado com algumas raízes.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chinu ajoelhou-se ao lado de Akin, levou a cuia até sua boca e derramou o líquido segurando levemente sua cabeça para cima. Levantou-se e começou a fazer movimentos com as mãos em cima de Akin. Uthane observou atentamente, sua mente estava vidrada em Chinu, ela se mexia como se puxasse algo de dentro do jovem, as mãos iam e vinham de baixo para cima.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A energia da cabana ficou pesada e o ar denso, algo estava vindo. A boca de Akin se abriu e uma fumaça fina começou a sair dela. Chinu intensificou os movimentos e olhou de relance para Uthane indicando que o momento estava chegando. Uthane concentrou suas energias em seu filho, iria salvá-lo a qualquer custo. A fumaça continuava a transbordar da boca de Akin e agora possuía um tom roxo tenebroso, infectante.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chinu fez um movimento ágil e a fumaça saiu por completo chegando ao teto da cabana. Uthane sentiu um frenesi em seu corpo, estava com a mente paralisada. Precisava inalar aquela fumaça, podia quase escutar ela a chamando.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A velha olhou para Uthane, pulou por cima de Akin e pegou o saquinho de couro da mão da mulher, sem hesitar o arremessou nas brasas.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Um estouro subiu da fogueira com contato das substâncias, uma fumaça esverdeada encheu completamente a cabana. Chinu e Uthane afastaram-se subitamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que deu em você mulher!? — Perguntou Chinu, ofegante. Uthane olhou para ela atônita sem conseguir responder. A velha franziu o rosto.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Seja o que for, nós espantamos. — Disse ela, enquanto massageava a própria coluna — Estou velha demais para isso! — Afirmou com leve sorriso, então caminhou até Akin para cobri-lo com um tecido.  ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Por ora, vamos deixá-lo descansar. — disse Chinu, virando-se com serenidade e estendendo a mão para Uthane, que permanecia sentada no chão perplexa.",
				],
			},
		],
	},
	{
		pageNumber: 41,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Amanhecia quente naquele dia no assentamento dos I’akas e a brisa do mar serenava por entre os tecidos das tendas. Os aldeões já se levantavam para iniciar o comércio das especiarias. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/chegada.png",
				intrinsicWidth: 915,
				intrinsicHeight: 708,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["Na tenda central, os três irmãos ainda dormiam quando o mensageiro entrou."],
			},
			{
				type: "paragraph",
				segments: [
					"— Chefe Akinar!! — Disse o mensageiro subitamente e logo se ajoelhou por estar na presença de seu líder. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Um homem de pele morena clara avermelhada se levantou da rede e olhou para ele, tinha os cabelos longos trançados, e o corpo pintado com inscrições tribais em tinta vermelha. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar fez sinal para que o mensageiro se levantasse, então olhou para seu pequeno irmão Yacamin que também acordara.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O comandante do povoado vizinho está no portão e diz que precisa vê-lo urgentemente. — Afirmou o mensageiro. Akinar franziu o cenho e assentiu que iria. Então caminhou até Yacamim. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Continue dormindo meu irmãozinho, mais tarde vamos treinar um pouco. — Disse afagando o cabelo do garoto. Olhou para outro lado para onde estava Bukora, seu o outro irmão, este ainda dormia virado para canto.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar saiu da tenda e dirigiu-se a entrada do assentamento onde alguns homens o esperavam. Ao aproximar-se, ele notou que alguns seguravam lanças e outros arcos.",
				],
			},
		],
	},
	{
		pageNumber: 42,
		blocks: [
			{
				type: "paragraph",
				segments: ["Akinar chegou ao portão do assentamento e fitou os forasteiros."],
			},
			{
				type: "paragraph",
				segments: [
					"— Meu nome é Akinar da tribo I’akas, chefe deste assentamento. — Afirmou ele. Um homem de cabelo curto sujo e pele clara olhou para Akinar com os olhos cerrados e deu um passo à frente.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Chefe Akinar. — Disse o homem coçando a barba."],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/eusouzarak.png",
				intrinsicWidth: 772,
				intrinsicHeight: 678,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Disse o homem com um sorriso no rosto. — Queremos sua ajuda para tomar uma tribo chamada Tuk, que fica a dois dias daqui. — Antes que o homem terminasse, Akinar já balançava a cabeça olhando para o chão.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/akinar.png",
				intrinsicWidth: 801,
				intrinsicHeight: 685,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["Disse Akinar imediatamente."],
			},
			{
				type: "paragraph",
				segments: [
					"— Você pode ficar com o quiser, nós queremos apenas o território. — Insistiu o Zarak.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/zarak_akinar.png",
				intrinsicWidth: 911,
				intrinsicHeight: 731,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— Saiam do meu assentamento agora! — Berrou Akinar com firmeza e virou-se dando as costas. O homem ficou ali parado enquanto via Akinar voltar para dentro. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você não conhece este continente! — Afirmou Zarak, virando-se para ir embora.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar andava em passos pesados em direção ao centro do assentamento, caminhou diretamente até seu conselheiro e encostou em seu ombro. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Reforce a segurança do assentamento, assim que terminarmos com as mercadorias, vamos voltar para Xa’ru. — Disse Akinar com olhar sério e preocupado.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 43,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Naquele dia, Zarak retornou para seu povoado junto de seus homens e no caminho comentou sobre audácia daquele estrangeiro que lhe havia negado ajuda, “quem ele pensa que é” resmungou para um. “Ele não nos conhece” falou com outro. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ao chegar em seu povoado, ordenou que os homens comemorassem, pois nos próximos dias partiriam para tomar o território dos Tuk. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A noite caiu e Zarak bebeu junto de seus homens até não aguentar mais, mas diferente deles, não ficava bêbado com aquela bebida fermentada feita pelo curandeiro. Vendo seus homens caídos pelos cantos, decidiu dar uma volta e caminhar na mata. Saiu pela entrada da aldeia e foi caminhando em direção à floresta. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Zarak já tinha caminhado por alguns minutos, quando se deu conta de que era hora de voltar. Naquele momento, que estava prestes a virar de volta, viu algo se movimentando bem à sua frente em um arbusto. Um focinho branco surgiu e logo olhos brilhantes que refletiam a luz da lua o encaravam, um lobo branco surgia. Atrás da fera, mais olhos podiam ser vistos na escuridão, Zarak estava diante de uma matilha.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O homem foi dando passos para trás bem devagar, ao mesmo tempo que tateava o chão para encontrar qualquer tipo de galho ou pedra para se defender. A matilha aos poucos instintivamente o cercava, Zarak contou quatro lobos na sua frente, continuou andando para trás, até o momento em que conseguiu pegar um galho firme do chão. Um dos lobos pulou em sua direção e ele acertou sua cabeça com o galho e então virou-se para correr.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/lobos.png",
				intrinsicWidth: 925,
				intrinsicHeight: 708,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"A matilha imediatamente começou a caçá-lo. Zarak então correu na escuridão enxergando pouco e sentindo as feras em seu encalço. Um dos lobos pulou em suas costas e mordeu seu ombro direito. Zarak berra de dor e dá uma ombrada empurrando a fera e volta a correr, desta vez já cambaleando. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Novamente um dos lobos pula em suas costas fazendo-o cair. Zarak e a fera saem rolando pelo chão embrenhados, até que caem uma espécie de caverna que estava de baixo de um enorme tronco quebrado. ",
				],
			},
		],
	},
	{
		pageNumber: 44,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/caverna.png",
				intrinsicWidth: 719,
				intrinsicHeight: 719,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Zarak e o lobo rolaram caverna adentro até chegarem ao que parecia ser o fundo.  Um som pesado ecoou pela caverna com a queda dos dois. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Alguns minutos se passaram, Zarak abriu os olhos devagar, o sangue quente escorria-lhe o rosto e o corpo doía por completo. Ele então se ergue com dificuldade e começa a engatinhar pela caverna até encontrar uma pedra perto de uma parede. Ele ali então se recosta. Respirava ofegante e sua mente gritava se perguntando onde estaria a fera que o perseguia. O silêncio da caverna era cortado por sua própria respiração, até que ele começou a ouvir da escuridão o rosnado do lobo que parecia se levantar em algum lugar. Zarak então tomou fôlego e prendeu a respiração, ficando imóvel para que a fera não o encontrasse.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Segundos intermináveis se passaram, Zarak respirou fundo mais uma vez e apertou a pedra que estava em sua mão com força. Os passos do lobo ecoavam alto em seus ouvidos e a cada segundo ele ficava mais louco. Uma voz sussurrava em sua mente, ",
					{
						italic: "“Acabe com essa criatura”",
					},
					"disse a voz, ",
					{
						italic: "“aqui agora”",
					},
					".",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/zarak_fera.png",
				intrinsicWidth: 717,
				intrinsicHeight: 717,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 45,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"O lobo pula nas costas de Zarak e morde seu pescoço. O homem berra de dor e num último movimento usa a pedra que estava em sua mão para golpear a cabeça da fera que o mordia.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O lobo mantém suas presas cravadas em Zarak, enquanto este golpeia incessantemente sua cabeça com a pedra",
				],
			},
			{
				type: "paragraph",
				segments: [
					" Zarak e a fera caem inconscientes de lado, um em cima do outro. Naquele instante, Zarak tosse engasgado e cuspe sangue para o lado, sem forças, ele deixa sua vida esvair-se de seu corpo.  Então uma voz ecoa em sua mente, ",
					{
						italic: "“Issssoooooo finalmeente”",
					},
					". De repente, um tremor estrondoso percorre toda a caverna.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap6/caverna2.png",
				intrinsicWidth: 564,
				intrinsicHeight: 690,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 4,
			},
			{
				type: "image",
				src: "/img/cap6/caverna4.png",
				intrinsicWidth: 705,
				intrinsicHeight: 705,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 46,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Passaram-se alguns dias desde a visita de Zarak ao assentamento I’akas. Akinar havia ordenado mudanças na segurança e enviado uma mensagem para sua terra natal pedindo orientações. O assentamento existia há anos e nunca havia tido problemas com a população nativa. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar almoçava junto de seus irmãos dentro da cabana, quando escutou um alvoroço do lado de fora. Caminhou até a saída da cabana e botou a cabeça para fora. O barulho vinha da entrada do assentamento, onde uma mulher de cabelos longos e pretos vinha a cavalo em alta velocidade, enquanto os guardas tentavam pegá-la. Akinar saiu rapidamente da cabana.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Parem! — Gritou ele. — Eu a conheço! — Disse gritando mais uma vez, enquanto corria em direção a confusão. Ao sinal de Akinar, os homens pararam e a mulher conseguiu passagem livre. Akinar levantou os braços e acenou para a mulher que parecia nervosa em cima do cavalo. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Akinar! — Gritou ela em desespero. A mulher desceu do cavalo aos prantos e correu em direção na direção do chefe.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Uthane! O que foi? — Perguntou Akinar recebendo a moça em seus braços."],
			},
			{
				type: "paragraph",
				segments: ["— Ele destruiu meu vilarejo! — Balbuciou ela."],
			},
			{
				type: "paragraph",
				segments: [
					"— Do que você está falando? — Perguntou ele novamente. A mulher perdeu as forças nas pernas e se ajoelhou ainda chorando. Akinar abaixou-se para sustentá-la.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Zarak foi até meu vilarejo com seus homens. — Disse ela — Não tivemos chance, nunca vi nada como aquilo. — Disse ela enquanto chorava. — Eu estava voltando da colheita, quando avistei de longe ele e seus homens atacando meu povo. Ainda consegui ouvi-lo gritar para seus guerreiros que depois iriam para aldeia Tuk.\r\n      Akinar olhava para ela sem entender. A curandeira do assentamento chegou e tomou Uthane em seus braços, enquanto oferecia-lhe um pouco de água. Akinar levantou-se e acenou para que seu irmão Bokura se aproximasse\r\n    ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Irmão, vá ao cais e conte quantos barcos e lugares nós temos agora mesmo. — Disse vendo o olhar de espanto de seu irmão. — Seja firme e chame o barqueiro, avise para ele preparar todos os barcos. — Bokura acenou com a cabeça e saiu em direção ao cais na mesma hora. ",
				],
			},
		],
	},
	{
		pageNumber: 47,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Abaixou-se e colocou Uthane em uma rede macia, pegou um pouco de palha e colocou atrás de sua cabeça. A mulher olho-o nos olhos, Akinar sentiu a mão dela em sua nuca, aproximando sua cabeça da dela, chegando bem perto até seus lábios se tocarem. Os dois ficaram ali parados por instantes, sentindo a respiração um do outro.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu sinto muito. — Murmurou Akinar com os olhos abaixados. Uthane levantou sua cabeça. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Depois de Tuk, ele virá para cá. — Disse ela olhando fundo em seus olhos."],
			},
			{
				type: "paragraph",
				segments: ["— Eu sei. — Respondeu ele."],
			},
		],
	},
	{
		pageNumber: 48,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"O sol estava a pino e a aldeia fervilhava em movimento. Aldeões caminhavam para todos os lados carregando plantas, amolando pedras e cuidando das crianças e jovens. Yacamim caminhava em um passo tranquilo em direção a cabana do chefe. Após alguns minutos andando, chegou na entrada onde dois guardas com lanças estavam de pé. Ao verem ele se aproximando, o reconheceram e abriram passagem. Yacamim entrou. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A cabana era grande e feita de madeira e palha, tinha dois locais para fogueiras e vários para sentar-se. O cheiro doce característico de uma planta nativa pairava no local. No lado oposto à entrada, estava Ibau o chefe da tribo I’akas, tinha pele morena clara, cabelos longos trançados de cor marrom claro que pendiam por seus ombros. O corpo do chefe era inteiramente pintado com inscrições tribais em várias cores e usava um colar com o crânio de uma ave no pescoço. Sentado, Ibau percebeu a chegada de Yacamim e abriu um grande sorriso.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Meu grande amigo! Espero que hoje não tenha vindo me chamar para beber, estou muito ocupado. —  Disse Ibau, rindo.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Não desta vez, meu chefe. — Disse Yacamim com a expressão séria no rosto. "],
			},
			{
				type: "paragraph",
				segments: [
					"Ibau olhou para ele por um instante e tão logo entendeu o motivo da visita do amigo. Os dois tinham uma relação muito próxima, outrora quando Yacamim retornou sem os irmãos do assentamento no continente Oke, Ibau se tornou um parente para ele. No último ano, quando o pai de Ibau faleceu deixando o lugar na liderança, Yacamim estava ao seu lado para apoiá-lo. Haviam construído uma relação de confiança, amizade e respeito ao longo dos anos.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Está certo. — Disse o chefe. — E agora?"],
			},
			{
				type: "paragraph",
				segments: [
					"— Minha jornada começa aqui, com o seu apoio vou encontrar meu destino. — Respondeu Yacamim.",
				],
			},
		],
	},
	{
		pageNumber: 49,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Ele contou tudo o que viu e viveu nos últimos dias e Ibau o encarou incrédulo.  Quando seu amigo lhe contou que vivenciou a morte na própria pele e depois acordou, ele se assustou mais ainda.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você é poderoso e mesmo assim não conseguiu sobreviver a visão da Xamã. Como pensa que pode enfrentar esse mal, sem saber o que te espera? As outras aldeias temem o pior e proibiram qualquer contato com outro continente. — Afirmou Ibau.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu confio na Xamã. Senti que ela me dizia que estou preparado.  Preciso apenas de uma pequena equipe— Disse Yacamim com certeza em suas palavras.  — Preciso de um barqueiro para me guiar no trajeto e alguns homens para remar. — Continuou ele. Ibau olhou para seu amigo sabendo que não conseguiria impedi-lo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Como ficaremos sem você nas linhas de defesa contra as criaturas que tem atacado a aldeia? — Perguntou o chefe preocupado. Yacamim olhou para ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu não vou demorar, meu amigo. — Respondeu colocando a mão nos ombros de Ibau.  — Além disso, instalei armadilhas e criei barreiras por toda extensão da aldeia. Estamos seguros por um tempo. — Ibau estava sério e então seu rosto se abriu em uma feição tranquila",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Que seja! — Convenceu-se finalmente. — Ninguém saberá disso, apenas eu, você e sua equipe. — Alertou ele — Escolherei os melhores para te acompanhar. Encontre-me aqui pela manhã de amanhã e terei sua equipe.",
				],
			},
			{
				type: "paragraph",
				segments: ["Yacamim agradeceu Ibau e deu costas saindo da cabana do chefe."],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 50,
		blocks: [
			{
				type: "paragraph",
				segments: ["Na manhã seguinte, Ibau enviou um guarda a tenda Yacamim."],
			},
			{
				type: "paragraph",
				segments: [
					"— Acorde! — Disse o guarda com a cabeça dentro da tenda. — Yacamim! — Chamou ele mais uma vez — Ibau o espera na tenda principal. — Anunciou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim abriu os olhos e acenou com a mão. Passou a noite arrumando seus pertences para a viagem e dormira demais. Ele se vestiu e saiu da tenda a caminho do encontro com o chefe. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Caminhando pela aldeia, avistou alguns aldeões carregando o que parecia ser uma criatura morta capturada em uma das armadilhas, um urso com deformações grotescas nas costas. Yacamim respirou fundo, lembrou-se da ilusão que teve sob o comando de Iyamora e sentiu um frio na espinha enquanto olhava a criatura. Virou os olhos para o caminho e afastou os pensamentos da mente, então continuou seguindo seu caminho.",
				],
			},
			{
				type: "paragraph",
				segments: [
					" Mais à frente, avistou a cabana de Ibau. Os guardas abriram passagem e Yacamim entrou. Lá dentro três pessoas o aguardavam. Ibau o esperava sentado e em pé ao lado dele estavam dois jovens, uma mulher e um homem.",
				],
			},
			{
				type: "paragraph",
				segments: [
					" — Então está é minha equipe. — Disse Yacamim ao entrar. Ibau o fitou animado e se levantou. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap7/dara_rakori.png",
				intrinsicWidth: 879,
				intrinsicHeight: 680,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 51,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Está é Dara. — Disse ele e apontou para garota que fitava Yacamim com olhar determinado. — Enfrentou todos os ataques a aldeia e saiu sem nenhum arranhão. Veloz como uma raposa e com a visão de ave de rapina. Pode confiar sua vida a ela. — Afirmou Ibau orgulhoso.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim olhou intrigado, os ataques eram violentos e poucos conseguiam voltar sem se machucar, certamente aquela garota era diferente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Este é Rakori, o filho mais velho do barqueiro. Forte como um touro, será seu guia na viagem pelo mar e seu braço direito nos perigos em terra firme. — Rakori empertigou-se com as palavras ao seu respeito. — O restante dos tripulantes estará à sua espera amanhã na costa fora da aldeia. — Continuou Ibau. — Quando chegarem ao outro continente, a tripulação esperará vocês por dez luas, nem mais nem menos. —Afirmou, sem hesitar. — Estejam de volta neste tempo, caso contrário eles partirão sem vocês. — Completou secamente. Yacamin viu Dara e Rakori engolirem aquelas palavras com areia, as últimas expedições ao continente Oke não tiveram o retorno esperado.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Muito bem. Confio em suas palavras velho amigo. — Disse Yacamim enquanto se virava para os dois jovens. — Não pensem que essa viagem será fácil. — Advertiu ele. — Enfrentaremos o desconhecido, então preparem-se para o pior. Despeçam-se de seus familiares dizendo que me acompanharão em uma missão de proteção a um ancião da aldeia até outra aldeia. Ao fim do dia me encontrem em minha cabana para realizarmos alguns rituais de proteção e força. Partiremos ao nascer do sol.",
				],
			},
			{
				type: "paragraph",
				segments: ["Os jovens assentiram com a cabeça ao fim das palavras de Yacamim."],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 52,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"O dia passou e mais tarde Dara e Rakori estavam em pé em frente a tenda de Yacamim. Rakori segurava uma clava enorme apoiada nos ombros e Dara carregava nas costas uma aljava cheia de flechas e um arco curvado que tinha quase seu tamanho. Enquanto estavam ali parados, avistaram Yacamin chegando carregando algumas cuias de barro. Yacamin chegou perto, até que parou observando os dois.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Agora entendo por que vocês são os melhores. — Disse Yacamin logo que chegou. — Onde conseguiu essa pedra em sua clava, Rakori? ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap7/yacamim_dara_rakori.png",
				intrinsicWidth: 912,
				intrinsicHeight: 762,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— É obsidiana vermelha. Akinar fez para meu pai há muitos anos. — Respondeu Rakori agora olhando para a pedra avermelhada. Yacamin olhou para a arma. ",
					{
						italic: "Meu irmão sempre descumprindo as próprias regras",
					},
					", pensou ele. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Belo arco Dara! — Disse Yacamim olhando para a jovem."],
			},
			{
				type: "paragraph",
				segments: ["— Você mesmo que fez. — Disse ela, sem entender."],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu sei. — Completou Yacamim, convencido. — Vamos entrando. — Disse ele apontando para dentro de sua tenda.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os dois jovens entraram seguidos por Yacamim. A tenda tinha uma fogueira acesa no centro e várias cumbucas no chão, cada uma armazenando líquidos de cores diferentes.",
				],
			},
			{
				type: "paragraph",
				segments: ["— O que são essas coisas? — Perguntou Dara."],
			},
			{
				type: "paragraph",
				segments: [
					"— São pigmentos naturais de fortalecimento. — Respondeu Yacamim apontando para os dois jovens se sentarem próximos à fogueira. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"—Vai usar isso na gente? —— Perguntou Rakori incomodado enquanto se sentava. — Meu pai uma vez me contou sobre esse costume, uma tradição antiga que hoje não funciona mais — Neste instante, Yacamin mergulhou as mãos em um pigmento vermelho sangue.",
				],
			},
		],
	},
	{
		pageNumber: 53,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Seu pai está certo e errado Rakori. — Respondeu Yacamim mostrando os dedos avermelhados para eles. — Os pigmentos são um meio de conexão de nossos corpos com a energia da natureza, por meio deles a energia adentra nossa pele. Os guerreiros antigos, acreditavam nessa força e pintavam seus corpos de várias cores recebendo diversos tipos de energia. — Yacamim respingou o pigmento vermelho na brasa da fogueira, uma fumaça vermelha subiu. — As lendas mais antigas — Continuou ele com os olhos vidrados na fumaça — Diziam que cada cor de pigmento é capaz de fornecer uma energia diferente, as mais conhecidas são força, agilidade e cura... — Yacamim parou e olhou para Rakori — Como seu pai lhe disse Rakori, essas tradições dependem do quanto se acredita nelas, por isso muitos as veem como inúteis — Ele parou novamente e respirou, olhando para pedra obsidiana na ponta da clava de Rakori. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Akinar tinha o corpo sempre pintado de vermelho — Disse Dara olhando fixamente para pedra que refletia o fogo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Sim... — Disse Yacamim pausadamente. — Meu irmão usava o pigmento da força e era capaz de manipular a Xaruna dentro das pedras obsidianas. Ele parou hesitante, olhando para Dara. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Essa pedra em sua tiara, é uma obsidiana?"],
			},
			{
				type: "paragraph",
				segments: ["— Sim, minha avó me deu quando eu era pequena. — Respondeu ela."],
			},
			{
				type: "paragraph",
				segments: ["Yacamim pegou uma cumbuca com pigmento amarelo e estendeu para Dara. "],
			},
			{
				type: "paragraph",
				segments: [
					"— A pedra amarela em sua tiara armazena a Xaruna responsável pela fluidez da energia pelo corpo, ela é capaz de aumentar sua velocidade e precisão de seus movimentos. — Disse ele, percebendo a surpresa no rosto de Dara. — Acredito que o pigmento amarelo vai potencializar mais ainda a sua pedra, passe por sua pele para abrir o caminho por onde energia irá fluir — Disse ele voltando seu olhar para o outro — Rakori, você deve experimentar o vermelho que está ligado a força. — Disse levantando-se.",
				],
			},
		],
	},
	{
		pageNumber: 54,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Espere! — Afirmou Rakori. — Ninguém nunca nos contou nada disso. O que é a Xaruna? Nos mais ensine por favor. — Pediu o jovem ansiosamente.",
				],
			},
			{
				type: "paragraph",
				segments: ["Yacamim olhou para os dois e então se sentou novamente."],
			},
			{
				type: "paragraph",
				segments: [
					"—  Tudo o que sei são as histórias e lendas contadas pelos meus ancestrais — Ele suspirou — Muito se foi perdido e esquecido, pois as pessoas não têm mais fé e vivem suas vidas ignorando os saberes ancestrais — Disse Yacamim fazendo uma pausa — A Xaruna é a energia vital presente em toda a matéria, tudo que vocês veem e tocam é composto por Xaruna. Os elementos, os animais, as plantas e árvores, tudo neste universo está conectado. A Xaruna assume várias formas, mas no fim, ela é uma única energia correndo como um fluxo em tudo.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap7/xaruna.png",
				intrinsicWidth: 884,
				intrinsicHeight: 725,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— Os humanos podem aprender a controlar Xaruna? Assim como você e seu irmão!? — Perguntou Dara ansiosa.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Não... — Respondeu Yacamim — Não diretamente. As lendas mais antigas contam da existência de uma árvore colossal, Xa’ru, que é a fonte da Xaruna. De tempos em tempos, a Xa’ru emite um sinal energético que recai sobre um humano como um chamado. Este escolhido, após receber o chamado, desaparece deixando sua vida humana — Dara e Rakori trocam olhares tensos. ",
				],
			},
		],
	},
	{
		pageNumber: 55,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap7/chamadoXaru.png",
				intrinsicWidth: 917,
				intrinsicHeight: 725,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— Os relatos antigos dizem que estes se transformam em Xamãs, seres animalescos podendo ter inúmeras feições e corpos diferentes, criados com objetivo de proteger os seres vivos. Os Xamãs são as únicas criaturas capazes de controlar diretamente a Xaruna.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Então como você consegue? — Perguntou Rakori. "],
			},
			{
				type: "paragraph",
				segments: [
					"— O que sei é que eu e Akinar desenvolvemos essa capacidade, Bukora, nosso irmão do meio, estava com Akinar no assentamento e até aquela época não havia demonstrado nenhum poder. —Ele então fez uma pausa — Nossos pais não eram capazes de manipular a Xaruna — Continuou — Diziam que nossos ancestrais se envolveram demais com os Xamãs e nós fomos amaldiçoados com essas habilidades. — Completou Yacamim com a feição neutra.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— E os xamãs? Por que não ajudam as tribos na luta contra as criaturas que nos atacam? — Perguntou Dara.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— A forma como os Xamãs agem é um mistério... Alguns velhos anciãos dizem que o contato dos humanos com a Xaruna provocou o desaparecimento dos Xamãs e o início do surgimento dos animais infectados que atacam as tribos. Hoje, muitas tribos proíbem seu povo de acreditar e falar sobre a Xaruna alegando que tudo relacionado a ela traz maus presságios e que alimenta as criaturas.",
				],
			},
		],
	},
	{
		pageNumber: 56,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Os três ficaram em silêncio por um momento, então Dara e Rakori passaram seus dedos nos pigmentados e os levaram ao rosto. Enquanto isso, Yacamim pegou um ramo de ervas que havia coletado mais cedo e passou no fogo para que chamuscasse. Uma leve fumaça de cheiro ardente começou a exalar do ramo. Yacamin colocou na frente dos jovens para que inalassem.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que tem naquele continente Yacamim? — Perguntou Dara. Yacamim olhou para ela com olhar tranquilo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Alguns dias atrás pressenti a Xaruna de um dos meus irmãos perdidos. Eu sempre soube que quando esse momento chegasse deveria partir em busca deles. ¬— Respondeu ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Yacamim, as expedições ao antigo no assentamento do continente Oke encontraram apenas devastação e sequer sinal de sobreviventes. — Afirmou Dara. Yacamim olhou para ela e então voltou seu olhar para fogueira.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Naquele dia em que fugi do assentamento e deixei meu irmão para trás, pude sentir sua Xaruna se esvaindo. — Afirmou ele voltando os olhos para a garota — Desde aquele momento, dediquei minha vida a contemplar a existência e a tentar entender um pouco do que é a energia que nos rodeia. Hoje percebo que Xaruna não desaparece ou deixa de existir, ela na verdade se move e se transforma transitando de um lugar para o outro. Sempre soube que sentiria meu irmão de novo. — Yacamim fez uma boa pausa e então contou sobre as aparições de Iyamora e sobre ter tido um sonho com a grande árvore Xa’ru. Dara e Rakori olhavam para ele espantados pensando no que encontrariam no continente Oke.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Desta vez, não iremos às ruínas do antigo assentamento, seguiremos a intenção da energia de meu irmão. E o que quer que nos espere lá, estaremos preparados para enfrentar. — Afirmou Yacamim.",
				],
			},
		],
	},
	{
		pageNumber: 57,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Estava escuro, Akin não enxergava nada. Quando deu conta de si, estava de pé e um mato roçava-lhe as pernas. Um pequeno feixe de luz surgiu bem a frente e aos poucos sua visão foi se adaptando aquela escuridão. Instantes se passaram, e com dificuldade percebeu que estava em uma planície, olhou para o chão e viu algumas pedras vermelhas brotando. Sentiu uma sensação estranha e sem saber por que começou a caminhar em direção ao feixe de luz. Este local é familiar. Sentiu ele. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Continuou seguindo a luz, até que cabanas destruídas começaram a aparecer ao seu lado, era como se estivesse passando por uma antiga aldeia destruída. Mais à frente, enxergou uma fogueira e viu que alguém se sentava ao redor dela.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chegou perto o suficiente para identificar que aquela pessoa era um homem, então se aproximou ainda mais. O homem inclinou o rosto para cima deixando que as chamas invadissem suas feições.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Sente-se. — Disse o estranho com voz abafada. — Akin o encarou tentando reconhecê-lo, então sentou-se em um tronco a frente do homem.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Aparentava ter meia idade, os cabelos eram longos e lisos com as laterais trançadas. Algo que Akin nunca havia visto. Tinha os braços pintados com inscrições tribais vermelhas que fizerem o garoto estremecer.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Quem é você? — Perguntou Akin."],
			},
			{
				type: "paragraph",
				segments: [
					"— Faça as perguntas certas, garoto. — Disse o homem fitando a fogueira. — Nós temos pouco tempo. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Por que estou aqui? — Perguntou Akin novamente."],
			},
			{
				type: "paragraph",
				segments: [
					"— Você carrega uma macula e nesse momento seu corpo está lutando, este lugar é uma projeção da sua mente. — Disse o homem encarando-o fixamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					" Um lampejo de luz iluminou o dorso do homem, na altura das costelas uma marca apareceu, um formato familiar, e Akin pensou já tela visto em algum lugar. Percebendo interesse, o homem se levantou e expôs a marca.",
				],
			},
		],
	},
	{
		pageNumber: 58,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— É uma marca de nascença e a origem de meu poder. — Disse olhando amigavelmente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Por alguns instantes, Akin se sentiu muito bem ao lado daquele sujeito, ele não entendia, apenas sentia.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Estou infectado? Se estamos em minha mente, como não sei quem você é? — Perguntou Akin já ansioso atropelando as próprias perguntas.",
				],
			},
			{
				type: "paragraph",
				segments: ["O estranho sorriu para ele."],
			},
			{
				type: "paragraph",
				segments: [
					"— Você precisa da minha ajuda para conseguir o que eu não consegui, mas agora não importa quem eu sou. Você precisa voltar, lute Akin, Or'ri precisa de você. — Disse o homem aproximando-se do garoto e tocando sua face com a palma da mão. Naquele instante, visões tomaram a mente de Akin.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap8/A_Montanha.png",
				intrinsicWidth: 919,
				intrinsicHeight: 708,
				heightVw: "70vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Na visão, havia uma montanha enorme com uma grande caverna dando para seu interior. Lá de dentro, uma criatura encapuzada o encarava sentada de frente para uma fogueira. Em poucos segundos, a visão foi se turvando e então tudo era escuro novamente.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 59,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akin abriu os olhos e respirou pesadamente. Ao seu lado uma mulher choramingava ajoelhada e uma velha cozinhava algo nojento na fogueira, mas o cheiro parecia bom. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Mãe?"],
			},
			{
				type: "paragraph",
				segments: [
					"-— Akin! — Berrou Uthane o abraçando. Akin aperto-a forte e sentiu o cheiro de seus cabelos em seu rosto.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que aconteceu? — Perguntou ele ainda um pouco tonto.\r\n      Chinu chegou perto e entregou-lhe uma cuia com um tipo de sopa dentro. Akin olhou para ela, que franziu o cenho indicando para que ele tomasse um pouco. O garoto já um pouco melhor se sentou para conversar.\r\n    ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"aaaAkin falou sobre o estranho que conheceu em seu sonho e da visão de uma montanha com uma criatura que o encarava, Uthane e Chinu se entreolharam. Depois contou que o estranhou o avisou sobre carregar uma macula em seu corpo, neste momento, Chinu se aproximou e explicou como fez para salvá-lo de algo maligno que habitava seu corpo. Akin se estremeceu de terror e agradeceu percebendo que sem aquela velha de aparência frágil talvez sua vida tivesse acabado ali. Uthane contou a ele que Onay e Aina não apareciam a alguns dias para visitá-lo e que ele estivera dormindo por quase dois dias após o ritual. Akin fechou o rosto sério enquanto encarava a fogueira.aa",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Irei descansar por hoje e partirei amanhã para Or'ri. — Disse ele. Uthane olhou para ele ainda preocupada, mas assentiu com cabeça.",
				],
			},
		],
	},
	{
		pageNumber: 60,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Na manhã seguinte, Akin acordou, pegou alguns de seus equipamentos e se preparou para partir. Chinu caminhou até ele e estendeu a mão mostrando uma bolsa de couro com alguns alimentos e remédios dentro.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Akin, leve isso e entregue pessoalmente para Paku. — Disse ela."],
			},
			{
				type: "paragraph",
				segments: ["— O que? Como assim? — Perguntou o jovem."],
			},
			{
				type: "paragraph",
				segments: [
					"— Paku deve estar muito mal e não pode comer da comida da aldeia, diga a ele para se alimentar somente disso. Você deverá vir aqui buscar mais quando acabar. — Explicou a velha.aaa",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Paku tentou me matar! Como vou cuidar dele agora? —Afirmou Akin, intensamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você precisa resolver isso com ele, ou os dois vão acabar se matando — Disse Chinu olhando firmemente para ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Obedeça a ela Akin, é melhor vocês se entenderem — Disse Uthane do outro canto da cabana. Akin esticou a mão e agarrou o saco desacreditado do que teria que fazer. Virou-se e saiu em direção a aldeia. Uthane foi até a porta e parou ao lado de Chinu para ver o filho enquanto partia.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você sabe o que realmente salvou seu filho? — Perguntou Chinu se virando. Uthane olhou para ela sem reposta — O combustível para que um ritual funcione não são as misturas e substâncias que usamos, elas são apenas catalisadoras. É preciso acreditar. — Continuou ela, e os olhos de Uthane se encheram d'água. — Só a verdadeira energia da vontade pode trazer alguém de volta e isso você tem de sobra Uthane. Parece que Akin de alguma forma encontrou um jeito de voltar também. — A velha passou por Uthane, que esfregava os olhos, e entrou na cabana.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— As feições do homem que ele disse ter conversado, se parecem com as do pai e a montanha que ele descreveu parece com uma que eu vi uma vez ao norte do continente — Afirmou Uthane, se recompondo. — Seria impossível, os dois nunca se conheceram e Akin nunca foi para aquelas terras.",
				],
			},
			{
				type: "paragraph",
				segments: ["Chinu olhou para ela pensativa."],
			},
			{
				type: "paragraph",
				segments: [
					"— Se as histórias que você conta de Akinar são verdadeiras, então não podemos duvidar de nada — Respondeu a curandeira com olhar sério para Uthane.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 61,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Na manhã seguinte, Akin acordou, pegou alguns de seus equipamentos e se preparou para partir. Chinu caminhou até ele e estendeu a mão mostrando uma bolsa de couro com alguns alimentos e remédios dentro.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Akin, leve isso e entregue pessoalmente para Paku. — Disse ela."],
			},
			{
				type: "paragraph",
				segments: ["— O que? Como assim? — Perguntou o jovem."],
			},
			{
				type: "paragraph",
				segments: [
					"— Paku deve estar muito mal e não pode comer da comida da aldeia, diga a ele para se alimentar somente disso. Você deverá vir aqui buscar mais quando acabar. — Explicou a velha.aaa",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Paku tentou me matar! Como vou cuidar dele agora? —Afirmou Akin, intensamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você precisa resolver isso com ele, ou os dois vão acabar se matando — Disse Chinu olhando firmemente para ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Obedeça a ela Akin, é melhor vocês se entenderem — Disse Uthane do outro canto da cabana. Akin esticou a mão e agarrou o saco desacreditado do que teria que fazer. Virou-se e saiu em direção a aldeia. Uthane foi até a porta e parou ao lado de Chinu para ver o filho enquanto partia.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você sabe o que realmente salvou seu filho? — Perguntou Chinu se virando. Uthane olhou para ela sem reposta — O combustível para que um ritual funcione não são as misturas e substâncias que usamos, elas são apenas catalisadoras. É preciso acreditar. — Continuou ela, e os olhos de Uthane se encheram d'água. — Só a verdadeira energia da vontade pode trazer alguém de volta e isso você tem de sobra Uthane. Parece que Akin de alguma forma encontrou um jeito de voltar também. — A velha passou por Uthane, que esfregava os olhos, e entrou na cabana.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— As feições do homem que ele disse ter conversado, se parecem com as do pai e a montanha que ele descreveu parece com uma que eu vi uma vez ao norte do continente — Afirmou Uthane, se recompondo. — Seria impossível, os dois nunca se conheceram e Akin nunca foi para aquelas terras.",
				],
			},
			{
				type: "paragraph",
				segments: ["Chinu olhou para ela pensativa."],
			},
			{
				type: "paragraph",
				segments: [
					"— Se as histórias que você conta de Akinar são verdadeiras, então não podemos duvidar de nada — Respondeu a curandeira com olhar sério para Uthane.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 62,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akin saiu da floresta e tomou o caminho mais curto até Or'ri. Passou pelas plantações e logo avistou os portões da aldeia. Dois guardas acenaram para ele enquanto ele passava.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Bom dia, Akin! — Disse o primeiro aldeão que passou por ele, o garoto o encarou por instantes e continuou andando em direção ao interior da vila.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A aldeia estava em plena movimentação, pessoas trabalhavam, carregavam comida e ferramentas de um lado para outro. Não havia sinais do tumulto do dia em que chegara da viagem com seus companheiros. As coisas voltaram ao normal, pensou Akin.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ele apressou o passo até tenda do chefe, esperando encontrar seu mestre Kizuno. Na entrada os guardas sorriram para ele e abriram caminho. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ao entrar na tenda avistou Fakuri e Kizuno, estavam sentados rindo um com o outro no fundo.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Garoto! — Gritou Fakuri. — Procuramos por você esses dias, por onde esteve?"],
			},
			{
				type: "paragraph",
				segments: ["— Você me mandou para casa de Chinu na floresta."],
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri olhou para ele sem entender e deu de ombros. Kizuno levantou-se e foi até o jovem.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que aconteceu com tumulto na aldeia daquele dia? Perguntou Akin antes que seu mestre falasse.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Está esquisito garoto, acho que passou tempo demais com aquela velha não é mesmo Fakuri? — Respondeu Kizuno, sorrindo enquanto olhava parado para frente, Fakuri sorriu também. Akin observou seu mestre por instantes.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Certo... Preciso levar isto para Paku, onde ele está? —Perguntou Akin aos dois. Kizuno já se sentava e Fakuri olhava fixamente para ele paralisado. Akin deu alguns passos para trás e saiu rapidamente da tenda assustado. Parou do lado de fora ofegante. Olhou para um dos guardas na porta e perguntou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Onde está Paku? — O guarda olhou para ele e apontou para a tenda do curandeiro que ficava ao leste da aldeia. Akin agradeceu e saiu andando apressadamente, meio atordoado. ",
				],
			},
		],
	},
	{
		pageNumber: 63,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Correndo pela aldeia, de repente esbarrou em um homem que carregava um tronco de madeira junto de outros três. O tronco caiu e rolou alguns metros para frente. Akin pediu desculpas imediatamente e ao olhar para homens, percebeu que eram aqueles que tinham tentado jogar pedras nele no dia do tumulto. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Me desculpem. — Repetiu, com medo de que se revoltassem com ele — Me desculpem, eu não estava olhando — Disse duas vezes nervoso. Os homens pararam calmamente. O alto mais próximo olhou para ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Está tudo bem jovem, se quiser pode nos ajudar a carregar. — Disse ele.  Akin olhou e não conseguiu responder, apenas assentiu com a cabeça, abaixou-se e ajudou a erguer o tronco. Carregaram alguns metros para dentro de uma cabana cheia de ferramentas. Akin largou o tronco e nervoso se despediu dos homens que acenaram para ele. Sem parar, chegou à tenda do curandeiro e lá entrou. Parou ofegante por uns instantes, olhando para o chão e respirando rapidamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Mas que merda você está fazendo aqui? — Soou uma voz vinda mais de dentro da cabana, Akin levantou os olhos para ver de onde vinha e viu Paku deitado em uma rede com parte do dorso do enfaixado com couros. O garoto se recompôs e andou na direção dele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Não se aproxime de mim seu anormal! — Berrou Paku, esticando a mão para pegar o que parecia ser uma bengala feita de madeira.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Paku, eu só vim trazer comidas e remédios que Chinu mandou para você. — Disse Akin, e Paku soltou uma risada.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— E você acha que vou comer algo vindo de você e daquela velha maluca? — Respondeu Paku com desdém. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu também não queria estar aqui depois de você ter tentado me matar! — Afirmou Akin sério e Paku apenas o observou — As coisas estão estranhas, então ou você usa esses remédios ou você morre, está entendendo? — Avisou Akin com firmeza olhando nos olhos de Paku. — Por mim tanto faz, mas a velha pediu então estou aqui. — Akin colocou a sacola de couro perto de alguns outros itens da tenda e saiu pisando duro antes que Paku pudesse responder.",
				],
			},
		],
	},
	{
		pageNumber: 64,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Do lado de fora, o jovem respirava com raiva e ao mesmo tempo com alívio, ao menos alguém naquele lugar tinha lhe tratado normalmente, mesmo que esse alguém fosse Paku. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin caminhou até uma tenda aberta e sentou-se em um toco de madeira pensativo, olhou para frente e viu todos trabalhando, mais uma vez duas mulheres passaram por ele e sorriram. Foi então que abaixou a cabeça. ",
					{
						italic: "Todos estão me tratando bem demais, isso não é normal.",
					},
					"Pensou. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Naquele momento, o dia já passava do meio da tarde e o sol enfraquecia-se. Akin viu o curandeiro retornando para tenda de Paku. ",
					{
						italic: "Chinu!",
					},
					" Lembrou ele, tendo uma ideia. Levantou-se rapidamente e saiu correndo na direção da tenda de Fakuri, esperando que ele e Kizuno ainda estivessem lá. Atravessou mais uma vez a aldeia e chegou na tenda onde encontrou os dois sentados igual havia deixado.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Garoto! — Gritou Fakuri novamente ao vê-lo. Kizuno permaneceu parado. Akin pegou os dois pelo braço e fez força para cima para que se levantassem.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Vamos! Preciso mostrar uma coisa para vocês rápido! —Afirmou ele."],
			},
			{
				type: "paragraph",
				segments: ["— Que divertido! — Disse Fakuri abobado."],
			},
			{
				type: "paragraph",
				segments: [
					"Akin saiu da cabana puxando os dois para frente, os guardas nem reparam e assim como ninguém da aldeia. Levou os dois para fora em direção a cabana da velha curandeira. ",
				],
			},
			{
				type: "paragraph",
				segments: ["Os três chegaram lá e encontraram Chinu colhendo algumas hortaliças abaixada."],
			},
			{
				type: "paragraph",
				segments: [
					"— O que é isso Akin? — Perguntou ela, vendo-o chegar com os dois praticamente de mãos dadas.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Que lugar legal. — Disse Kizuno complemente fora de si. Chinu olhou para ele contendo-se para não rir.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Chinu preciso de sua ajuda! — Disse Akin desesperado, tropeçando com os dois. Uthane chegou correndo e deu apoio para seu filho.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Vamos levá-los para dentro! — Disse a velha apoiando Fakuri em seu ombro. "],
			},
		],
	},
	{
		pageNumber: 65,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Os cinco caminharam com cuidado e adentram na cabana. Lá dentro, colocaram Fakuri e Kizuno deitados no chão. Chinu começou a vasculhar sua cabana atrás da sobra da mistura que usou em Akin na outra noite. Achou uma cuia com o final do líquido, aproximou-se e despejou um pouquinho na boca de cada um dos dois. Fakuri e Kizuno começaram a se debater no chão, seus corpos faziam movimentos involuntários, os braços se levantavam e batiam no chão, os rostos tinham feições de medo bizarras. Até que de repente, aquietaram-se, ficando ali parados como que em sono profundo. Akin e Uthane observavam aterrorizados.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Foi o que pensei — Disse Chinu enquanto coçava os cabelos brancos. — Precisamos de mais desse antídoto e precisamos dele ainda mais forte que antes, a situação deles é pior do que sua Akin. — Disse a velha encarando os dois corpos deitados. — Akin, vá rápido e colha uma planta que tem flores roxas e rosas atrás da cabana, preciso das raízes dela. Uthane, colha o que conseguir de gengibre, vamos precisar de muito! — Completou a velha e os dois imediatamente saíram correndo cabana afora.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"A velha curandeira corria de um lado para o outro preparando os elementos para o ritual. Amassou algumas raízes em uma cuia junto com ervas, colocou um ramo de raízes em brasa e passou por toda cabana. Jogou um pó de cheiro acre na fogueira e uma fumaça forte subiu. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chinu olhou para o fogo por um instante. Olhou para tudo que tinha preparado, lembrou-se de quando era pequena e via sua mãe fazendo as mesmas coisas, contando a ela cada detalhe sobre as plantas, sobre como amassar as ervas no pilão para fazer remédios e como preparar o local para um ritual. Chinu sentiu os olhos se enxerem d’guá, tinha orgulho daquele saber ancestral passado de geração em geração e sentia-se bem sempre que ajudava alguém com ele. A velha inspirou fundo sentindo os aromas diversos de sua cabana, ",
					{
						italic: "hora de trazer esses dois de volta",
					},
					", disse ela para se mesma.",
				],
			},
		],
	},
	{
		pageNumber: 66,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"O entardecer chegou e as tochas já estavam acesas na cabana, Uthane e Akin entraram no local segurando cestos de palha repletos de raízes, pedaços de plantas e galhos. Chinu fez sinal para que eles jogassem tudo em uma grande bacia de pedra. A velha começou a amassar tudo com um pilão de pedra enorme, pegou uma mistura viscosa que parecia seiva de planta e despejou em cima e continuou mexendo. Chinu andou até o fundo da cabana, afastou alguns cestos de palha com plantas diversas, pegou uma bolsa de couro velha empoeirada e foi até a fogueira. A velha se abaixou bem perto, abriu a bolsa e com a outra mão empurrou uma brasa para dentro dela. Levou a bolsa para cima da bacia de pedra e de repente o fundo da bolsa se dissolveu em uma espécie de reação da brasa com líquido interno, uma gosma vermelha escorreu caindo para dentro da pedra. Novamente Chinu pegou o pilão e voltou a misturar.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap8/chinu.png",
				intrinsicWidth: 702,
				intrinsicHeight: 702,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— Extrato de raiz de Quiribar. — Disse a velha percebendo os olhares compenetrados de Akin e Uthane. — Uma planta desintoxicante que cresce no território além da tribo Oin. — Completou ela — Vou usar tudo que tenho, a mistura gera um elixir de energia única. — Afirmou a velha sem parar de mexer o pilão. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Teremos o suficiente para os dois e provavelmente mais alguns. — A velha pegou duas cuias de madeira e mergulhou no líquido viscoso, então estendeu para Akin e Uthane que pegaram logo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Derramem nas bocas deles. — Disse ela, apontando para os dois deitados e assim eles fizeram.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Novamente os corpos dos homens começaram a se contorcer bizarramente, Akin segurou os braços de Kizuno enquanto Uthane tentava segurar Fakuri. Chinu arremessou pedaços de tecido para os dois.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Protejam seus rostos e não respirem em cima deles! — Gritou ela. Assim que os dois se protegeram, uma fumaça densa começou a sair da boca de Fakuri e Kizuno. Chinu fazia movimentos com ramos e galhos nas mãos empurrando a fumaça para longe. A fumaça parou de sair e os corpos se aquietaram. Akin se jogou para o lado cansado e com braços doendo de tanto segurar.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Foi isso que aconteceu comigo?! — Disse ele agitado e ofegante de tanta força que usou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Não sabemos como, mas seu corpo já combatia esse veneno. — Disse Chinu, enquanto abaixava para perto da bacia de pedra com a mistura de Quiribar. — Eu apenas dei um empurrãozinho para você voltar. — Completou ela colocando uma tampa de palha sobre a pedra. Akin olhou para Uthane que estava parada pensativa.",
				],
			},
		],
	},
	{
		pageNumber: 67,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Mãe, você sabe alguma coisa? — Perguntou o jovem. Uthane que olhava para o nada, virou-se para ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— É melhor dormirmos Akin, eles precisarão de nós quando acordarem. — Respondeu ela dando as costas para ele em direção a uma das redes.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Naquela noite, nenhum dos três dormiu direito, remexiam-se em suas redes e acordavam olhando para os dois que ainda dormiam no centro da cabana. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O dia já amanhecia e Akin olhava para um galho trançado em forma circular pendurado no teto, o galho balançava levemente com vento que entrava pelas frestas da porta.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Onde é que eu estou? — Perguntou uma voz, Akin se virou repentinamente. Fakuri estava sentado com a mão na cabeça. Ele estendeu a mão e sacudiu Kizuno que acordou tossindo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Minha cabeça doí muito. — Afirmou o chefe com voz falhada. Kizuno se sentou e olhou em volta em busca de entendimento. Akin se levantou e foi até eles. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Vocês estão na cabana de Chinu fora de Or’ri, eu os trouxe aqui para curá-los. — Respondeu Akin.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Curar? — Perguntou Fakuri voltando seu olhar sério para o jovem."],
			},
			{
				type: "paragraph",
				segments: [
					"— Vocês estavam fora de si, algo tomou seus corpos.  — Afirmou Chinu enquanto colocava uma panela de barro no fogo com alguns legumes frescos de sua plantação. — Fiz um ritual de desintoxicação e agora vocês estão livres. —  Completou a velha, nesse momento Kizuno olhava para frente com as mãos no rosto.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Sinto como se tivesse dormido por dias seguidos. Disse ele ainda atordoado."],
			},
			{
				type: "paragraph",
				segments: [
					"— Precisamos voltar para Or’ri agora mesmo! — Disse Fakuri tentando se levantar com dificuldade. Akin correu e o escorou para que não caísse. ",
				],
			},
		],
	},
	{
		pageNumber: 68,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap8/chinu2.png",
				intrinsicWidth: 988,
				intrinsicHeight: 838,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Afirmou Chinu seriamente, Kizuno e Fakuri olharam para ela. A velha trouxe cumbucas de barro com conteúdo semelhante à de uma sopa de legumes. — Tomem e escutem. — Disse a curandeira sentando-se próximo a fogueira. Fakuri hesitou parado olhando para Kizuno, que assentiu com a cabeça para que o amigo aceitasse.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Akin começou com os primeiros efeitos na noite que em que vocês estavam no acampamento Aimor. — Começou a recordar Chinu. — De alguma forma o corpo do garoto reagiu ao envenenamento. Vocês sentiram algo diferente naquele dia? —Perguntou a velha olhando para os Fakuri e Kizuno.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Para falar verdade, nós notamos que Mot’ar parecia maior do que sempre foi. — Disse Kizuno. — Pode parecer loucura, mas ele estava muito maior.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Tem mais uma coisa. — Começou Akin — Notei que durante o banquete oferecido estávamos comendo como animais sedentos, um frenesi tomou meu corpo, sequer percebi quando parei de comer. — Disse ele, agora se lembrando.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Sentiram alguma presença estranha? — Perguntou Chinu"],
			},
			{
				type: "paragraph",
				segments: [
					"— Havia alguém no fundo da cabana central, Fakuri e eu vimos de relance, mas estava encapuzado. — Comentou Kizuno.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Pelo menos cinco pessoas de cada tribo da planície estavam naquele dia. — Comentou Fakuri enquanto olhava para o nada. Os outros olharam para ele imediatamente. — A planície dos povos é enorme, a notícia de um ataque correria facilmente e os inimigos seriam detidos antes que fizessem qualquer avanço em nosso território. — Disse ele olhando dentro dos olhos de cada um ali. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— A menos que você tivesse a chance de neutralizar cada tribo de dentro para fora. — Completou Chinu. — Enviando membros das próprias tribos infectados para o interior de cada uma, esperando que eles façam todo trabalho, enquanto você apenas espera para agir.",
				],
			},
		],
	},
	{
		pageNumber: 69,
		blocks: [
			{
				type: "paragraph",
				segments: ["— Como isso seria possível? — Perguntou Akin aflito."],
			},
			{
				type: "paragraph",
				segments: [
					"— O como não importa mais. — Cortou Kizuno. — Supondo que eu, Fakuri e você chegamos infectados e contaminamos a população no dia em que chegamos, o que já fazem quase quatro dias, todos em Or’ri estão chegando no estágio de contaminação em que eu e Fakuri estávamos. — Disse Kizuno fazendo uma pausa. — Chinu — Chamou ele. — Quanto do antídoto você tem?",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chinu foi calmamente até a bacia de pedra, retirou a tampa de palha e parou pensativa encarando o líquido.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Cerca de vinte e poucas doses. — Respondeu ela."],
			},
			{
				type: "paragraph",
				segments: [
					"— Temos a vantagem, o inimigo pensa que estamos todos infectados, agora só precisamos saber quando ele irá agir. — Disse Kizuno.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap8/akin_torokar.png",
				intrinsicWidth: 784,
				intrinsicHeight: 749,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["Afirmou Akin e Kizuno olhou para ele pensativo."],
			},
			{
				type: "paragraph",
				segments: [
					"— Certo, o momento perfeito, a união de todas as tribos. Seja o que for, deve aparecer — Disse Kizuno.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Chinu — Chamou Fakuri se levantando. — Iremos usar o antídoto para acordar os melhores guerreiros de Or’ri e então pensaremos em um plano até o dia de Torokar. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— E quanto as outras pessoas, chefe? — Perguntou Kizuno."],
			},
			{
				type: "paragraph",
				segments: [
					"— É nossa única saída amigo, não adianta salvá-las agora e depois sermos derrotados por este desconhecido. — Disse Fakuri respirando longamente. ",
				],
			},
			{
				type: "paragraph",
				segments: ["aaaaaaaa"],
			},
		],
	},
	{
		pageNumber: 70,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Naquele momento, Akin subitamente teve um flash de memória, Onay e Aina passaram por sua cabeça. Ele se levantou em desespero e saiu correndo para fora da cabana.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Akin! — Gritou Uthane com força. Kizuno imediatamente se levantou e saiu atrás do jovem. Fakuri que observava a situação ainda sério, se virou para Uthane e Chinu.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Estejam preparadas, nós voltaremos em breve. — Disse virando-se para sair da cabana.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Akin corria desesperado pela mata quase tropeçando nos galhos e pedras, enquanto se dava conta de que não via Onay e Aina fazia tempo. Podia escutar seu mestre gritando seu nome para que parasse por um segundo, mas não podia, precisava chegar até seus amigos. De repente, sentiu algo caindo em cima dele e o agarrando. Caiu no chão de costas e olhou para trás, era Kizuno que tinha saltado para cima dele.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Me solte! — Berrou Akin"],
			},
			{
				type: "paragraph",
				segments: [
					"— Controle-se Akin. — Disse o mestre o segurando pelos braços. O garoto se debatia, enquanto lagrimas escorriam de seus olhos.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Onay e Aina... Ele disse com voz tremula."],
			},
			{
				type: "paragraph",
				segments: [
					"— Nós vamos até eles Akin! Pare com isso! — Repetiu Kizuno seriamente. — Nem sabemos o que estamos enfrentando, se você entrar assim na aldeia desse jeito pode entregar toda nossa vantagem. — Akin tentava engolir o choro, sem saber por que tinha se desesperado somente naquele momento. Como poderia tudo aquilo estar acontecendo justo agora que as coisas estavam melhores para ele na aldeia. ",
				],
			},
			{
				type: "paragraph",
				segments: ["Kizuno saiu de cima do garoto e estendeu a mão para que ele se levantasse."],
			},
			{
				type: "paragraph",
				segments: [
					"— Preciso de você comigo, Akin. — Disse o mestre. — Seus amigos e todos da aldeia precisam de você neste momento, sei que você é forte e consegue entender. Vamos! Olhe nos meus olhos garoto e encontre a mesma dor que o aflige. — Afirmou Kizuno, Akin parou por um momento e encarou seu mestre — Sinto o mesmo que você, mas entenda precisamos nos segurar para poder salvá-los. — Completou Kizuno e aos poucos viu o garoto se tranquilizar. Neste momento, Fakuri chegou caminhando atrás dos dois carregando uma bolsa de couro.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Aí estão vocês. Akin, você esqueceu a comida e os remédios de Paku. — Disse o chefe, mostrando a bolsa para o jovem. — Leve para ele e depois encontre a mim e Kizuno em minha tenda familiar. — Lembrem-se, ajam naturalmente, não digam nada a ninguém. Completou o chefe firmemente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin olhou para o lado evitando o olhar para o rosto de Fakuri, enxugou as lagrimas do rosto e se recompôs como pode.",
				],
			},
		],
	},
	{
		pageNumber: 71,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Os três seguiram em direção à Or’ri, passando por algumas pessoas que pareciam trabalhar normalmente nos arredores da aldeia. Entraram pelo portão principal onde havia dois guardas que sequer se mexeram ou notaram sua presença. Lá dentro, muitos trabalhavam normalmente e os três decidiram se misturar para entender melhor.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akin foi direto para tenda de Paku. Caminhou rapidamente pela aldeia e ao se aproximar da tenda ouviu um resmungar vindo lá de dentro",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu não vou comer dessa comida, seu velho maluco. —Afirmou alguém quando Akin entrava na tenda. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Paku estava deitado na mesma rede de sempre, o rosto com um pouco mais de vigor. Na frente dele, o velho curandeiro da aldeia estendia uma colher de madeira com um pouco de comida.\r\nAkin foi caminhando para dentro até que Paku notasse sua presença e fez sinal para que ele ficasse quieto. O jovem se aproximou do curandeiro e tocou seu ombro\r\n",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Natkir. — Disse Akin, chamando o velho pelo nome. — Fakuri precisa de você na tenda central agora. — Por um breve instante, nada aconteceu e o velho permaneceu parado, sentado com a mão ainda esticada. De repente, ele colocou a comida no chão ali mesmo, e sem dizer nada, levantou-se e caminhou diretamente até saída. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Não pense que vou te agradecer por isso. — Cortou Paku quase que imediatamente. — Não sei o que deu nesse velho. Essa noite ele ficou em pé de frente para parede a noite inteira, sequer disse uma palavra e agora estava tentando me dar essa comida à força. — Completou ele. — Akin estendeu a sacola de couro com comida e remédios até o alcance de Paku.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Pegue. — Disse ele"],
			},
			{
				type: "paragraph",
				segments: ["Paku pegou com indiferença."],
			},
			{
				type: "paragraph",
				segments: ["— Agora saia. — Afirmou Paku olhando nos olhos de Akin. "],
			},
			{
				type: "paragraph",
				segments: ["O jovem Akin apenas deu as costas e saiu da tenda ignorando-o."],
			},
			{
				type: "paragraph",
				segments: [
					"Do lado de fora, Akin respirou fundo e olhou ao redor. Havia várias pessoas trabalhando, carregando coisas para lá e para cá, mas pareciam estar em transe, assim como Fakuri e Kizuno no dia anterior. Akin começou a caminhar em direção a tenda onde Fakuri morava com sua família. Enquanto isso, afastava os pensamentos que vinham sobre Onay e Aina. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Chegou à tenda de Fakuri, e ali de frente para ela parou antes de entrar. Engoliu em seco e encheu-se de esperança. A aldeia tinha muitos habitantes, não era possível que todos tivessem sido intoxicados em tão pouco tempo, pensou ele enquanto adentrava.",
				],
			},
		],
	},
	{
		pageNumber: 72,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Lá dentro, avistou Fakuri em pé e na frente dele duas pessoas com quem conversava, uma delas jogou a cabeça para lado para ver quem vinha entrando.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Akin! — Gritou a Aina logo ao vê-lo. Passou por Fakuri e foi eu sua direção, Onay que estava do lado foi também. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Como você está? — Perguntou Onay abraçando Akin."],
			},
			{
				type: "paragraph",
				segments: [
					"— Onay! Aina! — Gritou Akin sem acreditar. — Vocês estão bem! — Disse ele ainda abraçando os dois.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Por que não estaríamos? — Perguntou Aina."],
			},
			{
				type: "paragraph",
				segments: ["— Vocês sumiram, pensei que algo pudesse ter acontecido. — Respondeu Akin."],
			},
			{
				type: "paragraph",
				segments: [
					"— Você que sumiu na verdade. Que dia voltou da viagem de Aimor? — Perguntou Onay com olhar de dúvida. Akin respirou subitamente ao receber aquela pergunta.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Já cheguei há dias, vocês não se lembram? — Perguntou ele com dificuldade. Os dois olharam para ele sem entender, enquanto isso, Fakuri apareceu atrás dos dois colocando as mãos em seus ombros.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Onay, Aina. — Disse o chefe olhando nos olhos de Akin. — Por que não vão ajudar sua mãe na colheita? Akin está cansado da viagem. — Aina e Onay sem dizer nada passaram por Akin em direção a saída andando em transe. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Vamos seguir o plano Akin, não podemos alarmá-los. —Disse Fakuri. — Vamos nos encontrar com Kizuno agora. —Completou ele passando por Akin.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap8/fakuri_akin.png",
				intrinsicWidth: 894,
				intrinsicHeight: 738,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 73,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— São seus próprios filhos. Vai deixá-los assim? — Disse Akin olhando para Fakuri seriamente que parou e se virou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— São seus próprios filhos. Vai deixá-los assim? — Disse Akin olhando para Fakuri seriamente que parou e se virou.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Você não acha que não quero usar o antídoto nas pessoas que amo? — Perguntou ele encarando Akin. — Minha mulher também está infectada, não acha que quero salvá-la? Afirmou ele e então deu as costas para Akin.",
				],
			},
			{
				type: "divider",
			},
			{
				type: "paragraph",
				segments: [
					"Os dias se passaram e as pessoas da tribo ficavam cada mais estranhas. O grupo seguiu levando os melhores guerreiros da aldeia para a cabana de Chinu e lá fizeram o máximo de rituais que fosse possível. Assim, conseguiram reunir um grupo que iria agir sob o comando de Kizuno. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri havia arquitetado um plano, pediu a Chinu que pegasse a comida infectada da aldeia e fizesse com ela uma substância diluída que ele iria usar para seu plano e assim ela o fez.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"No meio de toda essa confusão, ao fim de todos os dias Akin ia até seus amigos para tentar conversar, mas com o estágio avançado eles apenas faziam seus afazeres do dia a dia como se estivessem hipnotizados, não se comunicavam e na maioria das vezes ficavam parados olhando para o nada. Akin os abraçava e sussurra em seus ouvidos todos os dias agradecendo por terem estado ao seu lado todos esses anos e que agora ele faria de tudo para salvá-los.",
				],
			},
		],
	},
	{
		pageNumber: 74,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Era a manhã seguinte a chegada de Uthane no assentamento I’akas. Akinar ajudava a encher o barco com peles e demais mercadorias que levariam de volta para a tribo. Subitamente seu nome foi chamado ao longe, ele olhou na direção para ver o que era e viu um homem pequeno correndo até ele, era Murin o batedor do assentamento, que voltava de uma espionagem na tribo Tuk.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Akinar! — Gritou Murin enquanto corria.  O homem respirou fundo ao chegar perto e aprumou-se. — A tribo Tuk foi devastada! — Completou ele ainda ofegante. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Não é possível! — Afirmou Akinar assustado. — Zarak não teria tempo de conseguir tão rápido. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Chefe Akinar, cheguei o mais perto que consegui da aldeia e percebi que estava sendo saqueada. — Disse Murin incrédulo. —Não avistei sinais de batalha, apenas corpos caídos queimados no chão.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Do que você está falando?! — Perguntou Bukora assustado."],
			},
			{
				type: "paragraph",
				segments: [
					"— Os homens de Zarak não estavam sujos de batalha e nem cansados, apenas saqueavam a aldeia. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— E Zarak? — Perguntou Akinar"],
			},
			{
				type: "paragraph",
				segments: ["— Não o vi, chefe. — Respondeu Murin."],
			},
			{
				type: "paragraph",
				segments: ["— Em quantos estão? E quanto tempo para chegarem aqui? Perguntou Akinar."],
			},
			{
				type: "paragraph",
				segments: [
					"— Cerca de vinte guerreiros chefe, que devem sair de lá montados em cavalos descansados da própria tribo Tuk. Eu diria que podem estar aqui antes do entardecer. — Completou Murin.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Mudança de planos. Os barcos devem partir agora, todos que não forem guerreiros devem ir. — Afirmou Akinar em voz alta para que todos ali escutassem. — Se necessário joguem as mercadorias ao mar para que caibam todos. — Completou ele, sem hesitar. Akinar fez um sinal para que seu irmão Bukora se aproxima-se. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Junte todos os guerreiros e me encontre no portão de entrada do assentamento. — Bukora balançou a cabeça e saiu apressado.",
				],
			},
		],
	},
	{
		pageNumber: 75,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akinar foi até sua tenda onde estavam Uthane e Yacamim, ao entrar se deparou com os dois sentados e a mulher contava ao pequeno algumas histórias de sua tribo.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Akinar, o que houve? — Perguntou a mulher ao vê-lo nervoso."],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/akinar_uthane.png",
				intrinsicWidth: 901,
				intrinsicHeight: 827,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— Zarak está vindo para cá agora mesmo, você e Yacamin precisam entrar nos barcos e ir embora. — Disse Akinar sério. Os olhos de Uthane se arregalaram.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Não vou abandonar você e minha terra! — Afirmou ela em uma mistura de grito com choro. — Akinar por favor. — Suplicou. Akinar se abaixou para falar com Yacamim.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Meu irmãozinho, preciso que você vá para um dos barcos que estão no cais agora. — Disse passando os dedos por entre os cabelos escuros do garoto.",
				],
			},
			{
				type: "paragraph",
				segments: ["— O que foi irmão? —Perguntou o pequeno Yacamim com voz doce de criança."],
			},
			{
				type: "paragraph",
				segments: [
					"— Nós vamos deixar o assentamento por um momento, vocês vão primeiro e eu vou logo depois. — Disse ele fazendo gestos para que Yacamim se levantasse. Os dois ficaram de pé e começaram a caminhar para a saída. Uthane veio e se jogou nos braços de Akinar, beijando seus lábios. Ela afastou o rosto e olhou em seus olhos.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Estou carregando uma criança em minha barriga. — Disse ela com rosto quase colado ao dele. Akinar assustou-se e seu rosto demonstrou felicidade e medo. Encostou a testa junto da dela e respirou profundamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Está bem Uthane. — Disse ele cedendo. — Vá ao estábulo, pegue o cavalo marrom escuro com uma mancha na cabeça. — Disse ele tirando o cabelo da face de Uthane. — Seu nome é Obi, o cavalo mais veloz que você vai encontrar. — Disse enxugando as lagrimas no rosto da mulher. — Desça para o sul, margeando a mata, até avistar um vilarejo que fica perto de um desfiladeiro enorme, o chefe de lá me deve um favor.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Você vai me encontrar lá? — Perguntou ela."],
			},
			{
				type: "paragraph",
				segments: [
					"— Sim. — Disse ele segurando uma das mãos de Uthane, enquanto com a outra tirou algo que estava preso em sua cintura e levou para frente, colocando nas mãos da mulher. Uthane olhou para baixo e viu uma adaga com o cabo feito de osso e a lâmina dentro de um estojo de couro. Ela pousou sua outra mão no cabo e puxou levemente para fora, uma lâmina de pedra vermelha escura apareceu. Uthane retirou-a por inteiro e viu que era perfeitamente esculpida. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— É obsidiana vermelha. — Disse Akinar. — Eu mesmo a fiz para você, guarde-a e assim sempre irei saber onde te encontrar. —Uthane voltou a adaga para dentro do estojo e passou os braços por Akinar o abraçando. Ficaram ali por um instante, então ela o largou e se virou de costas para sair, deu uma última olhada para ele, então foi embora.",
				],
			},
		],
	},
	{
		pageNumber: 76,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akinar levou Yacamim para o cais, onde os barcos já estavam cheios e prontos para partir. O garoto tinha aproximadamente doze anos, tinha os cabelos pretos de tamanho médio e pele morena clara. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Irmão. — Chamou o garoto cutucando o irmão mais velho ao chegarem no cais, Akinar parou e abaixou-se para ouvi-lo. — Estou com aquela sensação ruim de novo, como na noite passada.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Eu também estou meu irmãozinho. — Disse Akinar. — Consegue sentir a minha energia? — Perguntou ele e Yacamin balançou a cabeça que sim. — Certo. Quero que feche os olhos e respire fundo. Se conecte comigo, grave a sensação que emana da minha energia e assim saberá quando eu estiver voltando. — Disse ele e fechou os olhos junto com o pequeno irmão.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Vou te esperar em nossa aldeia. — Disse Yacamim sorrindo. Akinar assentiu com cabeça, pegou Yacamim nos braços e o colocou no barco. O garoto se sentou e ficou olhando para ele. Akinar fez sinal para que o barco partisse e ficou ali por alguns instantes enquanto via seu irmão se afastar.",
				],
			},
			{
				type: "divider",
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto isso, no portão do assentamento cerca de trinta homens e mulheres se reuniam esperando pela chegada de Akinar, seguravam lanças de madeira com ponta de pedra e arcos longos enormes, vestiam couro e tecidos leves pelo corpo.  ",
				],
			},
			{
				type: "paragraph",
				segments: ["Akinar chega próximo ao grupo e faz sinal anunciando sua chegada."],
			},
			{
				type: "paragraph",
				segments: [
					"— Escutem bem. — Afirmou se posicionando em frente a todos. — Zarak pode chegar a qualquer momento então serei breve. — Começou ele em tom de voz vibrante. — Vou dar a vocês lanças e flechas feitas de obsidiana e depois todos devem se esconder. — Disse fazendo uma pausa. — Até termos certeza do que está acontecendo, apenas eu estarei aqui a espera dele. — Akinar esticou seu braço direito para o lado e inspirou lentamente. De seu braço pequenos pedaços de pedra vermelha começaram a ser expelidos pela pele, aos poucos os pedaços eram maiores e tomavam seu braço por completo. Os guerreiros olhavam espantados enquanto a transformação acontecia. ",
				],
			},
		],
	},
	{
		pageNumber: 77,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/braço_obsidiana.png",
				intrinsicWidth: 832,
				intrinsicHeight: 661,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Akinar agora tinha todo o braço direito na forma de uma rocha pontuda de cor vermelha escura. Seus dedos não podiam mais ser vistos, restando apenas um pedaço de pedra que crescia ainda mais. De repente, o homem jogou o braço de pedra para trás e o fincou no chão com força, depois jogou seu corpo para trás quebrando a parte de seu ombro que o conectava com a grande pedra vermelha. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/obsidiana_.png",
				intrinsicWidth: 912,
				intrinsicHeight: 710,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"— Desta pedra sairão suas armas. — Afirmou Akinar apontando para que todos se aproximassem. Aos poucos, da pedra fincada no chão pequenos cristais cresceram, finos e pontudos. Uma mulher se aproximou, encostou em um que crescia e o arrancou da base de pedra. Estilhaços vermelhos voaram e a haste se desprendeu, ela segurou e sentiu o peso perfeito da arma, então sorriu para Akinar. O chefe apontou para que ela se esconde-se e assim os outros também fizeram.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/obsidiana_equipamento.png",
				intrinsicWidth: 806,
				intrinsicHeight: 656,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Do braço direito arrancado de Akinar, pedaços de pedra cresciam se assemelhando a um novo braço ainda feito de pedra. Akinar começava a movimentá-lo e logo tinha um braço direito inteiro e completo. As pedras em seu braço, então começaram a se desfazer, dando lugar a uma pele que estava por baixo. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar olhou para os arqueiros que esperavam seu comando.  Estendeu a mão para grande pedra vermelha fincada no chão e dela pequenos filetes saíram, tão finos como uma flecha. Assim como os outros, os arqueiros se aproximaram e pegaram as flechas de obsidiana.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar apontou para um ponto mais alto do assentamento que tinha visão clara da entrada e todos foram na direção. Então ele fez sinal para seu irmão Bukora fosse até ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Meu irmão preciso de sua boa mira agora. — Disse ele olhando nos olhos de Bukora. — Lembra de nosso treinamento? — O irmão fez que sim com cabeça — Então use suas flechas somente em Zarak e você ficará daquele outro lado. Akinar apontou para uma torre de vigia mais ao longe.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Mas de lá não conseguirei acertar Zarak. — Retrucou Bukora"],
			},
			{
				type: "paragraph",
				segments: [
					"— Você conseguirá irmão, é por isso que te dei o melhor arco, feito por mim e imbuído com minha energia. Agora vá. — Disse Akinar apressando o irmão que saiu correndo.",
				],
			},
		],
	},
	{
		pageNumber: 78,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Momentos depois, todos estavam posicionados e a aldeia parecia vazia. Akinar saiu de sua tenda com uma cumbuca de madeira nas mãos. Foi até a grande fogueira apagada no centro e se sentou de modo que pudesse enxergar a entrada. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Sentado ali, enfiou os dedos dentro da cumbuca sentindo a textura grudenta do pigmento que lá estava. Levou as mãos até altura dos olhos para sentir o cheiro terroso da tinta e observou o pigmento vermelho intenso. Passou um pouco em sua testa, e depois começou a reforçar todas as linhas tribais desenhadas em seu corpo. Passou pelos braços, pernas e então chegou ao torso, abaixou os olhos examinando o local até chegar em sua marca de nascença que ficava na altura de sua costela esquerda. Era como uma mancha que começava abaixo de seu peito e ia se dividindo em várias como raízes por sua costela, tinha cor vermelha pálida. Akinar mergulhou os dedos mais uma vez e contornou sua marca com o líquido vermelho. Após terminar, ficou ali sentado, esperando a chegada de Zarak e seus homens.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Passaram-se aproximadamente uma hora até que ele começasse a ouvir o trotar dos cavalos, que com o tempo aumentavam o ritmo e pareciam chegar mais perto. Ele permaneceu ali sentado esperando, não tinha consigo nenhuma lança e nem usava armadura. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar aos poucos via a silhueta dos homens que vinham em direção ao assentamento, na frente um homem usando um tipo de manto feito de tecido escuro liderava. ",
					{
						italic: "Zarak",
					},
					" pensou ele, levantando-se. Caminhou um pouco à frente da fogueira, sem tirar os olhos dos homens que agora alcançavam o portão principal. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Zarak entrou no assentamento seguido pelos demais, e fez sinal para que todos parassem ao avistar Akinar em pé. Ele então pulou de seu cavalo e assim todos os outros também fizeram. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto isso, Akinar os analisava, era como Murin havia dito, não estavam sujos de batalha ou sequer cansados. Não havia sinais de tivessem acabado de tomar uma tribo inteira.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/o que voce quer.png",
				intrinsicWidth: 904,
				intrinsicHeight: 684,
				heightVw: "75vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 79,
		blocks: [
			{
				type: "paragraph",
				segments: ["Zarak deu alguns passos à frente."],
			},
			{
				type: "paragraph",
				segments: [
					"— Vejo que preparou uma festança para minha chegada. —Comentou ironicamente, olhando com riso na face para Akinar",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Por quê? Meu povo nunca lhe fez nada, por que está aqui? — Perguntou Akinar ao homem.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Ora, ora... — Disse Zarak rindo. — Agora você está interessado, será porque alguém lhe contou o que fiz com os Tuk? — Perguntou ele. Akinar não tirava os olhos do homem",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Algo mudou quando cai naquela caverna. Posso sentir tudo a minha volta de um jeito diferente. — Disse Zarak dando as costas para Akinar. — Inclusive, a presença de todos os seus guerreiros escondidos. — Disse ele olhando de relance pelas costas em direção a Akinar. — Você deve estar pensando que tem vantagem numérica sobre mim. — Continuou Zarak virando-se para ele. — Deixe-me te mostrar uma coisa.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Naquele momento, Zarak estendeu o braço na direção de um de seus homens que estava um pouco para trás a sua esquerda.  O homem arregalou os olhos para ele como se tivesse sido atingido por algo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Zarak! O que é isso? —Perguntou ele repentinamente. Um tipo de energia começou a sair do corpo do homem que nesse momento já gritava em desespero. Zarak mantinha o braço esticado e a mão aberta. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/poder_zarak.png",
				intrinsicWidth: 695,
				intrinsicHeight: 694,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"A energia saia em mais quantidade do homem, que agora estava ajoelhado com os olhos fundos e a pele seca. Akinar se mantinha firme.  A energia tomou um tom de roxo escuro maligno e pairava no ar em direção a Zarak. Os homens em volta gritavam para que Zarak parece, aterrorizados. Zarak então fez um movimento forte com braço esticado, como se intensificasse ainda mais e o homem caiu no chão como um saco vazio, a pele totalmente ressecada, os olhos fundos e cadavéricos como se algo tivesse sido sugado de dentro de seu corpo. A energia adentrava a pele da mão de Zarak que tinha no rosto uma feição de prazer.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Neste momento, em pânico total os outros homens de Zarak começaram a subir em seus cavalos para fugir.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Parem agora!! Ou faço o mesmo com todos! — Vociferou Zarak."],
			},
			{
				type: "paragraph",
				segments: [
					"— Por que Zarak? Por que fez isso, ele era um dos nossos... —Murmurou um deles",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— É como eu disse, as coisas mudaram e partir de agora vocês podem me chamar de Grun. — Disse ele com olhar diabólico voltado para Akinar.",
				],
			},
			{
				type: "paragraph",
				segments: ["— O que você quer? — Perguntou Akinar mais uma vez."],
			},
			{
				type: "paragraph",
				segments: [
					"— Sinto como se tivesse renascido completamente — Disse Grun calmamente. — Por agora, só quero testar meus limites! — Berrou Grun, levando os braços a frente. ",
				],
			},
		],
	},
	{
		pageNumber: 80,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/batalha1.png",
				intrinsicWidth: 910,
				intrinsicHeight: 705,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Uma onda roxa de energia emergiu em direção a Akinar que pulou para o lado desviando. A onda atingiu uma tenda atrás dele e a desintegrou completamente. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar se levantou e começou a correr na direção de Grun que já lançava outra onda. Ele desviou mais uma vez e continuou avançando, seu braço direito transformava-se em pedra obsidiana. Outra onda de poder vinha em sua direção, Akinar se jogou para frente rolando e a onda energética passou por cima de sua cabeça, seu braço direito crescia atingindo o tamanho de uma lâmina enorme. Antes que Grun se mexesse novamente, Akinar movimentou violentamente seu braço rasgando o ar na direção do corpo de Grun.  A lâmina de pedra zunia com a velocidade, no último instante, Grun a segurou com as duas mãos e o impacto do movimento fez um baralho estrondoso. Então ele virou o rosto e sorriu para Akinar.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Grun apertou a pedra vermelha e seus dedos a perfuraram. Akinar forçou a lâmina ainda mais, mas não adiantava, estava presa nas mãos do homem. Grun olhou com raiva para Akinar e começou a usar seus poderes para absorver sua energia através da lâmina. \r\nAkinar sentiu algo sendo drenado de seu corpo. Grun fez mais força levantando a lâmina e com isso tirando Akinar do chão. O homem soltou um riso largo enquanto absorvia e segurava o braço de Akinar para alto. \r\n",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Naquele instante, uma lança feita de obsidiana saiu em velocidade e atingiu o peito de Grun fazendo-o gritar. Akinar transformou seu braço esquerdo em pedra e bateu violentamente na conexão com braço direito, o quebrando e caindo no chão ofegante. Ele olhou para direção de onde a lança havia saído e viu seus guerreiros partindo em direção de Grun. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os homens de Grun urraram e uma batalha generalizada começou. Akinar fez sinal para os arqueiros e uma chuva flechas vermelhas veio, atingindo os inimigos. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Grun arrancou a lança presa em seu corpo com raiva, fazendo jorrar sangue de seu peito, olhou para lado e viu dois dos seus homens agonizando no chão com flechas cravadas em seus corpos. Caminhou até eles e os levantou pelo pescoço, então começou a absorver sua energia. Os dois homens gritaram até definhar por completo, então ele os lançou em direção as tropas de Akinar.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Naquele momento, Grun e Akinar se encaravam enquanto a batalha ao redor acontecia. Grun arqueou os braços para trás e Akinar viu uma energia vil roxa se acumulando em volta do corpo do homem, até que Grun jogou os braços para frente e como um canhão uma onda de energia saiu. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/akinar_de_pedra.png",
				intrinsicWidth: 897,
				intrinsicHeight: 710,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Akinar virou seu corpo, pisou no chão formando uma base sólida para receber o impacto. Seu corpo estava quase todo transformado em pedra, seu ombro esquerdo aumentou de tamanho virando escudo. O impacto veio e Akinar gritou com toda sua força para não ser jogado para trás. Grun aumentou a potência de seu poder ainda mais e Akinar sentiu seu corpo sendo arrastado para trás, então fez ainda mais força para conter aquela energia maligna. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Akinar com extrema dificuldade deu um passo para frente empurrando aos poucos aquela energia, quando de repente, viu uma flecha de pedra vermelha passar zunindo na direção de Grun. ",
					{
						italic: "Boruka!",
					},
					" Em um único movimento, Akinar girou seu corpo para lado e empurrou seu ombro escudo para outro, caindo em pé ao lado da rajada de poder de Grun. Akinar novamente começa correr na direção de Grun, que tinha flechas fincadas em seu peito e braço. Naquele instante, pequenos cristais pontiagudos cresciam das flechas no corpo de Grun, estraçalhando sua pele e impedindo seus movimentos.",
				],
			},
		],
	},
	{
		pageNumber: 81,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Akinar corria e novamente transformava seu braço direito em lâmina. Grun mesmo atingido ainda se esforçava para se mexer, até que lançou outra rajada de energia. Akinar rebateu a energia vil com seu ombro esquerdo fazendo-a se dispersar. Agora ele chegava realmente perto de Grun. Outra rajada veio e novamente Akinar dispersou-a. Estava a poucos metros do homem e então trouxe seu braço em forma lâmina para frente. Grun segurou a lâmina impedindo que ela fosse cravada em seu peito. Akinar berrou loucamente fazendo ainda mais força, as mãos de Grun cederam e lâmina perfurou sua barriga atravessando seu corpo. Uma pontada de esperança atingiu Akinar, ele olhou para seus homens que também venciam a batalha. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Grun cuspiu sangue no braço lâmina de Akinar e então levantou lentamente sua cabeça para encará-lo. Um sorriso sombrio sanguinolento formou-se em seu rosto e ele estendeu a mão para um grupo de cerca de quinze guerreiros que lutavam entre si. Grun absorveu todos instantemente, então voltou sua mão na direção de Akinar. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que é você?! — Berrou Akinar com raiva, agarrando o braço de Grun que apontava em sua direção. A lâmina de Akinar começou a crescer encobrindo o corpo de Grun, engolindo seu braço inteiro impedindo que ele soltasse seu poder. Grun berrou focalizando ainda mais energia, Akinar também intensificou sua força para conter aquilo. A pedra crescia e chegava ao ombro de Grun, mas ele ainda gritava. Akinar sentiu uma energia absurda se aglomerando, ele fez ainda mais força e seu braço que cresceu tomando quase todo corpo de Grun. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Uma luz surgiu de dentro do contato que unia o braço dos dois homens. Akinar percebeu que não aguentava mais conter aquele poder. É muita energia! Sua mente berrou. A primeira rachadura na obsidiana que unia os dois apareceu. Akinar olhou na direção em que Bukora estava, e então pensou também no pequeno Yacamim e em Uthane. Um barulho estrondoso se sucedeu no formar de uma outra rachadura enorme. Então, uma luz intensa imergiu ao céu, Akinar sentiu um calor absurdo emanar da obsidiana, firmou seus pés no chão e fez ainda mais força. Preciso conter esse poder aqui e agora!! Sua mente gritou. Foi quando inúmeras rachaduras apareceram na obsidiana que segurava Grun e uma imensa onda de energia emergiu.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap9/explosao1.png",
				intrinsicWidth: 914,
				intrinsicHeight: 725,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 4,
			},
			{
				type: "image",
				src: "/img/cap9/explosao2.png",
				intrinsicWidth: 731,
				intrinsicHeight: 730,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 82,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"O sol raiava no horizonte quando o pequeno barco rudimentar apontou para o mar. A enorme vela já estava no ar e a praia silenciosa começava a se distanciar. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim conversava com o velho barqueiro Tori, pai de Rakori, era um homem de cabelo branco e rosto enrugado, explicava-lhe que desta vez precisariam fazer uma rota diferente da antiga. Outrora, quando o comércio com o outro continente ainda existia e o assentamento ia de vento em popa, todas as expedições com mercadorias e especiarias eram guiadas por Tori, que conhecia todas as rotas possíveis. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim falava sobre constelações e de como sentia que o que procuravam estava mais abaixo no continente. O velho barqueiro olhou para ele e assentiu sem se preocupar.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/partiuOGrupo.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 83,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"O grande Mot'ar atravessava a passos largos o posto Aimor até chegar na tenda principal, onde logo adentrou. Lá dentro, uma figura vestindo um manto de couro amarronzado observava de frente a fogueira. Mot'ar ao entrar logo se ajoelhou.\t",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Torokar se aproxima, mestre. — Disse ele, em tom de obediência. A figura subiu seu pescoço deixando que as chamas da fogueira revelassem algumas cicatrizes em seu rosto, das quais um brilho roxo vil emergia.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Está na hora de partimos então. Traga-me um pouco de alimento. — Ordenou."],
			},
			{
				type: "paragraph",
				segments: [
					"Mot'ar assentiu e saiu da tenda. Instantes depois voltou trazendo dois homens e uma mulher consigo. Os três pararam no meio da tenda sem esboçar reação. O homem encapuzado esticou os braços e abriu as mãos na direção dos dois homens, que começaram a tremer seus corpos, seus olhos se arregalaram, suas mãos se agarraram ao próprio o rosto como se sua pele queimasse, foi quando uma energia se esvaiu de seus corpos em direção aos braços do homem encapuzado. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/energiaDrenada.png",
				intrinsicWidth: 421,
				intrinsicHeight: 725,
				heightVw: "160vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: ["Ouviu-se um baralho surdo de dois corpos caindo no chão."],
			},
			{
				type: "paragraph",
				segments: [
					"— Que prazer intenso! — Afirmou ele, enquanto sua face se deliciava. — Agora é sua vez Mot'ar. — Completou, logo fazendo o mesmo com a mulher que ainda estava parada em transe. Desta vez canalizou a energia absorvida em direção de Mot'ar. O homem berrou em contato com a energia e então caiu de joelhos, seus músculos tencionaram em reação e ele deu um soco no chão ferozmente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Sinta um pouco do poder que conquistei. Curve-se para Grun seu mestre! — Berrou Grun e Mot'ar se ajoelhou bufando. Grun o observou com satisfação.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/Grun e Motar.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 84,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Yacamim e seu grupo fizeram uma viagem tranquila e rápida descendo a costa do continente que durou mais ou menos um dia de navegação. Seguindo as orientações de Yacamim, Tori atracou na Planície dos Povos um pouco abaixo de onde se localizava a tribo Yahj. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Yacamim, Dara e Rakori ajudaram a montar o acampamento da tripulação, que ficaria ali esperando por eles por alguns dias, depois partiram continente adentro. Enquanto estivessem fora, os homens aproveitariam para pegar animais e especiarias da região, como faziam há muito tempo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Dara e Rakori seguiram atrás de Yacamim, penetrando cada vez mais no continente, passaram por florestas fechadas, algumas estradas, e por uma aldeia abandonada. Continuaram caminhando até o fim daquele dia.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Ninguém havia falado nada durante todo aquele tempo de caminhada, nem mesmo quando passaram pela aldeia bizarramente deserta. Os três estavam tensos e apreensivos por andar naquelas terras. Montaram acampamento perto de uma clareira e decidiram se alimentar a luz da lua, pois uma fogueira chamaria atenção demais. Depois de comer, fariam revezamento na vigia e Rakori pegou o primeiro turno.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 85,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/clareira- Torokar.png",
				intrinsicWidth: 936,
				intrinsicHeight: 936,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Grun entrava na clareira a cavalo, ao seu lado Mot’ar caminhava imponente. Os dois eram seguidos por demais guerreiros que moravam no posto Aimor. Havia muitas pessoas ali e Grun olhava para tudo aquilo maravilhado, imaginando quantos mais havia em cada uma das aldeias.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Os irmãos se aproximam, mestre. — Avisou Mot’ar, apontando para duas pessoas que vinham cavalgando da floresta à direita deles.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Ah! — Afirmou Grun. — Esses dois decidiram aparecer. —  Completou com descaso. Os dois pararam ali onde estavam, ainda longe do centro da clareira para esperar os dois visitantes que chegavam.\t",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/15.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 4,
			},
			{
				type: "image",
				src: "/img/cap10/16.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 86,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"— Qual vai ser o pagamento? — Cortou Tokin o irmão, antes que Grun respondesse a pergunta anterior.",
				],
			},
			{
				type: "paragraph",
				segments: ["Grun o encarou."],
			},
			{
				type: "paragraph",
				segments: [
					"— Só fiquem por perto caso algo aconteça. Vocês serão pagos com o de sempre, me ajudem a tomar o poder sobre as aldeias e então podem saqueá-las por completo. — Disse Grun. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Ninguém sequer olhou para nós, ou nos percebeu. — Comentou Onuka, a irmã. — Estão todos sob seu controle, eu imagino. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Isso veremos logo. — Disse Grun. — Agora saiam daqui. — Afirmou ele apontando para trás. Onuka e Tokin avançaram passando por ele, saindo da clareira.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Grun se voltou para o centro da clareira e manteve o olhar fixo, imaginando como queria que seu poder funcionasse naqueles dois, mas desde o dia em os achou nunca conseguiu. ",
					{
						italic:
							"Com certeza os dois foram severamente afetados pela energia da batalha contra Akinar e por isso não consigo subjulgá-los",
					},
					", imaginou ele.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Mestre. — Chamou Mot’ar interrompendo os pensamentos de Grun. — Parece que todas as tribos já chegaram. Está na hora de se anunciar. — Completou o gigante.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Grun olhou para ele e então se voltou para clareira que estava agitada e cheia de pessoas, desceu do cavalo e foi caminhando até onde seria o centro. Estendeu os braços na altura dos ombros e abriu as mãos, então fechou os olhos se concentrando.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Meus súditos! — Gritou ele. — Aproximem-se e saúdem  seu mestre! — Vociferou e toda clareira parou naquele momento, todos os barulhos e passos se cessaram em um silêncio imediato. As pessoas foram se aproximando de onde ele estava e aos poucos se ajoelhando.  Grun esboçou um sorriso maléfico. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/ajoelhem-se.png",
				intrinsicWidth: 720,
				intrinsicHeight: 720,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 87,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"O dia amanheceu ensolarado e grupo acordou com o pé na estrada. Seguiram por um pequeno riacho onde beberam água e se lavaram. Um pouco mais a frente, Yacamim avistou uma enorme clareira e ao que parecia muitas pessoas estavam lá, inclusive a fonte de poder que ele pressentia. Yacamim sentia estar cada vez mais perto da energia de um de seus irmãos.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os três chegaram a uma clareira enorme, que de tão vasta cabia um exército inteiro. Estava abarrotada de pessoas de vários tipos. Tendas espalhadas por todos os lugares, cada qual com seu símbolo e cor específica, homens e mulheres trançavam daqui para lá e de lá ca. Yacamim fez sinal para se mantivessem escondidos e assim foram se esgueirando pelas laterais o mais próximo possível do que parecia ser a área central do local. Havia vários círculos no chão feitos com gravetos, indicando que algo aconteceria ali.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Os três estavam muito próximos e de baixo de uma planta com folhas enormes. Yacamim tentava entender o que estava acontecendo e porque a energia que sentia vinha dali.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Ninguém se mexe ou eu corto a garganta dele. — Dara e Rakori se moveram assustados. Um homem estava agachado junto deles e segurava uma pequena adaga com uma ponta de pedra bem na garganta de Yacamim.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Quem são vocês? Por que espreitam nosso povo? —Perguntou o desconhecido com a respiração agitada.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Nós não viemos causar mal, por favor largue nosso amigo. — Disse Dara com a voz mais calma que conseguiu.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Vocês são os culpados por tudo isso que tem acontecido?  Respondam agora ou eu mato ele! — Gritou o homem sem se importar em chamar atenção, embora ninguém tenha notado a presença dos quatro.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Do que é você está falando? — Perguntou Rakori."],
			},
			{
				type: "paragraph",
				segments: [
					"— Nossa aldeia foi infectada por alguma coisa, as pessoas começaram a agir de forma estranha dias atrás e hoje todos neste local estão fora de si.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O homem desconhecido ainda segurava a faca na gargata de Yacamim, que simplesmente o ignorava pensativo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— O que é que esta acontecendo !? — Perguntou Rakori subitamente,  e todos olharam para a clareira. Todas as pessoas estavam ajoelhadas voltadas para o centro, onde havia um homem enorme segurando um clava de pedra e ao seu lado uma figura encapuzada que estendia os braços em direção as pessoas. Foi quando ouviram-se gritos vindos de outro ponto da clareira.",
				],
			},
			{
				type: "divider",
			},
		],
	},
	{
		pageNumber: 88,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Grun acabava de abaixar as mãos quando percebeu que um grupo de guerreiros invadia a clareira. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/acabe com eles.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/porOrri.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Mot’ar virou na direção do grupo que vinha e avançou como um touro segurando sua clava de pedra. Sem se importar, Mot’ar pisoteou as pessoas que estavam em seu caminho e urrou loucamente.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O grupo a cavalo, ao ver o mostruoso homem vindo em sua direção se dispersou na clareira e então um assobio longo ecoou no ar. De repente, dois outros grupos de guerreiros saem das laterais da floresta, ambos carregando lanças e boleadeiras, uma espécia de corda grande com pedras pesadas na ponta. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/boleadeira.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Mot’ar ao notar o surgimento de mais inimigos, parou para observá-los. Naquele instante, três vinham pela frente em sua direção, então ele levanta sua clava para assertá-los. Antes que Mot’ar completasse o golpe, um homem atrás dele arremessa sua boleadeira no pescoço do gigante. A corda engatilha no pescoço com pressão e o homem que a arremessou imediamente  tensiona a corda fazendo força contrária, puxando  Mot’ar para trás.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Neste momento, lanças são arremessadas por outros guerreiros e cravadas direto no peito de Mot’ar, que ruge de dor. O gigante levanta sua clava e com único movimento quebra as lanças presas em seu corpo, ele então se vira para trás e agarra a corda que traciona seu pescoço. Imedimentate, Mot’ar gira seu corpo, fazendo o homem que segurava a corda do outro lado ser arremesado ao ar. Sem parar, ele continua girando, agora arrastando o homem pelo chão violentamente até acertar dois guerreiros, derrubando-os de seus cavalos.",
				],
			},
		],
	},
	{
		pageNumber: 89,
		blocks: [
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/akin.png",
				intrinsicWidth: 763,
				intrinsicHeight: 749,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Gritou um jovem guerreiro, que vinha cavalgando segurando uma lança. Mot’ar agora se aproximava dos homens caídos e daquele que tinha prendido seu pescoço. O jovem ficou em pé no cavalo, pulou para ganhar amplitude de movimento e arremeçou sua lança na direção do gigante que chegava perto de seus companheiros. A ponta da lança cravou nas costas de Mot’ar, mas este não parou, continuou caminhando ignorando a presença do jovem. Ele se abaixou e pegou o homem caído insconsciente pelo pescoço, se voltou para o jovem que vinha e jogou o homem com toda sua força em sua direção.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/motarArremessa.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 4,
			},
			{
				type: "image",
				src: "/img/cap10/kizunoArremessado.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"O corpo do homem arremessado acertou em cheio o jovem e os dois cairam em cima de uma tenda destruindo-a por completo.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto isso, Grun observava sua criatura lutar rodeado por pessoas ainda ajoelhadas, que sequer percebiam o que estava acontecendo. ",
					{
						italic: "Preciso de mais poder, só assim minhas criaturas serão realmente fortes,",
					},
					" pensou ele. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Neste instante, uma única flecha saiu da escuridão da mata subindo aos ares na direção de Grun, que ficou parado observando-a chegar. A flecha passou por ele assertando um homem barbado que estava ajoelhado há alguns metros.",
				],
			},
			{
				type: "paragraph",
				segments: ["Grun sorriu."],
			},
			{
				type: "paragraph",
				segments: [
					"— Que pontaria horrível! — Gritou ele para o nada, aguardando que mais flechas viessem.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/fakuriii.png",
				intrinsicWidth: 810,
				intrinsicHeight: 891,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 90,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Grun sentiu algo perfurar suas costas e então uma lança atravessou seu corpo varando seu peito. Ele cai de joelhoes, então vira o rosto e vê um homem com uma flecha no peito em pé. O homem ranca a flecha de si mesmo e enfia bem no pescoço de Grun que cospe sangue. O homem então com a sola do pé chuta a cabeça de Grun, que sai rolando no chão. Então, preocupado, o homem tira seus olhos de Grun e se volta para a batalha.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/fakuriGrita.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/qualEhSeunome.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "90vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Perguntou Grun e o homem se virou para ele incrédulo. Grun exibia um sorriso aterrorizante em sua boca ensanguentada.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Meu nome é Fakuri. Como é possível você ainda estar vivo? — Perguntou ele mal conseguindo falar.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/respeito.png",
				intrinsicWidth: 725,
				intrinsicHeight: 675,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Fakuri deu um passo para trás ao notar os olhos macabros de Grun. De repente, o chão abaixo de Grun começou a apodrecer, a grama da clareira ficou cinza e com aspecto podre. Fakuri da mais passos para trás e tropeçou caindo de sentado.\r\n        ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Fique tranquilo, Fakuri. — Disse Grun se levantando — Um indivíduo inteligente como você pode ser útil para mim — Completou ele pensativo e Fakuri se estremeceu ao ver Grun se regenarando de seus ferimentos instantaneamente — Seu plano de estar levemente infectado para que eu não o percebesse sua presença na multidão e então utilizar a dor aguda da flecha para acordar do transe, foi interassante. Você dara um ótimo lacaio. — Completou ele com olhar maléfico ainda focado em Fakuri.",
				],
			},
		],
	},
	{
		pageNumber: 91,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Os aldeões mais próximos ajoelhados começaram a cair no chão com os corpos completamente secos e cadavéricos.",
				],
			},
			{
				type: "paragraph",
				segments: ["Fakuri aterrorizou-se"],
			},
			{
				type: "paragraph",
				segments: [
					"Grun estava completamente de pé, emanava tanta energia que a flecha e a lança cravadas em seu corpo se dissolveram e seus ferimentos cicratrizaram completamente. Então ele caminhou até Fakuri, se abaixou e colocou a mão em seu rosto tampando sua boca. Seus olhos brilhavam com um roxo vil. Fakuri sem conseguir se mexer entrou em pânico e começou a se debater. Grun então sugou mais energia do ambiente e segurou o homem ainda mais firme. As feições de Fakuri se relaxam assim como seu corpo e ele cai no chão. ",
				],
			},
			{
				type: "paragraph",
				segments: ["Grun então se aproxima do ouvido de Fakuri."],
			},
			{
				type: "paragraph",
				segments: [
					"— Você quase me pegou. — Disse ele surrando. — Me custou muita energia e muitos corpos para me recuperar, por isso agora você será meu escravo, assim como Mot’ar e todos os outros. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Grun se levanta deixando Fakuri caído inconsciente e se volta para a batalha de Mot’ar. O monstruoso homem estava ferido, tinha lanças cravadas em suas costas e estava completamente ensanguentado. Não restavam mais guerreiros, Mot’ar os tinha derrotado, com exceção de um jovem, que estava no meio dos escombros de uma tenda chorando com um homem em seu colo. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Ande com isso Mot’ar! — Gritou Grun de longe, o gigante gruniu e começou a ir na direção do jovem. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Mot’ar então chegou perto o suficiente para desferir um golpe de sua clava, levantou a arma a cima de sua cabeça e a deixou despencar. No último segundo, o garoto salta para trás segurando seu companheiro em seus braços, Grun se surpreende com a velocidade. Mot’ar levanta sua clava novamente, mas antes que pudesse terminar o golpe, o jovem guerreiro larga seu companheiro no chão e avança para perto de Mot’ar desferindo um soco violento em seu estômago.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/akin socao.png",
				intrinsicWidth: 923,
				intrinsicHeight: 716,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
		],
	},
	{
		pageNumber: 92,
		blocks: [
			{
				type: "paragraph",
				segments: [
					"Mot’ar é lançado à distância pelo soco, indo parar a alguns metros do jovem. Enquanto isso, Grun observava com olhar fixo no braço do garoto, que havia mudado sua composição.",
					{
						italic: " Um braço de pedra!",
					},
					" Pensou ele intrigado.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"O jovem então se volta para Grun, pega uma lança no chão, projeta seu corpo para trás e a arremessa com toda sua força. A lança rasga o ar em velocidade absurda. Grun se vira formando uma base com os pés e estica sua mão para frente, uma energia roxa vil sai de sua mão e desintegra a lança antes que ela o atingesse. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/Grun para lanca.png",
				intrinsicWidth: 784,
				intrinsicHeight: 784,
				heightVw: "100vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Enquanto isso, o jovem já vinha correndo em sua direção, Grun solta uma rajada de energia densa, mas o garoto desvia e continua correndo. ",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/ergam-se.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"Grun faz os aldeões ajoelhados sobre seu comando se levantarem e irem correndo como zumbis de encontro ao garoto. Os aldeões  começam a se jogar loucamente em cima e na frente do jovem, o fazendo-o quase parar. Grun observa os olhos do garoto enquanto este tentava se livrar dos aldeões se debatendo e acertando golpes. ",
					{
						italic: "Está fora de si, ",
					},
					"pensou Grun e então começa a absorver a energia do garoto e de suas criaturas.",
				],
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "image",
				src: "/img/cap10/grunDrena.png",
				intrinsicWidth: 2000,
				intrinsicHeight: 1600,
				heightVw: "80vw",
			},
			{
				type: "spacer",
				count: 2,
			},
			{
				type: "paragraph",
				segments: [
					"O garoto continuava se debatendo, tentando chegar até Grun, mas a quantidade de aldeões em cima dele era demais. Grun continuava drenando sua energia e das demais criaturas em volta, até que o jovem cai no chão ajoelhado.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"Grun esboça um sorriso maléfico no rosto ao perceber que o garoto estava sedendo ao seu poder e mal podia esperar para drenar aquela energia, foi quando o jovem soltou um grunido e mesmo com vários aldeões o segurando se levantou. Grun observou o momento ainda mais animado. O garoto então se livra dos aldeões que o seguram e em velocidade absurda se aproxima de Grun e desfere um soco violento que acerta bem na barriga o lançando para muito longe. Grun sai rolando até que bate em uma árvore distante. Ele se levanta com dificuldade e percebe que novamente o garoto vem em sua direção em velocidade para mais golpe. Grun estende as mãos para frente e arma uma base sólida para aguentar o impacto.",
				],
			},
		],
	},
	{
		pageNumber: 93,
		blocks: [
			{
				type: "paragraph",
				segments: ["— Vamos ver dessa vez! — Berrou Grun loucamente."],
			},
			{
				type: "paragraph",
				segments: [
					"O garoto apareceu quase que instantaneamente a sua frente, desta vez armando um chute lateral. Grun estende a mão e segura a perna do garoto, um impacto estrondoso acontece e uma onda sónica emerge do golpe. Grun puxa a perna do garoto e com a outra mão agarra seu rosto, então começa a drenar sua energia vital.",
				],
			},
			{
				type: "paragraph",
				segments: ["— Você é meu! — Berra ele sobrepujando o garoto."],
			},
			{
				type: "paragraph",
				segments: [
					"Alguns instantes se passam e o jovem cai ajoelhado fora de si, Grun então percebe que o garoto não esboçava mais reação e para de drenar sua energia. Ele se ajoelha e toca no braço do garoto que ainda  estava transformado em pedra. O braço emanava uma energia intensa, ao tocá-lo Grun tem um estalo. ",
					{
						italic: "Está energia é a mesma energia de Akinar!",
					},
					" sua mente gritou. Havia batalhado contra ele  anos atrás como aquele garoto do poderia emanar o mesmo poder, ele se perguntou intrigado. Então Grun se levanta e observa ao redor, um silêncio se faz na clareira em meio ao ambiente caótico. ",
				],
			},
			{
				type: "paragraph",
				segments: ["Um trotar leve de cavalos ecooa na clareira, Onuka e Tokin se aproximavam."],
			},
			{
				type: "paragraph",
				segments: ["— Que bagunça é essa!? — Comentou  Onuka em voz alta."],
			},
			{
				type: "paragraph",
				segments: [
					"— Chegamos na hora certa. —Alfineta Tokin com sarcasmo. Grun olha para eles com olhar sério, então aponta para o garoto no chão.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Estão vendo esse garoto? — Perguntou Grun, os dois irmãos assentiram com suas cabeças — Ele e mais alguns guerreiros armaram contra mim. ",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Como? Ninguém nunca se libertou do seu controle! — Falou Onuka a irmã. Grun então puxou o garoto e o jogou em sua carcunda.",
				],
			},
			{
				type: "paragraph",
				segments: [
					"— Por isso vamos levar este  aqui para Aimor, de alguma forma meu poder agiu diferente nele. — Disse Grun. — Os outros foram mortos por Mot’ar. ",
				],
			},
			{
				type: "paragraph",
				segments: ["— Não estou vendo ele, onde está? — Perguntou Tokin."],
			},
			{
				type: "paragraph",
				segments: [
					"— Mot’ar matou todos e no final este aqui acabou com ele com apenas um soco. — Disse Grun apontando para o jovem inconsciente. — Agora vamos. — Terminou ele jogando o garoto em um cavalo e o montando.",
				],
			},
			{
				type: "paragraph",
				segments: ["— E quanto a estes aldeões infectados, vai deixá-los aqui? — Perguntou Onuka."],
			},
			{
				type: "paragraph",
				segments: [
					"— Ah! É mesmo. — Respondeu Grun tranquilamente, e então estendeu sua mão para os aldeões. Aos poucos cada um ali foi se levantando. Onuka e Tokin se entreolharam enquanto a horda de aldeões se mexia. Grun observou Fakuri se erguer e se posicionar para seguí-lo, esboçou um sorriso diabólico no rosto e virou seu cavalo em direção a saída da clareira. Sem dizer nada, Onuka e Tokin o seguiram.",
				],
			},
		],
	},
];
