const title = "SWISH GALLERY | 絵描きのための資料管理アプリ";
const description =
  "サブモニターを活かす資料管理アプリ。画像整理から比較まで、絵描きの作業を効率化します。";

export const homeCopy = {
  meta: {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    canonicalUrl: "https://gallery-app.swishnote.com/",
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
      { label: "機能", href: "#features" },
      { label: "ダウンロード", href: "#download" },
      { label: "リリースノート", href: "/release-notes/" },
    ],
    languageLabel: "言語",
    languageSwitch: {
      current: "日本語",
      other: "English",
      otherUrl: "/en/",
    },
  },
  hero: {
    title: "サブモニターの無駄をなくす",
    subtitle: "絵描きのための資料管理アプリ",
    ctaLabel: "無料で試す",
    ctaUrl: "https://apps.microsoft.com/detail/9N7GJKX6BSZW",
    mediaAlt: "作業中のディスプレイの写真",
    mediaLabel: "作業中のディスプレイの写真",
    platformNote: "for Windows 10/11",
    priceNote: "30 日間 無料 / 以降 ¥480（税込・買い切り）",
    learnMore: "もっと詳しく",
  },
  snapshot: {
    title: "スナップショット",
    items: [
      "フォルダを追加するとすぐ一覧が出る様子",
      "一覧からボードに画像を追加する様子",
      "画像を別ウィンドウに開いて表示する様子",
    ],
  },
  features: {
    title: "機能の紹介",
    items: [
      {
        title: "画面を無駄なく利用",
        mediaLabel: "一覧画面と画像ウィンドウのgif動画",
        bullets: [
          "リバー表示とグリッド表示で無駄なく閲覧",
          "画面の90%以上を画像が占有",
        ],
      },
      {
        title: "資料フォルダをそのまま追加",
        mediaLabel: "フォルダの追加を行うgif動画",
        bullets: [
          "資料のフォルダをそのまま一覧表示",
          "リファレンスボードへも簡単アクセス",
        ],
      },
      {
        title: "見たい画像を自由に配置",
        mediaLabel: "リファレンスボードへの画像配置のgif動画",
        bullets: [
          "ドラッグ＆ドロップで自由に配置",
          "サイン章画像をまとめて比較",
        ],
      },
      {
        title: "資料を柔軟に整理",
        mediaLabel: "ブックマーク・ラベルのgif動画",
        bullets: [
          "２種類の管理方法で柔軟に整理",
          "ブックマーク素早く保存",
          "ラベルでカテゴリ分け",
        ],
      },
      {
        title: "便利な画像操作機能",
        mediaLabel: "左右反転とグレースケールのgif動画",
        bullets: [
          "左右反転で崩れをチェック",
          "グレースケールで明暗を確認",
          "グレースケール変換は輝度を維持する絵描き仕様",
        ],
      },
    ],
  },
  download: {
    title: "ダウンロード",
    heading: "創作環境をもっと自由に。",
    body: "まずは 30 日間無料でお試しください。",
    ctaLabel: "Microsoft Store でダウンロード",
    ctaUrl: "https://apps.microsoft.com/detail/9N7GJKX6BSZW",
    platformNote: "for Windows 10/11",
    priceNote: "30 日間 無料 / 以降 ¥480（税込・買い切り）",
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
