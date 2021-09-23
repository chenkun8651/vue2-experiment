<template>
  <div class="flex" ref="box">
    <!-- 弹出确认框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 弹出确认框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置确认框弹出位置</span>
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
            <span class="mr-2">设置确认框标题（内容）文本</span>
            <a-input class="w-60" v-model="AntDesignVue.title" />
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
            <span class="mr-2">设置图标（插槽）</span>
            <a-input class="w-60" v-model="AntDesignVue.type" />
          </div>
        </div>
        <div>
          <a-popconfirm
            :disabled="AntDesignVue.disabled"
            :placement="AntDesignVue.placement"
            :title="AntDesignVue.title"
            :ok-text="AntDesignVue.okText"
            :cancel-text="AntDesignVue.cancelText"
          >
            <a-icon slot="icon" :type="AntDesignVue.type" />
            <a-button>气泡确认框</a-button>
          </a-popconfirm>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 弹出确认框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否隐藏图标</span>
            <a-switch v-model="ElementUI.hideIcon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置确认框标题（内容）文本</span>
            <a-input class="w-60" v-model="ElementUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置确定按钮文本</span>
            <a-input class="w-24" v-model="ElementUI.confirmButtonText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置确定按钮类型</span>
            <a-input class="w-24" v-model="ElementUI.confirmButtonType" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置取消按钮文本</span>
            <a-input class="w-24" v-model="ElementUI.cancelButtonText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置取消按钮类型</span>
            <a-input class="w-24" v-model="ElementUI.cancelButtonType" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置图标</span>
            <a-input class="w-60" v-model="ElementUI.icon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置图标颜色</span>
            <a-input class="w-60" v-model="ElementUI.iconColor" />
          </div>
        </div>
        <div>
          <el-popconfirm
            :hide-icon="ElementUI.hideIcon"
            :title="ElementUI.title"
            :confirm-button-text="ElementUI.confirmButtonText"
            :confirm-button-type="ElementUI.confirmButtonType"
            :cancel-button-text="ElementUI.cancelButtonText"
            :cancel-button-type="ElementUI.cancelButtonType"
            :icon="ElementUI.icon"
            :icon-color="ElementUI.iconColor"
          >
            <el-button slot="reference">气泡确认框</el-button>
          </el-popconfirm>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 弹出确认框">
        <div class="text-red-500">AtUI框架没有弹出确认框</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 弹出确认框">
        <div class="text-red-500">ViewUI框架没有弹出确认框</div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.popConfirmAnchor"
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
        disabled: false,
        placement: "top",
        title: "弹出确认框标题（内容）",
        okText: "确定",
        cancelText: "取消",
        type: "question-circle-o",
      },
      ElementUI: {
        hideIcon: false,
        title: "弹出确认框标题（内容）",
        confirmButtonText: "确定",
        confirmButtonType: "primary",
        cancelButtonText: "取消",
        cancelButtonType: "text",
        icon: "el-icon-question",
        iconColor: "#f90",
      },
    };
  },
  methods: {},
};
</script>