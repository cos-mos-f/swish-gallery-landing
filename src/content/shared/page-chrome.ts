type Locale = "en" | "ja";

type HeaderOptions = {
  locale: Locale;
  otherUrl: string;
  isHome?: boolean;
};

type MetaOptions = {
  title: string;
  description: string;
  canonicalUrl: string;
};

const headerCopy = {
  en: {
    logoAlt: "Swish Gallery logo",
    brand: "Swish Gallery",
    navAriaLabel: "Main navigation",
    languageLabel: "Language",
    navItems: {
      features: "Features",
      download: "Download",
      releaseNotes: "Release Notes",
    },
    languageSwitch: {
      current: "English",
      other: "日本語",
    },
  },
  ja: {
    logoAlt: "Swish Gallery ロゴ",
    brand: "Swish Gallery",
    navAriaLabel: "メインナビゲーション",
    languageLabel: "言語",
    navItems: {
      features: "機能",
      download: "ダウンロード",
      releaseNotes: "リリースノート",
    },
    languageSwitch: {
      current: "日本語",
      other: "English",
    },
  },
} as const;

const footerCopy = {
  en: {
    developerLabel: "Developer",
    developerName: "SWISH NOTE",
    links: [
      { label: "Developer X", href: "https://x.com/cos_mos_f" },
      { label: "Privacy Policy", href: "/en/privacy-policy/" },
      { label: "Terms of Service", href: "/en/terms/" },
      { label: "Open Source Licenses", href: "/en/open-source-licenses/" },
      { label: "Updates", href: "/en/release-notes/" },
      { label: "Contact", href: "/en/contact/" },
    ],
    copyright: "© 2025 SWISH GALLERY from SWISH NOTE",
  },
  ja: {
    developerLabel: "開発元",
    developerName: "SWISH NOTE",
    links: [
      { label: "開発者X", href: "https://x.com/cos_mos_f" },
      { label: "プライバシーポリシー", href: "/privacy-policy/" },
      { label: "利用規約", href: "/terms/" },
      { label: "オープンソースライセンス", href: "/open-source-licenses/" },
      { label: "更新情報", href: "/release-notes/" },
      { label: "お問い合わせ", href: "/contact/" },
    ],
    copyright: "© 2025 SWISH GALLERY from SWISH NOTE",
  },
} as const;

const metaDefaults = {
  ogImage: "https://gallery-app.swishnote.com/images/ogp.png",
  themeColor: "#f5ede3",
} as const;

const sharedLinks = {
  store: "https://apps.microsoft.com/detail/9N7GJKX6BSZW",
  developerX: "https://x.com/cos_mos_f",
  swishNote: "https://swishnote.com",
  contact: "https://docs.google.com/forms/d/e/1FAIpQLSfW6YaHjNSy4eKL7cpYdM-Kk2KatAh4oqZCrA9-kh3h4o9HRg/viewform?usp=dialog",
} as const;

const accessibilityCopy = {
  en: {
    skipLink: "Skip to main content",
  },
  ja: {
    skipLink: "メインコンテンツへスキップ",
  },
} as const;

const getHomeUrl = (locale: Locale) => (locale === "en" ? "/en/" : "/");

const buildNavItems = (locale: Locale, isHome: boolean, homeUrl: string) => {
  const labels = headerCopy[locale].navItems;
  const featuresHref = isHome ? "#features" : `${homeUrl}#features`;
  const downloadHref = isHome ? "#download" : `${homeUrl}#download`;

  return [
    { label: labels.features, href: featuresHref },
    { label: labels.download, href: downloadHref },
    { label: labels.releaseNotes, href: `${homeUrl}release-notes/` },
  ];
};

export const buildHeader = ({ locale, otherUrl, isHome = false }: HeaderOptions) => {
  const homeUrl = getHomeUrl(locale);
  const labels = headerCopy[locale];

  return {
    logoAlt: labels.logoAlt,
    brand: labels.brand,
    navAriaLabel: labels.navAriaLabel,
    homeUrl,
    navItems: buildNavItems(locale, isHome, homeUrl),
    languageLabel: labels.languageLabel,
    languageSwitch: {
      current: labels.languageSwitch.current,
      other: labels.languageSwitch.other,
      otherUrl,
    },
  };
};

export const getFooter = (locale: Locale) => footerCopy[locale];

export const buildMeta = ({ title, description, canonicalUrl }: MetaOptions) => ({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
  canonicalUrl,
  ogImage: metaDefaults.ogImage,
  themeColor: metaDefaults.themeColor,
});

export const getLinks = () => sharedLinks;

export const getAccessibility = (locale: Locale) => accessibilityCopy[locale];
