const title = "SWISH GALLERY | Reference Manager for Artists";
const description =
  "A reference manager that makes the most of a second monitor. Organize, compare, and manage images for drawing.";

export const homeCopy = {
  meta: {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterDescription: description,
    canonicalUrl: "https://gallery-app.swishnote.com/en/",
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
      { label: "Features", href: "#features" },
      { label: "Download", href: "#download" },
      { label: "Release Notes", href: "/en/release-notes/" },
    ],
    languageLabel: "Language",
    languageSwitch: {
      current: "English",
      other: "日本語",
      otherUrl: "/",
    },
  },
  hero: {
    title: "STOP WASTING YOUR SECOND MONITOR",
    subtitle: "REFERENCE MANAGEMENT APP FOR ARTISTS",
    ctaLabel: "Try it free",
    ctaUrl: "https://apps.microsoft.com/detail/9N7GJKX6BSZW",
    mediaAlt: "A photo of a working display",
    mediaLabel: "A photo of a working display",
    platformNote: "for Windows 10/11",
    priceNote: "30-day free trial / then \u00a5480 (tax included, one-time purchase)",    learnMore: "Learn More",  },
  snapshot: {
    title: "Snapshots",
    items: [
      {
        label: "Add a folder and the list appears instantly",
        src: "/videos/フォルダ追加.mp4",
      },
      {
        label: "Add images to the board from the list",
        src: "/videos/一覧からボード.mp4",
      },
      {
        label: "Open an image in a separate window",
        src: "/videos/別ウィンドウ.mp4",
      },
    ],
  },
  features: {
    title: "Features",
    items: [
      {
        title: "Use every pixel of your screen",
        mediaLabel: "the list view and image window",
        mediaSrc: "/videos/ギャラリー.mp4",
        bullets: [
          "Browse without waste with river and grid views",
          "Images take up over 90% of the screen",
        ],
      },
      {
        title: "Add reference folders as-is",
        mediaLabel: "adding a folder",
        mediaSrc: "/videos/フォルダ追加.mp4",
        bullets: [
          "Show reference folders in a list as they are",
          "Quick access to the reference board, too",
        ],
      },
      {
        title: "Place images freely",
        mediaLabel: "placing images on the reference board",
        mediaSrc: "/videos/ボード.mp4",
        bullets: [
          "Drag and drop to place freely",
          "Compare line-art images side by side",
        ],
      },
      {
        title: "Organize references flexibly",
        mediaLabel: "bookmarks and labels",
        mediaSrc: "/videos/ブックマークとラベル.mp4",
        bullets: [
          "Flexible organization with two management methods",
          "Save to bookmarks quickly",
          "Categorize with labels",
        ],
      },
      {
        title: "Handy image operations",
        mediaLabel: "flip and grayscale",
        mediaSrc: "/videos/輝度と回転.mp4",
        bullets: [
          "Flip left/right to check for distortion",
          "Use grayscale to confirm values",
          "Grayscale conversion preserves luminance for artists",
        ],
      },
    ],
  },
  download: {
    title: "Download",
    heading: "Get a reference workflow that never interrupts your drawing.",
    body: "Try it free for 30 days. Keep it forever with a one-time purchase.",
    ctaLabel: "Try it free",
    ctaUrl: "https://apps.microsoft.com/detail/9N7GJKX6BSZW",
    platformNote: "for Windows 10/11",
    priceNote: "30-day free trial / then \u00a5480 (tax included, one-time purchase)",
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
    copyright: "\u00a9 2025 SWISH GALLERY from SWISH NOTE",
  },
};
