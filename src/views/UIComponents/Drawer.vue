<template>
  <div class="flex" ref="box">
    <!-- 抽屉 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 抽屉">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否打开抽屉</span>
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
            <span class="mr-2">是否开启点击遮罩层关闭抽屉功能</span>
            <a-switch v-model="AntDesignVue.maskClosable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启按ESC键关闭抽屉功能</span>
            <a-switch v-model="AntDesignVue.keyboard" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉弹出位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.placement"
            >
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉标题文本</span>
            <a-input class="w-24" v-model="AntDesignVue.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉宽度</span>
            <a-input-number class="w-24" v-model="AntDesignVue.width" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉高度</span>
            <a-input-number class="w-24" v-model="AntDesignVue.height" />
          </div>
        </div>
        <div>
          <a-drawer
            :visible="AntDesignVue.visible"
            :placement="AntDesignVue.placement"
            :title="AntDesignVue.title"
            :closable="AntDesignVue.closable"
            :mask="AntDesignVue.mask"
            :mask-closable="AntDesignVue.maskClosable"
            :keyboard="AntDesignVue.keyboard"
            :width="AntDesignVue.width"
            :height="AntDesignVue.height"
            @close="AntDesignVue.visible = false"
          >
            <p>抽屉内容...</p>
            <p>抽屉内容...</p>
            <p>抽屉内容...</p>
          </a-drawer>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 抽屉">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否打开抽屉</span>
            <a-switch v-model="ElementUI.visible" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示标题</span>
            <a-switch v-model="ElementUI.withHeader" />
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
            <span class="mr-2">是否开启点击遮罩层关闭抽屉功能</span>
            <a-switch v-model="ElementUI.wrapperClosable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启按ESC键关闭抽屉功能</span>
            <a-switch v-model="ElementUI.closeOnPressEscape" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉弹出位置</span>
            <el-select size="small" class="w-36" v-model="ElementUI.direction">
              <el-option :value="'rtl'">rtl</el-option>
              <el-option :value="'ltr'">ltr</el-option>
              <el-option :value="'ttb'">ttb</el-option>
              <el-option :value="'btt'">btt</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉标题文本</span>
            <a-input class="w-24" v-model="ElementUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉大小</span>
            <a-input class="w-24" v-model="ElementUI.size" />
          </div>
        </div>
        <div>
          <el-drawer
            :visible.sync="ElementUI.visible"
            :with-header="ElementUI.withHeader"
            :show-close="ElementUI.showClose"
            :modal="ElementUI.modal"
            :wrapper-closable="ElementUI.wrapperClosable"
            :close-on-press-escape="ElementUI.closeOnPressEscape"
            :direction="ElementUI.direction"
            :title="ElementUI.title"
            :size="ElementUI.size"
          >
            <p>抽屉内容...</p>
            <p>抽屉内容...</p>
            <p>抽屉内容...</p>
          </el-drawer>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 抽屉">
        <div class="text-red-500">AtUI框架没有抽屉</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 抽屉">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否打开抽屉</span>
            <a-switch v-model="ViewUI.visible" />
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
            <span class="mr-2">是否开启点击遮罩层关闭抽屉功能</span>
            <a-switch v-model="ViewUI.maskClosable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启拖拽调整抽屉宽度</span>
            <a-switch v-model="ViewUI.draggable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉弹出位置</span>
            <el-select size="small" class="w-36" v-model="ViewUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉标题文本</span>
            <a-input class="w-24" v-model="ViewUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉宽度</span>
            <a-input-number class="w-24" v-model="ViewUI.width" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置抽屉高度</span>
            <a-input-number class="w-24" v-model="ViewUI.height" />
          </div>
        </div>
        <div>
          <Drawer
            v-model="ViewUI.visible"
            :closable="ViewUI.closable"
            :mask="ViewUI.mask"
            :mask-closable="ViewUI.maskClosable"
            :draggable="ViewUI.draggable"
            :placement="ViewUI.placement"
            :title="ViewUI.title"
            :width="ViewUI.width"
            :height="ViewUI.height"
          >
            <p>抽屉内容...</p>
            <p>抽屉内容...</p>
            <p>抽屉内容...</p>
          </Drawer>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.drawerAnchor"
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
        placement: "right",
        title: "抽屉标题",
        width: 256,
        height: 256,
      },
      ElementUI: {
        visible: false,
        withHeader: false,
        showClose: false,
        modal: false,
        wrapperClosable: false,
        closeOnPressEscape: false,
        direction: "rtl",
        title: "抽屉标题",
        size: "30%",
      },
      ViewUI: {
        visible: false,
        closable: false,
        mask: false,
        maskClosable: false,
        draggable: false,
        placement: "right",
        title: "抽屉标题",
        width: 256,
        height: 256,
      },
    };
  },
  methods: {},
};
</script>