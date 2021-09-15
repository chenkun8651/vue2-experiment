<template>
  <div class="flex" ref="box">
    <!-- 日历 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 日历">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启全屏模式</span>
            <a-switch v-model="AntDesignVue.fullscreen" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置日历查看方式</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.mode">
              <el-option :value="'month'">month</el-option>
              <el-option :value="'year'">year</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-calendar
            :fullscreen="AntDesignVue.fullscreen"
            :mode="AntDesignVue.mode"
          >
          </a-calendar>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 日历">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置日历起始周期</span>
            <a-input-number
              class="w-24"
              v-model="ElementUI.firstDayOfWeek"
              :max="7"
              :min="1"
            />
          </div>
        </div>
        <div>
          <el-calendar :first-day-of-week="ElementUI.firstDayOfWeek">
          </el-calendar>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 日历">
        <div class="text-red-500">AtUI框架没有日历</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 日历">
        <div class="text-yellow-500">ViewUI框架的日历需要付费使用</div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.calendarAnchor"
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
        fullscreen: true,
        mode: "month",
      },
      ElementUI: {
        firstDayOfWeek: 1,
      },
    };
  },
  methods: {},
};
</script>