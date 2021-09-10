<template>
  <div class="flex" ref="box">
    <!-- AntDesignVue特色 -->
    <div class="w-9/12">
      <!-- 评论 -->
      <a-card id="1" class="my-5" title="评论">
        <div>
          <a-comment>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            >
            </a-avatar>
            <a slot="author">chenkun</a>
            <a-tooltip
              slot="datetime"
              :title="moment().format('YYYY-MM-DD HH:mm:ss')"
            >
              <span> {{ moment().fromNow() }} </span>
            </a-tooltip>
            <template slot="actions">
              <span key="comment-basic-like">
                <a-tooltip title="赞">
                  <a-icon
                    type="like"
                    :theme="action === 'liked' ? 'filled' : 'outlined'"
                    @click="commentLike"
                  />
                </a-tooltip>
                <span class="pl-2 cursor-auto">
                  {{ likes }}
                </span>
              </span>
              <span key="comment-basic-dislike">
                <a-tooltip title="踩">
                  <a-icon
                    type="dislike"
                    :theme="action === 'disliked' ? 'filled' : 'outlined'"
                    @click="commentDislike"
                  />
                </a-tooltip>
                <span class="pl-2 cursor-auto">
                  {{ dislikes }}
                </span>
              </span>
              <span key="comment-basic-reply-to">回复</span>
            </template>
            <p slot="content">AndDesignVue这套UI框架非常好用</p>
          </a-comment>
        </div>
      </a-card>
      <!-- 统计数值 -->
      <a-card id="2" class="my-5" title="统计数值">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置数值前缀</span>
            <a-input class="w-24" v-model="prefix"></a-input>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置数值后缀</span>
            <a-input class="w-24" v-model="suffix"></a-input>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置千分位标识符</span>
            <a-input class="w-24" v-model="groupSeparator"></a-input>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置小数点样式</span>
            <a-input class="w-24" v-model="decimalSeparator"></a-input>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置数值精度</span>
            <a-input-number class="w-24" v-model="precision"></a-input-number>
          </div>
        </div>
        <div>
          <a-statistic
            :title="'账号余额 (CNY)'"
            :value="12565847"
            :decimalSeparator="decimalSeparator"
            :groupSeparator="groupSeparator"
            :precision="precision"
            :prefix="prefix"
            :suffix="suffix"
          >
          </a-statistic>
        </div>
      </a-card>
      <!-- 倒计时 -->
      <a-card id="3" class="my-5" title="倒计时">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置时间格式化</span>
            <a-input class="w-48" v-model="format"> </a-input>
          </div>
        </div>
        <div>
          <a-statistic-countdown
            :title="'倒计时'"
            :value="Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30"
            :format="format"
          />
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      moment,
      // 评论
      likes: 0,
      dislikes: 0,
      action: null,
      // 统计数值
      prefix: "",
      suffix: "",
      groupSeparator: ",",
      decimalSeparator: ".",
      precision: 2,
      // 倒计时
      format: "HH:mm:ss:SSS",
    };
  },
  methods: {
    commentLike() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    commentDislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
  },
};
</script>