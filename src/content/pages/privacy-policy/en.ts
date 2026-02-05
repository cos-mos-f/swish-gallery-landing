import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "Privacy Policy | Swish Gallery";
const description = "The privacy policy for Swish Gallery.";

export const privacyPolicyCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/en/privacy-policy/",
  }),
  accessibility: getAccessibility("en"),
  links: getLinks(),
  header: buildHeader({
    locale: "en",
    otherUrl: "/privacy-policy/",
  }),
  page: {
    title: "Privacy Policy",
    lead: "How we handle personal information.",
    body: ["Currently in preparation."],
  },
  footer: getFooter("en"),
};
