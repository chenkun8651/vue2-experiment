<template>
  <!-- 日期选择框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 日期（时间）选择框">
      <!-- 通用API -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>通用API</h3>
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <a-radio-group v-model="AntDesignVue.disabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.allowClear">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.inputReadOnly">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.showTime">
            <a-radio-button :value="true">开启时间单位</a-radio-button>
            <a-radio-button :value="false">关闭时间单位</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <!-- 日期选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>日期选择框</h3>
        <div>
          <a-date-picker
            style="width: 200px"
            :disabled="AntDesignVue.disabled"
            :allow-clear="AntDesignVue.allowClear"
            :input-read-only="AntDesignVue.inputReadOnly"
            :show-time="AntDesignVue.showTime"
          >
          </a-date-picker>
        </div>
      </div>
      <!-- 范围日期选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>范围日期选择框</h3>
        <div>
          <a-range-picker
            style="width: 200px"
            :disabled="AntDesignVue.disabled"
            :allow-clear="AntDesignVue.allowClear"
            :input-read-only="AntDesignVue.inputReadOnly"
            :show-time="AntDesignVue.showTime"
          >
          </a-range-picker>
        </div>
      </div>
      <!-- 日期（周）选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>日期（周）选择框</h3>
        <div>
          <a-week-picker
            style="width: 200px"
            :disabled="AntDesignVue.disabled"
            :allow-clear="AntDesignVue.allowClear"
            :input-read-only="AntDesignVue.inputReadOnly"
          >
          </a-week-picker>
        </div>
      </div>
      <!-- 日期（月）选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>日期（月）选择框</h3>
        <div>
          <a-month-picker
            style="width: 200px"
            :disabled="AntDesignVue.disabled"
            :allow-clear="AntDesignVue.allowClear"
            :input-read-only="AntDesignVue.inputReadOnly"
          >
          </a-month-picker>
        </div>
      </div>
      <!-- 时间选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>时间选择框</h3>
        <div>
          <a-time-picker
            style="width: 200px"
            :disabled="AntDesignVue.disabled"
            :allow-clear="AntDesignVue.allowClear"
            :input-read-only="AntDesignVue.inputReadOnly"
          >
          </a-time-picker>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 日期（时间）选择框">
      <!-- 通用API -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>通用API</h3>
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <a-radio-group v-model="ElementUI.disabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.clearable">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.readonly">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.editable">
            <a-radio-button :value="true">开启编辑</a-radio-button>
            <a-radio-button :value="false">关闭编辑</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.size">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'medium'">medium</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
            <a-radio-button :value="'mini'">mini</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <!-- 日期选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>日期选择框</h3>
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <a-radio-group v-model="ElementUI.type">
            <a-radio-button :value="'year'">year</a-radio-button>
            <a-radio-button :value="'month'">month</a-radio-button>
            <a-radio-button :value="'week'">week</a-radio-button>
            <a-radio-button :value="'date'">date</a-radio-button>
            <a-radio-button :value="'datetime'">datetime</a-radio-button>
            <a-radio-button :value="'monthrange'">monthrange</a-radio-button>
            <a-radio-button :value="'daterange'">daterange</a-radio-button>
            <a-radio-button :value="'datetimerange'">
              datetimerange
            </a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <el-date-picker
            :disabled="ElementUI.disabled"
            :clearable="ElementUI.clearable"
            :readonly="ElementUI.readonly"
            :editable="ElementUI.editable"
            :size="ElementUI.size"
            v-model="ElementUI.value"
            :type="ElementUI.type"
          >
          </el-date-picker>
        </div>
      </div>
      <!-- 时间选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>时间选择框</h3>
        <div>
          <el-time-select
            :disabled="ElementUI.disabled"
            :clearable="ElementUI.clearable"
            :readonly="ElementUI.readonly"
            :editable="ElementUI.editable"
            :size="ElementUI.size"
            v-model="ElementUI.value2"
          >
          </el-time-select>
        </div>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 日期（时间）选择框">
      <div class="text-red-500">AtUI框架没有日期（时间）选择框</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 日期（时间）选择框">
      <!-- 通用API -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>通用API</h3>
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <a-radio-group v-model="ViewUI.disabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.clearable">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.readonly">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.editable">
            <a-radio-button :value="true">开启编辑</a-radio-button>
            <a-radio-button :value="false">关闭编辑</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.size">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.placement">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
            <a-radio-button :value="'left'">left</a-radio-button>
            <a-radio-button :value="'right'">right</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <!-- 日期选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>日期选择框</h3>
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <a-radio-group v-model="ViewUI.type">
            <a-radio-button :value="'year'">year</a-radio-button>
            <a-radio-button :value="'month'">month</a-radio-button>
            <a-radio-button :value="'date'">date</a-radio-button>
            <a-radio-button :value="'datetime'">datetime</a-radio-button>
            <a-radio-button :value="'daterange'">daterange</a-radio-button>
            <a-radio-button :value="'datetimerange'">
              datetimerange
            </a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.showWeekNumbers">
            <a-radio-button :value="true">显示星期数</a-radio-button>
            <a-radio-button :value="false">隐藏星期数</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <DatePicker
            :disabled="ViewUI.disabled"
            :clearable="ViewUI.clearable"
            :readonly="ViewUI.readonly"
            :editable="ViewUI.editable"
            :size="ViewUI.size"
            :placement="ViewUI.placement"
            :value="ViewUI.value"
            :type="ViewUI.type"
            :show-week-numbers="ViewUI.showWeekNumbers"
          >
          </DatePicker>
        </div>
      </div>
      <!-- 时间选择框 -->
      <div class="mx-5 mt-3 pb-5 border-b">
        <h3>时间选择框</h3>
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <a-radio-group v-model="ViewUI.type2">
            <a-radio-button :value="'time'">time</a-radio-button>
            <a-radio-button :value="'timerange'">timerange</a-radio-button>
          </a-radio-group>
          <div class="my-2 mr-5">
            <span style="margin-right: 5px">设置两个时间的分隔符</span>
            <a-input style="width: 100px" v-model="ViewUI.separator" />
          </div>
        </div>
        <div>
          <TimePicker
            :disabled="ViewUI.disabled"
            :clearable="ViewUI.clearable"
            :readonly="ViewUI.readonly"
            :editable="ViewUI.editable"
            :size="ViewUI.size"
            :placement="ViewUI.placement"
            :value="ViewUI.value2"
            :type="ViewUI.type2"
            :separator="ViewUI.separator"
          >
          </TimePicker>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        disabled: false,
        allowClear: false,
        inputReadOnly: false,
        showTime: false,
      },
      ElementUI: {
        disabled: false,
        clearable: false,
        readonly: false,
        editable: false,
        size: "small",
        value: null,
        type: "datetime",
        value2: null,
        value3: null,
      },
      ViewUI: {
        disabled: false,
        clearable: false,
        readonly: false,
        editable: false,
        size: "default",
        placement: "bottom",
        value: null,
        type: "datetime",
        showWeekNumbers: false,
        value2: null,
        type2: "time",
        separator: "-",
      },
    };
  },
  methods: {},
};
</script>