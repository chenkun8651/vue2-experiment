<template>
  <!-- AntDesignVue特色 -->
  <div>
    <!-- 评论组件 -->
    <a-card class="my-5" title="AntDesignVue 评论">
      <div>
        <a-comment>
          <!-- 评论人 -->
          <a slot="author">陈坤</a>
          <!-- 头像 -->
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="陈坤"
          >
          </a-avatar>
          <!-- 日期 -->
          <a-tooltip
            slot="datetime"
            :title="moment().format('YYYY-MM-DD HH:mm:ss')"
          >
            <span>{{ moment().fromNow() }}</span>
          </a-tooltip>
          <!-- 操作 -->
          <template slot="actions">
            <span key="comment-basic-like">
              <a-tooltip title="赞">
                <a-icon
                  type="like"
                  :theme="commentAction === 'liked' ? 'filled' : 'outlined'"
                  @click="commentLike"
                />
              </a-tooltip>
              <span style="padding-left: '8px'; cursor: 'auto'">
                {{ commentLikes }}
              </span>
            </span>
            <span key="comment-basic-dislike">
              <a-tooltip title="踩">
                <a-icon
                  type="dislike"
                  :theme="commentAction === 'disliked' ? 'filled' : 'outlined'"
                  @click="commentDislike"
                />
              </a-tooltip>
              <span style="padding-left: '8px'; cursor: 'auto'">
                {{ commentDislikes }}
              </span>
            </span>
            <span key="comment-basic-reply-to">回复</span>
          </template>
          <!-- 评论内容 -->
          <p slot="content">AndDesignVue这套UI框架非常好用</p>
        </a-comment>
      </div>
    </a-card>
    <!-- 统计数值组件 -->
    <a-card class="my-5" title="AntDesignVue 统计数值">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置千分位标识符</span>
          <a-input style="width: 100px" v-model="statisticGroupSeparator">
          </a-input>
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置小数点</span>
          <a-input style="width: 100px" v-model="statisticDecimalSeparator">
          </a-input>
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置数值精度</span>
          <a-input-number style="width: 100px" v-model="statisticPrecision">
          </a-input-number>
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置数值前缀</span>
          <a-input style="width: 100px" v-model="statisticPrefix"> </a-input>
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置数值后缀</span>
          <a-input style="width: 100px" v-model="statisticSuffix"> </a-input>
        </div>
      </div>
      <div>
        <a-statistic
          title="账号余额 (CNY)"
          :value="91235112893"
          :decimalSeparator="statisticDecimalSeparator"
          :groupSeparator="statisticGroupSeparator"
          :precision="statisticPrecision"
          :prefix="statisticPrefix"
          :suffix="statisticSuffix"
        >
        </a-statistic>
      </div>
    </a-card>
    <!-- 倒计时组件 -->
    <a-card class="my-5" title="AntDesignVue 倒计时">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置时间格式化</span>
          <a-input style="width: 200px" v-model="statisticFormat"> </a-input>
        </div>
      </div>
      <div>
        <a-statistic-countdown
          title="倒计时"
          :value="statisticDeadline"
          :format="statisticFormat"
        />
      </div>
    </a-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      moment,
      // 评论
      commentLikes: 0,
      commentDislikes: 0,
      commentAction: null,
      //统计数值
      statisticGroupSeparator: ",",
      statisticDecimalSeparator: ".",
      statisticPrecision: 2,
      statisticPrefix: "",
      statisticSuffix: "",
      // 倒计时
      statisticDeadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      statisticFormat: "HH:mm:ss:SSS",
    };
  },
  methods: {
    commentLike() {
      this.commentLikes = 1;
      this.commentDislikes = 0;
      this.commentAction = "liked";
    },
    commentDislike() {
      this.commentLikes = 0;
      this.commentDislikes = 1;
      this.commentAction = "disliked";
    },
  },
};
</script>