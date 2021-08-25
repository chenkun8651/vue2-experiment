<template>
  <!-- 反馈组件 -->
  <div>
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
export default {
  data() {
    return {
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
  methods: {},
};
</script>