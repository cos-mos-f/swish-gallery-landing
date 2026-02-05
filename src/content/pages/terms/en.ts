import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "Terms of Service | Swish Gallery";
const description = "The terms of service for Swish Gallery.";

export const termsCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/en/terms/",
  }),
  accessibility: getAccessibility("en"),
  links: getLinks(),
  header: buildHeader({
    locale: "en",
    otherUrl: "/terms/",
  }),
  page: {
    title: "Terms of Service",
    lead: "The conditions for using the service.",
    body: ["Currently in preparation."],
  },
  footer: getFooter("en"),
};
