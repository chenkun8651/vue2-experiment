<template>
  <div class="flex" ref="box">
    <!-- 面包屑 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 面包屑">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置分隔符</span>
            <a-input class="w-24" v-model="AntDesignVue.separator" />
          </div>
        </div>
        <div>
          <a-breadcrumb :separator="AntDesignVue.separator">
            <a-breadcrumb-item>
              <router-link to="/">主页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/UIComponents/button">按钮</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <span>按钮文档</span>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 面包屑">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置分隔符</span>
            <a-input class="w-24" v-model="ElementUI.separator" />
          </div>
        </div>
        <div>
          <el-breadcrumb :separator="ElementUI.separator">
            <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/UIComponents/button' }">
              按钮
            </el-breadcrumb-item>
            <el-breadcrumb-item>按钮文档</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 面包屑">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置分隔符</span>
            <a-input class="w-24" v-model="AtUI.separator" />
          </div>
        </div>
        <div>
          <at-breadcrumb :separator="AtUI.separator">
            <at-breadcrumb-item to="/">主页</at-breadcrumb-item>
            <at-breadcrumb-item to="/UIComponents/button">
              按钮
            </at-breadcrumb-item>
            <at-breadcrumb-item>按钮文档</at-breadcrumb-item>
          </at-breadcrumb>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 面包屑">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置分隔符</span>
            <a-input class="w-24" v-model="ViewUI.separator" />
          </div>
        </div>
        <div>
          <Breadcrumb :separator="ViewUI.separator">
            <BreadcrumbItem to="/">主页</BreadcrumbItem>
            <BreadcrumbItem to="/UIComponents/button">按钮</BreadcrumbItem>
            <BreadcrumbItem>按钮文档</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.breadcrumbAnchor"
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
        separator: "/",
      },
      ElementUI: {
        separator: "/",
      },
      AtUI: {
        separator: "/",
      },
      ViewUI: {
        separator: "/",
      },
    };
  },
  methods: {},
};
</script>