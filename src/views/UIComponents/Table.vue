<template>
  <div class="flex" ref="box">
    <!-- 表格 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 表格">
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
            <span class="mr-2">是否显示表头</span>
            <a-switch v-model="AntDesignVue.showHeader" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置表格大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'middle'">middle</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-table
            :columns="tableColumnsA"
            :data-source="tableDataSource"
            :bordered="AntDesignVue.bordered"
            :show-header="AntDesignVue.showHeader"
            :loading="AntDesignVue.loading"
            :size="AntDesignVue.size"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
            <span slot="customTitle">姓名</span>
            <span slot="tags" slot-scope="tags">
              <a-tag
                v-for="tag in tags"
                :key="tag"
                :color="
                  tag === '帅'
                    ? 'volcano'
                    : tag === '富有'
                    ? 'geekblue'
                    : 'green'
                "
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
            <span slot="action">
              <a>删除</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">更多操作<a-icon type="down" /></a>
            </span>
          </a-table>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 表格">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="ElementUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示表头</span>
            <a-switch v-model="ElementUI.showHeader" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示斑马条纹</span>
            <a-switch v-model="ElementUI.stripe" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否高亮显示当前项</span>
            <a-switch v-model="ElementUI.highlightCurrentRow" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置表格大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'middle'">middle</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'mini'">mini</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <el-table
            :data="tableDataSource"
            :border="ElementUI.border"
            :show-header="ElementUI.showHeader"
            :stripe="ElementUI.stripe"
            :highlight-current-row="ElementUI.highlightCurrentRow"
            :size="ElementUI.size"
          >
            <el-table-column label="姓名" width="200">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="年龄" width="200">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.age }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template>
                <el-button size="mini">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 表格">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示边框</span>
            <a-switch v-model="AtUI.border" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示斑马条纹</span>
            <a-switch v-model="AtUI.stripe" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启选择功能</span>
            <a-switch v-model="AtUI.optional" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启分页功能</span>
            <a-switch v-model="AtUI.pagination" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">分页时是否显示总条数</span>
            <a-switch v-model="AtUI.showPageTotal" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">分页时是否显示更改页数</span>
            <a-switch v-model="AtUI.showPageSizer" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">分页时是否显示快速跳转</span>
            <a-switch v-model="AtUI.showPageQuickjump" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置表格大小</span>
            <el-select size="small" class="w-36" v-model="AtUI.size">
              <el-option :value="'large'">large</el-option>
              <el-option :value="'normal'">normal</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置分页条数</span>
            <a-input-number class="w-24" v-model="AtUI.pageSize" />
          </div>
        </div>
        <div>
          <at-table
            :columns="tableColumnsB"
            :data="tableDataSource"
            :border="AtUI.border"
            :stripe="AtUI.stripe"
            :optional="AtUI.optional"
            :pagination="AtUI.pagination"
            :show-page-total="AtUI.showPageTotal"
            :show-page-sizer="AtUI.showPageSizer"
            :show-page-quickjump="AtUI.showPageQuickjump"
            :size="AtUI.size"
            :page-size="AtUI.pageSize"
          >
          </at-table>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 表格">
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
            <span class="mr-2">是否显示表头</span>
            <a-switch v-model="ViewUI.showHeader" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示斑马条纹</span>
            <a-switch v-model="ViewUI.stripe" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否高亮显示当前行</span>
            <a-switch v-model="ViewUI.highlightCurrentRow" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否关闭鼠标悬停时高亮显示</span>
            <a-switch v-model="ViewUI.disabledHover" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置表格大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Table
            :columns="tableColumnsB"
            :data="tableDataSource"
            :loading="ViewUI.loading"
            :border="ViewUI.border"
            :show-header="ViewUI.showHeader"
            :stripe="ViewUI.stripe"
            :highlight-row="ViewUI.highlightCurrentRow"
            :disabled-hover="ViewUI.disabledHover"
            :size="ViewUI.size"
          >
          </Table>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.tableAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
  </div>
</template>

<script>
const tableDataSource = [
  {
    key: "1",
    name: "库里",
    age: 18,
    address: "深圳市宝安区创业一路",
    tags: ["大佬", "富有"],
  },
  {
    key: "2",
    name: "詹姆斯",
    age: 25,
    address: "广州市天河区岗顶",
    tags: ["帅", "富有"],
  },
  {
    key: "3",
    name: "科比",
    age: 24,
    address: "上海市浦东新区",
    tags: ["大佬", "富有"],
  },
  {
    key: "4",
    name: "欧文",
    age: 20,
    address: "广州市番禺区大学城",
    tags: ["帅", "大佬"],
  },
  {
    key: "5",
    name: "托马斯",
    age: 19,
    address: "北京市朝阳区",
    tags: ["大佬"],
  },
];
const tableColumnsA = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];
const tableColumnsB = [
  {
    title: "姓名",
    key: "name",
  },
  {
    title: "年龄",
    key: "age",
  },
  {
    title: "地址",
    key: "address",
  },
];
export default {
  data() {
    return {
      tableColumnsA: tableColumnsA,
      tableColumnsB: tableColumnsB,
      tableDataSource: tableDataSource,
      AntDesignVue: {
        loading: false,
        bordered: false,
        showHeader: false,
        size: "default",
      },
      ElementUI: {
        border: false,
        showHeader: false,
        stripe: false,
        highlightCurrentRow: false,
        size: null,
      },
      AtUI: {
        border: false,
        stripe: false,
        optional: false,
        pagination: false,
        showPageTotal: false,
        showPageSizer: false,
        showPageQuickjump: false,
        size: "normal",
        pageSize: 10,
      },
      ViewUI: {
        loading: false,
        border: false,
        showHeader: false,
        stripe: false,
        highlightCurrentRow: false,
        disabledHover: false,
        size: "default",
      },
    };
  },
  methods: {},
};
</script>
