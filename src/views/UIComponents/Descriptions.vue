<template>
  <!-- 描述列表 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 描述列表">
      <div class="radio-box">
        <a-radio-group v-model="descriptionsSize">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'middle'">middle</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsLayout">
          <a-radio-button :value="'horizontal'">水平布局</a-radio-button>
          <a-radio-button :value="'vertical'">垂直布局</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsBordered">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsColon">
          <a-radio-button :value="true">显示冒号</a-radio-button>
          <a-radio-button :value="false">隐藏冒号</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-descriptions
          title="用户信息"
          :bordered="descriptionsBordered"
          :size="descriptionsSize"
          :layout="descriptionsLayout"
          :colon="descriptionsColon"
        >
          <a-descriptions-item label="姓名">陈坤</a-descriptions-item>
          <a-descriptions-item label="电话">1810000000</a-descriptions-item>
          <a-descriptions-item label="现居地">火星</a-descriptions-item>
          <a-descriptions-item label="备注">----</a-descriptions-item>
          <a-descriptions-item label="地址">
            中国 北京 第三大街 185号
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 描述列表">
      <div class="radio-box">
        <a-radio-group v-model="descriptionsSizeE">
          <a-radio-button :value="'null'">default</a-radio-button>
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsDirectionE">
          <a-radio-button :value="'horizontal'">水平布局</a-radio-button>
          <a-radio-button :value="'vertical'">垂直布局</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsBorderE">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsColonE">
          <a-radio-button :value="true">显示冒号</a-radio-button>
          <a-radio-button :value="false">隐藏冒号</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-descriptions
          title="用户信息"
          :border="descriptionsBorderE"
          :size="descriptionsSizeE"
          :direction="descriptionsDirectionE"
          :colon="descriptionsColonE"
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
    <a-card class="card-margin" title="AtUI 描述列表">
      <div class="c-f5222d">AtUI框架没有描述列表</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 描述列表">
      <div class="c-faad14">ViewUI框架的描述列表需要付费使用</div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      descriptionsSize: "default",
      descriptionsLayout: "horizontal",
      descriptionsBordered: true,
      descriptionsColon: false,
      // ElementUI
      descriptionsSizeE: null,
      descriptionsDirectionE: "horizontal",
      descriptionsBorderE: true,
      descriptionsColonE: false,
    };
  },
  methods: {},
};
</script>