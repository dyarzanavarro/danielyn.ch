<script setup>
import { products, work, SHELFIE_DOWNLOAD, SHELFIE_VERSION } from "@/data/projects.js";
import { PERSON_ID, absoluteUrl } from "~/utils/site.js";

const route = useRoute();
const slug = route.params.slug;
const product = products[slug];
const project = work[slug];

if (!product && !project) {
  throw createError({ statusCode: 404, statusMessage: "Project not found", fatal: true });
}

const item = product || project;
const isMise = product?.accent === "mise";
const accentText = isMise ? "text-mise" : "text-shelfie";
const accentBg = isMise ? "bg-mise" : "bg-shelfie";

const pageUrl = absoluteUrl(route.path);
const schema = [];

if (product) {
  schema.push({
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: product.title,
    ...(product.formerly ? { alternateName: product.formerly } : {}),
    description: product.seoDescription,
    applicationCategory: product.category,
    operatingSystem: product.os,
    url: slug === "mise" ? product.url : pageUrl,
    ...(slug === "shelfie" ? { downloadUrl: SHELFIE_DOWNLOAD, softwareVersion: SHELFIE_VERSION, installUrl: SHELFIE_DOWNLOAD } : {}),
    image: absoluteUrl(product.ogImage),
    offers: { "@type": "Offer", price: "0", priceCurrency: "CHF" },
    author: { "@id": PERSON_ID },
    sameAs: product.links.filter((l) => l.href.includes("github.com")).map((l) => l.href),
    featureList: product.highlights.join(", "),
  });
  schema.push({
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: product.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  });
}

usePageSeo({
  title: product
    ? product.seoTitle
    : `${project.title}: ${project.tagline} · Daniel Yarza Navarro case study`,
  description: product ? product.seoDescription : `${project.summary} ${project.solution}`,
  image: product?.ogImage,
  type: product ? "website" : "article",
  breadcrumbs: [
    { name: "Home", path: "/" },
    product ? { name: "Projects", path: "/#projects" } : { name: "Client work", path: "/work" },
    { name: item.title, path: route.path },
  ],
  schema,
});
</script>

<template>
  <div class="px-4 sm:px-6 pt-10 sm:pt-16 pb-16">
    <div class="max-w-screen-xl mx-auto">
      <NuxtLink :to="product ? '/#projects' : '/work'" class="link-arrow text-muted hover:text-ink text-sm">
        <span aria-hidden="true">←</span> {{ product ? "All projects" : "All client work" }}
      </NuxtLink>

      <!-- Own products -->
      <template v-if="product">
        <header class="mt-6 grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <span class="chip">{{ product.status }}</span>
              <span class="chip">{{ product.year }}</span>
              <span class="chip">{{ product.role }}</span>
            </div>
            <h1 class="mt-5 text-5xl sm:text-6xl font-black tracking-tight">{{ product.title }}</h1>
            <p class="mt-2 text-2xl font-bold" :class="accentText">{{ product.tagline }}</p>
            <p v-if="product.formerly" class="mt-2 text-sm text-muted">Formerly {{ product.formerly }}</p>
            <p class="mt-5 text-lg text-muted leading-relaxed max-w-xl">{{ product.summary }}</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a
                v-for="link in product.links"
                :key="link.href"
                :href="link.href"
                class="btn"
                :class="link.primary ? [accentBg, 'on-accent'] : 'btn-ghost'"
              >
                <svg v-if="link.download" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" /></svg>
                {{ link.label }}
              </a>
            </div>
          </div>
          <MisePlannerMock v-if="isMise" />
          <ShelfieLibraryMock v-else />
        </header>

        <div class="mt-14 grid gap-10 lg:grid-cols-[1.6fr,1fr]">
          <div class="grid gap-8">
            <section v-for="section in product.sections" :key="section.heading">
              <h2 class="text-2xl font-black tracking-tight">{{ section.heading }}</h2>
              <p class="mt-3 text-lg leading-relaxed text-muted max-w-2xl">{{ section.body }}</p>
            </section>

            <section v-if="product.install" id="install" class="card p-6 sm:p-8">
              <h2 class="text-2xl font-black tracking-tight">Install on Windows</h2>
              <ol class="mt-5 grid gap-4">
                <li v-for="(step, i) in product.install" :key="i" class="flex gap-4">
                  <span class="shrink-0 w-8 h-8 rounded-full grid place-items-center on-accent font-bold text-sm" :class="accentBg">{{ i + 1 }}</span>
                  <span class="pt-1 leading-relaxed">{{ step }}</span>
                </li>
              </ol>
              <a
                :href="product.links[0].href"
                class="btn on-accent mt-6"
                :class="accentBg"
              >Download Shelfie-Setup.exe</a>
              <p class="mt-3 text-sm text-muted">
                Release notes and older versions are on
                <a class="underline underline-offset-2 hover:text-ink" href="https://github.com/dyarzanavarro/shelfie/releases">GitHub Releases</a>.
              </p>
            </section>

            <section id="faq" aria-labelledby="faq-title">
              <h2 id="faq-title" class="text-2xl font-black tracking-tight">Questions</h2>
              <div class="mt-4 grid gap-3">
                <div v-for="entry in product.faq" :key="entry.q" class="card p-5 sm:p-6">
                  <h3 class="font-bold text-lg">{{ entry.q }}</h3>
                  <p class="mt-2 text-muted leading-relaxed">{{ entry.a }}</p>
                </div>
              </div>
            </section>
          </div>

          <aside class="grid gap-4 content-start">
            <div class="card p-6">
              <h2 class="font-bold">Highlights</h2>
              <ul class="mt-3 grid gap-2.5">
                <li v-for="h in product.highlights" :key="h" class="flex gap-3">
                  <svg class="mt-1 shrink-0" :class="accentText" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                  <span>{{ h }}</span>
                </li>
              </ul>
            </div>
            <div class="card p-6">
              <h2 class="font-bold">Built with</h2>
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span v-for="s in product.stack" :key="s" class="chip">{{ s }}</span>
              </div>
            </div>
          </aside>
        </div>
      </template>

      <!-- Client work -->
      <template v-else>
        <header class="mt-6 grid gap-10 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          <div>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</span>
            </div>
            <h1 class="mt-5 text-4xl sm:text-5xl font-black tracking-tight">{{ project.title }}</h1>
            <p class="mt-2 text-xl font-bold text-accent-1">{{ project.tagline }}</p>
            <p class="mt-5 text-lg text-muted leading-relaxed max-w-xl">{{ project.summary }}</p>
          </div>
          <div class="card overflow-hidden aspect-[4/3]">
            <img class="w-full h-full object-cover object-top" :src="project.heroImage" :alt="`${project.title} project preview`" />
          </div>
        </header>

        <div class="mt-14 grid gap-4 md:grid-cols-3">
          <section class="card p-6">
            <h2 class="font-bold">The challenge</h2>
            <p class="mt-3 text-muted leading-relaxed">{{ project.challenge }}</p>
          </section>
          <section class="card p-6">
            <h2 class="font-bold">The approach</h2>
            <p class="mt-3 text-muted leading-relaxed">{{ project.solution }}</p>
          </section>
          <section class="card p-6">
            <h2 class="font-bold">How it was built</h2>
            <p class="mt-3 text-muted leading-relaxed">{{ project.development }}</p>
          </section>
        </div>

        <section v-if="project.outcomes.length" class="mt-4 card p-6">
          <h2 class="font-bold">Outcomes</h2>
          <ul class="mt-3 grid gap-2 text-muted">
            <li v-for="o in project.outcomes" :key="o">{{ o }}</li>
          </ul>
        </section>

        <section v-if="project.images.length" class="mt-10" aria-label="Screenshots">
          <div class="grid gap-4 grid-cols-2 lg:grid-cols-3">
            <img
              v-for="image in project.images"
              :key="image"
              :src="image"
              :alt="`${project.title} screenshot`"
              loading="lazy"
              decoding="async"
              class="rounded-2xl border border-line w-full"
            />
          </div>
        </section>
      </template>
    </div>
  </div>
</template>
