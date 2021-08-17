<template>
  <!-- 按钮组件 -->
  <div>
    <a-card class="card-margin">
      <div slot="title" class="title-xy">按钮</div>
      <!-- AntDesignVue -->
      <a-card class="card-margin" title="AntDesignVue 按钮">
        <div class="radio-box">
          <a-radio-group v-model="buttonType">
            <a-radio-button :value="'default'">默认按钮</a-radio-button>
            <a-radio-button :value="'primary'">主要按钮</a-radio-button>
            <a-radio-button :value="'dashed'">虚线按钮</a-radio-button>
            <a-radio-button :value="'danger'">危险按钮</a-radio-button>
            <a-radio-button :value="'link'">链接按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonGhost">
            <a-radio-button :value="true">显示背景透明</a-radio-button>
            <a-radio-button :value="false">隐藏背景透明</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonShape">
            <a-radio-button :value="null">方形按钮</a-radio-button>
            <a-radio-button :value="'circle'">圆形按钮</a-radio-button>
            <a-radio-button :value="'round'">圆角按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonSize">
            <a-radio-button :value="'large'">大号按钮</a-radio-button>
            <a-radio-button :value="'default'">中号按钮</a-radio-button>
            <a-radio-button :value="'small'">小号按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonBlock">
            <a-radio-button :value="true">宽度撑满</a-radio-button>
            <a-radio-button :value="false">宽度不撑满</a-radio-button>
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
      <a-card class="card-margin" title="ElementUI 按钮">
        <div class="radio-box">
          <a-radio-group v-model="buttonTypeE">
            <a-radio-button :value="null">默认按钮</a-radio-button>
            <a-radio-button :value="'primary'">主要按钮</a-radio-button>
            <a-radio-button :value="'success'">成功按钮</a-radio-button>
            <a-radio-button :value="'warning'">警告按钮</a-radio-button>
            <a-radio-button :value="'danger'">危险按钮</a-radio-button>
            <a-radio-button :value="'info'">信息按钮</a-radio-button>
            <a-radio-button :value="'text'">文本按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonPlainE">
            <a-radio-button :value="true">显示简洁按钮</a-radio-button>
            <a-radio-button :value="false">隐藏简洁按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonRoundE">
            <a-radio-button :value="true">显示圆角按钮</a-radio-button>
            <a-radio-button :value="false">隐藏圆角按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonCircleE">
            <a-radio-button :value="true">显示圆形按钮</a-radio-button>
            <a-radio-button :value="false">隐藏圆形按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonSizeE">
            <a-radio-button :value="null">大号按钮</a-radio-button>
            <a-radio-button :value="'medium'">中号按钮</a-radio-button>
            <a-radio-button :value="'small'">小号按钮</a-radio-button>
            <a-radio-button :value="'mini'">迷你号按钮</a-radio-button>
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
      <a-card class="card-margin" title="AtUI 按钮">
        <div class="radio-box">
          <a-radio-group v-model="buttonTypeA">
            <a-radio-button :value="'default'">默认按钮</a-radio-button>
            <a-radio-button :value="'primary'">主要按钮</a-radio-button>
            <a-radio-button :value="'success'">成功按钮</a-radio-button>
            <a-radio-button :value="'warning'">警告按钮</a-radio-button>
            <a-radio-button :value="'error'">错误按钮</a-radio-button>
            <a-radio-button :value="'info'">信息按钮</a-radio-button>
            <a-radio-button :value="'text'">文本按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonHollowA">
            <a-radio-button :value="true">显示背景透明</a-radio-button>
            <a-radio-button :value="false">隐藏背景透明</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonSizeA">
            <a-radio-button :value="'large'">大号按钮</a-radio-button>
            <a-radio-button :value="null">中号按钮</a-radio-button>
            <a-radio-button :value="'small'">小号按钮</a-radio-button>
            <a-radio-button :value="'smaller'">超小号按钮</a-radio-button>
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
      <a-card class="card-margin" title="ViewUI 按钮">
        <div class="radio-box">
          <a-radio-group v-model="buttonTypeV">
            <a-radio-button :value="'default'">默认按钮</a-radio-button>
            <a-radio-button :value="'primary'">主要按钮</a-radio-button>
            <a-radio-button :value="'success'">成功按钮</a-radio-button>
            <a-radio-button :value="'warning'">警告按钮</a-radio-button>
            <a-radio-button :value="'error'">错误按钮</a-radio-button>
            <a-radio-button :value="'dashed'">虚线按钮</a-radio-button>
            <a-radio-button :value="'info'">信息按钮</a-radio-button>
            <a-radio-button :value="'text'">文本按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonGhostV">
            <a-radio-button :value="true">显示背景透明</a-radio-button>
            <a-radio-button :value="false">隐藏背景透明</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonSizeV">
            <a-radio-button :value="'large'">大号按钮</a-radio-button>
            <a-radio-button :value="'default'">中号按钮</a-radio-button>
            <a-radio-button :value="'small'">小号按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="buttonLongV">
            <a-radio-button :value="true">宽度撑满</a-radio-button>
            <a-radio-button :value="false">宽度不撑满</a-radio-button>
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
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      buttonType: "primary",
      buttonGhost: false,
      buttonIcon: "search",
      buttonShape: null,
      buttonSize: "default",
      buttonBlock: false,
      buttonDisabled: false,
      buttonLoading: false,
      // ElementUI
      buttonTypeE: "primary",
      buttonIconE: "el-icon-search",
      buttonPlainE: false,
      buttonRoundE: false,
      buttonCircleE: false,
      buttonSizeE: null,
      buttonDisabledE: false,
      buttonLoadingE: false,
      // AtUI
      buttonTypeA: "primary",
      buttonIconA: "icon-search",
      buttonHollowA: false,
      buttonSizeA: null,
      buttonDisabledA: false,
      buttonLoadingA: false,
      // ViewUI
      buttonTypeV: "primary",
      buttonGhostV: false,
      buttonIconV: "ios-search",
      buttonShapeV: null,
      buttonSizeV: "default",
      buttonLongV: false,
      buttonDisabledV: false,
      buttonLoadingV: false,
    };
  },
  methods: {},
};
</script>