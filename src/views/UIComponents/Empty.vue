<template>
  <!-- 空状态 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 空状态">
      <div class="control-box">
        <div class="string-set">
          <span style="margin-right: 5px">设置图片链接</span>
          <a-input style="width: 200px" v-model="emptyImage" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置描述内容</span>
          <a-input style="width: 100px" v-model="emptyDescription" />
        </div>
      </div>
      <div>
        <a-empty :image="emptyImage" :description="emptyDescription"></a-empty>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 空状态">
      <div class="control-box">
        <div class="string-set">
          <span style="margin-right: 5px">设置图片链接</span>
          <a-input style="width: 200px" v-model="emptyImageE" />
        </div>
        <div class="string-set">
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
    <a-card class="mtb-20" title="AtUI 空状态">
      <div class="c-f5222d">AtUI框架没有空状态</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 空状态">
      <div class="c-f5222d">ViewUI框架没有空状态</div>
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