<template>
  <!-- 头像组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 头像">
      <div class="radio-box">
        <a-radio-group v-model="avatarShape">
          <a-radio-button :value="'circle'">圆形</a-radio-button>
          <a-radio-button :value="'square'">方形</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置头像大小</span>
          <a-input-number style="width: 100px" v-model="avatarSize" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置头像图标</span>
          <a-input style="width: 150px" v-model="avatarIcon" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置链接图片</span>
          <a-input style="width: 200px" v-model="avatarSrc" />
        </div>
      </div>
      <div>
        <a-avatar
          :icon="avatarIcon"
          :shape="avatarShape"
          :size="avatarSize"
          :src="avatarSrc"
        >
        </a-avatar>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 头像">
      <div class="radio-box">
        <a-radio-group v-model="avatarShapeE">
          <a-radio-button :value="'circle'">圆形</a-radio-button>
          <a-radio-button :value="'square'">方形</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="avatarSizeE">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置头像大小</span>
          <a-input-number
            style="width: 100px"
            v-model="avatarSizeE"
            @focus="focusAvatarSize"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置头像图标</span>
          <a-input style="width: 150px" v-model="avatarIconE" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置链接图片</span>
          <a-input style="width: 200px" v-model="avatarSrcE" />
        </div>
        <a-radio-group v-show="avatarSrcE" v-model="avatarFitE">
          <a-radio-button :value="'fill'">fill</a-radio-button>
          <a-radio-button :value="'contain'">contain</a-radio-button>
          <a-radio-button :value="'cover'">cover</a-radio-button>
          <a-radio-button :value="'none'">none</a-radio-button>
          <a-radio-button :value="'scale-down'">scale-down</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-avatar
          :shape="avatarShapeE"
          :size="avatarSizeE"
          :icon="avatarIconE"
          :src="avatarSrcE"
          :fit="avatarFitE"
        >
        </el-avatar>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 头像">
      <div class="c-f5222d">AtUI框架没有头像组件</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 头像">
      <div class="radio-box">
        <a-radio-group v-model="avatarShapeV">
          <a-radio-button :value="'circle'">圆形</a-radio-button>
          <a-radio-button :value="'square'">方形</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="avatarSizeV">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置头像大小</span>
          <a-input-number
            style="width: 100px"
            v-model="avatarSizeV"
            @focus="focusAvatarSize"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置头像图标</span>
          <a-input style="width: 150px" v-model="avatarIconV" />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置链接图片</span>
          <a-input style="width: 200px" v-model="avatarSrcV" />
        </div>
      </div>
      <div>
        <Avatar
          :shape="avatarShapeV"
          :size="avatarSizeV"
          :icon="avatarIconV"
          :src="avatarSrcV"
        >
        </Avatar>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      avatarShape: "circle",
      avatarSize: 32,
      avatarIcon: "user",
      avatarSrc:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      // ElementUI
      avatarShapeE: "circle",
      avatarSizeE: "medium",
      avatarIconE: "el-icon-user-solid",
      avatarSrcE:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      avatarFitE: "cover",
      // ViewUI
      avatarShapeV: "circle",
      avatarSizeV: "default",
      avatarIconV: "ios-person",
      avatarSrcV:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
  methods: {
    focusAvatarSize() {
      if (typeof this.avatarSizeE === "string") {
        this.avatarSizeE = 32;
      }
      if (typeof this.avatarSizeV === "string") {
        this.avatarSizeV = 32;
      }
    },
  },
};
</script>