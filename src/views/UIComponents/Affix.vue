<template>
  <!-- 固钉 -->
  <div>
    <div>
      <!-- AntDesignVue -->
      <a-card class="my-5" title="AntDesignVue 固钉">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置顶部触发偏移量</span>
            <a-input-number class="w-24" v-model="AntDesignVue.offsetTop" />
          </div>
        </div>
        <div>
          <a-affix :offset-top="AntDesignVue.offsetTop">
            <a-button>固定位置按钮</a-button>
          </a-affix>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card
        class="my-5"
        title="ElementUI 固钉"
        name="#components-anchor-demo-basic"
      >
        <div class="text-red-500">ElementUI框架没有固钉</div>
      </a-card>
      <!-- AtUI -->
      <a-card class="my-5" title="AtUI 固钉">
        <div class="text-red-500">AtUI框架没有固钉</div>
      </a-card>
      <!-- ViewUI -->
      <a-card class="my-5" title="ViewUI 固钉">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span style="margin-right: 5px">设置顶部触发偏移量</span>
            <a-input-number class="w-24" v-model="ViewUI.offsetTop" />
          </div>
        </div>
        <div>
          <Affix :offset-top="ViewUI.offsetTop">
            <Button>固定位置按钮</Button>
          </Affix>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        offsetTop: 250,
      },
      ViewUI: {
        offsetTop: 750,
      },
    };
  },
  methods: {},
};
</script>