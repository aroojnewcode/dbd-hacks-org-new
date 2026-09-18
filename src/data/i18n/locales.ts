export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global DBD Hacks blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'DBD Hacks Blog | Raid Guides',
		blogDescription:
			'Dead by Daylight guides — trial tips, ESP, aimbot notes, perk builds, and EAC update coverage. English blog at dbdhacks.net/blog/.',
		blogH1: 'DBD Hacks Intel',
		blogIntro:
			'Short Dead by Daylight guides for Survivor and Killer sides. Pair these tips with the DBD Hacks product pages when you need ESP, aimbot, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'DBD Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog DBD Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de DBD Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Dead by Daylight en PC Windows.',
		blogH1: 'Blog DBD Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos Dead by Daylight indetectables, ESP wallhack, world esp, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Dead by Daylight relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio DBD Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog DBD Hacks 2026 | Guides en 22 langues',
		blogDescription:
			'Blog DBD Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour Dead by Daylight sur PC Windows.',
		blogH1: 'Blog DBD Hacks — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Dead by Daylight indétectables, ESP wallhack, world esp, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Dead by Daylight associés',
		allPosts: 'Tous les articles',
		home: 'Accueil DBD Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'DBD Hacks Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'DBD Hacks Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Dead by Daylight auf Windows PC.',
		blogH1: 'DBD Hacks Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected DBD Hacks, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Dead by Daylight Guides',
		allPosts: 'Alle Beiträge',
		home: 'DBD Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog DBD Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog DBD Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Dead by Daylight no PC.',
		blogH1: 'Blog DBD Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats Dead by Daylight indetectáveis, ESP wallhack, world esp, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Dead by Daylight relacionados',
		allPosts: 'Todos os posts',
		home: 'Início DBD Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog DBD Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog DBD Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per Dead by Daylight su PC Windows.',
		blogH1: 'Blog DBD Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat Dead by Daylight indetectable, ESP wallhack, world esp, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Dead by Daylight correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home DBD Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'DBD Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'DBD Hacks blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Dead by Daylight op Windows PC.',
		blogH1: 'DBD Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected DBD cheats, ESP wallhack, world esp, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Dead by Daylight gidsen',
		allPosts: 'Alle posts',
		home: 'DBD Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog DBD Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog DBD Hacks z poradnikami undetected ESP, wallhack, radar i Aimbot dla Dead by Daylight na PC.',
		blogH1: 'Blog DBD Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Dead by Daylight, ESP wallhack, world esp, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Dead by Daylight',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna DBD Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог DBD Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог DBD Hacks: undetected ESP, wallhack, radar и Aimbot для Dead by Daylight на Windows PC.',
		blogH1: 'Блог DBD Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Dead by Daylight, ESP wallhack, world esp, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Dead by Daylight',
		allPosts: 'Все статьи',
		home: 'Главная DBD Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'DBD Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'DBD Hacks blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Dead by Daylight Windows PC.',
		blogH1: 'DBD Hacks Blog — Küresel rehberler',
		blogIntro:
			'Undetected Dead by Daylight hileleri, ESP wallhack, world esp, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Dead by Daylight rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'DBD Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة DBD Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة DBD Hacks: غش undetected وESP wallhack ورadar وAimbot لـ Dead by Daylight على Windows PC.',
		blogH1: 'مدونة DBD Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Dead by Daylight undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Dead by Daylight ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية DBD Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'DBD Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'DBD Hacksブログ：undetected ESP、wallhack、radar、Aimbotガイド。Dead by Daylight Windows PC向け。',
		blogH1: 'DBD Hacks ブログ — グローバルガイド',
		blogIntro:
			'undetected Dead by Daylightチート、ESP wallhack、world esp、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Dead by Daylightガイド',
		allPosts: 'すべての記事',
		home: 'DBD Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'DBD Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'DBD Hacks 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Dead by Daylight Windows PC.',
		blogH1: 'DBD Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Dead by Daylight 치트, ESP wallhack, world esp, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Dead by Daylight 가이드',
		allPosts: '모든 게시물',
		home: 'DBD Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'DBD Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'DBD Hacks博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Dead by Daylight Windows PC。',
		blogH1: 'DBD Hacks 博客 — 全球指南',
		blogIntro:
			'undetected Dead by Daylight作弊、ESP wallhack、world esp、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Dead by Daylight指南',
		allPosts: '所有文章',
		home: 'DBD Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'DBD Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'DBD Hacks ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Dead by Daylight Windows PC के लिए।',
		blogH1: 'DBD Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected DBD cheats, ESP wallhack, world esp, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Dead by Daylight गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'DBD Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog DBD Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog DBD Hacks: panduan undetected ESP, wallhack, radar dan Aimbot untuk Dead by Daylight di PC Windows.',
		blogH1: 'Blog DBD Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat Dead by Daylight undetected, ESP wallhack, world esp, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua Dead by Daylight terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda DBD Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก DBD Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก DBD Hacks: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Dead by Daylight บน PC',
		blogH1: 'บล็อก DBD Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Dead by Daylight undetected, ESP wallhack, world esp, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Dead by Daylight ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก DBD Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog DBD Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog DBD Hacks: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Dead by Daylight trên PC.',
		blogH1: 'Blog DBD Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Dead by Daylight undetected, ESP wallhack, world esp, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Dead by Daylight liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ DBD Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог DBD Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог DBD Hacks: undetected ESP, wallhack, radar та Aimbot для Dead by Daylight на Windows PC.',
		blogH1: 'Блог DBD Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Dead by Daylight, ESP wallhack, world esp, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Dead by Daylight",
		allPosts: 'Усі статті',
		home: 'Головна DBD Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog DBD Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog DBD Hacks: undetected ESP, wallhack, radar a Aimbot pro Dead by Daylight na Windows PC.',
		blogH1: 'Blog DBD Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected DBD cheaty, ESP wallhack, world esp, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Dead by Daylight průvodce',
		allPosts: 'Všechny články',
		home: 'Domů DBD Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog DBD Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog DBD Hacks: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Dead by Daylight pe PC.',
		blogH1: 'Blog DBD Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Dead by Daylight undetected, ESP wallhack, world esp, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Dead by Daylight related',
		allPosts: 'Toate articolele',
		home: 'Acasă DBD Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'DBD Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'DBD Hacks blogg med undetected ESP, wallhack, radar och Aimbot guider för Dead by Daylight på PC.',
		blogH1: 'DBD Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected DBD cheats, ESP wallhack, world esp, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Dead by Daylight guider',
		allPosts: 'Alla inlägg',
		home: 'DBD Hacks hem',
		language: 'Språk',
	},
};
