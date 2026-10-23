<script setup>
// A small, static recreation of Shelfie's author-grouped library.
const groups = [
  {
    author: "Ursula K. Le Guin",
    books: [
      { title: "A Wizard of Earthsea", n: 1, color: "#ff6b6b", fmt: "EPUB", selected: true },
      { title: "The Tombs of Atuan", n: 2, color: "#ffb547", fmt: "AZW3", selected: true },
      { title: "The Farthest Shore", n: 3, color: "#2ec4b6", fmt: "MOBI", selected: false },
      { title: "Tehanu", n: 4, color: "#f3e8d8", fmt: "EPUB", selected: false, dark: true },
    ],
  },
  {
    author: "Becky Chambers",
    books: [
      { title: "The Long Way to a Small, Angry Planet", n: 1, color: "#6c5ce7", fmt: "EPUB", selected: true },
      { title: "A Closed and Common Orbit", n: 2, color: "#ff8fab", fmt: "PDF", selected: false },
    ],
  },
];
</script>

<template>
  <div
    class="rounded-2xl bg-[#16171b] text-[#e8e8ec] shadow-xl ring-1 ring-white/10 overflow-hidden text-xs"
    role="img"
    aria-label="Shelfie library with books grouped by author in series order, three books selected and ready to send to a Kindle"
  >
    <div class="flex items-center justify-between gap-2 px-4 py-3 border-b border-white/10 bg-[#1f2026]">
      <span class="flex items-center gap-2 font-bold text-sm">
        <img src="/img/work/shelfie-icon.webp" alt="" width="20" height="20" class="rounded-md" />
        Library
      </span>
      <span class="flex items-center gap-1.5">
        <span class="hidden sm:inline text-[#9a9ca8]">3 selected</span>
        <span class="rounded-full bg-[#2a2b33] px-2.5 py-1">Convert</span>
        <span class="rounded-full bg-[#6c9cff] text-[#0d1020] font-bold px-2.5 py-1">Send to Kindle</span>
      </span>
    </div>
    <div class="p-4 grid gap-4">
      <div v-for="group in groups" :key="group.author">
        <p class="text-[#9a9ca8] font-medium mb-2">{{ group.author }}</p>
        <div class="grid grid-cols-4 gap-2.5">
          <div v-for="book in group.books" :key="book.title" class="min-w-0">
            <div
              class="relative aspect-[2/3] rounded-md p-1.5 flex flex-col justify-between"
              :class="book.selected ? 'ring-2 ring-[#6c9cff] ring-offset-2 ring-offset-[#16171b]' : ''"
              :style="{ background: book.color, color: book.dark ? '#3a3227' : '#fff' }"
            >
              <span class="font-bold leading-tight text-[0.625rem] line-clamp-3">{{ book.title }}</span>
              <span class="self-start rounded bg-black/25 text-white px-1 text-[0.5625rem]">#{{ book.n }}</span>
            </div>
            <p class="mt-1 text-[0.625rem] text-[#9a9ca8]">{{ book.fmt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
