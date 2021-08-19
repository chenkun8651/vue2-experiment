<template>
  <!-- 表格组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 表格">
      <div class="radio-box">
        <a-radio-group v-model="tableSize">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'middle'">middle</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableBordered">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableShowHeader">
          <a-radio-button :value="true">显示表头</a-radio-button>
          <a-radio-button :value="false">隐藏表头</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableLoading">
          <a-radio-button :value="true">加载</a-radio-button>
          <a-radio-button :value="false">完成</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-table
          :columns="tableColumns"
          :data-source="tableDataSource"
          :size="tableSize"
          :bordered="tableBordered"
          :show-header="tableShowHeader"
          :loading="tableLoading"
        >
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle">姓名</span>
          <span slot="tags" slot-scope="tags">
            <a-tag
              v-for="tag in tags"
              :key="tag"
              :color="
                tag === '帅' ? 'volcano' : tag === '富有' ? 'geekblue' : 'green'
              "
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
          <span slot="action">
            <a>删除</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> 更多操作<a-icon type="down" /> </a>
          </span>
        </a-table>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 表格">
      <div class="radio-box">
        <a-radio-group v-model="tableSizeE">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableBorderE">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableShowHeaderE">
          <a-radio-button :value="true">显示表头</a-radio-button>
          <a-radio-button :value="false">隐藏表头</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableStripeE">
          <a-radio-button :value="true">显示斑马条纹</a-radio-button>
          <a-radio-button :value="false">隐藏斑马条纹</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableHighlightCurrentRowE">
          <a-radio-button :value="true">高亮当前项</a-radio-button>
          <a-radio-button :value="false">不高亮当前项</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-table
          :data="tableDataSourceE"
          :size="tableSizeE"
          :border="tableBorderE"
          :show-header="tableShowHeaderE"
          :stripe="tableStripeE"
          :highlight-current-row="tableHighlightCurrentRowE"
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
          <el-table-column label="日期" width="200">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
    <a-card class="card-margin" title="AtUI 表格">
      <div class="radio-box">
        <a-radio-group v-model="tableSizeA">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'normal'">normal</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableBorderA">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableStripeA">
          <a-radio-button :value="true">显示斑马条纹</a-radio-button>
          <a-radio-button :value="false">隐藏斑马条纹</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tableOptionalA">
          <a-radio-button :value="true">开启选择</a-radio-button>
          <a-radio-button :value="false">关闭选择</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="tablePaginationA">
          <a-radio-button :value="true">开启分页</a-radio-button>
          <a-radio-button :value="false">关闭分页</a-radio-button>
        </a-radio-group>
        <div v-show="tablePaginationA" class="number-set">
          <span style="margin-right: 5px">设置分页条数</span>
          <a-input-number style="width: 100px" v-model="tablePageSizeA" />
        </div>
        <a-radio-group v-show="tablePaginationA" v-model="tableShowPageTotalA">
          <a-radio-button :value="true">显示总条数</a-radio-button>
          <a-radio-button :value="false">隐藏总条数</a-radio-button>
        </a-radio-group>
        <a-radio-group v-show="tablePaginationA" v-model="tableShowPageSizerA">
          <a-radio-button :value="true">显示更改页数</a-radio-button>
          <a-radio-button :value="false">隐藏更改页数</a-radio-button>
        </a-radio-group>
        <a-radio-group
          v-show="tablePaginationA"
          v-model="tableShowPageQuickjumpA"
        >
          <a-radio-button :value="true">显示快速跳转</a-radio-button>
          <a-radio-button :value="false">隐藏快速跳转</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-table
          :columns="tableColumnsA"
          :data="tableDataSourceA"
          :size="tableSizeA"
          :border="tableBorderA"
          :stripe="tableStripeA"
          :optional="tableOptionalA"
          :pagination="tablePaginationA"
          :page-size="tablePageSizeA"
          :show-page-total="tableShowPageTotalA"
          :show-page-sizer="tableShowPageSizerA"
          :show-page-quickjump="tableShowPageQuickjumpA"
        >
        </at-table>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 表格">
      <div class="radio-box"></div>
      <div></div>
    </a-card>
  </div>
</template>

<script>
const tableColumns = [
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
const tableDataSource = [
  {
    key: "1",
    name: "小陈",
    age: 32,
    address: "地球",
    tags: ["帅", "富有"],
  },
  {
    key: "2",
    name: "宇少",
    age: 42,
    address: "地球",
    tags: ["帅", "大佬"],
  },
  {
    key: "3",
    name: "胖胖",
    age: 32,
    address: "地球",
    tags: ["帅", "富有"],
  },
];
const tableDataSourceE = [
  {
    date: "2016-05-02",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 号",
  },
  {
    date: "2016-05-04",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1517 号",
  },
  {
    date: "2016-05-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1519 号",
  },
  {
    date: "2016-05-03",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1516 号",
  },
];
const tableColumnsA = [
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
const tableDataSourceA = [
  {
    name: "库里",
    age: 18,
    address: "深圳市宝安区创业一路",
  },
  {
    name: "詹姆斯",
    age: 25,
    address: "广州市天河区岗顶",
  },
  {
    name: "科比",
    age: 24,
    address: "上海市浦东新区",
  },
  {
    name: "欧文",
    age: 20,
    address: "广州市番禺区大学城",
  },
  {
    name: "托马斯",
    age: 19,
    address: "北京市朝阳区",
  },
];

export default {
  data() {
    return {
      // AntDesignVue
      tableColumns: tableColumns,
      tableDataSource: tableDataSource,
      tableSize: "default",
      tableBordered: true,
      tableShowHeader: true,
      tableLoading: false,
      // ElementUI
      tableDataSourceE: tableDataSourceE,
      tableSizeE: null,
      tableBorderE: true,
      tableShowHeaderE: true,
      tableStripeE: false,
      tableHighlightCurrentRowE: false,
      // AtUI
      tableColumnsA: tableColumnsA,
      tableDataSourceA: tableDataSourceA,
      tableSizeA: "normal",
      tableBorderA: true,
      tableStripeA: false,
      tableOptionalA: false,
      tablePaginationA: false,
      tablePageSizeA: 10,
      tableShowPageTotalA: true,
      tableShowPageSizerA: true,
      tableShowPageQuickjumpA: true,
    };
  },
  methods: {},
};
</script>
