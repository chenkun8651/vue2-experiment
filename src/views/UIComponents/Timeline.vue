<template>
  <!-- 时间轴 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="mtb-20" title="AntDesignVue 时间轴">
      <div class="control-box">
        <a-radio-group v-model="timelineMode">
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'alternate'">alternate</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineReverse">
          <a-radio-button :value="true">反序</a-radio-button>
          <a-radio-button :value="false">正序</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelinePosition">
          <a-radio-button :value="'left'">节点转左边</a-radio-button>
          <a-radio-button :value="'right'">节点转右边</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-timeline :reverse="timelineReverse" :mode="timelineMode">
          <a-timeline-item
            v-for="(item, index) in timeline"
            :key="index"
            :position="timelinePosition"
          >
            {{ item.content }} {{ item.timestamp }}
          </a-timeline-item>
        </a-timeline>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="mtb-20" title="ElementUI 时间轴">
      <div class="control-box">
        <a-radio-group v-model="timelineReverseE">
          <a-radio-button :value="true">反序</a-radio-button>
          <a-radio-button :value="false">正序</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineHideTimestampE">
          <a-radio-button :value="true">隐藏时间戳</a-radio-button>
          <a-radio-button :value="false">显示时间戳</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelinePlacementE">
          <a-radio-button :value="'top'">时间戳在上</a-radio-button>
          <a-radio-button :value="'bottom'">时间戳在下</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineTypeE">
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
          <a-radio-button :value="'danger'">danger</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineSizeE">
          <a-radio-button :value="'normal'">normal</a-radio-button>
          <a-radio-button :value="'large'">large</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-timeline :reverse="timelineReverseE">
          <el-timeline-item
            v-for="(item, index) in timeline"
            :key="index"
            :timestamp="item.timestamp"
            :hide-timestamp="timelineHideTimestampE"
            :placement="timelinePlacementE"
            :type="timelineTypeE"
            :size="timelineSizeE"
          >
            {{ item.content }}
          </el-timeline-item>
        </el-timeline>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="mtb-20" title="AtUI 时间轴">
      <div class="control-box">
        <a-radio-group v-model="timelinePendingA">
          <a-radio-button :value="true">开启幽灵节点</a-radio-button>
          <a-radio-button :value="false">关闭幽灵节点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineColorA">
          <a-radio-button :value="'blue'">blue</a-radio-button>
          <a-radio-button :value="'red'">red</a-radio-button>
          <a-radio-button :value="'green'">green</a-radio-button>
          <a-radio-button :value="'yellow'">yellow</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-timeline :pending="timelinePendingA">
          <at-timeline-item
            v-for="(item, index) in timeline"
            :key="index"
            :color="timelineColorA"
          >
            {{ item.content }} {{ item.timestamp }}
          </at-timeline-item>
        </at-timeline>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="mtb-20" title="ViewUI 时间轴">
      <div class="control-box">
        <a-radio-group v-model="timelinePendingV">
          <a-radio-button :value="true">开启幽灵节点</a-radio-button>
          <a-radio-button :value="false">关闭幽灵节点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="timelineColorV">
          <a-radio-button :value="'blue'">blue</a-radio-button>
          <a-radio-button :value="'red'">red</a-radio-button>
          <a-radio-button :value="'green'">green</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Timeline :pending="timelinePendingV">
          <TimelineItem
            v-for="(item, index) in timeline"
            :key="index"
            :color="timelineColorV"
          >
            {{ item.content }} {{ item.timestamp }}
          </TimelineItem>
        </Timeline>
      </div>
    </a-card>
  </div>
</template>

<script>
const timeline = [
  {
    content: "创建网络服务",
    timestamp: "2018-04-15",
  },
  {
    content: "解决网络波动问题",
    timestamp: "2018-04-13",
  },
  {
    content: "技术测试",
    timestamp: "2018-04-11",
  },
  {
    content: "网络问题已解决",
    timestamp: "2018-04-09",
  },
];
export default {
  data() {
    return {
      timeline: timeline,
      // AntDesignVue
      timelineMode: "left",
      timelineReverse: false,
      timelinePosition: "left",
      // ElementUI
      timelineReverseE: false,
      timelineHideTimestampE: false,
      timelinePlacementE: "bottom",
      timelineTypeE: "info",
      timelineSizeE: "normal",
      // AtUI
      timelinePendingA: false,
      timelineColorA: "blue",
      // ViewUI
      timelinePendingV: false,
      timelineColorV: "blue",
    };
  },
  methods: {},
};
</script>