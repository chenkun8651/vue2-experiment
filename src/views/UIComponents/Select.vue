<template>
  <!-- 选择框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 选择框">
      <!-- 通用API -->
      <div class="card-item">
        <h3>通用API</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.selectDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.selectAllowClear">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.selectShowSearch">
            <a-radio-button :value="true">开启搜索</a-radio-button>
            <a-radio-button :value="false">关闭搜索</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.selectSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <!-- 标准选择框 -->
      <div class="card-item">
        <h3>标准选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.selectMode">
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'multiple'">multiple</a-radio-button>
            <a-radio-button :value="'tags'">tags</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.selectShowArrow">
            <a-radio-button :value="true">显示下拉小箭头</a-radio-button>
            <a-radio-button :value="false">不显示下拉小箭头</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.selectDefaultActiveFirstOption">
            <a-radio-button :value="true">开启默认高亮第一项</a-radio-button>
            <a-radio-button :value="false">关闭默认高亮第一项</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.selectDropdownMatchSelectWidth">
            <a-radio-button :value="true">开启选项和菜单同宽</a-radio-button>
            <a-radio-button :value="false">关闭选项和菜单同宽</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置最多显示tag数</span>
            <a-input-number
              style="width: 100px"
              v-model="AntDesignVue.selectMaxTagCount"
              :min="0"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置最大显示tag的文本长度</span>
            <a-input-number
              style="width: 100px"
              v-model="AntDesignVue.selectMaxTagTextLength"
              :min="0"
            />
          </div>
        </div>
        <div>
          <a-select
            :disabled="AntDesignVue.selectDisabled"
            :allow-clear="AntDesignVue.selectAllowClear"
            :show-search="AntDesignVue.selectShowSearch"
            :size="AntDesignVue.selectSize"
            v-model="AntDesignVue.selectValue"
            style="width: 200px"
            :mode="AntDesignVue.selectMode"
            :show-arrow="AntDesignVue.selectShowArrow"
            :default-active-first-option="
              AntDesignVue.selectDefaultActiveFirstOption
            "
            :dropdown-match-select-width="
              AntDesignVue.selectDropdownMatchSelectWidth
            "
            :max-tag-count="AntDesignVue.selectMaxTagCount"
            :max-tag-text-length="AntDesignVue.selectMaxTagTextLength"
          >
            <a-select-option
              v-for="(item, index) in selectOptions"
              :key="index"
              :value="item.value"
            >
              {{ item.label }}
            </a-select-option>
          </a-select>
        </div>
      </div>
      <!-- 级联选择框 -->
      <div class="card-item">
        <h3>级联选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.cascaderExpandTrigger">
            <a-radio-button :value="'click'">click</a-radio-button>
            <a-radio-button :value="'hover'">hover</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-cascader
            :disabled="AntDesignVue.selectDisabled"
            :allow-clear="AntDesignVue.selectAllowClear"
            :show-search="AntDesignVue.selectShowSearch"
            :size="AntDesignVue.selectSize"
            v-model="AntDesignVue.cascaderValue"
            style="width: 200px"
            :options="cascaderOptions"
            :expand-trigger="AntDesignVue.cascaderExpandTrigger"
          >
          </a-cascader>
        </div>
      </div>
      <!-- 树状选择框 -->
      <div class="card-item">
        <h3>树状选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.treeSelectTreeCheckable">
            <a-radio-button :value="true">开启多选</a-radio-button>
            <a-radio-button :value="false">关闭多选</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-tree-select
            :disabled="AntDesignVue.selectDisabled"
            :allow-clear="AntDesignVue.selectAllowClear"
            :show-search="AntDesignVue.selectShowSearch"
            :size="AntDesignVue.selectSize"
            v-model="AntDesignVue.treeSelectValue"
            style="width: 200px"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            :tree-data="treeSelectOptions"
            :tree-checkable="AntDesignVue.treeSelectTreeCheckable"
          >
          </a-tree-select>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 选择框">
      <!-- 通用API -->
      <div class="card-item">
        <h3>通用API</h3>
        <div class="radio-box">
          <a-radio-group v-model="ElementUI.selectDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.selectClearable">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.selectSize">
            <a-radio-button :value="'medium'">medium</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
            <a-radio-button :value="'mini'">mini</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <!-- 标准选择框 -->
      <div class="card-item">
        <h3>标准选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ElementUI.selectFilterable">
            <a-radio-button :value="true">开启搜索</a-radio-button>
            <a-radio-button :value="false">关闭搜索</a-radio-button>
          </a-radio-group>
          <a-radio-group
            v-model="ElementUI.selectMultiple"
            @change="ChangeElementUISelect"
          >
            <a-radio-button :value="true">开启多选</a-radio-button>
            <a-radio-button :value="false">关闭多选</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置最多可以选择的项目数</span>
            <a-input-number
              style="width: 100px"
              v-model="ElementUI.selectMultipleLimit"
              :min="0"
            />
          </div>
        </div>
        <div>
          <el-select
            :disabled="ElementUI.selectDisabled"
            :clearable="ElementUI.selectClearable"
            :filterable="ElementUI.selectFilterable"
            :size="ElementUI.selectSize"
            v-model="ElementUI.selectValue"
            style="width: 200px"
            :multiple="ElementUI.selectMultiple"
            :multiple-limit="ElementUI.selectMultipleLimit"
          >
            <el-option
              v-for="(item, index) in selectOptions"
              :key="index"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- 级联选择框 -->
      <div class="card-item">
        <h3>级联选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ElementUI.cascaderShowAllLevels">
            <a-radio-button :value="true">显示选中值的完整路径</a-radio-button>
            <a-radio-button :value="false">隐藏选中值的完整路径</a-radio-button>
          </a-radio-group>
          <div class="string-set">
            <span style="margin-right: 5px">设置选项分隔符</span>
            <a-input
              style="width: 100px"
              v-model="ElementUI.cascaderSeparator"
            />
          </div>
        </div>
        <div>
          <el-cascader
            :disabled="ElementUI.selectDisabled"
            :clearable="ElementUI.selectClearable"
            :filterable="ElementUI.selectFilterable"
            :size="ElementUI.selectSize"
            style="width: 200px"
            v-model="ElementUI.cascaderValue"
            :options="cascaderOptions"
            :show-all-levels="ElementUI.cascaderShowAllLevels"
            :separator="ElementUI.cascaderSeparator"
          >
          </el-cascader>
        </div>
      </div>
      <!-- 树状选择框 -->
      <div class="card-item">
        <div class="c-f5222d">ElementUI框架没有树状选择框</div>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 选择框">
      <!-- 标准选择框 -->
      <div class="card-item">
        <h3>标准选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AtUI.selectDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.selectClearable">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.selectFilterable">
            <a-radio-button :value="true">开启搜索</a-radio-button>
            <a-radio-button :value="false">关闭搜索</a-radio-button>
          </a-radio-group>
          <a-radio-group
            v-model="AtUI.selectMultiple"
            @change="ChangeAtUISelect"
          >
            <a-radio-button :value="true">开启多选</a-radio-button>
            <a-radio-button :value="false">关闭多选</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.selectSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'normal'">normal</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.selectPlacement">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <at-select
            style="width: 200px"
            v-model="AtUI.selectValue"
            :disabled="AtUI.selectDisabled"
            :clearable="AtUI.selectClearable"
            :filterable="AtUI.selectFilterable"
            :multiple="AtUI.selectMultiple"
            :size="AtUI.selectSize"
            :placement="AtUI.selectPlacement"
          >
            <at-option
              v-for="(item, index) in selectOptions"
              :key="index"
              :value="item.value"
            >
              {{ item.label }}
            </at-option>
          </at-select>
        </div>
      </div>
      <!-- 级联选择框 -->
      <div class="card-item">
        <div class="c-f5222d">AtUI框架没有级联选择框</div>
      </div>
      <!-- 树状选择框 -->
      <div class="card-item">
        <div class="c-f5222d">AtUI框架没有树状选择框</div>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 选择框">
      <!-- 通用API -->
      <div class="card-item">
        <h3>通用API</h3>
        <div class="radio-box">
          <a-radio-group v-model="ViewUI.selectDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.selectClearable">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.selectFilterable">
            <a-radio-button :value="true">开启搜索</a-radio-button>
            <a-radio-button :value="false">关闭搜索</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.selectSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <!-- 标准选择框 -->
      <div class="card-item">
        <h3>标准选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ViewUI.selectMultiple">
            <a-radio-button :value="true">开启多选</a-radio-button>
            <a-radio-button :value="false">关闭多选</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.selectPlacement">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <Select
            :disabled="ViewUI.selectDisabled"
            :clearable="ViewUI.selectClearable"
            :filterable="ViewUI.selectFilterable"
            :size="ViewUI.selectSize"
            style="width: 200px"
            v-model="ViewUI.selectValue"
            :multiple="ViewUI.selectMultiple"
            :placement="ViewUI.selectPlacement"
          >
            <Option
              v-for="(item, index) in selectOptions"
              :key="index"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <!-- 级联选择框 -->
      <div class="card-item">
        <h3>级联选择框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ViewUI.cascaderTrigger">
            <a-radio-button :value="'click'">click</a-radio-button>
            <a-radio-button :value="'hover'">hover</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <Cascader
            :disabled="ViewUI.selectDisabled"
            :clearable="ViewUI.selectClearable"
            :filterable="ViewUI.selectFilterable"
            :size="ViewUI.selectSize"
            style="width: 200px"
            v-model="ViewUI.cascaderValue"
            :data="cascaderOptions"
            :trigger="ViewUI.cascaderTrigger"
          >
          </Cascader>
        </div>
      </div>
      <!-- 树状选择框 -->
      <div class="card-item">
        <div class="c-faad14">ViewUI框架的树状选择框需要付费使用</div>
      </div>
    </a-card>
  </div>
</template>

<script>
const selectOptions = [
  {
    value: "sichuan",
    label: "四川",
  },
  {
    value: "jiangsu",
    label: "江苏",
  },
];
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
    key: "1",
    value: "sichuan",
    title: "四川",
    children: [
      {
        key: "1-1",
        title: "成都",
        value: "chengdu",
      },
      {
        key: "1-2",
        title: "绵阳",
        value: "mianyang",
      },
    ],
  },
  {
    key: "2",
    value: "jiangsu",
    title: "江苏",
  },
];
export default {
  data() {
    return {
      selectOptions: selectOptions,
      cascaderOptions: cascaderOptions,
      treeSelectOptions: treeSelectOptions,
      AntDesignVue: {
        selectDisabled: false,
        selectAllowClear: false,
        selectShowSearch: false,
        selectSize: "default",
        selectValue: null,
        selectMode: "default",
        selectShowArrow: true,
        selectDefaultActiveFirstOption: true,
        selectDropdownMatchSelectWidth: true,
        selectMaxTagCount: 5,
        selectMaxTagTextLength: 5,
        cascaderValue: null,
        cascaderExpandTrigger: "hover",
        treeSelectValue: null,
        treeSelectTreeCheckable: false,
      },
      ElementUI: {
        selectDisabled: false,
        selectClearable: false,
        selectFilterable: false,
        selectSize: "medium",
        selectValue: null,
        selectMultiple: false,
        selectMultipleLimit: 5,
        cascaderValue: null,
        cascaderShowAllLevels: true,
        cascaderSeparator: "/",
      },
      AtUI: {
        selectValue: null,
        selectDisabled: false,
        selectClearable: false,
        selectFilterable: false,
        selectMultiple: false,
        selectSize: "normal",
        selectPlacement: "bottom",
      },
      ViewUI: {
        selectDisabled: false,
        selectClearable: false,
        selectFilterable: false,
        selectSize: "default",
        selectValue: null,
        selectMultiple: false,
        selectPlacement: "bottom",
        cascaderValue: [],
        cascaderTrigger: "click",
      },
    };
  },
  methods: {
    ChangeElementUISelect() {
      if (this.ElementUI.selectMultiple) {
        this.ElementUI.selectValue = [];
      } else {
        this.ElementUI.selectValue = null;
      }
    },
    ChangeAtUISelect() {
      if (this.AtUI.selectMultiple) {
        this.AtUI.selectValue = [];
      } else {
        this.AtUI.selectValue = null;
      }
    },
  },
};
</script>