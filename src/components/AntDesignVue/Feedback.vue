<template>
  <!-- 反馈组件 -->
  <div>
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
export default {
  data() {
    return {
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
  methods: {},
};
</script>