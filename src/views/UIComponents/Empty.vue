<template>
  <!-- 空状态 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 空状态">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置图片链接</span>
          <a-input style="width: 200px" v-model="emptyImage" />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置描述内容</span>
          <a-input style="width: 100px" v-model="emptyDescription" />
        </div>
      </div>
      <div>
        <a-empty :image="emptyImage" :description="emptyDescription"></a-empty>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 空状态">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置图片链接</span>
          <a-input style="width: 200px" v-model="emptyImageE" />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置描述内容</span>
          <a-input style="width: 100px" v-model="emptyDescriptionE" />
        </div>
      </div>
      <div>
        <el-empty :image="emptyImageE" :description="emptyDescriptionE">
        </el-empty>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 空状态">
      <div class="text-red-500">AtUI框架没有空状态</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 空状态">
      <div class="text-red-500">ViewUI框架没有空状态</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      emptyImage:
        "https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original",
      emptyDescription: "",
      // ElementUI
      emptyImageE:
        "https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original",
      emptyDescriptionE: "",
    };
  },
  methods: {},
};
</script>