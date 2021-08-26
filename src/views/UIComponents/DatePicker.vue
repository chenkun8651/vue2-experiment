<template>
  <!-- 日期选择框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 日期选择框">
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
          <a-radio-button :value="true">开启时间单位</a-radio-button>
          <a-radio-button :value="false">关闭时间单位</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-date-picker
          style="width: 200px; margin: 0 30px 20px 0"
          placeholder="选择日期"
          :autoFocus="false"
          :disabled="dateDisabled"
          :allowClear="dateAllowClear"
          :input-read-only="dateInputReadOnly"
          :show-time="dataShowTime"
        >
        </a-date-picker>
        <a-week-picker
          style="width: 200px; margin: 0 30px 20px 0"
          placeholder="选择周"
          :autoFocus="false"
          :disabled="dateDisabled"
          :allowClear="dateAllowClear"
          :input-read-only="dateInputReadOnly"
        >
        </a-week-picker>
        <a-month-picker
          style="width: 200px; margin: 0 30px 20px 0"
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
    <a-card class="card-margin" title="ElementUI 日期选择框">
      <div class="radio-box">
        <a-radio-group v-model="dateTypeE">
          <a-radio-button :value="'year'">year</a-radio-button>
          <a-radio-button :value="'month'">month</a-radio-button>
          <a-radio-button :value="'week'">week</a-radio-button>
          <a-radio-button :value="'date'">date</a-radio-button>
          <a-radio-button :value="'dates'">dates</a-radio-button>
          <a-radio-button :value="'datetime'">datetime</a-radio-button>
          <a-radio-button :value="'datetimerange'">
            datetimerange
          </a-radio-button>
          <a-radio-button :value="'daterange'">daterange</a-radio-button>
          <a-radio-button :value="'monthrange'">monthrange</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateSizeE">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateAlignE">
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'center'">center</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateDisabledE">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateClearableE">
          <a-radio-button :value="true">开启清除</a-radio-button>
          <a-radio-button :value="false">关闭清除</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateReadonlyE">
          <a-radio-button :value="true">开启只读</a-radio-button>
          <a-radio-button :value="false">关闭只读</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dateEditableE">
          <a-radio-button :value="true">开启编辑</a-radio-button>
          <a-radio-button :value="false">关闭编辑</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置日期中分割文本</span>
          <a-input style="width: 100px" v-model="dateRangeSeparatorE" />
        </div>
      </div>
      <div>
        <el-date-picker
          :type="dateTypeE"
          :size="dateSizeE"
          :align="dateAlignE"
          :disabled="dateDisabledE"
          :clearable="dateClearableE"
          :readonly="dateReadonlyE"
          :editable="dateEditableE"
          :range-separator="dateRangeSeparatorE"
        >
        </el-date-picker>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 日期选择框"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 日期选择框"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      dateDisabled: false,
      dateAllowClear: false,
      dateInputReadOnly: false,
      dataShowTime: false,
      // ElementUI
      dateTypeE: "date",
      dateSizeE: "small",
      dateAlignE: "right",
      dateDisabledE: false,
      dateClearableE: false,
      dateReadonlyE: false,
      dateEditableE: false,
      dateRangeSeparatorE: "至",
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>