import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Gallery',
		title: 'Dead By Daylight Cheats Gallery',
		subtitle: 'Mod menu, ESP overlays, and trial gameplay from DBD Hacks on PC.',
		lead: 'DBD Hacks helps you spot Survivors, Killers, loot, and exit gates with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'dead by daylight cheats esp', copy: 'See players through walls with dead by daylight cheats esp and wallhack overlays.' },
			{ title: 'dead by daylight cheats radar', copy: 'Track nearby threats with dead by daylight cheats radar before you push or exit gate.' },
			{ title: 'dead by daylight cheats aimbot', copy: 'Use aimbot and aimbot controls tuned for DBD trials on Windows PC.' },
		],
		updatesLabel: 'dead by daylight cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'DBD Hacks',
		title: 'Galería Dead by Daylight',
		subtitle: 'Visuales de Dead by Daylight con loadouts, peleas de escuadrón y combate trial — junto a herramientas ESP, radar y Aimbot.',
		lead: 'DBD Hacks está pensado para el loop BR de Dead by Daylight: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al exit gate.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Autohaven Wreckers y killer-side para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Dead by Daylight', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones DBD Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'DBD Hacks',
		title: 'Galerie Dead by Daylight',
		subtitle: 'Visuels Dead by Daylight — loadouts, combats d\'escouade et trial — avec ESP, radar et Aimbot.',
		lead: 'DBD Hacks suit la boucle BR de Dead by Daylight : lire la carte, suivre les escouades, loot et survivre au exit gate.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Autohaven Wreckers et killer-side pour choisir vos chases.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Dead by Daylight', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour DBD Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight Galerie',
		subtitle: 'Dead by Daylight-Bilder zu Loadouts, Squad-Kämpfen und trial — mit ESP, Radar und Aimbot.',
		lead: 'DBD Hacks passt zur Raid-Schleife von Dead by Daylight: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Autohaven Wreckers und killer-side für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Dead by Daylight Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'DBD Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'DBD Hacks',
		title: 'Galeria Dead by Daylight',
		subtitle: 'Visuais de Dead by Daylight com loadouts, combates de eteamrão e trial — com ESP, radar e Aimbot.',
		lead: 'DBD Hacks segue o loop BR do Dead by Daylight: ler o mapa, rastrear eteamrões, lootar e sobreviver ao exit gate.',
		highlights: [
			{ title: 'ESP de players e eteamrões', copy: 'Detecte players inimigos em Autohaven Wreckers e killer-side para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Dead by Daylight', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações DBD Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'DBD Hacks',
		title: 'Galleria Dead by Daylight',
		subtitle: 'Immagini Dead by Daylight — loadout, scontri di teamra e trial — con ESP, radar e Aimbot.',
		lead: 'DBD Hacks è pensato per il loop BR di Dead by Daylight: leggere la mappa, tracciare teamre nemiche, loot e sopravvivere al exit gate.',
		highlights: [
			{ title: 'ESP playeri e teamre', copy: 'Individua playeri nemici su Autohaven Wreckers e killer-side per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Dead by Daylight', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti DBD Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight galerij',
		subtitle: 'Dead by Daylight-beelden van loadouts, teamgevechten en trial — met ESP, radar en Aimbot.',
		lead: 'DBD Hacks volgt de trial loop va Dead by Daylight: kaart lezen, vijandelijke teams volgen, looten en de exit gate overleven.',
		highlights: [
			{ title: 'Player- & team-ESP', copy: 'Spot vijandelijke players op Autohaven Wreckers en killer-side voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Dead by Daylight Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'DBD Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'DBD Hacks',
		title: 'Galeria Dead by Daylight',
		subtitle: 'Grafiki Dead by Daylight — loadouty, walki drużynowe i trial — z ESP, radar i Aimbot.',
		lead: 'DBD Hacks pasuje do pętli BR Dead by Daylight: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj exit gate.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Autohaven Wreckers i killer-side dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Dead by Daylight', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje DBD Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'DBD Hacks',
		title: 'Галерея Dead by Daylight',
		subtitle: 'Визуалы Dead by Daylight — лоадауты, бои отрядов и trial — с ESP, радаром и Aimbot.',
		lead: 'DBD Hacks создан для рейд-циклу Dead by Daylight: читать карту, отслеживать вражеские отряды, лут и выживать в exit gate.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Autohaven Wreckers и killer-side для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Dead by Daylight', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления DBD Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight galerisi',
		subtitle: 'Loadout, takım savaşları ve trial görselleri — ESP, radar ve Aimbot ile.',
		lead: 'DBD Hacks, Dead by Daylight BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve exit gate\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Autohaven Wreckers ve killer-side\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Dead by Daylight Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'DBD Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'DBD Hacks',
		title: 'معرض Dead by Daylight',
		subtitle: 'صور Dead by Daylight — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'DBD Hacks مبني لحلقة BR في Dead by Daylight: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في exit gate.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Autohaven Wreckers وkiller-side لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Dead by Daylight', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات DBD Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのDead by Daylightビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'DBD HacksはDead by DaylightのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてexit gateを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Autohaven Wreckersとkiller-sideで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Dead by Daylightエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'DBD Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Dead by Daylight 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'DBD Hacks는 Dead by Daylight BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, exit gate 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Autohaven Wreckers와 killer-side에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Dead by Daylight 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'DBD Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight 图库',
		subtitle: 'Dead by Daylight 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'DBD Hacks 为 Dead by Daylight BR 循环设计：读图、追踪敌方小队、搜刮并在 exit gate 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Autohaven Wreckers 和 killer-side 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Dead by Daylight 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'DBD Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight गैलरी',
		subtitle: 'Loadout, team fights और trial visuals — ESP, radar और Aimbot के साथ।',
		lead: 'DBD Hacks Dead by Daylight BR loop के लिए: map पढ़ें, enemy teams track करें, loot करें और exit gate survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Autohaven Wreckers और killer-side पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Dead by Daylight Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'DBD Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'DBD Hacks',
		title: 'Galeri Dead by Daylight',
		subtitle: 'Visual Dead by Daylight — loadout, pertempuran team, dan trial — dengan ESP, radar, dan Aimbot.',
		lead: 'DBD Hacks untuk loop BR Dead by Daylight: baca peta, lacak team musuh, loot, dan selamat di exit gate.',
		highlights: [
			{ title: 'ESP player & team', copy: 'Deteksi player musuh di Autohaven Wreckers dan killer-side untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Dead by Daylight', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update DBD Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'DBD Hacks',
		title: 'แกลเลอรี Dead by Daylight',
		subtitle: 'ภาพ Dead by Daylight — loadout การต่อสู้ทีม และ trial — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'DBD Hacks สำหรับลูป BR ของ Dead by Daylight: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด exit gate',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Autohaven Wreckers และ killer-side เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Dead by Daylight', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต DBD Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'DBD Hacks',
		title: 'Thư viện Dead by Daylight',
		subtitle: 'Hình ảnh Dead by Daylight — loadout, chiến đấu team và trial — với ESP, radar và Aimbot.',
		lead: 'DBD Hacks cho vòng BR Dead by Daylight: đọc bản đồ, theo dõi team địch, loot và sống sót exit gate.',
		highlights: [
			{ title: 'ESP player & team', copy: 'Phát hiện player địch trên Autohaven Wreckers và killer-side để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Dead by Daylight', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật DBD Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'DBD Hacks',
		title: 'Галерея Dead by Daylight',
		subtitle: 'Візуали Dead by Daylight — loadout, бої загонів і trial — з ESP, радаром і Aimbot.',
		lead: 'DBD Hacks для рейд-циклу Dead by Daylight: читати карту, відстежувати ворожі загони, лут і виживати в exit gate.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Autohaven Wreckers і killer-side для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Dead by Daylight', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення DBD Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'DBD Hacks',
		title: 'Galerie Dead by Daylight',
		subtitle: 'Dead by Daylight vizuály — loadouty, team souboje a trial — s ESP, radarem a Aimbot.',
		lead: 'DBD Hacks pro BR smyčku Dead by Daylight: číst mapu, sledovat nepřátelské teamy, loot a přežít exit gate.',
		highlights: [
			{ title: 'ESP players a teamů', copy: 'Spozorujte nepřátelské operátory na Autohaven Wreckers a killer-side pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Dead by Daylight', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace DBD Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'DBD Hacks',
		title: 'Galerie Dead by Daylight',
		subtitle: 'Vizualuri Dead by Daylight — loadout, lupte de team și trial — cu ESP, radar și Aimbot.',
		lead: 'DBD Hacks pentru bucla BR Dead by Daylight: citește harta, urmărește team-uri inamice, loot și supraviețuiește exit gate.',
		highlights: [
			{ title: 'ESP playeri și team-uri', copy: 'Detectează playeri inamici pe Autohaven Wreckers și killer-side pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Dead by Daylight', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări DBD Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'DBD Hacks',
		title: 'Dead by Daylight galleri',
		subtitle: 'Dead by Daylight-bilder — loadouts, teamstrider och trial — med ESP, radar och Aimbot.',
		lead: 'DBD Hacks för Dead by Daylight:s trial loop: läs kartan, spåra fiendeteams, loota och överlev exit gate.',
		highlights: [
			{ title: 'Player- & team-ESP', copy: 'Spotta fiendeplayerer på Autohaven Wreckers och killer-side för bättre loopsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Dead by Daylight Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'DBD Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
