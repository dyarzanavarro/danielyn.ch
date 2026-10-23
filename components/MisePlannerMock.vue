<script setup>
// A small, static recreation of the Mise weekly planner.
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const meals = [
  { name: "Breakfast", slots: ["Oats", "", "Toast", "Eggs", "", "Crêpes", ""] },
  { name: "Lunch", slots: ["", "Salad", "Out", "Soup", "Out", "Wrap", "Out"] },
  { name: "Dinner", slots: ["Pasta", "Tacos", "Curry", "Out", "Pizza", "Steak", "Roast"] },
];
</script>

<template>
  <div
    class="rounded-2xl bg-white text-[#16181d] shadow-xl ring-1 ring-black/5 p-4 sm:p-5 text-xs"
    role="img"
    aria-label="Mise weekly planner showing breakfast, lunch and dinner for each day, with 24 items on the shopping list"
  >
    <div class="flex items-center justify-between mb-3">
      <span class="font-bold text-sm">This week</span>
      <span class="rounded-full bg-[#e3edff] text-[#1a6ef5] px-2.5 py-1 font-medium">24 items on the list</span>
    </div>
    <div class="grid grid-cols-[3.75rem,repeat(4,1fr)] sm:grid-cols-[4.25rem,repeat(7,1fr)] gap-1.5">
      <span></span>
      <span
        v-for="(day, i) in days"
        :key="day"
        class="text-center text-[#6b7280] pb-1"
        :class="{ 'hidden sm:block': i > 3 }"
      >{{ day }}</span>
      <template v-for="meal in meals" :key="meal.name">
        <span class="self-center text-[#6b7280]">{{ meal.name }}</span>
        <span
          v-for="(slot, i) in meal.slots"
          :key="meal.name + i"
          class="h-9 rounded-lg grid place-items-center truncate px-1 text-[0.6875rem] font-medium"
          :class="[
            slot === 'Out' ? 'bg-[#f1f2f4] text-[#9aa0a8]' : slot ? 'bg-[#e3edff] text-[#16181d]' : 'border border-dashed border-[#d9dce1]',
            { 'hidden sm:grid': i > 3 },
          ]"
        >{{ slot }}</span>
      </template>
    </div>
  </div>
</template>
