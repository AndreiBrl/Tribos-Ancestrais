/* =========================================================
   TRIBOS ANCESTRAIS — Protótipo 1
   HTML/CSS/JS puro. Demo com as páginas 0 a 4.
   ========================================================= */

const TOTAL_PAGES = 93;
const DEMO_LAST_PAGE = 4;
const STORAGE_KEY = "ta-proto1-page";
const IMG = "../../public/img/";

const CHAPTERS = [
	{ n: "I", title: "O Eco do Irmão Perdido", start: 1, end: 6 },
	{ n: "II", title: "A Dor que Desperta", start: 7, end: 12 },
	{ n: "III", title: "Um Banquete para Porcos", start: 13, end: 24 },
	{ n: "IV", title: "O Caminho Revelado", start: 25, end: 31 },
	{ n: "V", title: "A Cabana na Clareira", start: 32, end: 40 },
	{ n: "VI", title: "Sangue e Sacrifício", start: 41, end: 47 },
	{ n: "VII", title: "Xa’ru Xaruna", start: 48, end: 56 },
	{ n: "VIII", title: "Um Sonho Impossível", start: 57, end: 73 },
	{ n: "IX", title: "Obsidiana Vermelha", start: 74, end: 81 },
	{ n: "X", title: "Torokar", start: 82, end: 93 },
	{ n: "XI", title: "O Verdadeiro Propósito", start: null, end: null, locked: true },
];

/* Blocos: ["p", texto] | ["img", arquivo, alt] | ["break"] | ["cover"] */
const PAGES = {
	0: [["cover"]],
	1: [
		["img", "cap1/paku_1.png", "Paku e Abak cavalgando"],
		["p", "Perguntou Paku."],
		["p", "Abak lançou-lhe um olhar seco, esporou o cavalo, afastando-se. Paku o acompanhou."],
		["p", "— O que foi agora, Paku? — Rebateu, com a voz baixa abafada."],
		["p", "— Antigamente não era assim, Fakuri errou em trazê-lo. — Os dois trotavam em seus cavalos a frente do grupo em uma estrada tortuosa cercada por densa floresta. Naquele momento, o sol afinava-se no horizonte e seus raios se esparramavam cedendo ao crepúsculo que adentrava a floresta."],
		["p", "Um silvo leve e contínuo rasgou o ar, chegando ao ouvido dos dois. Lá de trás, Fakuri assobiava, sinal de que era hora de montar acampamento."],
		["p", "— Esqueça o passado Paku. — Cortou Abak, puxando as rédeas até o cavalo parar. — Respeite a decisão de nosso líder. — Completou ele. Paku franziu o cenho irreverente e puxou o cavalo para dar meia volta."],
		["p", "O primeiro dia de cavalgada terminava."],
	],
	2: [
		["p", "Enquanto isso, atrás deles estavam Fakuri, Kizuno e Akin. Fakuri imponente em seu cavalo marrom ornado com couros tingidos. Na lateral direita, o cavalo ostentava a marca da tribo em vermelho sangue, mostrando sua posição de líder tribal. A marca tingida no couro era como um círculo cortado por traços em suas bordas."],
		["p", "Ao lado do chefe vinha Kizuno, mestre de guerra e conselheiro de Fakuri. No mesmo cavalo, agarrado a ele, estava seu discípulo, um jovem de pele morena clara, cabelo curto mal raspado, e que usava trajes tribais de couro."],
		["p", "Fakuri puxou as rédeas de seu cavalo e fez sinal com a mão para que Kizuno também o fizesse."],
		["p", "— Kizuno, acompanhe-me na ronda. — Disse Fakuri."],
		["p", "Kizuno olha para o chefe hesitante e então se vira para o jovem atrás dele."],
		["p", "— Akin. — Disse ele em tom leve. — Desça e monte acampamento junto de Abak e Paku."],
		["p", "O garoto olhou nos olhos do homem entendendo do que se tratava, puxou sua lança amarrada na lateral do cavalo e pulou. Kizuno pôs o cavalo a trotar e partiu atrás do chefe, que já se adiantava."],
		["p", "Abak e Paku voltavam e à medida que se aproximavam do garoto diminuiam a velocidade de seus cavalos. Ambos desmontaram e levaram seus animais para perto da margem da estrada, onde iriam amarrá-los. Akin os observava atento, até que Abak se aproximou."],
	],
	3: [
		["p", "— Prepare a caça Akin, Paku e eu faremos a ronda a pé e traremos um pouco de madeira."],
		["p", "Akin assentiu com a cabeça. Abak e Paku adentraram a lateral da estrada, floresta adentro. O garoto olhou para os alforges de couro dos cavalos, onde provavelmente estariam as lebres que comeriam, andou até eles se aproximando da floresta. Parou ali e fitou a densidade da mata, já não escutava os barulhos dos passos e nem dos cavalos ao longe, estava sozinho."],
		["break"],
		["p", "Enquanto a lua tomava seu lugar na escuridão banhando os seres com sua luz, Fakuri cavalgava em silêncio ao lado de Kizuno. Era um homem robusto de pele preta e cabeça raspada. Aparentava ter cinquenta anos e usava roupas de couro trabalhado pelo corpo. Fakuri havia passado por mais batalhas que qualquer um da aldeia e carregava na face a dureza de anos de liderança."],
		["p", "Kizuno tinha quase a mesma idade, na verdade, era um pouco mais novo, tinha a pele preta e também usava couros por seu corpo."],
	],
	4: [
		["p", "Conhecia Fakuri como amigo há muitos anos, desde muito antes dele ser chefe da tribo, eram como irmãos."],
		["p", "— Me preocupo com Akin. — Lançou Kizuno, rompendo o silêncio."],
		["img", "cap1/kizuno_fakuri.png", "Kizuno e Fakuri sob o luar"],
		["p", "Fakuri encarava o luar com olhar sereno, como se momentos como aquele fossem raros."],
		["p", "— Como foi sua primeira viagem para o banquete de Torokar, meu amigo? — Perguntou o chefe, voltando seu olhar para Kizuno."],
		["p", "— Fui desafiado. — Respondeu Kizuno secamente"],
		["p", "— E o que você fez? — Devolveu Fakuri."],
		["p", "— Enfrentei o guerreiro que me desafiava e garanti meu lugar na guarda do chefe. — Respondeu Kizuno, agora com a voz mais aliviada."],
		["p", "— Pois então, permita que o garoto mostre seu valor."],
		["p", "Kizuno fez uma pausa breve, respirou, sabia que ele tinha razão."],
		["p", "— Se te preocupa. — Fakuri acrescentou — Ordenei Paku a não se envolver. Abak dará apenas um susto no garoto. — Disse o chefe, enquanto voltava seu olhar pensativo ao luar."],
		["break"],
	],
};

/* ---------------- Estado ---------------- */
let page = clamp(Number(localStorage.getItem(STORAGE_KEY) ?? 0), 0, DEMO_LAST_PAGE);
let lastScreen = "inicio";
let currentScreen = "inicio";

/* ---------------- Utilidades ---------------- */
function clamp(v, min, max) {
	return Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : min;
}

function chapterOf(p) {
	return CHAPTERS.find((c) => !c.locked && p >= c.start && p <= c.end) || null;
}

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let toastTimer;
function toast(msg) {
	const el = $("#toast");
	el.textContent = msg;
	el.classList.add("is-visible");
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
}

/* ---------------- Roteamento ---------------- */
function go(screen, { push = true } = {}) {
	if (!document.querySelector(`[data-screen="${screen}"]`)) screen = "inicio";
	if (screen !== currentScreen) lastScreen = currentScreen;
	currentScreen = screen;

	$$(".screen").forEach((s) => s.classList.toggle("is-active", s.dataset.screen === screen));
	if (push && location.hash !== `#${screen}`) history.pushState(null, "", `#${screen}`);

	if (screen === "inicio") refreshHome();
	if (screen === "capitulos") renderChapters();
	if (screen === "ler") renderPage(0);
	if (screen === "mapa") resetMap();

	window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("popstate", () => go(location.hash.slice(1) || "inicio", { push: false }));

document.addEventListener("click", (e) => {
	const goBtn = e.target.closest("[data-go]");
	if (goBtn) return go(goBtn.dataset.go);

	if (e.target.closest("[data-back]")) return go(lastScreen === "mapa" ? "inicio" : lastScreen);

	const turnBtn = e.target.closest("[data-turn]");
	if (turnBtn) return turn(Number(turnBtn.dataset.turn));

	const copyBtn = e.target.closest("[data-copy]");
	if (copyBtn) {
		navigator.clipboard?.writeText(copyBtn.dataset.copy).catch(() => {});
		return toast(copyBtn.dataset.copyMsg || "Copiado!");
	}

	if (e.target.closest("[data-close-modal]")) return closeJump();

	const action = e.target.closest("[data-action]")?.dataset.action;
	if (action === "start") {
		page = 0;
		save();
		go("ler");
	}
	if (action === "continue") go("ler");
});

/* ---------------- Início ---------------- */
function refreshHome() {
	const btn = $("#btn-continue");
	const hasProgress = localStorage.getItem(STORAGE_KEY) !== null && page > 0;
	btn.hidden = !hasProgress;
	const ch = chapterOf(page);
	$("#continue-meta").textContent = `${ch ? `Cap. ${ch.n} · ` : ""}Pág. ${page} / ${TOTAL_PAGES}`;
}

/* ---------------- Capítulos ---------------- */
function renderChapters() {
	const grid = $("#card-grid");
	const pct = Math.round((page / TOTAL_PAGES) * 100);
	$("#summary-text").textContent = `Página ${page} de ${TOTAL_PAGES} · ${pct}%`;
	requestAnimationFrame(() => ($("#summary-bar").style.width = `${pct}%`));

	grid.innerHTML = CHAPTERS.map((c, i) => {
		const corners =
			'<span class="card-corner c-tl"></span><span class="card-corner c-tr"></span><span class="card-corner c-bl"></span><span class="card-corner c-br"></span>';

		if (c.locked) {
			return `<button class="ch-card is-locked" type="button" style="animation-delay:${i * 45}ms" data-locked>
				${corners}
				<span class="ch-roman">${c.n}</span>
				<svg class="ch-lock"><use href="#i-lock"/></svg>
				<h3 class="ch-title">${c.title}</h3>
				<span class="ch-pages">Em breve</span>
			</button>`;
		}

		const size = c.end - c.start + 1;
		const read = clamp(page - c.start + 1, 0, size);
		const done = page > c.end;
		const current = page >= c.start && page <= c.end;
		const fill = Math.round((read / size) * 100);

		const state = done
			? '<span class="ch-state state-done"><svg><use href="#i-check"/></svg>Lido</span>'
			: current
				? '<span class="ch-state state-current">Lendo</span>'
				: "";

		return `<button class="ch-card" type="button" style="animation-delay:${i * 45}ms" data-start="${c.start}">
			${corners}
			${state}
			<span class="ch-roman">${c.n}</span>
			<h3 class="ch-title">${c.title}</h3>
			<span class="ch-pages">Págs. ${c.start}–${c.end}</span>
			<div class="xp-bar"><i style="width:${fill}%"></i></div>
		</button>`;
	}).join("");
}

$("#card-grid").addEventListener("click", (e) => {
	const card = e.target.closest(".ch-card");
	if (!card) return;
	if (card.hasAttribute("data-locked")) return toast("Capítulo XI em breve!");
	const start = Number(card.dataset.start);
	if (start > DEMO_LAST_PAGE) return toast(`Demo: só o Cap. I está disponível`);
	page = start;
	save();
	go("ler");
});

/* ---------------- Leitura ---------------- */
function save() {
	localStorage.setItem(STORAGE_KEY, String(page));
}

function blockHTML(block, isOpening, idx) {
	const [type, a, b] = block;
	if (type === "p") {
		const isDialog = a.trim().startsWith("—");
		const cls = [isDialog ? "dialog" : "", isOpening && idx === firstParagraphIndex ? "dropcap" : ""]
			.filter(Boolean)
			.join(" ");
		return `<p${cls ? ` class="${cls}"` : ""}>${a}</p>`;
	}
	if (type === "img") {
		return `<figure class="page-art">
			<span class="card-corner c-tl"></span><span class="card-corner c-tr"></span>
			<span class="card-corner c-bl"></span><span class="card-corner c-br"></span>
			<img src="${IMG}${a}" alt="${b}" loading="lazy" />
		</figure>`;
	}
	if (type === "break") return '<div class="scene-break" aria-hidden="true"><span></span><span></span><span></span></div>';
	if (type === "cover") {
		return `<div class="cover-page">
			<img src="${IMG}tituloWordTribo.png" alt="Tribos Ancestrais" />
			<p class="cover-credit"><small>Escrito por</small>Andrei Barbuto<small>2024</small></p>
			<p class="cover-hint">Toque na borda direita ou deslize para começar →</p>
		</div>`;
	}
	return "";
}

let firstParagraphIndex = -1;

function renderPage(direction) {
	const sheet = $("#page-sheet");
	const blocks = PAGES[page] || [];
	const ch = chapterOf(page);
	const isOpening = ch && ch.start === page;
	firstParagraphIndex = blocks.findIndex((b) => b[0] === "p");

	let html = "";
	if (isOpening) {
		html += `<header class="chapter-opening">
			<span class="chapter-opening-kicker">Capítulo ${ch.n}</span>
			<h2>${ch.title}</h2>
		</header>`;
	}
	html += `<div class="page-text">${blocks.map((b, i) => blockHTML(b, isOpening, i)).join("")}</div>`;

	if (page === DEMO_LAST_PAGE) {
		html += `<div class="end-demo"><b>Fim da demonstração</b>No projeto final a jornada continua até a página ${TOTAL_PAGES}.</div>`;
	}

	sheet.innerHTML = html;

	sheet.classList.remove("turn-next", "turn-prev");
	if (direction) {
		void sheet.offsetWidth;
		sheet.classList.add(direction > 0 ? "turn-next" : "turn-prev");
	}

	// HUD
	$("#hud-roman").textContent = ch ? ch.n : "";
	$("#hud-title").textContent = ch ? ch.title : "Tribos Ancestrais";
	$("#hud-bar").style.width = `${(page / TOTAL_PAGES) * 100}%`;
	$("#medallion-num").textContent = page;

	// Botões
	const atStart = page <= 0;
	const atEnd = page >= DEMO_LAST_PAGE;
	$("#dock-prev").disabled = atStart;
	$("#dock-next").disabled = atEnd;
	$(".tap-prev").disabled = atStart;
	$(".tap-next").disabled = atEnd;
}

function turn(delta) {
	const next = clamp(page + delta, 0, DEMO_LAST_PAGE);
	if (next === page) {
		if (delta > 0) toast("Fim da demonstração");
		return;
	}
	page = next;
	save();
	renderPage(delta);
	window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Swipe horizontal no palco (ignora rolagem vertical) */
(() => {
	const stage = $("#reader-stage");
	let sx = 0;
	let sy = 0;
	let tracking = false;
	stage.addEventListener("touchstart", (e) => {
		const t = e.touches[0];
		sx = t.clientX;
		sy = t.clientY;
		tracking = true;
	}, { passive: true });
	stage.addEventListener("touchend", (e) => {
		if (!tracking) return;
		tracking = false;
		const t = e.changedTouches[0];
		const dx = t.clientX - sx;
		const dy = t.clientY - sy;
		if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) turn(dx < 0 ? 1 : -1);
	});
})();

/* Teclado */
document.addEventListener("keydown", (e) => {
	if (!$("#jump-modal").hidden) {
		if (e.key === "Escape") closeJump();
		return;
	}
	if (currentScreen !== "ler") return;
	if (e.key === "ArrowRight") turn(1);
	if (e.key === "ArrowLeft") turn(-1);
});

/* Modal: ir para página */
function openJump() {
	const modal = $("#jump-modal");
	modal.hidden = false;
	const input = $("#jump-input");
	input.value = page;
	setTimeout(() => input.select(), 50);
}

function closeJump() {
	$("#jump-modal").hidden = true;
}

$("#btn-jump").addEventListener("click", openJump);

$("#jump-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const target = clamp(Number($("#jump-input").value), 0, TOTAL_PAGES);
	closeJump();
	if (target > DEMO_LAST_PAGE) return toast(`Demo: páginas 0 a ${DEMO_LAST_PAGE}`);
	const dir = Math.sign(target - page);
	page = target;
	save();
	renderPage(dir);
});

/* ---------------- Mapa (zoom + arraste + pinça) ---------------- */
const map = { s: 1, x: 0, y: 0 };
const mapImg = $("#map-img");
const mapVp = $("#map-viewport");

function applyMap() {
	mapImg.style.transform = `translate(${map.x}px, ${map.y}px) scale(${map.s})`;
}

function resetMap() {
	map.s = 1;
	map.x = 0;
	map.y = 0;
	applyMap();
}

function zoomMap(factor) {
	map.s = clamp(map.s * factor, 1, 5);
	if (map.s === 1) {
		map.x = 0;
		map.y = 0;
	}
	applyMap();
}

$("#map-in").addEventListener("click", () => zoomMap(1.35));
$("#map-out").addEventListener("click", () => zoomMap(1 / 1.35));
$("#map-reset").addEventListener("click", resetMap);
mapVp.addEventListener("wheel", (e) => {
	e.preventDefault();
	zoomMap(e.deltaY < 0 ? 1.12 : 1 / 1.12);
}, { passive: false });

(() => {
	const pointers = new Map();
	let startDist = 0;
	let startScale = 1;
	let last = null;

	mapVp.addEventListener("pointerdown", (e) => {
		mapVp.setPointerCapture(e.pointerId);
		pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
		if (pointers.size === 2) {
			const [a, b] = [...pointers.values()];
			startDist = Math.hypot(a.x - b.x, a.y - b.y);
			startScale = map.s;
		}
		last = { x: e.clientX, y: e.clientY };
		mapVp.classList.add("is-dragging");
	});

	mapVp.addEventListener("pointermove", (e) => {
		if (!pointers.has(e.pointerId)) return;
		pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
		if (pointers.size === 2) {
			const [a, b] = [...pointers.values()];
			map.s = clamp(startScale * (Math.hypot(a.x - b.x, a.y - b.y) / startDist), 1, 5);
		} else if (last) {
			map.x += e.clientX - last.x;
			map.y += e.clientY - last.y;
			last = { x: e.clientX, y: e.clientY };
		}
		applyMap();
	});

	const end = (e) => {
		pointers.delete(e.pointerId);
		if (pointers.size === 0) {
			last = null;
			mapVp.classList.remove("is-dragging");
		} else {
			const [p] = pointers.values();
			last = { ...p };
		}
	};
	mapVp.addEventListener("pointerup", end);
	mapVp.addEventListener("pointercancel", end);
})();

/* ---------------- Init ---------------- */
go(location.hash.slice(1) || "inicio", { push: false });
