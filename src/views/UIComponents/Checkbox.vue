<template>
  <!-- 多选框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 多选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="checkboxDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-checkbox
          :checked="checkboxChecked"
          :indeterminate="checkboxIndeterminate"
          @change="checkboxChangeCheckAll"
          :disabled="checkboxDisabled"
        >
          全选
        </a-checkbox>
        <a-checkbox-group
          v-model="checkboxList"
          :options="checkboxOptions"
          @change="checkboxChangeCheckValue"
          :disabled="checkboxDisabled"
        >
        </a-checkbox-group>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 多选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="checkboxDisabledE">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="checkboxBorderE">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="checkboxSizeE">
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-checkbox
          v-model="checkboxChecked"
          :checked="checkboxChecked"
          :indeterminate="checkboxIndeterminate"
          @change="checkboxChangeCheckAll"
          :disabled="checkboxDisabledE"
          :border="checkboxBorderE"
          :size="checkboxSizeE"
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
            :disabled="checkboxDisabledE"
            :border="checkboxBorderE"
            :size="checkboxSizeE"
          >
            {{ item }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 多选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="checkboxDisabledA">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-checkbox-group v-model="checkboxList">
          <at-checkbox
            v-for="item in checkboxOptions"
            :key="item"
            :label="item"
            :disabled="checkboxDisabledA"
          >
            {{ item }}
          </at-checkbox>
        </at-checkbox-group>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 多选框">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="checkboxDisabledV">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="checkboxBorderV">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="checkboxSizeV">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Checkbox
          :value="checkboxChecked"
          :indeterminate="checkboxIndeterminate"
          @on-change="checkboxChangeCheckAll"
          :disabled="checkboxDisabledV"
          :border="checkboxBorderV"
          :size="checkboxSizeV"
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
            :disabled="checkboxDisabledV"
            :border="checkboxBorderV"
            :size="checkboxSizeV"
          >
            {{ item }}
          </Checkbox>
        </CheckboxGroup>
      </div>
    </a-card>
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
      // AntDesignVue
      checkboxDisabled: false,
      // ElementUI
      checkboxDisabledE: false,
      checkboxBorderE: false,
      checkboxSizeE: "medium",
      // AtUI
      checkboxDisabledA: false,
      // ViewUI
      checkboxDisabledV: false,
      checkboxBorderV: false,
      checkboxSizeV: "default",
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
        console.log(this.checkboxChecked);
        this.checkboxList = event ? checkboxOptions : [];
      }
    },
    checkboxChangeCheckValue(list) {
      console.log(list);
      this.checkboxIndeterminate =
        !!list.length && list.length < checkboxOptions.length;
      this.checkboxChecked = list.length === checkboxOptions.length;
      console.log(this.checkboxChecked);
    },
  },
};
</script>