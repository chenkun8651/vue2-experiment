<template>
  <!-- 固钉 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 固钉">
      <div class="radio-box">
        <div class="number-set">
          <span style="margin-right: 5px">设置顶部触发偏移量</span>
          <a-input-number style="width: 100px" v-model="affixTop" :min="0" />
        </div>
      </div>
      <div>
        <a-affix :offset-top="affixTop">
          <a-button>AntDesignVue固钉</a-button>
        </a-affix>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 固钉">
      <div class="c-f5222d">ElementUI框架没有固钉</div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 固钉">
      <div class="c-f5222d">AtUI框架没有固钉</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 固钉">
      <div class="radio-box">
        <div class="number-set">
          <span style="margin-right: 5px">设置顶部触发偏移量</span>
          <a-input-number
            style="width: 100px"
            v-model="affixOffsetTopV"
            :min="0"
          />
        </div>
      </div>
      <div>
        <Affix :offset-top="affixOffsetTopV">
          <Button>ViewUI固钉</Button>
        </Affix>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      affixTop: 330,
      // ViewUI
      affixOffsetTopV: 860,
    };
  },
  methods: {},
};
</script>