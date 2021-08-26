<template>
  <!-- 折叠面板 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 折叠面板">
      <div class="radio-box">
        <a-radio-group v-model="collapseBordered">
          <a-radio-button :value="true">普通风格</a-radio-button>
          <a-radio-button :value="false">极简风格</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="collapseAccordion">
          <a-radio-button :value="false">普通折叠面板</a-radio-button>
          <a-radio-button :value="true">手风琴折叠面板</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-collapse :bordered="collapseBordered" :accordion="collapseAccordion">
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
    <a-card class="card-margin" title="ElementUI 折叠面板">
      <div class="radio-box">
        <a-radio-group v-model="collapseAccordionE">
          <a-radio-button :value="false">普通折叠面板</a-radio-button>
          <a-radio-button :value="true">手风琴折叠面板</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-collapse :accordion="collapseAccordionE">
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
    <a-card class="card-margin" title="AtUI 折叠面板">
      <div class="radio-box">
        <a-radio-group v-model="collapseSimpleA">
          <a-radio-button :value="false">普通风格</a-radio-button>
          <a-radio-button :value="true">极简风格</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="collapseAccordionA">
          <a-radio-button :value="false">普通折叠面板</a-radio-button>
          <a-radio-button :value="true">手风琴折叠面板</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-collapse :simple="collapseSimpleA" :accordion="collapseAccordionA">
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
    <a-card class="card-margin" title="ViewUI 折叠面板">
      <div class="radio-box">
        <a-radio-group v-model="collapseSimpleV">
          <a-radio-button :value="false">普通风格</a-radio-button>
          <a-radio-button :value="true">极简风格</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="collapseAccordionV">
          <a-radio-button :value="false">普通折叠面板</a-radio-button>
          <a-radio-button :value="true">手风琴折叠面板</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Collapse :simple="collapseSimpleV" :accordion="collapseAccordionV">
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
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      collapseBordered: true,
      collapseAccordion: false,
      // ElementUI
      collapseAccordionE: false,
      // AtUI
      collapseSimpleA: false,
      collapseAccordionA: false,
      // ViewUI
      collapseSimpleV: false,
      collapseAccordionV: false,
    };
  },
  methods: {},
};
</script>
