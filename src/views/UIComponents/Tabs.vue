<template>
  <!-- 标签页 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 标签页">
      <div class="control-box">
        <a-radio-group v-model="AntDesignVue.type">
          <a-radio-button :value="'line'">line</a-radio-button>
          <a-radio-button :value="'card'">card</a-radio-button>
          <a-radio-button :value="'editable-card'">
            editable-card
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.tabPosition">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.size">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-tabs
          style="height: 200px"
          v-model="AntDesignVue.value"
          :type="AntDesignVue.type"
          :size="AntDesignVue.size"
          :tab-position="AntDesignVue.tabPosition"
        >
          <a-tab-pane v-for="item in paneList" :key="item.key" :tab="item.tab">
            {{ item.content }}
          </a-tab-pane>
          <a-button slot="tabBarExtraContent">其他操作</a-button>
        </a-tabs>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 标签页">
      <div class="control-box">
        <a-radio-group v-model="ElementUI.type">
          <a-radio-button :value="'card'">card</a-radio-button>
          <a-radio-button :value="'border-card'">border-card</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.addable">
          <a-radio-button :value="true">标签页可增加</a-radio-button>
          <a-radio-button :value="false">标签页不可增加</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.closable">
          <a-radio-button :value="true">标签页可关闭</a-radio-button>
          <a-radio-button :value="false">标签页不可关闭</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.editable">
          <a-radio-button :value="true">标签页同时可增加和关闭</a-radio-button>
          <a-radio-button :value="false">
            标签页同时不可增加和关闭
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.tabPosition">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.stretch">
          <a-radio-button :value="true">标签宽度可自撑开</a-radio-button>
          <a-radio-button :value="false">标签宽度不可自撑开</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-tabs
          style="height: 200px"
          v-model="ElementUI.value"
          :type="ElementUI.type"
          :addable="ElementUI.addable"
          :closable="ElementUI.closable"
          :editable="ElementUI.editable"
          :tab-position="ElementUI.tabPosition"
          :stretch="ElementUI.stretch"
        >
          <el-tab-pane
            v-for="item in paneList"
            :key="item.key"
            :name="item.key"
            :label="item.tab"
          >
            {{ item.content }}
          </el-tab-pane>
        </el-tabs>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 标签页">
      <div class="control-box">
        <a-radio-group v-model="AtUI.type">
          <a-radio-button :value="'line'">line</a-radio-button>
          <a-radio-button :value="'card'">card</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.size">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.closable">
          <a-radio-button :value="true">标签页可关闭</a-radio-button>
          <a-radio-button :value="false">标签页不可关闭</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.animated">
          <a-radio-button :value="true">切换标签时使用动画</a-radio-button>
          <a-radio-button :value="false">切换标签时不使用动画</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-tabs
          style="height: 200px"
          v-model="AtUI.value"
          :type="AtUI.type"
          :size="AtUI.size"
          :closable="AtUI.closable"
          :animated="AtUI.animated"
        >
          <at-tab-pane
            v-for="item in paneList"
            :key="item.key"
            :name="item.key"
            :label="item.tab"
          >
            {{ item.content }}
          </at-tab-pane>
        </at-tabs>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 标签页">
      <div class="control-box">
        <a-radio-group v-model="ViewUI.type">
          <a-radio-button :value="'line'">line</a-radio-button>
          <a-radio-button :value="'card'">card</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.size">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.closable">
          <a-radio-button :value="true">标签页可关闭</a-radio-button>
          <a-radio-button :value="false">标签页不可关闭</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.animated">
          <a-radio-button :value="true">切换标签时使用动画</a-radio-button>
          <a-radio-button :value="false">切换标签时不使用动画</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Tabs
          style="height: 200px"
          v-model="ViewUI.value"
          :type="ViewUI.type"
          :size="ViewUI.size"
          :closable="ViewUI.closable"
          :animated="ViewUI.animated"
        >
          <TabPane
            v-for="item in paneList"
            :key="item.key"
            :name="item.key"
            :label="item.tab"
          >
            {{ item.content }}
          </TabPane>
        </Tabs>
      </div>
    </a-card>
  </div>
</template>

<script>
const paneList = [
  { key: "1", tab: "表格", content: "表格内容" },
  { key: "2", tab: "标签页", content: "标签页内容" },
  { key: "3", tab: "标签", content: "标签内容" },
];
export default {
  data() {
    return {
      paneList: paneList,
      AntDesignVue: {
        value: "2",
        type: "line",
        size: "default",
        tabPosition: "top",
      },
      ElementUI: {
        value: "2",
        type: "card",
        addable: false,
        closable: false,
        editable: false,
        tabPosition: "top",
        stretch: false,
      },
      AtUI: {
        value: "2",
        type: "line",
        size: "default",
        closable: false,
        animated: false,
      },
      ViewUI: {
        value: "2",
        type: "line",
        size: "default",
        closable: false,
        animated: false,
      },
    };
  },
  methods: {},
};
</script>