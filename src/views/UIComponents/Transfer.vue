<template>
  <div class="flex" ref="box">
    <!-- 穿梭框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 穿梭框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启搜索框</span>
            <a-switch v-model="AntDesignVue.showSearch" />
          </div>
        </div>
        <div>
          <a-transfer
            :titles="['待完成', '已完成']"
            :selected-keys="['1', '4']"
            :render="(item) => item.title"
            :data-source="transferDataSource"
            :disabled="AntDesignVue.disabled"
            :show-search="AntDesignVue.showSearch"
            :target-keys="AntDesignVue.targetKeys"
            @change="transferChange"
            @selectChange="transferSelectChange"
          >
          </a-transfer>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 穿梭框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启搜索框</span>
            <a-switch v-model="ElementUI.filterable" />
          </div>
        </div>
        <div>
          <el-transfer
            :titles="['待完成', '已完成']"
            :button-texts="['右', '左']"
            :filter-placeholder="'搜索框'"
            :data="transferDataSource"
            :disabled="ElementUI.disabled"
            :filterable="ElementUI.filterable"
          >
          </el-transfer>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 穿梭框">
        <div class="text-red-500">AtUI框架没有穿梭框</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 穿梭框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否反序按钮</span>
            <a-switch v-model="ViewUI.reverseOperation" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启搜索框</span>
            <a-switch v-model="ViewUI.filterable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置列表为空的提示文本</span>
            <a-input class="w-24" v-model="ViewUI.notFoundText" />
          </div>
        </div>
        <div>
          <Transfer
            :titles="['待完成', '已完成']"
            :operations="['右', '左']"
            :filter-placeholder="'搜索框'"
            :data="transferDataSource"
            :reverse-operation="ViewUI.reverseOperation"
            :filterable="ViewUI.filterable"
            :not-found-text="ViewUI.notFoundText"
          >
          </Transfer>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.transferAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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
      AntDesignVue: {
        disabled: false,
        showSearch: false,
        targetKeys: transferTargetKeys,
      },
      ElementUI: {
        disabled: false,
        filterable: false,
      },
      ViewUI: {
        reverseOperation: false,
        filterable: false,
        notFoundText: "穿梭框数据为空",
      },
    };
  },
  methods: {
    // 穿梭框-选中选项
    transferSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.AntDesignVue.targetKeys = [
        ...sourceSelectedKeys,
        ...targetSelectedKeys,
      ];
    },
    // 穿梭框-改变选项
    transferChange(nextTargetKeys) {
      this.AntDesignVue.transferTargetKeys = nextTargetKeys;
    },
  },
};
</script>