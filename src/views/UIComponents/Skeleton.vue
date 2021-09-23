<template>
  <div class="flex" ref="box">
    <!-- 骨架屏 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 骨架屏">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否加载</span>
            <a-switch v-model="AntDesignVue.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示动画效果</span>
            <a-switch v-model="AntDesignVue.active" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示头像占位图</span>
            <a-switch v-model="AntDesignVue.avatar" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示标题占位图</span>
            <a-switch v-model="AntDesignVue.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示段落占位图</span>
            <a-switch v-model="AntDesignVue.paragraph" />
          </div>
        </div>
        <div>
          <a-skeleton
            :loading="AntDesignVue.loading"
            :active="AntDesignVue.active"
            :avatar="AntDesignVue.avatar"
            :title="AntDesignVue.title"
            :paragraph="AntDesignVue.paragraph"
          >
            <div>加载完毕后的内容</div>
          </a-skeleton>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 骨架屏">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否加载</span>
            <a-switch v-model="ElementUI.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示动画效果</span>
            <a-switch v-model="ElementUI.animated" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置渲染template数量</span>
            <a-input-number class="w-24" v-model="ElementUI.count" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置骨架屏段落数量</span>
            <a-input-number class="w-24" v-model="ElementUI.rows" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置延迟占位DOM渲染的时间（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.throttle" />
          </div>
        </div>
        <div>
          <el-skeleton
            :loading="ElementUI.loading"
            :animated="ElementUI.animated"
            :count="ElementUI.count"
            :rows="ElementUI.rows"
            :throttle="ElementUI.throttle"
          >
            <div>加载完毕后的内容</div>
          </el-skeleton>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 骨架屏">
        <div class="text-red-500">AtUI框架没有骨架屏</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 骨架屏">
        <div class="text-red-500">ViewUI框架没有骨架屏</div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.skeletonAnchor"
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
        loading: false,
        active: false,
        avatar: false,
        title: false,
        paragraph: false,
      },
      ElementUI: {
        loading: false,
        animated: false,
        count: 1,
        rows: 3,
        throttle: 0,
      },
    };
  },
  methods: {},
};
</script>