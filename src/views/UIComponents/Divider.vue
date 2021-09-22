<template>
  <div class="flex" ref="box">
    <!-- 分割线 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 分割线">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">分割线是否替换为虚线</span>
            <a-switch v-model="AntDesignVue.dashed" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置分割线的方向</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <p>分割内容上半部分</p>
          <a-divider :dashed="AntDesignVue.dashed" :type="AntDesignVue.type">
          </a-divider>
          <p>分割内容下半部分</p>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 分割线">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置分割线的方向</span>
            <el-select size="small" class="w-36" v-model="ElementUI.direction">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <p>分割内容上半部分</p>
          <el-divider :direction="ElementUI.direction"></el-divider>
          <p>分割内容下半部分</p>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 分割线">
        <div class="text-red-500">AtUI框架没有分割线</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 分割线">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">分割线是否替换为虚线</span>
            <a-switch v-model="ViewUI.dashed" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置分割线的方向</span>
            <el-select size="small" class="w-36" v-model="ViewUI.type">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <p>分割内容上半部分</p>
          <Divider :dashed="ViewUI.dashed" :type="ViewUI.type"></Divider>
          <p>分割内容下半部分</p>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.dividerAnchor"
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
        dashed: false,
        type: "horizontal",
      },
      ElementUI: {
        direction: "horizontal",
      },
      ViewUI: {
        dashed: false,
        type: "horizontal",
      },
    };
  },
  methods: {},
};
</script>