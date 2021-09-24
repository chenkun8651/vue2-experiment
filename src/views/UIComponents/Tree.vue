<template>
  <div class="flex" ref="box">
    <!-- 树形控件 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 树形控件">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示连接线</span>
            <a-switch v-model="AntDesignVue.showLine" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启节点复选功能</span>
            <a-switch v-model="AntDesignVue.checkable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启节点单独占据一行功能</span>
            <a-switch v-model="AntDesignVue.blockNode" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否自动展开父节点</span>
            <a-switch v-model="AntDesignVue.autoExpandParent" />
          </div>
        </div>
        <div>
          <a-tree
            :tree-data="treeTreeData"
            :disabled="AntDesignVue.disabled"
            :show-line="AntDesignVue.showLine"
            :checkable="AntDesignVue.checkable"
            :block-node="AntDesignVue.blockNode"
            :auto-expand-parent="AntDesignVue.autoExpandParent"
          >
          </a-tree>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 树形控件">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启节点复选功能</span>
            <a-switch v-model="ElementUI.showCheckbox" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否高亮显示当前节点</span>
            <a-switch v-model="ElementUI.highlightCurrent" />
          </div>
        </div>
        <div>
          <el-tree
            :data="treeTreeData"
            :show-checkbox="ElementUI.showCheckbox"
            :highlight-current="ElementUI.highlightCurrent"
          >
          </el-tree>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 树形控件">
        <div class="text-red-500">AtUI框架没有树形控件</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 树形控件">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启节点复选功能</span>
            <a-switch v-model="ViewUI.showCheckbox" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启点击标题展开功能</span>
            <a-switch v-model="ViewUI.expandNode" />
          </div>
        </div>
        <div>
          <Tree
            :data="treeTreeData"
            :show-checkbox="ViewUI.showCheckbox"
            :expand-node="ViewUI.expandNode"
          >
          </Tree>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.treeAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
const treeTreeData = [
  {
    id: "fruits",
    label: "水果",
    key: "fruits",
    title: "水果",
    children: [
      {
        id: "grape",
        label: "葡萄",
        key: "grape",
        title: "葡萄",
        children: [
          {
            id: "violetGrape",
            label: "紫葡萄",
            key: "violetGrape",
            title: "紫葡萄",
          },
          {
            id: "greenGrape",
            label: "青葡萄",
            key: "greenGrape",
            title: "青葡萄",
          },
          {
            id: "redGrape",
            label: "红葡萄",
            key: "redGrape",
            title: "红葡萄",
          },
        ],
      },
      {
        id: "apple",
        label: "苹果",
        key: "apple",
        title: "苹果",
        children: [
          { id: "iphone", label: "烂苹果", key: "iphone", title: "烂苹果" },
          {
            id: "greenApple",
            label: "青苹果",
            key: "greenApple",
            title: "青苹果",
          },
          {
            id: "redApple",
            label: "红苹果",
            key: "redApple",
            title: "红苹果",
          },
        ],
      },
      {
        id: "orange",
        label: "橘子",
        key: "orange",
        title: "橘子",
      },
    ],
  },
  {
    id: "meat",
    label: "肉类",
    key: "meat",
    title: "肉类",
    children: [
      { id: "pork", label: "猪肉", key: "pork", title: "猪肉" },
      { id: "beef", label: "牛肉", key: "beef", title: "牛肉" },
      { id: "mutton", label: "羊肉", key: "mutton", title: "羊肉" },
    ],
  },
  {
    id: "vegetables",
    label: "蔬菜",
    key: "vegetables",
    title: "蔬菜",
  },
];
export default {
  data() {
    return {
      treeTreeData: treeTreeData,
      AntDesignVue: {
        disabled: false,
        showLine: false,
        checkable: false,
        blockNode: false,
        autoExpandParent: false,
      },
      ElementUI: {
        showCheckbox: false,
        highlightCurrent: false,
      },
      ViewUI: {
        showCheckbox: false,
        expandNode: false,
      },
    };
  },
  methods: {},
};
</script>