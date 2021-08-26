<template>
  <!-- 时间选择框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 时间选择框">
      <div class="radio-box">
        <a-radio-group v-model="dateDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateAllowClear">
          <a-radio-button :value="true">开启清除</a-radio-button>
          <a-radio-button :value="false">关闭清除</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateInputReadOnly">
          <a-radio-button :value="true">开启只读</a-radio-button>
          <a-radio-button :value="false">关闭只读</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dataShowTime">
          <a-radio-button :value="true">开启选择时间</a-radio-button>
          <a-radio-button :value="false">关闭选择时间</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-date-picker
          style="width: 200px; margin: 0 50px 20px 0"
          placeholder="选择日期"
          :autoFocus="false"
          :disabled="dateDisabled"
          :allowClear="dateAllowClear"
          :input-read-only="dateInputReadOnly"
          :show-time="dataShowTime"
        >
        </a-date-picker>
        <a-week-picker
          style="width: 200px; margin: 0 50px 20px 0"
          placeholder="选择周"
          :autoFocus="false"
          :disabled="dateDisabled"
          :allowClear="dateAllowClear"
          :input-read-only="dateInputReadOnly"
        >
        </a-week-picker>
        <a-month-picker
          style="width: 200px; margin: 0 50px 20px 0"
          placeholder="选择月份"
          :autoFocus="false"
          :disabled="dateDisabled"
          :allowClear="dateAllowClear"
          :input-read-only="dateInputReadOnly"
        >
        </a-month-picker>
        <a-range-picker
          style="width: 400px"
          :autoFocus="false"
          :disabled="dateDisabled"
          :allowClear="dateAllowClear"
          :input-read-only="dateInputReadOnly"
          :show-time="dataShowTime"
        >
        </a-range-picker>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 时间选择框"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 时间选择框"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 时间选择框"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      timeDisabled: false,
      timeAllowClear: false,
      timeInputReadOnly: false,
      timeUse12Hours: false,
      timeFormat: "HH:mm:ss",
      timeHourStep: 1,
      timeMinuteStep: 1,
      timeSecondStep: 1,
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>