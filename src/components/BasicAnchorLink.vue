<template>
  <a-anchor-link :href="link.href" :title="link.title">
    <template v-if="link.children && link.children.length">
      <template v-for="link2 in link.children">
        <BasicAnchorLink :key="link2.href" :link="link2"></BasicAnchorLink>
      </template>
    </template>
  </a-anchor-link>
</template>

<script>
export default {
  name: "BasicAnchorLink",
  props: ["link"],
};
</script>