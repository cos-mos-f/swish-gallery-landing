const title = "プライバシーポリシー | Swish Gallery";
const description = "Swish Galleryのプライバシーポリシー。";

export const privacyPolicyCopy = {
  meta: {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    canonicalUrl: "https://gallery-app.swishnote.com/privacy-policy/",
    ogImage: "https://gallery-app.swishnote.com/images/ogp.png",
    themeColor: "#f5ede3",
  },
  accessibility: {
    skipLink: "メインコンテンツへスキップ",
  },
  links: {
    store: "https://apps.microsoft.com/detail/9N7GJKX6BSZW",
    developerX: "https://x.com/cos_mos_f",
    swishNote: "https://swishnote.com",
    contact: "https://nani.now/ja/contact",
  },
  header: {
    logoAlt: "Swish Gallery ロゴ",
    brand: "Swish Gallery",
    navAriaLabel: "メインナビゲーション",
    homeUrl: "/",
    navItems: [
      { label: "機能", href: "/#features" },
      { label: "ダウンロード", href: "/#download" },
      { label: "リリースノート", href: "/release-notes/" },
    ],
    languageLabel: "言語",
    languageSwitch: {
      current: "日本語",
      other: "English",
      otherUrl: "/en/privacy-policy/",
    },
  },
  page: {
    title: "プライバシーポリシー",
    lead: "個人情報の取り扱いについて説明します。",
    body: ["現在は準備中です。"],
  },
  footer: {
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
};
