/* =========================================================
   TRIBOS ANCESTRAIS — Protótipo 5 (Estilo Ghibli)
   Céu contínuo por hora + Slider gentil no topo esquerdo + Ilha
   ========================================================= */

const $ = (sel) => document.querySelector(sel);

const SKY_KEYFRAMES = [
	// [hora, top, mid, low, abyss, starsOpacity, fireOpacity, brightness, saturate]
	{ h: 0.0, top: [8, 13, 30], mid: [16, 26, 52], low: [24, 38, 70], abyss: [6, 9, 18, 0.9], stars: 0.95, fire: 1.0, bri: 0.42, sat: 0.88 },
	{ h: 4.5, top: [14, 20, 44], mid: [28, 38, 70], low: [48, 56, 88], abyss: [10, 14, 26, 0.85], stars: 0.78, fire: 1.0, bri: 0.48, sat: 0.9 },
	{ h: 5.8, top: [88, 92, 146], mid: [198, 142, 150], low: [248, 206, 168], abyss: [34, 28, 44, 0.65], stars: 0.15, fire: 0.75, bri: 0.78, sat: 1.04 },
	{ h: 7.5, top: [52, 124, 186], mid: [126, 188, 224], low: [222, 240, 244], abyss: [24, 42, 58, 0.55], stars: 0.0, fire: 0.0, bri: 1.02, sat: 1.06 },
	{ h: 12.0, top: [34, 104, 172], mid: [96, 174, 218], low: [206, 234, 242], abyss: [18, 34, 48, 0.58], stars: 0.0, fire: 0.0, bri: 1.05, sat: 1.06 },
	{ h: 16.5, top: [56, 118, 176], mid: [134, 182, 212], low: [232, 224, 198], abyss: [24, 34, 46, 0.6], stars: 0.0, fire: 0.12, bri: 0.98, sat: 1.05 },
	{ h: 18.0, top: [54, 52, 102], mid: [192, 98, 106], low: [242, 172, 102], abyss: [24, 16, 32, 0.74], stars: 0.32, fire: 0.9, bri: 0.65, sat: 1.06 },
	{ h: 19.3, top: [18, 24, 54], mid: [44, 46, 90], low: [82, 66, 104], abyss: [12, 14, 26, 0.86], stars: 0.82, fire: 1.0, bri: 0.48, sat: 0.92 },
	{ h: 21.0, top: [8, 13, 30], mid: [16, 26, 52], low: [24, 38, 70], abyss: [6, 9, 18, 0.9], stars: 0.95, fire: 1.0, bri: 0.42, sat: 0.88 },
	{ h: 24.0, top: [8, 13, 30], mid: [16, 26, 52], low: [24, 38, 70], abyss: [6, 9, 18, 0.9], stars: 0.95, fire: 1.0, bri: 0.42, sat: 0.88 },
];

const TOTAL_PAGES = 93;
const DEMO_LAST_PAGE = 4;
const STORAGE_KEY = "ta-proto4-page";
const IMG = "../../public/img/";

const CHAPTERS = [
	{ n: "I", title: "O Eco do Irmão Perdido", start: 1, end: 6, card: "card-1.png" },
	{ n: "II", title: "A Dor que Desperta", start: 7, end: 12, card: "card-2.png" },
	{ n: "III", title: "Um Banquete para Porcos", start: 13, end: 24, card: "card-3.png" },
	{ n: "IV", title: "O Caminho Revelado", start: 25, end: 31, card: "card-4.png" },
	{ n: "V", title: "A Cabana na Clareira", start: 32, end: 40, card: "card-5.png" },
	{ n: "VI", title: "Sangue e Sacrifício", start: 41, end: 47, card: "card-6.png" },
	{ n: "VII", title: "Xa’ru Xaruna", start: 48, end: 56, card: "card-7.png" },
	{ n: "VIII", title: "Um Sonho Impossível", start: 57, end: 73, card: "card-8.png" },
	{ n: "IX", title: "Obsidiana Vermelha", start: 74, end: 81, card: "card-9.png" },
	{ n: "X", title: "Torokar", start: 82, end: 93, card: "card-10.png" },
	{ n: "XI", title: "O Verdadeiro Propósito", start: null, end: null, locked: true, card: "card-11.png" },
];

const PAGES = {
	0: [["cover"]],
	1: [
		["img", "cap1/paku_1.png", "Paku e Abak cavalgando"],
		["p", "Perguntou Paku."],
		["p", "Abak lançou-lhe um olhar seco, esporou o cavalo, afastando-se. Paku o acompanhou."],
		["p", "— O que foi agora, Paku? — Rebateu, com a voz baixa abafada."],
		["p", "— Antigamente não era assim, Fakuri errou em trazê-lo. — Os dois trotavam em seus cavalos à frente do grupo em uma estrada tortuosa cercada por densa floresta."],
		["p", "Um silvo leve e contínuo rasgou o ar, chegando ao ouvido dos dois. Lá de trás, Fakuri assobiava, sinal de que era hora de montar acampamento."],
		["p", "O primeiro dia de cavalgada terminava."],
	],
	2: [
		["p", "Enquanto isso, atrás deles estavam Fakuri, Kizuno e Akin. Fakuri imponente em seu cavalo marrom ornado com couros tingidos."],
		["p", "Ao lado do chefe vinha Kizuno, mestre de guerra e conselheiro de Fakuri. No mesmo cavalo, agarrado a ele, estava seu discípulo Akin."],
		["p", "— Akin. — Disse ele em tom leve. — Desça e monte acampamento junto de Abak e Paku."],
		["p", "O garoto puxou sua lança amarrada na lateral do cavalo e pulou."],
	],
	3: [
		["p", "— Prepare a caça Akin, Paku e eu faremos a ronda a pé e traremos um pouco de madeira."],
		["p", "Enquanto a lua tomava seu lugar na escuridão banhando os seres com sua luz, Fakuri cavalgava em silêncio ao lado de Kizuno."],
	],
	4: [
		["p", "— Me preocupo com Akin. — Lançou Kizuno, rompendo o silêncio."],
		["img", "cap1/kizuno_fakuri.png", "Kizuno e Fakuri sob o luar"],
		["p", "— Pois então, permita que o garoto mostre seu valor. — Disse o chefe, enquanto voltava seu olhar pensativo ao luar."],
	],
};

const MAP_LORE = [
	{
		title: "Estrada do Crepúsculo",
		desc: "A trilha tortuosa cercada por floresta densa onde Fakuri, Kizuno, Akin, Abak e Paku montaram o primeiro acampamento rumo ao banquete.",
	},
	{
		title: "A Cabana na Clareira",
		desc: "Refúgio antigo escondido entre árvores milenares e raízes profundas, guardado por sinais que poucos guerreiros ousam decifrar.",
	},
	{
		title: "Xa’ru Xaruna",
		desc: "Ruínas sagradas de pedra e jade onde os ecos ancestrais ainda sussurram entre o musgo e a névoa.",
	},
	{
		title: "Torokar",
		desc: "As terras distantes do grande banquete tribal, onde guerreiros são desafiados e destinos são selados diante do fogo.",
	},
];

let manualMinutes = null;

function lerp(a, b, t) {
	return a + (b - a) * t;
}

function lerpRgb(c1, c2, t) {
	const r = Math.round(lerp(c1[0], c2[0], t));
	const g = Math.round(lerp(c1[1], c2[1], t));
	const b = Math.round(lerp(c1[2], c2[2], t));
	return `rgb(${r}, ${g}, ${b})`;
}

function lerpRgba(c1, c2, t) {
	const r = Math.round(lerp(c1[0], c2[0], t));
	const g = Math.round(lerp(c1[1], c2[1], t));
	const b = Math.round(lerp(c1[2], c2[2], t));
	const a = lerp(c1[3], c2[3], t).toFixed(2);
	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function applySkyForMinutes(totalMinutes) {
	const mins = ((Math.round(totalMinutes) % 1440) + 1440) % 1440;
	const hourFloat = mins / 60;

	let a = SKY_KEYFRAMES[0];
	let b = SKY_KEYFRAMES[SKY_KEYFRAMES.length - 1];
	for (let i = 0; i < SKY_KEYFRAMES.length - 1; i++) {
		if (hourFloat >= SKY_KEYFRAMES[i].h && hourFloat <= SKY_KEYFRAMES[i + 1].h) {
			a = SKY_KEYFRAMES[i];
			b = SKY_KEYFRAMES[i + 1];
			break;
		}
	}

	const span = Math.max(0.001, b.h - a.h);
	const t = (hourFloat - a.h) / span;

	const root = document.documentElement.style;
	root.setProperty("--sky-top", lerpRgb(a.top, b.top, t));
	root.setProperty("--sky-mid", lerpRgb(a.mid, b.mid, t));
	root.setProperty("--sky-low", lerpRgb(a.low, b.low, t));
	root.setProperty("--abyss-color", lerpRgba(a.abyss, b.abyss, t));
	root.setProperty("--stars-opacity", lerp(a.stars, b.stars, t).toFixed(2));
	root.setProperty("--fire-opacity", lerp(a.fire, b.fire, t).toFixed(2));
	root.setProperty(
		"--scenery-filter",
		`brightness(${lerp(a.bri, b.bri, t).toFixed(2)}) saturate(${lerp(a.sat, b.sat, t).toFixed(2)})`
	);

	// Arco do Sol (05:15 -> 18:45)
	const sunEl = $("#sun-body");
	if (hourFloat >= 5.25 && hourFloat <= 18.75) {
		const st = (hourFloat - 5.25) / 13.5;
		sunEl.style.left = `${10 + st * 80}%`;
		sunEl.style.top = `${42 - Math.sin(st * Math.PI) * 31}%`;
		const edgeFade = Math.min(1, Math.sin(st * Math.PI) * 3.2);
		sunEl.style.opacity = edgeFade.toFixed(2);
	} else {
		sunEl.style.opacity = "0";
	}

	// Arco da Lua (18:00 -> 06:00)
	const moonEl = $("#moon-body");
	if (hourFloat >= 18 || hourFloat <= 6) {
		const nightHour = hourFloat >= 18 ? hourFloat - 18 : hourFloat + 6;
		const mt = nightHour / 12;
		moonEl.style.left = `${12 + mt * 76}%`;
		moonEl.style.top = `${40 - Math.sin(mt * Math.PI) * 28}%`;
		const edgeFade = Math.min(1, Math.sin(mt * Math.PI) * 3.2);
		moonEl.style.opacity = edgeFade.toFixed(2);
	} else {
		moonEl.style.opacity = "0";
	}

	// Sincroniza barra do modal
	$("#sky-hour-slider").value = String(mins);
}

function getRealMinutes() {
	const now = new Date();
	return now.getHours() * 60 + now.getMinutes();
}

function refreshClockSky() {
	const mins = manualMinutes !== null ? manualMinutes : getRealMinutes();
	applySkyForMinutes(mins);
}

/* Inicialização por query param opcional (?time=HH:MM ou ?sky=day|night|dawn|dusk) */
(() => {
	const params = new URLSearchParams(window.location.search);
	const tParam = params.get("time");
	const skyParam = params.get("sky");
	if (tParam && /^\d{1,2}:\d{2}$/.test(tParam)) {
		const [h, m] = tParam.split(":").map(Number);
		manualMinutes = Math.min(1439, Math.max(0, h * 60 + m));
	} else if (skyParam === "day") {
		manualMinutes = 12 * 60;
	} else if (skyParam === "night") {
		manualMinutes = 22 * 60;
	} else if (skyParam === "dawn") {
		manualMinutes = 6 * 60;
	} else if (skyParam === "dusk") {
		manualMinutes = 18 * 60;
	}
})();

/* Estrelas no céu (distribuição orgânica sem alinhamento em grade) */
(() => {
	const stars = $("#stars-field");
	const rand = (seed) => {
		const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
		return x - Math.floor(x);
	};
	for (let i = 0; i < 46; i++) {
		const s = document.createElement("span");
		s.className = "star-dot";
		s.style.left = `${(3 + rand(i * 2 + 1) * 94).toFixed(1)}%`;
		s.style.top = `${(4 + rand(i * 2 + 2) * 88).toFixed(1)}%`;
		s.style.animationDelay = `${-(i * 0.35)}s`;
		stars.appendChild(s);
	}
})();

/* Nuvens entrando da borda esquerda para a direita (algumas atrás e outras na frente da ilha) */
(() => {
	const back = $("#clouds-back");
	const front = $("#clouds-front");
	const configs = [
		{ top: "11%", width: "clamp(115px, 16vw, 210px)", dur: 66, delay: 0 },
		{ top: "23%", width: "clamp(95px, 13vw, 175px)", dur: 82, delay: 14 },
		{ top: "8%", width: "clamp(82px, 11vw, 145px)", dur: 72, delay: 30 },
		{ top: "48%", width: "clamp(110px, 15vw, 195px)", dur: 76, delay: 6 },
	];

	configs.forEach((cfg, i) => {
		const img = document.createElement("img");
		img.src = "./assets/cloud.png";
		img.alt = "";
		img.className = "cloud-img";
		img.style.top = cfg.top;
		img.style.width = cfg.width;
		img.style.animationDuration = `${cfg.dur}s`;
		img.style.animationDelay = `${cfg.delay}s`;

		// Garante que pelo menos 1 passe na frente e outras atrás, aleatoriamente
		const isFront = i === 3 ? true : Math.random() < 0.38;
		if (isFront) {
			img.classList.add("is-front-cloud");
			front.appendChild(img);
		} else {
			back.appendChild(img);
		}
	});
})();

/* Cogumelo sentado à esquerda da fogueira (subido um pouco) ou em cima da caverna */
(() => {
	const mush = $("#mushroom-hotspot");
	const mspot = new URLSearchParams(window.location.search).get("mspot");
	const onCave = mspot === "cave" ? true : mspot === "fire" ? false : Math.random() < 0.4;

	if (onCave) {
		mush.style.left = "25.0%";
		mush.style.top = "-9.5%";
		mush.classList.add("is-on-cave");
	} else {
		mush.style.left = "34.5%";
		mush.style.top = "40.5%";
		mush.classList.remove("is-on-cave");
	}

	const savedPage = Number(localStorage.getItem("ta-proto4-page") ?? 0);
	const ch = savedPage >= 7 ? 2 : 1;
	$("#mushroom-chapter-num").textContent = String(ch);
})();

/* Modal gentil de configuração do sol/hora */
(() => {
	const modal = $("#sky-modal");
	const openBtn = $("#cfg-open-btn");
	const closeBtn = $("#cfg-close-btn");
	const slider = $("#sky-hour-slider");
	const autoBtn = $("#sky-auto-btn");

	function openModal() {
		modal.hidden = false;
		openBtn.setAttribute("aria-expanded", "true");
		requestAnimationFrame(() => modal.classList.add("is-open"));
	}

	function closeModal() {
		modal.classList.remove("is-open");
		openBtn.setAttribute("aria-expanded", "false");
		setTimeout(() => {
			if (!modal.classList.contains("is-open")) modal.hidden = true;
		}, 280);
	}

	openBtn.addEventListener("click", () => {
		if (modal.hidden) openModal();
		else closeModal();
	});

	closeBtn.addEventListener("click", closeModal);

	modal.addEventListener("click", (e) => {
		if (e.target === modal) closeModal();
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && !modal.hidden) closeModal();
	});

	slider.addEventListener("input", () => {
		manualMinutes = Number(slider.value);
		applySkyForMinutes(manualMinutes);
	});

	autoBtn.addEventListener("click", () => {
		manualMinutes = null;
		refreshClockSky();
	});
})();

/* Parallax suave no ponteiro */
(() => {
	const layers = [...document.querySelectorAll("[data-parallax]")];
	let raf = 0;
	let tx = 0;
	let ty = 0;

	window.addEventListener(
		"pointermove",
		(e) => {
			if (e.pointerType !== "mouse") return;
			tx = (e.clientX / window.innerWidth - 0.5) * 2;
			ty = (e.clientY / window.innerHeight - 0.5) * 2;
			if (!raf) {
				raf = requestAnimationFrame(() => {
					layers.forEach((el) => {
						const d = Number(el.dataset.parallax) * 100;
						el.style.transform = `translate3d(${(-tx * d).toFixed(1)}px, ${(-ty * d * 0.5).toFixed(1)}px, 0)`;
					});
					raf = 0;
				});
			}
		},
		{ passive: true }
	);
})();

/* Navegação entre todas as telas + Leitor + Mapa + Capítulos */
let currentPage = getSavedPage();

function getSavedPage() {
	const pParam = new URLSearchParams(window.location.search).get("page");
	if (pParam !== null && Number.isFinite(Number(pParam))) {
		return Math.min(TOTAL_PAGES, Math.max(0, Math.round(Number(pParam))));
	}
	const raw = Number(localStorage.getItem(STORAGE_KEY) ?? 0);
	return Number.isFinite(raw) ? Math.min(TOTAL_PAGES, Math.max(0, raw)) : 0;
}

function chapterOf(p) {
	return CHAPTERS.find((c) => !c.locked && p >= c.start && p <= c.end) || CHAPTERS[0];
}

function updateMushroomBadge() {
	const ch = chapterOf(currentPage);
	const chNum = ch ? CHAPTERS.indexOf(ch) + 1 : 1;
	const el = $("#mushroom-chapter-num");
	if (el) el.textContent = String(chNum);
}

function renderChapters() {
	const grid = $("#chapters-grid");
	if (!grid) return;

	grid.innerHTML = CHAPTERS.map((ch) => {
		const isReading = !ch.locked && currentPage >= ch.start && currentPage <= ch.end;
		const isDone = !ch.locked && currentPage > ch.end;
		const badge = ch.locked ? "Em breve" : isReading ? "Em leitura" : isDone ? "Lido" : "";

		return `
			<button
				type="button"
				class="ghibli-card${ch.locked ? " is-locked" : ""}${isReading ? " is-current" : ""}"
				data-chapter="${ch.n}"
				style="background-image: url('./assets/${ch.card}');"
			>
				<span class="card-inner">
					<span class="card-num">${ch.n}</span>
					<strong class="card-title">${ch.title}</strong>
					${badge ? `<span class="card-badge">${badge}</span>` : ""}
				</span>
			</button>
		`;
	}).join("");
}

function renderReader() {
	const paper = $("#reader-paper");
	if (!paper) return;
	const ch = chapterOf(currentPage);
	const titleEl = $("#reader-ch-title");
	if (currentPage === 0) {
		titleEl.textContent = "Prólogo — Tribos Ancestrais";
	} else {
		titleEl.innerHTML = `<span class="reader-ch-roman">${ch.n}</span> — ${ch.title}`;
	}
	$("#reader-page-meta").textContent = `Página ${currentPage} de ${TOTAL_PAGES}`;

	$("#btn-prev-page").disabled = currentPage <= 0;
	$("#btn-next-page").disabled = currentPage >= TOTAL_PAGES;
	const jumpInput = $("#page-jump-input");
	if (jumpInput) jumpInput.value = String(currentPage);

	const drawerList = $("#drawer-chapters");
	if (drawerList) {
		drawerList.innerHTML = CHAPTERS.filter((c) => !c.locked)
			.map(
				(c) => `
				<button type="button" class="drawer-ch-btn${c.n === ch.n && currentPage > 0 ? " is-active" : ""}" data-chapter="${c.n}">
					<span>${c.n}</span>
					<strong>${c.title}</strong>
				</button>
			`
			)
			.join("");
	}

	const blocks = PAGES[currentPage];
	if (!blocks) {
		paper.innerHTML = `
			<div class="reader-demo-note">
				<h3>Capítulo ${ch.n} — ${ch.title}</h3>
				<p>Página ${currentPage} de ${TOTAL_PAGES}. Esta prévia do Protótipo 5 inclui as páginas iniciais ilustradas (0 a ${DEMO_LAST_PAGE}) para demonstrar a leitura em estilo Ghibli.</p>
			</div>
		`;
		return;
	}

	paper.innerHTML = blocks
		.map(([type, arg1, arg2]) => {
			if (type === "cover") {
				return `
					<div class="reader-cover">
						<span class="cover-kicker">Livro I</span>
						<h3>Tribos Ancestrais</h3>
						<p>Uma jornada pelas terras antigas de Xa’ru</p>
						<button type="button" class="ghibli-pill-btn" data-turn="1">Começar Leitura →</button>
					</div>
				`;
			}
			if (type === "img") {
				return `<figure class="reader-fig"><img src="${IMG}${arg1}" alt="${arg2 || ""}" /></figure>`;
			}
			return `<p class="reader-p">${arg1}</p>`;
		})
		.join("");
}

function turn(delta) {
	currentPage = Math.min(TOTAL_PAGES, Math.max(0, currentPage + delta));
	localStorage.setItem(STORAGE_KEY, String(currentPage));
	updateMushroomBadge();
	renderReader();
	const inner = document.querySelector(".screen-inner.active");
	if (inner) inner.scrollTo({ top: 0, behavior: "smooth" });
}

function closeDrawer() {
	const drawer = $("#reader-drawer");
	const btn = $("#branch-menu-btn");
	if (!drawer || drawer.hidden) return;
	drawer.classList.remove("is-open");
	if (btn) btn.setAttribute("aria-expanded", "false");
	setTimeout(() => {
		if (!drawer.classList.contains("is-open")) drawer.hidden = true;
	}, 260);
}

function openDrawer() {
	const drawer = $("#reader-drawer");
	const btn = $("#branch-menu-btn");
	if (!drawer) return;
	drawer.hidden = false;
	if (btn) btn.setAttribute("aria-expanded", "true");
	requestAnimationFrame(() => drawer.classList.add("is-open"));
}

function go(screenName, { push = true } = {}) {
	closeDrawer();
	const valid = ["inicio", "capitulos", "ler", "mapa", "autor", "apoie"];
	const target = valid.includes(screenName) ? screenName : "inicio";

	document.querySelectorAll(".screen").forEach((s) => {
		s.classList.toggle("active", s.dataset.screen === target);
	});
	document.body.setAttribute("data-screen", target);

	if (push && location.hash !== `#${target}`) {
		history.pushState({ screen: target }, "", `#${target}`);
	}
	if (target === "inicio") updateMushroomBadge();
	if (target === "capitulos") renderChapters();
	if (target === "ler") {
		renderReader();
		if (new URLSearchParams(window.location.search).get("drawer") === "1") openDrawer();
	}
}

window.addEventListener("popstate", () => {
	go(location.hash.slice(1) || "inicio", { push: false });
});

let toastTimer = 0;
function showToast(msg) {
	const el = $("#toast");
	el.textContent = msg;
	el.classList.add("show");
	clearTimeout(toastTimer);
	toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

document.addEventListener("click", (e) => {
	const goBtn = e.target.closest("[data-go]");
	if (goBtn) {
		go(goBtn.dataset.go);
		return;
	}
	const actionBtn = e.target.closest("[data-action='continue-or-start']");
	if (actionBtn) {
		go("ler");
		return;
	}
	const turnBtn = e.target.closest("[data-turn]");
	if (turnBtn) {
		turn(Number(turnBtn.dataset.turn));
		return;
	}
	const pinBtn = e.target.closest("[data-pin]");
	if (pinBtn) {
		document.querySelectorAll(".map-pin").forEach((p) => p.classList.toggle("active", p === pinBtn));
		const lore = MAP_LORE[Number(pinBtn.dataset.pin)];
		if (lore) {
			$("#map-lore-title").textContent = lore.title;
			$("#map-lore-desc").textContent = lore.desc;
		}
		return;
	}
	const copyBtn = e.target.closest("[data-copy]");
	if (copyBtn) {
		navigator.clipboard?.writeText(copyBtn.dataset.copy).catch(() => {});
		showToast(copyBtn.dataset.copyMsg || "Copiado!");
		return;
	}
	const chBtn = e.target.closest("[data-chapter]");
	if (chBtn) {
		const ch = CHAPTERS.find((c) => c.n === chBtn.dataset.chapter);
		if (ch?.locked) {
			showToast("Capítulo XI em breve");
		} else if (ch) {
			currentPage = ch.start;
			localStorage.setItem(STORAGE_KEY, String(currentPage));
			updateMushroomBadge();
			closeDrawer();
			go("ler");
		}
	}
});

/* Menu galho lateral no Leitor + Swipe com os dedos para trocar página */
(() => {
	const branchBtn = $("#branch-menu-btn");
	const drawer = $("#reader-drawer");
	const closeBtn = $("#drawer-close-btn");
	if (branchBtn && drawer) {
		branchBtn.addEventListener("click", () => {
			if (drawer.hidden) openDrawer();
			else closeDrawer();
		});
		drawer.addEventListener("click", (e) => {
			if (e.target === drawer) closeDrawer();
		});
	}
	if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

	const jumpInput = $("#page-jump-input");
	if (jumpInput) {
		const applyJump = () => {
			const val = Number(jumpInput.value);
			if (!Number.isFinite(val)) {
				jumpInput.value = String(currentPage);
				return;
			}
			currentPage = Math.min(TOTAL_PAGES, Math.max(0, Math.round(val)));
			localStorage.setItem(STORAGE_KEY, String(currentPage));
			updateMushroomBadge();
			renderReader();
		};
		jumpInput.addEventListener("change", applyJump);
		jumpInput.addEventListener("keydown", (e) => {
			if (e.key === "Enter") {
				e.preventDefault();
				applyJump();
				jumpInput.blur();
			}
		});
	}

	const paper = $("#reader-paper");
	if (paper) {
		let startX = 0;
		let startY = 0;
		paper.addEventListener(
			"touchstart",
			(e) => {
				if (e.touches.length !== 1) return;
				startX = e.touches[0].clientX;
				startY = e.touches[0].clientY;
			},
			{ passive: true }
		);
		paper.addEventListener(
			"touchend",
			(e) => {
				if (e.changedTouches.length !== 1) return;
				const dx = e.changedTouches[0].clientX - startX;
				const dy = e.changedTouches[0].clientY - startY;
				if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) {
					turn(dx < 0 ? 1 : -1);
				}
			},
			{ passive: true }
		);
	}
})();

const AUTHOR_SECRETS = [
	"“No começo, eram só personagens malucos pulando por aí com fone de ouvido no máximo.”",
	"“Goku de DBZ e idas ao cinema acenderam a faísca que hoje move cada capítulo de Tribos Ancestrais.”",
	"“A história nasceu como livro puro — mas os cenários pediram tanto por imagens que virou mangá!”",
	"“Entre linhas de código e estudos de desenho, o universo de Xa’ru ganha vida um quadro por vez.”",
];

const OFFERING_BLESSINGS = [
	"Os espíritos da floresta sorriram para você!",
	"O golem acenou em aprovação junto à fogueira.",
	"O cogumelo anotou sua boa energia na placa!",
	"Mais uma faísca para transformar o livro em mangá!",
];

let secretIdx = 0;
let offeringCount = Number(localStorage.getItem("ta-proto5-embers") || 1);

(() => {
	const quoteEl = $("#oracle-quote");
	const nextBtn = $("#oracle-next-btn");
	const spiritBtn = $("#oracle-spirit-btn");
	const spiritImg = $("#oracle-spirit-img");

	const cycleSecret = () => {
		if (!quoteEl) return;
		secretIdx = (secretIdx + 1) % AUTHOR_SECRETS.length;
		quoteEl.textContent = AUTHOR_SECRETS[secretIdx];
		if (spiritImg) {
			spiritImg.classList.remove("is-hopping");
			void spiritImg.offsetWidth;
			spiritImg.classList.add("is-hopping");
		}
	};

	if (nextBtn) nextBtn.addEventListener("click", cycleSecret);
	if (spiritBtn) spiritBtn.addEventListener("click", cycleSecret);

	const countEl = $("#offering-count-label");
	const blessEl = $("#offering-blessing");
	const offBtn = $("#offering-btn");
	const hearthBtn = $("#support-hearth-btn");
	const syncOffering = () => {
		if (countEl) {
			countEl.textContent = `${offeringCount} ${offeringCount === 1 ? "brasa acesa" : "brasas acesas"} pela tribo`;
		}
	};
	syncOffering();

	const stokeFire = () => {
		offeringCount += 1;
		localStorage.setItem("ta-proto5-embers", String(offeringCount));
		syncOffering();
		if (blessEl) {
			blessEl.textContent = OFFERING_BLESSINGS[offeringCount % OFFERING_BLESSINGS.length];
		}
		if (hearthBtn) {
			hearthBtn.classList.remove("is-stoked");
			void hearthBtn.offsetWidth;
			hearthBtn.classList.add("is-stoked");
		}
	};

	if (offBtn) offBtn.addEventListener("click", stokeFire);
	if (hearthBtn) hearthBtn.addEventListener("click", stokeFire);
})();

refreshClockSky();
updateMushroomBadge();
go(location.hash.slice(1) || "inicio", { push: false });
setInterval(refreshClockSky, 30_000);
