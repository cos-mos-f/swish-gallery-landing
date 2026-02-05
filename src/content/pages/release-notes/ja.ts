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
    lead: "最新の更新内容を掲載します。",
    body: ["現在は準備中です。"],
  },
  footer: getFooter("ja"),
};
