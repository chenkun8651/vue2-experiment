<template>
  <!-- 表单组件 -->
  <div>
    <!-- 输入框 -->
    <h1 class="title-xy">输入框</h1>
    <div class="content">
      <!-- 标准输入框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准输入框</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="inputSize">
              <a-radio-button :value="'large'">大输入框</a-radio-button>
              <a-radio-button :value="'default'">默认输入框</a-radio-button>
              <a-radio-button :value="'small'">小输入框</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="inputAllowClear">
              <a-radio-button :value="true">开启清除</a-radio-button>
              <a-radio-button :value="false">关闭清除</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="inputDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置最大长度</span>
              <a-input-number style="width: 100px" v-model="inputMaxLength" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">前缀图标</span>
              <a-input style="width: 100px" v-model="inputPrefix" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">后缀图标</span>
              <a-input style="width: 100px" v-model="inputSuffix" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">前置标签</span>
              <a-input style="width: 100px" v-model="inputAddonBefore" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">后置标签</span>
              <a-input style="width: 100px" v-model="inputAddonAfter" />
            </div>
          </div>
          <div>
            <a-input
              style="width: 300px"
              placeholder="占位输入框"
              default-value="标准输入框"
              :size="inputSize"
              :disabled="inputDisabled"
              :allow-clear="inputAllowClear"
              :max-length="inputMaxLength"
              :addon-before="inputAddonBefore"
              :addon-after="inputAddonAfter"
            >
              <a-icon v-if="inputPrefix" slot="prefix" :type="inputPrefix">
              </a-icon>
              <a-icon v-if="inputSuffix" slot="suffix" :type="inputSuffix">
              </a-icon>
            </a-input>
          </div>
        </div>
      </div>
      <!-- 文本域输入框 -->
      <div class="content-item">
        <h3 class="title2-xy">文本域输入框（部分属性继承标准输入框）</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="textareaAutosize">
              <a-radio-button :value="true">开启自适应高度内容</a-radio-button>
              <a-radio-button :value="false">关闭自适应高度内容</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-textarea
              style="width: 300px"
              placeholder="占位输入框"
              default-value="标准文本域输入框"
              :disabled="inputDisabled"
              :allow-clear="inputAllowClear"
              :max-length="inputMaxLength"
              :auto-size="textareaAutosize"
            >
            </a-textarea>
          </div>
        </div>
      </div>
      <!-- 搜索输入框 -->
      <div class="content-item">
        <h3 class="title2-xy">搜索输入框（部分属性继承标准输入框）</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="inputSearchEnterButton">
              <a-radio-button :value="true">开启确认按钮</a-radio-button>
              <a-radio-button :value="false">关闭确认按钮</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="inputSearchLoading">
              <a-radio-button :value="true">加载</a-radio-button>
              <a-radio-button :value="false">完成</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-input-search
              style="width: 300px"
              placeholder="占位输入框"
              default-value="标准搜索输入框"
              :size="inputSize"
              :disabled="inputDisabled"
              :allow-clear="inputAllowClear"
              :max-length="inputMaxLength"
              :addon-before="inputAddonBefore"
              :enter-button="inputSearchEnterButton"
              :loading="inputSearchLoading"
            >
              <a-icon v-if="inputPrefix" slot="prefix" :type="inputPrefix">
              </a-icon>
              <a-icon v-if="inputSuffix" slot="suffix" :type="inputSuffix">
              </a-icon>
            </a-input-search>
          </div>
        </div>
      </div>
      <!-- 密码输入框 -->
      <div class="content-item">
        <h3 class="title2-xy">密码输入框（部分属性继承标准输入框）</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="inputPasswordVisibilityToggle">
              <a-radio-button :value="true">开启切换按钮</a-radio-button>
              <a-radio-button :value="false">关闭切换按钮</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-input-password
              style="width: 300px"
              placeholder="占位输入框"
              :size="inputSize"
              :disabled="inputDisabled"
              :max-length="inputMaxLength"
              :addon-before="inputAddonBefore"
              :addon-after="inputAddonAfter"
              :visibilityToggle="inputPasswordVisibilityToggle"
            >
              <a-icon v-if="inputPrefix" slot="prefix" :type="inputPrefix">
              </a-icon>
              <a-icon v-if="inputSuffix" slot="suffix" :type="inputSuffix">
              </a-icon>
            </a-input-password>
          </div>
        </div>
      </div>
      <!-- 数字输入框 -->
      <div class="content-item">
        <h3 class="title2-xy">数字输入框（部分属性继承标准输入框）</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="inputNumberAutoFocus">
              <a-radio-button :value="true">开启自动聚焦</a-radio-button>
              <a-radio-button :value="false">关闭自动聚焦</a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置最小数</span>
              <a-input-number style="width: 100px" v-model="inputNumberMin" />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置最大数</span>
              <a-input-number style="width: 100px" v-model="inputNumberMax" />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置数值精度</span>
              <a-input-number
                style="width: 100px"
                v-model="inputNumberPrecision"
                :min="0"
              />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置改变步数</span>
              <a-input-number
                style="width: 100px"
                v-model="inputNumberStep"
                :min="0"
              />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置小数点样式</span>
              <a-input
                style="width: 100px"
                v-model="inputNumberDecimalSeparator"
              />
            </div>
          </div>
          <a-input-number
            style="width: 300px"
            placeholder="占位输入框"
            :default-value="1"
            :size="inputSize"
            :disabled="inputDisabled"
            :auto-focus="inputNumberAutoFocus"
            :min="inputNumberMin"
            :max="inputNumberMax"
            :decimal-separator="inputNumberDecimalSeparator"
            :precision="inputNumberPrecision"
            :step="inputNumberStep"
          >
          </a-input-number>
        </div>
      </div>
      <!-- 提及输入框 -->
      <div class="content-item">
        <h3 class="title2-xy">提及输入框（部分属性继承标准输入框）</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="mentionsPlacement">
              <a-radio-button :value="'top'">向上弹出</a-radio-button>
              <a-radio-button :value="'bottom'">向下弹出</a-radio-button>
            </a-radio-group>
            <div class="string-set">
              <span style="margin-right: 5px">设置触发关键字</span>
              <a-input style="width: 100px" v-model="mentionsPrefix" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置选中项前后分隔符</span>
              <a-input style="width: 100px" v-model="mentionsSplit" />
            </div>
          </div>
          <div>
            <a-mentions
              style="width: 300px"
              placeholder="输入@可以找到提及信息"
              :autoFocus="false"
              :disabled="inputDisabled"
              :placement="mentionsPlacement"
              :prefix="mentionsPrefix"
              :split="mentionsSplit"
            >
              <a-mentions-option value="月光">月光</a-mentions-option>
              <a-mentions-option value="太阳">太阳</a-mentions-option>
              <a-mentions-option value="函数">函数</a-mentions-option>
            </a-mentions>
          </div>
        </div>
      </div>
      <!-- 联想输入框 -->
      <div class="content-item">
        <h3 class="title2-xy">联想输入框（部分属性继承标准输入框）</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="autoCompleteBackfill">
              <a-radio-button :value="true">开启键盘回填</a-radio-button>
              <a-radio-button :value="false">关闭键盘回填</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="autoCompleteDefaultActiveFirstOption">
              <a-radio-button :value="true">
                开启默认第一项高亮显示
              </a-radio-button>
              <a-radio-button :value="false">
                关闭默认第一项高亮显示
              </a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-auto-complete
              style="width: 300px"
              placeholder="输入联想文本"
              :auto-focus="false"
              :disabled="inputDisabled"
              :allow-clear="inputAllowClear"
              :data-source="autoCompleteDataSource"
              :backfill="autoCompleteBackfill"
              :default-active-first-option="
                autoCompleteDefaultActiveFirstOption
              "
              @search="autoCompleteSearch"
            >
            </a-auto-complete>
          </div>
        </div>
      </div>
    </div>
    <!-- 选择框 -->
    <h1 class="title-xy">选择框</h1>
    <div class="content">
      <!-- 标准选择框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准选择框</h3>
        <div class="content2">
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
          <a-select
            style="width: 300px"
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
      <div class="content-item">
        <h3 class="title2-xy">级联选择框（部分属性继承标准选择框）</h3>
        <div class="content2">
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
              style="width: 300px"
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
      </div>
      <!-- 树状选择框 -->
      <div class="content-item">
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
              style="width: 300px"
              placeholder="请选择一种食物"
              :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
              :size="selectSize"
              :disabled="selectDisabled"
              :allow-clear="selectAllowClear"
              :tree-data="treeSelectOptions"
              :show-search="treeSelectShowSearch"
              :tree-checkable="treeSelectTreeCheckable"
              >>
            </a-tree-select>
          </div>
        </div>
      </div>
    </div>
    <!-- 单选框 -->
    <h1 class="title-xy">单选框</h1>
    <div class="content">
      <!-- 标准单选框 -->
      <h3 class="title2-xy">标准单选框</h3>
      <div class="content2">
        <div class="radio-box">
          <a-radio-group v-model="radioDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-radio-group :options="radioOptions" :disabled="radioDisabled">
          </a-radio-group>
        </div>
      </div>
      <!-- 按钮单选框 -->
      <h3 class="title2-xy">按钮单选框（部分属性继承标准单选框）</h3>
      <div class="content2">
        <div class="radio-box">
          <a-radio-group v-model="radioSize">
            <a-radio-button value="large">大单选框</a-radio-button>
            <a-radio-button value="default">默认单选框</a-radio-button>
            <a-radio-button value="small">小单选框</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="radioButtonStyle">
            <a-radio-button value="outline">描边风格</a-radio-button>
            <a-radio-button value="solid">填色风格</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-radio-group
            :disabled="radioDisabled"
            :size="radioSize"
            :button-style="radioButtonStyle"
          >
            <a-radio-button value="1">单选项一</a-radio-button>
            <a-radio-button value="2">单选项二</a-radio-button>
            <a-radio-button value="3">单选项三</a-radio-button>
            <a-radio-button value="4">单选项四</a-radio-button>
          </a-radio-group>
        </div>
      </div>
    </div>
    <!-- 多选框 -->
    <h1 class="title-xy">多选框</h1>
    <div class="content">
      <!-- 标准多选框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准多选框</h3>
        <div class="content2">
          <a-checkbox
            style="margin-right: 8px"
            :indeterminate="checkboxIndeterminate"
            :checked="checkboxChecked"
            @change="checkboxChangeCheckAll"
          >
            全选项
          </a-checkbox>
          <a-checkbox-group
            v-model="checkboxList"
            :options="checkboxOptions"
            @change="checkboxChangeCheckValue"
          >
          </a-checkbox-group>
        </div>
      </div>
    </div>
    <!-- 日期选择框 -->
    <h1 class="title-xy">日期选择框</h1>
    <div class="content">
      <!-- 标准日期选择框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准日期选择框</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="dateDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dateAllowClear">
              <a-radio-button :value="true">开启清除</a-radio-button>
              <a-radio-button :value="false">关闭清除</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dateInputReadOnly">
              <a-radio-button :value="true">开启只读</a-radio-button>
              <a-radio-button :value="false">关闭只读</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dataShowTime">
              <a-radio-button :value="true">开启选择时间</a-radio-button>
              <a-radio-button :value="false">关闭选择时间</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-date-picker
              style="width: 200px; margin: 0 50px 20px 0"
              placeholder="选择日期"
              :autoFocus="false"
              :disabled="dateDisabled"
              :allowClear="dateAllowClear"
              :input-read-only="dateInputReadOnly"
              :show-time="dataShowTime"
            >
            </a-date-picker>
            <a-week-picker
              style="width: 200px; margin: 0 50px 20px 0"
              placeholder="选择周"
              :autoFocus="false"
              :disabled="dateDisabled"
              :allowClear="dateAllowClear"
              :input-read-only="dateInputReadOnly"
            >
            </a-week-picker>
            <a-month-picker
              style="width: 200px; margin: 0 50px 20px 0"
              placeholder="选择月份"
              :autoFocus="false"
              :disabled="dateDisabled"
              :allowClear="dateAllowClear"
              :input-read-only="dateInputReadOnly"
            >
            </a-month-picker>
            <a-range-picker
              style="width: 400px"
              :autoFocus="false"
              :disabled="dateDisabled"
              :allowClear="dateAllowClear"
              :input-read-only="dateInputReadOnly"
              :show-time="dataShowTime"
            >
            </a-range-picker>
          </div>
        </div>
      </div>
    </div>
    <!-- 时间选择框 -->
    <h1 class="title-xy">时间选择框</h1>
    <div class="content">
      <!-- 标准时间选择框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准时间选择框</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="timeDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="timeAllowClear">
              <a-radio-button :value="true">开启清除</a-radio-button>
              <a-radio-button :value="false">关闭清除</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="timeInputReadOnly">
              <a-radio-button :value="true">开启只读</a-radio-button>
              <a-radio-button :value="false">关闭只读</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="timeUse12Hours">
              <a-radio-button :value="true">开启12小时制</a-radio-button>
              <a-radio-button :value="false">关闭12小时制</a-radio-button>
            </a-radio-group>
            <div class="string-set">
              <span style="margin-right: 5px">设置时间格式</span>
              <a-input style="width: 100px" v-model="timeFormat" />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置小时选项间隔</span>
              <a-input-number
                style="width: 100px"
                v-model="timeHourStep"
                :max="23"
                :min="1"
              />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置分钟选项间隔</span>
              <a-input-number
                style="width: 100px"
                v-model="timeMinuteStep"
                :max="59"
                :min="1"
              />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置秒钟选项间隔</span>
              <a-input-number
                style="width: 100px"
                v-model="timeSecondStep"
                :max="59"
                :min="1"
              />
            </div>
          </div>
          <div>
            <a-time-picker
              style="width: 200px"
              placeholder="选择时间"
              :autoFocus="false"
              :disabled="timeDisabled"
              :allowClear="timeAllowClear"
              :input-read-only="timeInputReadOnly"
              :use12-hours="timeUse12Hours"
              :format="timeFormat"
              :hour-step="timeHourStep"
              :minute-step="timeMinuteStep"
              :second-step="timeSecondStep"
            >
            </a-time-picker>
          </div>
        </div>
      </div>
    </div>
    <!-- 评分 -->
    <h1 class="title-xy">评分</h1>
    <div class="content">
      <!-- 标准评分 -->
      <div class="content-item">
        <h3 class="title2-xy">标准评分</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="rateDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="rateAllowClear">
              <a-radio-button :value="true">开启清除</a-radio-button>
              <a-radio-button :value="false">关闭清除</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="rateAllowHalf">
              <a-radio-button :value="true">开启半选</a-radio-button>
              <a-radio-button :value="false">关闭半选</a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置评分数</span>
              <a-input-number
                style="width: 100px"
                v-model="rateCount"
                :max="10"
                :min="1"
              />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置评分图标</span>
              <a-input style="width: 100px" v-model="rateIcon" />
            </div>
          </div>
          <div>
            <a-rate
              :autoFocus="false"
              :default-value="3"
              :disabled="rateDisabled"
              :allow-clear="rateAllowClear"
              :allow-half="rateAllowHalf"
              :count="rateCount"
            >
              <a-icon slot="character" :type="rateIcon" />
            </a-rate>
          </div>
        </div>
      </div>
    </div>
    <!-- 滑动输入条 -->
    <h1 class="title-xy">滑动输入条</h1>
    <div class="content">
      <!-- 标准滑动输入条 -->
      <div class="content-item">
        <h3 class="title2-xy">标准滑动输入条</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="sliderDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="sliderVertical">
              <a-radio-button :value="true">竖直方向</a-radio-button>
              <a-radio-button :value="false">水平方向</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="sliderDots">
              <a-radio-button :value="true">开启拖拽到刻度</a-radio-button>
              <a-radio-button :value="false">关闭拖拽到刻度</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="sliderRange">
              <a-radio-button :value="true">开启双滑块</a-radio-button>
              <a-radio-button :value="false">关闭双滑块</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="sliderReverse">
              <a-radio-button :value="true">开启反向</a-radio-button>
              <a-radio-button :value="false">关闭反向</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="sliderTooltipVisible">
              <a-radio-button :value="true">显示提示</a-radio-button>
              <a-radio-button :value="false">隐藏提示</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="sliderTooltipPlacement">
              <a-radio-button :value="'top'">上方提示</a-radio-button>
              <a-radio-button :value="'bottom'">下方提示</a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置输入条最大值</span>
              <a-input-number
                style="width: 100px"
                v-model="sliderMax"
                :max="500"
                :min="sliderMin"
              />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置输入条最小值</span>
              <a-input-number
                style="width: 100px"
                v-model="sliderMin"
                :max="sliderMax"
                :min="1"
              />
            </div>
          </div>
          <div>
            <a-slider
              style="height: 100px"
              :auto-focus="false"
              :disabled="sliderDisabled"
              :vertical="sliderVertical"
              :dots="sliderDots"
              :range="sliderRange"
              :reverse="sliderReverse"
              :tooltip-visible="sliderTooltipVisible"
              :tooltip-placement="sliderTooltipPlacement"
              :max="sliderMax"
              :min="sliderMin"
              :tip-formatter="sliderTipFormatter"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 开关 -->
    <h1 class="title-xy">开关</h1>
    <div class="content">
      <!-- 标准开关 -->
      <div class="content-item">
        <h3 class="title2-xy">标准开关</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="switchDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="switchSize">
              <a-radio-button :value="'default'">默认</a-radio-button>
              <a-radio-button :value="'small'">小型</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="switchLoading">
              <a-radio-button :value="true">开启加载</a-radio-button>
              <a-radio-button :value="false">关闭加载</a-radio-button>
            </a-radio-group>
            <div class="string-set">
              <span style="margin-right: 5px">设置打开时开关文本</span>
              <a-input style="width: 100px" v-model="switchCheckedChildren" />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置关闭时开关文本</span>
              <a-input style="width: 100px" v-model="switchUnCheckedChildren" />
            </div>
          </div>
          <div>
            <a-switch
              :auto-focus="false"
              :disabled="switchDisabled"
              :size="switchSize"
              :loading="switchLoading"
              :checked-children="switchCheckedChildren"
              :un-checked-children="switchUnCheckedChildren"
            >
            </a-switch>
          </div>
        </div>
      </div>
    </div>
    <!-- 上传 -->
    <h1 class="title-xy">上传</h1>
    <div class="content">
      <!-- 标准上传 -->
      <div class="content-item">
        <h3 class="title2-xy">标准上传</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="uploadDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="uploadListType">
              <a-radio-button :value="'text'">文本模式</a-radio-button>
              <a-radio-button :value="'picture'">图片模式</a-radio-button>
              <a-radio-button :value="'picture-card'">
                图片卡片模式
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="uploadMultiple">
              <a-radio-button :value="true">开启多选</a-radio-button>
              <a-radio-button :value="false">关闭多选</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="uploadDirectory">
              <a-radio-button :value="true">支持上传文件文件夹</a-radio-button>
              <a-radio-button :value="false">
                不支持上传文件文件夹
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="uploadShowUploadList">
              <a-radio-button :value="true">显示上传列表</a-radio-button>
              <a-radio-button :value="false">不显示上传列表</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="uploadOpenFileDialogOnClick">
              <a-radio-button :value="true">显示文件上传对话框</a-radio-button>
              <a-radio-button :value="false">
                不显示文件上传对话框
              </a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-upload
              class="avatar-uploader"
              name="avatar"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :headers="{
                authorization: 'authorization-text',
              }"
              :disabled="uploadDisabled"
              :list-type="uploadListType"
              :multiple="uploadMultiple"
              :directory="uploadDirectory"
              :show-upload-list="uploadShowUploadList"
              :open-file-dialog-on-click="uploadOpenFileDialogOnClick"
              :before-upload="uploadBeforeUploadImage"
              @change="uploadChangeImage"
            >
              <img v-if="uploadImageUrl" :src="uploadImageUrl" />
              <a-button v-else>
                <a-icon :type="uploadLoading ? 'loading' : 'upload'" />点击上传
              </a-button>
            </a-upload>
          </div>
        </div>
      </div>
    </div>
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
const radioOptions = [
  { label: "单选项一", value: 1 },
  { label: "单选项二", value: 2 },
  { label: "单选项三", value: 3 },
  { label: "单选项四", value: 4 },
];
const checkboxOptions = ["多选项一", "多选项二", "多选项三", "多选项四"];

const getBase64 = function (img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

export default {
  data() {
    return {
      // 输入框
      inputSize: "default",
      inputDisabled: false,
      inputAllowClear: false,
      inputMaxLength: 10,
      inputAddonBefore: "",
      inputAddonAfter: "",
      inputPrefix: null,
      inputSuffix: null,
      textareaAutosize: false,
      inputSearchEnterButton: true,
      inputSearchLoading: false,
      inputPasswordVisibilityToggle: true,
      inputNumberAutoFocus: false,
      inputNumberMin: 1,
      inputNumberMax: 100,
      inputNumberPrecision: 2,
      inputNumberStep: 2,
      inputNumberDecimalSeparator: ".",
      mentionsPlacement: "top",
      mentionsPrefix: "@",
      mentionsSplit: "",
      autoCompleteDataSource: [],
      autoCompleteBackfill: true,
      autoCompleteDefaultActiveFirstOption: true,
      // 选择框
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
      // 单选框
      radioOptions: radioOptions,
      radioSize: "default",
      radioDisabled: false,
      radioButtonStyle: "outline",
      // 多选框
      checkboxIndeterminate: false,
      checkboxChecked: false,
      checkboxList: [],
      checkboxOptions: checkboxOptions,
      // 日期选择器
      dateDisabled: false,
      dateAllowClear: false,
      dateInputReadOnly: false,
      dataShowTime: false,
      // 时间选择器
      timeDisabled: false,
      timeAllowClear: false,
      timeInputReadOnly: false,
      timeUse12Hours: false,
      timeFormat: "HH:mm:ss",
      timeHourStep: 1,
      timeMinuteStep: 1,
      timeSecondStep: 1,
      // 评分
      rateDisabled: false,
      rateAllowClear: false,
      rateAllowHalf: false,
      rateCount: 5,
      rateIcon: "heart",
      // 滑动输入条
      sliderDisabled: false,
      sliderDots: false,
      sliderRange: false,
      sliderReverse: false,
      sliderVertical: false,
      sliderTooltipVisible: false,
      sliderTooltipPlacement: "top",
      sliderMax: 100,
      sliderMin: 1,
      // 开关
      switchDisabled: false,
      switchSize: "default",
      switchLoading: false,
      switchCheckedChildren: "开",
      switchUnCheckedChildren: "关",
      // 上传
      uploadDisabled: false,
      uploadListType: "text",
      uploadMultiple: false,
      uploadDirectory: false,
      uploadShowUploadList: false,
      uploadOpenFileDialogOnClick: true,
      uploadLoading: false,
      uploadImageUrl: "",
    };
  },
  methods: {
    // 选择框-根据输入文本生成联想源数据
    autoCompleteSearch(text) {
      this.autoCompleteDataSource = !text
        ? []
        : [text, text.repeat(2), text.repeat(3)];
    },
    // 多选框-全选操作
    checkboxChangeCheckAll(event) {
      Object.assign(this, {
        checkboxIndeterminate: false,
        checkboxChecked: event.target.checked,
        checkboxList: event.target.checked ? checkboxOptions : [],
      });
    },
    // 多选框-更新多选列表
    checkboxChangeCheckValue(list) {
      this.checkboxIndeterminate =
        !!list.length && list.length < checkboxOptions.length;
      this.checkboxChecked = list.length === checkboxOptions.length;
    },
    // 滑动输入条-格式化输入条提示值
    sliderTipFormatter(value) {
      return `${value}%`;
    },
    // 上传-上传图片之前的回调函数
    uploadBeforeUploadImage(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("只能上传JPG，PNG类型的图片!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("图片内容不能超过2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    // 上传-上传图片完成
    uploadChangeImage(info) {
      if (info.file.status === "uploading") {
        this.uploadLoading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.uploadImageUrl = imageUrl;
          this.uploadLoading = false;
        });
      }
    },
  },
};
</script>

<style scoped>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 26px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>