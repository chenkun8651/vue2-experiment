<template>
  <!-- 加载组件 -->
  <div>
    <!-- 加载 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">加载</div>
      <!-- AntDesignVue -->
      <a-card class="card-margin" title="AntDesignVue 加载">
        <div class="radio-box">
          <a-radio-group v-model="spinSpinning">
            <a-radio-button :value="true">加载</a-radio-button>
            <a-radio-button :value="false">完成</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="spinSize">
            <a-radio-button :value="'large'">大号加载</a-radio-button>
            <a-radio-button :value="'default'">中号加载</a-radio-button>
            <a-radio-button :value="'small'">小号加载</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">
              设置延迟显示加载时间（毫秒）
            </span>
            <a-input-number style="width: 100px" v-model="spinDelay" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置加载描述文案</span>
            <a-input style="width: 100px" v-model="spinTip" />
          </div>
        </div>
        <div>
          <a-spin
            :delay="spinDelay"
            :size="spinSize"
            :spinning="spinSpinning"
            :tip="spinTip"
          >
            <div class="spin-content">加载好的内容</div>
          </a-spin>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card class="card-margin" title="ElementUI 加载">
        <div class="radio-box">
          <a-radio-group v-model="spinStatusE" @change="changeLoading">
            <a-radio-button :value="true">加载</a-radio-button>
            <a-radio-button :value="false">完成</a-radio-button>
          </a-radio-group>
          <div class="string-set">
            <span style="margin-right: 5px">设置加载图标</span>
            <a-input style="width: 150px" v-model="spinSpinnerE" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置加载背景色</span>
            <a-input style="width: 150px" v-model="spinBackgroundE" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置加载描述文案</span>
            <a-input style="width: 150px" v-model="spinTextE" />
          </div>
        </div>
        <div>
          <div id="loading-content">加载好的内容</div>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card class="card-AtUI" title="AtUI 加载">
        <div>AtUI框架没有加载组件</div>
      </a-card>
      <!-- ViewUI -->
      <a-card class="card-margin" title="ViewUI 加载">
        <div class="radio-box">
          <a-radio-group v-model="spinSpinning">
            <a-radio-button :value="true">加载</a-radio-button>
            <a-radio-button :value="false">完成</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="spinSize">
            <a-radio-button :value="'large'">大号加载</a-radio-button>
            <a-radio-button :value="'default'">中号加载</a-radio-button>
            <a-radio-button :value="'small'">小号加载</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">
              设置延迟显示加载时间（毫秒）
            </span>
            <a-input-number style="width: 100px" v-model="spinDelay" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置加载描述文案</span>
            <a-input style="width: 100px" v-model="spinTip" />
          </div>
        </div>
        <div>
          <a-spin
            :delay="spinDelay"
            :size="spinSize"
            :spinning="spinSpinning"
            :tip="spinTip"
          >
            <div class="spin-content">加载好的内容</div>
          </a-spin>
        </div>
      </a-card>
    </a-card>
  </div>
</template>

<script>
import { Loading } from "element-ui";

export default {
  data() {
    return {
      // AntDesignVue
      spinSpinning: false,
      spinSize: "default",
      spinDelay: null,
      spinTip: "加载中...",
      // ElementUI
      loading: null,
      spinStatusE: false,
      spinSpinnerE: "el-icon-loading",
      spinTextE: "加载中...",
      spinBackgroundE: "",
    };
  },
  methods: {
    changeLoading() {
      if (this.spinStatusE) {
        this.openLoading();
      } else {
        this.closeLoading();
      }
    },
    openLoading() {
      const dom = document.querySelector("#loading-content");
      const options = {
        target: dom,
        body: true,
        fullscreen: true,
        lock: true,
        spinner: this.spinSpinnerE,
        text: this.spinTextE,
        background: this.spinBackgroundE,
      };
      this.loading = Loading.service(options);
    },
    closeLoading() {
      this.loading.close();
    },
  },
};
</script>

<style scoped>
#loading-content {
  padding: 30px;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
}
.spin-content {
  padding: 30px;
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
}
</style>