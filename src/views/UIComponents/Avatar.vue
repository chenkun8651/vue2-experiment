<template>
  <div class="flex" ref="box">
    <!-- 头像 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 头像">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像形状</span>
            <a-select class="w-40" v-model="AntDesignVue.shape">
              <a-select-option :value="'circle'">circle</a-select-option>
              <a-select-option :value="'square'">square</a-select-option>
            </a-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像大小</span>
            <a-input-number class="w-24" v-model="AntDesignVue.size" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像图标</span>
            <a-input class="w-24" v-model="AntDesignVue.icon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置链接图片</span>
            <a-input class="w-80" v-model="AntDesignVue.src" />
          </div>
        </div>
        <div>
          <a-avatar
            :shape="AntDesignVue.shape"
            :size="AntDesignVue.size"
            :icon="AntDesignVue.icon"
            :src="AntDesignVue.src"
          >
          </a-avatar>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 头像">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像形状</span>
            <a-select class="w-40" v-model="ElementUI.shape">
              <a-select-option :value="'circle'">circle</a-select-option>
              <a-select-option :value="'square'">square</a-select-option>
            </a-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像大小（预设值）</span>
            <a-select class="w-40" v-model="ElementUI.size">
              <a-select-option :value="'large'">large</a-select-option>
              <a-select-option :value="'medium'">medium</a-select-option>
              <a-select-option :value="'small'">small</a-select-option>
            </a-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像大小</span>
            <a-input-number
              class="w-24"
              v-model="ElementUI.size"
              @focus="focusAvatarSize"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像图标</span>
            <a-input class="w-36" v-model="ElementUI.icon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置链接图片</span>
            <a-input class="w-80" v-model="ElementUI.src" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置链接图片的位置</span>
            <a-select class="w-40" v-model="ElementUI.fit">
              <a-select-option :value="'fill'">fill</a-select-option>
              <a-select-option :value="'contain'">contain</a-select-option>
              <a-select-option :value="'cover'">cover</a-select-option>
              <a-select-option :value="'none'">none</a-select-option>
              <a-select-option :value="'scale-down'">
                scale-down
              </a-select-option>
            </a-select>
          </div>
        </div>
        <div>
          <el-avatar
            :shape="ElementUI.shape"
            :size="ElementUI.size"
            :icon="ElementUI.icon"
            :src="ElementUI.src"
            :fit="ElementUI.fit"
          >
          </el-avatar>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 头像">
        <div class="text-red-500">AtUI框架没有头像</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 头像">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像形状</span>
            <a-select class="w-40" v-model="ViewUI.shape">
              <a-select-option :value="'circle'">circle</a-select-option>
              <a-select-option :value="'square'">square</a-select-option>
            </a-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像大小（预设值）</span>
            <a-select class="w-40" v-model="ViewUI.size">
              <a-select-option :value="'large'">large</a-select-option>
              <a-select-option :value="'default'">default</a-select-option>
              <a-select-option :value="'small'">small</a-select-option>
            </a-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像大小</span>
            <a-input-number
              class="w-24"
              v-model="ViewUI.size"
              @focus="focusAvatarSize"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像图标</span>
            <a-input class="w-24" v-model="ViewUI.icon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置链接图片</span>
            <a-input class="w-80" v-model="ViewUI.src" />
          </div>
        </div>
        <div>
          <Avatar
            :shape="ViewUI.shape"
            :size="ViewUI.size"
            :icon="ViewUI.icon"
            :src="ViewUI.src"
          >
          </Avatar>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <div class="w-3/12 pl-5">
      <a-anchor
        :offsetTop="60"
        :affix="true"
        :showInkInFixed="true"
        :getContainer="() => this.$refs.box"
      >
        <a-anchor-link href="#1" title="AntDesignVue 头像"></a-anchor-link>
        <a-anchor-link href="#2" title="ElementUI 头像"></a-anchor-link>
        <a-anchor-link href="#3" title="AtUI 头像"></a-anchor-link>
        <a-anchor-link href="#4" title="ViewUI 头像"></a-anchor-link>
      </a-anchor>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        shape: "circle",
        size: 32,
        icon: "user",
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      },
      ElementUI: {
        shape: "circle",
        size: "medium",
        icon: "el-icon-user-solid",
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        fit: "cover",
      },
      ViewUI: {
        shape: "circle",
        size: "default",
        icon: "ios-person",
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      },
    };
  },
  methods: {
    focusAvatarSize() {
      if (typeof this.ElementUI.size === "string") {
        this.ElementUI.size = 32;
      }
      if (typeof this.ViewUI.size === "string") {
        this.ViewUI.size = 32;
      }
    },
  },
};
</script>