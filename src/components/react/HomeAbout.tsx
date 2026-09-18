import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
	checkoutUrl: string;
};

const QUICK_LINKS = [
	{ href: '/dbd-cheats/', labelKey: 'home.aboutPillar' },
	{ href: '/dbd-esp/', labelKey: 'home.aboutEsp' },
	{ href: '/dbd-aimbot/', labelKey: 'home.aboutAimbot' },
	{ href: '/updates/', labelKey: 'home.aboutUndetected' },
] as const;

function HomeAboutInner({ checkoutUrl }: Pick<Props, 'checkoutUrl'>) {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h1 id="home-about-title" className="home-about__title">
					{t('home.aboutTitle')}
				</h1>
				<p className="home-about__lede">
					{t('home.aboutP1Before')}
					<a href={checkoutUrl} rel="noopener noreferrer">
						{t('home.aboutStore')}
					</a>
					{t('home.aboutP1Mid')}
					<a href="/updates/">{t('home.aboutStatus')}</a>
					{t('home.aboutP1After')}
				</p>
			</header>

			<nav className="home-about__quick" aria-label={t('home.aboutQuickAria')}>
				<p className="home-about__quick-lead">{t('home.aboutQuickLead')}</p>
				<ul className="home-about__pills">
					{QUICK_LINKS.map((link) => (
						<li key={link.href}>
							<a href={link.href}>
								<span>{t(link.labelKey)}</span>
								<span className="home-about__pill-arrow" aria-hidden="true" />
							</a>
						</li>
					))}
				</ul>
			</nav>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner checkoutUrl={props.checkoutUrl} />
		</I18nProvider>
	);
}
