<template>
  <!-- 对话框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 对话框">
      <div class="control-box">
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
          <span style="margin-right: 5px">设置标题文本</span>
          <a-input style="width: 100px" v-model="modalTitle" />
        </div>
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
          <a-input style="width: 100px" v-model="modalWidth" />
        </div>
      </div>
      <div>
        <a-modal
          :visible="modalVisible"
          :closable="modalClosable"
          :mask="modalMask"
          :mask-closable="modalMaskClosable"
          :keyboard="modalKeyboard"
          :title="modalTitle"
          :ok-text="modalOkText"
          :cancel-text="modalCancelText"
          :width="modalWidth"
          @cancel="modalVisible = false"
        >
          <p>对话框内容</p>
        </a-modal>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 对话框">
      <div class="control-box">
        <a-radio-group v-model="modalVisibleE">
          <a-radio-button :value="true">打开对话框</a-radio-button>
          <a-radio-button :value="false">关闭对话框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalFullscreenE">
          <a-radio-button :value="true">开启全屏显示</a-radio-button>
          <a-radio-button :value="false">关闭全屏显示</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalCenterE">
          <a-radio-button :value="true">开启文本居中</a-radio-button>
          <a-radio-button :value="false">关闭文本居中</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalShowCloseE">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalModalE">
          <a-radio-button :value="true">显示遮罩层</a-radio-button>
          <a-radio-button :value="false">隐藏遮罩层</a-radio-button>
        </a-radio-group>
        <a-radio-group v-if="modalModalE" v-model="modalCloseOnClickModalE">
          <a-radio-button :value="true">
            开启点击遮罩层关闭对话框功能
          </a-radio-button>
          <a-radio-button :value="false">
            关闭点击遮罩层关闭对话框功能
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-if="modalModalE" v-model="modalCloseOnPressEscapeE">
          <a-radio-button :value="true">
            开启按ESC键关闭对话框功能
          </a-radio-button>
          <a-radio-button :value="false">
            关闭按ESC键关闭对话框功能
          </a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题文本</span>
          <a-input style="width: 100px" v-model="modalTitleE" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置对话框宽度</span>
          <a-input style="width: 100px" v-model="modalWidthE" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置对话框到顶部的距离</span>
          <a-input style="width: 100px" v-model="modalTopE" />
        </div>
      </div>
      <div>
        <el-dialog
          :visible.sync="modalVisibleE"
          :fullscreen="modalFullscreenE"
          :center="modalCenterE"
          :show-close="modalShowCloseE"
          :modal="modalModalE"
          :close-on-click-modal="modalCloseOnClickModalE"
          :close-on-press-escape="modalCloseOnPressEscapeE"
          :title="modalTitleE"
          :width="modalWidthE"
          :top="modalTopE"
        >
          <p>对话框内容</p>
        </el-dialog>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 对话框">
      <div class="c-f5222d">AtUI框架没有对话框</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 对话框">
      <div class="control-box">
        <a-radio-group v-model="modalVisibleV">
          <a-radio-button :value="true">打开对话框</a-radio-button>
          <a-radio-button :value="false">关闭对话框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalFullscreenV">
          <a-radio-button :value="true">开启全屏显示</a-radio-button>
          <a-radio-button :value="false">关闭全屏显示</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalFooterHideV">
          <a-radio-button :value="true">隐藏底部信息</a-radio-button>
          <a-radio-button :value="false">显示底部信息</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalClosableV">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalMaskV">
          <a-radio-button :value="true">显示遮罩层</a-radio-button>
          <a-radio-button :value="false">隐藏遮罩层</a-radio-button>
        </a-radio-group>
        <a-radio-group v-if="modalMaskV" v-model="modalMaskCosableV">
          <a-radio-button :value="true">
            开启点击遮罩层关闭对话框功能
          </a-radio-button>
          <a-radio-button :value="false">
            关闭点击遮罩层关闭对话框功能
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="modalDraggableV">
          <a-radio-button :value="true">开启对话框拖拽功能</a-radio-button>
          <a-radio-button :value="false">关闭对话框拖拽功能</a-radio-button>
        </a-radio-group>
        <a-radio-group v-show="modalDraggableV" v-model="modalStickyV">
          <a-radio-button :value="true">开启拖拽时吸附屏幕边缘</a-radio-button>
          <a-radio-button :value="false">关闭拖拽时吸附屏幕边缘</a-radio-button>
        </a-radio-group>
        <a-radio-group
          v-show="modalDraggableV"
          v-model="modalResetDragPositionV"
        >
          <a-radio-button :value="true">
            重新打开时重置拖拽的位置
          </a-radio-button>
          <a-radio-button :value="false">
            重新打开时不重置拖拽的位置
          </a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置标题文本</span>
          <a-input style="width: 100px" v-model="modalTitleV" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置确定按钮文本</span>
          <a-input style="width: 100px" v-model="modalOkTextV" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置取消按钮文本</span>
          <a-input style="width: 100px" v-model="modalCancelTextV" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置对话框宽度</span>
          <a-input style="width: 100px" v-model="modalWidthV" />
        </div>
      </div>
      <div>
        <Modal
          v-model="modalVisibleV"
          :fullscreen="modalFullscreenV"
          :footer-hide="modalFooterHideV"
          :closable="modalClosableV"
          :mask="modalMaskV"
          :mask-closable="modalMaskCosableV"
          :draggable="modalDraggableV"
          :sticky="modalStickyV"
          :reset-drag-position="modalResetDragPositionV"
          :title="modalTitleV"
          :ok-text="modalOkTextV"
          :cancel-text="modalCancelTextV"
          :width="modalWidthV"
        >
          <p>对话框内容</p>
        </Modal>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      modalVisible: false,
      modalClosable: true,
      modalMask: true,
      modalMaskClosable: true,
      modalKeyboard: true,
      modalTitle: "对话框标题",
      modalOkText: "确定",
      modalCancelText: "取消",
      modalWidth: "50%",
      // ElementUI
      modalVisibleE: false,
      modalFullscreenE: false,
      modalCenterE: false,
      modalShowCloseE: true,
      modalModalE: true,
      modalCloseOnClickModalE: true,
      modalCloseOnPressEscapeE: true,
      modalTitleE: "对话框标题",
      modalWidthE: "50%",
      modalTopE: "15vh",
      // ViewUI
      modalVisibleV: false,
      modalFullscreenV: false,
      modalFooterHideV: false,
      modalClosableV: true,
      modalMaskV: true,
      modalMaskCosableV: true,
      modalDraggableV: true,
      modalStickyV: true,
      modalResetDragPositionV: true,
      modalTitleV: "对话框标题",
      modalOkTextV: "确定",
      modalCancelTextV: "取消",
      modalWidthV: "500",
    };
  },
  methods: {},
};
</script>