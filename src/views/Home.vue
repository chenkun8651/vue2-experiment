<template>
  <div>
    <div>主页</div>
    <ul class="flex">
      <ScrollNum
        v-for="(num, idx) of numArr"
        :key="idx"
        as="li"
        :i="num"
        :delay="idx + 1"
      />
    </ul>
  </div>
</template>

<script>
import ScrollNum from "./../components/ScrollNum.vue";

export default {
  name: "Home",
  components: { ScrollNum },
  computed: {
    numArr() {
      const str = String(this.num);
      let arr = [];
      for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]));
      }
      return arr;
    },
  },
  data: () => ({ num: 886 }),
  mounted() {
    setInterval(() => this.num++, 10000);
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
