<template>
  <!-- 页头 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 页头">
      <div>
        <a-page-header
          style="border: 1px solid rgb(235, 237, 240)"
          title="导航组件"
          sub-title="这是导航组件的页头，箭头返回上一级"
          @back="() => $router.go(-1)"
        >
        </a-page-header>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 页头"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 页头"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 页头"></a-card>
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