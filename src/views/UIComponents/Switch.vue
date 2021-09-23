<template>
  <div class="flex" ref="box">
    <!-- 开关 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 开关">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启加载</span>
            <a-switch v-model="AntDesignVue.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置开关大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置打开时文本</span>
            <a-input class="w-24" v-model="AntDesignVue.checkedChildren" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置关闭时文本</span>
            <a-input class="w-24" v-model="AntDesignVue.unCheckedChildren" />
          </div>
        </div>
        <div>
          <a-switch
            v-model="AntDesignVue.value"
            :disabled="AntDesignVue.disabled"
            :loading="AntDesignVue.loading"
            :size="AntDesignVue.size"
            :checked-children="AntDesignVue.checkedChildren"
            :un-checked-children="AntDesignVue.unCheckedChildren"
          >
          </a-switch>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 开关">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
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
      <a-card id="3" class="my-5" title="AtUI 开关">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AtUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置开关大小</span>
            <el-select size="small" class="w-36" v-model="AtUI.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'normal'">normal</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
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
      <a-card id="4" class="my-5" title="ViewUI 开关">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启加载</span>
            <a-switch v-model="ViewUI.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置开关大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
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
            :loading="ViewUI.loading"
            :size="ViewUI.size"
            :true-color="ViewUI.trueColor"
            :false-color="ViewUI.falseColor"
          >
          </i-switch>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.switchAnchor"
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
        value: false,
        disabled: false,
        loading: false,
        size: "default",
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
        loading: false,
        size: "default",
        trueColor: "#409EFF",
        falseColor: "#C0CCDA",
      },
    };
  },
  methods: {},
};
</script>