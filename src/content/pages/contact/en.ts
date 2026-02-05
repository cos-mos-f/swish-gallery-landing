import {
  buildHeader,
  buildMeta,
  getAccessibility,
  getFooter,
  getLinks,
} from "../../shared/page-chrome";

const title = "Contact | Swish Gallery";
const description = "Contact Swish Gallery.";

export const contactCopy = {
  meta: buildMeta({
    title,
    description,
    canonicalUrl: "https://gallery-app.swishnote.com/en/contact/",
  }),
  accessibility: getAccessibility("en"),
  links: getLinks(),
  header: buildHeader({
    locale: "en",
    otherUrl: "/contact/",
  }),
  page: {
    title: "Contact",
    lead: "Questions, feedback, or bug reports? Reach out here.",
    body: ["Open the form and send us the details."],
    cta: {
      label: "Open the contact form",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSfW6YaHjNSy4eKL7cpYdM-Kk2KatAh4oqZCrA9-kh3h4o9HRg/viewform?usp=dialog",
    },
  },
  footer: getFooter("en"),
};
