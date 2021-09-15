<template>
  <div class="flex" ref="box">
    <!-- 多选框 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 多选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
        </div>
        <div>
          <a-checkbox
            :checked="checkboxChecked"
            :indeterminate="checkboxIndeterminate"
            @change="checkboxChangeCheckAll"
            :disabled="AntDesignVue.disabled"
          >
            全选
          </a-checkbox>
          <a-checkbox-group
            v-model="checkboxList"
            :options="checkboxOptions"
            @change="checkboxChangeCheckValue"
            :disabled="AntDesignVue.disabled"
          >
          </a-checkbox-group>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 多选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ElementUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置多选框大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="'medium'">medium</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'mini'">mini</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <el-checkbox
            v-model="checkboxChecked"
            :checked="checkboxChecked"
            :indeterminate="checkboxIndeterminate"
            @change="checkboxChangeCheckAll"
            :disabled="ElementUI.disabled"
            :border="ElementUI.border"
            :size="ElementUI.size"
          >
            全选
          </el-checkbox>
          <el-checkbox-group
            v-model="checkboxList"
            @change="checkboxChangeCheckValue"
          >
            <el-checkbox
              v-for="item in checkboxOptions"
              :key="item"
              :label="item"
              :disabled="ElementUI.disabled"
              :border="ElementUI.border"
              :size="ElementUI.size"
            >
              {{ item }}
            </el-checkbox>
          </el-checkbox-group>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 多选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AtUI.disabled" />
          </div>
        </div>
        <div>
          <at-checkbox-group v-model="checkboxList">
            <at-checkbox
              v-for="item in checkboxOptions"
              :key="item"
              :label="item"
              :disabled="AtUI.disabled"
            >
              {{ item }}
            </at-checkbox>
          </at-checkbox-group>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 多选框">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ViewUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置多选框大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Checkbox
            :value="checkboxChecked"
            :indeterminate="checkboxIndeterminate"
            @on-change="checkboxChangeCheckAll"
            :disabled="ViewUI.disabled"
            :border="ViewUI.border"
            :size="ViewUI.size"
          >
            全选
          </Checkbox>
          <CheckboxGroup
            v-model="checkboxList"
            @on-change="checkboxChangeCheckValue"
          >
            <Checkbox
              v-for="item in checkboxOptions"
              :key="item"
              :label="item"
              :disabled="ViewUI.disabled"
              :border="ViewUI.border"
              :size="ViewUI.size"
            >
              {{ item }}
            </Checkbox>
          </CheckboxGroup>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.checkboxAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
const checkboxOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checkboxChecked: false,
      checkboxIndeterminate: false,
      checkboxList: [],
      checkboxOptions: checkboxOptions,
      AntDesignVue: {
        disabled: false,
      },
      ElementUI: {
        disabled: false,
        border: false,
        size: "medium",
      },
      AtUI: {
        disabled: false,
      },
      ViewUI: {
        disabled: false,
        border: false,
        size: "default",
      },
    };
  },
  methods: {
    checkboxChangeCheckAll(event) {
      if (typeof event === "object") {
        Object.assign(this, {
          checkboxIndeterminate: false,
          checkboxChecked: event.target.checked,
          checkboxList: event.target.checked ? checkboxOptions : [],
        });
      } else {
        this.checkboxIndeterminate = false;
        this.checkboxChecked = event;
        this.checkboxList = event ? checkboxOptions : [];
      }
    },
    checkboxChangeCheckValue(list) {
      this.checkboxIndeterminate =
        !!list.length && list.length < checkboxOptions.length;
      this.checkboxChecked = list.length === checkboxOptions.length;
    },
  },
};
</script>