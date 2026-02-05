const title = "Privacy Policy | Swish Gallery";
const description = "The privacy policy for Swish Gallery.";

export const privacyPolicyCopy = {
  meta: {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    canonicalUrl: "https://gallery-app.swishnote.com/en/privacy-policy/",
    ogImage: "https://gallery-app.swishnote.com/images/ogp.png",
    themeColor: "#f5ede3",
  },
  accessibility: {
    skipLink: "Skip to main content",
  },
  links: {
    store: "https://apps.microsoft.com/detail/9N7GJKX6BSZW",
    developerX: "https://x.com/cos_mos_f",
    swishNote: "https://swishnote.com",
    contact: "https://nani.now/ja/contact",
  },
  header: {
    logoAlt: "Swish Gallery logo",
    brand: "Swish Gallery",
    navAriaLabel: "Main navigation",
    homeUrl: "/en/",
    navItems: [
      { label: "Features", href: "/en/#features" },
      { label: "Download", href: "/en/#download" },
      { label: "Release Notes", href: "/en/release-notes/" },
    ],
    languageLabel: "Language",
    languageSwitch: {
      current: "English",
      other: "日本語",
      otherUrl: "/privacy-policy/",
    },
  },
  page: {
    title: "Privacy Policy",
    lead: "How we handle personal information.",
    body: ["Currently in preparation."],
  },
  footer: {
    developerLabel: "Developer",
    developerName: "SWISH NOTE",
    links: [
      { label: "Developer X", href: "https://x.com/cos_mos_f" },
      { label: "Privacy Policy", href: "/en/privacy-policy/" },
      { label: "Terms of Service", href: "/en/terms/" },
      { label: "Open Source Licenses", href: "/en/open-source-licenses/" },
      { label: "Updates", href: "/en/release-notes/" },
      { label: "Contact", href: "/en/contact/" },
    ],
    copyright: "© 2025 SWISH GALLERY from SWISH NOTE",
  },
};
