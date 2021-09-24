<template>
  <div class="flex" ref="box">
    <!-- 标签页 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 标签页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页类型</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'line'">line</el-option>
              <el-option :value="'card'">card</el-option>
              <el-option :value="'editable-card'">editable-card</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页摆放位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.tabPosition"
            >
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'right'">right</el-option>
              <el-option :value="'left'">left</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-tabs
            class="w-48"
            v-model="AntDesignVue.value"
            :type="AntDesignVue.type"
            :tab-position="AntDesignVue.tabPosition"
            :size="AntDesignVue.size"
          >
            <a-tab-pane
              v-for="item in paneList"
              :key="item.key"
              :tab="item.tab"
            >
              {{ item.content }}
            </a-tab-pane>
            <a-button slot="tabBarExtraContent">其他操作</a-button>
          </a-tabs>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 标签页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">标签页是否可以增加</span>
            <a-switch v-model="ElementUI.addable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">标签页是否可以关闭</span>
            <a-switch v-model="ElementUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">标签页是否可以编辑</span>
            <a-switch v-model="ElementUI.editable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">标签页宽度是否可以自动撑开</span>
            <a-switch v-model="ElementUI.stretch" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="'card'">card</el-option>
              <el-option :value="'border-card'">border-card</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页摆放位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="ElementUI.tabPosition"
            >
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'right'">right</el-option>
              <el-option :value="'left'">left</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <el-tabs
            class="w-48"
            v-model="ElementUI.value"
            :addable="ElementUI.addable"
            :closable="ElementUI.closable"
            :editable="ElementUI.editable"
            :stretch="ElementUI.stretch"
            :type="ElementUI.type"
            :tab-position="ElementUI.tabPosition"
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
      <a-card id="3" class="my-5" title="AtUI 标签页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">标签页是否可以关闭</span>
            <a-switch v-model="AtUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">切换标签页时是否使用动画</span>
            <a-switch v-model="AtUI.animated" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页类型</span>
            <el-select size="small" class="w-36" v-model="AtUI.type">
              <el-option :value="'line'">line</el-option>
              <el-option :value="'card'">card</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <at-tabs
            class="w-48"
            v-model="AtUI.value"
            :closable="AtUI.closable"
            :animated="AtUI.animated"
            :type="AtUI.type"
            :size="AtUI.size"
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
      <a-card id="4" class="my-5" title="ViewUI 标签页">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">标签页是否可以关闭</span>
            <a-switch v-model="ViewUI.closable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">切换标签页时是否使用动画</span>
            <a-switch v-model="ViewUI.animated" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页类型</span>
            <el-select size="small" class="w-36" v-model="ViewUI.type">
              <el-option :value="'line'">line</el-option>
              <el-option :value="'card'">card</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置标签页大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Tabs
            class="w-48"
            v-model="ViewUI.value"
            :closable="ViewUI.closable"
            :animated="ViewUI.animated"
            :type="ViewUI.type"
            :size="ViewUI.size"
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
    <BasicAnchor
      :parentList="this.AnchorInfo.tabsAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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
        tabPosition: "top",
        size: "default",
      },
      ElementUI: {
        value: "2",
        addable: false,
        closable: false,
        editable: false,
        stretch: false,
        type: "card",
        tabPosition: "top",
      },
      AtUI: {
        value: "2",
        closable: false,
        animated: false,
        type: "line",
        size: "default",
      },
      ViewUI: {
        value: "2",
        closable: false,
        animated: false,
        type: "line",
        size: "default",
      },
    };
  },
  methods: {},
};
</script>