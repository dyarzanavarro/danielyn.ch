// Products I build myself, featured at the top of the home page.
export const SHELFIE_VERSION = "0.2.0";
export const SHELFIE_DOWNLOAD =
    "https://github.com/dyarzanavarro/shelfie/releases/latest/download/Shelfie-Setup.exe";

export const products = {
    mise: {
        title: "Mise",
        formerly: "Preppal",
        tagline: "Plan the week. Shop in one tap.",
        seoTitle: "Mise: free household meal planner with a shared shopping list",
        seoDescription:
            "Mise (formerly Preppal) is a free meal planner for households: weekly planner, recipe import from any URL and a shopping list that syncs live for everyone.",
        ogImage: "/og/mise.png",
        url: "https://betterplan.ch",
        category: "LifestyleApplication",
        os: "Web browser (installable PWA)",
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
        hero: { src: "/img/work/mise-planner.webp", width: 1110, height: 615, alt: "Mise weekly planner for 19 to 25 October with lunch and dinner recipes for every day, a Suggest week button and Generate Shopping List" },
        screenshots: [
            { src: "/img/work/mise-recipes.webp", width: 1144, height: 897, alt: "Mise recipe library with search, tag filters, Import URL and recipe cards showing prep time, cook time and source site" },
            { src: "/img/work/mise-shopping.webp", width: 1127, height: 600, alt: "Mise shopping list for the week grouped by category, with each item linked to its recipe and a Send to Coop button" },
            // Invite code replaced with the placeholder code from the betterplan.ch landing page.
            { src: "/img/work/mise-household.webp", width: 1105, height: 836, alt: "Mise household screen with a 6-character invite code and steps for inviting housemates" },
        ],
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
        faq: [
            {
                q: "What is Mise?",
                a: "Mise is a free household meal planner at betterplan.ch. You keep a recipe library, plan breakfast, lunch and dinner for the week, and get a shared shopping list generated from the plan. It was previously called Preppal.",
            },
            {
                q: "Is Mise free?",
                a: "Yes. Mise is free for your household and signing up does not need a credit card.",
            },
            {
                q: "Can several people in a household use Mise together?",
                a: "Yes. You invite your partner, flatmates or family with a 6-character code, and everyone shares the same planner, recipes and shopping list, synced in real time.",
            },
            {
                q: "Can Mise import recipes from other websites?",
                a: "Yes. Paste a recipe URL and Mise reads the recipe's structured data to import it. You can also enter your own recipes.",
            },
            {
                q: "Does Mise work on my phone?",
                a: "Yes. Mise runs in any modern browser and can be installed on the home screen as a progressive web app.",
            },
        ],
    },
    shelfie: {
        title: "Shelfie",
        tagline: "A lean ebook library for Windows.",
        seoTitle: "Shelfie: free ebook library for Windows, MOBI/AZW3 to EPUB and Kindle transfer",
        seoDescription:
            "Shelfie is a free, open-source Windows ebook manager: import EPUB, MOBI, AZW3 and PDF, convert MOBI/AZW3 to EPUB and EPUB to AZW3, and send books to a Kindle.",
        ogImage: "/og/shelfie.png",
        url: SHELFIE_DOWNLOAD,
        category: "UtilitiesApplication",
        os: "Windows 10, Windows 11",
        summary:
            "Import EPUB, MOBI, AZW3 and PDF files or whole folders, convert between formats and get books onto your Kindle over USB or email. Nothing else to install.",
        status: `v${SHELFIE_VERSION}`,
        year: "2026",
        role: "Open source (MIT): design and code",
        accent: "shelfie",
        highlights: [
            "MOBI/AZW3 to EPUB and EPUB to AZW3, entirely in TypeScript",
            "Copy to a Kindle over USB, with cover thumbnails",
            "Send to Kindle by email",
            "Books grouped by author in series order, with bulk actions",
        ],
        stack: ["Electron", "React", "TypeScript", "SQLite"],
        // Real app screenshots. The Kindle address in shelfie-send is redacted.
        hero: { src: "/img/work/shelfie-library.webp", width: 1258, height: 700, alt: "Shelfie library window showing a grid of book covers with search, sort, Kindle settings and Add books controls" },
        screenshots: [
            { src: "/img/work/shelfie-detail.webp", width: 319, height: 712, alt: "Shelfie book detail panel with cover, format and size, Send to Kindle and Convert to EPUB buttons, and metadata" },
            { src: "/img/work/shelfie-send.webp", width: 524, height: 646, alt: "Shelfie Send to Kindle settings dialog with Kindle email, approved sender and SMTP settings" },
        ],
        links: [
            { label: "Download for Windows", href: SHELFIE_DOWNLOAD, primary: true, download: true },
            { label: "Source on GitHub", href: "https://github.com/dyarzanavarro/shelfie" },
        ],
        sections: [
            {
                heading: "Why I built it",
                body: "All I wanted was a tidy library and an easy way to get books onto my Kindle. Shelfie does that handful of things quickly, in an interface that stays out of the way.",
            },
            {
                heading: "What it does",
                body: "Drop in EPUB, MOBI, AZW3 or PDF files, or add a whole folder to import everything at once. Books are grouped by author and ordered by series, and you can select several to convert, send or delete together.",
            },
            {
                heading: "Conversion built in",
                body: "Format conversion is written from scratch in TypeScript: MOBI and AZW3 become EPUB for reading anywhere, and EPUB becomes AZW3 for the Kindle. Copying over USB also writes the cover thumbnails the Kindle expects, so your library doesn't turn into grey placeholders.",
            },
        ],
        install: [
            "Download Shelfie-Setup.exe (Windows 10 or 11).",
            "The installer isn't code-signed yet, so Windows SmartScreen may warn you. Click “More info”, then “Run anyway”.",
            "Shelfie installs and opens. Click Add books, or Add folder to import a whole folder at once.",
        ],
        faq: [
            {
                q: "Does Shelfie need any other software to convert ebooks?",
                a: "No. Shelfie converts MOBI and AZW3 to EPUB, and EPUB to AZW3, with its own built-in TypeScript code, so there is nothing else to install.",
            },
            {
                q: "Which ebook formats does Shelfie support?",
                a: "Shelfie imports EPUB, MOBI, AZW3 and PDF files. It converts MOBI and AZW3 to EPUB, and EPUB to AZW3 for Kindle devices.",
            },
            {
                q: "How do I get books onto my Kindle with Shelfie?",
                a: "Connect the Kindle by USB and Shelfie copies the books, including the cover thumbnails the Kindle needs, or use Send to Kindle to deliver them by email.",
            },
            {
                q: "Why does Windows show a warning when I install Shelfie?",
                a: "The installer is not code-signed yet, so Windows SmartScreen shows a warning. Click “More info”, then “Run anyway” to install it.",
            },
            {
                q: "Is Shelfie free and open source? Does it run on macOS?",
                a: "Yes, Shelfie is free and open source under the MIT license, with the code on GitHub. It currently runs on Windows 10 and 11 only.",
            },
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
