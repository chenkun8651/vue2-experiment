<template>
  <div class="flex" ref="box">
    <!-- 弹出框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 弹出框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框触发方式</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'focus'">focus</el-option>
              <el-option :value="'click'">click</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框弹出位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.placement"
            >
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-popover
            :title="'弹出标题（可插槽）'"
            :trigger="AntDesignVue.trigger"
            :placement="AntDesignVue.placement"
          >
            <template slot="content">
              <p>弹出内容</p>
              <p>弹出内容</p>
            </template>
            <a-button>弹出框</a-button>
          </a-popover>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 弹出框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示箭头</span>
            <a-switch v-model="ElementUI.visibleArrow" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框触发方式</span>
            <el-select size="small" class="w-36" v-model="ElementUI.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'focus'">focus</el-option>
              <el-option :value="'click'">click</el-option>
              <el-option :value="'manual'">manual</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框弹出位置</span>
            <el-select size="small" class="w-36" v-model="ElementUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框弹出时动画</span>
            <a-input class="w-24" v-model="ElementUI.transition" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框宽度</span>
            <a-input-number class="w-24" v-model="ElementUI.width" :min="150" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框偏移位置</span>
            <a-input-number class="w-24" v-model="ElementUI.offset" :min="0" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置打开延迟时间（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.openDelay" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置关闭延迟时间（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.closeDelay" />
          </div>
        </div>
        <div>
          <el-popover
            :title="'弹出标题（可插槽）'"
            :content="'弹出内容（可插槽）'"
            :disabled="ElementUI.disabled"
            :visible-arrow="ElementUI.visibleArrow"
            :trigger="ElementUI.trigger"
            :placement="ElementUI.placement"
            :transition="ElementUI.transition"
            :width="ElementUI.width"
            :offset="ElementUI.offset"
            :open-delay="ElementUI.openDelay"
            :close-delay="ElementUI.closeDelay"
          >
            <el-button slot="reference">弹出框</el-button>
          </el-popover>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 弹出框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框触发方式</span>
            <el-select size="small" class="w-36" v-model="AtUI.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'focus'">focus</el-option>
              <el-option :value="'click'">click</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框弹出位置</span>
            <el-select size="small" class="w-36" v-model="AtUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <at-popover
            :title="'弹出标题'"
            :content="'弹出内容'"
            :trigger="AtUI.trigger"
            :placement="AtUI.placement"
          >
            <at-button>弹出框</at-button>
          </at-popover>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 弹出框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启自动换行</span>
            <a-switch v-model="ViewUI.wordWrap" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启对话模式</span>
            <a-switch v-model="ViewUI.confirm" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框触发方式</span>
            <el-select size="small" class="w-36" v-model="ViewUI.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'focus'">focus</el-option>
              <el-option :value="'click'">click</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框弹出位置</span>
            <el-select size="small" class="w-36" v-model="ViewUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框宽度</span>
            <a-input-number class="w-24" v-model="ViewUI.width" :min="150" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出框偏移位置</span>
            <a-input-number class="w-24" v-model="ViewUI.offset" :min="0" />
          </div>
        </div>
        <div>
          <Poptip
            :title="'弹出标题'"
            :content="'弹出内容'"
            :ok-text="'确定'"
            :cancel-text="'取消'"
            :disabled="ViewUI.disabled"
            :word-wrap="ViewUI.wordWrap"
            :confirm="ViewUI.confirm"
            :trigger="ViewUI.trigger"
            :placement="ViewUI.placement"
            :width="ViewUI.width"
            :offset="ViewUI.offset"
          >
            <Button>弹出框</Button>
          </Poptip>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.popConfirmAnchor"
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
        trigger: "hover",
        placement: "top",
      },
      ElementUI: {
        disabled: false,
        visibleArrow: false,
        trigger: "hover",
        placement: "top",
        transition: "fade-in-linear",
        width: 200,
        offset: 5,
        openDelay: 1000,
        closeDelay: 1000,
      },
      AtUI: {
        trigger: "hover",
        placement: "top",
      },
      ViewUI: {
        disabled: false,
        wordWrap: false,
        confirm: false,
        trigger: "hover",
        placement: "top",
        width: 200,
        offset: 5,
      },
    };
  },
  methods: {},
};
</script>