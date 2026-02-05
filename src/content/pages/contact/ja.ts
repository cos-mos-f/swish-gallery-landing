import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "お問い合わせ | Swish Gallery";
const description = "Swish Galleryへのお問い合わせ。";

export const contactCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/contact/",
  }),
  accessibility: getAccessibility("ja"),
  links: getLinks(),
  header: buildHeader({
    locale: "ja",
    otherUrl: "/en/contact/",
  }),
  page: {
    title: "お問い合わせ",
    lead: "ご質問やご要望、不具合報告はこちらからお願いします。",
    body: ["フォームを開いて詳細を送信してください。"],
    cta: {
      label: "お問い合わせフォームを開く",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfW6YaHjNSy4eKL7cpYdM-Kk2KatAh4oqZCrA9-kh3h4o9HRg/viewform?usp=dialog",
    },
  },
  footer: getFooter("ja"),
};
