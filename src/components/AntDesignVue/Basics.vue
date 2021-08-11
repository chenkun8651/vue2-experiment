<template>
  <!-- 基础组件 -->
  <div>
    <!-- 按钮 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">按钮（Button）</div>
      <!-- 标准按钮 -->
      <a-card class="card-margin" title="标准按钮">
        <div class="radio-box">
          <a-radio-group v-model="buttonType">
            <a-radio-button value="default">默认按钮</a-radio-button>
            <a-radio-button value="primary">主要按钮</a-radio-button>
            <a-radio-button value="dashed">虚线按钮</a-radio-button>
            <a-radio-button value="danger">危险按钮</a-radio-button>
            <a-radio-button value="link">链接按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonGhost">
            <a-radio-button :value="true">按钮透明</a-radio-button>
            <a-radio-button :value="false">按钮不透明</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonShape">
            <a-radio-button :value="null">方形</a-radio-button>
            <a-radio-button :value="'circle'">圆形</a-radio-button>
            <a-radio-button :value="'round'">圆角</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonSize">
            <a-radio-button :value="'large'">大按钮</a-radio-button>
            <a-radio-button :value="'default'">默认按钮</a-radio-button>
            <a-radio-button :value="'small'">小按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonLoading">
            <a-radio-button :value="true">加载</a-radio-button>
            <a-radio-button :value="false">完成</a-radio-button>
          </a-radio-group>
          <div class="string-set">
            <span style="margin-right: 5px">设置按钮图标</span>
            <a-input style="width: 100px" v-model="buttonIcon" />
          </div>
        </div>
        <div :class="{ 'bc-d4d4d4': buttonGhost }">
          <a-button
            :type="buttonType"
            :ghost="buttonGhost"
            :icon="buttonIcon"
            :shape="buttonShape"
            :size="buttonSize"
            :disabled="buttonDisabled"
            :loading="buttonLoading"
          >
            默认按钮
          </a-button>
        </div>
      </a-card>
    </a-card>
    <!-- 图标 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">图标（Icon）</div>
      <!-- 标准图标 -->
      <a-card class="card-margin" title="标准图标">
        <div class="radio-box">
          <a-radio-group v-model="iconTheme">
            <a-radio-button :value="'filled'">实心</a-radio-button>
            <a-radio-button :value="'outlined'">描线</a-radio-button>
            <a-radio-button :value="'twoTone'">双色</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="iconSpin">
            <a-radio-button :value="true">开启旋转动画</a-radio-button>
            <a-radio-button :value="false">关闭旋转动画</a-radio-button>
          </a-radio-group>
          <div class="string-set">
            <span style="margin-right: 5px">设置图标名称</span>
            <a-input style="width: 100px" v-model="iconName" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置图标旋转角度</span>
            <a-input-number style="width: 100px" v-model="iconRotate" />
          </div>
          <div v-if="iconTheme === 'twoTone'" class="string-set">
            <span style="margin-right: 5px">设置双色颜色</span>
            <a-input style="width: 100px" v-model="iconRotatTwoToneColor" />
          </div>
        </div>
        <div>
          <a-icon
            :style="{ fontSize: '30px' }"
            :type="iconName"
            :theme="iconTheme"
            :spin="iconSpin"
            :rotate="iconRotate"
            :two-tone-color="iconRotatTwoToneColor"
          />
        </div>
      </a-card>
      <!-- 自定义图标 -->
      <a-card class="card-margin" title="自定义图标">
        <div class="icons-list">
          <HeartIcon :style="{ color: 'hotpink', fontSize: '30px' }" />
          <PandaIcon :style="{ color: 'hotpink', fontSize: '30px' }" />
        </div>
      </a-card>
      <!-- 图标库图标 -->
      <a-card class="card-margin">
        <div slot="title">
          <a target="_blank" href="http://iconfont.cn/">iconfont.cn</a>
          图标库图标
        </div>
        <div class="icons-list">
          <IconFont type="icon-facebook" />
          <IconFont type="icon-twitter" />
        </div>
      </a-card>
    </a-card>
    <!-- 徽标 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">徽标（Badge）</div>
      <!-- 数字徽标 -->
      <a-card class="card-margin" title="数字徽标">
        <div class="radio-box">
          <a-radio-group v-model="badgeShowZero">
            <a-radio-button :value="true">显示0的数字</a-radio-button>
            <a-radio-button :value="false">不显示0的数字</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示数字</span>
            <a-input-number style="width: 100px" v-model="badgeCount" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示封顶数字</span>
            <a-input-number style="width: 100px" v-model="badgeOverflowCount" />
          </div>
        </div>
        <div>
          <a-badge
            :count="badgeCount"
            :overflow-count="badgeOverflowCount"
            :show-zero="badgeShowZero"
          >
          </a-badge>
        </div>
      </a-card>
      <!-- 圆点徽标 -->
      <a-card class="card-margin" title="圆点徽标">
        <div class="radio-box">
          <a-radio-group v-model="badgeStatus">
            <a-radio-button :value="'success'">成功</a-radio-button>
            <a-radio-button :value="'processing'">处理中</a-radio-button>
            <a-radio-button :value="'default'">默认</a-radio-button>
            <a-radio-button :value="'error'">错误</a-radio-button>
            <a-radio-button :value="'warning'">警告</a-radio-button>
          </a-radio-group>
          <div class="string-set">
            <span style="margin-right: 5px">设置徽标颜色</span>
            <a-input style="width: 100px" v-model="badgeColor" />
          </div>
          <div v-if="badgeStatus" class="string-set">
            <span style="margin-right: 5px">设置状态点文本</span>
            <a-input style="width: 100px" v-model="badgeText" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px"> 设置鼠标放在状态点显示文本 </span>
            <a-input style="width: 100px" v-model="badgeTitle" />
          </div>
        </div>
        <div>
          <a-badge
            :color="badgeColor"
            :status="badgeStatus"
            :text="badgeText"
            :title="badgeTitle"
          >
          </a-badge>
        </div>
      </a-card>
    </a-card>
    <!-- 标签 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">标签（Tag）</div>
      <!-- 标准标签 -->
      <a-card class="card-margin" title="标准标签">
        <div class="radio-box">
          <a-radio-group v-model="tagVisible">
            <a-radio-button :value="true">显示标签</a-radio-button>
            <a-radio-button :value="false">隐藏标签</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="tagClosable">
            <a-radio-button :value="true">显示关闭标签</a-radio-button>
            <a-radio-button :value="false">隐藏关闭标签</a-radio-button>
          </a-radio-group>
          <div class="string-set">
            <span style="margin-right: 5px">设置标签颜色</span>
            <a-input style="width: 100px" v-model="tagColor" />
          </div>
        </div>
        <div>
          <a-tag
            :closable="tagClosable"
            :color="tagColor"
            :visible="tagVisible"
          >
            标签
          </a-tag>
        </div>
      </a-card>
    </a-card>
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
import { Icon } from "ant-design-vue";

const HeartSvg = {
  template: `
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  `,
};
const PandaSvg = {
  template: `
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z" fill="#6B676E" p-id="1143" />
      <path d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z" fill="#FFEBD2" p-id="1144" />
      <path d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z" fill="#E9D7C3" p-id="1145" />
      <path d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z" fill="#FFFFFF" p-id="1146" />
      <path d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z" fill="#6B676E" p-id="1147" />
      <path d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z" fill="#464655" p-id="1148" />
      <path d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1149" />
      <path d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z" fill="#464655" p-id="1150" />
    </svg>
  `,
};
const HeartIcon = {
  template: `
    <a-icon :component="HeartSvg" />
  `,
  data() {
    return {
      HeartSvg,
    };
  },
};
const PandaIcon = {
  template: `
    <a-icon :component="PandaSvg" />
  `,
  data() {
    return {
      PandaSvg,
    };
  },
};
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

export default {
  data() {
    return {
      // 按钮
      buttonType: "default",
      buttonGhost: false,
      buttonShape: null,
      buttonSize: "default",
      buttonDisabled: false,
      buttonLoading: false,
      buttonIcon: "home",
      // 图标
      iconTheme: "filled",
      iconSpin: false,
      iconName: "home",
      iconRotate: 0,
      iconRotatTwoToneColor: "#111",
      // 徽标
      badgeShowZero: true,
      badgeCount: 0,
      badgeOverflowCount: 99,
      badgeColor: null,
      badgeStatus: "default",
      badgeText: "",
      badgeTitle: "状态点标题",
      // 标签
      tagVisible: true,
      tagClosable: true,
      tagColor: "red",
      // 文字提示
      tooltipArrowPointAtCenter: false,
      tooltipAutoAdjustOverflow: false,
      tooltipMouseEnterDelay: 1,
      tooltipMouseLeaveDelay: 1,
      tooltipPlacement: "top",
      tooltipTrigger: "hover",
      // 加载
      spinSpinning: true,
      spinSize: "default",
      spinDelay: 500,
      spinTip: "加载中.......",
      // 分割线
      dividerType: "horizontal",
      dividerDashed: false,
    };
  },
  components: {
    HeartIcon,
    PandaIcon,
    IconFont,
  },
  methods: {},
};
</script>

<style scoped>
/* 图标 */
.icons-list >>> .anticon {
  margin: 5px;
  font-size: 30px;
}
/* 加载 */
.spin-content {
  padding: 30px;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
}
</style>