<template>
  <!-- 展示组件 -->
  <div>
    <!-- 头像 -->
    <h1 class="title-xy">头像</h1>
    <div style="padding: 30px">
      <!-- 标准头像 -->
      <div class="title-2-xy">
        <h3>标准头像</h3>
        <div>
          <div>
            <a-avatar class="item-i-xy" icon="user" :size="64" />
            <a-avatar class="item-i-xy" icon="user" :size="'large'" />
            <a-avatar class="item-i-xy" icon="user" :size="'default'" />
            <a-avatar class="item-i-xy" icon="user" :size="'small'" />
          </div>
          <div>
            <a-avatar
              class="item-i-xy"
              icon="user"
              :shape="'square'"
              :size="64"
            />
            <a-avatar
              class="item-i-xy"
              icon="user"
              :shape="'square'"
              :size="'large'"
            />
            <a-avatar
              class="item-i-xy"
              icon="user"
              :shape="'square'"
              :size="'default'"
            />
            <a-avatar
              class="item-i-xy"
              icon="user"
              :shape="'square'"
              :size="'small'"
            />
          </div>
        </div>
      </div>
      <!-- 文字、颜色、图片头像 -->
      <div class="title-2-xy">
        <h3>文字、颜色、图片头像</h3>
        <div>
          <a-avatar class="item-i-xy">陈</a-avatar>
          <a-avatar
            class="item-i-xy"
            :style="{ color: '#f56a00', backgroundColor: '#fde3cf' }"
          >
            陈
          </a-avatar>
          <a-avatar
            class="item-i-xy"
            icon="user"
            :style="{ color: '#fff', backgroundColor: '#87d068' }"
          >
          </a-avatar>
          <a-avatar
            class="item-i-xy"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          >
          </a-avatar>
        </div>
      </div>
      <!-- 带徽标头像（徽标数+头像） -->
      <div class="title-2-xy">
        <h3>带徽标头像（头像+徽标数组合）</h3>
        <div>
          <a-badge class="item-i-xy" :count="1">
            <a-avatar shape="square" icon="user" />
          </a-badge>
          <a-badge class="item-i-xy" dot>
            <a-avatar shape="square" icon="user" />
          </a-badge>
        </div>
      </div>
    </div>
    <!-- 徽标数 -->
    <h1 class="title-xy">徽标数</h1>
    <div style="padding: 30px">
      <!-- 标准徽标数 -->
      <div class="title-2-xy">
        <h3>标准徽标数</h3>
        <div>
          <a-badge class="item-i-xy" :count="25"></a-badge>
          <a-badge class="item-i-xy" :count="100" :overflow-count="99">
          </a-badge>
          <a-badge
            class="item-i-xy"
            :count="100"
            :number-style="{ backgroundColor: '#52c41a' }"
          >
          </a-badge>
          <a-badge class="item-i-xy" status="success"></a-badge>
          <a-badge class="item-i-xy" status="default"></a-badge>
          <a-badge class="item-i-xy" color="#f50"></a-badge>
        </div>
      </div>
    </div>
    <!-- 日历 -->
    <h1 class="title-xy">日历</h1>
    <div style="padding: 30px">
      <!-- 标准日历 -->
      <div class="title-2-xy">
        <h3>标准日历</h3>
        <div>
          <a-calendar></a-calendar>
        </div>
      </div>
      <!-- 卡片日历 -->
      <div class="title-2-xy">
        <h3>卡片日历</h3>
        <div
          :style="{
            width: '300px',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
          }"
        >
          <a-calendar :fullscreen="false"></a-calendar>
        </div>
      </div>
    </div>
    <!-- 卡片 -->
    <h1 class="title-xy">卡片</h1>
    <div style="padding: 30px">
      <!-- 标准卡片 -->
      <div class="title-2-xy">
        <h3>标准卡片</h3>
        <div>
          <a-card title="卡片标题" style="width: 300px">
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </a-card>
        </div>
      </div>
      <!-- 预加载卡片 -->
      <div class="title-2-xy">
        <h3>预加载卡片</h3>
        <div>
          <a-card :loading="true" title="预加载卡片标题" style="width: 300px">
            <p>卡片内容</p>
            <p>卡片内容</p>
            <p>卡片内容</p>
          </a-card>
        </div>
      </div>
      <!-- 网格型内嵌卡片 -->
      <div class="title-2-xy">
        <h3>网格型内嵌卡片</h3>
        <div>
          <a-card title="网格型内嵌卡片标题" style="width: 300px">
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
        </div>
      </div>
      <!-- 信息卡片 -->
      <div class="title-2-xy">
        <h3>信息卡片</h3>
        <div>
          <a-card style="width: 300px" hoverable>
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
      </div>
    </div>
    <!-- 走马灯 -->
    <h1 class="title-xy">走马灯</h1>
    <div style="padding: 30px">
      <!-- 标准走马灯 -->
      <div class="title-2-xy">
        <h3>标准走马灯</h3>
        <div>
          <a-carousel arrows>
            <div
              class="custom-slick-arrow"
              slot="prevArrow"
              style="left: 10px; z-index: 1"
            >
              <a-icon type="left-circle" />
            </div>
            <div
              class="custom-slick-arrow"
              slot="nextArrow"
              style="right: 10px"
            >
              <a-icon type="right-circle" />
            </div>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </a-carousel>
        </div>
      </div>
    </div>
    <!-- 折叠面板 -->
    <h1 class="title-xy">折叠面板</h1>
    <div style="padding: 30px">
      <!-- 标准折叠面板 -->
      <div class="title-2-xy">
        <h3>标准折叠面板</h3>
        <div>
          <a-collapse>
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
      </div>
      <!-- 简洁折叠面板 -->
      <div class="title-2-xy">
        <h3>简洁折叠面板</h3>
        <div>
          <a-collapse default-active-key="1" :bordered="false">
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
      </div>
    </div>
    <!-- 评论 -->
    <h1 class="title-xy">评论</h1>
    <div style="padding: 30px">
      <!-- 标准评论 -->
      <div class="title-2-xy">
        <h3>标准评论</h3>
        <div>
          <a-comment>
            <template slot="actions">
              <span key="comment-basic-like">
                <a-tooltip title="Like">
                  <a-icon
                    type="like"
                    :theme="action === 'liked' ? 'filled' : 'outlined'"
                    @click="like"
                  />
                </a-tooltip>
                <span style="padding-left: '8px'; cursor: 'auto'">
                  {{ likes }}
                </span>
              </span>
              <span key="comment-basic-dislike">
                <a-tooltip title="Dislike">
                  <a-icon
                    type="dislike"
                    :theme="action === 'disliked' ? 'filled' : 'outlined'"
                    @click="dislike"
                  />
                </a-tooltip>
                <span style="padding-left: '8px'; cursor: 'auto'">
                  {{ dislikes }}
                </span>
              </span>
              <span key="comment-basic-reply-to">回复</span>
            </template>
            <a slot="author">陈坤</a>
            <a-avatar
              slot="avatar"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
            <p slot="content">AndDesignVue这套UI框架非常好用</p>
            <a-tooltip
              slot="datetime"
              :title="moment().format('YYYY-MM-DD HH:mm:ss')"
            >
              <span>{{ moment().fromNow() }}</span>
            </a-tooltip>
          </a-comment>
        </div>
      </div>
    </div>
    <!-- 描述列表 -->
    <h1 class="title-xy">描述列表</h1>
    <div style="padding: 30px">
      <!-- 标准描述列表 -->
      <div class="title-2-xy">
        <h3>标准描述列表</h3>
        <div>
          <a-descriptions title="用户信息">
            <a-descriptions-item label="姓名"> 陈坤 </a-descriptions-item>
            <a-descriptions-item label="电话"> 1810000000 </a-descriptions-item>
            <a-descriptions-item label="现居地"> 火星 </a-descriptions-item>
            <a-descriptions-item label="备注"> ---- </a-descriptions-item>
            <a-descriptions-item label="地址">
              中国 北京 第三大街 185号
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </div>
      <!-- 带边框描述列表 -->
      <div class="title-2-xy">
        <h3>带边框描述列表</h3>
        <div>
          <a-descriptions title="产品信息" bordered>
            <a-descriptions-item label="产品"> 云数据库 </a-descriptions-item>
            <a-descriptions-item label="计费模式">
              预付费用
            </a-descriptions-item>
            <a-descriptions-item label="自动更新"> 是 </a-descriptions-item>
            <a-descriptions-item label="下单时间">
              2018-04-24 18:00:00
            </a-descriptions-item>
            <a-descriptions-item label="到期时间" :span="2">
              2019-04-24 18:00:00
            </a-descriptions-item>
            <a-descriptions-item label="状态" :span="3">
              <a-badge status="processing" text="正在运行" />
            </a-descriptions-item>
            <a-descriptions-item label="协议金额">
              ￥80.00
            </a-descriptions-item>
            <a-descriptions-item label="折扣"> ￥20.00 </a-descriptions-item>
            <a-descriptions-item label="正式收据">
              ￥60.00
            </a-descriptions-item>
            <a-descriptions-item label="配置信息">
              数据库: MongoDB
              <br />
              数据库版本: 3.4
              <br />
              安装包: dds.mongo.mid
              <br />
              存储空间: 10 GB
              <br />
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </div>
    </div>
    <!-- 占位图 -->
    <h1 class="title-xy">占位图</h1>
    <div style="padding: 30px">
      <!-- 标准占位图 -->
      <div class="title-2-xy">
        <h3>标准占位图</h3>
        <div>
          <a-empty />
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <h1 class="title-xy">列表</h1>
    <div style="padding: 30px">
      <!-- 标准列表 -->
      <div class="title-2-xy">
        <h3>标准列表</h3>
        <div>
          <a-list item-layout="horizontal" :data-source="listData">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta :description="item.description">
                <a slot="title" href="https://www.antdv.com/">
                  {{ item.title }}
                </a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </div>
      </div>
    </div>
    <!-- 气泡卡片 -->
    <h1 class="title-xy">气泡卡片</h1>
    <div style="padding: 30px">
      <!-- 标准气泡卡片 -->
      <div class="title-2-xy">
        <h3>标准气泡卡片</h3>
        <div>
          <a-popover class="item-i-xy" title="悬停气泡" trigger="hover">
            <template slot="content">
              <p>卡片内容</p>
              <p>卡片内容</p>
            </template>
            <a-button type="primary">悬停显示</a-button>
          </a-popover>
          <a-popover class="item-i-xy" title="聚焦气泡" trigger="focus">
            <template slot="content">
              <p>卡片内容</p>
              <p>卡片内容</p>
            </template>
            <a-button type="primary">聚焦显示</a-button>
          </a-popover>
          <a-popover class="item-i-xy" title="点击气泡" trigger="click">
            <template slot="content">
              <p>卡片内容</p>
              <p>卡片内容</p>
            </template>
            <a-button type="primary">点击显示</a-button>
          </a-popover>
        </div>
      </div>
    </div>
    <!-- 统计数值 -->
    <h1 class="title-xy">统计数值</h1>
    <div style="padding: 30px">
      <!-- 标准统计数值 -->
      <div class="title-2-xy">
        <h3>标准统计数值</h3>
        <div>
          <a-statistic title="账号余额 (CNY)" :precision="2" :value="112893" />
        </div>
      </div>
      <!-- 倒计时统计 -->
      <div class="title-2-xy">
        <h3>倒计时统计</h3>
        <div>
          <a-statistic-countdown title="普通秒" :value="deadline" />
          <a-statistic-countdown
            :value="deadline"
            title="百万秒"
            format="HH:mm:ss:SSS"
          />
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <h1 class="title-xy">表格</h1>
    <div style="padding: 30px">
      <!-- 标准表格 -->
      <div class="title-2-xy">
        <h3>标准表格</h3>
        <div>
          <a-table :columns="tableColumns" :data-source="tableData">
            <a slot="name" slot-scope="text"> {{ text }} </a>
            <span slot="customTitle"> 姓名 </span>
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
              <a> 删除 </a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link"> 更多操作 <a-icon type="down" /> </a>
            </span>
          </a-table>
        </div>
      </div>
      <!-- 边框表格 -->
      <div class="title-2-xy">
        <h3>边框表格</h3>
        <div>
          <a-table :columns="tableColumns" :data-source="tableData" bordered>
            <a slot="name" slot-scope="text"> {{ text }} </a>
            <span slot="customTitle"> 姓名 </span>
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
              <a> 删除 </a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link"> 更多操作 <a-icon type="down" /> </a>
            </span>
          </a-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

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
const tableData = [
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
export default {
  data() {
    return {
      moment,
      likes: 0,
      dislikes: 0,
      action: null,
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      listData: [
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
      ],
      tableColumns,
      tableData,
    };
  },
  methods: {
    like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = "liked";
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = "disliked";
    },
  },
};
</script>

<style scoped>
.title-xy {
  margin: 10px 0px;
  text-align: center;
}
.title-2-xy {
  margin: 5px 0px;
}
.item-i-xy {
  margin: 5px 20px;
}
/* 走马灯 */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>