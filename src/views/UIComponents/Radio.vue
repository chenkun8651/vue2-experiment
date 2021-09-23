<template>
  <div class="flex" ref="box">
    <!-- 单选框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 单选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置单选框大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置单选按钮样式</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.buttonStyle"
            >
              <el-option :value="'outline'">outline</el-option>
              <el-option :value="'solid'">solid</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-radio-group
            v-model="radioValue"
            :options="radioOptions"
            :disabled="AntDesignVue.disabled"
          >
          </a-radio-group>
          <a-radio-group
            v-model="radioValue"
            :disabled="AntDesignVue.disabled"
            :size="AntDesignVue.size"
            :button-style="AntDesignVue.buttonStyle"
          >
            <a-radio-button
              v-for="(item, index) in radioOptions"
              :key="index"
              :value="item.value"
            >
              {{ item.label }}
            </a-radio-button>
          </a-radio-group>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 单选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ElementUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置单选框大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="'medium'">medium</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'mini'">mini</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <el-radio-group v-model="radioValue" :disabled="ElementUI.disabled">
            <el-radio
              v-for="(item, index) in radioOptions"
              :key="index"
              :label="item.value"
              :border="ElementUI.border"
              :size="ElementUI.size"
            >
              {{ item.label }}
            </el-radio>
          </el-radio-group>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 单选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AtUI.disabled" />
          </div>
        </div>
        <div>
          <at-radio-group v-model="radioValue">
            <at-radio
              v-for="(item, index) in radioOptions"
              :key="index"
              :label="item.value"
              :disabled="AtUI.disabled"
            >
              {{ item.label }}
            </at-radio>
          </at-radio-group>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 单选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ViewUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">单选框是否垂直排列</span>
            <a-switch v-model="ViewUI.vertical" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置单选框类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="null">单选框</el-option>
              <el-option :value="'button'">单选按钮</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置单选框类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置单选按钮样式</span>
            <el-select
              size="small"
              class="w-36"
              v-model="ElementUI.buttonStyle"
            >
              <el-option :value="'default'">default</el-option>
              <el-option :value="'solid'">solid</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <RadioGroup
            v-model="radioValue"
            :vertical="ViewUI.vertical"
            :type="ViewUI.type"
            :button-style="ViewUI.buttonStyle"
          >
            <Radio
              v-for="(item, index) in radioOptions"
              :key="index"
              :label="item.value"
              :disabled="ViewUI.disabled"
              :border="ViewUI.border"
              :size="ViewUI.size"
            >
              {{ item.label }}
            </Radio>
          </RadioGroup>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.radioAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
const radioOptions = [
  { label: "单选项一", value: 1 },
  { label: "单选项二", value: 2 },
  { label: "单选项三", value: 3 },
];
export default {
  data() {
    return {
      radioValue: 1,
      radioOptions: radioOptions,
      AntDesignVue: {
        disabled: false,
        size: "default",
        buttonStyle: "outline",
      },
      ElementUI: {
        disabled: false,
        border: false,
        size: "medium",
      },
      AtUI: {
        disabled: false,
      },
      ViewUI: {
        vertical: false,
        type: null,
        buttonStyle: "default",
        disabled: false,
        border: false,
        size: "default",
      },
    };
  },
  methods: {},
};
</script>