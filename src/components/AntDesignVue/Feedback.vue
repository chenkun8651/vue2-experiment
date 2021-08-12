<template>
  <!-- 反馈组件 -->
  <div>
    <!-- 警告提示 -->
    <h1 class="title-xy">警告提示</h1>
    <div class="content">
      <!-- 标准警告提示 -->
      <div class="content-item">
        <h3 class="title2-xy">标准警告提示</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="alertType">
              <a-radio-button :value="'success'">成功提示</a-radio-button>
              <a-radio-button :value="'info'">信息提示</a-radio-button>
              <a-radio-button :value="'warning'">警告提示</a-radio-button>
              <a-radio-button :value="'error'">错误提示</a-radio-button>
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
        </div>
      </div>
    </div>
    <!-- 全局提示 -->
    <h1 class="title-xy">全局提示</h1>
    <div class="content">
      <!-- 标准全局提示 -->
      <div class="content-item">
        <h3 class="title2-xy">标准全局提示</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="messageType">
              <a-radio-button :value="'success'">成功提示</a-radio-button>
              <a-radio-button :value="'info'">信息提示</a-radio-button>
              <a-radio-button :value="'warning'">警告提示</a-radio-button>
              <a-radio-button :value="'error'">错误提示</a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置自动关闭的延时</span>
              <a-input-number style="width: 100px" v-model="messageDuration" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置内容</span>
              <a-input style="width: 200px" v-model="messageContent" />
            </div>
          </div>
          <div>
            <a-button type="primary" @click="popMessage">
              全局提示按钮
            </a-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 通知提醒框 -->
    <h1 class="title-xy">通知提醒框</h1>
    <div class="content">
      <!-- 标准通知提醒框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准通知提醒框</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="notificationType">
              <a-radio-button :value="'success'">成功提示</a-radio-button>
              <a-radio-button :value="'info'">信息提示</a-radio-button>
              <a-radio-button :value="'warning'">警告提示</a-radio-button>
              <a-radio-button :value="'error'">错误提示</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="notificationPlacement">
              <a-radio-button :value="'topRight'">右上弹出</a-radio-button>
              <a-radio-button :value="'topLeft'">左上弹出</a-radio-button>
              <a-radio-button :value="'bottomRight'">右下弹出</a-radio-button>
              <a-radio-button :value="'bottomLeft'">左下弹出</a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置自动关闭的延时</span>
              <a-input-number
                style="width: 100px"
                v-model="notificationDuration"
              />
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
              <span style="margin-right: 5px">
                设置弹出时通知框离顶部的距离
              </span>
              <a-input style="width: 200px" v-model="notificationTop" />
            </div>
            <div
              v-if="
                notificationPlacement === 'bottomRight' ||
                notificationPlacement === 'bottomLeft'
              "
              class="string-set"
            >
              <span style="margin-right: 5px">
                设置弹出时通知框离底部的距离
              </span>
              <a-input style="width: 200px" v-model="notificationBottom" />
            </div>
          </div>
          <div>
            <a-button type="primary" @click="popNotification">
              通知提醒框按钮
            </a-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 气泡确认框 -->
    <h1 class="title-xy">气泡确认框</h1>
    <div class="content">
      <!-- 标准气泡确认框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准气泡确认框</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="popconfirmDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="popconfirmPlacement">
              <a-radio-button :value="'top'">上方弹出</a-radio-button>
              <a-radio-button :value="'bottom'">下方弹出</a-radio-button>
              <a-radio-button :value="'left'">左边弹出</a-radio-button>
              <a-radio-button :value="'right'">右边弹出</a-radio-button>
            </a-radio-group>
            <div class="string-set">
              <span style="margin-right: 5px">设置确定按钮文本</span>
              <a-input style="width: 100px" v-model="popconfirmOkText" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置取消按钮文本</span>
              <a-input style="width: 100px" v-model="popconfirmCancelText" />
            </div>
          </div>
          <div>
            <a-popconfirm
              title="标准气泡确认框"
              :disabled="popconfirmDisabled"
              :placement="popconfirmPlacement"
              :ok-text="popconfirmOkText"
              :cancel-text="popconfirmCancelText"
            >
              <a-button type="primary">气泡确认框按钮</a-button>
            </a-popconfirm>
          </div>
        </div>
      </div>
    </div>
    <!-- 抽屉 -->
    <h1 class="title-xy">抽屉</h1>
    <div class="content">
      <!-- 标准抽屉 -->
      <div class="content-item">
        <h3 class="title2-xy">标准抽屉</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="drawerVisible">
              <a-radio-button :value="true">打开抽屉</a-radio-button>
              <a-radio-button :value="false">关闭抽屉</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="drawerPlacement">
              <a-radio-button :value="'top'">上方弹出</a-radio-button>
              <a-radio-button :value="'bottom'">下方弹出</a-radio-button>
              <a-radio-button :value="'left'">左边弹出</a-radio-button>
              <a-radio-button :value="'right'">右边弹出</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="drawerClosable">
              <a-radio-button :value="true">显示关闭按钮</a-radio-button>
              <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="drawerMask">
              <a-radio-button :value="true">显示遮罩层</a-radio-button>
              <a-radio-button :value="false">隐藏遮罩层</a-radio-button>
            </a-radio-group>
            <a-radio-group v-if="drawerMask" v-model="drawerMaskClosable">
              <a-radio-button :value="true">
                开启点击遮罩层关闭抽屉功能
              </a-radio-button>
              <a-radio-button :value="false">
                关闭点击遮罩层关闭抽屉功能
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-if="drawerMask" v-model="drawerKeyboard">
              <a-radio-button :value="true">
                开启按ESC键关闭抽屉功能
              </a-radio-button>
              <a-radio-button :value="false">
                关闭按ESC键关闭抽屉功能
              </a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置抽屉宽度</span>
              <a-input-number style="width: 100px" v-model="drawerWidth" />
            </div>
            <div
              v-if="drawerPlacement === 'top' || drawerPlacement === 'bottom'"
              class="number-set"
            >
              <span style="margin-right: 5px">设置抽屉高度</span>
              <a-input-number style="width: 100px" v-model="drawerHeight" />
            </div>
          </div>
          <div>
            <a-drawer
              title="标准抽屉"
              :destroyOnClose="true"
              :visible="drawerVisible"
              :closable="drawerClosable"
              :mask="drawerMask"
              :mask-closable="drawerMaskClosable"
              :keyboard="drawerKeyboard"
              :width="drawerWidth"
              :height="drawerHeight"
              :placement="drawerPlacement"
              @close="drawerVisible = false"
            >
              <p>抽屉内容...</p>
              <p>抽屉内容...</p>
              <p>抽屉内容...</p>
            </a-drawer>
          </div>
        </div>
      </div>
    </div>
    <!-- 对话框 -->
    <h1 class="title-xy">对话框</h1>
    <div class="content">
      <!-- 标准对话框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准对话框</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="modalVisible">
              <a-radio-button :value="true">打开对话框</a-radio-button>
              <a-radio-button :value="false">关闭对话框</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="modalClosable">
              <a-radio-button :value="true">显示关闭按钮</a-radio-button>
              <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="modalMask">
              <a-radio-button :value="true">显示遮罩层</a-radio-button>
              <a-radio-button :value="false">隐藏遮罩层</a-radio-button>
            </a-radio-group>
            <a-radio-group v-if="modalMask" v-model="modalMaskClosable">
              <a-radio-button :value="true">
                开启点击遮罩层关闭对话框功能
              </a-radio-button>
              <a-radio-button :value="false">
                关闭点击遮罩层关闭对话框功能
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-if="modalMask" v-model="modalKeyboard">
              <a-radio-button :value="true">
                开启按ESC键关闭对话框功能
              </a-radio-button>
              <a-radio-button :value="false">
                关闭按ESC键关闭对话框功能
              </a-radio-button>
            </a-radio-group>
            <div class="string-set">
              <span style="margin-right: 5px">设置确定按钮文本</span>
              <a-input style="width: 100px" v-model="modalOkText" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置取消按钮文本</span>
              <a-input style="width: 100px" v-model="modalCancelText" />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置对话框宽度</span>
              <a-input-number style="width: 100px" v-model="modalWidth" />
            </div>
          </div>
          <div>
            <a-modal
              title="标准对话框"
              :ok-type="'primary'"
              :visible="modalVisible"
              :closable="modalClosable"
              :mask="modalMask"
              :mask-closable="modalMaskClosable"
              :keyboard="modalKeyboard"
              :ok-text="modalOkText"
              :cancel-text="modalCancelText"
              :width="modalWidth"
              @cancel="modalVisible = false"
            >
              <p>对话框内容</p>
            </a-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { message as ADMessage } from "ant-design-vue";
// import { Message as ELMessage } from "element-ui";

export default {
  data() {
    return {
      // 警告提示
      alertType: "success",
      alertBanner: false,
      alertShowIcon: true,
      alertIcon: "",
      alertClosable: true,
      alertCloseText: "",
      alertMessage: "警告提示标题",
      alertDescription: "警告提示辅助内容",
      // 全局提示
      messageType: "success",
      messageDuration: 2,
      messageContent: "全局提示内容",
      // 通知提醒框
      notificationType: "success",
      notificationPlacement: "topRight",
      notificationDuration: 4,
      notificationMessage: "通知提醒框标题",
      notificationDescription: "通知提醒框内容",
      notificationBottom: "24px",
      notificationTop: "24px",
      // 气泡确认框
      popconfirmDisabled: false,
      popconfirmPlacement: "top",
      popconfirmOkText: "确定",
      popconfirmCancelText: "取消",
      // 抽屉
      drawerVisible: false,
      drawerPlacement: "right",
      drawerClosable: true,
      drawerMask: true,
      drawerMaskClosable: true,
      drawerKeyboard: true,
      drawerWidth: 256,
      drawerHeight: 256,
      // 对话框
      modalVisible: false,
      modalClosable: true,
      modalMask: true,
      modalMaskClosable: true,
      modalKeyboard: true,
      modalOkText: "确定",
      modalCancelText: "取消",
      modalWidth: 520,
    };
  },
  methods: {
    // 弹出全局消息提示
    popMessage() {
      const config = {
        content: this.messageContent,
        duration: this.messageDuration,
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
        default:
          ADMessage.info(config);
          break;
      }
    },
    // 弹出通知提醒按钮
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
  },
};
</script>