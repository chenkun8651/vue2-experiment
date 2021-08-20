<template>
  <!-- 树形控件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 树形控件">
      <div class="radio-box">
        <a-radio-group v-model="treeDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="treeShowLine">
          <a-radio-button :value="true">显示连接线</a-radio-button>
          <a-radio-button :value="false">隐藏连接线</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="treeCheckable">
          <a-radio-button :value="true">开启节点复选功能</a-radio-button>
          <a-radio-button :value="false">关闭节点复选功能</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="treeBlockNode">
          <a-radio-button :value="true">开启节点占据一行</a-radio-button>
          <a-radio-button :value="false">关闭节点占据一行</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="treeAutoExpandParent">
          <a-radio-button :value="true">开启展开父节点</a-radio-button>
          <a-radio-button :value="false">关闭展开父节点</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-tree
          :tree-data="treeTreeData"
          :disabled="treeDisabled"
          :show-line="treeShowLine"
          :checkable="treeCheckable"
          :block-node="treeBlockNode"
          :auto-expand-parent="treeAutoExpandParent"
        >
        </a-tree>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 树形控件">
      <div class="radio-box">
        <a-radio-group v-model="treeShowCheckboxE">
          <a-radio-button :value="true">开启节点复选功能</a-radio-button>
          <a-radio-button :value="false">关闭节点复选功能</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="treeHighlightCurrentE">
          <a-radio-button :value="true">显示当前节点高亮</a-radio-button>
          <a-radio-button :value="false">隐藏当前节点高亮</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-tree
          :data="treeTreeData"
          :highlight-current="treeHighlightCurrentE"
          :show-checkbox="treeShowCheckboxE"
        >
        </el-tree>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 树形控件">
      <div class="c-f5222d">AtUI框架没有树形控件</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 树形控件">
      <div class="radio-box">
        <a-radio-group v-model="treeShowCheckboxV">
          <a-radio-button :value="true">开启节点复选功能</a-radio-button>
          <a-radio-button :value="false">关闭节点复选功能</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="treeExpandNode">
          <a-radio-button :value="true">开启点击标题展开</a-radio-button>
          <a-radio-button :value="false">关闭点击标题展开</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Tree
          :data="treeTreeData"
          :show-checkbox="treeShowCheckboxV"
          :expand-node="treeExpandNode"
        >
        </Tree>
      </div>
    </a-card>
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
      // AntDesignVue
      treeDisabled: false,
      treeShowLine: true,
      treeCheckable: true,
      treeBlockNode: true,
      treeAutoExpandParent: true,
      // ElementUI
      treeShowCheckboxE: true,
      treeHighlightCurrentE: true,
      // ViewUI
      treeShowCheckboxV: true,
      treeExpandNode: true,
    };
  },
  methods: {},
};
</script>