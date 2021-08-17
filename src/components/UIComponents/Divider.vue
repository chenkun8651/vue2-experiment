<template>
  <!-- 分割线组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 分割线">
      <div class="radio-box">
        <a-radio-group v-model="dividerType">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dividerDashed">
          <a-radio-button :value="false">实线</a-radio-button>
          <a-radio-button :value="true">虚线</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <p>一段文字1</p>
        <a-divider :type="dividerType" :dashed="dividerDashed"></a-divider>
        <p>一段文字2</p>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 分割线">
      <div class="radio-box">
        <a-radio-group v-model="dividerDirectionE">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <p>一段文字1</p>
        <el-divider :direction="dividerDirectionE"></el-divider>
        <p>一段文字2</p>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 分割线">
      <div class="c-f5222d">AtUI框架没有分割线组件</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 分割线">
      <div class="radio-box">
        <a-radio-group v-model="dividerTypeV">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dividerDashedV">
          <a-radio-button :value="false">实线</a-radio-button>
          <a-radio-button :value="true">虚线</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <p>一段文字1</p>
        <Divider :type="dividerTypeV" :dashed="dividerDashedV"> </Divider>
        <p>一段文字2</p>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      dividerType: "horizontal",
      dividerDashed: false,
      // ElementUI
      dividerDirectionE: "horizontal",
      // ViewUI
      dividerTypeV: "horizontal",
      dividerDashedV: false,
    };
  },
  methods: {},
};
</script>