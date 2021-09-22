<template>
  <div class="flex" ref="box">
    <!-- 对话框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 对话框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否打开对话框</span>
            <a-switch v-model="AntDesignVue.visible" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="AntDesignVue.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示遮罩层</span>
            <a-switch v-model="AntDesignVue.mask" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启点击遮罩层关闭对话框功能</span>
            <a-switch v-model="AntDesignVue.maskClosable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启按ESC键关闭对话框功能</span>
            <a-switch v-model="AntDesignVue.keyboard" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标题文本</span>
            <a-input class="w-24" v-model="AntDesignVue.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置确定按钮文本</span>
            <a-input class="w-24" v-model="AntDesignVue.okText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置取消按钮文本</span>
            <a-input class="w-24" v-model="AntDesignVue.cancelText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置对话框宽度</span>
            <a-input class="w-24" v-model="AntDesignVue.width" />
          </div>
        </div>
        <div>
          <a-modal
            :visible="AntDesignVue.visible"
            :closable="AntDesignVue.closable"
            :mask="AntDesignVue.mask"
            :mask-closable="AntDesignVue.maskClosable"
            :keyboard="AntDesignVue.keyboard"
            :title="AntDesignVue.title"
            :ok-text="AntDesignVue.okText"
            :cancel-text="AntDesignVue.cancelText"
            :width="AntDesignVue.width"
            @cancel="AntDesignVue.visible = false"
          >
            <p>对话框内容</p>
          </a-modal>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 对话框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否打开对话框</span>
            <a-switch v-model="ElementUI.visible" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启全屏显示</span>
            <a-switch v-model="ElementUI.fullscreen" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示文本居中</span>
            <a-switch v-model="ElementUI.center" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ElementUI.showClose" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示遮罩层</span>
            <a-switch v-model="ElementUI.modal" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启点击遮罩层关闭对话框功能</span>
            <a-switch v-model="ElementUI.closeOnClickModal" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启按ESC键关闭对话框功能</span>
            <a-switch v-model="ElementUI.closeOnPressEscape" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标题文本</span>
            <a-input class="w-24" v-model="ElementUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置对话框宽度</span>
            <a-input class="w-24" v-model="ElementUI.width" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置对话框到顶部的距离</span>
            <a-input class="w-24" v-model="ElementUI.top" />
          </div>
        </div>
        <div>
          <el-dialog
            :visible.sync="ElementUI.visible"
            :fullscreen="ElementUI.fullscreen"
            :center="ElementUI.center"
            :show-close="ElementUI.showClose"
            :modal="ElementUI.modal"
            :close-on-click-modal="ElementUI.closeOnClickModal"
            :close-on-press-escape="ElementUI.closeOnPressEscape"
            :title="ElementUI.title"
            :width="ElementUI.width"
            :top="ElementUI.top"
          >
            <p>对话框内容</p>
          </el-dialog>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 对话框">
        <div class="text-red-500">AtUI框架没有对话框</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 对话框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否打开对话框</span>
            <a-switch v-model="ViewUI.visible" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启全屏显示</span>
            <a-switch v-model="ViewUI.fullscreen" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否隐藏底部信息</span>
            <a-switch v-model="ViewUI.footerHide" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ViewUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示遮罩层</span>
            <a-switch v-model="ViewUI.mask" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启点击遮罩层关闭对话框功能</span>
            <a-switch v-model="ViewUI.maskCosable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启对话框拖拽功能</span>
            <a-switch v-model="ViewUI.draggable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启拖拽时吸附屏幕边缘</span>
            <a-switch v-model="ViewUI.sticky" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">重新打开时是否重置拖拽位置</span>
            <a-switch v-model="ViewUI.resetDragPosition" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标题文本</span>
            <a-input class="w-24" v-model="ViewUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置确定按钮文本</span>
            <a-input class="w-24" v-model="ViewUI.okText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置取消按钮文本</span>
            <a-input class="w-24" v-model="ViewUI.cancelText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置对话框宽度</span>
            <a-input class="w-24" v-model="ViewUI.width" />
          </div>
        </div>
        <div>
          <Modal
            v-model="ViewUI.visible"
            :fullscreen="ViewUI.fullscreen"
            :footer-hide="ViewUI.footerHide"
            :closable="ViewUI.closable"
            :mask="ViewUI.mask"
            :mask-closable="ViewUI.maskCosable"
            :draggable="ViewUI.draggable"
            :sticky="ViewUI.sticky"
            :reset-drag-position="ViewUI.resetDragPosition"
            :title="ViewUI.title"
            :ok-text="ViewUI.okText"
            :cancel-text="ViewUI.cancelText"
            :width="ViewUI.width"
          >
            <p>对话框内容</p>
          </Modal>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.modalAnchor"
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
        visible: false,
        closable: false,
        mask: false,
        maskClosable: false,
        keyboard: false,
        title: "对话框标题",
        okText: "确定",
        cancelText: "取消",
        width: "50%",
      },
      ElementUI: {
        visible: false,
        fullscreen: false,
        center: false,
        showClose: false,
        modal: false,
        closeOnClickModal: false,
        closeOnPressEscape: false,
        title: "对话框标题",
        width: "50%",
        top: "15vh",
      },
      ViewUI: {
        visible: false,
        fullscreen: false,
        footerHide: false,
        closable: false,
        mask: false,
        maskCosable: false,
        draggable: false,
        sticky: false,
        resetDragPosition: false,
        title: "对话框标题",
        okText: "确定",
        cancelText: "取消",
        width: "500",
      },
    };
  },
  methods: {},
};
</script>