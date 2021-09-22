<template>
  <div class="flex" ref="box">
    <!-- 描述列表 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 描述列表">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="AntDesignVue.bordered" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示冒号</span>
            <a-switch v-model="AntDesignVue.colon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置描述列表大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'middle'">middle</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置描述列表排列方向</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.layout">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-descriptions
            title="用户信息"
            :bordered="AntDesignVue.bordered"
            :colon="AntDesignVue.colon"
            :size="AntDesignVue.size"
            :layout="AntDesignVue.layout"
          >
            <a-descriptions-item label="姓名">陈坤</a-descriptions-item>
            <a-descriptions-item label="电话">1810000000</a-descriptions-item>
            <a-descriptions-item label="现居地">火星</a-descriptions-item>
            <a-descriptions-item label="备注">----</a-descriptions-item>
            <a-descriptions-item label="地址">
              中国第三大街185号
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 描述列表">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ElementUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示冒号</span>
            <a-switch v-model="ElementUI.colon" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置描述列表大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'medium'">medium</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'mini'">mini</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置描述列表排列方向</span>
            <el-select size="small" class="w-36" v-model="ElementUI.direction">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <el-descriptions
            title="用户信息"
            :border="ElementUI.border"
            :colon="ElementUI.colon"
            :size="ElementUI.size"
            :direction="ElementUI.direction"
          >
            <el-descriptions-item label="姓名">陈坤</el-descriptions-item>
            <el-descriptions-item label="电话">1810000000</el-descriptions-item>
            <el-descriptions-item label="现居地">火星</el-descriptions-item>
            <el-descriptions-item label="备注">----</el-descriptions-item>
            <el-descriptions-item label="地址">
              中国 北京 第三大街 185号
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 描述列表">
        <div class="text-red-500">AtUI框架没有描述列表</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 描述列表">
        <div class="text-yellow-500">ViewUI框架的描述列表需要付费使用</div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.descriptionsAnchor"
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
        bordered: false,
        colon: false,
        size: "default",
        layout: "horizontal",
      },
      ElementUI: {
        border: false,
        colon: false,
        size: null,
        direction: "horizontal",
      },
    };
  },
  methods: {},
};
</script>