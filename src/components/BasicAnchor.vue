<template>
  <div class="w-3/12 pl-5">
    <a-anchor
      :offsetTop="60"
      :affix="true"
      :showInkInFixed="true"
      :getContainer="() => parentRefs.box"
    >
      <BasicAnchorLink v-for="link in parentList" :key="link.href" :link="link">
      </BasicAnchorLink>
    </a-anchor>
  </div>
</template>

<script>
export default {
  props: ["parentList", "parentRefs"],
  components: {
    BasicAnchorLink: () => import("./BasicAnchorLink.vue"),
  },
};
</script>