<template>
  <div>
    <div
      class="justify-center w-full max-w-screen-xl max-w-screen-xl px-6 mx-auto"
    >
      <div class="justify-center w-full px-4 pt-12">
        <div class="font-bold text-gray-600 lg:text-7xl text-4xl">
          DYN is a UX Engineer working in B2C E-commerce in 🇨🇭
        </div>
      </div>

      <div class="container px-4 lg:pt-8 pt-6">
        <div class="text-gray-400 lg:text-2xl sm:text-4">
          Dipping my toes in SCRUM product ownership & creating intuitive user
          journeys that drive up value and supports long-term growth. Get to
          know me better by browsing my past work, what I do for fun or learn
          about the process I use to improve any business.
        </div>
      </div>
      <div class="justify-center w-full px-4 pt-12">
        <div class="font-bold text-gray-600 lg:text-3xl text-2xl">
          Selected work
        </div>
        <work-cards />
      </div>

      <div class="justify-center w-full px-4 pt-12">
        <div class="font-bold text-gray-600 lg:text-3xl text-2xl">
          Profile & Contact
        </div>
      </div>
      <div class="relative pb-2">
        <div class="bg-slate-100 inset-x-0 bottom-0">
          <profile-card />
        </div>
      </div>
    </div>
  </div>
</template>