<template>
  <div class="flex" ref="box">
    <!-- 按钮 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 按钮">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">禁用按钮</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">加载按钮</span>
            <a-switch v-model="AntDesignVue.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">按钮填充色是否透明</span>
            <a-switch v-model="AntDesignVue.ghost" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">按钮是否撑满父级宽度</span>
            <a-switch v-model="AntDesignVue.block" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮类型</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'danger'">danger</el-option>
              <el-option :value="'dashed'">dashed</el-option>
              <el-option :value="'link'">link</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮形状</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.shape">
              <el-option :value="'circle'">圆形</el-option>
              <el-option :value="'round'">圆角</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮图标</span>
            <a-input class="w-36" v-model="AntDesignVue.icon" />
          </div>
        </div>
        <div>
          <a-button
            :type="AntDesignVue.type"
            :ghost="AntDesignVue.ghost"
            :icon="AntDesignVue.icon"
            :shape="AntDesignVue.shape"
            :size="AntDesignVue.size"
            :block="AntDesignVue.block"
            :disabled="AntDesignVue.disabled"
            :loading="AntDesignVue.loading"
          >
            默认按钮
          </a-button>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 按钮">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">禁用按钮</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">加载按钮</span>
            <a-switch v-model="ElementUI.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否为简洁按钮</span>
            <a-switch v-model="ElementUI.plain" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否为圆角按钮</span>
            <a-switch v-model="ElementUI.round" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否为圆形按钮</span>
            <a-switch v-model="ElementUI.circle" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'danger'">danger</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'text'">text</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="'medium'">medium</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'mini'">mini</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮图标</span>
            <a-input class="w-36" v-model="ElementUI.icon" />
          </div>
        </div>
        <div>
          <el-button
            :type="ElementUI.type"
            :size="ElementUI.size"
            :icon="ElementUI.icon"
            :plain="ElementUI.plain"
            :round="ElementUI.round"
            :circle="ElementUI.circle"
            :disabled="ElementUI.disabled"
            :loading="ElementUI.loading"
          >
            默认按钮
          </el-button>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 按钮">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">禁用按钮</span>
            <a-switch v-model="AtUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">加载按钮</span>
            <a-switch v-model="AtUI.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">按钮填充色是否透明</span>
            <a-switch v-model="AtUI.hollow" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮类型</span>
            <el-select size="small" class="w-36" v-model="AtUI.type">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'text'">text</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮大小</span>
            <el-select size="small" class="w-36" v-model="AtUI.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'smaller'">smaller</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮图标</span>
            <a-input class="w-36" v-model="AtUI.icon" />
          </div>
        </div>
        <div>
          <at-button
            :disabled="AtUI.disabled"
            :loading="AtUI.loading"
            :hollow="AtUI.hollow"
            :type="AtUI.type"
            :size="AtUI.size"
            :icon="AtUI.icon"
          >
            默认按钮
          </at-button>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 按钮">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">禁用按钮</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">加载按钮</span>
            <a-switch v-model="ViewUI.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">按钮填充色是否透明</span>
            <a-switch v-model="ViewUI.ghost" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">按钮是否撑满父级宽度</span>
            <a-switch v-model="ViewUI.long" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮类型</span>
            <el-select size="small" class="w-36" v-model="ViewUI.type">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'dashed'">dashed</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'text'">text</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮形状</span>
            <el-select size="small" class="w-36" v-model="ViewUI.shape">
              <el-option :value="'circle'">circle</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置按钮图标</span>
            <a-input class="w-36" v-model="ViewUI.icon" />
          </div>
        </div>
        <div>
          <Button
            :disabled="ViewUI.disabled"
            :loading="ViewUI.loading"
            :ghost="ViewUI.ghost"
            :long="ViewUI.long"
            :type="ViewUI.type"
            :shape="ViewUI.shape"
            :size="ViewUI.size"
            :icon="ViewUI.icon"
          >
            默认按钮
          </Button>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.buttonAnchor"
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
        disabled: false,
        loading: false,
        ghost: false,
        block: false,
        type: "primary",
        shape: "round",
        size: "default",
        icon: "search",
      },
      ElementUI: {
        disabled: false,
        loading: false,
        plain: false,
        round: false,
        circle: false,
        type: "primary",
        size: "medium",
        icon: "el-icon-search",
      },
      AtUI: {
        disabled: false,
        loading: false,
        hollow: false,
        type: "primary",
        size: "large",
        icon: "icon-search",
      },
      ViewUI: {
        disabled: false,
        loading: false,
        ghost: false,
        long: false,
        type: "primary",
        shape: "circle",
        size: "default",
        icon: "ios-search",
      },
    };
  },
  methods: {},
};
</script>