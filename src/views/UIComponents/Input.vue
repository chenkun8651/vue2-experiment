<template>
  <!-- 输入框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 输入框">
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="inputDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputAllowClear">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框值最大长度</span>
            <a-input-number style="width: 100px" v-model="inputMaxLength" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">前置标签</span>
            <a-input style="width: 100px" v-model="inputAddonBefore" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">后置标签</span>
            <a-input style="width: 100px" v-model="inputAddonAfter" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">前缀图标</span>
            <a-input style="width: 100px" v-model="inputPrefix" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">后缀图标</span>
            <a-input style="width: 100px" v-model="inputSuffix" />
          </div>
        </div>
        <div>
          <a-input
            style="width: 200px"
            :disabled="inputDisabled"
            :allow-clear="inputAllowClear"
            :size="inputSize"
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
      <!-- 文本域输入框 -->
      <div class="card-item">
        <h3>文本域输入框（部分属性继承标准输入框）</h3>
        <div class="radio-box">
          <a-radio-group v-model="textareaAutosize">
            <a-radio-button :value="true">开启自适应高度内容</a-radio-button>
            <a-radio-button :value="false">关闭自适应高度内容</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-textarea
            style="width: 200px"
            :disabled="inputDisabled"
            :allow-clear="inputAllowClear"
            :max-length="inputMaxLength"
            :auto-size="textareaAutosize"
          >
          </a-textarea>
        </div>
      </div>
      <!-- 搜索输入框 -->
      <div class="card-item">
        <h3>搜索输入框（部分属性继承标准输入框）</h3>
        <div class="radio-box">
          <a-radio-group v-model="inputSearchLoading">
            <a-radio-button :value="true">加载</a-radio-button>
            <a-radio-button :value="false">完成</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputSearchEnterButton">
            <a-radio-button :value="true">显示确认按钮</a-radio-button>
            <a-radio-button :value="false">隐藏确认按钮</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-input-search
            style="width: 200px"
            :disabled="inputDisabled"
            :allow-clear="inputAllowClear"
            :size="inputSize"
            :max-length="inputMaxLength"
            :addon-before="inputAddonBefore"
            :loading="inputSearchLoading"
            :enter-button="inputSearchEnterButton"
          >
            <a-icon v-if="inputPrefix" slot="prefix" :type="inputPrefix">
            </a-icon>
            <a-icon v-if="inputSuffix" slot="suffix" :type="inputSuffix">
            </a-icon>
          </a-input-search>
        </div>
      </div>
      <!-- 密码输入框 -->
      <div class="card-item">
        <h3>密码输入框（部分属性继承标准输入框）</h3>
        <div class="radio-box">
          <a-radio-group v-model="inputPasswordVisibilityToggle">
            <a-radio-button :value="true">显示切换按钮</a-radio-button>
            <a-radio-button :value="false">隐藏切换按钮</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-input-password
            style="width: 200px"
            :disabled="inputDisabled"
            :size="inputSize"
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
      <!-- 数字输入框 -->
      <div class="card-item">
        <h3>数字输入框（部分属性继承标准输入框）</h3>
        <div class="radio-box">
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
        <div>
          <a-input-number
            style="width: 200px"
            :disabled="inputDisabled"
            :size="inputSize"
            :min="inputNumberMin"
            :max="inputNumberMax"
            :precision="inputNumberPrecision"
            :step="inputNumberStep"
            :decimal-separator="inputNumberDecimalSeparator"
          >
          </a-input-number>
        </div>
      </div>
      <!-- 提及输入框 -->
      <div class="card-item">
        <h3>提及输入框（部分属性继承标准输入框）</h3>
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
            style="width: 200px"
            :disabled="inputDisabled"
            :placement="mentionsPlacement"
            :prefix="mentionsPrefix"
            :split="mentionsSplit"
          >
            <a-mentions-option value="太阳">太阳</a-mentions-option>
            <a-mentions-option value="月亮">月亮</a-mentions-option>
            <a-mentions-option value="火星">火星</a-mentions-option>
          </a-mentions>
        </div>
      </div>
      <!-- 联想输入框 -->
      <div class="card-item">
        <h3>联想输入框（部分属性继承标准输入框）</h3>
        <div>
          <a-auto-complete
            style="width: 200px"
            :disabled="inputDisabled"
            :allow-clear="inputAllowClear"
            :data-source="autoCompleteDataSource"
            @search="autoCompleteSearch"
          >
          </a-auto-complete>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 输入框">
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="inputTypeE">
            <a-radio-button :value="'text'">text</a-radio-button>
            <a-radio-button :value="'textarea'">textarea</a-radio-button>
            <a-radio-button :value="'number'">number</a-radio-button>
            <a-radio-button :value="'password'">password</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputDisabledE">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputClearableE">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputReadonlyE">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputSizeE">
            <a-radio-button :value="'medium'">medium</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
            <a-radio-button :value="'mini'">mini</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框值最大长度</span>
            <a-input-number style="width: 100px" v-model="inputMaxlengthE" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框值最小长度</span>
            <a-input-number style="width: 100px" v-model="inputMinlengthE" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">前缀图标</span>
            <a-input style="width: 100px" v-model="inputPrefixIconE" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">后缀图标</span>
            <a-input style="width: 100px" v-model="inputSuffixIconE" />
          </div>
          <a-radio-group
            v-show="inputTypeE === 'text' || inputTypeE === 'textarea'"
            v-model="inputShowWordLimitE"
          >
            <a-radio-button :value="true">显示输入字数统计</a-radio-button>
            <a-radio-button :value="false">隐藏输入字数统计</a-radio-button>
          </a-radio-group>
          <a-radio-group
            v-show="inputTypeE === 'textarea'"
            v-model="inputResizeE"
          >
            <a-radio-button :value="'none'">none</a-radio-button>
            <a-radio-button :value="'both'">both</a-radio-button>
            <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
            <a-radio-button :value="'vertical'">vertical</a-radio-button>
          </a-radio-group>
          <div v-show="inputTypeE === 'number'" class="number-set">
            <span style="margin-right: 5px">设置最大数</span>
            <a-input-number style="width: 100px" v-model="inputMaxE" />
          </div>
          <div v-show="inputTypeE === 'number'" class="number-set">
            <span style="margin-right: 5px">设置最小数</span>
            <a-input-number style="width: 100px" v-model="inputMinE" />
          </div>
          <div v-show="inputTypeE === 'number'" class="number-set">
            <span style="margin-right: 5px">设置改变步数</span>
            <a-input-number style="width: 100px" v-model="inputStepE" />
          </div>
          <a-radio-group
            v-show="inputTypeE === 'password'"
            v-model="inputShowPasswordE"
          >
            <a-radio-button :value="true">显示切换密码图标</a-radio-button>
            <a-radio-button :value="false">隐藏切换密码图标</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <el-input
            style="width: 200px"
            v-model="inputValueE"
            :type="inputTypeE"
            :disabled="inputDisabledE"
            :clearable="inputClearableE"
            :readonly="inputReadonlyE"
            :size="inputSizeE"
            :maxlength="inputMaxlengthE"
            :minlength="inputMinlengthE"
            :prefix-icon="inputPrefixIconE"
            :suffix-icon="inputSuffixIconE"
            :show-word-limit="inputShowWordLimitE"
            :resize="inputResizeE"
            :max="inputMaxE"
            :min="inputMinE"
            :step="inputStepE"
            :show-password="inputShowPasswordE"
          >
          </el-input>
        </div>
      </div>
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="inputTypeE">
            <a-radio-button :value="'text'">text</a-radio-button>
            <a-radio-button :value="'textarea'">textarea</a-radio-button>
            <a-radio-button :value="'number'">number</a-radio-button>
            <a-radio-button :value="'password'">password</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputDisabledE">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputClearableE">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputReadonlyE">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="inputSizeE">
            <a-radio-button :value="'medium'">medium</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
            <a-radio-button :value="'mini'">mini</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框值最大长度</span>
            <a-input-number style="width: 100px" v-model="inputMaxlengthE" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框值最小长度</span>
            <a-input-number style="width: 100px" v-model="inputMinlengthE" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">前缀图标</span>
            <a-input style="width: 100px" v-model="inputPrefixIconE" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">后缀图标</span>
            <a-input style="width: 100px" v-model="inputSuffixIconE" />
          </div>
          <a-radio-group
            v-show="inputTypeE === 'text' || inputTypeE === 'textarea'"
            v-model="inputShowWordLimitE"
          >
            <a-radio-button :value="true">显示输入字数统计</a-radio-button>
            <a-radio-button :value="false">隐藏输入字数统计</a-radio-button>
          </a-radio-group>
          <a-radio-group
            v-show="inputTypeE === 'textarea'"
            v-model="inputResizeE"
          >
            <a-radio-button :value="'none'">none</a-radio-button>
            <a-radio-button :value="'both'">both</a-radio-button>
            <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
            <a-radio-button :value="'vertical'">vertical</a-radio-button>
          </a-radio-group>
          <div v-show="inputTypeE === 'number'" class="number-set">
            <span style="margin-right: 5px">设置最大数</span>
            <a-input-number style="width: 100px" v-model="inputMaxE" />
          </div>
          <div v-show="inputTypeE === 'number'" class="number-set">
            <span style="margin-right: 5px">设置最小数</span>
            <a-input-number style="width: 100px" v-model="inputMinE" />
          </div>
          <div v-show="inputTypeE === 'number'" class="number-set">
            <span style="margin-right: 5px">设置改变步数</span>
            <a-input-number style="width: 100px" v-model="inputStepE" />
          </div>
          <a-radio-group
            v-show="inputTypeE === 'password'"
            v-model="inputShowPasswordE"
          >
            <a-radio-button :value="true">显示切换密码图标</a-radio-button>
            <a-radio-button :value="false">隐藏切换密码图标</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <el-autocomplete
            v-model="inputValueE"
            :disabled="inputDisabledE"
            :prefix-icon="inputPrefixIconE"
            :suffix-icon="inputSuffixIconE"
            :placement="autocompletePlacementE"
            :hide-loading="autocompleteHideLoadingE"
          >
          </el-autocomplete>
        </div>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 输入框"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 输入框"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      inputDisabled: false,
      inputAllowClear: false,
      inputSize: "default",
      inputMaxLength: 10,
      inputAddonBefore: "",
      inputAddonAfter: "",
      inputPrefix: null,
      inputSuffix: null,
      textareaAutosize: false,
      inputSearchLoading: false,
      inputSearchEnterButton: true,
      inputPasswordVisibilityToggle: true,
      inputNumberMin: 1,
      inputNumberMax: 100,
      inputNumberPrecision: 2,
      inputNumberStep: 2,
      inputNumberDecimalSeparator: ".",
      mentionsPlacement: "top",
      mentionsPrefix: "@",
      mentionsSplit: ";",
      autoCompleteDataSource: [],
      // ElementUI
      inputValueE: null,
      inputTypeE: "text",
      inputDisabledE: false,
      inputClearableE: false,
      inputReadonlyE: false,
      inputSizeE: "small",
      inputMaxlengthE: 10,
      inputMinlengthE: 0,
      inputPrefixIconE: null,
      inputSuffixIconE: null,
      inputShowWordLimitE: false,
      inputResizeE: "none",
      inputMaxE: 100,
      inputMinE: 0,
      inputStepE: 1,
      inputShowPasswordE: false,
      autocompletePlacementE: "",
      autocompleteHideLoadingE: false,
      // AtUI
      // ViewUI
    };
  },
  methods: {
    autoCompleteSearch(text) {
      this.autoCompleteDataSource = !text
        ? []
        : [text, text.repeat(2), text.repeat(3)];
    },
  },
};
</script>