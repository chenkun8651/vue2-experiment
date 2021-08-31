<template>
  <!-- 分页 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 分页">
      <div class="radio-box">
        <a-radio-group v-model="AntDesignVue.paginationDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.paginationSimple">
          <a-radio-button :value="true">简洁分页</a-radio-button>
          <a-radio-button :value="false">复杂分页</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.paginationSize">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-pagination
          style="width: 750px"
          :disabled="AntDesignVue.paginationDisabled"
          :simple="AntDesignVue.paginationSimple"
          :size="AntDesignVue.paginationSize"
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
      <div class="radio-box">
        <a-radio-group v-model="ElementUI.paginationDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.paginationBackground">
          <a-radio-button :value="true">显示按钮背景色</a-radio-button>
          <a-radio-button :value="false">隐藏按钮背景色</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.paginationSmall">
          <a-radio-button :value="false">default</a-radio-button>
          <a-radio-button :value="true">small</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-pagination
          style="width: 650px"
          :disabled="ElementUI.paginationDisabled"
          :background="ElementUI.paginationBackground"
          :small="ElementUI.paginationSmall"
          :current-page="3"
          :page-size="20"
          :page-sizes="[10, 20, 30, 40, 50]"
          :total="500"
          :layout="'total, sizes, prev, pager, next, jumper'"
        >
        </el-pagination>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 分页">
      <div class="radio-box">
        <a-radio-group v-model="AtUI.paginationSimple">
          <a-radio-button :value="true">简洁分页</a-radio-button>
          <a-radio-button :value="false">复杂分页</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.paginationSize">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-pagination
          :simple="AtUI.paginationSimple"
          :size="AtUI.paginationSize"
          :current="3"
          :page-size="20"
          :page-size-opts="[10, 20, 30, 40, 50]"
          :total="500"
          :show-total="true"
          :show-sizer="true"
          :show-quickjump="true"
        >
        </at-pagination>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 分页">
      <div class="radio-box">
        <a-radio-group v-model="ViewUI.paginationDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.paginationSimple">
          <a-radio-button :value="true">简洁分页</a-radio-button>
          <a-radio-button :value="false">复杂分页</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.paginationSize">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Page
          :disabled="ViewUI.paginationDisabled"
          :simple="ViewUI.paginationSimple"
          :size="ViewUI.paginationSize"
          :current="3"
          :page-size="20"
          :page-size-opts="[10, 20, 30, 40, 50]"
          :total="500"
          :show-total="true"
          :show-sizer="true"
          :show-elevator="true"
        >
        </Page>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        paginationDisabled: false,
        paginationSimple: false,
        paginationSize: null,
      },
      ElementUI: {
        paginationDisabled: false,
        paginationBackground: true,
        paginationSmall: false,
      },
      AtUI: {
        paginationSimple: false,
        paginationSize: null,
      },
      ViewUI: {
        paginationDisabled: false,
        paginationSimple: false,
        paginationSize: null,
      },
    };
  },
  methods: {},
};
</script>