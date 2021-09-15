<template>
  <div class="flex" ref="box">
    <!-- 折叠面板 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 折叠面板">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="AntDesignVue.bordered" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启手风琴模式</span>
            <a-switch v-model="AntDesignVue.accordion" />
          </div>
        </div>
        <div>
          <a-collapse
            :bordered="AntDesignVue.bordered"
            :accordion="AntDesignVue.accordion"
          >
            <a-collapse-panel key="1" header="折叠面板1">
              <p>折叠面板内容</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="折叠面板2">
              <p>折叠面板内容</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="折叠面板3">
              <p>折叠面板内容</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 折叠面板">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启手风琴模式</span>
            <a-switch v-model="ElementUI.accordion" />
          </div>
        </div>
        <div>
          <el-collapse :accordion="ElementUI.accordion">
            <el-collapse-item name="1" title="折叠面板1">
              <p>折叠面板内容</p>
            </el-collapse-item>
            <el-collapse-item name="2" title="折叠面板2">
              <p>折叠面板内容</p>
            </el-collapse-item>
            <el-collapse-item name="3" title="折叠面板3">
              <p>折叠面板内容</p>
            </el-collapse-item>
          </el-collapse>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 折叠面板">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="AtUI.simple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启手风琴模式</span>
            <a-switch v-model="AtUI.accordion" />
          </div>
        </div>
        <div>
          <at-collapse :simple="AtUI.simple" :accordion="AtUI.accordion">
            <at-collapse-item name="1" title="折叠面板1">
              <div>折叠面板内容</div>
            </at-collapse-item>
            <at-collapse-item name="2" title="折叠面板2">
              <div>折叠面板内容</div>
            </at-collapse-item>
            <at-collapse-item name="3" title="折叠面板3">
              <div>折叠面板内容</div>
            </at-collapse-item>
          </at-collapse>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 折叠面板">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ViewUI.simple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启手风琴模式</span>
            <a-switch v-model="ViewUI.accordion" />
          </div>
        </div>
        <div>
          <Collapse :simple="ViewUI.simple" :accordion="ViewUI.accordion">
            <Panel name="1">
              折叠面板1
              <p slot="content">折叠面板内容</p>
            </Panel>
            <Panel name="2">
              折叠面板2
              <p slot="content">折叠面板内容</p>
            </Panel>
            <Panel name="3">
              折叠面板3
              <p slot="content">折叠面板内容</p>
            </Panel>
          </Collapse>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.datePickerAnchor"
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
        bordered: true,
        accordion: false,
      },
      ElementUI: {
        accordion: false,
      },
      AtUI: {
        simple: false,
        accordion: false,
      },
      ViewUI: {
        simple: false,
        accordion: false,
      },
    };
  },
  methods: {},
};
</script>
