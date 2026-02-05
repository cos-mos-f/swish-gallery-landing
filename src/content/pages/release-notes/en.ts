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
body: [
      "2026.02.06 (v0.0.1) - Update",
      "Added Features:",
      "・Added a label function.",
      "・Multiple reference boards can now be created.",
      "・Bookmarks can now be color-coded and reordered.",
      "　",
      "2025.12.22 (v0.0.0) - Initial Release"
    ],
  },
  footer: getFooter("en"),
};
