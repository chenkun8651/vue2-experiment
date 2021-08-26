<template>
  <!-- 选择框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 选择框">
      <!-- 标准选择框 -->
      <div class="card-item">
        <h3>标准选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="selectMode">
            <a-radio-button :value="'default'">默认模式</a-radio-button>
            <a-radio-button :value="'multiple'">多选模式</a-radio-button>
            <a-radio-button :value="'tags'">标签模式</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="selectSize">
            <a-radio-button :value="'large'">大选择框</a-radio-button>
            <a-radio-button :value="'default'">默认选择框</a-radio-button>
            <a-radio-button :value="'small'">小选择框</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="selectDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="selectAllowClear">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="selectShowArrow">
            <a-radio-button :value="true">显示下拉小箭头</a-radio-button>
            <a-radio-button :value="false">不显示下拉小箭头</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="selectDefaultActiveFirstOption">
            <a-radio-button :value="true">
              开启默认高亮第一个选项
            </a-radio-button>
            <a-radio-button :value="false">
              关闭默认高亮第一个选项
            </a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="selectDropdownMatchSelectWidth">
            <a-radio-button :value="true">开启选项和菜单同宽</a-radio-button>
            <a-radio-button :value="false">关闭选项和菜单同宽</a-radio-button>
          </a-radio-group>
          <a-radio-group
            v-if="selectMode === 'default'"
            v-model="selectShowSearch"
          >
            <a-radio-button :value="true">开启单选模式可搜索</a-radio-button>
            <a-radio-button :value="false">关闭单选模式可搜索</a-radio-button>
          </a-radio-group>
          <a-radio-group
            v-if="selectMode === 'multiple' || selectMode === 'tags'"
            v-model="selectAutoClearSearchValue"
          >
            <a-radio-button :value="true">
              开启选中项后清空搜索框
            </a-radio-button>
            <a-radio-button :value="false">
              关闭选中项后清空搜索框
            </a-radio-button>
          </a-radio-group>
          <div
            v-if="selectMode === 'multiple' || selectMode === 'tags'"
            class="number-set"
          >
            <span style="margin-right: 5px">设置最多显示tag数</span>
            <a-input-number
              style="width: 100px"
              v-model="selectMaxTagCount"
              :min="0"
            />
          </div>
          <div
            v-if="selectMode === 'multiple' || selectMode === 'tags'"
            class="number-set"
          >
            <span style="margin-right: 5px">设置最大显示tag的文本长度</span>
            <a-input-number
              style="width: 100px"
              v-model="selectMaxTagTextLength"
              :min="0"
            />
          </div>
        </div>
        <div>
          <a-select
            style="width: 200px"
            :auto-focus="false"
            :default-value="'1'"
            :mode="selectMode"
            :size="selectSize"
            :disabled="selectDisabled"
            :allow-clear="selectAllowClear"
            :show-arrow="selectShowArrow"
            :default-active-first-option="selectDefaultActiveFirstOption"
            :auto-clear-search-value="selectAutoClearSearchValue"
            :show-search="selectShowSearch"
            :dropdown-match-select-width="selectDropdownMatchSelectWidth"
            :max-tag-count="selectMaxTagCount"
            :max-tag-text-length="selectMaxTagTextLength"
          >
            <a-select-option :value="'1'">选项一</a-select-option>
            <a-select-option :value="'2'">选项二</a-select-option>
            <a-select-option :value="'3'">选项三</a-select-option>
            <a-select-option :value="'4'">选项四</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- 级联选择框 -->
      <div class="card-item">
        <h3>级联选择框（部分属性继承标准选择框）</h3>
        <div class="radio-box">
          <a-radio-group v-model="cascaderExpandTrigger">
            <a-radio-button :value="'click'">点击触发展开</a-radio-button>
            <a-radio-button :value="'hover'">悬停触发展开</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="cascaderShowSearch">
            <a-radio-button :value="true">开启搜索框</a-radio-button>
            <a-radio-button :value="false">关闭搜索框</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-cascader
            style="width: 200px"
            placeholder="请选择一个旅游景点"
            :auto-focus="false"
            :size="selectSize"
            :disabled="selectDisabled"
            :allow-clear="selectAllowClear"
            :options="cascaderOptions"
            :expand-trigger="cascaderExpandTrigger"
            :show-search="cascaderShowSearch"
          >
          </a-cascader>
        </div>
      </div>
      <!-- 树状选择框 -->
      <div class="card-item">
        <h3 class="title2-xy">树状选择框（部分属性继承标准选择框）</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="treeSelectShowSearch">
              <a-radio-button :value="true">开启搜索框</a-radio-button>
              <a-radio-button :value="false">关闭搜索框</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="treeSelectTreeCheckable">
              <a-radio-button :value="true">开启多选框</a-radio-button>
              <a-radio-button :value="false">关闭多选框</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-tree-select
              style="width: 200px"
              placeholder="请选择一种食物"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :size="selectSize"
              :disabled="selectDisabled"
              :allow-clear="selectAllowClear"
              :tree-data="treeSelectOptions"
              :show-search="treeSelectShowSearch"
              :tree-checkable="treeSelectTreeCheckable"
            >
            </a-tree-select>
          </div>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 选择框"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 选择框"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 选择框"></a-card>
  </div>
</template>

<script>
const cascaderOptions = [
  {
    value: "sichuan",
    label: "四川",
    children: [
      {
        value: "chengdu",
        label: "成都",
        children: [
          {
            value: "wuhouci",
            label: "武侯祠",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "江苏",
    children: [
      {
        value: "nanjing",
        label: "南京",
        children: [
          {
            value: "zhonghuamen",
            label: "中华门",
          },
        ],
      },
    ],
  },
];
const treeSelectOptions = [
  {
    title: "肉类",
    value: "1",
    key: "1",
    children: [
      {
        title: "鸡肉",
        value: "1-1",
        key: "1-1",
      },
      {
        title: "鸭肉",
        value: "1-2",
        key: "1-2",
      },
    ],
  },
  {
    title: "蔬菜类",
    value: "2",
    key: "2",
  },
];
export default {
  data() {
    return {
      // AntDesignVue
      selectMode: "default",
      selectSize: "default",
      selectDisabled: false,
      selectAllowClear: true,
      selectShowArrow: true,
      selectDefaultActiveFirstOption: true,
      selectAutoClearSearchValue: true,
      selectShowSearch: false,
      selectDropdownMatchSelectWidth: true,
      selectMaxTagCount: 5,
      selectMaxTagTextLength: 3,
      cascaderOptions: cascaderOptions,
      cascaderExpandTrigger: "click",
      cascaderShowSearch: false,
      treeSelectOptions: treeSelectOptions,
      treeSelectShowSearch: true,
      treeSelectTreeCheckable: false,
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>