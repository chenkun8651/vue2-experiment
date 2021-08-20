<template>
  <!-- 展示组件 -->
  <div>
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

export default {
  data() {
    return {
      // 通用
      moment,
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