<template>
  <div class="flex" ref="box">
    <!-- 评分 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 评分">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启半选</span>
            <a-switch v-model="AntDesignVue.allowHalf" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启清除</span>
            <a-switch v-model="AntDesignVue.allowClear" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置评分图标</span>
            <a-input class="w-24" v-model="AntDesignVue.type" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置评分数</span>
            <a-input-number class="w-24" v-model="AntDesignVue.count" />
          </div>
        </div>
        <div>
          <a-rate
            v-model="AntDesignVue.value"
            :disabled="AntDesignVue.disabled"
            :allow-half="AntDesignVue.allowHalf"
            :allow-clear="AntDesignVue.allowClear"
            :count="AntDesignVue.count"
          >
            <a-icon slot="character" :type="AntDesignVue.type" />
          </a-rate>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 评分">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启半选</span>
            <a-switch v-model="ElementUI.allowHalf" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置评分数</span>
            <a-input-number class="w-24" v-model="ElementUI.max" />
          </div>
        </div>
        <div>
          <el-rate
            v-model="ElementUI.value"
            :disabled="ElementUI.disabled"
            :allow-half="ElementUI.allowHalf"
            :max="ElementUI.max"
          >
          </el-rate>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 评分">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AtUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启半选</span>
            <a-switch v-model="AtUI.allowHalf" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示辅助文字</span>
            <a-switch v-model="AtUI.showText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置评分图标</span>
            <a-input class="w-24" v-model="AtUI.icon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置评分数</span>
            <a-input-number class="w-24" v-model="AtUI.count" />
          </div>
        </div>
        <div>
          <at-rate
            v-model="AtUI.value"
            :disabled="AtUI.disabled"
            :allow-half="AtUI.allowHalf"
            :show-text="AtUI.showText"
            :count="AtUI.count"
            :icon="AtUI.icon"
          >
          </at-rate>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 评分">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启半选</span>
            <a-switch v-model="ViewUI.allowHalf" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启清除</span>
            <a-switch v-model="ViewUI.clearable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示辅助文字</span>
            <a-switch v-model="ViewUI.showText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置评分数</span>
            <a-input-number class="w-24" v-model="ViewUI.count" />
          </div>
        </div>
        <div>
          <Rate
            v-model="ViewUI.value"
            :disabled="ViewUI.disabled"
            :allow-half="ViewUI.allowHalf"
            :clearable="ViewUI.clearable"
            :show-text="ViewUI.showText"
            :count="ViewUI.count"
          >
          </Rate>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.rateAnchor"
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
        value: 1,
        disabled: false,
        allowHalf: false,
        allowClear: false,
        type: "heart",
        count: 5,
      },
      ElementUI: {
        value: 1,
        disabled: false,
        allowHalf: false,
        max: 5,
      },
      AtUI: {
        value: 1,
        disabled: false,
        allowHalf: false,
        showText: false,
        icon: "icon-star",
        count: 5,
      },
      ViewUI: {
        value: 1,
        disabled: false,
        allowHalf: false,
        clearable: false,
        showText: false,
        count: 5,
      },
    };
  },
  methods: {},
};
</script>