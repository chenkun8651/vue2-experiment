<template>
  <div class="flex" ref="box">
    <!-- 时间轴 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 时间轴">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否反向时间轴</span>
            <a-switch v-model="AntDesignVue.reverse" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置时间轴摆放位置</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.mode">
              <el-option :value="'alternate'">alternate</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置节点摆放位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.position"
            >
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-timeline :reverse="AntDesignVue.reverse" :mode="AntDesignVue.mode">
            <a-timeline-item
              v-for="(item, index) in timeline"
              :key="index"
              :position="AntDesignVue.position"
            >
              {{ item.content }} {{ item.timestamp }}
            </a-timeline-item>
          </a-timeline>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 时间轴">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否反向时间轴</span>
            <a-switch v-model="ElementUI.reverse" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示时间戳</span>
            <a-switch v-model="ElementUI.hideTimestamp" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置节点位置</span>
            <el-select size="small" class="w-36" v-model="ElementUI.placement">
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置节点状态</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'danger'">danger</el-option>
              <el-option :value="'info'">info</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置节点大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="'normal'">normal</el-option>
              <el-option :value="'large'">large</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <el-timeline :reverse="ElementUI.reverse">
            <el-timeline-item
              v-for="(item, index) in timeline"
              :key="index"
              :timestamp="item.timestamp"
              :hide-timestamp="ElementUI.hideTimestamp"
              :placement="ElementUI.placement"
              :type="ElementUI.type"
              :size="ElementUI.size"
            >
              {{ item.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 时间轴">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示幽灵节点</span>
            <a-switch v-model="AtUI.pending" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置节点颜色</span>
            <el-select size="small" class="w-36" v-model="AtUI.color">
              <el-option :value="'blue'">blue</el-option>
              <el-option :value="'red'">red</el-option>
              <el-option :value="'green'">green</el-option>
              <el-option :value="'yellow'">yellow</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <at-timeline :pending="AtUI.pending">
            <at-timeline-item
              v-for="(item, index) in timeline"
              :key="index"
              :color="AtUI.color"
            >
              {{ item.content }} {{ item.timestamp }}
            </at-timeline-item>
          </at-timeline>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 时间轴">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示幽灵节点</span>
            <a-switch v-model="ViewUI.pending" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置节点颜色</span>
            <el-select size="small" class="w-36" v-model="ViewUI.color">
              <el-option :value="'blue'">blue</el-option>
              <el-option :value="'red'">red</el-option>
              <el-option :value="'green'">green</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Timeline :pending="ViewUI.pending">
            <TimelineItem
              v-for="(item, index) in timeline"
              :key="index"
              :color="ViewUI.color"
            >
              {{ item.content }} {{ item.timestamp }}
            </TimelineItem>
          </Timeline>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.timelineAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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
      AntDesignVue: {
        reverse: false,
        mode: "left",
        position: "left",
      },
      ElementUI: {
        reverse: false,
        hideTimestamp: false,
        placement: "bottom",
        type: "info",
        size: "normal",
      },
      AtUI: {
        pending: false,
        color: "blue",
      },
      ViewUI: {
        pending: false,
        color: "blue",
      },
    };
  },
  methods: {},
};
</script>