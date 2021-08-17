<template>
  <!-- 卡片组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 卡片">
      <div class="radio-box">
        <a-radio-group v-model="cardLoading">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="cardBordered">
          <a-radio-button :value="true">有边框</a-radio-button>
          <a-radio-button :value="false">无边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="cardSize">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
      </div>
      <div class="card">
        <a-card
          style="width: 300px"
          title="卡片标题"
          :loading="cardLoading"
          :bordered="cardBordered"
          :size="cardSize"
        >
          <div v-for="o in 3" :key="o" class="text item">
            {{ "卡片内容 " + o }}
          </div>
        </a-card>
        <a-card
          style="width: 300px"
          title="网格型内嵌卡片标题"
          :loading="cardLoading"
          :bordered="cardBordered"
          :size="cardSize"
        >
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
          <a-card-grid style="width: 25%; text-align: center">
            内容
          </a-card-grid>
        </a-card>
        <a-card
          style="width: 300px"
          :loading="cardLoading"
          :bordered="cardBordered"
          :size="cardSize"
        >
          <img
            slot="cover"
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" />
            <a-icon key="ellipsis" type="ellipsis" />
          </template>
          <a-card-meta title="信息卡片标题" description="描述卡片内容">
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </a-card-meta>
        </a-card>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 卡片">
      <div class="radio-box">
        <a-radio-group v-model="cardShadowE">
          <a-radio-button :value="'always'">always</a-radio-button>
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'never'">never</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-card style="width: 300px" :shadow="cardShadowE">
          <div slot="header" class="clearfix">
            <span>卡片标题</span>
            <el-button style="float: right; padding: 3px 0" type="text">
              操作按钮
            </el-button>
          </div>
          <div v-for="o in 3" :key="o" class="text item">
            {{ "卡片内容 " + o }}
          </div>
        </el-card>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 卡片">
      <div class="radio-box">
        <a-radio-group v-model="cardBorderedA">
          <a-radio-button :value="true">有边框</a-radio-button>
          <a-radio-button :value="false">无边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="cardNoHoverA">
          <a-radio-button :value="true">隐藏阴影</a-radio-button>
          <a-radio-button :value="false">显示阴影</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="cardLoadingA">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-card
          style="width: 300px"
          :bordered="cardBorderedA"
          :no-hover="cardNoHoverA"
          :loading="cardLoadingA"
        >
          <h4 slot="title">卡片标题</h4>
          <div slot="extra"><a>操作按钮</a></div>
          <div v-for="o in 3" :key="o" class="text item">
            {{ "卡片内容 " + o }}
          </div>
        </at-card>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 卡片">
      <div class="radio-box">
        <a-radio-group v-model="cardBorderedV">
          <a-radio-button :value="true">有边框</a-radio-button>
          <a-radio-button :value="false">无边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="cardDisHoverV">
          <a-radio-button :value="true">鼠标悬停隐藏阴影</a-radio-button>
          <a-radio-button :value="false">鼠标悬停显示阴影</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="cardShadowV">
          <a-radio-button :value="true">显示卡片阴影</a-radio-button>
          <a-radio-button :value="false">隐藏卡片阴影</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置卡片内边距</span>
          <a-input-number style="width: 100px" v-model="cardPaddingV" />
        </div>
      </div>
      <div>
        <Card
          style="width: 300px"
          :bordered="cardBorderedV"
          :dis-hover="cardDisHoverV"
          :shadow="cardShadowV"
          :padding="cardPaddingV"
        >
          <p slot="title">卡片标题</p>
          <div v-for="o in 3" :key="o" class="text item">
            {{ "卡片内容 " + o }}
          </div>
        </Card>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      cardLoading: false,
      cardBordered: true,
      cardSize: "default",
      // ElementUI
      cardShadowE: "always",
      // AtUI
      cardBorderedA: true,
      cardNoHoverA: false,
      cardLoadingA: false,
      // ViewUI
      cardBorderedV: true,
      cardDisHoverV: false,
      cardShadowV: false,
      cardPaddingV: 16,
    };
  },
  methods: {},
};
</script>

<style scoped>
.card {
  display: flex;
}
.card >>> .ant-card {
  margin-right: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
</style>