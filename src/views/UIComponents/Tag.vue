<template>
  <div class="flex" ref="box">
    <!-- 标签 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 标签">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示标签</span>
            <a-switch v-model="AntDesignVue.visible" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否关闭按钮</span>
            <a-switch v-model="AntDesignVue.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签颜色（十六进制码）</span>
            <a-input class="w-24" v-model="AntDesignVue.color" />
          </div>
        </div>
        <div>
          <a-tag
            :visible="AntDesignVue.visible"
            :closable="AntDesignVue.closable"
            :color="AntDesignVue.color"
          >
            标签
          </a-tag>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 标签">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启渐变动画</span>
            <a-switch v-model="ElementUI.disableTransitions" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否关闭按钮</span>
            <a-switch v-model="ElementUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框线</span>
            <a-switch v-model="ElementUI.hit" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签主题</span>
            <el-select size="small" class="w-36" v-model="ElementUI.effect">
              <el-option :value="'light'">light</el-option>
              <el-option :value="'dark'">dark</el-option>
              <el-option :value="'plain'">plain</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="null">default</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'danger'">danger</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'medium'">medium</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'mini'">mini</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签背景色（十六进制码）</span>
            <a-input class="w-24" v-model="ElementUI.color" />
          </div>
        </div>
        <div>
          <el-tag
            :disable-transitions="ElementUI.disableTransitions"
            :closable="ElementUI.closable"
            :hit="ElementUI.hit"
            :effect="ElementUI.effect"
            :type="ElementUI.type"
            :size="ElementUI.size"
            :color="ElementUI.color"
          >
            标签
          </el-tag>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 标签">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="AtUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签颜色（预设值）</span>
            <el-select size="small" class="w-36" v-model="AtUI.color">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签颜色（十六进制码）</span>
            <a-input class="w-24" v-model="AtUI.color" />
          </div>
        </div>
        <div>
          <at-tag :closable="AtUI.closable" :color="AtUI.color">标签</at-tag>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 标签">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启渐变动画</span>
            <a-switch v-model="ViewUI.fade" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启标签选择</span>
            <a-switch v-model="ViewUI.checkable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示关闭按钮</span>
            <a-switch v-model="ViewUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示选中标签状态</span>
            <a-switch v-model="ViewUI.checked" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签类型</span>
            <el-select size="small" class="w-36" v-model="ViewUI.type">
              <el-option :value="null">default</el-option>
              <el-option :value="'border'">border</el-option>
              <el-option :value="'dot'">dot</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'medium'">medium</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签颜色</span>
            <el-select size="small" class="w-36" v-model="ViewUI.color">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签颜色（十六进制码）</span>
            <a-input class="w-24" v-model="ViewUI.color" />
          </div>
        </div>
        <div>
          <Tag
            :fade="ViewUI.fade"
            :checkable="ViewUI.checkable"
            :closable="ViewUI.closable"
            :checked="ViewUI.checked"
            :type="ViewUI.type"
            :size="ViewUI.size"
            :color="ViewUI.color"
          >
            标签
          </Tag>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.tagAnchor"
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
        visible: false,
        closable: false,
        color: "blue",
      },
      ElementUI: {
        disableTransitions: false,
        closable: false,
        hit: false,
        effect: "light",
        type: null,
        size: null,
        color: "blue",
      },
      AtUI: {
        closable: false,
        color: "primary",
      },
      ViewUI: {
        fade: false,
        checkable: false,
        closable: false,
        checked: false,
        type: null,
        size: "default",
        color: "primary",
      },
    };
  },
  methods: {},
};
</script>