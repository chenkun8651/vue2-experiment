<template>
  <div class="flex" ref="box">
    <!-- 选择框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 选择框">
        <!-- 通用API -->
        <div id="1-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用</span>
              <a-switch v-model="AntDesignVue.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启清除</span>
              <a-switch v-model="AntDesignVue.allowClear" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启搜索</span>
              <a-switch v-model="AntDesignVue.showSearch" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选择框大小</span>
              <el-select size="small" class="w-36" v-model="AntDesignVue.size">
                <el-option :value="'default'">default</el-option>
                <el-option :value="'large'">large</el-option>
                <el-option :value="'small'">small</el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- 标准选择框 -->
        <div id="1-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示下拉小箭头</span>
              <a-switch v-model="AntDesignVue.showArrow" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启默认高亮第一项</span>
              <a-switch v-model="AntDesignVue.defaultActiveFirstOption" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启选项和菜单同宽</span>
              <a-switch v-model="AntDesignVue.dropdownMatchSelectWidth" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选择框大小</span>
              <el-select size="small" class="w-36" v-model="AntDesignVue.mode">
                <el-option :value="'default'">default</el-option>
                <el-option :value="'multiple'">multiple</el-option>
                <el-option :value="'tags'">tags</el-option>
              </el-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最多显示tag数</span>
              <a-input-number class="w-24" v-model="AntDesignVue.maxTagCount" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大显示tag的文本长度</span>
              <a-input-number
                class="w-24"
                v-model="AntDesignVue.maxTagTextLength"
              />
            </div>
          </div>
          <div>
            <el-select
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :show-search="AntDesignVue.showSearch"
              :size="AntDesignVue.size"
              class="w-60"
              v-model="AntDesignVue.selectValue"
              :show-arrow="AntDesignVue.showArrow"
              :default-active-first-option="
                AntDesignVue.defaultActiveFirstOption
              "
              :dropdown-match-select-width="
                AntDesignVue.dropdownMatchSelectWidth
              "
              :mode="AntDesignVue.mode"
              :max-tag-count="AntDesignVue.maxTagCount"
              :max-tag-text-length="AntDesignVue.maxTagTextLength"
            >
              <el-option
                v-for="(item, index) in selectOptions"
                :key="index"
                :value="item.value"
              >
                {{ item.label }}
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 级联选择框 -->
        <div id="1-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>级联选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置级联选择框次级选项触发方式</span>
              <el-select
                size="small"
                class="w-36"
                v-model="AntDesignVue.expandTrigger"
              >
                <el-option :value="'click'">click</el-option>
                <el-option :value="'hover'">hover</el-option>
              </el-select>
            </div>
          </div>
          <div>
            <a-cascader
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :show-search="AntDesignVue.showSearch"
              :size="AntDesignVue.size"
              class="w-60"
              v-model="AntDesignVue.cascaderValue"
              :options="cascaderOptions"
              :expand-trigger="AntDesignVue.expandTrigger"
            >
            </a-cascader>
          </div>
        </div>
        <!-- 树状选择框 -->
        <div id="1-4" class="mx-5 mt-3 pb-5 border-b">
          <h3>树状选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启多选</span>
              <a-switch v-model="AntDesignVue.treeCheckable" />
            </div>
          </div>
          <div>
            <a-tree-select
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :show-search="AntDesignVue.showSearch"
              :size="AntDesignVue.size"
              class="w-60"
              v-model="AntDesignVue.treeSelectValue"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :tree-data="treeSelectOptions"
              :tree-checkable="AntDesignVue.treeCheckable"
            >
            </a-tree-select>
          </div>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 选择框">
        <!-- 通用API -->
        <div id="2-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用</span>
              <a-switch v-model="ElementUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启清除</span>
              <a-switch v-model="ElementUI.clearable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启搜索</span>
              <a-switch v-model="ElementUI.filterable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选择框大小</span>
              <el-select size="small" class="w-36" v-model="ElementUI.size">
                <el-option :value="'medium'">medium</el-option>
                <el-option :value="'small'">small</el-option>
                <el-option :value="'mini'">mini</el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- 标准选择框 -->
        <div id="2-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启多选</span>
              <a-switch
                v-model="ElementUI.multiple"
                @change="ChangeElementUISelect"
              />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置可以选择最多的项目数</span>
              <a-input-number class="w-24" v-model="ElementUI.multipleLimit" />
            </div>
          </div>
          <div>
            <el-select
              :disabled="ElementUI.disabled"
              :clearable="ElementUI.clearable"
              :filterable="ElementUI.filterable"
              :size="ElementUI.size"
              class="w-60"
              v-model="ElementUI.selectValue"
              :multiple="ElementUI.multiple"
              :multiple-limit="ElementUI.multipleLimit"
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
        <div id="2-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>级联选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示选中值的完整路径</span>
              <a-switch v-model="ElementUI.showAllLevels" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选项分隔符</span>
              <a-input class="w-24" v-model="ElementUI.separator" />
            </div>
          </div>
          <div>
            <el-cascader
              :disabled="ElementUI.disabled"
              :clearable="ElementUI.clearable"
              :filterable="ElementUI.filterable"
              :size="ElementUI.size"
              class="w-60"
              v-model="ElementUI.cascaderValue"
              :options="cascaderOptions"
              :show-all-levels="ElementUI.showAllLevels"
              :separator="ElementUI.separator"
            >
            </el-cascader>
          </div>
        </div>
        <!-- 树状选择框 -->
        <div id="2-4" class="mx-5 mt-3 pb-5 border-b">
          <div class="text-red-500">ElementUI框架没有树状选择框</div>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 选择框">
        <!-- 标准选择框 -->
        <div id="3-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用</span>
              <a-switch v-model="AtUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启清除</span>
              <a-switch v-model="AtUI.clearable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启搜索</span>
              <a-switch v-model="AtUI.filterable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启多选</span>
              <a-switch v-model="AtUI.multiple" @change="ChangeAtUISelect" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选择框大小</span>
              <el-select size="small" class="w-36" v-model="AtUI.size">
                <el-option :value="'large'">large</el-option>
                <el-option :value="'normal'">normal</el-option>
                <el-option :value="'small'">small</el-option>
              </el-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选择框选项弹出位置</span>
              <el-select size="small" class="w-36" v-model="AtUI.placement">
                <el-option :value="'top'">top</el-option>
                <el-option :value="'bottom'">bottom</el-option>
              </el-select>
            </div>
          </div>
          <div>
            <at-select
              class="w-60"
              v-model="AtUI.selectValue"
              :disabled="AtUI.disabled"
              :clearable="AtUI.clearable"
              :filterable="AtUI.filterable"
              :multiple="AtUI.multiple"
              :size="AtUI.size"
              :placement="AtUI.placement"
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
        <div id="3-2" class="mx-5 mt-3 pb-5 border-b">
          <div class="text-red-500">AtUI框架没有级联选择框</div>
        </div>
        <!-- 树状选择框 -->
        <div id="3-3" class="mx-5 mt-3 pb-5 border-b">
          <div class="text-red-500">AtUI框架没有树状选择框</div>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 选择框">
        <!-- 通用API -->
        <div id="4-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用</span>
              <a-switch v-model="ViewUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启清除</span>
              <a-switch v-model="ViewUI.clearable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启搜索</span>
              <a-switch v-model="ViewUI.filterable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选择框大小</span>
              <el-select size="small" class="w-36" v-model="ViewUI.size">
                <el-option :value="'default'">default</el-option>
                <el-option :value="'large'">large</el-option>
                <el-option :value="'small'">small</el-option>
              </el-select>
            </div>
          </div>
        </div>
        <!-- 标准选择框 -->
        <div id="4-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启多选</span>
              <a-switch v-model="ViewUI.multiple" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选择框选项弹出位置</span>
              <el-select size="small" class="w-36" v-model="ViewUI.placement">
                <el-option :value="'top'">top</el-option>
                <el-option :value="'bottom'">bottom</el-option>
              </el-select>
            </div>
          </div>
          <div>
            <Select
              :disabled="ViewUI.disabled"
              :clearable="ViewUI.clearable"
              :filterable="ViewUI.filterable"
              :size="ViewUI.size"
              class="w-60"
              v-model="ViewUI.selectValue"
              :multiple="ViewUI.multiple"
              :placement="ViewUI.placement"
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
        <div id="4-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>级联选择框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置级联选择框次级选项触发方式</span>
              <el-select size="small" class="w-36" v-model="ViewUI.trigger">
                <el-option :value="'click'">click</el-option>
                <el-option :value="'hover'">hover</el-option>
              </el-select>
            </div>
          </div>
          <div>
            <Cascader
              :disabled="ViewUI.disabled"
              :clearable="ViewUI.clearable"
              :filterable="ViewUI.filterable"
              :size="ViewUI.size"
              class="w-60"
              v-model="ViewUI.cascaderValue"
              :data="cascaderOptions"
              :trigger="ViewUI.trigger"
            >
            </Cascader>
          </div>
        </div>
        <!-- 树状选择框 -->
        <div id="4-4" class="mx-5 mt-3 pb-5 border-b">
          <div class="text-yellow-500">ViewUI框架的树状选择框需要付费使用</div>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.selectAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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
        disabled: false,
        allowClear: false,
        showSearch: false,
        size: "default",
        selectValue: null,
        showArrow: false,
        defaultActiveFirstOption: false,
        dropdownMatchSelectWidth: false,
        mode: "default",
        maxTagCount: 5,
        maxTagTextLength: 5,
        cascaderValue: null,
        expandTrigger: "hover",
        treeSelectValue: null,
        treeCheckable: false,
      },
      ElementUI: {
        disabled: false,
        clearable: false,
        filterable: false,
        size: "medium",
        selectValue: null,
        multiple: false,
        multipleLimit: 5,
        cascaderValue: null,
        showAllLevels: false,
        separator: "/",
      },
      AtUI: {
        selectValue: null,
        disabled: false,
        clearable: false,
        filterable: false,
        multiple: false,
        size: "normal",
        placement: "bottom",
      },
      ViewUI: {
        disabled: false,
        clearable: false,
        filterable: false,
        size: "default",
        selectValue: null,
        multiple: false,
        placement: "bottom",
        cascaderValue: [],
        trigger: "click",
      },
    };
  },
  methods: {
    ChangeElementUISelect() {
      if (this.ElementUI.multiple) {
        this.ElementUI.selectValue = [];
      } else {
        this.ElementUI.selectValue = null;
      }
    },
    ChangeAtUISelect() {
      if (this.AtUI.multiple) {
        this.AtUI.selectValue = [];
      } else {
        this.AtUI.selectValue = null;
      }
    },
  },
};
</script>