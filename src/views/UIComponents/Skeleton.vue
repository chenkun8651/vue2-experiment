<template>
  <!-- 骨架屏 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 骨架屏">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="skeletonLoading">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完毕</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="skeletonActive">
          <a-radio-button :value="true">显示动画效果</a-radio-button>
          <a-radio-button :value="false">隐藏动画效果</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="skeletonAvatar">
          <a-radio-button :value="true">显示头像占位图</a-radio-button>
          <a-radio-button :value="false">隐藏头像占位图</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="skeletonTitle">
          <a-radio-button :value="true">显示标题占位图</a-radio-button>
          <a-radio-button :value="false">隐藏标题占位图</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="skeletonParagraph">
          <a-radio-button :value="true">显示段落占位图</a-radio-button>
          <a-radio-button :value="false">隐藏段落占位图</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-skeleton
          :loading="skeletonLoading"
          :active="skeletonActive"
          :avatar="skeletonAvatar"
          :title="skeletonTitle"
          :paragraph="skeletonParagraph"
        >
          <div>加载完毕后的内容</div>
        </a-skeleton>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 骨架屏">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="skeletonLoadingE">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完毕</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="skeletonAnimatedE">
          <a-radio-button :value="true">显示动画效果</a-radio-button>
          <a-radio-button :value="false">隐藏动画效果</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置渲染template数量</span>
          <a-input-number style="width: 100px" v-model="skeletonCountE" />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置骨架屏段落数量</span>
          <a-input-number style="width: 100px" v-model="skeletonRowsE" />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">
            设置延迟占位DOM渲染的时间（毫秒）
          </span>
          <a-input-number style="width: 100px" v-model="skeletonThrottleE" />
        </div>
      </div>
      <div>
        <el-skeleton
          :loading="skeletonLoadingE"
          :animated="skeletonAnimatedE"
          :count="skeletonCountE"
          :rows="skeletonRowsE"
          :throttle="skeletonThrottleE"
        >
          <div>加载完毕后的内容</div>
        </el-skeleton>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 骨架屏">
      <div class="text-red-500">AtUI框架没有骨架屏</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 骨架屏">
      <div class="text-red-500">ViewUI框架没有骨架屏</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      skeletonLoading: true,
      skeletonActive: false,
      skeletonAvatar: true,
      skeletonTitle: true,
      skeletonParagraph: true,
      // ElementUI
      skeletonLoadingE: true,
      skeletonAnimatedE: false,
      skeletonCountE: 1,
      skeletonRowsE: 3,
      skeletonThrottleE: 0,
    };
  },
  methods: {},
};
</script>