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
            <a-radio-group v-model="alertBanner">
              <a-radio-button :value="true">开启顶部公告</a-radio-button>
              <a-radio-button :value="false">关闭顶部公告</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="alertClosable">
              <a-radio-button :value="true">显示关闭按钮</a-radio-button>
              <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="alertShowIcon">
              <a-radio-button :value="true">显示提示图标</a-radio-button>
              <a-radio-button :value="false">隐藏提示图标</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="alertType">
              <a-radio-button :value="'success'">成功提示</a-radio-button>
              <a-radio-button :value="'info'">信息提示</a-radio-button>
              <a-radio-button :value="'warning'">警告提示</a-radio-button>
              <a-radio-button :value="'error'">错误提示</a-radio-button>
            </a-radio-group>
            <div class="string-set">
              <span style="margin-right: 5px">自定义关闭按钮</span>
              <a-input style="width: 100px" v-model="alertCloseText" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">自定义提示图标</span>
              <a-input style="width: 100px" v-model="alertIcon" />
            </div>
          </div>
          <div>
            <a-alert
              message="警告提示"
              description="辅助的文字警告提示"
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
    <!-- 警告提示 -->
    <h1 class="title-xy">警告提示</h1>
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
              <span style="margin-right: 5px">设置提示内容</span>
              <a-input style="width: 200px" v-model="messageContent" />
            </div>
          </div>
          <div>
            <a-button type="primary" @click="alertMessage">
              全局提示按钮
            </a-button>
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
            <a-radio-group v-model="drawerKeyboard">
              <a-radio-button :value="true">
                开启按ESC键关闭抽屉功能
              </a-radio-button>
              <a-radio-button :value="false">
                关闭按ESC键关闭抽屉功能
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="drawerPlacement">
              <a-radio-button :value="'top'">上方</a-radio-button>
              <a-radio-button :value="'bottom'">下方</a-radio-button>
              <a-radio-button :value="'left'">左边</a-radio-button>
              <a-radio-button :value="'right'">右边</a-radio-button>
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
            <a-radio-group v-model="modalKeyboard">
              <a-radio-button :value="true">
                开启按ESC键关闭对话框功能
              </a-radio-button>
              <a-radio-button :value="false">
                关闭按ESC键关闭对话框功能
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="modalCentered">
              <a-radio-button :value="true">垂直居中展示</a-radio-button>
              <a-radio-button :value="false">正常展示</a-radio-button>
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
              title="对话框标题"
              :ok-type="'primary'"
              :visible="modalVisible"
              :closable="modalClosable"
              :centered="modalCentered"
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
    <!-- 通知提醒框 -->
    <h1 class="title-xy">通知提醒框</h1>
    <div class="content">
      <!-- 标准通知提醒框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准通知提醒框</h3>
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
            <a-radio-group v-model="modalKeyboard">
              <a-radio-button :value="true">
                开启按ESC键关闭对话框功能
              </a-radio-button>
              <a-radio-button :value="false">
                关闭按ESC键关闭对话框功能
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="modalCentered">
              <a-radio-button :value="true">垂直居中展示</a-radio-button>
              <a-radio-button :value="false">正常展示</a-radio-button>
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
              title="对话框标题"
              :ok-type="'primary'"
              :visible="modalVisible"
              :closable="modalClosable"
              :centered="modalCentered"
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
export default {
  data() {
    return {
      // 警告提示
      alertBanner: true,
      alertClosable: true,
      alertCloseText: "",
      alertShowIcon: true,
      alertIcon: "",
      alertType: "warning",
      // 全局提示
      messageType: "success",
      messageDuration: 2,
      messageContent: "默认全局提示内容",
      // 抽屉
      drawerVisible: false,
      drawerClosable: true,
      drawerMask: true,
      drawerMaskClosable: true,
      drawerKeyboard: true,
      drawerWidth: 256,
      drawerHeight: 256,
      drawerPlacement: "right",
      // 对话框
      modalVisible: false,
      modalClosable: true,
      modalMask: true,
      modalMaskClosable: true,
      modalKeyboard: true,
      modalCentered: true,
      modalOkText: "确定",
      modalCancelText: "取消",
      modalWidth: 520,
    };
  },
  methods: {
    alertMessage() {
      switch (this.messageType) {
        case "success":
          this.$message.success(this.messageContent);
          break;
        case "info":
          this.$message.info(this.messageContent);
          break;
        case "warning":
          this.$message.warning(this.messageContent);
          break;
        case "error":
          this.$message.error(this.messageContent);
          break;
        default:
          this.$message.info(this.messageContent);
          break;
      }
    },
  },
};
</script>