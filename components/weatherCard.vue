<script setup>
import { ref, onMounted } from "vue";
import { useFetch } from "nuxt/app";
import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();
const weather = ref(null);
const error = ref(null);

const fetchWeather = async () => {
  try {
    const { data } = await useFetch(
      "https://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: config.public.apiKey, // Access API key using config
          q: "Zurich",
        },
      }
    );

    weather.value = data.value; // Assign the fetched data to weather
  } catch (err) {
    console.error(err);
    error.value = "Failed to load weather data"; // Set error message
  }
};

onMounted(fetchWeather); // Fetch weather data when component is mounted
</script>

<template>
  <div class="weather-component" v-if="weather">
    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <div class="flex justify-between items-center mb-4">
        <div>
          <h2 class="text-xl font-bold text-gray-700">
            {{ weather.location.name }}
          </h2>
          <p class="text-gray-500">{{ weather.location.localtime }}</p>
        </div>
        <div class="text-gray-700">
          <p class="text-4xl">{{ weather.current.temp_c }} °C</p>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <!-- Use SVG or IMG tag for weather icon -->
          <img
            class="w-8 h-8"
            :src="`https://cdn.weatherapi.com/weather/64x64/day/${weather.current.condition.icon
              .split('/')
              .pop()}`"
            alt="Weather Icon"
          />
          <p class="mr-2 text-gray-700">{{ weather.current.condition.text }}</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500">
            Wind: {{ weather.current.wind_kph }}kph
          </p>
          <p class="text-sm text-gray-500">
            Humidity: {{ weather.current.humidity }} %
          </p>
          <!-- Add more details as needed -->
        </div>
      </div>
    </div>
  </div>
</template>
