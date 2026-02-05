import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "利用規約 | Swish Gallery";
const description = "Swish Galleryの利用規約。";

export const termsCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/terms/",
  }),
  accessibility: getAccessibility("ja"),
  links: getLinks(),
  header: buildHeader({
    locale: "ja",
    otherUrl: "/en/terms/",
  }),
  page: {
    title: "利用規約",
    lead: "サービスの利用条件を記載します。",
    body: ["現在は準備中です。"],
  },
  footer: getFooter("ja"),
};
