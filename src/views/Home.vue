<template>
  <div>
    <div>主页</div>
    <Score></Score>
  </div>
</template>

<script>
import Score from "./Score.vue";

export default {
  name: "Home",
  components: {
    Score,
  },
  data: () => ({}),
};
</script>
<style scoped></style>
