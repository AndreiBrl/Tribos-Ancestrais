/* =========================================================
   TRIBOS ANCESTRAIS — Protótipo 4
   Clima real por hora + Sol/Lua + Parallax + Totem HQ
   ========================================================= */

const TOTAL_PAGES = 93;
const DEMO_LAST_PAGE = 4;
const STORAGE_KEY = "ta-proto4-page";
const IMG = "../../public/img/";

const CHAPTERS = [
	{ n: "I", title: "O Eco do Irmão Perdido", start: 1, end: 6, card: "card-1.png", tone: "tone-dark", font: "font-comic", charm: "charm-feather.png", fx: "" },
	{ n: "II", title: "A Dor que Desperta", start: 7, end: 12, card: "card-2.png", tone: "tone-light", font: "font-scroll", fx: "fx-glow-cyan" },
	{ n: "III", title: "Um Banquete para Porcos", start: 13, end: 24, card: "card-3.png", tone: "tone-light", font: "font-horror", charm: "charm-bone.png", fx: "" },
	{ n: "IV", title: "O Caminho Revelado", start: 25, end: 31, card: "card-4.png", tone: "tone-dark", font: "font-horror", drip: "moss", fx: "fx-glow-purple" },
	{ n: "V", title: "A Cabana na Clareira", start: 32, end: 40, card: "card-5.png", tone: "tone-dark", font: "font-horror", drip: "magic", fx: "fx-glow-purple" },
	{ n: "VI", title: "Sangue e Sacrifício", start: 41, end: 47, card: "card-6.png", tone: "tone-dark", font: "font-horror", drip: "blood", fx: "fx-glow-red" },
	{ n: "VII", title: "Xa’ru Xaruna", start: 48, end: 56, card: "card-7.png", tone: "tone-dark", font: "font-rune", charm: "charm-feather.png", fx: "fx-glow-cyan" },
	{ n: "VIII", title: "Um Sonho Impossível", start: 57, end: 73, card: "card-8.png", tone: "tone-dark", font: "font-rune", fx: "" },
	{ n: "IX", title: "Obsidiana Vermelha", start: 74, end: 81, card: "card-9.png", tone: "tone-dark", font: "font-comic", fx: "fx-glow-red" },
	{ n: "X", title: "Torokar", start: 82, end: 93, card: "card-10.png", tone: "tone-dark", font: "font-comic", charm: "charm-bone.png", fx: "fx-glow-purple" },
	{ n: "XI", title: "O Verdadeiro Propósito", start: null, end: null, locked: true, card: "card-11.png", tone: "tone-dark", font: "font-horror", fx: "" },
];

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

let page = clamp(Number(localStorage.getItem(STORAGE_KEY) ?? 0), 0, DEMO_LAST_PAGE);
let lastScreen = "inicio";
let currentScreen = "inicio";
const urlSky = new URLSearchParams(window.location.search).get("sky");
let skyMode = ["auto", "dawn", "day", "dusk", "night"].includes(urlSky) ? urlSky : "auto";
if (skyMode !== "auto") {
	document.querySelectorAll("[data-sky-mode]").forEach((b) => {
		b.classList.toggle("active", b.dataset.skyMode === skyMode);
	});
}

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function clamp(v, min, max) {
	return Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : min;
}

function chapterOf(p) {
	return CHAPTERS.find((c) => !c.locked && p >= c.start && p <= c.end) || null;
}

let toastTimer;
function toast(msg) {
	const el = $("#toast");
	el.textContent = msg;
	el.classList.add("is-visible");
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => el.classList.remove("is-visible"), 2200);
}

/* =========================================================
   CLIMA DINÂMICO PELA HORA DO COMPUTADOR + SOL E LUA
   ========================================================= */
function updateSkyByHour() {
	const now = new Date();
	let hourFloat = now.getHours() + now.getMinutes() / 60;

	const presetHours = { dawn: 6.1, day: 12.0, dusk: 17.8, night: 22.5 };
	if (skyMode !== "auto") {
		hourFloat = presetHours[skyMode];
	}

	let sky = "night";
	if (hourFloat >= 5 && hourFloat < 7.5) sky = "dawn";
	else if (hourFloat >= 7.5 && hourFloat < 17) sky = "day";
	else if (hourFloat >= 17 && hourFloat < 19) sky = "dusk";

	document.body.setAttribute("data-sky", sky);

	const hh = String(now.getHours()).padStart(2, "0");
	const mm = String(now.getMinutes()).padStart(2, "0");
	$("#sky-clock-label").textContent = skyMode === "auto" ? `${hh}:${mm}` : skyMode.toUpperCase();

	// Arco do Sol (visível entre 5h e 19h)
	const sunEl = $("#sun-body");
	if (hourFloat >= 5 && hourFloat <= 19) {
		const t = (hourFloat - 5) / 14; // 0 -> 1
		const leftPct = 10 + t * 80;
		const topPct = 44 - Math.sin(t * Math.PI) * 32;
		sunEl.style.left = `${leftPct}%`;
		sunEl.style.top = `${topPct}%`;
		sunEl.style.opacity = "1";
	} else {
		sunEl.style.opacity = "0";
	}

	// Arco da Lua (visível entre 18h e 6h)
	const moonEl = $("#moon-body");
	if (hourFloat >= 18 || hourFloat <= 6) {
		const nightHour = hourFloat >= 18 ? hourFloat - 18 : hourFloat + 6;
		const t = nightHour / 12; // 0 -> 1
		const leftPct = 12 + t * 76;
		const topPct = 42 - Math.sin(t * Math.PI) * 28;
		moonEl.style.left = `${leftPct}%`;
		moonEl.style.top = `${topPct}%`;
		moonEl.style.opacity = "1";
	} else {
		moonEl.style.opacity = "0";
	}
}

document.querySelectorAll("[data-sky-mode]").forEach((btn) => {
	btn.addEventListener("click", () => {
		skyMode = btn.dataset.skyMode;
		document.querySelectorAll("[data-sky-mode]").forEach((b) => {
			b.classList.toggle("active", b === btn);
		});
		updateSkyByHour();
	});
});

/* Estrelas & Pontos Tóxicos / Faíscas da fogueira */
(() => {
	const stars = $("#stars-field");
	for (let i = 0; i < 36; i++) {
		const s = document.createElement("span");
		s.className = "star-dot";
		s.style.left = `${(i * 19 + 7) % 98}%`;
		s.style.top = `${(i * 23 + 5) % 90}%`;
		s.style.animationDelay = `${-(i * 0.4)}s`;
		stars.appendChild(s);
	}

	const spores = $("#toxic-spores");
	if (spores) {
		for (let i = 0; i < 10; i++) {
			const sp = document.createElement("span");
			sp.className = "spore-dot";
			sp.style.left = `${18 + ((i * 13) % 64)}%`;
			sp.style.animationDelay = `${-(i * 0.35)}s`;
			spores.appendChild(sp);
		}
	}
})();

/* =========================================================
   PARALLAX SUAVE NO ACAMPAMENTO
   ========================================================= */
(() => {
	const home = document.querySelector(".screen-home");
	const layers = [...document.querySelectorAll("[data-parallax]")];

	home.addEventListener("pointermove", (e) => {
		if (currentScreen !== "inicio") return;
		const nx = e.clientX / window.innerWidth - 0.5;
		const ny = e.clientY / window.innerHeight - 0.5;
		for (const layer of layers) {
			const depth = Number(layer.dataset.parallax) * 180;
			layer.style.transform = `translate3d(${(-nx * depth).toFixed(1)}px, ${(-ny * depth * 0.6).toFixed(1)}px, 0)`;
		}
	});
})();

/* =========================================================
   ROTEAMENTO & INTERAÇÃO
   ========================================================= */
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
	if (action === "continue-or-start") go("ler");
});

const MUSHROOM_SPOTS = [
	{ left: "34.5%", top: "31.5%" },  // Sentado na entrada da caverna
	{ left: "26.5%", top: "40.5%" },  // Sentado na clareira à esquerda da fogueira
	{ left: "44.0%", top: "54.5%" },  // Sentado na frente da fogueira central
	{ left: "51.5%", top: "30.0%" },  // Sentado na clareira atrás perto da lança
	{ left: "54.5%", top: "53.5%" },  // Sentado à direita da fogueira
	{ left: "81.5%", top: "47.0%" },  // Sentado perto das raízes da árvore seca
];

(() => {
	const mush = $("#mushroom-hotspot");
	if (!mush) return;
	const urlSpot = new URLSearchParams(window.location.search).get("mspot");
	const idx =
		urlSpot !== null && Number.isInteger(Number(urlSpot)) && MUSHROOM_SPOTS[Number(urlSpot)]
			? Number(urlSpot)
			: Math.floor(Math.random() * MUSHROOM_SPOTS.length);
	const spot = MUSHROOM_SPOTS[idx];
	mush.style.left = spot.left;
	mush.style.top = spot.top;
})();

function refreshHome() {
	const numEl = $("#mushroom-chapter-num");
	if (!numEl) return;
	const ch = chapterOf(page);
	const chNum = ch ? CHAPTERS.indexOf(ch) + 1 : 1;
	numEl.textContent = String(chNum);
}

function renderChapters() {
	const grid = $("#cards-grid");
	const pct = Math.round((page / TOTAL_PAGES) * 100);
	$("#summary-text").textContent = `Página ${page} de ${TOTAL_PAGES} (${pct}%)`;
	$("#summary-bar").style.width = `${pct}%`;

	grid.innerHTML = CHAPTERS.map((c) => {
		const charmHtml = c.charm
			? `<img class="card-charm right" src="./assets/${c.charm}" alt="" aria-hidden="true" />`
			: "";
		const dripHtml = c.drip
			? `<span class="card-drip ${c.drip}" style="left:26%"></span><span class="card-drip ${c.drip}" style="left:68%;animation-delay:-1.1s"></span>`
			: "";

		if (c.locked) {
			return `<button class="custom-card ${c.tone} ${c.font} is-locked" type="button" style="background-image:url('./assets/${c.card}')" data-locked>
				<span class="c-roman">${c.n}</span>
				<h3 class="c-title">${c.title}</h3>
				<span class="c-pages">Em breve</span>
			</button>`;
		}

		const size = c.end - c.start + 1;
		const read = clamp(page - c.start + 1, 0, size);
		const done = page > c.end;
		const current = page >= c.start && page <= c.end;
		const fill = Math.round((read / size) * 100);

		const badge = done
			? '<span class="c-badge done">Lido</span>'
			: current
				? '<span class="c-badge">Lendo</span>'
				: "";

		return `<button class="custom-card ${c.tone} ${c.font} ${c.fx}" type="button" style="background-image:url('./assets/${c.card}')" data-start="${c.start}">
			${badge}
			<span class="c-roman">${c.n}</span>
			<h3 class="c-title">${c.title}</h3>
			<span class="c-pages">Págs. ${c.start}–${c.end}</span>
			<div class="progress-track c-bar"><i style="width:${fill}%"></i></div>
			${charmHtml}
			${dripHtml}
		</button>`;
	}).join("");
}

$("#cards-grid").addEventListener("click", (e) => {
	const card = e.target.closest(".custom-card");
	if (!card) return;
	if (card.hasAttribute("data-locked")) return toast("Capítulo XI em breve!");
	const start = Number(card.dataset.start);
	if (start > DEMO_LAST_PAGE) return toast("Demo: só o Cap. I está disponível");
	page = start;
	save();
	go("ler");
});

function save() {
	localStorage.setItem(STORAGE_KEY, String(page));
}

let firstParagraphIndex = -1;

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
		return `<figure class="page-art"><img src="${IMG}${a}" alt="${b}" loading="lazy" /></figure>`;
	}
	if (type === "break") {
		return '<div class="comic-divider" aria-hidden="true">◆ ◇ ◆</div>';
	}
	if (type === "cover") {
		return `<div class="cover-page">
			<img src="./assets/tent.png" alt="Acampamento Tribos Ancestrais" />
			<h2>Tribos Ancestrais</h2>
			<p>Escrito por Andrei Barbuto • 2024</p>
			<p>Deslize ou clique em Avançar →</p>
		</div>`;
	}
	return "";
}

function renderPage(direction) {
	const sheet = $("#page-sheet");
	const blocks = PAGES[page] || [];
	const ch = chapterOf(page);
	const isOpening = ch && ch.start === page;
	firstParagraphIndex = blocks.findIndex((b) => b[0] === "p");

	let html = "";
	if (isOpening) {
		html += `<header class="chapter-opening">
			<span>Capítulo ${ch.n}</span>
			<h2>${ch.title}</h2>
		</header>`;
	}
	html += `<div class="page-text">${blocks.map((b, i) => blockHTML(b, isOpening, i)).join("")}</div>`;

	if (page === DEMO_LAST_PAGE) {
		html += `<div class="end-demo"><strong>Fim da demonstração</strong>No projeto final a jornada continua até a página ${TOTAL_PAGES}.</div>`;
	}

	sheet.innerHTML = html;
	sheet.classList.remove("turn-next", "turn-prev");
	if (direction) {
		void sheet.offsetWidth;
		sheet.classList.add(direction > 0 ? "turn-next" : "turn-prev");
	}

	$("#hud-roman").textContent = ch ? ch.n : "";
	$("#hud-title").textContent = ch ? ch.title : "Tribos Ancestrais";
	$("#hud-bar").style.width = `${(page / TOTAL_PAGES) * 100}%`;
	$("#medallion-num").textContent = page;

	const atStart = page <= 0;
	const atEnd = page >= DEMO_LAST_PAGE;
	$("#dock-prev").disabled = atStart;
	$("#dock-next").disabled = atEnd;
	$(".edge-prev").disabled = atStart;
	$(".edge-next").disabled = atEnd;
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

document.addEventListener("keydown", (e) => {
	if (!$("#jump-modal").hidden) {
		if (e.key === "Escape") closeJump();
		return;
	}
	if (currentScreen !== "ler") return;
	if (e.key === "ArrowRight") turn(1);
	if (e.key === "ArrowLeft") turn(-1);
});

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

/* Mapa Zoom & Pan */
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

updateSkyByHour();
setInterval(updateSkyByHour, 60000);
go(location.hash.slice(1) || "inicio", { push: false });
