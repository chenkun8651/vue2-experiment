<template>
  <!-- 评论组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 评论">
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
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 评论">
      <div class="c-f5222d">ElementUI框架没有评论组件</div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 评论">
      <div class="c-f5222d">AtUI框架没有评论组件</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 评论">
      <div class="c-f5222d">ViewUI框架没有评论组件</div>
    </a-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      moment,
      // AntDesignVue
      commentLikes: 0,
      commentDislikes: 0,
      commentAction: null,
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