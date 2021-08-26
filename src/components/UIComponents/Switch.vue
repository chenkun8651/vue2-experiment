<template>
  <!-- 开关 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 开关">
      <div class="radio-box">
        <a-radio-group v-model="switchDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="switchSize">
          <a-radio-button :value="'default'">默认</a-radio-button>
          <a-radio-button :value="'small'">小型</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="switchLoading">
          <a-radio-button :value="true">开启加载</a-radio-button>
          <a-radio-button :value="false">关闭加载</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置打开时开关文本</span>
          <a-input style="width: 100px" v-model="switchCheckedChildren" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置关闭时开关文本</span>
          <a-input style="width: 100px" v-model="switchUnCheckedChildren" />
        </div>
      </div>
      <div>
        <a-switch
          :auto-focus="false"
          :disabled="switchDisabled"
          :size="switchSize"
          :loading="switchLoading"
          :checked-children="switchCheckedChildren"
          :un-checked-children="switchUnCheckedChildren"
        >
        </a-switch>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 开关"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 开关"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 开关"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      switchDisabled: false,
      switchSize: "default",
      switchLoading: false,
      switchCheckedChildren: "开",
      switchUnCheckedChildren: "关",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>