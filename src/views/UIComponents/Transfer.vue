<template>
  <!-- 穿梭框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 穿梭框">
      <div class="control-box">
        <a-radio-group v-model="transferDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="transferShowSearch">
          <a-radio-button :value="true">开启搜索框</a-radio-button>
          <a-radio-button :value="false">关闭搜索框</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-transfer
          :titles="['待完成', '已完成']"
          :selected-keys="['1', '4']"
          :render="(item) => item.title"
          :data-source="transferDataSource"
          :target-keys="transferTargetKeys"
          :disabled="transferDisabled"
          :show-search="transferShowSearch"
          @change="transferChange"
          @selectChange="transferSelectChange"
        >
        </a-transfer>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 穿梭框">
      <div class="control-box">
        <a-radio-group v-model="transferFilterableE">
          <a-radio-button :value="true">开启搜索框</a-radio-button>
          <a-radio-button :value="false">关闭搜索框</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-transfer
          :titles="['待完成', '已完成']"
          :button-texts="['右', '左']"
          :filter-placeholder="'搜索框'"
          :data="transferDataSource"
          :filterable="transferFilterableE"
        >
        </el-transfer>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 穿梭框">
      <div class="c-f5222d">AtUI框架没有穿梭框</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 穿梭框">
      <div class="control-box">
        <a-radio-group v-model="transferReverseOperationV">
          <a-radio-button :value="false">正常按钮顺序</a-radio-button>
          <a-radio-button :value="true">反正按钮顺序</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="transferFilterableV">
          <a-radio-button :value="true">开启搜索框</a-radio-button>
          <a-radio-button :value="false">关闭搜索框</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置列表为空的提示文本</span>
          <a-input style="width: 100px" v-model="transferNotFoundTextV" />
        </div>
      </div>
      <div>
        <Transfer
          :titles="['待完成', '已完成']"
          :operations="['右', '左']"
          :filter-placeholder="'搜索框'"
          :data="transferDataSource"
          :reverse-operation="transferReverseOperationV"
          :filterable="transferFilterableV"
          :not-found-text="transferNotFoundTextV"
        >
        </Transfer>
      </div>
    </a-card>
  </div>
</template>

<script>
const transferDataSource = [];
for (let i = 0; i < 20; i++) {
  transferDataSource.push({
    key: i.toString(),
    title: `内容${i + 1}`,
    label: `内容 ${i + 1}`,
    description: `描述内容${i + 1}`,
    disabled: i % 3 < 1,
  });
}
const transferTargetKeys = transferDataSource
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);
export default {
  data() {
    return {
      transferDataSource: transferDataSource,
      // AntDesignVue
      transferTargetKeys: transferTargetKeys,
      transferDisabled: false,
      transferShowSearch: false,
      // ElementUI
      transferDisabledE: false,
      transferFilterableE: false,
      // ViewUI
      transferReverseOperationV: false,
      transferFilterableV: false,
      transferNotFoundTextV: "列表为空",
    };
  },
  methods: {
    // 穿梭框-选中选项
    transferSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.transferSelectedKeys = [
        ...sourceSelectedKeys,
        ...targetSelectedKeys,
      ];
    },
    // 穿梭框-改变选项
    transferChange(nextTargetKeys) {
      this.transferTargetKeys = nextTargetKeys;
    },
  },
};
</script>