<template>
  <!-- 消息提示 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 消息提示">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="messageType">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'loading'">loading</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置自动关闭的延时（秒）</span>
          <a-input-number class="w-24" v-model="messageDuration" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置消息内容</span>
          <a-input class="w-60" v-model="messageContent" />
        </div>
      </div>
      <div>
        <a-button @click="popMessage">消息提示</a-button>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 消息提示">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="messageTypeE">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="messageCenterE">
          <a-radio-button :value="true">显示文本居中</a-radio-button>
          <a-radio-button :value="false">隐藏文本居中</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="messageShowCloseE">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置自动关闭的延时（毫秒）</span>
          <a-input-number class="w-24" v-model="messageDurationE" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置消息提示离顶部的偏移</span>
          <a-input-number class="w-24" v-model="messageOffsetE" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置消息内容</span>
          <a-input class="w-60" v-model="messageMessageE" />
        </div>
      </div>
      <div>
        <el-button @click="popMessageE">消息提示</el-button>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 消息提示">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="messageTypeA">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置自动关闭的延时（毫秒）</span>
          <a-input-number class="w-24" v-model="messageDurationA" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置消息内容</span>
          <a-input class="w-60" v-model="messageMessageA" />
        </div>
      </div>
      <div>
        <at-button @click="popMessageA">消息提示</at-button>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 消息提示">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="messageTypeV">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'loading'">loading</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="messageBackgroundV">
          <a-radio-button :value="true">显示背景色</a-radio-button>
          <a-radio-button :value="false">隐藏背景色</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="messageClosableV">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置自动关闭的延时（秒）</span>
          <a-input-number class="w-24" v-model="messageDurationV" />
        </div>
        <div class="my-2 mr-5">
          <span class="mr-2">设置消息内容</span>
          <a-input class="w-60" v-model="messageContentV" />
        </div>
      </div>
      <div>
        <Button @click="popMessageV">消息提示</Button>
      </div>
    </a-card>
  </div>
</template>

<script>
import { message as ADMessage } from "ant-design-vue";
import { Message as ELMessage } from "element-ui";
import { Message as ATMessage } from "at-ui";
import { Message as VEMessage } from "view-design";

export default {
  data() {
    return {
      // AntDesignVue
      messageType: "success",
      messageDuration: 2,
      messageContent: "消息提示内容",
      // ElementUI
      messageTypeE: "success",
      messageCenterE: false,
      messageShowCloseE: false,
      messageDurationE: 5000,
      messageOffsetE: 20,
      messageMessageE: "消息提示内容",
      // AtUI
      messageTypeA: "success",
      messageDurationA: 5000,
      messageMessageA: "消息提示内容",
      // ViewUI
      messageTypeV: "success",
      messageBackgroundV: false,
      messageClosableV: false,
      messageDurationV: 2,
      messageContentV: "消息提示内容",
    };
  },
  methods: {
    popMessage() {
      const config = {
        duration: this.messageDuration,
        content: this.messageContent,
      };
      switch (this.messageType) {
        case "success":
          ADMessage.success(config);
          break;
        case "info":
          ADMessage.info(config);
          break;
        case "warning":
          ADMessage.warning(config);
          break;
        case "error":
          ADMessage.error(config);
          break;
        case "loading":
          ADMessage.loading(config);
          break;
        default:
          ADMessage.info(config);
          break;
      }
    },
    popMessageE() {
      const config = {
        type: this.messageTypeE,
        center: this.messageCenterE,
        showClose: this.messageShowCloseE,
        duration: this.messageDurationE,
        offset: this.messageOffsetE,
        message: this.messageMessageE,
      };
      ELMessage(config);
    },
    popMessageA() {
      const config = {
        type: this.messageTypeA,
        duration: this.messageDurationA,
        message: this.messageMessageA,
      };
      ATMessage(config);
    },
    popMessageV() {
      const config = {
        background: this.messageBackgroundV,
        closable: this.messageClosableV,
        duration: this.messageDurationV,
        content: this.messageContentV,
      };
      switch (this.messageTypeV) {
        case "success":
          VEMessage.success(config);
          break;
        case "info":
          VEMessage.info(config);
          break;
        case "warning":
          VEMessage.warning(config);
          break;
        case "error":
          VEMessage.error(config);
          break;
        case "loading":
          VEMessage.loading(config);
          break;
        default:
          VEMessage.info(config);
          break;
      }
    },
  },
};
</script>