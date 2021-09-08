<template>
  <!-- 日历 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 日历">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="calendarFullscreen">
          <a-radio-button :value="true">全屏模式</a-radio-button>
          <a-radio-button :value="false">卡片模式</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="calendarMode">
          <a-radio-button :value="'month'">按月查看</a-radio-button>
          <a-radio-button :value="'year'">按年查看</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-calendar :fullscreen="calendarFullscreen" :mode="calendarMode">
        </a-calendar>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 日历">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置日历起始周期</span>
          <a-input-number
            style="width: 100px"
            v-model="calendarFirstDayOfWeek"
            :max="7"
            :min="1"
          />
        </div>
      </div>
      <div>
        <el-calendar :first-day-of-week="calendarFirstDayOfWeek"></el-calendar>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 日历">
      <div class="text-red-500">AtUI框架没有日历</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 日历">
      <div class="text-yellow-500">ViewUI框架的日历需要付费使用</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      calendarFullscreen: true,
      calendarMode: "month",
      // ElementUI
      calendarFirstDayOfWeek: 1,
    };
  },
  methods: {},
};
</script>