<template>
  <!-- 文字提示组件 -->
  <div>
    <a-card class="card-margin">
      <div slot="title" class="title-xy">文字提示</div>
      <!-- AntDesignVue -->
      <a-card class="card-margin" title="AntDesignVue 文字提示">
        <div class="radio-box">
          <a-radio-group v-model="tooltipArrowPointAtCenter">
            <a-radio-button :value="true">
              开启箭头指向元素中心
            </a-radio-button>
            <a-radio-button :value="false">
              关闭箭头指向元素中心
            </a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipAutoAdjustOverflow">
            <a-radio-button :value="true">
              开启遮挡时自动调整位置
            </a-radio-button>
            <a-radio-button :value="false">
              关闭遮挡时自动调整位置
            </a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipPlacement">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
            <a-radio-button :value="'left'">left</a-radio-button>
            <a-radio-button :value="'right'">right</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipTrigger">
            <a-radio-button :value="'hover'">hover</a-radio-button>
            <a-radio-button :value="'focus'">focus</a-radio-button>
            <a-radio-button :value="'click'">click</a-radio-button>
            <a-radio-button :value="'contextmenu'">
              contextmenu
            </a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">
              鼠标移入的延迟显示时间（秒）
            </span>
            <a-input-number
              style="width: 100px"
              v-model="tooltipMouseEnterDelay"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">
              鼠标移出的延迟显示时间（秒）
            </span>
            <a-input-number
              style="width: 100px"
              v-model="tooltipMouseLeaveDelay"
            />
          </div>
        </div>
        <div>
          <a-tooltip
            title="这段话就是一个文字提示"
            :arrow-point-at-center="tooltipArrowPointAtCenter"
            :auto-adjust-overflow="tooltipAutoAdjustOverflow"
            :placement="tooltipPlacement"
            :trigger="tooltipTrigger"
            :mouse-enter-delay="tooltipMouseEnterDelay"
            :mouse-leave-delay="tooltipMouseLeaveDelay"
          >
            <a-button>提示消息</a-button>
          </a-tooltip>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card class="card-margin" title="ElementUI 文字提示">
        <div class="radio-box">
          <a-radio-group v-model="tooltipDisabledE">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipEffectE">
            <a-radio-button :value="'dark'">dark</a-radio-button>
            <a-radio-button :value="'light'">light</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipPlacementE">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
            <a-radio-button :value="'left'">left</a-radio-button>
            <a-radio-button :value="'right'">right</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipVisibleArrowE">
            <a-radio-button :value="true">显示箭头</a-radio-button>
            <a-radio-button :value="false">隐藏箭头</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置文字提示偏移量</span>
            <a-input-number style="width: 100px" v-model="tooltipOffsetE" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置文字提示渐变动画</span>
            <a-input style="width: 150px" v-model="tooltipTransitionE" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置延迟出现时间（毫秒）</span>
            <a-input-number style="width: 100px" v-model="tooltipOpenDelayE" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置自动隐藏时间（毫秒）</span>
            <a-input-number style="width: 100px" v-model="tooltipHideAfterE" />
          </div>
        </div>
        <div>
          <el-tooltip
            content="这段话就是一个文字提示"
            :effect="tooltipEffectE"
            :placement="tooltipPlacementE"
            :offset="tooltipOffsetE"
            :transition="tooltipTransitionE"
            :visible-arrow="tooltipVisibleArrowE"
            :disabled="tooltipDisabledE"
            :open-delay="tooltipOpenDelayE"
            :hide-after="tooltipHideAfterE"
          >
            <el-button>提示消息</el-button>
          </el-tooltip>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card class="card-margin" title="AtUI 文字提示">
        <div class="radio-box">
          <a-radio-group v-model="tooltipPlacementA">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
            <a-radio-button :value="'left'">left</a-radio-button>
            <a-radio-button :value="'right'">right</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <at-tooltip
            content="这段话就是一个文字提示"
            :placement="tooltipPlacementA"
          >
            <at-button>提示消息</at-button>
          </at-tooltip>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card class="card-margin" title="ViewUI 标签">
        <div class="radio-box">
          <a-radio-group v-model="tooltipDisabledV">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipAlwaysV">
            <a-radio-button :value="true">开启常显</a-radio-button>
            <a-radio-button :value="false">关闭常显</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipThemeV">
            <a-radio-button :value="'dark'">dark</a-radio-button>
            <a-radio-button :value="'light'">light</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipPlacementV">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
            <a-radio-button :value="'left'">left</a-radio-button>
            <a-radio-button :value="'right'">right</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置文字提示偏移量</span>
            <a-input-number style="width: 100px" v-model="tooltipOffsetV" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置最大宽度</span>
            <a-input-number style="width: 100px" v-model="tooltipMaxWidthV" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置延迟出现时间（毫秒）</span>
            <a-input-number style="width: 100px" v-model="tooltipDelayV" />
          </div>
        </div>
        <div>
          <Tooltip
            content="这段话就是一个文字提示"
            :theme="tooltipThemeV"
            :placement="tooltipPlacementV"
            :offset="tooltipOffsetV"
            :always="tooltipAlwaysV"
            :disabled="tooltipDisabledV"
            :max-width="tooltipMaxWidthV"
            :delay="tooltipDelayV"
          >
            <Button>提示消息</Button>
          </Tooltip>
        </div>
      </a-card>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      tooltipArrowPointAtCenter: false,
      tooltipAutoAdjustOverflow: false,
      tooltipPlacement: "bottom",
      tooltipTrigger: "hover",
      tooltipMouseEnterDelay: 0,
      tooltipMouseLeaveDelay: 0,
      // ElementUI
      tooltipEffectE: "dark",
      tooltipPlacementE: "bottom",
      tooltipOffsetE: 0,
      tooltipTransitionE: "el-fade-in-linear",
      tooltipVisibleArrowE: true,
      tooltipDisabledE: false,
      tooltipOpenDelayE: 0,
      tooltipHideAfterE: 0,
      // AtUI
      tooltipPlacementA: "bottom",
      // ViewUI
      tooltipThemeV: "dark",
      tooltipPlacementV: "bottom",
      tooltipOffsetV: 0,
      tooltipAlwaysV: false,
      tooltipDisabledV: false,
      tooltipMaxWidthV: null,
      tooltipDelayV: 0,
    };
  },
  methods: {},
};
</script>