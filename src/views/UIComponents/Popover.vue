<template>
  <!-- 弹出框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 弹出框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="popoverTrigger">
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'focus'">focus</a-radio-button>
          <a-radio-button :value="'click'">click</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverPlacement">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-popover
          :title="'弹出标题（可插槽）'"
          :trigger="popoverTrigger"
          :placement="popoverPlacement"
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
    <a-card class="my-5" title="ElementUI 弹出框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="popoverTriggerE">
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'focus'">focus</a-radio-button>
          <a-radio-button :value="'click'">click</a-radio-button>
          <a-radio-button :value="'manual'">manual</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverPlacementE">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverDisabledE">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverVisibleArrowE">
          <a-radio-button :value="true">显示箭头</a-radio-button>
          <a-radio-button :value="false">隐藏箭头</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置弹出框宽度</span>
          <a-input-number
            style="width: 100px"
            v-model="popoverWidthE"
            :min="150"
          />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置弹出框偏移量</span>
          <a-input-number
            style="width: 100px"
            v-model="popoverOffsetE"
            :min="0"
          />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置弹出动画</span>
          <a-input style="width: 100px" v-model="popoverTransitionE" />
        </div>
        <div
          v-show="popoverTriggerE === 'hover' || popoverTriggerE === 'manual'"
          class="my-2 mr-5"
        >
          <span style="margin-right: 5px">设置打开显示延迟时间（毫秒）</span>
          <a-input-number
            style="width: 100px"
            v-model="popoverOpenDelayE"
            :min="0"
          />
        </div>
        <div
          v-show="popoverTriggerE === 'hover' || popoverTriggerE === 'manual'"
          class="my-2 mr-5"
        >
          <span style="margin-right: 5px">设置关闭显示延迟时间（毫秒）</span>
          <a-input-number
            style="width: 100px"
            v-model="popoverCloseDelayE"
            :min="0"
          />
        </div>
      </div>
      <div>
        <el-popover
          :title="'弹出标题（可插槽）'"
          :content="'弹出内容（可插槽）'"
          :trigger="popoverTriggerE"
          :placement="popoverPlacementE"
          :disabled="popoverDisabledE"
          :visible-arrow="popoverVisibleArrowE"
          :width="popoverWidthE"
          :offset="popoverOffsetE"
          :transition="popoverTransitionE"
          :open-delay="popoverOpenDelayE"
          :close-delay="popoverCloseDelayE"
        >
          <el-button slot="reference">弹出框</el-button>
        </el-popover>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 弹出框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="popoverTriggerA">
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'focus'">focus</a-radio-button>
          <a-radio-button :value="'click'">click</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverPlacementA">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-popover
          :title="'弹出标题'"
          :content="'弹出内容'"
          :trigger="popoverTriggerA"
          :placement="popoverPlacementA"
        >
          <at-button>弹出框</at-button>
        </at-popover>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 弹出框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="popoverTriggerV">
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'focus'">focus</a-radio-button>
          <a-radio-button :value="'click'">click</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverPlacementV">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverDisabledV">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverWordWrapV">
          <a-radio-button :value="true">开启自动换行</a-radio-button>
          <a-radio-button :value="false">关闭自动换行</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popoverConfirmV">
          <a-radio-button :value="true">开启对话模式</a-radio-button>
          <a-radio-button :value="false">关闭对话模式</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置弹出框宽度</span>
          <a-input-number
            style="width: 100px"
            v-model="popoverWidthV"
            :min="150"
          />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置弹出框偏移量</span>
          <a-input-number
            style="width: 100px"
            v-model="popoverOffsetV"
            :min="0"
          />
        </div>
      </div>
      <div>
        <Poptip
          :title="'弹出标题'"
          :content="'弹出内容'"
          :ok-text="'确定'"
          :cancel-text="'取消'"
          :trigger="popoverTriggerV"
          :placement="popoverPlacementV"
          :disabled="popoverDisabledV"
          :word-wrap="popoverWordWrapV"
          :confirm="popoverConfirmV"
          :width="popoverWidthV"
          :offset="popoverOffsetV"
        >
          <Button>弹出框</Button>
        </Poptip>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      popoverTrigger: "hover",
      popoverPlacement: "top",
      // ElementUI
      popoverTriggerE: "hover",
      popoverPlacementE: "top",
      popoverDisabledE: false,
      popoverVisibleArrowE: false,
      popoverWidthE: 200,
      popoverOffsetE: 5,
      popoverTransitionE: "fade-in-linear",
      popoverOpenDelayE: 1000,
      popoverCloseDelayE: 1000,
      // AtUI
      popoverTriggerA: "hover",
      popoverPlacementA: "top",
      // ViewUI
      popoverTriggerV: "hover",
      popoverPlacementV: "top",
      popoverDisabledV: false,
      popoverWordWrapV: false,
      popoverConfirmV: false,
      popoverWidthV: 200,
      popoverOffsetV: 5,
    };
  },
  methods: {},
};
</script>