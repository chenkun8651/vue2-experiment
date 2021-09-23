<template>
  <div class="flex" ref="box">
    <!-- 页头 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 页头">
        <div>
          <a-page-header
            class="border border-gray-300"
            title="页面标题"
            sub-title="页面副标题"
            @back="() => $router.go(-1)"
          >
          </a-page-header>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 页头">
        <div>
          <el-page-header
            class="border border-gray-300 p-4"
            title="页面标题"
            content="页面内容"
            @back="() => $router.go(-1)"
          >
          </el-page-header>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 页头">
        <div class="text-red-500">AtUI框架没有页头</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 页头">
        <div class="text-yellow-500">ViewUI框架页头需要付费使用</div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.pageHeaderAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>