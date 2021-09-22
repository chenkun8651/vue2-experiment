<template>
  <div class="flex" ref="box">
    <!-- 消息提示 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 消息提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息提示类型</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'loading'">loading</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息内容</span>
            <a-input class="w-60" v-model="AntDesignVue.content" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动关闭的延时（秒）</span>
            <a-input-number class="w-24" v-model="AntDesignVue.duration" />
          </div>
        </div>
        <div>
          <a-button @click="popMessage">消息提示</a-button>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 消息提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否文本居中</span>
            <a-switch v-model="ElementUI.center" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ElementUI.showClose" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息提示类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息内容</span>
            <a-input class="w-60" v-model="ElementUI.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动关闭的延时（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.duration" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息提示离顶部的偏移</span>
            <a-input-number class="w-24" v-model="ElementUI.offset" />
          </div>
        </div>
        <div>
          <el-button @click="popMessage2">消息提示</el-button>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 消息提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息提示类型</span>
            <el-select size="small" class="w-36" v-model="AtUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息内容</span>
            <a-input class="w-60" v-model="AtUI.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动关闭的延时（毫秒）</span>
            <a-input-number class="w-24" v-model="AtUI.duration" />
          </div>
        </div>
        <div>
          <at-button @click="popMessage3">消息提示</at-button>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 消息提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示背景色</span>
            <a-switch v-model="ViewUI.background" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ViewUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息提示类型</span>
            <el-select size="small" class="w-36" v-model="ViewUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'loading'">loading</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置消息内容</span>
            <a-input class="w-60" v-model="ViewUI.content" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动关闭的延时（秒）</span>
            <a-input-number class="w-24" v-model="ViewUI.duration" />
          </div>
        </div>
        <div>
          <Button @click="popMessage4">消息提示</Button>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.messageAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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
      AntDesignVue: {
        type: "success",
        content: "消息提示内容",
        duration: 5,
      },
      ElementUI: {
        center: false,
        showClose: false,
        type: "success",
        message: "消息提示内容",
        duration: 5000,
        offset: 20,
      },
      AtUI: {
        type: "success",
        message: "消息提示内容",
        duration: 5000,
      },
      ViewUI: {
        background: false,
        closable: false,
        type: "success",
        content: "消息提示内容",
        duration: 5,
      },
    };
  },
  methods: {
    popMessage() {
      const config = {
        content: this.AntDesignVue.content,
        duration: this.AntDesignVue.duration,
      };
      switch (this.AntDesignVue.type) {
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
    popMessage2() {
      const config = {
        center: this.ElementUI.center,
        showClose: this.ElementUI.showClose,
        type: this.ElementUI.type,
        message: this.ElementUI.message,
        duration: this.ElementUI.duration,
        offset: this.ElementUI.offset,
      };
      ELMessage(config);
    },
    popMessage3() {
      const config = {
        type: this.AtUI.type,
        message: this.AtUI.message,
        duration: this.AtUI.duration,
      };
      ATMessage(config);
    },
    popMessage4() {
      const config = {
        background: this.ViewUI.background,
        closable: this.ViewUI.closable,
        content: this.ViewUI.content,
        duration: this.ViewUI.duration,
      };
      switch (this.ViewUI.type) {
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