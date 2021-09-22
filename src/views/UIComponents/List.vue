<template>
  <div class="flex" ref="box">
    <!-- 列表 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 列表">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否加载</span>
            <a-switch v-model="AntDesignVue.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="AntDesignVue.bordered" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示分割线</span>
            <a-switch v-model="AntDesignVue.split" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置列表大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置列表排列方向</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.itemLayout"
            >
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-list
            :data-source="listDataSource"
            :loading="AntDesignVue.loading"
            :bordered="AntDesignVue.bordered"
            :split="AntDesignVue.split"
            :size="AntDesignVue.size"
            :item-layout="AntDesignVue.itemLayout"
          >
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta :description="item.description">
                <a slot="title" href="https://www.antdv.com/">
                  {{ item.title }}
                </a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                >
                </a-avatar>
              </a-list-item-meta>
              内容
            </a-list-item>
          </a-list>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 列表">
        <div class="text-red-500">ElementUI框架没有列表</div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 列表">
        <div class="text-red-500">AtUI框架没有列表</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 列表">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否加载</span>
            <a-switch v-model="ViewUI.loading" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ViewUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示分割线</span>
            <a-switch v-model="ViewUI.split" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置列表大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置列表排列方向</span>
            <el-select size="small" class="w-36" v-model="ViewUI.itemLayout">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <List
            header="头部信息（可插槽）"
            footer="尾部信息（可插槽）"
            :loading="ViewUI.loading"
            :border="ViewUI.border"
            :split="ViewUI.split"
            :size="ViewUI.size"
            :item-layout="ViewUI.itemLayout"
          >
            <ListItem
              v-for="(item, index) in listDataSource"
              :key="'list' + index"
            >
              <ListItemMeta
                avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                :title="item.title"
                :description="item.description"
              >
              </ListItemMeta>
              内容
            </ListItem>
          </List>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.listAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
const listDataSource = [
  {
    title: "列表标题一",
    description: "列表描述一",
  },
  {
    title: "列表标题二",
    description: "列表描述二",
  },
  {
    title: "列表标题三",
    description: "列表描述三",
  },
];
export default {
  data() {
    return {
      listDataSource: listDataSource,
      AntDesignVue: {
        loading: false,
        bordered: false,
        split: false,
        size: "default",
        itemLayout: "horizontal",
      },
      ViewUI: {
        loading: false,
        border: false,
        split: false,
        size: "default",
        itemLayout: "horizontal",
      },
    };
  },
  methods: {},
};
</script>