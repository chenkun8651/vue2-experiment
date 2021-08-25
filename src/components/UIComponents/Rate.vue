<template>
  <!-- 评分 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 评分">
      <div class="radio-box">
        <a-radio-group v-model="rateDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="rateAllowClear">
          <a-radio-button :value="true">开启清除</a-radio-button>
          <a-radio-button :value="false">关闭清除</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="rateAllowHalf">
          <a-radio-button :value="true">开启半选</a-radio-button>
          <a-radio-button :value="false">关闭半选</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置评分数</span>
          <a-input-number
            style="width: 100px"
            v-model="rateCount"
            :max="10"
            :min="1"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置评分图标</span>
          <a-input style="width: 100px" v-model="rateIcon" />
        </div>
      </div>
      <div>
        <a-rate
          :autoFocus="false"
          :default-value="3"
          :disabled="rateDisabled"
          :allow-clear="rateAllowClear"
          :allow-half="rateAllowHalf"
          :count="rateCount"
        >
          <a-icon slot="character" :type="rateIcon" />
        </a-rate>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 评分"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 评分"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 评分"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      rateDisabled: false,
      rateAllowClear: false,
      rateAllowHalf: false,
      rateCount: 5,
      rateIcon: "heart",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>