<template>
  <!-- 单选框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 单选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="AntDesignVue.radioDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.radioSize">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.radioButtonStyle">
          <a-radio-button :value="'outline'">outline</a-radio-button>
          <a-radio-button :value="'solid'">solid</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-radio-group
          v-model="radioValue"
          :options="radioOptions"
          :disabled="AntDesignVue.radioDisabled"
        >
        </a-radio-group>
        <a-radio-group
          v-model="radioValue"
          :disabled="AntDesignVue.radioDisabled"
          :button-style="AntDesignVue.radioButtonStyle"
          :size="AntDesignVue.radioSize"
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
    <a-card class="my-5" title="ElementUI 单选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ElementUI.radioDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.radioSize">
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.radioBorder">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-radio-group
          v-model="radioValue"
          :disabled="ElementUI.radioDisabled"
        >
          <el-radio
            v-for="(item, index) in radioOptions"
            :key="index"
            :label="item.value"
            :border="ElementUI.radioBorder"
            :size="ElementUI.radioSize"
          >
            {{ item.label }}
          </el-radio>
        </el-radio-group>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 单选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="AtUI.radioDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-radio-group v-model="radioValue">
          <at-radio
            v-for="(item, index) in radioOptions"
            :key="index"
            :label="item.value"
            :disabled="AtUI.radioDisabled"
          >
            {{ item.label }}
          </at-radio>
        </at-radio-group>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 单选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ViewUI.radioDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.radioSize">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.radioBorder">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.radioType">
          <a-radio-button :value="null">单选框</a-radio-button>
          <a-radio-button :value="'button'">单选按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.radioVertical">
          <a-radio-button :value="true">垂直方向</a-radio-button>
          <a-radio-button :value="false">水平方向</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.radioButtonStyle">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'solid'">solid</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <RadioGroup
          v-model="radioValue"
          :type="ViewUI.radioType"
          :button-style="ViewUI.radioButtonStyle"
          :vertical="ViewUI.radioVertical"
        >
          <Radio
            v-for="(item, index) in radioOptions"
            :key="index"
            :label="item.value"
            :disabled="ViewUI.radioDisabled"
            :border="ViewUI.radioBorder"
            :size="ViewUI.radioSize"
          >
            {{ item.label }}
          </Radio>
        </RadioGroup>
      </div>
    </a-card>
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
        radioDisabled: false,
        radioSize: "default",
        radioButtonStyle: "outline",
      },
      ElementUI: {
        radioDisabled: false,
        radioSize: "medium",
        radioBorder: false,
      },
      AtUI: {
        radioDisabled: false,
      },
      ViewUI: {
        radioDisabled: false,
        radioSize: "default",
        radioBorder: false,
        radioType: null,
        radioButtonStyle: "default",
        radioVertical: false,
      },
    };
  },
  methods: {},
};
</script>