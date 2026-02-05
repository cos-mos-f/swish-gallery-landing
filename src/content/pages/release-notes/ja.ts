import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "リリースノート | Swish Gallery";
const description = "Swish Galleryの更新情報をまとめます。";

export const releaseNotesCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/release-notes/",
  }),
  accessibility: getAccessibility("ja"),
  links: getLinks(),
  header: buildHeader({
    locale: "ja",
    otherUrl: "/en/release-notes/",
  }),
  page: {
    title: "リリースノート",
    lead: "[ 最新の更新内容 ]",
    body: [
      "2026.02.06 (v0.0.1) - アップデート",
      "追加機能：",
      "・ラベル機能を追加しました。",
      "・リファレンスボードが複数作成できるようになりました。",
      "・ブックマークの色分けと並び替えが可能になりました。",
      "　",
      "2025.12.22 (v0.0.0) - 初回リリース"
    ],
  },
  footer: getFooter("ja"),
};
