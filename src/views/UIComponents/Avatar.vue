<template>
  <div class="flex" ref="box">
    <!-- 头像 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 头像">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像形状</span>
            <el-select size="small" class="w-48" v-model="AntDesignVue.shape">
              <el-option :value="'circle'">circle</el-option>
              <el-option :value="'square'">square</el-option>
            </el-select>
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
            <el-select size="small" class="w-48" v-model="ElementUI.shape">
              <el-option :value="'circle'">circle</el-option>
              <el-option :value="'square'">square</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像大小（预设值）</span>
            <el-select size="small" class="w-48" v-model="ElementUI.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'medium'">medium</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
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
            <el-select size="small" class="w-48" v-model="ElementUI.fit">
              <el-option :value="'fill'">fill</el-option>
              <el-option :value="'contain'">contain</el-option>
              <el-option :value="'cover'">cover</el-option>
              <el-option :value="'none'">none</el-option>
              <el-option :value="'scale-down'"> scale-down </el-option>
            </el-select>
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
            <el-select size="small" class="w-48" v-model="ViewUI.shape">
              <el-option :value="'circle'">circle</el-option>
              <el-option :value="'square'">square</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置头像大小（预设值）</span>
            <el-select size="small" class="w-48" v-model="ViewUI.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
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
    <BasicAnchor
      :parentList="this.AnchorInfo.avatarAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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