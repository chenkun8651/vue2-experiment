<template>
  <!-- 基础组件 -->
  <div>
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
            <a-radio-button :value="'large'">大号加载</a-radio-button>
            <a-radio-button :value="'default'">中号加载</a-radio-button>
            <a-radio-button :value="'small'">小号加载</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">
              设置延迟显示加载时间（毫秒）
            </span>
            <a-input-number style="width: 100px" v-model="spinDelay" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置加载描述文案</span>
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
            <div class="spin-content">加载好的内容</div>
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