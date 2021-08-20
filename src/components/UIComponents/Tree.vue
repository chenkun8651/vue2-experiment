<template>
  <!-- 树形控件组件 -->
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
          :selectable="true"
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
        <a-radio-group v-model="treeHighlightCurrentE">
          <a-radio-button :value="true">显示当前节点高亮</a-radio-button>
          <a-radio-button :value="false">隐藏当前节点高亮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="treeShowCheckboxE">
          <a-radio-button :value="true">开启节点复选功能</a-radio-button>
          <a-radio-button :value="false">关闭节点复选功能</a-radio-button>
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
    <a-card class="card-margin" title="AtUI 时间轴">
      <div class="radio-box">
        <a-radio-group v-model="timelinePendingA">
          <a-radio-button :value="true">开启幽灵节点</a-radio-button>
          <a-radio-button :value="false">关闭幽灵节点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineColorA">
          <a-radio-button :value="'blue'">blue</a-radio-button>
          <a-radio-button :value="'red'">red</a-radio-button>
          <a-radio-button :value="'green'">green</a-radio-button>
          <a-radio-button :value="'yellow'">yellow</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-timeline :pending="timelinePendingA">
          <at-timeline-item
            v-for="(item, index) in timeline"
            :key="index"
            :color="timelineColorA"
          >
            {{ item.content }} {{ item.timestamp }}
          </at-timeline-item>
        </at-timeline>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 时间轴">
      <div class="radio-box">
        <a-radio-group v-model="timelinePendingV">
          <a-radio-button :value="true">开启幽灵节点</a-radio-button>
          <a-radio-button :value="false">关闭幽灵节点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineColorV">
          <a-radio-button :value="'blue'">blue</a-radio-button>
          <a-radio-button :value="'red'">red</a-radio-button>
          <a-radio-button :value="'green'">green</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Timeline :pending="timelinePendingV">
          <TimelineItem
            v-for="(item, index) in timeline"
            :key="index"
            :color="timelineColorV"
          >
            {{ item.content }} {{ item.timestamp }}
          </TimelineItem>
        </Timeline>
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
    label: "肉类",
    key: "vegetables",
    title: "蔬菜",
  },
];
const timeline = [
  {
    content: "创建网络服务",
    timestamp: "2018-04-15",
  },
  {
    content: "解决网络波动问题",
    timestamp: "2018-04-13",
  },
  {
    content: "技术测试",
    timestamp: "2018-04-11",
  },
  {
    content: "网络问题已解决",
    timestamp: "2018-04-09",
  },
];
export default {
  data() {
    return {
      timeline: timeline,
      treeTreeData: treeTreeData,
      // AntDesignVue
      treeDisabled: false,
      treeShowLine: true,
      treeCheckable: true,
      treeBlockNode: true,
      treeAutoExpandParent: true,
      // ElementUI
      treeHighlightCurrentE: true,
      treeShowCheckboxE: true,
      // AtUI
      timelinePendingA: false,
      timelineColorA: "blue",
      // ViewUI
      timelinePendingV: false,
      timelineColorV: "blue",
    };
  },
  methods: {},
};
</script>