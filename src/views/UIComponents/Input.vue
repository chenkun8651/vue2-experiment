<template>
  <div class="flex" ref="box">
    <!-- 输入框 -->
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
              <a-select class="w-48" v-model="AntDesignVue.size">
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
              <span class="mr-2">是否加载</span>
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
              <a-select class="w-48" v-model="AntDesignVue.placement">
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
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用输入框</span>
              <a-switch v-model="ElementUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示清除按钮</span>
              <a-switch v-model="ElementUI.clearable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启只读模式</span>
              <a-switch v-model="ElementUI.readonly" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框大小</span>
              <a-select class="w-48" v-model="ElementUI.size">
                <a-select-option :value="'medium'">medium</a-select-option>
                <a-select-option :value="'small'">small</a-select-option>
                <a-select-option :value="'mini'">mini</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置前缀图标</span>
              <a-input class="w-24" v-model="ElementUI.prefixIcon" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置后缀图标</span>
              <a-input class="w-24" v-model="ElementUI.suffixIcon" />
            </div>
          </div>
        </div>
        <!-- 标准输入框 -->
        <div id="2-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示字数统计</span>
              <a-switch v-model="ElementUI.showWordLimit" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示查看密码按钮</span>
              <a-switch v-model="ElementUI.showPassword" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框类型</span>
              <a-select class="w-48" v-model="ElementUI.type">
                <a-select-option :value="'text'">text</a-select-option>
                <a-select-option :value="'textarea'">textarea</a-select-option>
                <a-select-option :value="'password'">password</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框缩放方式</span>
              <a-select class="w-48" v-model="ElementUI.resize">
                <a-select-option :value="'none'">none</a-select-option>
                <a-select-option :value="'both'">both</a-select-option>
                <a-select-option :value="'horizontal'">
                  horizontal
                </a-select-option>
                <a-select-option :value="'vertical'">vertical</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框内容最大长度</span>
              <a-input-number class="w-24" v-model="ElementUI.maxlength" />
            </div>
          </div>
          <div>
            <el-input
              :disabled="ElementUI.disabled"
              :clearable="ElementUI.clearable"
              :readonly="ElementUI.readonly"
              :size="ElementUI.size"
              :prefix-icon="ElementUI.prefixIcon"
              :suffix-icon="ElementUI.suffixIcon"
              class="w-48"
              v-model="ElementUI.value"
              :show-word-limit="ElementUI.showWordLimit"
              :show-password="ElementUI.showPassword"
              :type="ElementUI.type"
              :resize="ElementUI.resize"
              :maxlength="ElementUI.maxlength"
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
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示控制按钮</span>
              <a-switch v-model="ElementUI.controls" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">输入框是否只能输入step倍数</span>
              <a-switch v-model="ElementUI.stepStrictly" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置控制按钮的位置</span>
              <a-select class="w-48" v-model="ElementUI.controlsPosition">
                <a-select-option :value="null">default</a-select-option>
                <a-select-option :value="'right'">right</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最小数字</span>
              <a-input-number class="w-24" v-model="ElementUI.min" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大数字</span>
              <a-input-number class="w-24" v-model="ElementUI.max" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字精度</span>
              <a-input-number class="w-24" v-model="ElementUI.precision" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字步数</span>
              <a-input-number class="w-24" v-model="ElementUI.step" />
            </div>
          </div>
          <div>
            <el-input-number
              :disabled="ElementUI.disabled"
              :size="ElementUI.size"
              v-model="ElementUI.value2"
              :min="ElementUI.min"
              :max="ElementUI.max"
              :step="ElementUI.step"
              :controls="ElementUI.controls"
              :controls-position="ElementUI.controlsPosition"
              :step-strictly="ElementUI.stepStrictly"
              :precision="ElementUI.precision"
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
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启加载动画</span>
              <a-switch v-model="ElementUI.hideLoading" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置联想选项出现位置</span>
              <a-select class="w-48" v-model="ElementUI.placement">
                <a-select-option :value="'top'">top</a-select-option>
                <a-select-option :value="'bottom'">bottom</a-select-option>
              </a-select>
            </div>
          </div>
          <div>
            <el-autocomplete
              :disabled="ElementUI.disabled"
              :clearable="ElementUI.clearable"
              :readonly="ElementUI.readonly"
              :size="ElementUI.size"
              :prefix-icon="ElementUI.prefixIcon"
              :suffix-icon="ElementUI.suffixIcon"
              v-model="ElementUI.value3"
              :hide-loading="ElementUI.hideLoading"
              :placement="ElementUI.placement"
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
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用输入框</span>
              <a-switch v-model="AtUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启只读模式</span>
              <a-switch v-model="AtUI.readonly" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框大小</span>
              <a-select class="w-48" v-model="AtUI.size">
                <a-select-option :value="'large'">large</a-select-option>
                <a-select-option :value="'normal'">normal</a-select-option>
                <a-select-option :value="'small'">small</a-select-option>
              </a-select>
            </div>
          </div>
        </div>
        <!-- 标准输入框 -->
        <div id="3-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框大小</span>
              <a-select class="w-48" v-model="AtUI.type">
                <a-select-option :value="'text'">text</a-select-option>
                <a-select-option :value="'password'">password</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框状态</span>
              <a-select class="w-48" v-model="AtUI.status">
                <a-select-option :value="null">null</a-select-option>
                <a-select-option :value="'success'">success</a-select-option>
                <a-select-option :value="'error'">error</a-select-option>
                <a-select-option :value="'warning'">warning</a-select-option>
                <a-select-option :value="'info'">info</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框内容最大长度</span>
              <a-input-number class="w-24" v-model="AtUI.maxlength" />
            </div>
          </div>
          <div>
            <at-input
              :disabled="AtUI.disabled"
              :readonly="AtUI.readonly"
              :size="AtUI.size"
              class="w-48"
              v-model="AtUI.value"
              :type="AtUI.type"
              :status="AtUI.status"
              :maxlength="AtUI.maxlength"
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
              <span class="mr-2">设置最小数字</span>
              <a-input-number class="w-24" v-model="AtUI.min" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大数字</span>
              <a-input-number class="w-24" v-model="AtUI.max" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字精度</span>
              <a-input-number class="w-24" v-model="AtUI.step" />
            </div>
          </div>
          <div>
            <at-input-number
              :disabled="AtUI.disabled"
              :readonly="AtUI.readonly"
              :size="AtUI.size"
              class="w-48"
              v-model="AtUI.value2"
              :min="AtUI.min"
              :max="AtUI.max"
              :step="AtUI.step"
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
            <div class="my-2 mr-5">
              <span class="mr-2">是否自动调整输入框高度</span>
              <a-switch v-model="AtUI.autosize" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框缩放方式</span>
              <a-select class="w-48" v-model="AtUI.resize">
                <a-select-option :value="'none'">none</a-select-option>
                <a-select-option :value="'both'">both</a-select-option>
                <a-select-option :value="'vertical'">vertical</a-select-option>
                <a-select-option :value="'horizontal'">
                  horizontal
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div>
            <at-textarea
              :disabled="AtUI.disabled"
              :readonly="AtUI.readonly"
              class="w-48"
              v-model="AtUI.value3"
              :autosize="AtUI.autosize"
              :resize="AtUI.resize"
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
            <div class="my-2 mr-5">
              <span class="mr-2">是否禁用输入框</span>
              <a-switch v-model="ViewUI.disabled" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示清除按钮</span>
              <a-switch v-model="ViewUI.clearable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启只读模式</span>
              <a-switch v-model="ViewUI.readonly" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框大小</span>
              <a-select class="w-48" v-model="ViewUI.size">
                <a-select-option :value="'large'">large</a-select-option>
                <a-select-option :value="'default'">default</a-select-option>
                <a-select-option :value="'small'">small</a-select-option>
              </a-select>
            </div>
          </div>
        </div>
        <!-- 标准输入框 -->
        <div id="4-2" class="mx-5 mt-3 pb-5 border-b">
          <h3>标准输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示边框</span>
              <a-switch v-model="ViewUI.border" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示输入字数统计</span>
              <a-switch v-model="ViewUI.showWordLimit" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启内容自适应高度</span>
              <a-switch v-model="ViewUI.autosize" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示查看密码按钮</span>
              <a-switch v-model="ViewUI.password" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示搜索型输入框</span>
              <a-switch v-model="ViewUI.search" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否显示搜索按钮</span>
              <a-switch v-model="ViewUI.enterButton" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框类型</span>
              <a-select class="w-48" v-model="ViewUI.type">
                <a-select-option :value="'text'">text</a-select-option>
                <a-select-option :value="'textarea'">textarea</a-select-option>
                <a-select-option :value="'password'">password</a-select-option>
              </a-select>
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框内容最大长度</span>
              <a-input-number class="w-24" v-model="ViewUI.maxlength" />
            </div>
          </div>
          <div>
            <Input
              :disabled="ViewUI.disabled"
              :clearable="ViewUI.clearable"
              :readonly="ViewUI.readonly"
              :size="ViewUI.size"
              class="w-48"
              v-model="ViewUI.value"
              :type="ViewUI.type"
              :border="ViewUI.border"
              :show-word-limit="ViewUI.showWordLimit"
              :autosize="ViewUI.autosize"
              :password="ViewUI.password"
              :search="ViewUI.search"
              :enter-button="ViewUI.enterButton"
              :maxlength="ViewUI.maxlength"
            />
          </div>
        </div>
        <!-- 数字输入框 -->
        <div id="4-3" class="mx-5 mt-3 pb-5 border-b">
          <h3>数字输入框</h3>
          <div
            class="w-full flex flex-row flex-wrap justify-start items-center"
          >
            <div class="my-2 mr-5">
              <span class="mr-2">是否开启编辑模式</span>
              <a-switch v-model="ViewUI.editable" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">是否让控制按钮位于两侧</span>
              <a-switch v-model="ViewUI.controlsOutside" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最小数字</span>
              <a-input-number class="w-24" v-model="ViewUI.min" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置最大数字</span>
              <a-input-number class="w-24" v-model="ViewUI.max" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字步数</span>
              <a-input-number class="w-24" v-model="ViewUI.step" />
            </div>
            <div class="my-2 mr-5">
              <span class="mr-2">设置数字精度</span>
              <a-input-number class="w-24" v-model="ViewUI.precision" />
            </div>
          </div>
          <div>
            <InputNumber
              :disabled="ViewUI.disabled"
              :readonly="ViewUI.readonly"
              :size="ViewUI.size"
              class="w-48"
              v-model="ViewUI.value2"
              :editable="ViewUI.editable"
              :controls-outside="ViewUI.controlsOutside"
              :min="ViewUI.min"
              :max="ViewUI.max"
              :step="ViewUI.step"
              :precision="ViewUI.precision"
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
            <div class="my-2 mr-5">
              <span class="mr-2">设置输入框选项弹出位置</span>
              <a-select class="w-48" v-model="ViewUI.placement">
                <a-select-option :value="'top'">top</a-select-option>
                <a-select-option :value="'bottom'">bottom</a-select-option>
              </a-select>
            </div>
          </div>
          <div>
            <AutoComplete
              :disabled="ViewUI.disabled"
              :clearable="ViewUI.clearable"
              :size="ViewUI.size"
              class="w-48"
              v-model="ViewUI.value3"
              :data="ViewUI.data"
              :placement="ViewUI.placement"
              @on-search="autoCompleteSearch3"
            >
            </AutoComplete>
          </div>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.inputAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { value: "三全鲜食", address: "长宁区新渔路144号" },
        { value: "首尔炸鸡", address: "上海市长宁区淞虹路61号" },
        { value: "新旺角茶餐厅", address: "上海市普陀区创邑金沙谷6号楼113" },
      ],
      timeout: null,
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
        disabled: false,
        clearable: false,
        readonly: false,
        size: "small",
        prefixIcon: null,
        suffixIcon: null,
        value: null,
        type: "text",
        resize: "none",
        showWordLimit: false,
        showPassword: false,
        maxlength: 10,
        value2: 0,
        controls: false,
        stepStrictly: false,
        controlsPosition: null,
        min: 1,
        max: 100,
        precision: 2,
        step: 1,
        value3: null,
        placement: "top",
        hideLoading: false,
      },
      AtUI: {
        disabled: false,
        readonly: false,
        size: "normal",
        value: null,
        type: "text",
        status: null,
        maxlength: 10,
        value2: 0,
        min: 1,
        max: 100,
        step: 1,
        value3: null,
        autosize: false,
        resize: "vertical",
      },
      ViewUI: {
        disabled: false,
        readonly: false,
        clearable: false,
        size: "default",
        value: null,
        type: "text",
        border: true,
        showWordLimit: false,
        autosize: false,
        password: false,
        search: false,
        enterButton: false,
        maxlength: 10,
        value2: 0,
        editable: false,
        controlsOutside: false,
        min: 1,
        max: 100,
        step: 1,
        precision: 2,
        value3: null,
        data: [],
        placement: "top",
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
      let results = text ? this.data.filter(this.stateFilter(text)) : this.data;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    autoCompleteSearch3(text) {
      this.ViewUI.data = !text ? [] : [text, text.repeat(2), text.repeat(3)];
    },
    stateFilter(text) {
      return (state) => {
        return state.value.toLowerCase().indexOf(text.toLowerCase()) === 0;
      };
    },
  },
};
</script>