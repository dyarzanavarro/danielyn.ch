<template>
  <div class="app-shell min-h-screen">
    <a href="#main" class="skip-link">Skip to content</a>
    <Nav />
    <main id="main" class="relative z-10">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { personSchema, websiteSchema } from "~/utils/site.js";

// Site-wide identity for search engines and AI answer engines.
useHead({
  script: [
    {
      type: "application/ld+json",
      key: "site-jsonld",
      innerHTML: JSON.stringify({ "@context": "https://schema.org", "@graph": [personSchema, websiteSchema] }),
    },
  ],
});
</script>
