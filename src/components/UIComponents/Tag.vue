<template>
  <!-- 标签组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 标签">
      <div class="radio-box">
        <a-radio-group v-model="tagVisible">
          <a-radio-button :value="true">显示标签</a-radio-button>
          <a-radio-button :value="false">隐藏标签</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tagClosable">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置标签颜色（十六进制码）</span>
          <a-input style="width: 100px" v-model="tagColor" />
        </div>
      </div>
      <div>
        <a-tag :closable="tagClosable" :color="tagColor" :visible="tagVisible">
          标签
        </a-tag>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 标签">
      <div class="radio-box">
        <a-radio-group v-model="tagDisableTransitionsE">
          <a-radio-button :value="true">开启渐变动画</a-radio-button>
          <a-radio-button :value="false">关闭渐变动画</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tagSizeE">
          <a-radio-button :value="null">large</a-radio-button>
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tagEffectE">
          <a-radio-button :value="'light'">light</a-radio-button>
          <a-radio-button :value="'dark'">dark</a-radio-button>
          <a-radio-button :value="'plain'">plain</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tagTypeE">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'danger'">danger</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tagClosableE">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tagHitE">
          <a-radio-button :value="true">显示边框描线</a-radio-button>
          <a-radio-button :value="false">隐藏边框描线</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置标签背景色（十六进制码）</span>
          <a-input style="width: 100px" v-model="tagColorE" />
        </div>
      </div>
      <div>
        <el-tag
          :type="tagTypeE"
          :closable="tagClosableE"
          :disable-transitions="tagDisableTransitionsE"
          :hit="tagHitE"
          :color="tagColorE"
          :size="tagSizeE"
          :effect="tagEffectE"
        >
          标签
        </el-tag>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 标签">
      <div class="radio-box">
        <a-radio-group v-model="tagColorA">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tagClosableA">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置标签颜色（十六进制码）</span>
          <a-input style="width: 100px" v-model="tagColorA" />
        </div>
      </div>
      <div>
        <at-tag :closable="tagClosableA" :color="tagColorA">标签</at-tag>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 标签">
      <div class="radio-box">
        <a-radio-group v-model="TagFadeV">
          <a-radio-button :value="true">开启渐变动画</a-radio-button>
          <a-radio-button :value="false">关闭渐变动画</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="TagSizeV">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="TagTypeV">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'border'">border</a-radio-button>
          <a-radio-button :value="'dot'">dot</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="TagColorV">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="TagClosableV">
          <a-radio-button :value="true">显示关闭按钮</a-radio-button>
          <a-radio-button :value="false">隐藏关闭按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-show="TagTypeV === null" v-model="TagCheckableV">
          <a-radio-button :value="true">开启标签选择</a-radio-button>
          <a-radio-button :value="false">关闭标签选择</a-radio-button>
        </a-radio-group>
        <a-radio-group v-show="TagTypeV === null" v-model="TagCheckedV">
          <a-radio-button :value="true">选中标签状态</a-radio-button>
          <a-radio-button :value="false">未选中标签状态</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置标签颜色（十六进制码）</span>
          <a-input style="width: 100px" v-model="TagColorV" />
        </div>
      </div>
      <div>
        <Tag
          :type="TagTypeV"
          :color="TagColorV"
          :closable="TagClosableV"
          :fade="TagFadeV"
          :size="TagSizeV"
          :checkable="TagCheckableV"
          :checked="TagCheckedV"
        >
          标签
        </Tag>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      tagVisible: true,
      tagClosable: false,
      tagColor: "blue",
      // ElementUI
      tagTypeE: null,
      tagClosableE: false,
      tagDisableTransitionsE: false,
      tagHitE: false,
      tagSizeE: null,
      tagEffectE: "light",
      tagColorE: null,
      // AtUI
      tagClosableA: false,
      tagColorA: "default",
      // ViewUI
      TagTypeV: null,
      TagColorV: "default",
      TagClosableV: false,
      TagFadeV: true,
      TagSizeV: "default",
      TagCheckableV: false,
      TagCheckedV: true,
    };
  },
  methods: {},
};
</script>