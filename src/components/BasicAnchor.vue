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
  name: "BasicAnchor",
  props: {
    parentList: {
      // 渲染锚点数组
      type: Array,
      required: true,
    },
    parentRefs: {
      // 控制锚点滚动区域节点
      type: Object,
      require: true,
    },
  },
  components: {
    BasicAnchorLink: () => import("./BasicAnchorLink.vue"),
  },
};
</script>