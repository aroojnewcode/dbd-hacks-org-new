import { HERO_IMAGES, clampTitle, clampDesc, section, stripFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'DBD Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Dead by Daylight indetectables para Dead by Daylight en PC. ESP wallhack, world esp y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'DBD Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Dead by Daylight en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galería DBD Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen DBD Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y killer-side.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'DBD Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Dead by Daylight indétectables pour Dead by Daylight sur PC. ESP wallhack, world esp et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'DBD Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Dead by Daylight sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galerie DBD Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir DBD Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et killer-side.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'DBD Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected DBD Hacks für Dead by Daylight auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'DBD Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Dead by Daylight: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'DBD Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum DBD Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und killer-side zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'DBD Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Dead by Daylight indetectáveis para Dead by Daylight no PC. ESP wallhack, world esp e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'DBD Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Dead by Daylight no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galeria DBD Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher DBD Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler eteamrões inimigos em BR e killer-side.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'DBD Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Dead by Daylight indetectable per Dead by Daylight su PC. ESP wallhack, world esp e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'DBD Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Dead by Daylight su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galleria DBD Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere DBD Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere teamre nemiche in BR e killer-side.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'DBD Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected DBD cheats voor Dead by Daylight op PC. ESP wallhack, world esp en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'DBD Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Dead by Daylight: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'DBD ESP player tags hack', gallery: 'DBD Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom DBD Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke teams te lezen in BR en killer-side.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'DBD Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Dead by Daylight dla Dead by Daylight na PC. ESP wallhack, world esp i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'DBD Hacks — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Dead by Daylight na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galeria DBD Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego DBD Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich teamów w BR i killer-side.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'DBD Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Dead by Daylight для Dead by Daylight на PC. ESP wallhack, world esp и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'DBD Hacks — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'DBD ESP player tags hack', gallery: 'Галерея DBD Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают DBD Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и killer-side.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'DBD Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'Dead by Daylight için undetected hileler. ESP wallhack, world esp ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'DBD Hacks — Undetected ESP, Wallhack ve Aimbot', intro: 'Dead by Daylight Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'DBD ESP player tags hack', gallery: 'DBD Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden DBD Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve killer-side\'da düşman team okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'DBD Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش Dead by Daylight undetected لـ Dead by Daylight على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'DBD Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Dead by Daylight على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'معرض DBD Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا DBD Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وkiller-side.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'DBD Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'Dead by Daylight向けundetectedチート。ESP wallhack、world esp、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'DBD Hacks — Undetected ESP・Wallhack・Aimbot', intro: 'Dead by Daylight Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'DBD cheats hero ESP aimbot wallhack', gallery: 'DBD Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にDBD Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとkiller-sideで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'DBD Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'Dead by Daylight undetected 치트. ESP wallhack, world esp, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'DBD Hacks — Undetected ESP, Wallhack, Aimbot', intro: 'Dead by Daylight Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'DBD cheats hero ESP aimbot wallhack', gallery: 'DBD Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 DBD Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 killer-side에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'DBD Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'Dead by Daylight undetected作弊。ESP wallhack、world esp、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'DBD Hacks — Undetected ESP、Wallhack、Aimbot', intro: 'Dead by Daylight Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'DBD cheats hero ESP aimbot wallhack', gallery: 'DBD Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择DBD Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和killer-side中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'DBD Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'Dead by Daylight undetected cheats. ESP wallhack, world esp, Aimbot, EAC maintenance. Instant digital delivery.', h1: 'DBD Hacks — Undetected ESP, Wallhack और Aimbot', intro: 'Dead by Daylight Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.', imageAlt: 'DBD cheats hero ESP aimbot wallhack', gallery: 'DBD Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में DBD Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और killer-side में दुश्मन team पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'DBD Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dead by Daylight undetected untuk Dead by Daylight di PC. ESP wallhack, world esp, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'DBD Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Dead by Daylight di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galeri DBD Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa DBD Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca team musuh di BR dan killer-side.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'DBD Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Dead by Daylight undetected สำหรับ Dead by Daylight บน PC. ESP wallhack, world esp, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'DBD Hacks — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Dead by Daylight บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance', imageAlt: 'DBD ESP player tags hack', gallery: 'แกลเลอรี DBD Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก DBD Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน team ศัตรูใน BR และ killer-side', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'DBD Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Dead by Daylight undetected cho Dead by Daylight trên PC. ESP wallhack, world esp, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'DBD Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Dead by Daylight trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Thư viện DBD Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn DBD Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc team địch trong BR và killer-side.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'DBD Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Dead by Daylight для Dead by Daylight на PC. ESP wallhack, world esp, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'DBD Hacks — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Dead by Daylight на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Галерея DBD Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому DBD Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і killer-side.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'DBD Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected DBD cheaty pro Dead by Daylight na PC. ESP wallhack, world esp, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'DBD Hacks — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Dead by Daylight na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galerie DBD Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč DBD Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských teamů v BR a killer-side.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'DBD Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Dead by Daylight undetected pentru Dead by Daylight pe PC. ESP wallhack, world esp, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'DBD Hacks — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Dead by Daylight pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'DBD ESP player tags hack', gallery: 'Galerie DBD Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce DBD Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea team-urilor inamice în BR și killer-side.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'DBD Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected DBD cheats för Dead by Daylight på PC. ESP wallhack, world esp, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'DBD Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Dead by Daylight på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'DBD ESP player tags hack', gallery: 'DBD Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför DBD Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendeteams i BR och killer-side.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripFromMeta(m.title)),
		description: clampDesc(stripFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'dbd-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, objective markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'dbd-aimbot': { suffix: 'Soft Aim Controls', focus: 'aimbot, FOV, and per-killer Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, aimbot, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'EAC patch status and rebuild notes', altKeyword: 'updates EAC maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, aimbot, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	'world-esp': { suffix: '2D Threat Overlay', focus: 'World ESP cues for approaches and loops', altKeyword: 'world esp overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how EAC updates are handled for Dead by Daylight hacks', altKeyword: 'EAC bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 DBD cheats checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Dead by Daylight hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and aimbot toggles', altKeyword: 'mod menu ESP aimbot' },
	'skill-check': { suffix: 'Smooth Aim Settings', focus: 'smooth aimbot settings for Windows PC', altKeyword: 'aimbot aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying DBD cheats', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Dead by Daylight', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, objective pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'dbd-esp': 'Cajas de jugador y wallhack',
		'dbd-aimbot': 'Controles aimbot',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		'world-esp': 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'skill-check': 'Ajustes aimbot',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia aimbot',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'dbd-esp': 'Boîtes joueur et wallhack',
		'dbd-aimbot': 'Contrôles aimbot',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		'world-esp': 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'skill-check': 'Réglages aimbot',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance aimbot',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'dbd-esp': 'Spielerboxen & Wallhack',
		'dbd-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		'world-esp': '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'skill-check': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'dbd-esp': 'Caixas de jogador e wallhack',
		'dbd-aimbot': 'Controles aimbot',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		'world-esp': 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'skill-check': 'Ajustes aimbot',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência aimbot',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'dbd-esp': 'Box giocatore e wallhack',
		'dbd-aimbot': 'Controlli aimbot',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		'world-esp': 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'skill-check': 'Impostazioni aimbot',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist aimbot',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'dbd-esp': 'Боксы игроков и wallhack',
		'dbd-aimbot': 'Управление aimbot',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		'world-esp': '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'skill-check': 'Настройки aimbot',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Aimbot ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'DBD Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripFromMeta(titleBase)),
		description: clampDesc(
			stripFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — DBD Hacks screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'dbd-esp': { en: 'DBD ESP', es: 'ESP DBD', fr: 'ESP DBD', de: 'DBD ESP', pt: 'ESP DBD', it: 'ESP DBD', nl: 'DBD ESP', pl: 'ESP DBD', ru: 'ESP DBD', tr: 'DBD ESP', ar: 'ESP DBD', ja: 'DBD ESP', ko: 'DBD ESP', zh: 'DBD ESP', hi: 'DBD ESP', id: 'ESP DBD', th: 'DBD ESP', vi: 'ESP DBD', uk: 'ESP DBD', cs: 'DBD ESP', ro: 'ESP DBD', sv: 'DBD ESP' },
	'dbd-aimbot': { en: 'DBD Aimbot', es: 'Aimbot DBD', fr: 'Aimbot DBD', de: 'DBD Aimbot', pt: 'Aimbot DBD', it: 'Aimbot DBD', nl: 'DBD Aimbot', pl: 'Aimbot DBD', ru: 'Aimbot DBD', tr: 'DBD Aimbot', ar: 'Aimbot DBD', ja: 'DBD Aimbot', ko: 'DBD Aimbot', zh: 'DBD Aimbot', hi: 'DBD Aimbot', id: 'Aimbot DBD', th: 'DBD Aimbot', vi: 'Aimbot DBD', uk: 'Aimbot DBD', cs: 'DBD Aimbot', ro: 'Aimbot DBD', sv: 'DBD Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'DBD Wallhack', es: 'Wallhack DBD', fr: 'Wallhack DBD', de: 'DBD Wallhack', pt: 'Wallhack DBD', it: 'Wallhack DBD', nl: 'DBD Wallhack', pl: 'Wallhack DBD', ru: 'Wallhack DBD', tr: 'DBD Wallhack', ar: 'Wallhack DBD', ja: 'DBD Wallhack', ko: 'DBD Wallhack', zh: 'DBD Wallhack', hi: 'DBD Wallhack', id: 'Wallhack DBD', th: 'DBD Wallhack', vi: 'Wallhack DBD', uk: 'Wallhack DBD', cs: 'DBD Wallhack', ro: 'Wallhack DBD', sv: 'DBD Wallhack' },
	'world-esp': { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'EAC Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'EAC Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'EAC Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'EAC bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass Easy Anti-Cheat', th: 'EAC Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'EAC Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'DBD Hacks 2026', es: 'Trucos DBD 2026', fr: 'Triches DBD 2026', de: 'DBD Hacks 2026', pt: 'Cheats DBD 2026', it: 'Cheat DBD 2026', nl: 'DBD Hacks 2026', pl: 'Cheaty DBD 2026', ru: 'Читы DBD 2026', tr: 'DBD Hileleri 2026', ar: 'غش DBD 2026', ja: 'DBD Hacks 2026', ko: 'DBD Hacks 2026', zh: 'DBD作弊 2026', hi: 'DBD Hacks 2026', id: 'Cheat DBD 2026', th: 'DBD Hacks 2026', vi: 'Cheat DBD 2026', uk: 'Чіти DBD 2026', cs: 'DBD cheaty 2026', ro: 'Cheats DBD 2026', sv: 'DBD Hacks 2026' },
	hacks: { en: 'DBD Hacks', es: 'Trucos DBD', fr: 'Triches DBD', de: 'DBD Hacks', pt: 'Cheats DBD', it: 'Cheat DBD', nl: 'DBD Hacks', pl: 'Cheaty DBD', ru: 'Читы DBD', tr: 'DBD Hileleri', ar: 'غش DBD', ja: 'DBD Hacks', ko: 'DBD Hacks', zh: 'DBD作弊', hi: 'DBD Hacks', id: 'Cheat DBD', th: 'DBD Hacks', vi: 'Cheat DBD', uk: 'Чіти DBD', cs: 'DBD cheaty', ro: 'Cheats DBD', sv: 'DBD Hacks' },
	'cheat-download': { en: 'DBD Cheat Download', es: 'Descarga DBD Hacks', fr: 'Téléchargement DBD Hacks', de: 'DBD Cheat Download', pt: 'Download DBD Hacks', it: 'Download DBD Hacks', nl: 'DBD Cheat Download', pl: 'Pobieranie DBD Hacks', ru: 'Скачать DBD Hacks', tr: 'DBD Hile İndir', ar: 'تحميل DBD Hacks', ja: 'DBD Cheat Download', ko: 'DBD Cheat Download', zh: 'DBD作弊下载', hi: 'DBD Cheat Download', id: 'Download Cheat DBD', th: 'ดาวน์โหลด DBD Hacks', vi: 'Tải Cheat DBD', uk: 'Завантаження DBD Hacks', cs: 'Stáhnout DBD Hacks', ro: 'Descărcare DBD Hacks', sv: 'DBD Cheat Download' },
	'mod-menu': { en: 'DBD Mod Menu', es: 'Menú mod DBD', fr: 'Menu mod DBD', de: 'DBD Mod-Menü', pt: 'Menu mod DBD', it: 'Mod menu DBD', nl: 'DBD Mod Menu', pl: 'Mod menu DBD', ru: 'Мод-меню DBD', tr: 'DBD Mod Menü', ar: 'قائمة مود DBD', ja: 'DBD Mod Menu', ko: 'DBD 모드 메뉴', zh: 'DBD修改菜单', hi: 'DBD Mod Menu', id: 'Menu mod DBD', th: 'เมนูมอด DBD', vi: 'Mod menu DBD', uk: 'Мод-меню DBD', cs: 'DBD mod menu', ro: 'Meniu mod DBD', sv: 'DBD Mod-meny' },
	'skill-check': { en: 'DBD Soft Aim', es: 'Aimbot DBD', fr: 'Aimbot DBD', de: 'DBD Soft Aim', pt: 'Aimbot DBD', it: 'Aimbot DBD', nl: 'DBD Soft Aim', pl: 'Aimbot DBD', ru: 'Aimbot DBD', tr: 'DBD Soft Aim', ar: 'Aimbot DBD', ja: 'DBD Soft Aim', ko: 'DBD Soft Aim', zh: 'DBD Soft Aim', hi: 'DBD Soft Aim', id: 'Aimbot DBD', th: 'DBD Soft Aim', vi: 'Aimbot DBD', uk: 'Aimbot DBD', cs: 'DBD Soft Aim', ro: 'Aimbot DBD', sv: 'DBD Soft Aim' },
	'best-cheats': { en: 'Best DBD Hacks', es: 'Mejores trucos DBD', fr: 'Meilleures triches DBD', de: 'Beste DBD Hacks', pt: 'Melhores cheats DBD', it: 'Migliori cheat DBD', nl: 'Beste DBD Hacks', pl: 'Najlepsze cheaty DBD', ru: 'Лучшие читы DBD', tr: 'En İyi DBD Hileleri', ar: 'أفضل غش DBD', ja: '最強DBDチート', ko: '최고의 DBD 치트', zh: '最佳DBD作弊', hi: 'सर्वश्रेष्ठ DBD Hacks', id: 'Cheat DBD terbaik', th: 'Cheat DBD ที่ดีที่สุด', vi: 'Cheat DBD tốt nhất', uk: 'Найкращі чіти DBD', cs: 'Nejlepší DBD cheaty', ro: 'Cele mai bune cheats DBD', sv: 'Bästa DBD Hacks' },
	'aimbot-hack': { en: 'DBD Aimbot Hack', es: 'Hack aimbot DBD', fr: 'Hack aimbot DBD', de: 'DBD Aimbot Hack', pt: 'Hack aimbot DBD', it: 'Hack aimbot DBD', nl: 'DBD Aimbot Hack', pl: 'Hack aimbot DBD', ru: 'Хак aimbot DBD', tr: 'DBD Aimbot Hilesi', ar: 'هاك Aimbot DBD', ja: 'DBD Aimbot Hack', ko: 'DBD 에임봇 핵', zh: 'DBD自瞄外挂', hi: 'DBD Aimbot Hack', id: 'Hack aimbot DBD', th: 'Hack Aimbot DBD', vi: 'Hack aimbot DBD', uk: 'Хак aimbot DBD', cs: 'DBD aimbot hack', ro: 'Hack aimbot DBD', sv: 'DBD Aimbot Hack' },
	'esp-hack': { en: 'DBD ESP Hack', es: 'Hack ESP DBD', fr: 'Hack ESP DBD', de: 'DBD ESP Hack', pt: 'Hack ESP DBD', it: 'Hack ESP DBD', nl: 'DBD ESP Hack', pl: 'Hack ESP DBD', ru: 'Хак ESP DBD', tr: 'DBD ESP Hilesi', ar: 'هاك ESP DBD', ja: 'DBD ESP Hack', ko: 'DBD ESP 핵', zh: 'DBD ESP外挂', hi: 'DBD ESP Hack', id: 'Hack ESP DBD', th: 'Hack ESP DBD', vi: 'Hack ESP DBD', uk: 'Хак ESP DBD', cs: 'DBD ESP hack', ro: 'Hack ESP DBD', sv: 'DBD ESP Hack' },
	'unlock-all': { en: 'DBD Unlock All', es: 'Unlock all DBD', fr: 'Unlock all DBD', de: 'DBD Unlock All', pt: 'Unlock all DBD', it: 'Unlock all DBD', nl: 'DBD Unlock All', pl: 'Unlock all DBD', ru: 'Unlock all DBD', tr: 'DBD Unlock All', ar: 'Unlock all DBD', ja: 'DBD Unlock All', ko: 'DBD Unlock All', zh: 'DBD Unlock All', hi: 'DBD Unlock All', id: 'Unlock all DBD', th: 'DBD Unlock All', vi: 'Unlock all DBD', uk: 'Unlock all DBD', cs: 'DBD Unlock All', ro: 'Unlock all DBD', sv: 'DBD Unlock All' },
};

const CTA2_HREF = {
	'dbd-esp': '/dbd-cheats/',
	'dbd-aimbot': '/dbd-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/dbd-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/dbd-cheats/',
	wallhack: '/dbd-esp/',
	'world-esp': '/dbd-esp/',
	eac: '/updates/',
	'cheats-2026': '/dbd-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'skill-check': '/dbd-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/dbd-aimbot/',
	'esp-hack': '/dbd-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripFromMeta(`${h1} | DBD Hacks`)),
		description: clampDesc(stripFromMeta(`${h1} for DBD Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for dbdhacks.net and Dead by Daylight licenses.`),
		imageAlt: 'dead by daylight cheats',
		galleryTitle: 'dead by daylight cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email,  order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by  checkout — not stored on dbdhacks.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@dbdhacks.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
