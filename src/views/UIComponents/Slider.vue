<template>
  <!-- 滑动输入条 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 滑动输入条">
      <div class="radio-box">
        <a-radio-group v-model="sliderDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="sliderVertical">
          <a-radio-button :value="true">竖直方向</a-radio-button>
          <a-radio-button :value="false">水平方向</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="sliderDots">
          <a-radio-button :value="true">开启拖拽到刻度</a-radio-button>
          <a-radio-button :value="false">关闭拖拽到刻度</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="sliderRange">
          <a-radio-button :value="true">开启双滑块</a-radio-button>
          <a-radio-button :value="false">关闭双滑块</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="sliderReverse">
          <a-radio-button :value="true">开启反向</a-radio-button>
          <a-radio-button :value="false">关闭反向</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="sliderTooltipVisible">
          <a-radio-button :value="true">显示提示</a-radio-button>
          <a-radio-button :value="false">隐藏提示</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="sliderTooltipPlacement">
          <a-radio-button :value="'top'">上方提示</a-radio-button>
          <a-radio-button :value="'bottom'">下方提示</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最大值</span>
          <a-input-number
            style="width: 100px"
            v-model="sliderMax"
            :max="500"
            :min="sliderMin"
          />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最小值</span>
          <a-input-number
            style="width: 100px"
            v-model="sliderMin"
            :max="sliderMax"
            :min="1"
          />
        </div>
      </div>
      <div>
        <a-slider
          style="height: 100px"
          :auto-focus="false"
          :disabled="sliderDisabled"
          :vertical="sliderVertical"
          :dots="sliderDots"
          :range="sliderRange"
          :reverse="sliderReverse"
          :tooltip-visible="sliderTooltipVisible"
          :tooltip-placement="sliderTooltipPlacement"
          :max="sliderMax"
          :min="sliderMin"
          :tip-formatter="sliderTipFormatter"
        />
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 滑动输入条"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 滑动输入条"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 滑动输入条"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      sliderDisabled: false,
      sliderDots: false,
      sliderRange: false,
      sliderReverse: false,
      sliderVertical: false,
      sliderTooltipVisible: false,
      sliderTooltipPlacement: "top",
      sliderMax: 100,
      sliderMin: 1,
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {
    sliderTipFormatter(value) {
      return `${value}%`;
    },
  },
};
</script>