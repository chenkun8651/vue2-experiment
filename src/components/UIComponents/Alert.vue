<template>
  <!-- 警告提示 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 警告提示">
      <div class="radio-box">
        <a-radio-group v-model="alertType">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertBanner">
          <a-radio-button :value="false">显示边框</a-radio-button>
          <a-radio-button :value="true">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertShowIcon">
          <a-radio-button :value="true">显示提示图标</a-radio-button>
          <a-radio-button :value="false">隐藏提示图标</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">自定义提示图标</span>
          <a-input style="width: 100px" v-model="alertIcon" />
        </div>
        <a-radio-group v-model="alertClosable">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">自定义关闭按钮</span>
          <a-input style="width: 100px" v-model="alertCloseText" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题</span>
          <a-input style="width: 200px" v-model="alertMessage" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置辅助内容</span>
          <a-input style="width: 200px" v-model="alertDescription" />
        </div>
      </div>
      <div>
        <a-alert
          :message="alertMessage"
          :description="alertDescription"
          :banner="alertBanner"
          :closable="alertClosable"
          :close-text="alertCloseText"
          :show-icon="alertShowIcon"
          :icon="alertIcon"
          :type="alertType"
        >
        </a-alert>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 警告提示">
      <div class="radio-box">
        <a-radio-group v-model="alertTypeE">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertEffectE">
          <a-radio-button :value="'light'">light</a-radio-button>
          <a-radio-button :value="'dark'">dark</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertShowIconE">
          <a-radio-button :value="true">显示提示图标</a-radio-button>
          <a-radio-button :value="false">隐藏提示图标</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertClosableE">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">自定义关闭按钮</span>
          <a-input style="width: 100px" v-model="alertCloseTextE" />
        </div>
        <a-radio-group v-model="alertCenterE">
          <a-radio-button :value="true">显示文本居中</a-radio-button>
          <a-radio-button :value="false">隐藏文本居中</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题</span>
          <a-input style="width: 200px" v-model="alertTitleE" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置辅助内容</span>
          <a-input style="width: 200px" v-model="alertDescriptionE" />
        </div>
      </div>
      <div>
        <el-alert
          :type="alertTypeE"
          :effect="alertEffectE"
          :show-icon="alertShowIconE"
          :closable="alertClosableE"
          :close-text="alertCloseTextE"
          :center="alertCenterE"
          :title="alertTitleE"
          :description="alertDescriptionE"
        >
        </el-alert>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 警告提示">
      <div class="radio-box">
        <a-radio-group v-model="alertTypeA">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertShowIconA">
          <a-radio-button :value="true">显示提示图标</a-radio-button>
          <a-radio-button :value="false">隐藏提示图标</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">自定义提示图标</span>
          <a-input style="width: 100px" v-model="alertIconA" />
        </div>
        <a-radio-group v-model="alertClosableA">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">自定义关闭按钮</span>
          <a-input style="width: 100px" v-model="alertCloseTextA" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题</span>
          <a-input style="width: 200px" v-model="alertMessageA" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置辅助内容</span>
          <a-input style="width: 200px" v-model="alertDescriptionA" />
        </div>
      </div>
      <div class="c-f5222d">
        <at-alert
          :type="alertTypeA"
          :show-icon="alertShowIconA"
          :icon="alertIconA"
          :closable="alertClosableA"
          :close-text="alertCloseTextA"
          :message="alertMessageA"
          :description="alertDescriptionA"
        >
        </at-alert>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 警告提示">
      <div class="radio-box">
        <a-radio-group v-model="alertTypeV">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertShowIconV">
          <a-radio-button :value="true">显示提示图标</a-radio-button>
          <a-radio-button :value="false">隐藏提示图标</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="alertClosableV">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Alert
          :type="alertTypeV"
          :show-icon="alertShowIconV"
          :closable="alertClosableV"
        >
          警告提示辅助内容
        </Alert>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      alertType: "success",
      alertBanner: true,
      alertShowIcon: true,
      alertIcon: "",
      alertClosable: true,
      alertCloseText: "",
      alertMessage: "警告提示标题",
      alertDescription: "警告提示辅助内容",
      // ElementUI
      alertTypeE: "success",
      alertEffectE: "light",
      alertShowIconE: true,
      alertClosableE: true,
      alertCloseTextE: "",
      alertCenterE: false,
      alertTitleE: "警告提示标题",
      alertDescriptionE: "警告提示辅助内容",
      // AtUI
      alertTypeA: "success",
      alertShowIconA: true,
      alertIconA: "",
      alertClosableA: true,
      alertCloseTextA: "",
      alertMessageA: "警告提示标题",
      alertDescriptionA: "警告提示辅助内容",
      // ViewUI
      alertTypeV: "success",
      alertShowIconV: true,
      alertClosableV: true,
    };
  },
  methods: {
    focusAvatarSize() {
      if (typeof this.avatarSizeE === "string") {
        this.avatarSizeE = 32;
      }
      if (typeof this.avatarSizeV === "string") {
        this.avatarSizeV = 32;
      }
    },
  },
};
</script>