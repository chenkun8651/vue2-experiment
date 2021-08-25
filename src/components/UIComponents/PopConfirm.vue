<template>
  <!-- 弹出确认框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 弹出确认框">
      <div class="radio-box">
        <a-radio-group v-model="popconfirmDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="popconfirmPlacement">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置弹出框标题（内容）文本</span>
          <a-input style="width: 200px" v-model="popconfirmTitle" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置确定按钮文本</span>
          <a-input style="width: 100px" v-model="popconfirmOkText" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置取消按钮文本</span>
          <a-input style="width: 100px" v-model="popconfirmCancelText" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置图标（插槽）</span>
          <a-input style="width: 200px" v-model="popconfirmIcon" />
        </div>
      </div>
      <div>
        <a-popconfirm
          :disabled="popconfirmDisabled"
          :placement="popconfirmPlacement"
          :title="popconfirmTitle"
          :ok-text="popconfirmOkText"
          :cancel-text="popconfirmCancelText"
        >
          <a-icon slot="icon" :type="popconfirmIcon" />
          <a-button>气泡确认框</a-button>
        </a-popconfirm>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 弹出确认框">
      <div class="radio-box">
        <div class="string-set">
          <span style="margin-right: 5px">设置弹出框标题（内容）文本</span>
          <a-input style="width: 200px" v-model="popconfirmTitleE" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置确定按钮文本</span>
          <a-input
            style="width: 100px"
            v-model="popconfirmConfirmButtonTextE"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置确定按钮类型</span>
          <a-input
            style="width: 100px"
            v-model="popconfirmConfirmButtonTypeE"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置取消按钮文本</span>
          <a-input style="width: 100px" v-model="popconfirmCancelButtonTextE" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置取消按钮类型</span>
          <a-input style="width: 100px" v-model="popconfirmCancelButtonTypeE" />
        </div>
        <a-radio-group v-model="popconfirmHideIconE">
          <a-radio-button :value="true">隐藏图标</a-radio-button>
          <a-radio-button :value="false">显示图标</a-radio-button>
        </a-radio-group>
        <div v-show="!popconfirmHideIconE" class="string-set">
          <span style="margin-right: 5px">设置图标</span>
          <a-input style="width: 200px" v-model="popconfirmIconE" />
        </div>
        <div v-show="!popconfirmHideIconE" class="string-set">
          <span style="margin-right: 5px">设置图标颜色</span>
          <a-input style="width: 200px" v-model="popconfirmIconColorE" />
        </div>
      </div>
      <div>
        <el-popconfirm
          :title="popconfirmTitleE"
          :confirm-button-text="popconfirmConfirmButtonTextE"
          :confirm-button-type="popconfirmConfirmButtonTypeE"
          :cancel-button-text="popconfirmCancelButtonTextE"
          :cancel-button-type="popconfirmCancelButtonTypeE"
          :hide-icon="popconfirmHideIconE"
          :icon="popconfirmIconE"
          :icon-color="popconfirmIconColorE"
        >
          <el-button slot="reference">气泡确认框</el-button>
        </el-popconfirm>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 弹出确认框">
      <div class="c-f5222d">AtUI框架没有弹出确认框</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 弹出确认框">
      <div class="c-f5222d">ViewUI框架没有弹出确认框</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      popconfirmDisabled: false,
      popconfirmPlacement: "top",
      popconfirmTitle: "弹出确认框标题（内容）",
      popconfirmOkText: "确定",
      popconfirmCancelText: "取消",
      popconfirmIcon: "question-circle-o",
      // ElementUI
      popconfirmTitleE: "弹出确认框标题（内容）",
      popconfirmConfirmButtonTextE: "确定",
      popconfirmConfirmButtonTypeE: "primary",
      popconfirmCancelButtonTextE: "取消",
      popconfirmCancelButtonTypeE: "text",
      popconfirmHideIconE: false,
      popconfirmIconE: "el-icon-question",
      popconfirmIconColorE: "#f90",
    };
  },
  methods: {},
};
</script>