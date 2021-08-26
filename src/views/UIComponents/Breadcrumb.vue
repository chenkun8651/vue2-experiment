<template>
  <!-- 面包屑 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 面包屑">
      <div class="radio-box">
        <div class="string-set">
          <span style="margin-right: 5px">设置分隔符</span>
          <a-input style="width: 100px" v-model="breadcrumbSeparator" />
        </div>
      </div>
      <div>
        <a-breadcrumb :separator="breadcrumbSeparator">
          <a-breadcrumb-item>
            <router-link to="/"><a-icon type="home" />主页</router-link>
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
    <a-card class="card-margin" title="ElementUI 面包屑">
      <div class="radio-box">
        <div class="string-set">
          <span style="margin-right: 5px">设置分隔符</span>
          <a-input style="width: 100px" v-model="breadcrumbSeparatorE" />
        </div>
      </div>
      <div>
        <el-breadcrumb :separator="breadcrumbSeparatorE">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/UIComponents/button' }">
            按钮
          </el-breadcrumb-item>
          <el-breadcrumb-item>按钮文档</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 面包屑">
      <div class="radio-box">
        <div class="string-set">
          <span style="margin-right: 5px">设置分隔符</span>
          <a-input style="width: 100px" v-model="breadcrumbSeparatorA" />
        </div>
      </div>
      <div>
        <at-breadcrumb :separator="breadcrumbSeparatorA">
          <at-breadcrumb-item to="/">主页</at-breadcrumb-item>
          <at-breadcrumb-item to="/UIComponents/button">
            按钮
          </at-breadcrumb-item>
          <at-breadcrumb-item>按钮文档</at-breadcrumb-item>
        </at-breadcrumb>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 面包屑">
      <div class="radio-box">
        <div class="string-set">
          <span style="margin-right: 5px">设置分隔符</span>
          <a-input style="width: 100px" v-model="breadcrumbSeparatorV" />
        </div>
      </div>
      <div>
        <Breadcrumb :separator="breadcrumbSeparatorV">
          <BreadcrumbItem to="/">主页</BreadcrumbItem>
          <BreadcrumbItem to="/UIComponents/button">按钮</BreadcrumbItem>
          <BreadcrumbItem>按钮文档</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      breadcrumbSeparator: "/",
      // ElementUI
      breadcrumbSeparatorE: "/",
      // AtUI
      breadcrumbSeparatorA: "/",
      // ViewUI
      breadcrumbSeparatorV: "/",
    };
  },
  methods: {},
};
</script>