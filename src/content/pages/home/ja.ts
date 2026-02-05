import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "SWISH GALLERY | 絵描きのための資料管理アプリ";
const description =
  "サブモニターの無駄をなくす、絵描きのための作画資料管理アプリです。";

export const homeCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/",
  }),
  accessibility: getAccessibility("ja"),
  links: getLinks(),
  header: buildHeader({
    locale: "ja",
    otherUrl: "/en/",
    isHome: true,
  }),
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
      {
        label: "フォルダを追加するとすぐ一覧が出る様子",
        src: "/videos/フォルダ追加.mp4",
      },
      {
        label: "一覧からボードに画像を追加する様子",
        src: "/videos/一覧からボード.mp4",
      },
      {
        label: "画像を別ウィンドウに開いて表示する様子",
        src: "/videos/別ウィンドウ.mp4",
      },
    ],
  },
  features: {
    title: "機能の紹介",
    items: [
      {
        title: "画面を無駄なく利用",
        mediaLabel: "一覧画面と画像ウィンドウ",
        mediaSrc: "/videos/ギャラリー.mp4",
        bullets: [
          "リバー表示とグリッド表示で無駄なく閲覧",
          "画面の90%以上を画像が占有",
        ],
      },
      {
        title: "資料フォルダをそのまま追加",
        mediaLabel: "フォルダの追加を行うgif動画",
        mediaSrc: "/videos/フォルダ追加.mp4",
        bullets: [
          "資料のフォルダをそのまま一覧表示",
          "リファレンスボードへも簡単アクセス",
        ],
      },
      {
        title: "見たい画像を自由に配置",
        mediaLabel: "リファレンスボードへの画像配置",
        mediaSrc: "/videos/ボード.mp4",
        bullets: [
          "ドラッグ＆ドロップで自由に配置",
          "サイン章画像をまとめて比較",
        ],
      },
      {
        title: "資料を柔軟に整理",
        mediaLabel: "ブックマーク・ラベル",
        mediaSrc: "/videos/ブックマークとラベル.mp4",
        bullets: [
          "２種類の管理方法で柔軟に整理",
          "ブックマーク素早く保存",
          "ラベルでカテゴリ分け",
        ],
      },
      {
        title: "便利な画像操作機能",
        mediaLabel: "左右反転とグレースケール",
        mediaSrc: "/videos/輝度と回転.mp4",
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
  footer: getFooter("ja"),
};
