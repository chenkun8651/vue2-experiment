<template>
  <!-- 输入框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 输入框">
      <!-- 通用API -->
      <div class="card-item">
        <h3>通用API</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.inputDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.inputSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.inputAllowClear">
            <a-radio-button :value="true">显示清除按钮</a-radio-button>
            <a-radio-button :value="false">隐藏清除按钮</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框最大长度</span>
            <a-input-number
              style="width: 100px"
              v-model="AntDesignVue.inputMaxLength"
            />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置前置标签</span>
            <a-input
              style="width: 100px"
              v-model="AntDesignVue.inputAddonBefore"
            />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置后置标签</span>
            <a-input
              style="width: 100px"
              v-model="AntDesignVue.inputAddonAfter"
            />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置前缀图标</span>
            <a-input style="width: 100px" v-model="AntDesignVue.inputPrefix" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置后缀图标</span>
            <a-input style="width: 100px" v-model="AntDesignVue.inputSuffix" />
          </div>
        </div>
      </div>
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div>
          <a-input
            style="width: 200px"
            :disabled="AntDesignVue.inputDisabled"
            :size="AntDesignVue.inputSize"
            :allow-clear="AntDesignVue.inputAllowClear"
            :max-length="AntDesignVue.inputMaxLength"
            :addon-before="AntDesignVue.inputAddonBefore"
            :addon-after="AntDesignVue.inputAddonAfter"
          >
            <a-icon
              v-if="AntDesignVue.inputPrefix"
              slot="prefix"
              :type="AntDesignVue.inputPrefix"
            >
            </a-icon>
            <a-icon
              v-if="AntDesignVue.inputSuffix"
              slot="suffix"
              :type="AntDesignVue.inputSuffix"
            >
            </a-icon>
          </a-input>
        </div>
      </div>
      <!-- 文本域输入框 -->
      <div class="card-item">
        <h3>文本域输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.textareaAutosize">
            <a-radio-button :value="true">开启内容自适应高度</a-radio-button>
            <a-radio-button :value="false">关闭内容自适应高度</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-textarea
            style="width: 200px"
            :disabled="AntDesignVue.inputDisabled"
            :allow-clear="AntDesignVue.inputAllowClear"
            :max-length="AntDesignVue.inputMaxLength"
            :auto-size="AntDesignVue.textareaAutosize"
          >
          </a-textarea>
        </div>
      </div>
      <!-- 密码输入框 -->
      <div class="card-item">
        <h3>密码输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.inputPasswordVisibilityToggle">
            <a-radio-button :value="true">显示切换密码图标</a-radio-button>
            <a-radio-button :value="false">隐藏切换密码图标</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-input-password
            style="width: 200px"
            :disabled="AntDesignVue.inputDisabled"
            :size="AntDesignVue.inputSize"
            :max-length="AntDesignVue.inputMaxLength"
            :addon-before="AntDesignVue.inputAddonBefore"
            :addon-after="AntDesignVue.inputAddonAfter"
            :visibilityToggle="AntDesignVue.inputPasswordVisibilityToggle"
          >
            <a-icon
              v-if="AntDesignVue.inputPrefix"
              slot="prefix"
              :type="AntDesignVue.inputPrefix"
            >
            </a-icon>
            <a-icon
              v-if="AntDesignVue.inputSuffix"
              slot="suffix"
              :type="AntDesignVue.inputSuffix"
            >
            </a-icon>
          </a-input-password>
        </div>
      </div>
      <!-- 数字输入框 -->
      <div class="card-item">
        <h3>数字输入框</h3>
        <div class="radio-box">
          <div class="number-set">
            <span style="margin-right: 5px">设置最小数字</span>
            <a-input-number
              style="width: 100px"
              v-model="AntDesignVue.inputNumberMin"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置最大数字</span>
            <a-input-number
              style="width: 100px"
              v-model="AntDesignVue.inputNumberMax"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置数字精度</span>
            <a-input-number
              style="width: 100px"
              v-model="AntDesignVue.inputNumberPrecision"
              :max="10"
              :min="0"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置数字步数</span>
            <a-input-number
              style="width: 100px"
              v-model="AntDesignVue.inputNumberStep"
              :min="0"
            />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置小数点样式</span>
            <a-input
              style="width: 100px"
              v-model="AntDesignVue.inputNumberDecimalSeparator"
            />
          </div>
        </div>
        <div>
          <a-input-number
            style="width: 200px"
            :disabled="AntDesignVue.inputDisabled"
            :size="AntDesignVue.inputSize"
            :min="AntDesignVue.inputNumberMin"
            :max="AntDesignVue.inputNumberMax"
            :precision="AntDesignVue.inputNumberPrecision"
            :step="AntDesignVue.inputNumberStep"
            :decimal-separator="AntDesignVue.inputNumberDecimalSeparator"
          >
          </a-input-number>
        </div>
      </div>
      <!-- 搜索输入框 -->
      <div class="card-item">
        <h3>搜索输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.inputSearchLoading">
            <a-radio-button :value="true">加载</a-radio-button>
            <a-radio-button :value="false">完成</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AntDesignVue.inputSearchEnterButton">
            <a-radio-button :value="true">显示确认按钮</a-radio-button>
            <a-radio-button :value="false">隐藏确认按钮</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-input-search
            style="width: 200px"
            :disabled="AntDesignVue.inputDisabled"
            :size="AntDesignVue.inputSize"
            :allow-clear="AntDesignVue.inputAllowClear"
            :max-length="AntDesignVue.inputMaxLength"
            :addon-before="AntDesignVue.inputAddonBefore"
            :loading="AntDesignVue.inputSearchLoading"
            :enter-button="AntDesignVue.inputSearchEnterButton"
          >
            <a-icon
              v-if="AntDesignVue.inputPrefix"
              slot="prefix"
              :type="AntDesignVue.inputPrefix"
            >
            </a-icon>
            <a-icon
              v-if="AntDesignVue.inputSuffix"
              slot="suffix"
              :type="AntDesignVue.inputSuffix"
            >
            </a-icon>
          </a-input-search>
        </div>
      </div>
      <!-- 提及输入框 -->
      <div class="card-item">
        <h3>提及输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AntDesignVue.mentionsPlacement">
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
          </a-radio-group>
          <div class="string-set">
            <span style="margin-right: 5px">设置触发关键字</span>
            <a-input
              style="width: 100px"
              v-model="AntDesignVue.mentionsPrefix"
            />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置选中项分隔符</span>
            <a-input
              style="width: 100px"
              v-model="AntDesignVue.mentionsSplit"
            />
          </div>
        </div>
        <div>
          <a-mentions
            style="width: 200px"
            :disabled="AntDesignVue.inputDisabled"
            :placement="AntDesignVue.mentionsPlacement"
            :prefix="AntDesignVue.mentionsPrefix"
            :split="AntDesignVue.mentionsSplit"
          >
            <a-mentions-option value="太阳">太阳</a-mentions-option>
            <a-mentions-option value="月亮">月亮</a-mentions-option>
            <a-mentions-option value="火星">火星</a-mentions-option>
          </a-mentions>
        </div>
      </div>
      <!-- 联想输入框 -->
      <div class="card-item">
        <h3>联想输入框</h3>
        <div>
          <a-auto-complete
            style="width: 200px"
            :disabled="AntDesignVue.inputDisabled"
            :allow-clear="AntDesignVue.inputAllowClear"
            :data-source="AntDesignVue.autoCompleteDataSource"
            @search="autoCompleteSearch"
          >
          </a-auto-complete>
        </div>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 输入框">
      <!-- 通用API -->
      <div class="card-item">
        <h3>通用API</h3>
        <div class="radio-box">
          <a-radio-group v-model="ElementUI.inputDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputClearable">
            <a-radio-button :value="true">开启清除</a-radio-button>
            <a-radio-button :value="false">关闭清除</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputReadonly">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputSize">
            <a-radio-button :value="'medium'">medium</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
            <a-radio-button :value="'mini'">mini</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置最小数字</span>
            <a-input-number style="width: 100px" v-model="ElementUI.inputMin" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置最大数字</span>
            <a-input-number style="width: 100px" v-model="ElementUI.inputMax" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置数字精度</span>
            <a-input-number
              style="width: 100px"
              v-model="ElementUI.inputNumberPrecision"
              :max="10"
              :min="0"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置数字步数</span>
            <a-input-number
              style="width: 100px"
              v-model="ElementUI.inputStep"
            />
          </div>
        </div>
      </div>
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ElementUI.inputType">
            <a-radio-button :value="'text'">text</a-radio-button>
            <a-radio-button :value="'textarea'">textarea</a-radio-button>
            <a-radio-button :value="'number'">number</a-radio-button>
            <a-radio-button :value="'password'">password</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputResize">
            <a-radio-button :value="'none'">none</a-radio-button>
            <a-radio-button :value="'both'">both</a-radio-button>
            <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
            <a-radio-button :value="'vertical'">vertical</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputShowWordLimit">
            <a-radio-button :value="true">显示字数统计</a-radio-button>
            <a-radio-button :value="false">隐藏字数统计</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputShowPassword">
            <a-radio-button :value="true">显示切换密码图标</a-radio-button>
            <a-radio-button :value="false">隐藏切换密码图标</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框最大长度</span>
            <a-input-number
              style="width: 100px"
              v-model="ElementUI.inputMaxlength"
            />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置前缀图标</span>
            <a-input style="width: 100px" v-model="ElementUI.inputPrefixIcon" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置后缀图标</span>
            <a-input style="width: 100px" v-model="ElementUI.inputSuffixIcon" />
          </div>
        </div>
        <div>
          <el-input
            style="width: 200px"
            v-model="ElementUI.inputValue"
            :disabled="ElementUI.inputDisabled"
            :clearable="ElementUI.inputClearable"
            :readonly="ElementUI.inputReadonly"
            :size="ElementUI.inputSize"
            :min="ElementUI.inputMin"
            :max="ElementUI.inputMax"
            :step="ElementUI.inputStep"
            :type="ElementUI.inputType"
            :resize="ElementUI.inputResize"
            :show-word-limit="ElementUI.inputShowWordLimit"
            :show-password="ElementUI.inputShowPassword"
            :maxlength="ElementUI.inputMaxlength"
            :prefix-icon="ElementUI.inputPrefixIcon"
            :suffix-icon="ElementUI.inputSuffixIcon"
          >
          </el-input>
        </div>
      </div>
      <!-- 数字输入框 -->
      <div class="card-item">
        <h3>数字输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ElementUI.inputNumberControls">
            <a-radio-button :value="true">显示控制按钮</a-radio-button>
            <a-radio-button :value="false">隐藏控制按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputNumberControlsPosition">
            <a-radio-button :value="null">default</a-radio-button>
            <a-radio-button :value="'right'">right</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.inputNumberStepStrictly">
            <a-radio-button :value="true">开启只能输入step倍数</a-radio-button>
            <a-radio-button :value="false">关闭只能输入step倍数</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <el-input-number
            v-model="ElementUI.inputNumber"
            :min="ElementUI.inputMin"
            :max="ElementUI.inputMax"
            :step="ElementUI.inputStep"
            :controls="ElementUI.inputNumberControls"
            :controls-position="ElementUI.inputNumberControlsPosition"
            :step-strictly="ElementUI.inputNumberStepStrictly"
            :precision="ElementUI.inputNumberPrecision"
          >
          </el-input-number>
        </div>
      </div>
      <!-- 联想输入框 -->
      <div class="card-item">
        <h3>联想输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ElementUI.autocompletePlacement">
            <a-radio-button :value="'top-start'">top-start</a-radio-button>
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'top-end'">top-end</a-radio-button>
            <a-radio-button :value="'bottom-start'">
              bottom-start
            </a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
            <a-radio-button :value="'bottom-end'">bottom-end</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ElementUI.autocompleteHideLoading">
            <a-radio-button :value="false">开启加载动画</a-radio-button>
            <a-radio-button :value="true">关闭加载动画</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <el-autocomplete
            v-model="ElementUI.inputValue"
            :disabled="ElementUI.inputDisabled"
            :clearable="ElementUI.inputClearable"
            :readonly="ElementUI.inputReadonly"
            :size="ElementUI.inputSize"
            :prefix-icon="ElementUI.inputPrefixIcon"
            :suffix-icon="ElementUI.inputSuffixIcon"
            :placement="ElementUI.autocompletePlacement"
            :hide-loading="ElementUI.autocompleteHideLoading"
            :fetch-suggestions="autoCompleteSearch2"
          >
          </el-autocomplete>
        </div>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 输入框">
      <!-- 通用API -->
      <div class="card-item">
        <h3>通用API</h3>
        <div class="radio-box">
          <a-radio-group v-model="AtUI.inputDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.inputReadonly">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.inputSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'normal'">normal</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置最小数字</span>
            <a-input-number style="width: 100px" v-model="AtUI.inputMin" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置最大数字</span>
            <a-input-number style="width: 100px" v-model="AtUI.inputMax" />
          </div>
        </div>
      </div>
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AtUI.inputType">
            <a-radio-button :value="'text'">text</a-radio-button>
            <a-radio-button :value="'number'">number</a-radio-button>
            <a-radio-button :value="'password'">password</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.inputStatus">
            <a-radio-button :value="null">default</a-radio-button>
            <a-radio-button :value="'success'">success</a-radio-button>
            <a-radio-button :value="'error'">error</a-radio-button>
            <a-radio-button :value="'warning'">warning</a-radio-button>
            <a-radio-button :value="'info'">info</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框最大长度</span>
            <a-input-number
              style="width: 100px"
              v-model="AtUI.inputMaxlength"
            />
          </div>
        </div>
        <div>
          <at-input
            style="width: 200px"
            v-model="AtUI.inputValue"
            :disabled="AtUI.inputDisabled"
            :readonly="AtUI.inputReadonly"
            :size="AtUI.inputSize"
            :min="AtUI.inputMin"
            :max="AtUI.inputMax"
            :type="AtUI.inputType"
            :status="AtUI.inputStatus"
            :maxlength="AtUI.inputMaxlength"
          >
          </at-input>
        </div>
      </div>
      <!-- 数字输入框 -->
      <div class="card-item">
        <h3>数字输入框</h3>
        <div class="radio-box">
          <div class="number-set">
            <span style="margin-right: 5px">设置数字精度</span>
            <a-input-number
              style="width: 100px"
              v-model="AtUI.inputStep"
              :min="1"
              :max="10"
            />
          </div>
        </div>
        <div>
          <at-input-number
            style="width: 200px"
            v-model="AtUI.inputNumber"
            :disabled="AtUI.inputDisabled"
            :readonly="AtUI.inputReadonly"
            :size="AtUI.inputSize"
            :min="AtUI.inputMin"
            :max="AtUI.inputMax"
            :step="AtUI.inputStep"
          >
          </at-input-number>
        </div>
      </div>
      <!-- 文本域输入框 -->
      <div class="card-item">
        <h3>文本域输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="AtUI.inputAutosize">
            <a-radio-button :value="true">自动调整输入框高度</a-radio-button>
            <a-radio-button :value="false">不自动调整输入框高度</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="AtUI.inputResize">
            <a-radio-button :value="'none'">none</a-radio-button>
            <a-radio-button :value="'both'">both</a-radio-button>
            <a-radio-button :value="'vertical'">vertical</a-radio-button>
            <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <at-textarea
            style="width: 200px"
            v-model="AtUI.inputValue"
            :disabled="AtUI.inputDisabled"
            :readonly="AtUI.inputReadonly"
            :autosize="AtUI.inputAutosize"
            :resize="AtUI.inputResize"
          >
          </at-textarea>
        </div>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 输入框">
      <!-- 通用API -->
      <div class="card-item">
        <h3>通用API</h3>
        <div class="radio-box">
          <a-radio-group v-model="ViewUI.inputDisabled">
            <a-radio-button :value="true">禁用</a-radio-button>
            <a-radio-button :value="false">启用</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputReadonly">
            <a-radio-button :value="true">开启只读</a-radio-button>
            <a-radio-button :value="false">关闭只读</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputClearable">
            <a-radio-button :value="true">显示清除按钮</a-radio-button>
            <a-radio-button :value="false">隐藏清除按钮</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
          </a-radio-group>
        </div>
      </div>
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ViewUI.inputType">
            <a-radio-button :value="'text'">text</a-radio-button>
            <a-radio-button :value="'textarea'">textarea</a-radio-button>
            <a-radio-button :value="'number'">number</a-radio-button>
            <a-radio-button :value="'password'">password</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputBorder">
            <a-radio-button :value="true">显示边框</a-radio-button>
            <a-radio-button :value="false">隐藏边框</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputShowWordLimit">
            <a-radio-button :value="true">显示输入字数统计</a-radio-button>
            <a-radio-button :value="false">隐藏输入字数统计</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputAutosize">
            <a-radio-button :value="true">开启内容自适应高度</a-radio-button>
            <a-radio-button :value="false">关闭内容自适应高度</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputPassword">
            <a-radio-button :value="true">显示切换密码图标</a-radio-button>
            <a-radio-button :value="false">隐藏切换密码图标</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputSearch">
            <a-radio-button :value="true">显示搜索型输入框</a-radio-button>
            <a-radio-button :value="false">隐藏搜索型输入框</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputEnterButton">
            <a-radio-button :value="true">
              显示搜索型的确认按钮
            </a-radio-button>
            <a-radio-button :value="false">隐藏搜索型的确认按钮</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置输入框最大长度</span>
            <a-input-number
              style="width: 100px"
              v-model="ViewUI.inputMaxlength"
            />
          </div>
        </div>
        <div>
          <Input
            :disabled="ViewUI.inputDisabled"
            :clearable="ViewUI.inputClearable"
            :readonly="ViewUI.inputReadonly"
            :size="ViewUI.inputSize"
            style="width: 200px"
            v-model="ViewUI.inputValue"
            :type="ViewUI.inputType"
            :border="ViewUI.inputBorder"
            :show-word-limit="ViewUI.inputShowWordLimit"
            :autosize="ViewUI.inputAutosize"
            :password="ViewUI.inputPassword"
            :search="ViewUI.inputSearch"
            :enter-button="ViewUI.inputEnterButton"
            :maxlength="ViewUI.inputMaxlength"
          />
        </div>
      </div>
      <!-- 数字输入框 -->
      <div class="card-item">
        <h3>数字输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ViewUI.inputNumberEditable">
            <a-radio-button :value="true">开启编辑</a-radio-button>
            <a-radio-button :value="false">关闭编辑</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="ViewUI.inputNumberControlsOutside">
            <a-radio-button :value="true">控制按钮位于两侧</a-radio-button>
            <a-radio-button :value="false">控制按钮位于右侧</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置最小数字</span>
            <a-input-number
              style="width: 100px"
              v-model="ViewUI.inputNumberMin"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置最大数字</span>
            <a-input-number
              style="width: 100px"
              v-model="ViewUI.inputNumberMax"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置数字步数</span>
            <a-input-number
              style="width: 100px"
              v-model="ViewUI.inputNumStep"
            />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置数字精度</span>
            <a-input-number
              style="width: 100px"
              v-model="ViewUI.inputNumPrecision"
              :min="1"
              :max="10"
            />
          </div>
        </div>
        <div>
          <InputNumber
            :disabled="ViewUI.inputDisabled"
            :readonly="ViewUI.inputReadonly"
            :size="ViewUI.inputSize"
            style="width: 200px"
            v-model="ViewUI.inputNumber"
            :editable="ViewUI.inputNumberEditable"
            :controls-outside="ViewUI.inputNumberControlsOutside"
            :min="ViewUI.inputNumberMin"
            :max="ViewUI.inputNumberMax"
            :step="ViewUI.inputNumStep"
            :precision="ViewUI.inputNumPrecision"
          >
          </InputNumber>
        </div>
      </div>
      <!-- 联想输入框 -->
      <div class="card-item">
        <h3>联想输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="ViewUI.autoCompletePlacement">
            <a-radio-button :value="'top-start'">top-start</a-radio-button>
            <a-radio-button :value="'top'">top</a-radio-button>
            <a-radio-button :value="'top-end'">top-end</a-radio-button>
            <a-radio-button :value="'bottom-start'">
              bottom-start
            </a-radio-button>
            <a-radio-button :value="'bottom'">bottom</a-radio-button>
            <a-radio-button :value="'bottom-end'">bottom-end</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <AutoComplete
            :disabled="ViewUI.inputDisabled"
            :clearable="ViewUI.inputClearable"
            :size="ViewUI.inputSize"
            style="width: 200px"
            v-model="ViewUI.autoComplete"
            :data="ViewUI.autoCompleteData"
            :placement="ViewUI.autoCompletePlacement"
            @on-search="autoCompleteSearch3"
          >
          </AutoComplete>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        inputDisabled: false,
        inputSize: "default",
        inputAllowClear: false,
        inputMaxLength: 10,
        inputAddonBefore: "",
        inputAddonAfter: "",
        inputPrefix: null,
        inputSuffix: null,
        textareaAutosize: false,
        inputPasswordVisibilityToggle: true,
        inputNumberMin: 1,
        inputNumberMax: 100,
        inputNumberPrecision: 2,
        inputNumberStep: 1,
        inputNumberDecimalSeparator: ".",
        inputSearchLoading: false,
        inputSearchEnterButton: true,
        mentionsPlacement: "top",
        mentionsPrefix: "@",
        mentionsSplit: ";",
        autoCompleteDataSource: [],
      },
      ElementUI: {
        inputValue: null,
        inputNumber: 0,
        inputDisabled: false,
        inputClearable: false,
        inputReadonly: false,
        inputSize: "small",
        inputMin: 1,
        inputMax: 100,
        inputStep: 1,
        inputType: "text",
        inputResize: "none",
        inputShowWordLimit: false,
        inputShowPassword: false,
        inputMaxlength: 10,
        inputPrefixIcon: null,
        inputSuffixIcon: null,
        inputNumberControls: true,
        inputNumberControlsPosition: null,
        inputNumberStepStrictly: false,
        inputNumberPrecision: 2,
        autocompletePlacement: "top",
        autocompleteHideLoading: false,
        autoCompleteDataSource: [
          { value: "三全鲜食", address: "长宁区新渔路144号" },
          { value: "首尔炸鸡", address: "上海市长宁区淞虹路61号" },
          { value: "新旺角茶餐厅", address: "上海市普陀区创邑金沙谷6号楼113" },
        ],
        autocompleteTimeout: null,
      },
      AtUI: {
        inputValue: null,
        inputNumber: 0,
        inputDisabled: false,
        inputReadonly: false,
        inputSize: "normal",
        inputMin: 1,
        inputMax: 100,
        inputType: "text",
        inputStatus: null,
        inputMaxlength: 10,
        inputStep: 1,
        inputAutosize: false,
        inputResize: "vertical",
      },
      ViewUI: {
        inputDisabled: false,
        inputClearable: false,
        inputReadonly: false,
        inputSize: "default",
        inputValue: null,
        inputType: "text",
        inputBorder: true,
        inputShowWordLimit: false,
        inputAutosize: false,
        inputPassword: false,
        inputSearch: false,
        inputEnterButton: false,
        inputMaxlength: 10,
        inputNumber: 0,
        inputNumberEditable: false,
        inputNumberControlsOutside: false,
        inputNumberMin: 1,
        inputNumberMax: 100,
        inputNumStep: 1,
        inputNumPrecision: 2,
        autoComplete: null,
        autoCompleteData: [],
        autoCompletePlacement: "top",
      },
    };
  },
  methods: {
    autoCompleteSearch(text) {
      this.AntDesignVue.autoCompleteDataSource = !text
        ? []
        : [text, text.repeat(2), text.repeat(3)];
    },
    autoCompleteSearch2(text, cb) {
      let results = text
        ? this.ElementUI.autoCompleteDataSource.filter(this.stateFilter(text))
        : this.ElementUI.autoCompleteDataSource;
      clearTimeout(this.ElementUI.autocompleteTimeout);
      this.ElementUI.autocompleteTimeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    stateFilter(text) {
      return (state) => {
        return state.value.toLowerCase().indexOf(text.toLowerCase()) === 0;
      };
    },
    autoCompleteSearch3(text) {
      this.ViewUI.autoCompleteData = !text
        ? []
        : [text, text.repeat(2), text.repeat(3)];
    },
  },
};
</script>