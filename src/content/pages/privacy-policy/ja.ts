import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "プライバシーポリシー | Swish Gallery";
const description = "Swish Galleryのプライバシーポリシー。";

export const privacyPolicyCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/privacy-policy/",
  }),
  accessibility: getAccessibility("ja"),
  links: getLinks(),
  header: buildHeader({
    locale: "ja",
    otherUrl: "/en/privacy-policy/",
  }),
  page: {
    title: "プライバシーポリシー",
    lead: "個人情報の取り扱いについて説明します。",
    body: ["現在は準備中です。"],
  },
  footer: getFooter("ja"),
};
