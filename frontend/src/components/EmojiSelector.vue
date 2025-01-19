<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full lg:w-[640px] m-auto">
    <button
      v-for="(emoji, mood) in emojis"
      :key="mood"
      class="flex flex-col items-center justify-center p-2 md:p-4 border-2 border-m-green text-white rounded-lg transition hover:bg-m-green hover:border-white"
      @click="navigateToResult(mood)"
    >
      <span class="mb-1 lg:mb-2 lg:text-4xl">{{ emoji }}</span>
      <span class="text-xs lg:text-sm uppercase font-semibold">{{ mood }}</span>
    </button>
  </div>
</template>
  
<script>
export default {
  name: 'EmojiSelector',
  data() {
    return {
      emojis: {
        happy: '😄',
        sad: '😢',
        angry: '😠',
        excited: '🤩',
        chill: '😎',
        energetic: '😜',
        romantic: '🥰',
        motivational: '🫡',
        humorous: '😝',
        lonely: '😔',
        thoughtful: '🤔',
        philosophical: '🧐',
        sleepy: '🥱',
      },
    };
  },
  methods: {
    navigateToResult(mood) {
      this.$router.push({ name: 'MusicAndQuote', params: { mood } });
    },
  },
};
</script>
  