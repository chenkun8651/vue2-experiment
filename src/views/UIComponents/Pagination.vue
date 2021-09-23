<template>
  <div class="flex" ref="box">
    <!-- 分页 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 分页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启简洁分页</span>
            <a-switch v-model="AntDesignVue.simple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置分页大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-pagination
            :disabled="AntDesignVue.disabled"
            :simple="AntDesignVue.simple"
            :size="AntDesignVue.size"
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
      <a-card id="2" class="my-5" title="ElementUI 分页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启简洁分页</span>
            <a-switch v-model="ElementUI.small" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示按钮背景</span>
            <a-switch v-model="ElementUI.background" />
          </div>
        </div>
        <div>
          <el-pagination
            :disabled="ElementUI.disabled"
            :background="ElementUI.background"
            :small="ElementUI.small"
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
      <a-card id="3" class="my-5" title="AtUI 分页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启简洁分页</span>
            <a-switch v-model="AtUI.simple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置分页大小</span>
            <el-select size="small" class="w-36" v-model="AtUI.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <at-pagination
            :simple="AtUI.simple"
            :size="AtUI.size"
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
      <a-card id="4" class="my-5" title="ViewUI 分页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启简洁分页</span>
            <a-switch v-model="ViewUI.simple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置分页大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Page
            :disabled="ViewUI.disabled"
            :simple="ViewUI.simple"
            :size="ViewUI.size"
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
    <BasicAnchor
      :parentList="this.AnchorInfo.paginationAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        disabled: false,
        simple: false,
        size: null,
      },
      ElementUI: {
        disabled: false,
        small: false,
        background: false,
      },
      AtUI: {
        simple: false,
        size: null,
      },
      ViewUI: {
        disabled: false,
        simple: false,
        size: null,
      },
    };
  },
  methods: {},
};
</script>