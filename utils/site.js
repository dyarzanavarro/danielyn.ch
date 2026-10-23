// Single source for site-wide identity used in meta tags, structured data, sitemap and llms.txt.
export const SITE_URL = "https://www.danielyn.ch";
export const SITE_NAME = "danielyn.ch";
export const AUTHOR = "Daniel Yarza Navarro";
export const SITE_TITLE = "Daniel Yarza Navarro: Product, UX & things I build";
export const SITE_DESCRIPTION =
    "Daniel Yarza Navarro is a product and UX lead in Zurich and the maker of Mise, a household meal planner, and Shelfie, an ebook library for Windows.";
export const DEFAULT_OG_IMAGE = "/og/home.png";
export const GITHUB_URL = "https://github.com/dyarzanavarro";
export const LINKEDIN_URL = "https://ch.linkedin.com/in/dyarzanavarro";

export const absoluteUrl = (path = "/") => {
    if (path === "/" || path === "") return `${SITE_URL}/`;
    return `${SITE_URL}${path.replace(/\/$/, "")}`;
};

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const personSchema = {
    "@type": "Person",
    "@id": PERSON_ID,
    name: AUTHOR,
    url: SITE_URL,
    image: `${SITE_URL}/img/work/dan-portrait.webp`,
    jobTitle: "Product and UX lead",
    description:
        "Product and UX lead for Swiss e-commerce and telecom, and independent maker of the Mise meal planner and the Shelfie ebook library.",
    address: { "@type": "PostalAddress", addressLocality: "Zurich", addressCountry: "CH" },
    knowsAbout: [
        "Product management",
        "UX design",
        "Design systems",
        "A/B testing",
        "E-commerce",
        "Vue.js",
        "Nuxt",
        "TypeScript",
        "Electron",
    ],
    sameAs: [GITHUB_URL, LINKEDIN_URL],
};

export const websiteSchema = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
};
