<template>
  <!-- 输入框 -->
  <div class="flex" ref="box">
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 输入框">
        <!-- 通用API -->
        <div id="1-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用输入框</span>
              <a-switch v-model="AntDesignVue.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示清除按钮</span>
              <a-switch v-model="AntDesignVue.allowClear" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框大小</span>
              <a-select class="w-40" v-model="AntDesignVue.size">
                <a-select-option :value="'large'">large</a-select-option>
                <a-select-option :value="'default'">default</a-select-option>
                <a-select-option :value="'small'">small</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框内容最大长度</span>
              <a-input-number class="w-24" v-model="AntDesignVue.maxLength" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框前置标签</span>
              <a-input class="w-24" v-model="AntDesignVue.addonBefore" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框后置标签</span>
              <a-input class="w-24" v-model="AntDesignVue.addonAfter" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框前缀图标</span>
              <a-input class="w-24" v-model="AntDesignVue.prefix" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框后缀图标</span>
              <a-input class="w-24" v-model="AntDesignVue.suffix" />
            </div>
          </div>
        </div>
        <!-- 标准输入框 -->
        <div id="1-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准输入框</h3>
          <div>
            <a-input
              class="w-48"
              :disabled="AntDesignVue.disabled"
              :size="AntDesignVue.size"
              :allow-clear="AntDesignVue.allowClear"
              :max-length="AntDesignVue.maxLength"
              :addon-before="AntDesignVue.addonBefore"
              :addon-after="AntDesignVue.addonAfter"
            >
              <a-icon
                v-if="AntDesignVue.prefix"
                slot="prefix"
                :type="AntDesignVue.prefix"
              >
              </a-icon>
              <a-icon
                v-if="AntDesignVue.suffix"
                slot="suffix"
                :type="AntDesignVue.suffix"
              >
              </a-icon>
            </a-input>
          </div>
        </div>
        <!-- 文本域输入框 -->
        <div id="1-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>文本域输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启内容自适应高度</span>
              <a-switch v-model="AntDesignVue.autosize" />
            </div>
          </div>
          <div>
            <a-textarea
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              :max-length="AntDesignVue.maxLength"
              class="w-48"
              :auto-size="AntDesignVue.autosize"
            >
            </a-textarea>
          </div>
        </div>
        <!-- 密码输入框 -->
        <div id="1-4" class="mx-5 mt-3 pb-5 border-b">
          <h3>密码输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示查看密码按钮</span>
              <a-switch v-model="AntDesignVue.visibilityToggle" />
            </div>
          </div>
          <div>
            <a-input-password
              :disabled="AntDesignVue.disabled"
              :size="AntDesignVue.size"
              :max-length="AntDesignVue.maxLength"
              :addon-before="AntDesignVue.addonBefore"
              :addon-after="AntDesignVue.addonAfter"
              class="w-48"
              :visibilityToggle="AntDesignVue.visibilityToggle"
            >
              <a-icon
                v-if="AntDesignVue.prefix"
                slot="prefix"
                :type="AntDesignVue.prefix"
              >
              </a-icon>
              <a-icon
                v-if="AntDesignVue.suffix"
                slot="suffix"
                :type="AntDesignVue.suffix"
              >
              </a-icon>
            </a-input-password>
          </div>
        </div>
        <!-- 数字输入框 -->
        <div id="1-5" class="mx-5 mt-3 pb-5 border-b">
          <h3>数字输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置最小数字</span>
              <a-input-number class="w-24" v-model="AntDesignVue.min" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大数字</span>
              <a-input-number class="w-24" v-model="AntDesignVue.max" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字精度</span>
              <a-input-number class="w-24" v-model="AntDesignVue.precision" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字步数</span>
              <a-input-number class="w-24" v-model="AntDesignVue.step" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置小数点样式</span>
              <a-input class="w-24" v-model="AntDesignVue.decimalSeparator" />
            </div>
          </div>
          <div>
            <a-input-number
              :disabled="AntDesignVue.disabled"
              :size="AntDesignVue.size"
              class="w-48"
              :min="AntDesignVue.min"
              :max="AntDesignVue.max"
              :precision="AntDesignVue.precision"
              :step="AntDesignVue.step"
              :decimal-separator="AntDesignVue.decimalSeparator"
            >
            </a-input-number>
          </div>
        </div>
        <!-- 搜索输入框 -->
        <div id="1-6" class="mx-5 mt-3 pb-5 border-b">
          <h3>搜索输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否正在加载</span>
              <a-switch v-model="AntDesignVue.loading" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示搜索按钮</span>
              <a-switch v-model="AntDesignVue.enterButton" />
            </div>
          </div>
          <div>
            <a-input-search
              :disabled="AntDesignVue.disabled"
              :size="AntDesignVue.size"
              :allow-clear="AntDesignVue.allowClear"
              :max-length="AntDesignVue.maxLength"
              :addon-before="AntDesignVue.addonBefore"
              class="w-48"
              :loading="AntDesignVue.loading"
              :enter-button="AntDesignVue.enterButton"
            >
              <a-icon
                v-if="AntDesignVue.prefix"
                slot="prefix"
                :type="AntDesignVue.prefix"
              >
              </a-icon>
              <a-icon
                v-if="AntDesignVue.suffix"
                slot="suffix"
                :type="AntDesignVue.suffix"
              >
              </a-icon>
            </a-input-search>
          </div>
        </div>
        <!-- 提及输入框 -->
        <div id="1-7" class="mx-5 mt-3 pb-5 border-b">
          <h3>提及输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框选项弹出位置</span>
              <a-select class="w-40" v-model="AntDesignVue.placement">
                <a-select-option :value="'top'">top</a-select-option>
                <a-select-option :value="'bottom'">bottom</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置触发选项关键字</span>
              <a-input class="w-24" v-model="AntDesignVue.prefix1" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置选项分隔符</span>
              <a-input class="w-24" v-model="AntDesignVue.split" />
            </div>
          </div>
          <div>
            <a-mentions
              :disabled="AntDesignVue.disabled"
              class="w-48"
              :placement="AntDesignVue.placement"
              :prefix="AntDesignVue.prefix1"
              :split="AntDesignVue.split"
            >
              <a-mentions-option value="太阳">太阳</a-mentions-option>
              <a-mentions-option value="月亮">月亮</a-mentions-option>
              <a-mentions-option value="火星">火星</a-mentions-option>
            </a-mentions>
          </div>
        </div>
        <!-- 联想输入框 -->
        <div id="1-8" class="mx-5 mt-3 pb-5 border-b">
          <h3>联想输入框</h3>
          <div>
            <a-auto-complete
              :disabled="AntDesignVue.disabled"
              :allow-clear="AntDesignVue.allowClear"
              class="w-48"
              :data-source="AntDesignVue.dataSource"
              @search="autoCompleteSearch"
            >
            </a-auto-complete>
          </div>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 输入框">
        <!-- 通用API -->
        <div id="2-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
            <div class="my-2 mr-5">
              <span class="mr-2">设置最小数字</span>
              <a-input-number class="w-24" v-model="ElementUI.inputMin" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大数字</span>
              <a-input-number class="w-24" v-model="ElementUI.inputMax" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字精度</span>
              <a-input-number
                class="w-24"
                v-model="ElementUI.inputNumberPrecision"
                :max="10"
                :min="0"
              />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字步数</span>
              <a-input-number class="w-24" v-model="ElementUI.inputStep" />
            </div>
          </div>
        </div>
        <!-- 标准输入框 -->
        <div id="2-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框最大长度</span>
              <a-input-number class="w-24" v-model="ElementUI.inputMaxlength" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置前缀图标</span>
              <a-input class="w-24" v-model="ElementUI.inputPrefixIcon" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置后缀图标</span>
              <a-input class="w-24" v-model="ElementUI.inputSuffixIcon" />
            </div>
          </div>
          <div>
            <el-input
              class="w-48"
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
        <div id="2-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>数字输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <a-radio-group v-model="ElementUI.inputNumberControls">
              <a-radio-button :value="true">显示控制按钮</a-radio-button>
              <a-radio-button :value="false">隐藏控制按钮</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="ElementUI.inputNumberControlsPosition">
              <a-radio-button :value="null">default</a-radio-button>
              <a-radio-button :value="'right'">right</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="ElementUI.inputNumberStepStrictly">
              <a-radio-button :value="true"
                >开启只能输入step倍数</a-radio-button
              >
              <a-radio-button :value="false"
                >关闭只能输入step倍数</a-radio-button
              >
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
        <div id="2-4" class="mx-5 mt-3 pb-5 border-b">
          <h3>联想输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
      <a-card id="3" class="my-5" title="AtUI 输入框">
        <!-- 通用API -->
        <div id="3-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
            <div class="my-2 mr-5">
              <span class="mr-2">设置最小数字</span>
              <a-input-number class="w-24" v-model="AtUI.inputMin" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大数字</span>
              <a-input-number class="w-24" v-model="AtUI.inputMax" />
            </div>
          </div>
        </div>
        <!-- 标准输入框 -->
        <div id="3-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框最大长度</span>
              <a-input-number class="w-24" v-model="AtUI.inputMaxlength" />
            </div>
          </div>
          <div>
            <at-input
              class="w-48"
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
        <div id="3-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>数字输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字精度</span>
              <a-input-number
                class="w-24"
                v-model="AtUI.inputStep"
                :min="1"
                :max="10"
              />
            </div>
          </div>
          <div>
            <at-input-number
              class="w-48"
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
        <div id="3-4" class="mx-5 mt-3 pb-5 border-b">
          <h3>文本域输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <a-radio-group v-model="AtUI.inputAutosize">
              <a-radio-button :value="true">自动调整输入框高度</a-radio-button>
              <a-radio-button :value="false">
                不自动调整输入框高度
              </a-radio-button>
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
              class="w-48"
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
      <a-card id="4" class="my-5" title="ViewUI 输入框">
        <!-- 通用API -->
        <div id="4-1" class="mx-5 mt-3 pb-5 border-b">
          <h3>通用API</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
        <div id="4-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
              <a-radio-button :value="false"
                >隐藏搜索型的确认按钮</a-radio-button
              >
            </a-radio-group>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框最大长度</span>
              <a-input-number class="w-24" v-model="ViewUI.inputMaxlength" />
            </div>
          </div>
          <div>
            <Input
              :disabled="ViewUI.inputDisabled"
              :clearable="ViewUI.inputClearable"
              :readonly="ViewUI.inputReadonly"
              :size="ViewUI.inputSize"
              class="w-48"
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
        <div id="4-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>数字输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <a-radio-group v-model="ViewUI.inputNumberEditable">
              <a-radio-button :value="true">开启编辑</a-radio-button>
              <a-radio-button :value="false">关闭编辑</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="ViewUI.inputNumberControlsOutside">
              <a-radio-button :value="true">控制按钮位于两侧</a-radio-button>
              <a-radio-button :value="false">控制按钮位于右侧</a-radio-button>
            </a-radio-group>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最小数字</span>
              <a-input-number class="w-24" v-model="ViewUI.inputNumberMin" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大数字</span>
              <a-input-number class="w-24" v-model="ViewUI.inputNumberMax" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字步数</span>
              <a-input-number class="w-24" v-model="ViewUI.inputNumStep" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字精度</span>
              <a-input-number
                class="w-24"
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
              class="w-48"
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
        <div id="4-4" class="mx-5 mt-3 pb-5 border-b">
          <h3>联想输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
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
              class="w-48"
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
    <div class="w-3/12 pl-5">
      <a-anchor
        :offsetTop="60"
        :affix="true"
        :showInkInFixed="true"
        :getContainer="() => this.$refs.box"
      >
        <a-anchor-link href="#1" title="AntDesignVue 输入框">
          <a-anchor-link href="#1-1" title="通用API"></a-anchor-link>
          <a-anchor-link href="#1-2" title="标准输入框"></a-anchor-link>
          <a-anchor-link href="#1-3" title="文本域输入框"></a-anchor-link>
          <a-anchor-link href="#1-4" title="密码输入框"></a-anchor-link>
          <a-anchor-link href="#1-5" title="数字输入框"></a-anchor-link>
          <a-anchor-link href="#1-6" title="搜索输入框"></a-anchor-link>
          <a-anchor-link href="#1-7" title="提及输入框"></a-anchor-link>
          <a-anchor-link href="#1-8" title="联想输入框"></a-anchor-link>
        </a-anchor-link>
        <a-anchor-link href="#2" title="ElementUI 输入框">
          <a-anchor-link href="#2-1" title="通用API"></a-anchor-link>
          <a-anchor-link href="#2-2" title="标准输入框"></a-anchor-link>
          <a-anchor-link href="#2-3" title="数字输入框"></a-anchor-link>
          <a-anchor-link href="#2-4" title="联想输入框"></a-anchor-link>
        </a-anchor-link>
        <a-anchor-link href="#3" title="AtUI 输入框">
          <a-anchor-link href="#3-1" title="通用API"></a-anchor-link>
          <a-anchor-link href="#3-2" title="标准输入框"></a-anchor-link>
          <a-anchor-link href="#3-3" title="数字输入框"></a-anchor-link>
          <a-anchor-link href="#3-4" title="文本域输入框"></a-anchor-link>
        </a-anchor-link>
        <a-anchor-link href="#4" title="ViewUI 输入框">
          <a-anchor-link href="#4-1" title="通用API"></a-anchor-link>
          <a-anchor-link href="#4-2" title="标准输入框"></a-anchor-link>
          <a-anchor-link href="#4-3" title="数字输入框"></a-anchor-link>
          <a-anchor-link href="#4-4" title="联想输入框"></a-anchor-link>
        </a-anchor-link>
      </a-anchor>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        disabled: false,
        allowClear: false,
        size: "default",
        maxLength: 10,
        addonBefore: "",
        addonAfter: "",
        prefix: null,
        suffix: null,
        autosize: false,
        visibilityToggle: false,
        min: 1,
        max: 100,
        precision: 2,
        step: 1,
        decimalSeparator: ".",
        loading: false,
        enterButton: false,
        placement: "top",
        prefix1: "@",
        split: ";",
        dataSource: [],
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
      this.AntDesignVue.dataSource = !text
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