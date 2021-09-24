<template>
  <div class="flex" ref="box">
    <!-- 文字提示 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 文字提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启箭头指向元素中心功能</span>
            <a-switch v-model="AntDesignVue.arrowPointAtCenter" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启遮挡时自动调整位置功能</span>
            <a-switch v-model="AntDesignVue.autoAdjustOverflow" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示触发方式</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'focus'">focus</el-option>
              <el-option :value="'click'">click</el-option>
              <el-option :value="'contextmenu'">contextmenu</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示弹出位置</span>
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
          <div class="my-2 mr-5">
            <span class="mr-2">鼠标移入的延迟显示时间（秒）</span>
            <a-input-number
              class="w-24"
              v-model="AntDesignVue.mouseEnterDelay"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">鼠标移出的延迟显示时间（秒）</span>
            <a-input-number
              class="w-24"
              v-model="AntDesignVue.mouseLeaveDelay"
            />
          </div>
        </div>
        <div>
          <a-tooltip
            title="这段话就是一个文字提示"
            :arrow-point-at-center="AntDesignVue.arrowPointAtCenter"
            :auto-adjust-overflow="AntDesignVue.autoAdjustOverflow"
            :trigger="AntDesignVue.trigger"
            :placement="AntDesignVue.placement"
            :mouse-enter-delay="AntDesignVue.mouseEnterDelay"
            :mouse-leave-delay="AntDesignVue.mouseLeaveDelay"
          >
            <a-button>提示消息</a-button>
          </a-tooltip>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 文字提示">
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
            <span class="mr-2">设置文字提示主题</span>
            <el-select size="small" class="w-36" v-model="ElementUI.effect">
              <el-option :value="'dark'">dark</el-option>
              <el-option :value="'light'">light</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示弹出位置</span>
            <el-select size="small" class="w-36" v-model="ElementUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示渐变动画</span>
            <a-input class="w-24" v-model="ElementUI.transition" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示偏移量</span>
            <a-input-number class="w-24" v-model="ElementUI.offset" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置延迟出现时间（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.openDelay" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动隐藏时间（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.hideAfter" />
          </div>
        </div>
        <div>
          <el-tooltip
            content="这段话就是一个文字提示"
            :disabled="ElementUI.disabled"
            :visible-arrow="ElementUI.visibleArrow"
            :effect="ElementUI.effect"
            :placement="ElementUI.placement"
            :transition="ElementUI.transition"
            :offset="ElementUI.offset"
            :open-delay="ElementUI.openDelay"
            :hide-after="ElementUI.hideAfter"
          >
            <el-button>提示消息</el-button>
          </el-tooltip>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 文字提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示弹出位置</span>
            <el-select size="small" class="w-36" v-model="AtUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <at-tooltip
            content="这段话就是一个文字提示"
            :placement="AtUI.placement"
          >
            <at-button>提示消息</at-button>
          </at-tooltip>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 文字提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启常显</span>
            <a-switch v-model="ViewUI.always" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示主题</span>
            <el-select size="small" class="w-36" v-model="ViewUI.effect">
              <el-option :value="'dark'">dark</el-option>
              <el-option :value="'light'">light</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示弹出位置</span>
            <el-select size="small" class="w-36" v-model="ViewUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置文字提示偏移量</span>
            <a-input-number class="w-24" v-model="ViewUI.offset" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置最大宽度</span>
            <a-input-number class="w-24" v-model="ViewUI.maxWidth" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置延迟出现时间（毫秒）</span>
            <a-input-number class="w-24" v-model="ViewUI.delay" />
          </div>
        </div>
        <div>
          <Tooltip
            content="这段话就是一个文字提示"
            :disabled="ViewUI.disabled"
            :always="ViewUI.always"
            :theme="ViewUI.theme"
            :placement="ViewUI.placement"
            :offset="ViewUI.offset"
            :max-width="ViewUI.maxWidth"
            :delay="ViewUI.delay"
          >
            <Button>提示消息</Button>
          </Tooltip>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.tooltipAnchor"
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
        arrowPointAtCenter: false,
        autoAdjustOverflow: false,
        trigger: "hover",
        placement: "bottom",
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0,
      },
      ElementUI: {
        disabled: false,
        visibleArrow: false,
        effect: "dark",
        placement: "bottom",
        transition: "el-fade-in-linear",
        offset: 0,
        openDelay: 0,
        hideAfter: 0,
      },
      AtUI: {
        placement: "bottom",
      },
      ViewUI: {
        disabled: false,
        always: false,
        theme: "dark",
        placement: "bottom",
        offset: 0,
        maxWidth: null,
        delay: 0,
      },
    };
  },
  methods: {},
};
</script>