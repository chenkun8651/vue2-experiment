<template>
  <!-- 展示组件 -->
  <div>
    <!-- 描述列表 -->
    <h1 class="title-xy">描述列表</h1>
    <div class="content">
      <!-- 标准描述列表 -->
      <div class="content-item">
        <h3 class="title2-xy">标准描述列表</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="descriptionsBordered">
              <a-radio-button :value="true">显示边框</a-radio-button>
              <a-radio-button :value="false">隐藏边框</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="descriptionsSize">
              <a-radio-button :value="'default'">默认</a-radio-button>
              <a-radio-button :value="'middle'">中型</a-radio-button>
              <a-radio-button :value="'small'">小型</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="descriptionsLayout">
              <a-radio-button :value="'horizontal'">水平布局</a-radio-button>
              <a-radio-button :value="'vertical'">垂直布局</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-descriptions
              title="用户信息"
              :bordered="descriptionsBordered"
              :size="descriptionsSize"
              :layout="descriptionsLayout"
            >
              <a-descriptions-item label="姓名">陈坤</a-descriptions-item>
              <a-descriptions-item label="电话">1810000000</a-descriptions-item>
              <a-descriptions-item label="现居地">火星</a-descriptions-item>
              <a-descriptions-item label="备注">----</a-descriptions-item>
              <a-descriptions-item label="地址">
                中国 北京 第三大街 185号
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </div>
      </div>
    </div>
    <!-- 占位图 -->
    <h1 class="title-xy">占位图</h1>
    <div class="content">
      <!-- 标准占位图 -->
      <div class="content-item">
        <h3 class="title2-xy">标准占位图</h3>
        <div class="content2">
          <div class="radio-box">
            <div class="string-set">
              <span style="margin-right: 5px">设置描述内容</span>
              <a-input style="width: 100px" v-model="emptyDescription" />
            </div>
          </div>
          <div>
            <a-empty :description="emptyDescription"></a-empty>
          </div>
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <h1 class="title-xy">列表</h1>
    <div class="content">
      <!-- 标准列表 -->
      <div class="content-item">
        <h3 class="title2-xy">标准列表</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="listBordered">
              <a-radio-button :value="true">显示边框</a-radio-button>
              <a-radio-button :value="false">隐藏边框</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="listSize">
              <a-radio-button :value="'default'">默认</a-radio-button>
              <a-radio-button :value="'middle'">中型</a-radio-button>
              <a-radio-button :value="'small'">小型</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="listSplit">
              <a-radio-button :value="true">显示分割线</a-radio-button>
              <a-radio-button :value="false">隐藏分割线</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="listItemLayout">
              <a-radio-button :value="'horizontal'">横向</a-radio-button>
              <a-radio-button :value="'vertical'">垂直</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="listLoading">
              <a-radio-button :value="true">加载</a-radio-button>
              <a-radio-button :value="false">完成</a-radio-button>
            </a-radio-group>
          </div>
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
            </a-list-item>
          </a-list>
        </div>
      </div>
    </div>
    <!-- 气泡卡片 -->
    <h1 class="title-xy">气泡卡片</h1>
    <div class="content">
      <!-- 标准气泡卡片 -->
      <div class="content-item">
        <h3 class="title2-xy">标准气泡卡片</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="popoverTrigger">
              <a-radio-button :value="'hover'">悬停触发</a-radio-button>
              <a-radio-button :value="'focus'">聚焦触发</a-radio-button>
              <a-radio-button :value="'click'">点击触发</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="popoverPlacement">
              <a-radio-button :value="'top'">上方弹出</a-radio-button>
              <a-radio-button :value="'bottom'">下方弹出</a-radio-button>
              <a-radio-button :value="'left'">左侧弹出</a-radio-button>
              <a-radio-button :value="'right'">右侧弹出</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-popover
              title="气泡卡片"
              :trigger="popoverTrigger"
              :placement="popoverPlacement"
            >
              <template slot="content">
                <p>卡片内容</p>
                <p>卡片内容</p>
              </template>
              <a-button type="primary">气泡卡片</a-button>
            </a-popover>
          </div>
        </div>
      </div>
    </div>
    <!-- 统计数值 -->
    <h1 class="title-xy">统计数值</h1>
    <div class="content">
      <!-- 标准统计数值 -->
      <div class="content-item">
        <h3 class="title2-xy">标准统计数值</h3>
        <div class="content2">
          <div class="radio-box">
            <div class="string-set">
              <span style="margin-right: 5px">设置千分位标识符</span>
              <a-input style="width: 100px" v-model="statisticGroupSeparator">
              </a-input>
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置小数点</span>
              <a-input style="width: 100px" v-model="statisticDecimalSeparator">
              </a-input>
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置数值精度</span>
              <a-input-number style="width: 100px" v-model="statisticPrecision">
              </a-input-number>
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置数值前缀</span>
              <a-input style="width: 100px" v-model="statisticPrefix">
              </a-input>
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置数值后缀</span>
              <a-input style="width: 100px" v-model="statisticSuffix">
              </a-input>
            </div>
          </div>
          <a-statistic
            title="账号余额 (CNY)"
            :value="91235112893"
            :decimalSeparator="statisticDecimalSeparator"
            :groupSeparator="statisticGroupSeparator"
            :precision="statisticPrecision"
            :prefix="statisticPrefix"
            :suffix="statisticSuffix"
          >
          </a-statistic>
        </div>
      </div>
      <!-- 倒计时统计数值 -->
      <div class="content-item">
        <h3 class="title2-xy">倒计时统计数值</h3>
        <div class="content2">
          <div class="radio-box">
            <div class="string-set">
              <span style="margin-right: 5px">设置时间格式化</span>
              <a-input style="width: 200px" v-model="statisticFormat">
              </a-input>
            </div>
          </div>
          <div>
            <a-statistic-countdown
              title="倒计时"
              :value="statisticDeadline"
              :prefix="statisticPrefix"
              :suffix="statisticSuffix"
              :format="statisticFormat"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 穿梭框 -->
    <h1 class="title-xy">穿梭框</h1>
    <div class="content">
      <!-- 标准穿梭框 -->
      <div class="content-item">
        <h3 class="title2-xy">标准穿梭框</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="transferDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="transferShowSearch">
              <a-radio-button :value="true">开启搜索框</a-radio-button>
              <a-radio-button :value="false">关闭搜索框</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-transfer
              :titles="['待完成', '已完成']"
              :data-source="transferDataSource"
              :target-keys="transferTargetKeys"
              :selected-keys="transferSelectedKeys"
              :render="(item) => item.title"
              :disabled="transferDisabled"
              :show-search="transferShowSearch"
              @change="transferChange"
              @selectChange="transferSelectChange"
            >
            </a-transfer>
          </div>
        </div>
      </div>
    </div>
    <!-- 表格 -->
    <h1 class="title-xy">表格</h1>
    <div class="content">
      <!-- 标准表格 -->
      <div class="content-item">
        <h3 class="title2-xy">标准表格</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="tableBordered">
              <a-radio-button :value="true">显示边框</a-radio-button>
              <a-radio-button :value="false">隐藏边框</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="tableLoading">
              <a-radio-button :value="true">加载</a-radio-button>
              <a-radio-button :value="false">完成</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="tableShowHeader">
              <a-radio-button :value="true">显示表头</a-radio-button>
              <a-radio-button :value="false">隐藏表头</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="tableSize">
              <a-radio-button :value="'default'">默认</a-radio-button>
              <a-radio-button :value="'middle'">中型</a-radio-button>
              <a-radio-button :value="'small'">小型</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-table
              :columns="tableColumns"
              :data-source="tableDataSource"
              :bordered="tableBordered"
              :loading="tableLoading"
              :show-header="tableShowHeader"
              :size="tableSize"
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
                <a class="ant-dropdown-link">
                  更多操作<a-icon type="down" />
                </a>
              </span>
            </a-table>
          </div>
        </div>
      </div>
    </div>
    <!-- 时间轴 -->
    <h1 class="title-xy">时间轴</h1>
    <div class="content">
      <!-- 标准时间轴 -->
      <div class="content-item">
        <h3 class="title2-xy">标准时间轴</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="timelineReverse">
              <a-radio-button :value="false">正向顺序</a-radio-button>
              <a-radio-button :value="true">反向顺序</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="timelineMode">
              <a-radio-button :value="'left'">左边</a-radio-button>
              <a-radio-button :value="'alternate'">中间</a-radio-button>
              <a-radio-button :value="'right'">右边</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="timelinePosition">
              <a-radio-button :value="'left'">节点位于左边</a-radio-button>
              <a-radio-button :value="'right'">节点位于右边</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-timeline :reverse="timelineReverse" :mode="timelineMode">
              <a-timeline-item :position="timelinePosition">
                创建网络服务 2015-09-01
              </a-timeline-item>
              <a-timeline-item :position="timelinePosition">
                解决网络波动问题 2015-09-05
              </a-timeline-item>
              <a-timeline-item :position="timelinePosition">
                技术测试 2015-09-12
              </a-timeline-item>
              <a-timeline-item :position="timelinePosition">
                网络问题已解决 2015-09-26
              </a-timeline-item>
            </a-timeline>
          </div>
        </div>
      </div>
    </div>
    <!-- 树形控件 -->
    <h1 class="title-xy">树形控件</h1>
    <div class="content">
      <!-- 标准树形控件 -->
      <div class="content-item">
        <h3 class="title2-xy">标准树形控件</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="treeDisabled">
              <a-radio-button :value="true">禁用</a-radio-button>
              <a-radio-button :value="false">启用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="treeBlockNode">
              <a-radio-button :value="true">开启节点占据一行</a-radio-button>
              <a-radio-button :value="false">关闭节点占据一行</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="treeAutoExpandParent">
              <a-radio-button :value="true">开启自动展开父节点</a-radio-button>
              <a-radio-button :value="false">关闭自动展开父节点</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="treeCheckable">
              <a-radio-button :value="true">
                开启节点前添加复选框
              </a-radio-button>
              <a-radio-button :value="false">
                关闭节点前添加复选框
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="treeDraggable">
              <a-radio-button :value="true">开启节点可拖拽</a-radio-button>
              <a-radio-button :value="false">关闭节点可拖拽</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="treeShowLine">
              <a-radio-button :value="true">开启连接线</a-radio-button>
              <a-radio-button :value="false">关闭连接线</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-tree
              v-model="treeData"
              :selectable="true"
              :tree-data="treeTreeData"
              :selected-keys="treeSelectedKeys"
              :expanded-keys="treeExpandedKeys"
              :disabled="treeDisabled"
              :block-node="treeBlockNode"
              :auto-expand-parent="treeAutoExpandParent"
              :checkable="treeCheckable"
              :draggable="treeDraggable"
              :show-line="treeShowLine"
            >
            </a-tree>
          </div>
        </div>
      </div>
    </div>
    <!-- 进度条 -->
    <h1 class="title-xy">进度条</h1>
    <div class="content">
      <!-- 标准进度条 -->
      <div class="content-item">
        <h3 class="title2-xy">标准进度条</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="progressType">
              <a-radio-button :value="'line'">线形</a-radio-button>
              <a-radio-button :value="'circle'">圆形</a-radio-button>
              <a-radio-button :value="'dashboard'">仪表盘形</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="progressShowInfo">
              <a-radio-button :value="true">显示进度数值或图标</a-radio-button>
              <a-radio-button :value="false">隐藏进度数值或图标</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="progressStatus">
              <a-radio-button :value="'success'">成功状态</a-radio-button>
              <a-radio-button :value="'exception'">反对状态</a-radio-button>
              <a-radio-button :value="'normal'">普通状态</a-radio-button>
              <a-radio-button :value="'active'">活跃状态</a-radio-button>
            </a-radio-group>
            <div class="number-set">
              <span style="margin-right: 5px">设置进度条百分比</span>
              <a-input-number style="width: 100px" v-model="progressPercent" />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置已完成分段百分比</span>
              <a-input-number
                style="width: 100px"
                v-model="progressSuccessPercent"
              />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">设置进度条线条宽度</span>
              <a-input-number
                style="width: 100px"
                v-model="progressStrokeWidth"
              />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置进度条渐变色开始颜色</span>
              <a-input
                style="width: 100px"
                v-model="progressStrokeColor['0%']"
              />
            </div>
            <div class="string-set">
              <span style="margin-right: 5px">设置进度条渐变色末尾颜色</span>
              <a-input
                style="width: 100px"
                v-model="progressStrokeColor['100%']"
              />
            </div>
            <div
              v-if="progressType === 'circle' || progressType === 'dashboard'"
              class="number-set"
            >
              <span style="margin-right: 5px">设置进度条画布宽度</span>
              <a-input-number style="width: 100px" v-model="progressWidth" />
            </div>
            <div v-if="progressType === 'dashboard'" class="number-set">
              <span style="margin-right: 5px">
                设置仪表盘进度条缺口所占角度
              </span>
              <a-input-number
                style="width: 100px"
                v-model="progressGapDegree"
                :max="360"
                :min="0"
              />
            </div>
            <a-radio-group
              v-if="progressType === 'dashboard'"
              v-model="progressGapPosition"
            >
              <a-radio-button :value="'top'">缺口在上</a-radio-button>
              <a-radio-button :value="'bottom'">缺口在下</a-radio-button>
              <a-radio-button :value="'left'">缺口在左</a-radio-button>
              <a-radio-button :value="'right'">缺口在右</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-progress
              :type="progressType"
              :show-info="progressShowInfo"
              :status="progressStatus"
              :percent="progressPercent"
              :success-percent="progressSuccessPercent"
              :stroke-width="progressStrokeWidth"
              :stroke-color="progressStrokeColor"
              :width="progressWidth"
              :gap-degree="progressGapDegree"
              :gap-position="progressGapPosition"
            >
            </a-progress>
          </div>
        </div>
      </div>
    </div>
    <!-- 加载占位图 -->
    <h1 class="title-xy">加载占位图</h1>
    <div class="content">
      <!-- 标准加载占位图 -->
      <div class="content-item">
        <h3 class="title2-xy">标准加载占位图</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="skeletonActive">
              <a-radio-button :value="true">显示动画效果</a-radio-button>
              <a-radio-button :value="false">隐藏动画效果</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="skeletonLoading">
              <a-radio-button :value="true">加载</a-radio-button>
              <a-radio-button :value="false">完毕</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="skeletonAvatar">
              <a-radio-button :value="true">显示头像占位图</a-radio-button>
              <a-radio-button :value="false">隐藏头像占位图</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="skeletonParagraph">
              <a-radio-button :value="true">显示段落占位图</a-radio-button>
              <a-radio-button :value="false">隐藏段落占位图</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="skeletonTitle">
              <a-radio-button :value="true">显示标题占位图</a-radio-button>
              <a-radio-button :value="false">隐藏标题占位图</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-skeleton
              :active="skeletonActive"
              :loading="skeletonLoading"
              :avatar="skeletonAvatar"
              :paragraph="skeletonParagraph"
              :title="skeletonTitle"
            >
              <div>加载完毕后的内容</div>
            </a-skeleton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

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
const transferDataSource = [];
for (let i = 0; i < 20; i++) {
  transferDataSource.push({
    key: i.toString(),
    title: `内容${i + 1}`,
    description: `描述内容${i + 1}`,
    disabled: i % 3 < 1,
  });
}
const transferTargetKeys = transferDataSource
  .filter((item) => +item.key % 3 > 1)
  .map((item) => item.key);
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
const treeTreeData = [
  {
    title: "水果",
    key: "fruits",
    children: [
      {
        title: "葡萄",
        key: "grape",
        children: [
          { title: "紫葡萄", key: "violetGrape" },
          { title: "青葡萄", key: "greenGrape" },
          { title: "红葡萄", key: "redGrape" },
        ],
      },
      {
        title: "苹果",
        key: "apple",
        children: [
          { title: "烂苹果", key: "iphone" },
          { title: "青苹果", key: "greenApple" },
          { title: "红苹果", key: "redApple" },
        ],
      },
      {
        title: "橘子",
        key: "orange",
      },
    ],
  },
  {
    title: "肉类",
    key: "meat",
    children: [
      { title: "猪肉", key: "pork" },
      { title: "牛肉", key: "beef" },
      { title: "羊肉", key: "mutton" },
    ],
  },
  {
    title: "蔬菜",
    key: "vegetables",
  },
];
export default {
  data() {
    return {
      // 通用
      moment,

      // 描述列表
      descriptionsBordered: false,
      descriptionsSize: "default",
      descriptionsLayout: "horizontal",
      // 占位图
      emptyDescription: "",
      // 列表
      listDataSource: listDataSource,
      listBordered: false,
      listSize: "default",
      listSplit: false,
      listItemLayout: "horizontal",
      listLoading: false,
      // 气泡卡片
      popoverTrigger: "hover",
      popoverPlacement: "top",
      // 统计数值
      statisticGroupSeparator: ",",
      statisticDecimalSeparator: ".",
      statisticPrecision: 2,
      statisticPrefix: "",
      statisticSuffix: "%",
      statisticDeadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      statisticFormat: "HH:mm:ss",
      // 穿梭框
      transferDataSource: transferDataSource,
      transferTargetKeys: transferTargetKeys,
      transferSelectedKeys: ["1", "4"],
      transferDisabled: false,
      transferShowSearch: false,
      // 表格
      tableColumns: tableColumns,
      tableDataSource: tableDataSource,
      tableBordered: false,
      tableLoading: false,
      tableShowHeader: true,
      tableSize: "default",
      // 时间轴
      timelineReverse: false,
      timelineMode: "left",
      timelinePosition: "left",
      // 树形结构
      treeData: [],
      treeTreeData: treeTreeData,
      treeSelectedKeys: ["grape"],
      treeExpandedKeys: ["grape", "apple"],
      treeDisabled: false,
      treeBlockNode: true,
      treeAutoExpandParent: true,
      treeCheckable: true,
      treeDraggable: true,
      treeShowLine: true,
      // 进度条
      progressType: "line",
      progressShowInfo: false,
      progressStatus: "success",
      progressPercent: 80,
      progressSuccessPercent: 0,
      progressStrokeWidth: 6,
      progressStrokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      progressWidth: 132,
      progressGapDegree: 0,
      progressGapPosition: "top",
      // 加载占位图
      skeletonActive: false,
      skeletonLoading: true,
      skeletonAvatar: true,
      skeletonParagraph: true,
      skeletonTitle: true,
    };
  },
  methods: {
    // 穿梭框-选中选项
    transferSelectChange(sourceSelectedKeys, targetSelectedKeys) {
      this.transferSelectedKeys = [
        ...sourceSelectedKeys,
        ...targetSelectedKeys,
      ];
    },
    // 穿梭框-改变选项
    transferChange(nextTargetKeys) {
      this.transferTargetKeys = nextTargetKeys;
    },
  },
};
</script>