<template>
  <!-- 进度条 -->
  <div>
    <a-card class="my-5" title="AntDesignVue 进度条">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="progressType">
          <a-radio-button :value="'line'">line</a-radio-button>
          <a-radio-button :value="'circle'">circle</a-radio-button>
          <a-radio-button :value="'dashboard'">dashboard</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="progressShowInfo">
          <a-radio-button :value="true">显示数值或图标</a-radio-button>
          <a-radio-button :value="false">隐藏数值或图标</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条百分比</span>
          <a-input-number class="w-24" v-model="progressPercent" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置已完成百分比</span>
          <a-input-number
            class="w-24"
            v-model="progressSuccessPercent"
          />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条线条宽度</span>
          <a-input-number class="w-24" v-model="progressStrokeWidth" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条渐变起始颜色</span>
          <a-input class="w-24" v-model="progressStrokeColor['0%']" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条渐变末尾颜色</span>
          <a-input class="w-24" v-model="progressStrokeColor['100%']" />
        </div>
        <a-radio-group v-show="progressShowInfo" v-model="progressStatus">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'exception'">exception</a-radio-button>
          <a-radio-button :value="'normal'">normal</a-radio-button>
          <a-radio-button :value="'active'">active</a-radio-button>
        </a-radio-group>
        <div
          v-if="progressType === 'circle' || progressType === 'dashboard'"
          class="my-2 mr-5"
        >
          <span class="mr-2">设置进度条画布宽度</span>
          <a-input-number class="w-24" v-model="progressWidth" />
        </div>
        <div v-if="progressType === 'dashboard'" class="my-2 mr-5">
          <span class="mr-2">设置仪表盘进度条缺口所占角度</span>
          <a-input-number
            class="w-24"
            v-model="progressGapDegree"
            :max="360"
            :min="0"
          />
        </div>
        <a-radio-group
          v-if="progressType === 'dashboard'"
          v-model="progressGapPosition"
        >
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-progress
          :type="progressType"
          :show-info="progressShowInfo"
          :status="progressStatus"
          :percent="progressPercent"
          :success-percent="progressSuccessPercent"
          :stroke-width="progressStrokeWidth"
          :stroke-color="progressStrokeColor"
          :width="progressWidth"
          :gap-degree="progressGapDegree"
          :gap-position="progressGapPosition"
        >
        </a-progress>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 进度条">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="progressTypeE">
          <a-radio-button :value="'line'">line</a-radio-button>
          <a-radio-button :value="'circle'">circle</a-radio-button>
          <a-radio-button :value="'dashboard'">dashboard</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="progressShowTextE">
          <a-radio-button :value="true">显示数值或图标</a-radio-button>
          <a-radio-button :value="false">隐藏数值或图标</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条百分比</span>
          <a-input-number class="w-24" v-model="progressPercentageE" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条线条宽度</span>
          <a-input-number class="w-24" v-model="progressStrokeWidthE" />
        </div>
        <div
          v-show="progressTypeE === 'circle' || progressTypeE === 'dashboard'"
          class="my-2 mr-5"
        >
          <span class="mr-2">设置进度条画布宽度</span>
          <a-input-number class="w-24" v-model="progressWidthE" />
        </div>
        <a-radio-group v-show="progressShowTextE" v-model="progressStatusE">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'exception'">exception</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
        </a-radio-group>
        <a-radio-group
          v-show="progressTypeE === 'line' && progressShowTextE"
          v-model="progressTextInsideE"
        >
          <a-radio-button :value="true">显示进度条内置的文字</a-radio-button>
          <a-radio-button :value="false">隐藏进度条内置的文字</a-radio-button>
        </a-radio-group>
        <a-radio-group
          v-show="progressTypeE === 'line' || progressTypeE === 'circle'"
          v-model="progressStrokeLinecapE"
        >
          <a-radio-button :value="'round'">round</a-radio-button>
          <a-radio-button :value="'butt'">butt</a-radio-button>
          <a-radio-button :value="'square'">square</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-progress
          :type="progressTypeE"
          :status="progressStatusE"
          :percentage="progressPercentageE"
          :width="progressWidthE"
          :show-text="progressShowTextE"
          :text-inside="progressTextInsideE"
          :stroke-width="progressStrokeWidthE"
          :stroke-linecap="progressStrokeLinecapE"
        >
        </el-progress>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 进度条">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条百分比</span>
          <a-input-number class="w-24" v-model="progressPercentA" />
        </div>
        <a-radio-group v-model="progressStatusA">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条线条宽度</span>
          <a-input-number class="w-24" v-model="progressStrokeWidthA" />
        </div>
      </div>
      <div>
        <at-progress
          :percent="progressPercentA"
          :status="progressStatusA"
          :stroke-width="progressStrokeWidthA"
        >
        </at-progress>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 进度条">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="progressVerticalV">
          <a-radio-button :value="true">垂直</a-radio-button>
          <a-radio-button :value="false">水平</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="progressHideInfoV">
          <a-radio-button :value="true">显示数值或图标</a-radio-button>
          <a-radio-button :value="false">隐藏数值或图标</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条百分比</span>
          <a-input-number class="w-24" v-model="progressPercentV" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置已完成百分比</span>
          <a-input-number
            class="w-24"
            v-model="progressSuccessPercentV"
          />
        </div>
        <a-radio-group v-model="progressStatusV">
          <a-radio-button :value="'normal'">normal</a-radio-button>
          <a-radio-button :value="'active'">active</a-radio-button>
          <a-radio-button :value="'wrong'">wrong</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置进度条线条宽度</span>
          <a-input-number class="w-24" v-model="progressStrokeWidthV" />
        </div>
        <a-radio-group v-model="progressTextInsideV">
          <a-radio-button :value="true">显示进度条内置的文字</a-radio-button>
          <a-radio-button :value="false">隐藏进度条内置的文字</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Progress
          :vertical="progressVerticalV"
          :hide-info="progressHideInfoV"
          :percent="progressPercentV"
          :success-percent="progressSuccessPercentV"
          :status="progressStatusV"
          :stroke-width="progressStrokeWidthV"
          :text-inside="progressTextInsideV"
        >
        </Progress>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      progressType: "line",
      progressShowInfo: false,
      progressPercent: 80,
      progressSuccessPercent: 0,
      progressStrokeWidth: 10,
      progressStrokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      progressStatus: "success",
      progressWidth: 130,
      progressGapDegree: 0,
      progressGapPosition: "top",
      // ElementUI
      progressTypeE: "line",
      progressShowTextE: true,
      progressPercentageE: 80,
      progressStrokeWidthE: 10,
      progressWidthE: 130,
      progressStatusE: "success",
      progressTextInsideE: false,
      progressStrokeLinecapE: "round",
      // AtUI
      progressPercentA: 80,
      progressStatusA: "success",
      progressStrokeWidthA: 10,
      // ViewUI
      progressVerticalV: false,
      progressHideInfoV: false,
      progressPercentV: 80,
      progressSuccessPercentV: 0,
      progressStatusV: "normal",
      progressStrokeWidthV: 10,
      progressTextInsideV: false,
    };
  },
  methods: {},
};
</script>