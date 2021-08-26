<template>
  <!-- 输入框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 输入框">
      <!-- 标准输入框 -->
      <div class="card-item">
        <h3>标准输入框</h3>
        <div class="radio-box">
          <a-radio-group v-model="inputSize">
            <a-radio-button :value="'large'">large</a-radio-button>
            <a-radio-button :value="'default'">default</a-radio-button>
            <a-radio-button :value="'small'">small</a-radio-button>
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
            style="width: 200px"
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
      <!-- 搜索输入框 -->
      <div class="card-item">
        <h3>搜索输入框（部分属性继承标准输入框）</h3>
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
            style="width: 200px"
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
      <!-- 密码输入框 -->
      <div class="card-item">
        <h3>密码输入框（部分属性继承标准输入框）</h3>
        <div class="radio-box">
          <a-radio-group v-model="inputPasswordVisibilityToggle">
            <a-radio-button :value="true">开启切换按钮</a-radio-button>
            <a-radio-button :value="false">关闭切换按钮</a-radio-button>
          </a-radio-group>
        </div>
        <div>
          <a-input-password
            style="width: 200px"
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
      <!-- 数字输入框 -->
      <div class="card-item">
        <h3>数字输入框（部分属性继承标准输入框）</h3>
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
        <div>
          <a-input-number
            style="width: 200px"
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
      <div class="card-item">
        <h3>提及输入框（部分属性继承标准输入框）</h3>
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
              style="width: 200px"
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
      <div class="card-item">
        <h3>联想输入框（部分属性继承标准输入框）</h3>
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
              style="width: 200px"
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
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 输入框"></a-card>
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
      // ElementUI
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