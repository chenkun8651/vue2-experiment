<template>
  <!-- 基础组件 -->
  <div>
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
      // 分割线
      dividerType: "horizontal",
      dividerDashed: false,
    };
  },
};
</script>