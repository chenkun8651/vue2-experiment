<template>
  <!-- 通知提示 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 通知提示">
      <div class="radio-box">
        <a-radio-group v-model="notificationType">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="notificationPlacement">
          <a-radio-button :value="'topRight'">topRight</a-radio-button>
          <a-radio-button :value="'topLeft'">topLeft</a-radio-button>
          <a-radio-button :value="'bottomRight'">bottomRight</a-radio-button>
          <a-radio-button :value="'bottomLeft'">bottomLeft</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置自动关闭的延时（秒）</span>
          <a-input-number style="width: 100px" v-model="notificationDuration" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题</span>
          <a-input style="width: 200px" v-model="notificationMessage" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置内容</span>
          <a-input style="width: 200px" v-model="notificationDescription" />
        </div>
        <div
          v-if="
            notificationPlacement === 'topRight' ||
            notificationPlacement === 'topLeft'
          "
          class="string-set"
        >
          <span style="margin-right: 5px">设置弹出时通知框离顶部的距离</span>
          <a-input style="width: 200px" v-model="notificationTop" />
        </div>
        <div
          v-if="
            notificationPlacement === 'bottomRight' ||
            notificationPlacement === 'bottomLeft'
          "
          class="string-set"
        >
          <span style="margin-right: 5px">设置弹出时通知框离底部的距离</span>
          <a-input style="width: 200px" v-model="notificationBottom" />
        </div>
      </div>
      <div>
        <a-button @click="popNotification">通知提示</a-button>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 通知提示">
      <div class="radio-box">
        <a-radio-group v-model="notificationTypeE">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="notificationPositionE">
          <a-radio-button :value="'top-right'">topRight</a-radio-button>
          <a-radio-button :value="'top-left'">topLeft</a-radio-button>
          <a-radio-button :value="'bottom-right'">bottomRight</a-radio-button>
          <a-radio-button :value="'bottom-left'">bottomLeft</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="notificationShowCloseE">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置自动关闭的延时（毫秒）</span>
          <a-input-number
            style="width: 100px"
            v-model="notificationDurationE"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题</span>
          <a-input style="width: 200px" v-model="notificationTitleE" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置内容</span>
          <a-input style="width: 200px" v-model="notificationMessageE" />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">设置提示偏移距离</span>
          <a-input-number style="width: 200px" v-model="notificationOffsetE" />
        </div>
      </div>
      <div>
        <el-button @click="popNotificationE">通知提示</el-button>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 通知提示">
      <div class="radio-box">
        <a-radio-group v-model="notificationTypeA">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="notificationShowCloseA">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置自动关闭的延时（毫秒）</span>
          <a-input-number
            style="width: 100px"
            v-model="notificationDurationA"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题</span>
          <a-input style="width: 200px" v-model="notificationTitleA" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置内容</span>
          <a-input style="width: 200px" v-model="notificationMessageA" />
        </div>
      </div>
      <div>
        <at-button @click="popNotificationA">通知提示</at-button>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 通知提示">
      <div class="c-faad14">ViewUI框架的通知提示需要付费使用</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      notificationType: "success",
      notificationPlacement: "topRight",
      notificationDuration: 8,
      notificationMessage: "通知提醒框标题",
      notificationDescription: "通知提醒框内容",
      notificationBottom: "24px",
      notificationTop: "24px",
      // ElementUI
      notificationTypeE: "success",
      notificationPositionE: "top-right",
      notificationShowCloseE: false,
      notificationDurationE: 8000,
      notificationTitleE: "通知提醒框标题",
      notificationMessageE: "通知提醒框内容",
      notificationOffsetE: 0,
      // AtUI
      notificationTypeA: "success",
      notificationShowCloseA: false,
      notificationDurationA: 8000,
      notificationTitleA: "通知提醒框标题",
      notificationMessageA: "通知提醒框内容",
    };
  },
  methods: {
    popNotification() {
      const config = {
        placement: this.notificationPlacement,
        duration: this.notificationDuration,
        message: this.notificationMessage,
        description: this.notificationDescription,
        top: this.notificationTop,
        bottom: this.notificationBottom,
      };
      switch (this.notificationType) {
        case "success":
          this.$notification.success(config);
          break;
        case "info":
          this.$notification.info(config);
          break;
        case "warning":
          this.$notification.warning(config);
          break;
        case "error":
          this.$notification.error(config);
          break;
        default:
          this.$notification.info(config);
          break;
      }
    },
    popNotificationE() {
      const config = {
        type: this.notificationTypeE,
        position: this.notificationPositionE,
        showClose: this.notificationShowCloseE,
        duration: this.notificationDurationE,
        title: this.notificationTitleE,
        message: this.notificationMessageE,
        offset: this.notificationOffsetE,
      };
      this.$notify(config);
    },
    popNotificationA() {
      const config = {
        type: this.notificationTypeA,
        showClose: this.notificationShowCloseA,
        duration: this.notificationDurationA,
        title: this.notificationTitleA,
        message: this.notificationMessageA,
      };
      this.$Notify(config);
    },
  },
};
</script>