<template>
  <!-- 抽屉 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 抽屉">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="drawerVisible">
          <a-radio-button :value="true">打开抽屉</a-radio-button>
          <a-radio-button :value="false">关闭抽屉</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="drawerPlacement">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置抽屉标题文本</span>
          <a-input style="width: 100px" v-model="drawerTitle" />
        </div>
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
        <div
          v-if="drawerPlacement === 'left' || drawerPlacement === 'right'"
          class="my-2 mr-5"
        >
          <span style="margin-right: 5px">设置抽屉宽度</span>
          <a-input-number style="width: 100px" v-model="drawerWidth" />
        </div>
        <div
          v-if="drawerPlacement === 'top' || drawerPlacement === 'bottom'"
          class="my-2 mr-5"
        >
          <span style="margin-right: 5px">设置抽屉高度</span>
          <a-input-number style="width: 100px" v-model="drawerHeight" />
        </div>
      </div>
      <div>
        <a-drawer
          :visible="drawerVisible"
          :placement="drawerPlacement"
          :title="drawerTitle"
          :closable="drawerClosable"
          :mask="drawerMask"
          :mask-closable="drawerMaskClosable"
          :keyboard="drawerKeyboard"
          :width="drawerWidth"
          :height="drawerHeight"
          @close="drawerVisible = false"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </a-drawer>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 抽屉">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="drawerVisibleE">
          <a-radio-button :value="true">打开抽屉</a-radio-button>
          <a-radio-button :value="false">关闭抽屉</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="drawerDirectionE">
          <a-radio-button :value="'rtl'">rtl</a-radio-button>
          <a-radio-button :value="'ltr'">ltr</a-radio-button>
          <a-radio-button :value="'ttb'">ttb</a-radio-button>
          <a-radio-button :value="'btt'">btt</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="drawerWithHeaderE">
          <a-radio-button :value="true">显示标题</a-radio-button>
          <a-radio-button :value="false">隐藏标题</a-radio-button>
        </a-radio-group>
        <div v-if="drawerWithHeaderE" class="my-2 mr-5">
          <span style="margin-right: 5px">设置抽屉标题文本</span>
          <a-input style="width: 100px" v-model="drawerTitleE" />
        </div>
        <a-radio-group v-model="drawerShowCloseE">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="drawerModalE">
          <a-radio-button :value="true">显示遮罩层</a-radio-button>
          <a-radio-button :value="false">隐藏遮罩层</a-radio-button>
        </a-radio-group>
        <a-radio-group v-if="drawerModalE" v-model="drawerWrapperClosableE">
          <a-radio-button :value="true">
            开启点击遮罩层关闭抽屉功能
          </a-radio-button>
          <a-radio-button :value="false">
            关闭点击遮罩层关闭抽屉功能
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-if="drawerModalE" v-model="drawerCloseOnPressEscapeE">
          <a-radio-button :value="true">
            开启按ESC键关闭抽屉功能
          </a-radio-button>
          <a-radio-button :value="false">
            关闭按ESC键关闭抽屉功能
          </a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置抽屉大小</span>
          <a-input style="width: 100px" v-model="drawerSizeE" />
        </div>
      </div>
      <div>
        <el-drawer
          :visible.sync="drawerVisibleE"
          :direction="drawerDirectionE"
          :with-header="drawerWithHeaderE"
          :title="drawerTitleE"
          :show-close="drawerShowCloseE"
          :modal="drawerModalE"
          :wrapper-closable="drawerWrapperClosableE"
          :close-on-press-escape="drawerCloseOnPressEscapeE"
          :size="drawerSizeE"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </el-drawer>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 抽屉">
      <div class="text-red-500">AtUI框架没有抽屉</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 抽屉">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="drawerVisibleV">
          <a-radio-button :value="true">打开抽屉</a-radio-button>
          <a-radio-button :value="false">关闭抽屉</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="drawerPlacementV">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置抽屉标题文本</span>
          <a-input style="width: 100px" v-model="drawerTitleV" />
        </div>
        <a-radio-group v-model="drawerClosableV">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="drawerMaskV">
          <a-radio-button :value="true">显示遮罩层</a-radio-button>
          <a-radio-button :value="false">隐藏遮罩层</a-radio-button>
        </a-radio-group>
        <a-radio-group v-if="drawerMaskV" v-model="drawerMaskClosableV">
          <a-radio-button :value="true">
            开启点击遮罩层关闭抽屉功能
          </a-radio-button>
          <a-radio-button :value="false">
            关闭点击遮罩层关闭抽屉功能
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="drawerDraggableV">
          <a-radio-button :value="true">开启拖拽调整宽度</a-radio-button>
          <a-radio-button :value="false">关闭拖拽调整宽度</a-radio-button>
        </a-radio-group>
        <div
          v-if="drawerPlacementV === 'left' || drawerPlacementV === 'right'"
          class="my-2 mr-5"
        >
          <span style="margin-right: 5px">设置抽屉宽度</span>
          <a-input-number style="width: 100px" v-model="drawerWidthV" />
        </div>
        <div
          v-if="drawerPlacementV === 'top' || drawerPlacementV === 'bottom'"
          class="my-2 mr-5"
        >
          <span style="margin-right: 5px">设置抽屉高度</span>
          <a-input-number style="width: 100px" v-model="drawerHeightV" />
        </div>
      </div>
      <div>
        <Drawer
          v-model="drawerVisibleV"
          :placement="drawerPlacementV"
          :title="drawerTitleV"
          :closable="drawerClosableV"
          :mask="drawerMaskV"
          :mask-closable="drawerMaskClosableV"
          :draggable="drawerDraggableV"
          :width="drawerWidthV"
          :height="drawerHeightV"
        >
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
          <p>抽屉内容...</p>
        </Drawer>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      drawerVisible: false,
      drawerPlacement: "right",
      drawerTitle: "抽屉标题",
      drawerClosable: true,
      drawerMask: true,
      drawerMaskClosable: true,
      drawerKeyboard: true,
      drawerWidth: 256,
      drawerHeight: 256,
      // ElementUI
      drawerVisibleE: false,
      drawerDirectionE: "rtl",
      drawerWithHeaderE: false,
      drawerTitleE: "抽屉标题",
      drawerShowCloseE: true,
      drawerModalE: true,
      drawerWrapperClosableE: true,
      drawerCloseOnPressEscapeE: true,
      drawerSizeE: "30%",
      // ViewUI
      drawerVisibleV: false,
      drawerPlacementV: "right",
      drawerTitleV: "抽屉标题",
      drawerClosableV: true,
      drawerMaskV: true,
      drawerMaskClosableV: true,
      drawerDraggableV: false,
      drawerWidthV: 256,
      drawerHeightV: 256,
    };
  },
  methods: {},
};
</script>