<template>
  <!-- 菜单 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 菜单">
      <div class="radio-box">
        <a-radio-group v-model="menuMode">
          <a-radio-button value="vertical">左垂直</a-radio-button>
          <a-radio-button value="vertical-right">右垂直</a-radio-button>
          <a-radio-button value="horizontal">水平</a-radio-button>
          <a-radio-button value="inline">内联</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="menuTheme">
          <a-radio-button value="light">亮色模式</a-radio-button>
          <a-radio-button value="dark">深色模式</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="menuMultiple">
          <a-radio-button :value="false">单选</a-radio-button>
          <a-radio-button :value="true">多选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="menuSelectable">
          <a-radio-button :value="false">没有选中效果</a-radio-button>
          <a-radio-button :value="true">有选中效果</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-menu
          style="width: 300px"
          :default-selected-keys="['1']"
          :default-open-keys="['3']"
          :mode="menuMode"
          :theme="menuTheme"
          :multiple="menuMultiple"
          :selectable="menuSelectable"
        >
          <a-menu-item key="1">
            <router-link to="/antDesignVue/basics">基础组件</router-link>
          </a-menu-item>
          <a-menu-item key="2" disabled>
            <router-link to="/antDesignVue/navigation"> 导航组件 </router-link>
          </a-menu-item>
          <a-sub-menu key="3">
            <span slot="title">
              <router-link to="/antDesignVue/form">表单组件</router-link>
            </span>
            <a-menu-item key="3-1">单选框</a-menu-item>
            <a-menu-item key="3-2">多选框</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="4">
            <span slot="title">
              <router-link to="/antDesignVue/other">展示组件</router-link>
            </span>
            <a-menu-item key="4-1">日历</a-menu-item>
            <a-menu-item key="4-2">卡片</a-menu-item>
            <a-menu-item key="4-3">走马灯</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 菜单"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 菜单"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 菜单"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      menuMode: "inline",
      menuTheme: "light",
      menuMultiple: false,
      menuSelectable: true,
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>