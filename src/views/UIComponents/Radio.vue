<template>
  <!-- 单选框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 单选框">
      <!-- 标准单选框 -->
      <div class="card-item">
        <h3>标准单选框</h3>
        <div class="radio-box">
          <a-radio-group v-model="radioDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-radio-group :options="radioOptions" :disabled="radioDisabled">
          </a-radio-group>
        </div>
      </div>
      <!-- 按钮单选框 -->
      <div class="card-item">
        <h3>按钮单选框（部分属性继承标准单选框）</h3>
        <div class="radio-box">
          <a-radio-group v-model="radioSize">
            <a-radio-button value="large">large</a-radio-button>
            <a-radio-button value="default">default</a-radio-button>
            <a-radio-button value="small">small</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="radioButtonStyle">
            <a-radio-button value="outline">outline</a-radio-button>
            <a-radio-button value="solid">solid</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-radio-group
            :disabled="radioDisabled"
            :size="radioSize"
            :button-style="radioButtonStyle"
          >
            <a-radio-button value="1">单选项一</a-radio-button>
            <a-radio-button value="2">单选项二</a-radio-button>
            <a-radio-button value="3">单选项三</a-radio-button>
            <a-radio-button value="4">单选项四</a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 单选框"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 单选框"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 单选框"></a-card>
  </div>
</template>

<script>
const radioOptions = [
  { label: "单选项一", value: 1 },
  { label: "单选项二", value: 2 },
  { label: "单选项三", value: 3 },
  { label: "单选项四", value: 4 },
];
export default {
  data() {
    return {
      // AntDesignVue
      radioOptions: radioOptions,
      radioSize: "default",
      radioDisabled: false,
      radioButtonStyle: "outline",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>