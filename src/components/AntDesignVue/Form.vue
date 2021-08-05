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
              <a-radio-button :value="true">开启清除图标</a-radio-button>
              <a-radio-button :value="false">关闭清除图标</a-radio-button>
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
              :maxLength="inputMaxLength"
              :addon-before="inputAddonBefore"
              :addon-after="inputAddonAfter"
            >
              <a-icon slot="prefix" :type="inputPrefix"></a-icon>
              <a-icon slot="suffix" :type="inputSuffix"></a-icon>
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
              :maxLength="inputMaxLength"
              :autosize="textareaAutosize"
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
              :maxLength="inputMaxLength"
              :addon-before="inputAddonBefore"
              :addon-after="inputAddonAfter"
              :enter-button="inputSearchEnterButton"
              :loading="inputSearchLoading"
            >
              <a-icon slot="prefix" :type="inputPrefix"></a-icon>
              <a-icon slot="suffix" :type="inputSuffix"></a-icon>
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
              :maxLength="inputMaxLength"
              :visibilityToggle="inputPasswordVisibilityToggle"
            >
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
              />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置改变步数</span>
              <a-input-number style="width: 100px" v-model="inputNumberStep" />
            </div>
          </div>
          <a-input-number
            style="width: 300px"
            placeholder="占位输入框"
            :size="inputSize"
            :disabled="inputDisabled"
            :auto-focus="inputNumberAutoFocus"
            :min="inputNumberMin"
            :max="inputNumberMax"
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
              :disabled="inputDisabled"
              :placement="mentionsPlacement"
              :prefix="mentionsPrefix"
              :split="mentionsSplit"
            >
              <a-mentions-option value="月光">月光</a-mentions-option>
              <a-mentions-option value="太阳">太阳</a-mentions-option>
              <a-mentions-option value="水泥">水泥</a-mentions-option>
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
              v-model="autoCompleteValue"
              style="width: 300px"
              placeholder="输入联想文本"
              :data-source="autoCompleteDataSource"
              :disabled="inputDisabled"
              :allow-clear="inputAllowClear"
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
            <a-radio-group v-model="selectAllowClear">
              <a-radio-button :value="true">开启清除图标</a-radio-button>
              <a-radio-button :value="false">关闭清除图标</a-radio-button>
            </a-radio-group>
          </div>
          <a-select
            style="width: 300px"
            :default-value="'1'"
            :allow-clear="selectAllowClear"
            :auto-clear-search-value="selectAutoClearSearchValue"
            :mode="selectMode"
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
        <h3>级联选择框</h3>
        <div>
          <a-cascader
            style="width: 300px"
            placeholder="请选择一个旅游景点"
            :options="cityOptions"
          />
        </div>
      </div>
      <!-- 树状选择框 -->
      <div class="content-item">
        <h3>树状选择框</h3>
        <div>
          <a-tree-select
            style="width: 200px"
            placeholder="请选择"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            show-search
            allow-clear
            tree-default-expand-all
          >
            <a-tree-select-node key="1" value="选项1" title="选项1">
              <a-tree-select-node key="1-1" value="选项1-1" title="选项1-1">
                <a-tree-select-node
                  key="1-1-1"
                  value="选项1-1-1"
                  title="选项1-1-1"
                  :selectable="false"
                />
                <a-tree-select-node
                  key="1-1-2"
                  value="选项1-1-2"
                  title="选项1-1-2"
                />
              </a-tree-select-node>
              <a-tree-select-node key="1-2" value="选项1-2" title="选项1-2">
                <a-tree-select-node key="1-2-1" value="选项1-2-1">
                  <b slot="title" style="color: #08c">选项1-2-1</b>
                </a-tree-select-node>
              </a-tree-select-node>
            </a-tree-select-node>
          </a-tree-select>
        </div>
      </div>
    </div>
    <!-- 单选框 -->
    <h1 class="title-xy">单选框</h1>
    <div class="content">
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
    <div class="content">
      <!-- 标准多选框 -->
      <div class="content-item">
        <h3>标准多选框</h3>
        <a-checkbox>多选项</a-checkbox>
      </div>
      <!-- 全选功能 -->
      <div class="content-item">
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
    <div class="content">
      <!-- 选择日期 -->
      <div class="content-item">
        <h3>选择日期</h3>
        <a-date-picker style="width: 200px" placeholder="选择日期" />
      </div>
      <!-- 选择日期时间 -->
      <div class="content-item">
        <h3>选择日期时间</h3>
        <a-date-picker
          style="width: 200px"
          placeholder="选择日期时间"
          show-time
        />
      </div>
      <!-- 选择周 -->
      <div class="content-item">
        <h3>选择周</h3>
        <a-week-picker style="width: 200px" placeholder="选择周" />
      </div>
      <!-- 选择月份 -->
      <div class="content-item">
        <h3>选择月份</h3>
        <a-month-picker style="width: 200px" placeholder="选择月份" />
      </div>
      <!-- 选择日期范围 -->
      <div class="content-item">
        <h3>选择日期范围</h3>
        <a-range-picker style="width: 400px" />
      </div>
    </div>
    <!-- 时间选择框 -->
    <h1 class="title-xy">时间选择框</h1>
    <div class="content">
      <!-- 选择时间 -->
      <div class="content-item">
        <h3>选择时间</h3>
        <a-time-picker style="width: 200px" placeholder="选择时间" />
      </div>
      <!-- 12小时制时间 -->
      <div class="content-item">
        <h3>12小时制时间</h3>
        <a-time-picker
          style="width: 200px"
          placeholder="选择时间"
          use12-hours
        />
      </div>
    </div>
    <!-- 评分 -->
    <h1 class="title-xy">评分</h1>
    <div class="content">
      <!-- 标准评分 -->
      <div class="content-item">
        <h3>标准评分</h3>
        <div>
          <a-rate :default-value="2.5" :allow-half="true" />
        </div>
      </div>
      <!-- 评分-更换图标 -->
      <div class="content-item">
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
    <div class="content">
      <!-- 标准滑动输入条 -->
      <div class="content-item">
        <h3>标准滑动输入条</h3>
        <div>
          <a-slider :default-value="30" :tip-formatter="formatterSlider" />
        </div>
      </div>
      <!-- 双滑块滑动输入条 -->
      <div class="content-item">
        <h3>双滑块滑动输入条</h3>
        <div>
          <a-slider :range="true" :default-value="[20, 50]" />
        </div>
      </div>
      <!-- 带图标滑动输入条 -->
      <div class="content-item">
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
    <div class="content">
      <!-- 标准开关 -->
      <div class="content-item">
        <h3>标准开关</h3>
        <div>
          <a-switch default-checked />
        </div>
      </div>
      <!-- 带文字开关 -->
      <div class="content-item">
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
      <div class="content-item">
        <h3>带加载开关</h3>
        <div>
          <a-switch loading default-checked />
        </div>
      </div>
    </div>
    <!-- 穿梭框 -->
    <h1 class="title-xy">穿梭框</h1>
    <div class="content">
      <!-- 标准穿梭框 -->
      <div class="content-item">
        <h3>标准穿梭框</h3>
        <div>
          <a-transfer
            :titles="['待完成', '已完成']"
            :data-source="mockData"
            :target-keys="targetKeys"
            :selected-keys="selectedKeys"
            :render="(item) => item.title"
            @change="changeTransfer"
            @selectChange="selectChangeTransfer"
          />
        </div>
      </div>
    </div>
    <!-- 上传 -->
    <h1 class="title-xy">上传</h1>
    <div class="content">
      <!-- 标准上传 -->
      <div class="content-item">
        <h3>标准上传</h3>
        <div>
          <a-upload
            name="file"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :multiple="true"
            :headers="{
              authorization: 'authorization-text',
            }"
          >
            <a-button> <a-icon type="upload" />点击上传</a-button>
          </a-upload>
        </div>
      </div>
      <!-- 头像上传 -->
      <div class="content-item">
        <h3>头像上传</h3>
        <div>
          <a-upload
            class="avatar-uploader"
            name="avatar"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture-card"
            :show-upload-list="false"
            :before-upload="beforeUploadImage"
            @change="changeImage"
          >
            <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
            <div v-else>
              <a-icon :type="loading ? 'loading' : 'plus'" />
              <div class="ant-upload-text">上传</div>
            </div>
          </a-upload>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <h1 class="title-xy">表单</h1>
    <div class="content">
      <a-form
        :label-col="{
          xs: { span: 24 },
          sm: { span: 5 },
        }"
        :wrapper-col="{
          xs: { span: 24 },
          sm: { span: 12 },
        }"
      >
        <a-form-item
          label="失败"
          validate-status="error"
          help="数据是错误的，验证失败"
        >
          <a-input id="error" placeholder="错误样式" />
        </a-form-item>
        <a-form-item label="警告" validate-status="warning">
          <a-input id="warning" placeholder="警告样式" />
        </a-form-item>
        <a-form-item
          label="验证"
          validate-status="validating"
          help="数据正在验证中"
          has-feedback
        >
          <a-input id="validating" placeholder="验证样式" />
        </a-form-item>
        <a-form-item label="成功" validate-status="success" has-feedback>
          <a-input id="success" placeholder="成功样式" />
        </a-form-item>
        <a-form-item label="警告" validate-status="warning" has-feedback>
          <a-input id="warning2" placeholder="警告样式" />
        </a-form-item>
        <a-form-item
          label="失败"
          validate-status="error"
          help="数据是错误的，验证失败"
          has-feedback
        >
          <a-input id="error2" placeholder="错误样式" />
        </a-form-item>
        <a-form-item label="成功" validate-status="success" has-feedback>
          <a-date-picker style="width: 100%" />
        </a-form-item>
        <a-form-item label="警告" validate-status="warning" has-feedback>
          <a-time-picker style="width: 100%" />
        </a-form-item>
        <a-form-item label="错误" validate-status="error" has-feedback>
          <a-select default-value="1">
            <a-select-option value="1">选项一</a-select-option>
            <a-select-option value="2">选项二</a-select-option>
            <a-select-option value="3">选项三</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="验证"
          validate-status="validating"
          help="数据正在验证中"
          has-feedback
        >
          <a-cascader :default-value="['1']" :options="[]" />
        </a-form-item>
        <a-form-item label="日期" style="margin-bottom: 0">
          <a-form-item
            validate-status="error"
            help="选择日期错误"
            :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
          >
            <a-date-picker style="width: 100%" />
          </a-form-item>
          <span
            :style="{
              display: 'inline-block',
              width: '24px',
              textAlign: 'center',
            }"
          >
            -
          </span>
          <a-form-item
            :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
          >
            <a-date-picker style="width: 100%" />
          </a-form-item>
        </a-form-item>
        <a-form-item label="成功" validate-status="success" has-feedback>
          <a-input-number style="width: 100%" />
        </a-form-item>
        <a-form-item label="成功" validate-status="success" has-feedback>
          <a-input allow-clear />
        </a-form-item>
        <a-form-item label="警告" validate-status="warning" has-feedback>
          <a-input-password />
        </a-form-item>
        <a-form-item label="错误" validate-status="error" has-feedback>
          <a-input-password allow-clear />
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
const plainOptions = ["多选项一", "多选项二", "多选项三"];
const defaultCheckedList = ["多选项一", "多选项三"];
const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `内容${i + 1}`,
    description: `描述内容${i + 1}`,
    disabled: i % 3 < 1,
  });
}
const oriTargetKeys = mockData
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);
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
      inputPrefix: "",
      inputSuffix: "",
      textareaAutosize: true,
      inputSearchEnterButton: true,
      inputSearchLoading: false,
      inputPasswordVisibilityToggle: true,
      inputNumberAutoFocus: true,
      inputNumberMin: 1,
      inputNumberMax: 100,
      inputNumberPrecision: 2,
      inputNumberStep: 2,
      mentionsPlacement: "top",
      mentionsPrefix: "@",
      mentionsSplit: "",
      autoCompleteValue: "",
      autoCompleteDataSource: [],
      autoCompleteBackfill: true,
      autoCompleteDefaultActiveFirstOption: true,
      // 选择框
      selectMode: "default",
      selectAllowClear: true,
      selectAutoClearSearchValue: true,
      // 级联选择框
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
      // 多选框
      indeterminate: true,
      checkAll: false,
      checkedList: defaultCheckedList,
      plainOptions: plainOptions,
      // 穿梭框
      mockData,
      targetKeys: oriTargetKeys,
      selectedKeys: ["1", "4"],
      // 上传
      loading: false,
      imageUrl: "",
    };
  },
  methods: {
    // 联想输入
    autoCompleteSearch(searchText) {
      this.autoCompleteDataSource = !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)];
    },
    // 多选框
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
    // 滑动输入条
    formatterSlider(value) {
      return `${value}%`;
    },
    // 穿梭框
    changeTransfer(nextTargetKeys) {
      this.targetKeys = nextTargetKeys;
    },
    selectChangeTransfer(sourceSelectedKeys, targetSelectedKeys) {
      this.selectedKeys = [...sourceSelectedKeys, ...targetSelectedKeys];
    },
    // 上传
    beforeUploadImage(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    changeImage(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
  },
};
</script>

<style scoped>
.title-xy {
  padding: 10px 0px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
}
.content {
  padding: 20px;
}
.content-item {
  padding: 10px 0px;
}
.title2-xy {
  font-size: 24px;
  font-weight: 400;
}
.radio-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.radio-box .ant-radio-group {
  margin: 5px 15px 15px 0px;
}
.radio-box .string-set {
  margin: 5px 15px 15px 0px;
}
.radio-box .number-set {
  margin: 5px 15px 15px 0px;
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
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>