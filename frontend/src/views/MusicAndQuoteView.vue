<template>
  <div class="container mx-auto lg:p-6">
    <MoodResult :mood="mood" />
  </div>
</template>

<script>
import MoodResult from '../components/MoodResult.vue';

export default {
  name: 'ResultView',
  props: ['mood'],
  components: { MoodResult },
};
</script>
  