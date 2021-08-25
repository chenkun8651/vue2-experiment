<template>
  <!-- 固钉 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 固钉">
      <div class="radio-box">
        <div class="number-set">
          <span style="margin-right: 5px">顶部偏移量</span>
          <a-input-number style="width: 100px" v-model="affixTop" />
        </div>
        <div class="number-set">
          <span style="margin-right: 5px">底部偏移量</span>
          <a-input-number style="width: 100px" v-model="affixBottom" />
        </div>
      </div>
      <div>
        <a-affix style="margin-bottom: 10px" :offset-top="affixTop">
          <a-button type="primary" @click="affixTop += 10">
            添加固钉到窗口顶部触发的偏移量
          </a-button>
        </a-affix>
        <a-affix :offset-bottom="affixBottom">
          <a-button type="primary" @click="affixBottom += 10">
            添加固钉到窗口底部触发的偏移量
          </a-button>
        </a-affix>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 固钉"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 固钉"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 固钉"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      affixTop: 300,
      affixBottom: 350,
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>