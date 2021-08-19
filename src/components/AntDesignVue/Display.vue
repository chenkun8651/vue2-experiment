<template>
  <!-- 展示组件 -->
  <div>
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
  methods: {},
};
</script>