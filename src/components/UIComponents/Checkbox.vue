<template>
  <!-- 多选框 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 多选框">
      <div>
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
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 多选框"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 多选框"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 多选框"></a-card>
  </div>
</template>

<script>
const checkboxOptions = ["多选项一", "多选项二", "多选项三", "多选项四"];
export default {
  data() {
    return {
      // AntDesignVue
      checkboxIndeterminate: false,
      checkboxChecked: false,
      checkboxList: [],
      checkboxOptions: checkboxOptions,
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {
    checkboxChangeCheckAll(event) {
      Object.assign(this, {
        checkboxIndeterminate: false,
        checkboxChecked: event.target.checked,
        checkboxList: event.target.checked ? checkboxOptions : [],
      });
    },
    checkboxChangeCheckValue(list) {
      this.checkboxIndeterminate =
        !!list.length && list.length < checkboxOptions.length;
      this.checkboxChecked = list.length === checkboxOptions.length;
    },
  },
};
</script>