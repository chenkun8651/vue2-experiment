<template>
  <!-- 面包屑 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 面包屑">
      <!-- 正常面包屑 -->
      <div class="card-item">
        <h3>正常面包屑</h3>
        <div class="radio-box">
          <div class="string-set">
            <span style="margin-right: 5px">设置面包屑分隔符</span>
            <a-input style="width: 100px" v-model="breadcrumbSeparator" />
          </div>
        </div>
        <div>
          <a-breadcrumb :separator="breadcrumbSeparator">
            <a-breadcrumb-item>
              <router-link to="/"><a-icon type="home" /></router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <a-icon type="inbox" />
              <router-link to="/antDesignVue/basics">基础组件</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <span>按钮</span>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>
      <!-- 下拉菜单面包屑 -->
      <div class="card-item">
        <h3>下拉菜单面包屑</h3>
        <div class="radio-box">
          <div class="string-set">
            <span style="margin-right: 5px">面包屑分隔符</span>
            <a-input style="width: 100px" v-model="breadcrumbSeparator" />
          </div>
        </div>
        <div>
          <a-breadcrumb :separator="breadcrumbSeparator">
            <a-breadcrumb-item>
              <router-link to="/">主页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/antDesignVue/basics">基础组件</router-link>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/antDesignVue/basics">
                    基础组件
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/antDesignVue/navigation">
                    导航组件
                  </router-link>
                </a-menu-item>
                <a-menu-item>
                  <router-link to="/antDesignVue/form">表单组件</router-link>
                </a-menu-item>
              </a-menu>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <span>按钮</span>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 面包屑"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 面包屑"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 面包屑"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      breadcrumbSeparator: "/",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>