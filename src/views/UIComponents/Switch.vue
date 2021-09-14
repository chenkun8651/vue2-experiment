<template>
  <!-- 开关 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 开关">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="AntDesignVue.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.size">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.loading">
          <a-radio-button :value="true">开启加载</a-radio-button>
          <a-radio-button :value="false">关闭加载</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置打开时文本</span>
          <a-input
            class="w-24"
            v-model="AntDesignVue.checkedChildren"
          />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置关闭时文本</span>
          <a-input
            class="w-24"
            v-model="AntDesignVue.unCheckedChildren"
          />
        </div>
      </div>
      <div>
        <a-switch
          v-model="AntDesignVue.value"
          :disabled="AntDesignVue.disabled"
          :size="AntDesignVue.size"
          :loading="AntDesignVue.loading"
          :checked-children="AntDesignVue.checkedChildren"
          :un-checked-children="AntDesignVue.unCheckedChildren"
        >
        </a-switch>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 开关">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ElementUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置打开时文本</span>
          <a-input class="w-24" v-model="ElementUI.activeText" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置关闭时文本</span>
          <a-input class="w-24" v-model="ElementUI.inactiveText" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置打开时颜色</span>
          <a-input class="w-24" v-model="ElementUI.activeColor" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置关闭时颜色</span>
          <a-input class="w-24" v-model="ElementUI.inactiveColor" />
        </div>
      </div>
      <div>
        <el-switch
          v-model="ElementUI.value"
          :disabled="ElementUI.disabled"
          :active-text="ElementUI.activeText"
          :inactive-text="ElementUI.inactiveText"
          :active-color="ElementUI.activeColor"
          :inactive-color="ElementUI.inactiveColor"
        >
        </el-switch>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 开关">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="AtUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.size">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'normal'">normal</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置打开时文本</span>
          <a-input class="w-24" v-model="AtUI.checkedText" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置关闭时文本</span>
          <a-input class="w-24" v-model="AtUI.unCheckedText" />
        </div>
      </div>
      <div>
        <at-switch
          v-model="AtUI.value"
          :disabled="AtUI.disabled"
          :size="AtUI.size"
        >
          <span slot="checkedText">{{ AtUI.checkedText }}</span>
          <span slot="unCheckedText">{{ AtUI.unCheckedText }}</span>
        </at-switch>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 开关">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ViewUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.size">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.loading">
          <a-radio-button :value="true">开启加载</a-radio-button>
          <a-radio-button :value="false">关闭加载</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置打开时颜色</span>
          <a-input class="w-24" v-model="ViewUI.trueColor" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置关闭时颜色</span>
          <a-input class="w-24" v-model="ViewUI.falseColor" />
        </div>
      </div>
      <div>
        <i-switch
          v-model="ViewUI.value"
          :disabled="ViewUI.disabled"
          :size="ViewUI.size"
          :loading="ViewUI.loading"
          :true-color="ViewUI.trueColor"
          :false-color="ViewUI.falseColor"
        >
        </i-switch>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        value: false,
        disabled: false,
        size: "default",
        loading: false,
        checkedChildren: "开",
        unCheckedChildren: "关",
      },
      ElementUI: {
        value: false,
        disabled: false,
        activeText: "开",
        inactiveText: "关",
        activeColor: "#409EFF",
        inactiveColor: "#C0CCDA",
      },
      AtUI: {
        value: false,
        disabled: false,
        size: "normal",
        checkedText: "开",
        unCheckedText: "关",
      },
      ViewUI: {
        value: false,
        disabled: false,
        size: "default",
        loading: false,
        trueColor: "#409EFF",
        falseColor: "#C0CCDA",
      },
    };
  },
  methods: {},
};
</script>