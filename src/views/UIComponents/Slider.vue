<template>
  <div class="flex" ref="box">
    <!-- 滑动输入条 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 滑动输入条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示垂直方向</span>
            <a-switch v-model="AntDesignVue.vertical" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示拖拽刻度</span>
            <a-switch v-model="AntDesignVue.dots" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示提示</span>
            <a-switch v-model="AntDesignVue.tooltipVisible" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启反向</span>
            <a-switch v-model="AntDesignVue.reverse" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启范围滑动</span>
            <a-switch v-model="AntDesignVue.range" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置滑动输入条弹出位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.tooltipPlacement"
            >
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最大值</span>
            <a-input-number
              class="w-24"
              v-model="AntDesignVue.max"
              :max="500"
              :min="AntDesignVue.min"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最小值</span>
            <a-input-number
              class="w-24"
              v-model="AntDesignVue.min"
              :max="AntDesignVue.max"
              :min="0"
            />
          </div>
        </div>
        <div>
          <a-slider
            class="w-24"
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
      <a-card id="2" class="my-5" title="ElementUI 滑动输入条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示垂直方向</span>
            <a-switch v-model="ElementUI.vertical" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示间断点</span>
            <a-switch v-model="ElementUI.showStops" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示提示</span>
            <a-switch v-model="ElementUI.showTooltip" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启范围滑动</span>
            <a-switch v-model="ElementUI.range" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条步数</span>
            <a-input-number class="w-24" v-model="ElementUI.step" :min="1" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最大值</span>
            <a-input-number
              class="w-24"
              v-model="ElementUI.max"
              :max="500"
              :min="ElementUI.min"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最小值</span>
            <a-input-number
              class="w-24"
              v-model="ElementUI.min"
              :max="ElementUI.max"
              :min="0"
            />
          </div>
        </div>
        <div>
          <el-slider
            class="w-24"
            v-model="ElementUI.value"
            :disabled="ElementUI.disabled"
            :vertical="ElementUI.vertical"
            :show-stops="ElementUI.showStops"
            :show-tooltip="ElementUI.showTooltip"
            :range="ElementUI.range"
            :step="ElementUI.step"
            :max="ElementUI.max"
            :min="ElementUI.min"
            :format-tooltip="sliderTipFormatter"
          >
          </el-slider>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 滑动输入条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AtUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条步数</span>
            <a-input-number class="w-24" v-model="AtUI.step" :min="1" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最大值</span>
            <a-input-number
              class="w-24"
              v-model="AtUI.max"
              :max="500"
              :min="AtUI.min"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最小值</span>
            <a-input-number
              class="w-24"
              v-model="AtUI.min"
              :max="AtUI.max"
              :min="0"
            />
          </div>
        </div>
        <div>
          <at-slider
            class="w-24"
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
      <a-card id="4" class="my-5" title="ViewUI 滑动输入条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示间断点</span>
            <a-switch v-model="ViewUI.showStops" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启范围滑动</span>
            <a-switch v-model="ViewUI.range" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置提示触发方式</span>
            <el-select size="small" class="w-36" v-model="ViewUI.showTip">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'always'">always</el-option>
              <el-option :value="'never'">never</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条步数</span>
            <a-input-number class="w-24" v-model="ViewUI.step" :min="1" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最大值</span>
            <a-input-number
              class="w-24"
              v-model="ViewUI.max"
              :max="500"
              :min="ViewUI.min"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置输入条最小值</span>
            <a-input-number
              class="w-24"
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
            :show-tip="ViewUI.showTip"
            :step="ViewUI.step"
            :max="ViewUI.max"
            :min="ViewUI.min"
            :tip-format="sliderTipFormatter"
          >
          </Slider>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.sliderAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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
        dots: false,
        tooltipVisible: false,
        reverse: false,
        range: false,
        tooltipPlacement: "top",
        max: 100,
        min: 0,
      },
      ElementUI: {
        value: 10,
        disabled: false,
        vertical: false,
        showStops: false,
        showTooltip: false,
        range: false,
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
        showStops: false,
        range: false,
        showTip: "hover",
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