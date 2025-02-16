<template>
  <div v-if="loading" class="flex items-center justify-center h-full">
    <span class="loader"></span>
  </div>
  <div v-else>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <router-link to="/" class="flex items-center justify-center border-2 border-m-green-500 text-white rounded-lg transition hover:bg-m-green-500 hover:border-white px-4 py-2 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left">
          <path d="m12 19-7-7 7-7"/>
          <path d="M19 12H5"/>
        </svg>
        <span class="ml-2">Change mood</span>
      </router-link>
      <button class="flex items-center justify-center md:border-2 border-transparent bg-m-green-500 text-white hover:bg-m-green-600 rounded-lg px-4 py-2" @click="fetchMusicAndQuote">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
          <path d="M8 16H3v5"/>
        </svg>
        <span class="ml-2">Generate new</span>
      </button>
    </div>

    <h2 class="text-xl text-center font-bold mb-4">Your Mood: {{ mood }}</h2>

    <div class="mb-6">
      <h3 class="text-lg font-semibold">Music:</h3>
      <iframe
        :src="`https://www.youtube.com/embed/${music.videoId}`"
        frameborder="0"
        allowfullscreen
        class="w-full min-h-64 aspect-video"
      ></iframe>
    </div>

    <div>
      <h3 class="text-lg font-semibold">Quote:</h3>
      <blockquote class="italic text-gray-400">
        "{{ quote.content }}" - {{ quote.author }}
      </blockquote>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MoodResult',
  props: ['mood'],
  data() {
    return {
      music: null,
      quote: null,
      loading: true,
    };
  },
  created() {
    this.fetchMusicAndQuote();
  },
  methods: {
    async fetchMusicAndQuote() {
      try {
        const response = await axios.get(`/api/music-with-quote?mood=${this.mood}`);
        this.music = response.data.music; // Use the first music video
        this.quote = response.data.quote;
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.loader {
  animation: rotation 1s linear infinite;
  border-radius: 50%;
  border-right: 3px solid transparent;
  border-top: 3px solid #50e3c2;
  box-sizing: border-box;
  display: inline-block;
  height: 48px;
  width: 48px;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
  