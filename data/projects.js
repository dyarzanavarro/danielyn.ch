// Products I build myself, featured at the top of the home page.
export const SHELFIE_VERSION = "0.2.0";
export const SHELFIE_DOWNLOAD =
    "https://github.com/dyarzanavarro/shelfie/releases/latest/download/Shelfie-Setup.exe";

export const products = {
    mise: {
        title: "Mise",
        formerly: "Preppal",
        tagline: "Plan the week. Shop in one tap.",
        summary:
            "A household meal planner: build a recipe library, plan every meal of the week and get a shared shopping list that stays in sync with everyone you cook with.",
        status: "Live",
        year: "2026",
        role: "Side project: product, design and code",
        accent: "mise",
        highlights: [
            "Weekly planner for breakfast, lunch and dinner",
            "Import recipes from any URL in seconds",
            "Shopping list generated from the plan, quantities merged",
            "Households share everything live via a 6-character invite code",
        ],
        stack: ["Nuxt 3 (SSR + PWA)", "Firebase Auth", "Firestore", "Pinia", "Tailwind CSS"],
        links: [
            { label: "Open betterplan.ch", href: "https://betterplan.ch", primary: true },
            { label: "Source on GitHub", href: "https://github.com/dyarzanavarro/Preppal_Mise" },
        ],
        sections: [
            {
                heading: "The problem",
                body: "Planning meals for a household usually lives in three places: a recipe app, a group chat and a shopping note that is always out of date. Preppal started as a personal recipe manager; Mise is the rebuild around the whole week and everyone in the household.",
            },
            {
                heading: "What it does",
                body: "Lay out breakfast, lunch and dinner for every day, tap a slot to assign a recipe or mark yourself as eating out. Save recipes with ingredients, times and tags, or paste a URL and let the server parse the recipe's structured data. One tap turns the week into a categorised shopping list with quantities merged across recipes.",
            },
            {
                heading: "Built for sharing",
                body: "Invite a partner, flatmates or family with a single code. Everyone sees the same planner, recipe book and list, and changes sync in real time through Firestore. It installs as a PWA, so it lives on the home screen next to the shopping app it replaces.",
            },
            {
                heading: "What's next",
                body: "I'm experimenting with sending the shopping list straight into a Coop.ch basket, so planning to ordering is one step.",
            },
        ],
    },
    shelfie: {
        title: "Shelfie",
        tagline: "A lean ebook library for Windows.",
        summary:
            "Import EPUB, MOBI, AZW3 and PDF files or whole Calibre libraries, convert between formats and get books onto your Kindle over USB or email. No Calibre required.",
        status: `v${SHELFIE_VERSION}`,
        year: "2026",
        role: "Open source: design and code",
        accent: "shelfie",
        highlights: [
            "MOBI/AZW3 to EPUB and EPUB to AZW3, entirely in TypeScript",
            "Copy to a Kindle over USB, with cover thumbnails",
            "Send to Kindle by email",
            "Books grouped by author in series order, with bulk actions",
        ],
        stack: ["Electron", "React", "TypeScript", "SQLite"],
        links: [
            { label: "Download for Windows", href: SHELFIE_DOWNLOAD, primary: true, download: true },
            { label: "Source on GitHub", href: "https://github.com/dyarzanavarro/shelfie" },
        ],
        sections: [
            {
                heading: "Why I built it",
                body: "Calibre can do everything, which is exactly the problem when all you want is a tidy library and books on your Kindle. Shelfie does the handful of things I actually need, quickly, in an interface that stays out of the way.",
            },
            {
                heading: "What it does",
                body: "Drop in EPUB, MOBI, AZW3 or PDF files, or point it at an existing Calibre library to import everything at once. Books are grouped by author and ordered by series, and you can select several to convert, send or delete together.",
            },
            {
                heading: "No Calibre inside",
                body: "Format conversion is written from scratch in TypeScript: MOBI and AZW3 become EPUB for reading anywhere, and EPUB becomes AZW3 for the Kindle. Copying over USB also writes the cover thumbnails the Kindle expects, so your library doesn't turn into grey placeholders.",
            },
        ],
        install: [
            "Download Shelfie-Setup.exe (Windows 10 or 11).",
            "The installer isn't code-signed yet, so Windows SmartScreen may warn you. Click “More info”, then “Run anyway”.",
            "Shelfie installs and opens. Drag books in, or import a whole Calibre library.",
        ],
    },
};

// Client and agency work. Outcome metrics were removed until real numbers are available.
// TODO(Daniel): add verified results (conversion, engagement, etc.) to `outcomes` where you have them.
export const work = {
    yallo: {
        title: "Yallo",
        tagline: "Upgrading a telecom brand to a new level",
        heroImage: "/img/work/yallo-1.webp",
        summary:
            "A full migration of a legacy platform, including a new design system and re-platforming.",
        client: "Yallo",
        tags: ["Design system", "Re-platforming", "E-commerce"],
        challenge: "The brand needed a complete digital transformation to stay competitive.",
        solution: "A new design system, reworked UX across the shop and an updated tech stack.",
        development: "Angular front end, Tailwind UI, integrated APIs and a headless CMS.",
        images: ["/img/work/yallo-1.webp", "/img/work/yallo-2.webp"],
        outcomes: [],
    },
    sunrise: {
        title: "Sunrise",
        tagline: "A/B testing for telecom UX",
        heroImage: "/img/work/sunrise-1.webp",
        summary: "Improving the purchase experience through iterative A/B testing.",
        client: "Sunrise",
        tags: ["Experimentation", "Conversion", "UX research"],
        challenge:
            "Find the real pain points in the purchase journey and improve them based on data rather than opinion.",
        solution:
            "Iterative A/B tests, refined UI components and clearer navigation.",
        development: "Adobe Target for fast test delivery, with ongoing performance monitoring.",
        images: [],
        outcomes: [],
    },
    kollektivkitzeln: {
        title: "Kollektiv Kitzeln",
        tagline: "A hub for a feminist collective",
        heroImage: "/img/work/kollektiv-1.webp",
        summary:
            "A digital space for a feminist collective, focused on inclusivity and artistic collaboration.",
        client: "Kollektiv Kitzeln",
        tags: ["Brand", "Website", "Community"],
        challenge:
            "Create a platform that reflects the collective's vision while being accessible and interactive.",
        solution:
            "A brand-aligned website with event management, a blog and a members-only space.",
        development: "Built with Framer and hosted in Switzerland.",
        images: ["/img/work/kollektiv-2.webp", "/img/work/kollektiv-3.webp", "/img/work/kollektiv-4.webp"],
        outcomes: [],
    },
    hundeschule: {
        title: "Hundeschule",
        tagline: "A full overhaul for a dog training school",
        heroImage: "/img/work/hundeschule-1.webp",
        summary:
            "A brand revamp covering UX, content and front-end development.",
        client: "Hundeführerschule",
        tags: ["Brand", "UX", "Website"],
        challenge:
            "Design a user-friendly site that communicates trust, expertise and accessibility.",
        solution: "A visually engaging website with strong branding and simple navigation.",
        development: "Built with Framer and hosted in Switzerland.",
        images: ["/img/work/hundeschule-2.webp", "/img/work/hundeschule-6.webp", "/img/work/hundeschule-5.webp"],
        outcomes: [],
    },
    psych: {
        title: "Psych",
        tagline: "A digital hub for psychology students",
        heroImage: "/img/work/psych-hero.webp",
        summary:
            "A platform for psychology students to find events, access resources and collaborate.",
        tags: ["Platform", "Information architecture"],
        challenge:
            "Build an intuitive, content-rich experience tailored to students' academic needs.",
        solution: "A clean, information-dense UI with a simple navigation structure.",
        development: "Built with Nuxt 3, Firebase Auth and a headless CMS.",
        images: ["/img/work/psych-1.webp", "/img/work/psych-2.webp"],
        outcomes: [],
    },
};
