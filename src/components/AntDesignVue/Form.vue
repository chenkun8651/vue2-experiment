<template>
  <!-- 表单组件 -->
  <div>
    <!-- 输入框 -->
    <h1 class="title-xy">输入框</h1>
    <div style="padding: 30px">
      <!-- 标准输入框 -->
      <div class="title-2-xy">
        <h3>标准输入框</h3>
        <div>
          <a-input style="width: 200px" placeholder="输入文本" />
        </div>
      </div>
      <!-- 前置/后置标签输入框 -->
      <div class="title-2-xy">
        <h3>前置/后置标签输入框</h3>
        <div>
          <a-input
            style="width: 200px"
            addon-before="Http://"
            addon-after=".com"
            default-value="mysite"
          />
        </div>
      </div>
      <!-- 搜索输入框 -->
      <div class="title-2-xy">
        <h3>搜索输入框</h3>
        <div>
          <a-input-search
            style="width: 200px"
            placeholder="输入搜索文本"
            :enter-button="true"
          />
        </div>
      </div>
      <!-- 文本域输入框 -->
      <div class="title-2-xy">
        <h3>文本域输入框</h3>
        <div>
          <a-textarea style="width: 200px" placeholder="输入文本域" :rows="4" />
        </div>
      </div>
      <!-- 密码输入框 -->
      <div class="title-2-xy">
        <h3>密码输入框</h3>
        <div>
          <a-input-password style="width: 200px" placeholder="输入密码" />
        </div>
      </div>
      <!-- 数字输入框 -->
      <div class="title-2-xy">
        <h3>数字输入框</h3>
        <div>
          <a-input-number
            style="width: 200px"
            placeholder="输入数字"
            :min="1"
            :max="10"
          />
        </div>
      </div>
      <!-- 提及输入框 -->
      <div class="title-2-xy">
        <h3>提及输入框</h3>
        <div>
          <a-mentions style="width: 200px" placeholder="输入@可以找到提及信息">
            <a-mentions-option value="abc">abc</a-mentions-option>
            <a-mentions-option value="efg">efg</a-mentions-option>
            <a-mentions-option value="hij">hij</a-mentions-option>
          </a-mentions>
        </div>
      </div>
      <!-- 联想输入框 -->
      <div class="title-2-xy">
        <h3>联想输入框</h3>
        <div>
          <a-auto-complete
            v-model="autoCompleteValue"
            style="width: 200px"
            placeholder="输入联想文本"
            :data-source="autoCompleteDataSource"
            @search="autoCompleteSearch"
          />
        </div>
      </div>
    </div>
    <!-- 选择框 -->
    <h1 class="title-xy">选择框</h1>
    <div style="padding: 30px">
      <!-- 标准选择框 -->
      <div class="title-2-xy">
        <h3>标准选择框</h3>
        <div>
          <a-select style="width: 200px" default-value="1" mode="default">
            <a-select-option value="1">选项一</a-select-option>
            <a-select-option value="2">选项二</a-select-option>
            <a-select-option value="3" disabled>选项三</a-select-option>
            <a-select-option value="4">选项四</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- 多选选择框 -->
      <div class="title-2-xy">
        <h3>多选选择框</h3>
        <div>
          <a-select style="width: 200px" default-value="1" mode="multiple">
            <a-select-option value="1">选项一</a-select-option>
            <a-select-option value="2">选项二</a-select-option>
            <a-select-option value="3" disabled>选项三</a-select-option>
            <a-select-option value="4">选项四</a-select-option>
          </a-select>
        </div>
      </div>
      <!-- 级联选择框 -->
      <div class="title-2-xy">
        <h3>级联选择框</h3>
        <div>
          <a-cascader
            style="width: 200px"
            placeholder="请选择一个旅游景点"
            :options="cityOptions"
          />
        </div>
      </div>
    </div>
    <!-- 单选框 -->
    <h1 class="title-xy">单选框</h1>
    <div style="padding: 30px">
      <!-- 标准单选框 -->
      <h3>标准单选框</h3>
      <div>
        <a-radio>单选项</a-radio>
      </div>
      <!-- 单选框组合 -->
      <h3>单选框组合</h3>
      <div>
        <a-radio-group>
          <a-radio :value="1">单选项一</a-radio>
          <a-radio :value="2">单选项二</a-radio>
          <a-radio :value="3">单选项三</a-radio>
          <a-radio :value="4">单选项四</a-radio>
        </a-radio-group>
      </div>
      <!-- 按钮类型单选框组合 -->
      <h3>按钮类型单选框组合</h3>
      <div>
        <a-radio-group :default-value="3" button-style="solid">
          <a-radio-button :value="1"> 单选项一 </a-radio-button>
          <a-radio-button :value="2" :disabled="true">
            单选项二
          </a-radio-button>
          <a-radio-button :value="3"> 单选项三 </a-radio-button>
          <a-radio-button :value="4"> 单选项四 </a-radio-button>
        </a-radio-group>
      </div>
    </div>
    <!-- 多选框 -->
    <h1 class="title-xy">多选框</h1>
    <div style="padding: 30px">
      <!-- 标准多选框 -->
      <div class="title-2-xy">
        <h3>标准多选框</h3>
        <a-checkbox>多选项</a-checkbox>
      </div>
      <!-- 全选功能 -->
      <div class="title-2-xy">
        <h3>全选功能-多选框组合</h3>
        <a-checkbox
          style="margin-right: 8px"
          :indeterminate="indeterminate"
          :checked="checkAll"
          @change="changeCheckAll"
        >
          全选项
        </a-checkbox>
        <a-checkbox-group
          v-model="checkedList"
          :options="plainOptions"
          @change="changeCheckValue"
        />
      </div>
    </div>
    <!-- 日期选择框 -->
    <h1 class="title-xy">日期选择框</h1>
    <div style="padding: 30px">
      <!-- 选择日期 -->
      <div class="title-2-xy">
        <h3>选择日期</h3>
        <a-date-picker style="width: 200px" placeholder="选择日期" />
      </div>
      <!-- 选择第几周 -->
      <div class="title-2-xy">
        <h3>选择第几周</h3>
        <a-week-picker style="width: 200px" placeholder="选择第几周" />
      </div>
      <!-- 选择月份 -->
      <div class="title-2-xy">
        <h3>选择月份</h3>
        <a-month-picker style="width: 200px" placeholder="选择月份" />
      </div>
      <!-- 选择范围日期 -->
      <div class="title-2-xy">
        <h3>选择范围日期</h3>
        <a-range-picker />
      </div>
    </div>
    <!-- 时间选择框 -->
    <h1 class="title-xy">时间选择框</h1>
    <div style="padding: 30px">
      <!-- 选择时间 -->
      <div class="title-2-xy">
        <h3>选择时间</h3>
        <a-time-picker style="width: 200px" use12-hours />
      </div>
    </div>
    <!-- 评分 -->
    <h1 class="title-xy">评分</h1>
    <div style="padding: 30px">
      <!-- 标准评分 -->
      <div class="title-2-xy">
        <h3>标准评分</h3>
        <div>
          <a-rate :default-value="2.5" :allow-half="true" />
        </div>
      </div>
      <!-- 评分-更换图标 -->
      <div class="title-2-xy">
        <h3>评分-更换图标</h3>
        <div>
          <a-rate :default-value="4.0" :allow-half="true">
            <a-icon slot="character" type="heart" />
          </a-rate>
        </div>
      </div>
    </div>
    <!-- 滑动输入条 -->
    <h1 class="title-xy">滑动输入条</h1>
    <div style="padding: 30px">
      <!-- 标准滑动输入条 -->
      <div class="title-2-xy">
        <h3>标准滑动输入条</h3>
        <div>
          <a-slider :default-value="30" :tip-formatter="formatterSlider" />
        </div>
      </div>
      <!-- 双滑块滑动输入条 -->
      <div class="title-2-xy">
        <h3>双滑块滑动输入条</h3>
        <div>
          <a-slider :range="true" :default-value="[20, 50]" />
        </div>
      </div>
      <!-- 带图标滑动输入条 -->
      <div class="title-2-xy">
        <h3>带图标滑动输入条</h3>
        <div class="icon-wrapper">
          <a-icon :style="{ color: '#fadb14' }" type="frown-o" />
          <a-slider :min="0" :max="20" />
          <a-icon :style="{ color: '#fadb14' }" type="smile-o" />
        </div>
      </div>
    </div>
    <!-- 开关 -->
    <h1 class="title-xy">开关</h1>
    <div style="padding: 30px">
      <!-- 标准开关 -->
      <div class="title-2-xy">
        <h3>标准开关</h3>
        <div>
          <a-switch default-checked />
        </div>
      </div>
      <!-- 带文字开关 -->
      <div class="title-2-xy">
        <h3>带文字开关</h3>
        <div>
          <a-switch
            checked-children="开"
            un-checked-children="关"
            default-checked
          />
        </div>
      </div>
      <!-- 带加载开关 -->
      <div class="title-2-xy">
        <h3>带加载开关</h3>
        <div>
          <a-switch loading default-checked />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const plainOptions = ["多选项一", "多选项二", "多选项三"];
const defaultCheckedList = ["多选项一", "多选项三"];
export default {
  data() {
    return {
      autoCompleteValue: "",
      autoCompleteDataSource: [],
      cityOptions: [
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
      ],
      indeterminate: true,
      checkAll: false,
      checkedList: defaultCheckedList,
      plainOptions: plainOptions,
    };
  },
  methods: {
    autoCompleteSearch(searchText) {
      this.autoCompleteDataSource = !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)];
    },
    changeCheckAll(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
    changeCheckValue(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    formatterSlider(value) {
      return `${value}%`;
    },
  },
};
</script>

<style scoped>
.title-xy {
  margin: 10px 0px;
  text-align: center;
}
.title-2-xy {
  margin: 5px 0px;
}
.item-i-xy {
  margin: 5px 20px;
}
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}
.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
}
.icon-wrapper .anticon:first-child {
  left: 0;
}
.icon-wrapper .anticon:last-child {
  right: 0;
}
</style>