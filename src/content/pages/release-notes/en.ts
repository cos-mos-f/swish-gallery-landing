import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "Release Notes | Swish Gallery";
const description = "Updates and release notes for Swish Gallery.";

export const releaseNotesCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/en/release-notes/",
  }),
  accessibility: getAccessibility("en"),
  links: getLinks(),
  header: buildHeader({
    locale: "en",
    otherUrl: "/release-notes/",
  }),
  page: {
    title: "Release Notes",
    lead: "We post the latest updates here.",
    body: ["Currently in preparation."],
  },
  footer: getFooter("en"),
};
