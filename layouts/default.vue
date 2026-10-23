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
