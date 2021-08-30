<template>
  <!-- 分页 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 分页">
      <div class="radio-box">
        <a-radio-group v-model="paginationSize">
          <a-radio-button value="">默认</a-radio-button>
          <a-radio-button value="small">小型</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="paginationSimple">
          <a-radio-button :value="false">复杂分页</a-radio-button>
          <a-radio-button :value="true">简洁分页</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="paginationDisabled">
          <a-radio-button :value="false">启用</a-radio-button>
          <a-radio-button :value="true">禁用</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-pagination
          :size="paginationSize"
          :simple="paginationSimple"
          :disabled="paginationDisabled"
          :default-current="3"
          :default-page-size="20"
          :page-size-options="['10', '20', '30', '40', '50']"
          :total="500"
          :show-total="(total) => `当前共${total}项`"
          :show-les-items="true"
          :show-quick-jumper="true"
          :show-size-changer="true"
        />
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 分页">
      <div>
        <el-pagination
          :background="background"
          :small="small"
          :disabled="disabled"
          :page-size="20"
          :page-sizes="[10, 20, 30, 40, 50]"
          layout="prev, pager, next"
          :total="50"
        >
        </el-pagination>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 分页"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 分页"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      paginationSize: "",
      paginationSimple: false,
      paginationDisabled: false,
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>