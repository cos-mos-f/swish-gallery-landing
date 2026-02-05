import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "Open Source Licenses | Swish Gallery";
const description = "Open source licenses used by Swish Gallery.";

export const openSourceLicensesCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/en/open-source-licenses/",
  }),
  accessibility: getAccessibility("en"),
  links: getLinks(),
  header: buildHeader({
    locale: "en",
    otherUrl: "/open-source-licenses/",
  }),
  page: {
    title: "Open Source Licenses",
    lead: "License information for the libraries we use.",
    body: ["Currently in preparation."],
  },
  footer: getFooter("en"),
};
