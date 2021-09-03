<template>
  <!-- 固钉 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 固钉">
      <div class="control-box">
        <div class="number-set">
          <span class="mr-5">设置顶部触发偏移量</span>
          <a-input-number
            class="w-100"
            v-model="AntDesignVue.offsetTop"
            :min="0"
          />
        </div>
      </div>
      <div>
        <a-affix :offset-top="AntDesignVue.offsetTop">
          <a-button>固定位置按钮</a-button>
        </a-affix>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 固钉">
      <div class="c-f5222d">ElementUI框架没有固钉</div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 固钉">
      <div class="c-f5222d">AtUI框架没有固钉</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 固钉">
      <div class="control-box">
        <div class="number-set">
          <span style="margin-right: 5px">设置顶部触发偏移量</span>
          <a-input-number
            style="width: 100px"
            v-model="ViewUI.offsetTop"
            :min="0"
          />
        </div>
      </div>
      <div>
        <Affix :offset-top="ViewUI.offsetTop">
          <Button>固定位置按钮</Button>
        </Affix>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        offsetTop: 330,
      },
      ViewUI: {
        offsetTop: 860,
      },
    };
  },
  methods: {},
};
</script>