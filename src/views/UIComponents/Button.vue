<template>
  <!-- 按钮 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 按钮">
      <div class="control-box">
        <a-radio-group v-model="buttonType">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'dashed'">dashed</a-radio-button>
          <a-radio-button :value="'danger'">danger</a-radio-button>
          <a-radio-button :value="'link'">link</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonSize">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonShape">
          <a-radio-button :value="null">方形按钮</a-radio-button>
          <a-radio-button :value="'circle'">圆形按钮</a-radio-button>
          <a-radio-button :value="'round'">圆角按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonGhost">
          <a-radio-button :value="true">显示背景透明</a-radio-button>
          <a-radio-button :value="false">隐藏背景透明</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonBlock">
          <a-radio-button :value="true">撑满宽度</a-radio-button>
          <a-radio-button :value="false">不撑满宽度</a-radio-button>
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
          <a-input style="width: 120px" v-model="buttonIcon" />
        </div>
      </div>
      <div>
        <a-button
          :type="buttonType"
          :ghost="buttonGhost"
          :icon="buttonIcon"
          :shape="buttonShape"
          :size="buttonSize"
          :block="buttonBlock"
          :disabled="buttonDisabled"
          :loading="buttonLoading"
        >
          默认按钮
        </a-button>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 按钮">
      <div class="control-box">
        <a-radio-group v-model="buttonTypeE">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'danger'">danger</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'text'">text</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonSizeE">
          <a-radio-button :value="null">large</a-radio-button>
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonPlainE">
          <a-radio-button :value="true">显示简洁</a-radio-button>
          <a-radio-button :value="false">隐藏简洁</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonRoundE">
          <a-radio-button :value="true">显示圆角</a-radio-button>
          <a-radio-button :value="false">隐藏圆角</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonCircleE">
          <a-radio-button :value="true">显示圆形</a-radio-button>
          <a-radio-button :value="false">隐藏圆形</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonDisabledE">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonLoadingE">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置按钮图标</span>
          <a-input style="width: 120px" v-model="buttonIconE" />
        </div>
      </div>
      <div>
        <el-button
          :type="buttonTypeE"
          :icon="buttonIconE"
          :plain="buttonPlainE"
          :round="buttonRoundE"
          :circle="buttonCircleE"
          :size="buttonSizeE"
          :disabled="buttonDisabledE"
          :loading="buttonLoadingE"
        >
          默认按钮
        </el-button>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 按钮">
      <div class="control-box">
        <a-radio-group v-model="buttonTypeA">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'text'">text</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonSizeA">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="null">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'smaller'">smaller</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonHollowA">
          <a-radio-button :value="true">显示背景透明</a-radio-button>
          <a-radio-button :value="false">隐藏背景透明</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonDisabledA">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonLoadingA">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置按钮图标</span>
          <a-input style="width: 120px" v-model="buttonIconA" />
        </div>
      </div>
      <div>
        <at-button
          :type="buttonTypeA"
          :icon="buttonIconA"
          :hollow="buttonHollowA"
          :size="buttonSizeA"
          :disabled="buttonDisabledA"
          :loading="buttonLoadingA"
        >
          默认按钮
        </at-button>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 按钮">
      <div class="control-box">
        <a-radio-group v-model="buttonTypeV">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'dashed'">dashed</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'text'">text</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonSizeV">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonShapeV">
          <a-radio-button :value="null">方形按钮</a-radio-button>
          <a-radio-button :value="'circle'">圆角按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonGhostV">
          <a-radio-button :value="true">显示背景透明</a-radio-button>
          <a-radio-button :value="false">隐藏背景透明</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonLongV">
          <a-radio-button :value="true">撑满宽度</a-radio-button>
          <a-radio-button :value="false">不撑满宽度</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonDisabledV">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="buttonLoadingV">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置按钮图标</span>
          <a-input style="width: 120px" v-model="buttonIconV" />
        </div>
      </div>
      <div>
        <Button
          :type="buttonTypeV"
          :ghost="buttonGhostV"
          :icon="buttonIconV"
          :shape="buttonShapeV"
          :size="buttonSizeV"
          :long="buttonLongV"
          :disabled="buttonDisabledV"
          :loading="buttonLoadingV"
        >
          默认按钮
        </Button>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      buttonType: "default",
      buttonSize: "default",
      buttonShape: null,
      buttonGhost: false,
      buttonBlock: false,
      buttonDisabled: false,
      buttonLoading: false,
      buttonIcon: "search",
      // ElementUI
      buttonTypeE: null,
      buttonSizeE: "medium",
      buttonPlainE: false,
      buttonRoundE: false,
      buttonCircleE: false,
      buttonDisabledE: false,
      buttonLoadingE: false,
      buttonIconE: "el-icon-search",
      // AtUI
      buttonTypeA: "default",
      buttonSizeA: null,
      buttonHollowA: false,
      buttonDisabledA: false,
      buttonLoadingA: false,
      buttonIconA: "icon-search",
      // ViewUI
      buttonTypeV: "default",
      buttonSizeV: "default",
      buttonShapeV: null,
      buttonGhostV: false,
      buttonLongV: false,
      buttonDisabledV: false,
      buttonLoadingV: false,
      buttonIconV: "ios-search",
    };
  },
  methods: {},
};
</script>