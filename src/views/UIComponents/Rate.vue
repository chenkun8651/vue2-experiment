<template>
  <!-- 评分 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 评分">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="AntDesignVue.rateDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.rateAllowHalf">
          <a-radio-button :value="true">开启半选</a-radio-button>
          <a-radio-button :value="false">关闭半选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.rateAllowClear">
          <a-radio-button :value="true">开启清除</a-radio-button>
          <a-radio-button :value="false">关闭清除</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置评分数</span>
          <a-input-number
            style="width: 100px"
            v-model="AntDesignVue.rateCount"
          />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置评分图标</span>
          <a-input style="width: 100px" v-model="AntDesignVue.rateIcon" />
        </div>
      </div>
      <div>
        <a-rate
          v-model="AntDesignVue.value"
          :disabled="AntDesignVue.rateDisabled"
          :allow-half="AntDesignVue.rateAllowHalf"
          :allow-clear="AntDesignVue.rateAllowClear"
          :count="AntDesignVue.rateCount"
        >
          <a-icon slot="character" :type="AntDesignVue.rateIcon" />
        </a-rate>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 评分">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ElementUI.rateDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.rateAllowHalf">
          <a-radio-button :value="true">开启半选</a-radio-button>
          <a-radio-button :value="false">关闭半选</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置评分数</span>
          <a-input-number style="width: 100px" v-model="ElementUI.rateMax" />
        </div>
      </div>
      <div>
        <el-rate
          v-model="ElementUI.value"
          :disabled="ElementUI.rateDisabled"
          :allow-half="ElementUI.rateAllowHalf"
          :max="ElementUI.rateMax"
        >
        </el-rate>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 评分">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="AtUI.rateDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.rateAllowHalf">
          <a-radio-button :value="true">开启半选</a-radio-button>
          <a-radio-button :value="false">关闭半选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.rateShowText">
          <a-radio-button :value="true">显示辅助文字</a-radio-button>
          <a-radio-button :value="false">隐藏辅助文字</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置评分数</span>
          <a-input-number style="width: 100px" v-model="AtUI.rateCount" />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置评分图标</span>
          <a-input style="width: 100px" v-model="AtUI.rateIcon" />
        </div>
      </div>
      <div>
        <at-rate
          v-model="AtUI.value"
          :disabled="AtUI.rateDisabled"
          :allow-half="AtUI.rateAllowHalf"
          :show-text="AtUI.rateShowText"
          :count="AtUI.rateCount"
          :icon="AtUI.rateIcon"
        >
        </at-rate>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 评分">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ViewUI.rateDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.rateAllowHalf">
          <a-radio-button :value="true">开启半选</a-radio-button>
          <a-radio-button :value="false">关闭半选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.rateClearable">
          <a-radio-button :value="true">开启清除</a-radio-button>
          <a-radio-button :value="false">关闭清除</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.rateShowText">
          <a-radio-button :value="true">显示辅助文字</a-radio-button>
          <a-radio-button :value="false">隐藏辅助文字</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置评分数</span>
          <a-input-number style="width: 100px" v-model="ViewUI.rateCount" />
        </div>
      </div>
      <div>
        <Rate
          v-model="ViewUI.value"
          :disabled="ViewUI.rateDisabled"
          :allow-half="ViewUI.rateAllowHalf"
          :clearable="ViewUI.rateClearable"
          :show-text="ViewUI.rateShowText"
          :count="ViewUI.rateCount"
        >
        </Rate>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        value: 1,
        rateDisabled: false,
        rateAllowHalf: false,
        rateAllowClear: false,
        rateCount: 5,
        rateIcon: "heart",
      },
      ElementUI: {
        value: 1,
        rateDisabled: false,
        rateAllowHalf: false,
        rateMax: 5,
      },
      AtUI: {
        value: 1,
        rateDisabled: false,
        rateAllowHalf: false,
        rateShowText: false,
        rateCount: 5,
        rateIcon: "icon-star",
      },
      ViewUI: {
        value: 1,
        rateDisabled: false,
        rateAllowHalf: false,
        rateClearable: false,
        rateShowText: false,
        rateCount: 5,
      },
    };
  },
  methods: {},
};
</script>