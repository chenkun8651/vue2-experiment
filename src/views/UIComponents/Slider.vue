<template>
  <!-- 滑动输入条 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 滑动输入条">
      <div class="control-box">
        <a-radio-group v-model="AntDesignVue.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.vertical">
          <a-radio-button :value="true">竖直方向</a-radio-button>
          <a-radio-button :value="false">水平方向</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.reverse">
          <a-radio-button :value="true">开启反向</a-radio-button>
          <a-radio-button :value="false">关闭反向</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.dots">
          <a-radio-button :value="true">显示拖拽刻度</a-radio-button>
          <a-radio-button :value="false">隐藏拖拽到刻度</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.range">
          <a-radio-button :value="true">显示范围</a-radio-button>
          <a-radio-button :value="false">隐藏范围</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.tooltipVisible">
          <a-radio-button :value="true">显示提示</a-radio-button>
          <a-radio-button :value="false">隐藏提示</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.tooltipPlacement">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最大值</span>
          <a-input-number
            style="width: 100px"
            v-model="AntDesignVue.max"
            :max="500"
            :min="AntDesignVue.min"
          />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最小值</span>
          <a-input-number
            style="width: 100px"
            v-model="AntDesignVue.min"
            :max="AntDesignVue.max"
            :min="0"
          />
        </div>
      </div>
      <div>
        <a-slider
          style="height: 100px"
          v-model="AntDesignVue.value"
          :disabled="AntDesignVue.disabled"
          :vertical="AntDesignVue.vertical"
          :reverse="AntDesignVue.reverse"
          :dots="AntDesignVue.dots"
          :range="AntDesignVue.range"
          :tooltip-visible="AntDesignVue.tooltipVisible"
          :tooltip-placement="AntDesignVue.tooltipPlacement"
          :max="AntDesignVue.max"
          :min="AntDesignVue.min"
          :tip-formatter="sliderTipFormatter"
        />
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 滑动输入条">
      <div class="control-box">
        <a-radio-group v-model="ElementUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.vertical">
          <a-radio-button :value="true">竖直方向</a-radio-button>
          <a-radio-button :value="false">水平方向</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.range">
          <a-radio-button :value="true">显示范围</a-radio-button>
          <a-radio-button :value="false">隐藏范围</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.showStops">
          <a-radio-button :value="true">显示间断点</a-radio-button>
          <a-radio-button :value="false">隐藏间断点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.showTooltip">
          <a-radio-button :value="true">显示提示</a-radio-button>
          <a-radio-button :value="false">隐藏提示</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条步数</span>
          <a-input-number
            style="width: 100px"
            v-model="ElementUI.step"
            :min="1"
          />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最大值</span>
          <a-input-number
            style="width: 100px"
            v-model="ElementUI.max"
            :max="500"
            :min="ElementUI.min"
          />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最小值</span>
          <a-input-number
            style="width: 100px"
            v-model="ElementUI.min"
            :max="ElementUI.max"
            :min="0"
          />
        </div>
      </div>
      <div>
        <el-slider
          style="height: 100px"
          v-model="ElementUI.value"
          :disabled="ElementUI.disabled"
          :range="ElementUI.range"
          :show-stops="ElementUI.showStops"
          :show-tooltip="ElementUI.showTooltip"
          :step="ElementUI.step"
          :max="ElementUI.max"
          :min="ElementUI.min"
          :vertical="ElementUI.vertical"
          :format-tooltip="sliderTipFormatter"
        >
        </el-slider>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 滑动输入条">
      <div class="control-box">
        <a-radio-group v-model="AtUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条步数</span>
          <a-input-number style="width: 100px" v-model="AtUI.step" :min="1" />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最大值</span>
          <a-input-number
            style="width: 100px"
            v-model="AtUI.max"
            :max="500"
            :min="AtUI.min"
          />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最小值</span>
          <a-input-number
            style="width: 100px"
            v-model="AtUI.min"
            :max="AtUI.max"
            :min="0"
          />
        </div>
      </div>
      <div>
        <at-slider
          style="height: 100px"
          v-model="AtUI.value"
          :disabled="AtUI.disabled"
          :step="AtUI.step"
          :max="AtUI.max"
          :min="AtUI.min"
        >
        </at-slider>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 滑动输入条">
      <div class="control-box">
        <a-radio-group v-model="ViewUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.range">
          <a-radio-button :value="true">显示范围</a-radio-button>
          <a-radio-button :value="false">隐藏范围</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.showStops">
          <a-radio-button :value="true">显示间断点</a-radio-button>
          <a-radio-button :value="false">隐藏间断点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.ShowTip">
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'always'">always</a-radio-button>
          <a-radio-button :value="'never'">never</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条步数</span>
          <a-input-number style="width: 100px" v-model="ViewUI.step" :min="1" />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最大值</span>
          <a-input-number
            style="width: 100px"
            v-model="ViewUI.max"
            :max="500"
            :min="ViewUI.min"
          />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置输入条最小值</span>
          <a-input-number
            style="width: 100px"
            v-model="ViewUI.min"
            :max="ViewUI.max"
            :min="0"
          />
        </div>
      </div>
      <div>
        <Slider
          v-model="ViewUI.value"
          :disabled="ViewUI.disabled"
          :range="ViewUI.range"
          :show-stops="ViewUI.showStops"
          :show-tip="ViewUI.ShowTip"
          :step="ViewUI.step"
          :max="ViewUI.max"
          :min="ViewUI.min"
          :tip-format="sliderTipFormatter"
        >
        </Slider>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        value: 10,
        disabled: false,
        vertical: false,
        reverse: false,
        dots: false,
        range: false,
        tooltipVisible: false,
        tooltipPlacement: "top",
        max: 100,
        min: 0,
      },
      ElementUI: {
        value: 10,
        disabled: false,
        vertical: false,
        range: false,
        showStops: false,
        showTooltip: false,
        step: 1,
        max: 100,
        min: 0,
      },
      AtUI: {
        value: 10,
        disabled: false,
        step: 1,
        max: 100,
        min: 0,
      },
      ViewUI: {
        value: 10,
        disabled: false,
        range: false,
        showStops: false,
        ShowTip: "hover",
        step: 1,
        max: 100,
        min: 0,
      },
    };
  },
  methods: {
    sliderTipFormatter(value) {
      return `${value}%`;
    },
  },
};
</script>