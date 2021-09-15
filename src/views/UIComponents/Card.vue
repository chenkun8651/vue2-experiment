<template>
  <div class="flex" ref="box">
    <!-- 卡片 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 卡片">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示加载效果</span>
            <a-switch v-model="AntDesignVue.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示卡片边框</span>
            <a-switch v-model="AntDesignVue.bordered" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置卡片大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div class="card">
          <a-card
            class="w-80"
            title="卡片标题"
            :loading="AntDesignVue.loading"
            :bordered="AntDesignVue.bordered"
            :size="AntDesignVue.size"
          >
            <div class="text-sm mb-4" v-for="item in 3" :key="item">
              {{ "卡片内容 " + item }}
            </div>
          </a-card>
          <a-card
            class="w-80"
            title="网格型内嵌卡片标题"
            :loading="AntDesignVue.loading"
            :bordered="AntDesignVue.bordered"
            :size="AntDesignVue.size"
          >
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
            <a-card-grid class="w-1/4 text-center">内容</a-card-grid>
          </a-card>
          <a-card
            class="w-80"
            :loading="AntDesignVue.loading"
            :bordered="AntDesignVue.bordered"
            :size="AntDesignVue.size"
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
      <a-card id="2" class="my-5" title="ElementUI 卡片">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置卡片阴影的显示方式</span>
            <el-select size="small" class="w-36" v-model="ElementUI.shadow">
              <el-option :value="'always'">always</el-option>
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'never'">never</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <el-card class="w-80" :shadow="ElementUI.shadow">
            <div slot="header" class="clearfix">
              <span>卡片标题</span>
              <el-button class="float-right py-1" type="text">
                操作按钮
              </el-button>
            </div>
            <div class="text-sm mb-4" v-for="item in 3" :key="item">
              {{ "卡片内容 " + item }}
            </div>
          </el-card>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 卡片">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示加载效果</span>
            <a-switch v-model="AtUI.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示卡片边框</span>
            <a-switch v-model="AtUI.bordered" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">鼠标悬停时是否隐藏阴影</span>
            <a-switch v-model="AtUI.noHover" />
          </div>
        </div>
        <div>
          <at-card
            class="w-80"
            :loading="AtUI.loading"
            :bordered="AtUI.bordered"
            :no-hover="AtUI.noHover"
          >
            <h4 slot="title">卡片标题</h4>
            <div slot="extra">操作按钮</div>
            <div class="text-sm mb-4" v-for="item in 3" :key="item">
              {{ "卡片内容 " + item }}
            </div>
          </at-card>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 卡片">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示卡片边框</span>
            <a-switch v-model="ViewUI.bordered" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示卡片阴影</span>
            <a-switch v-model="ViewUI.shadow" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">鼠标悬停时是否隐藏阴影</span>
            <a-switch v-model="ViewUI.disHover" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置卡片内边距</span>
            <a-input-number class="w-24" v-model="ViewUI.padding" />
          </div>
        </div>
        <div>
          <Card
            class="w-80"
            :bordered="ViewUI.bordered"
            :shadow="ViewUI.shadow"
            :dis-hover="ViewUI.disHover"
            :padding="ViewUI.padding"
          >
            <p slot="title">卡片标题</p>
            <div class="text-sm mb-4" v-for="item in 3" :key="item">
              {{ "卡片内容 " + item }}
            </div>
          </Card>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.cardAnchor"
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
        loading: false,
        bordered: false,
        size: "default",
      },
      ElementUI: {
        cardShadowE: "always",
      },
      AtUI: {
        loading: false,
        bordered: false,
        noHover: false,
      },
      ViewUI: {
        bordered: false,
        shadow: false,
        disHover: false,
        padding: 16,
      },
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
</style>