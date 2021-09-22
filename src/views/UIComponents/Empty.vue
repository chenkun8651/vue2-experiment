<template>
  <div class="flex" ref="box">
    <!-- 空状态 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 空状态">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置图片链接</span>
            <a-input class="w-60" v-model="AntDesignVue.image" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置描述内容</span>
            <a-input class="w-24" v-model="AntDesignVue.description" />
          </div>
        </div>
        <div>
          <a-empty
            :image="AntDesignVue.image"
            :description="AntDesignVue.description"
          >
          </a-empty>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 空状态">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置图片链接</span>
            <a-input class="w-60" v-model="ElementUI.image" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置描述内容</span>
            <a-input class="w-24" v-model="ElementUI.description" />
          </div>
        </div>
        <div>
          <el-empty
            :image="ElementUI.image"
            :description="ElementUI.description"
          >
          </el-empty>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 空状态">
        <div class="text-red-500">AtUI框架没有空状态</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 空状态">
        <div class="text-red-500">ViewUI框架没有空状态</div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.emptyAnchor"
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
        image:
          "https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original",
        description: "",
      },
      ElementUI: {
        image:
          "https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original",
        description: "",
      },
    };
  },
  methods: {},
};
</script>