<template>
  <!-- 基础组件 -->
  <div>
    <!-- 文字提示 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">文字提示（Tooltip）</div>
      <!-- 标准文字提示 -->
      <a-card class="card-margin" title="标准文字提示">
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
            <a-radio-button :value="'top'">上方</a-radio-button>
            <a-radio-button :value="'bottom'">下方</a-radio-button>
            <a-radio-button :value="'left'">左方</a-radio-button>
            <a-radio-button :value="'right'">右方</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tooltipTrigger">
            <a-radio-button :value="'hover'">悬停触发</a-radio-button>
            <a-radio-button :value="'focus'">聚焦触发</a-radio-button>
            <a-radio-button :value="'click'">点击触发</a-radio-button>
            <a-radio-button :value="'contextmenu'">
              右键点击触发
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
            :arrow-point-at-center="tooltipArrowPointAtCenter"
            :auto-adjust-overflow="tooltipAutoAdjustOverflow"
            :mouse-enter-delay="tooltipMouseEnterDelay"
            :mouse-leave-delay="tooltipMouseLeaveDelay"
            :placement="tooltipPlacement"
            :trigger="tooltipTrigger"
          >
            <template slot="title">这段话就是一个文字提示</template>
            <a-button>提示消息</a-button>
          </a-tooltip>
        </div>
      </a-card>
    </a-card>
    <!-- 加载 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">加载（Spin）</div>
      <!-- 标准加载 -->
      <a-card class="card-margin" title="标准加载">
        <div class="radio-box">
          <a-radio-group v-model="spinSpinning">
            <a-radio-button :value="true">加载</a-radio-button>
            <a-radio-button :value="false">完成</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="spinSize">
            <a-radio-button :value="'large'">大型</a-radio-button>
            <a-radio-button :value="'default'">默认</a-radio-button>
            <a-radio-button :value="'small'">小型</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">
              设置延迟显示加载效果的时间（毫秒）
            </span>
            <a-input-number style="width: 100px" v-model="spinDelay" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置描述文案</span>
            <a-input style="width: 100px" v-model="spinTip" />
          </div>
        </div>
        <div>
          <a-spin
            :delay="spinDelay"
            :size="spinSize"
            :spinning="spinSpinning"
            :tip="spinTip"
          >
            <div class="spin-content">待加载的内容</div>
          </a-spin>
        </div>
      </a-card>
    </a-card>
    <!-- 分割线 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">分割线（Divider）</div>
      <!-- 标准分割线 -->
      <a-card class="card-margin" title="标准分割线">
        <div class="radio-box">
          <a-radio-group v-model="dividerType">
            <a-radio-button :value="'horizontal'">水平分割线</a-radio-button>
            <a-radio-button :value="'vertical'">垂直分割线</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="dividerDashed">
            <a-radio-button :value="true">虚线</a-radio-button>
            <a-radio-button :value="false">实线</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <p>这是一段文字1</p>
          <a-divider :type="dividerType" :dashed="dividerDashed" />
          <p>这是一段文字2</p>
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
      tooltipMouseEnterDelay: 1,
      tooltipMouseLeaveDelay: 1,
      tooltipPlacement: "top",
      tooltipTrigger: "hover",
      // ElementUI
      tooltipEffect: "dark",
      tooltipOffset: 0,
      tooltipTransition: "el-fade-in-linear",
      tooltipPlacement: "top",
      tooltipVisibleArrow: true,
      tooltipOpenDelay: 0,
      tooltipHideAfter: 0,
      tooltipDisabled: false,
      // 分割线
      dividerType: "horizontal",
      dividerDashed: false,
    };
  },
};
</script>

<style scoped>
/* 加载 */
.spin-content {
  padding: 30px;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
}
</style>