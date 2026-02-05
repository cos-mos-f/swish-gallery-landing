import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "オープンソースライセンス | Swish Gallery";
const description = "Swish Galleryで利用しているオープンソースライセンス。";

export const openSourceLicensesCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/open-source-licenses/",
  }),
  accessibility: getAccessibility("ja"),
  links: getLinks(),
  header: buildHeader({
    locale: "ja",
    otherUrl: "/en/open-source-licenses/",
  }),
  page: {
    title: "オープンソースライセンス",
    lead: "使用しているライブラリのライセンス情報です。",
    body: ["現在は準備中です。"],
  },
  footer: getFooter("ja"),
};
