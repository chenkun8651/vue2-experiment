<template>
  <!-- 分割线 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 分割线">
      <div class="control-box">
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
        <p>分割内容上半部分</p>
        <a-divider :type="dividerType" :dashed="dividerDashed"></a-divider>
        <p>分割内容下半部分</p>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 分割线">
      <div class="control-box">
        <a-radio-group v-model="dividerDirectionE">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <p>分割内容上半部分</p>
        <el-divider :direction="dividerDirectionE"></el-divider>
        <p>分割内容下半部分</p>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 分割线">
      <div class="c-f5222d">AtUI框架没有分割线</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 分割线">
      <div class="control-box">
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
        <p>分割内容上半部分</p>
        <Divider :type="dividerTypeV" :dashed="dividerDashedV"></Divider>
        <p>分割内容下半部分</p>
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