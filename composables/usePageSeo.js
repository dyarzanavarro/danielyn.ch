import { AUTHOR, DEFAULT_OG_IMAGE, PERSON_ID, SITE_NAME, absoluteUrl } from "~/utils/site.js";

/**
 * Per-page SEO: title, description, canonical URL, Open Graph / Twitter tags
 * and optional JSON-LD nodes (merged into one @graph with breadcrumbs).
 */
export function usePageSeo({
    title,
    description,
    image = DEFAULT_OG_IMAGE,
    imageAlt,
    type = "website",
    pageType = "WebPage",
    breadcrumbs = [],
    schema = [],
    noindex = false,
}) {
    const route = useRoute();
    const url = absoluteUrl(route.path);
    const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

    useSeoMeta({
        title,
        description,
        author: AUTHOR,
        robots: noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
        ogType: type,
        ogSiteName: SITE_NAME,
        ogLocale: "en_GB",
        ogTitle: title,
        ogDescription: description,
        ogUrl: url,
        ogImage: imageUrl,
        ogImageWidth: 1200,
        ogImageHeight: 630,
        ogImageAlt: imageAlt || title,
        twitterCard: "summary_large_image",
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: imageUrl,
    });

    const graph = [
        {
            "@type": pageType,
            "@id": `${url}#webpage`,
            ...(pageType === "ProfilePage" ? { mainEntity: { "@id": PERSON_ID } } : {}),
            url,
            name: title,
            description,
            inLanguage: "en",
            isPartOf: { "@id": `${absoluteUrl("/")}#website` },
            author: { "@id": PERSON_ID },
            primaryImageOfPage: imageUrl,
        },
        ...schema,
    ];

    if (breadcrumbs.length) {
        graph.push({
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((crumb, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: crumb.name,
                item: absoluteUrl(crumb.path),
            })),
        });
    }

    useHead({
        link: [{ rel: "canonical", href: url }],
        script: [
            {
                type: "application/ld+json",
                key: "page-jsonld",
                innerHTML: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
            },
        ],
    });
}
