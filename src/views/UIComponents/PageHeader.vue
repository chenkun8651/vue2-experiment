<template>
  <!-- 页头 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 页头">
      <div>
        <a-page-header
          style="border: 1px solid rgb(235, 237, 240)"
          title="页头"
          sub-title="当前页面信息"
          @back="() => $router.go(-1)"
        >
        </a-page-header>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 页头">
      <div>
        <el-page-header
          style="border: 1px solid rgb(235, 237, 240); padding: 15px"
          title="页头"
          content="当前页面信息"
          @back="() => $router.go(-1)"
        >
        </el-page-header>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 页头">
      <div class="c-f5222d">AtUI框架没有页头</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 页头">
      <div class="c-faad14">ViewUI框架页头需要付费使用</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>