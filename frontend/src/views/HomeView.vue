<template>
  <h1 class="text-2xl md:text-3xl md:w-3/4 m-auto text-center font-bold mb-5">Discover a world of emotions through music and quotes tailored to your mood.</h1>
  <h2 class="text-base md:text-xl text-center font-thin md:font-medium mb-6 lg:mb-8">Choose how you feel and let the journey begin.</h2>
  <EmojiSelector />
</template>

<script>
import EmojiSelector from '../components/EmojiSelector.vue';

export default {
  name: 'HomeView',
  components: { EmojiSelector },
};
</script>
  