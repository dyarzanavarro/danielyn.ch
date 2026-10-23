import { products, work } from "../../data/projects.js";
import { absoluteUrl } from "../../utils/site.js";

// Prerendered at build time; lastmod is the build date.
export default defineEventHandler((event) => {
    const today = new Date().toISOString().slice(0, 10);
    const pages = [
        { path: "/", priority: "1.0" },
        ...Object.keys(products).map((slug) => ({ path: `/projects/${slug}`, priority: "0.9" })),
        { path: "/work", priority: "0.7" },
        ...Object.keys(work).map((slug) => ({ path: `/projects/${slug}`, priority: "0.6" })),
        { path: "/process", priority: "0.5" },
        { path: "/fun", priority: "0.3" },
    ];

    const urls = pages
        .map(
            ({ path, priority }) =>
                `  <url><loc>${absoluteUrl(path)}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`
        )
        .join("\n");

    setHeader(event, "content-type", "application/xml; charset=utf-8");
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
});
