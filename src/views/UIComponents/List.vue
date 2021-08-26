<template>
  <!-- 列表 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 列表">
      <div class="radio-box">
        <a-radio-group v-model="listSize">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listItemLayout">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listBordered">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listSplit">
          <a-radio-button :value="true">显示分割线</a-radio-button>
          <a-radio-button :value="false">隐藏分割线</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listLoading">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-list
          :data-source="listDataSource"
          :bordered="listBordered"
          :size="listSize"
          :split="listSplit"
          :item-layout="listItemLayout"
          :loading="listLoading"
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
    <a-card class="card-margin" title="ElementUI 列表">
      <div class="c-f5222d">ElementUI框架没有列表</div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 列表">
      <div class="c-f5222d">AtUI框架没有列表</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 列表">
      <div class="radio-box">
        <a-radio-group v-model="listSizeV">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listItemLayoutV">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listBorderV">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listSplitV">
          <a-radio-button :value="true">显示分割线</a-radio-button>
          <a-radio-button :value="false">隐藏分割线</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="listLoadingV">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <List
          header="头部信息（可插槽）"
          footer="尾部信息（可插槽）"
          :size="listSizeV"
          :item-layout="listItemLayoutV"
          :border="listBorderV"
          :split="listSplitV"
          :loading="listLoadingV"
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
      // AntDesignVue
      listDataSource: listDataSource,
      listSize: "default",
      listItemLayout: "horizontal",
      listBordered: false,
      listSplit: false,
      listLoading: false,
      // ViewUI
      listSizeV: "default",
      listItemLayoutV: "horizontal",
      listBorderV: false,
      listSplitV: false,
      listLoadingV: false,
    };
  },
  methods: {},
};
</script>