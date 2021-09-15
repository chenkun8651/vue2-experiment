<template>
  <div class="flex" ref="box">
    <!-- 日期选择框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 日期（时间）选择框">
        <!-- 通用API -->
        <div id="1-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用</span>
              <a-switch v-model="AntDesignVue.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启清除功能</span>
              <a-switch v-model="AntDesignVue.allowClear" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启只读功能</span>
              <a-switch v-model="AntDesignVue.inputReadOnly" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示时间单位</span>
              <a-switch v-model="AntDesignVue.showTime" />
            </div>
          </div>
        </div>
        <!-- 日期选择框 -->
        <div id="1-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>日期选择框</h3>
          <div>
            <a-date-picker
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :input-read-only="AntDesignVue.inputReadOnly"
              :show-time="AntDesignVue.showTime"
            >
            </a-date-picker>
          </div>
        </div>
        <!-- 范围日期选择框 -->
        <div id="1-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>范围日期选择框</h3>
          <div>
            <a-range-picker
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :input-read-only="AntDesignVue.inputReadOnly"
              :show-time="AntDesignVue.showTime"
            >
            </a-range-picker>
          </div>
        </div>
        <!-- 日期（周）选择框 -->
        <div id="1-4" class="mx-5 mt-3 pb-5 border-b">
          <h3>日期（周）选择框</h3>
          <div>
            <a-week-picker
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :input-read-only="AntDesignVue.inputReadOnly"
            >
            </a-week-picker>
          </div>
        </div>
        <!-- 日期（月）选择框 -->
        <div id="1-5" class="mx-5 mt-3 pb-5 border-b">
          <h3>日期（月）选择框</h3>
          <div>
            <a-month-picker
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :input-read-only="AntDesignVue.inputReadOnly"
            >
            </a-month-picker>
          </div>
        </div>
        <!-- 时间选择框 -->
        <div id="1-6" class="mx-5 mt-3 pb-5 border-b">
          <h3>时间选择框</h3>
          <div>
            <a-time-picker
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :input-read-only="AntDesignVue.inputReadOnly"
            >
            </a-time-picker>
          </div>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 日期（时间）选择框">
        <!-- 通用API -->
        <div id="2-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用</span>
              <a-switch v-model="ElementUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启清除功能</span>
              <a-switch v-model="ElementUI.clearable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启只读功能</span>
              <a-switch v-model="ElementUI.readonly" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启编辑功能</span>
              <a-switch v-model="ElementUI.editable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置日期选择框大小</span>
              <el-select size="small" class="w-36" v-model="ElementUI.size">
                <el-option :value="'large'">large</el-option>
                <el-option :value="'medium'">medium</el-option>
                <el-option :value="'small'">small</el-option>
                <el-option :value="'mini'">mini</el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- 日期选择框 -->
        <div id="2-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>日期选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置日期选择框类型</span>
              <el-select size="small" class="w-36" v-model="ElementUI.type">
                <el-option :value="'year'">year</el-option>
                <el-option :value="'month'">month</el-option>
                <el-option :value="'week'">week</el-option>
                <el-option :value="'date'">date</el-option>
                <el-option :value="'datetime'">datetime</el-option>
                <el-option :value="'monthrange'">monthrange</el-option>
                <el-option :value="'daterange'">daterange</el-option>
                <el-option :value="'datetimerange'">datetimerange</el-option>
              </el-select>
            </div>
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
        <div id="2-3" class="mx-5 mt-3 pb-5 border-b">
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
      <a-card id="3" class="my-5" title="AtUI 日期（时间）选择框">
        <div class="text-red-500">AtUI框架没有日期（时间）选择框</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 日期（时间）选择框">
        <!-- 通用API -->
        <div id="4-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用</span>
              <a-switch v-model="ViewUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启清除功能</span>
              <a-switch v-model="ViewUI.clearable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启只读功能</span>
              <a-switch v-model="ViewUI.readonly" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启编辑功能</span>
              <a-switch v-model="ViewUI.editable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置日期选择框大小</span>
              <el-select size="small" class="w-36" v-model="ViewUI.size">
                <el-option :value="'large'">large</el-option>
                <el-option :value="'default'">default</el-option>
                <el-option :value="'small'">small</el-option>
              </el-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置日期选择框弹出位置</span>
              <el-select size="small" class="w-36" v-model="ViewUI.placement">
                <el-option :value="'top'">top</el-option>
                <el-option :value="'bottom'">bottom</el-option>
                <el-option :value="'left'">left</el-option>
                <el-option :value="'right'">right</el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- 日期选择框 -->
        <div id="4-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>日期选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示星期数</span>
              <a-switch v-model="ViewUI.showWeekNumbers" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置日期选择框类型</span>
              <el-select size="small" class="w-36" v-model="ViewUI.type">
                <el-option :value="'year'">year</el-option>
                <el-option :value="'month'">month</el-option>
                <el-option :value="'date'">date</el-option>
                <el-option :value="'datetime'">datetime</el-option>
                <el-option :value="'daterange'">daterange</el-option>
                <el-option :value="'datetimerange'">datetimerange</el-option>
              </el-select>
            </div>
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
              :show-week-numbers="ViewUI.showWeekNumbers"
              :type="ViewUI.type"
            >
            </DatePicker>
          </div>
        </div>
        <!-- 时间选择框 -->
        <div id="4-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>时间选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置日期选择框类型</span>
              <el-select size="small" class="w-36" v-model="ViewUI.type2">
                <el-option :value="'time'">time</el-option>
                <el-option :value="'timerange'">timerange</el-option>
              </el-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置两个时间的分隔符</span>
              <a-input class="w-24" v-model="ViewUI.separator" />
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
    <BasicAnchor
      :parentList="this.AnchorInfo.datePickerAnchor"
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
        showWeekNumbers: false,
        type: "datetime",
        value2: null,
        type2: "time",
        separator: "-",
      },
    };
  },
  methods: {},
};
</script>