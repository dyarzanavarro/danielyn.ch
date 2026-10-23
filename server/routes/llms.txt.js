import { products, work, SHELFIE_DOWNLOAD, SHELFIE_VERSION } from "../../data/projects.js";
import { AUTHOR, GITHUB_URL, LINKEDIN_URL, SITE_DESCRIPTION, absoluteUrl } from "../../utils/site.js";

// llms.txt (https://llmstxt.org): a plain-language summary for AI assistants and answer engines.
export default defineEventHandler((event) => {
    const productBlocks = Object.entries(products).map(([slug, p]) => {
        const facts = [
            `- Page: ${absoluteUrl(`/projects/${slug}`)}`,
            slug === "mise" ? `- Live app: ${p.url}` : `- Download (Windows installer, v${SHELFIE_VERSION}): ${SHELFIE_DOWNLOAD}`,
            ...p.links.filter((l) => l.href.includes("github.com")).map((l) => `- Source: ${l.href}`),
            `- Built with: ${p.stack.join(", ")}`,
            ...p.highlights.map((h) => `- ${h}`),
        ];
        const faq = p.faq.map(({ q, a }) => `Q: ${q}\nA: ${a}`).join("\n\n");
        return `### ${p.title}${p.formerly ? ` (formerly ${p.formerly})` : ""}: ${p.tagline}\n\n${p.seoDescription}\n\n${facts.join("\n")}\n\n${faq}`;
    });

    const workLines = Object.entries(work).map(
        ([slug, w]) => `- [${w.title}: ${w.tagline}](${absoluteUrl(`/projects/${slug}`)}): ${w.summary}`
    );

    const body = `# ${AUTHOR}

> ${SITE_DESCRIPTION}

${AUTHOR} works in Zurich, Switzerland, as a product and UX lead for B2C e-commerce, mostly in Swiss telecom (design systems, re-platformings, A/B testing). Alongside that, Daniel designs and builds independent software products end to end.

## Products

${productBlocks.join("\n\n")}

## Client work

${workLines.join("\n")}

## More

- [How I work](${absoluteUrl("/process")}): product discovery, structured design and delivery with engineers
- [GitHub](${GITHUB_URL})
- [LinkedIn](${LINKEDIN_URL})
- Contact: danielyarza1@gmail.com
`;

    setHeader(event, "content-type", "text/plain; charset=utf-8");
    return body;
});
