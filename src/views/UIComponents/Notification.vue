<template>
  <div class="flex" ref="box">
    <!-- 通知提示 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 通知提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知提示类型</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知提示弹出位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.placement"
            >
              <el-option :value="'topRight'">topRight</el-option>
              <el-option :value="'topLeft'">topLeft</el-option>
              <el-option :value="'bottomRight'">bottomRight</el-option>
              <el-option :value="'bottomLeft'">bottomLeft</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知标题</span>
            <a-input class="w-60" v-model="AntDesignVue.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知内容</span>
            <a-input class="w-60" v-model="AntDesignVue.description" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出时通知框离顶部的距离</span>
            <a-input class="w-60" v-model="AntDesignVue.top" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置弹出时通知框离底部的距离</span>
            <a-input class="w-60" v-model="AntDesignVue.bottom" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知自动关闭的延时（秒）</span>
            <a-input-number class="w-24" v-model="AntDesignVue.duration" />
          </div>
        </div>
        <div>
          <a-button @click="popNotification">通知提示</a-button>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 通知提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ElementUI.showClose" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知提示类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知提示弹出位置</span>
            <el-select size="small" class="w-36" v-model="ElementUI.position">
              <el-option :value="'top-right'">top-right</el-option>
              <el-option :value="'top-left'">top-left</el-option>
              <el-option :value="'bottom-right'">bottom-right</el-option>
              <el-option :value="'bottom-left'">bottom-left</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知标题</span>
            <a-input class="w-60" v-model="ElementUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知内容</span>
            <a-input class="w-60" v-model="ElementUI.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动关闭的延时（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.duration" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置提示偏移距离</span>
            <a-input-number class="w-60" v-model="ElementUI.offset" />
          </div>
        </div>
        <div>
          <el-button @click="popNotification2">通知提示</el-button>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 通知提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="AtUI.showClose" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知提示类型</span>
            <el-select size="small" class="w-36" v-model="AtUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知标题</span>
            <a-input class="w-60" v-model="AtUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知内容</span>
            <a-input class="w-60" v-model="AtUI.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置通知自动关闭的延时（毫秒）</span>
            <a-input-number class="w-24" v-model="AtUI.duration" />
          </div>
        </div>
        <div>
          <at-button @click="popNotification3">通知提示</at-button>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 通知提示">
        <div class="text-yellow-500">ViewUI框架的通知提示需要付费使用</div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.datePickerAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        type: "success",
        placement: "topRight",
        message: "通知提醒框标题",
        description: "通知提醒框内容",
        top: "24px",
        bottom: "24px",
        duration: 5,
      },
      ElementUI: {
        showClose: false,
        type: "success",
        position: "top-right",
        title: "通知提醒框标题",
        message: "通知提醒框内容",
        duration: 5000,
        offset: 0,
      },
      AtUI: {
        showClose: false,
        type: "success",
        title: "通知提醒框标题",
        message: "通知提醒框内容",
        duration: 5000,
      },
    };
  },
  methods: {
    popNotification() {
      const config = {
        placement: this.AntDesignVue.placement,
        message: this.AntDesignVue.message,
        description: this.AntDesignVue.description,
        top: this.AntDesignVue.top,
        bottom: this.AntDesignVue.bottom,
        duration: this.AntDesignVue.duration,
      };
      switch (this.AntDesignVue.type) {
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
    popNotification2() {
      const config = {
        showClose: this.ElementUI.showClose,
        type: this.ElementUI.type,
        position: this.ElementUI.position,
        title: this.ElementUI.title,
        message: this.ElementUI.message,
        duration: this.ElementUI.duration,
        offset: this.ElementUI.offset,
      };
      this.$notify(config);
    },
    popNotification3() {
      const config = {
        showClose: this.AtUI.showClose,
        type: this.AtUI.type,
        title: this.AtUI.title,
        message: this.AtUI.message,
        duration: this.AtUI.duration,
      };
      this.$Notify(config);
    },
  },
};
</script>