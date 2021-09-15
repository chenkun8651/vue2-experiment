<template>
  <div class="flex" ref="box">
    <!-- 警告提示 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 警告提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="AntDesignVue.banner" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示图标</span>
            <a-switch v-model="AntDesignVue.showIcon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="AntDesignVue.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置警告提示类型</span>
            <el-select size="small" class="w-48" v-model="AntDesignVue.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">自定义图标</span>
            <a-input class="w-24" v-model="AntDesignVue.icon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">自定义关闭文本</span>
            <a-input class="w-24" v-model="AntDesignVue.closeText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标题</span>
            <a-input class="w-48" v-model="AntDesignVue.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置辅助内容</span>
            <a-input class="w-48" v-model="AntDesignVue.description" />
          </div>
        </div>
        <div>
          <a-alert
            :banner="AntDesignVue.banner"
            :show-icon="AntDesignVue.showIcon"
            :closable="AntDesignVue.closable"
            :type="AntDesignVue.type"
            :icon="AntDesignVue.icon"
            :close-text="AntDesignVue.closeText"
            :message="AntDesignVue.message"
            :description="AntDesignVue.description"
          >
          </a-alert>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 警告提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示图标</span>
            <a-switch v-model="ElementUI.showIcon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ElementUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否文本居中</span>
            <a-switch v-model="ElementUI.center" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置警告提示主题</span>
            <el-select size="small" class="w-48" v-model="ElementUI.effect">
              <el-option :value="'light'">light</el-option>
              <el-option :value="'dark'">dark</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置警告提示类型</span>
            <el-select size="small" class="w-48" v-model="ElementUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">自定义关闭文本</span>
            <a-input class="w-24" v-model="ElementUI.closeText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标题</span>
            <a-input class="w-48" v-model="ElementUI.title" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置辅助内容</span>
            <a-input class="w-48" v-model="ElementUI.description" />
          </div>
        </div>
        <div>
          <el-alert
            :show-icon="ElementUI.showIcon"
            :closable="ElementUI.closable"
            :center="ElementUI.center"
            :effect="ElementUI.effect"
            :type="ElementUI.type"
            :close-text="ElementUI.closeText"
            :title="ElementUI.title"
            :description="ElementUI.description"
          >
          </el-alert>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 警告提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示图标</span>
            <a-switch v-model="AtUI.showIcon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="AtUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置警告提示类型</span>
            <el-select size="small" class="w-48" v-model="AtUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">自定义图标</span>
            <a-input class="w-24" v-model="AtUI.icon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">自定义关闭文本</span>
            <a-input class="w-24" v-model="AtUI.closeText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标题</span>
            <a-input class="w-48" v-model="AtUI.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置辅助内容</span>
            <a-input class="w-48" v-model="AtUI.description" />
          </div>
        </div>
        <div>
          <at-alert
            :show-icon="AtUI.showIcon"
            :closable="AtUI.closable"
            :type="AtUI.type"
            :icon="AtUI.icon"
            :close-text="AtUI.closeText"
            :message="AtUI.message"
            :description="AtUI.description"
          >
          </at-alert>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 警告提示">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示图标</span>
            <a-switch v-model="ViewUI.showIcon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ViewUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置警告提示类型</span>
            <el-select size="small" class="w-48" v-model="ViewUI.type">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标题</span>
            <a-input class="w-48" v-model="ViewUI.message" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置辅助内容</span>
            <a-input class="w-48" v-model="ViewUI.description" />
          </div>
        </div>
        <div>
          <Alert
            :show-icon="ViewUI.showIcon"
            :closable="ViewUI.closable"
            :type="ViewUI.type"
          >
            {{ ViewUI.message }}
            <span slot="desc">{{ ViewUI.description }}</span>
          </Alert>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.alertAnchor"
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
        banner: false,
        showIcon: false,
        closable: false,
        type: "success",
        icon: "",
        closeText: "",
        message: "警告提示标题",
        description: "警告提示辅助内容",
      },
      ElementUI: {
        showIcon: false,
        closable: false,
        center: false,
        effect: "light",
        type: "success",
        closeText: "",
        title: "警告提示标题",
        description: "警告提示辅助内容",
      },
      AtUI: {
        showIcon: false,
        closable: false,
        type: "success",
        icon: "",
        closeText: "",
        message: "警告提示标题",
        description: "警告提示辅助内容",
      },
      ViewUI: {
        showIcon: false,
        closable: false,
        type: "success",
        message: "警告提示标题",
        description: "警告提示辅助内容",
      },
    };
  },
  methods: {},
};
</script>