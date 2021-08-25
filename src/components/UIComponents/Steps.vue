<template>
  <!-- 步骤条 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 步骤条">
      <!-- 标准步骤条 -->
      <div class="card-item">
        <h3>标准步骤条</h3>
        <div class="radio-box">
          <a-radio-group v-model="stepDirection">
            <a-radio-button value="horizontal">水平方向</a-radio-button>
            <a-radio-button value="vertical">竖直方向</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="stepSize">
            <a-radio-button value="default">默认</a-radio-button>
            <a-radio-button value="small">小型</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="stepType">
            <a-radio-button value="default">默认类型</a-radio-button>
            <a-radio-button value="navigation">导航类型</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-steps
            :current="1"
            :direction="stepDirection"
            :size="stepSize"
            :type="stepType"
          >
            <a-step status="finish">
              <a-icon slot="icon" type="solution" />
              <template slot="title">注册</template>
              <span slot="description">第一步：完成注册</span>
            </a-step>
            <a-step
              status="error"
              title="登录"
              sub-title="登录后功能丰富"
              description="第二步：完成登录"
            >
            </a-step>
            <a-step
              status="wait"
              title="验证"
              description="第三步：验证账号信息"
            >
              <a-icon slot="icon" type="check" />
            </a-step>
          </a-steps>
        </div>
      </div>
      <!-- 点状步骤条 -->
      <div class="card-item">
        <h3 class="title2-xy">点状步骤条</h3>
        <div>
          <a-steps :current="3">
            <a-popover
              slot="progressDot"
              slot-scope="{ index, status, prefixCls }"
            >
              <template slot="content">
                <span>步骤：{{ index + 1 }} ，状态: {{ status }}</span>
              </template>
              <span :class="`${prefixCls}-icon-dot`" />
            </a-popover>
            <a-step title="注册" description="第一步：完成注册" />
            <a-step title="登录" description="第二步：完成登录" />
            <a-step title="验证" description="第三步：验证账号信息" />
          </a-steps>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 步骤条"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 步骤条"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 步骤条"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      stepDirection: "horizontal",
      stepSize: "default",
      stepType: "default",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>