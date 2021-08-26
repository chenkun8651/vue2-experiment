<template>
  <!-- 标签页 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 标签页">
      <div class="radio-box">
        <a-radio-group v-model="tabPaneMode">
          <a-radio-button value="top">上方标签页</a-radio-button>
          <a-radio-button value="right">右侧标签页</a-radio-button>
          <a-radio-button value="left">左侧标签页</a-radio-button>
          <a-radio-button value="bottom">下方标签页</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tabPaneSize">
          <a-radio-button value="large">大型</a-radio-button>
          <a-radio-button value="default">默认</a-radio-button>
          <a-radio-button value="small">小型</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tabPaneType">
          <a-radio-button value="line">横线类型</a-radio-button>
          <a-radio-button value="card">卡片类型</a-radio-button>
          <a-radio-button value="editable-card"> 编辑卡片类型 </a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-tabs
          default-active-key="1"
          :size="tabPaneSize"
          :type="tabPaneType"
          :tab-position="tabPaneMode"
          :tab-bar-gutter="5"
        >
          <a-tab-pane key="1" tab="基础组件">基础组件内容</a-tab-pane>
          <a-tab-pane key="2" force-render>
            <span slot="tab">
              <a-icon type="inbox" />
              导航组件
            </span>
            导航组件内容
          </a-tab-pane>
          <a-tab-pane key="3" tab="表单组件" force-render disabled>
            表单组件内容
          </a-tab-pane>
          <a-button slot="tabBarExtraContent">其他操作</a-button>
        </a-tabs>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 标签页"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 标签页"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 标签页"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      tabPaneMode: "top",
      tabPaneSize: "default",
      tabPaneType: "line",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>