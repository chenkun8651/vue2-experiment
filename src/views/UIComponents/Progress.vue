<template>
  <div class="flex" ref="box">
    <!-- 进度条 -->
    <div class="w-9/12">
      <a-card id="1" class="my-5" title="AntDesignVue 进度条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示数值或图标</span>
            <a-switch v-model="AntDesignVue.showInfo" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条类型</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'line'">line</el-option>
              <el-option :value="'circle'">circle</el-option>
              <el-option :value="'dashboard'">dashboard</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条状态</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.status">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'exception'">exception</el-option>
              <el-option :value="'normal'">normal</el-option>
              <el-option :value="'active'">active</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置仪表盘进度条缺口位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.gapPosition"
            >
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条渐变起始颜色</span>
            <a-input class="w-24" v-model="AntDesignVue.strokeColor['0%']" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条渐变末尾颜色</span>
            <a-input class="w-24" v-model="AntDesignVue.strokeColor['100%']" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条百分比</span>
            <a-input-number class="w-24" v-model="AntDesignVue.percent" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置已完成百分比</span>
            <a-input-number
              class="w-24"
              v-model="AntDesignVue.successPercent"
            />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条线条宽度</span>
            <a-input-number class="w-24" v-model="AntDesignVue.strokeWidth" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条画布宽度</span>
            <a-input-number class="w-24" v-model="AntDesignVue.width" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置仪表盘进度条缺口所占角度</span>
            <a-input-number
              class="w-24"
              v-model="AntDesignVue.gapDegree"
              :max="360"
              :min="0"
            />
          </div>
        </div>
        <div>
          <a-progress
            :show-info="AntDesignVue.showInfo"
            :type="AntDesignVue.type"
            :status="AntDesignVue.status"
            :gap-position="AntDesignVue.gapPosition"
            :stroke-color="AntDesignVue.strokeColor"
            :percent="AntDesignVue.percent"
            :success-percent="AntDesignVue.successPercent"
            :stroke-width="AntDesignVue.strokeWidth"
            :width="AntDesignVue.width"
            :gap-degree="AntDesignVue.gapDegree"
          >
          </a-progress>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 进度条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示数值或图标</span>
            <a-switch v-model="ElementUI.showText" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示进度条内置的文字</span>
            <a-switch v-model="ElementUI.textInside" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="'line'">line</el-option>
              <el-option :value="'circle'">circle</el-option>
              <el-option :value="'dashboard'">dashboard</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条状态</span>
            <el-select size="small" class="w-36" v-model="ElementUI.status">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'exception'">exception</el-option>
              <el-option :value="'warning'">warning</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条路径两端的形状</span>
            <el-select
              size="small"
              class="w-36"
              v-model="ElementUI.strokeLinecap"
            >
              <el-option :value="'round'">round</el-option>
              <el-option :value="'butt'">butt</el-option>
              <el-option :value="'square'">square</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条百分比</span>
            <a-input-number class="w-24" v-model="ElementUI.percentage" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条线条宽度</span>
            <a-input-number class="w-24" v-model="ElementUI.strokeWidth" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条画布宽度</span>
            <a-input-number class="w-24" v-model="ElementUI.width" />
          </div>
        </div>
        <div>
          <el-progress
            :show-text="ElementUI.showText"
            :text-inside="ElementUI.textInside"
            :type="ElementUI.type"
            :status="ElementUI.status"
            :stroke-linecap="ElementUI.strokeLinecap"
            :percentage="ElementUI.percentage"
            :stroke-width="ElementUI.strokeWidth"
            :width="ElementUI.width"
          >
          </el-progress>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 进度条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条状态</span>
            <el-select size="small" class="w-36" v-model="AtUI.status">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条百分比</span>
            <a-input-number class="w-24" v-model="AtUI.percent" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条线条宽度</span>
            <a-input-number class="w-24" v-model="AtUI.strokeWidth" />
          </div>
        </div>
        <div>
          <at-progress
            :status="AtUI.status"
            :percent="AtUI.percent"
            :stroke-width="AtUI.strokeWidth"
          >
          </at-progress>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 进度条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示数值或图标</span>
            <a-switch v-model="ViewUI.hideInfo" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否垂直显示</span>
            <a-switch v-model="ViewUI.vertical" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示进度条内置的文字</span>
            <a-switch v-model="ViewUI.textInside" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条状态</span>
            <el-select size="small" class="w-36" v-model="ViewUI.status">
              <el-option :value="'normal'">normal</el-option>
              <el-option :value="'active'">active</el-option>
              <el-option :value="'wrong'">wrong</el-option>
              <el-option :value="'success'">success</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条百分比</span>
            <a-input-number class="w-24" v-model="ViewUI.percent" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置已完成百分比</span>
            <a-input-number class="w-24" v-model="ViewUI.successPercent" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置进度条线条宽度</span>
            <a-input-number class="w-24" v-model="ViewUI.strokeWidth" />
          </div>
        </div>
        <div>
          <Progress
            :hide-info="ViewUI.hideInfo"
            :vertical="ViewUI.vertical"
            :text-inside="ViewUI.textInside"
            :status="ViewUI.status"
            :percent="ViewUI.percent"
            :success-percent="ViewUI.successPercent"
            :stroke-width="ViewUI.strokeWidth"
          >
          </Progress>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.progressAnchor"
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
        showInfo: false,
        type: "line",
        status: "success",
        gapPosition: "top",
        strokeColor: {
          "0%": "#108ee9",
          "100%": "#87d068",
        },
        percent: 80,
        successPercent: 0,
        strokeWidth: 10,
        width: 130,
        gapDegree: 0,
      },
      ElementUI: {
        showText: false,
        textInside: false,
        type: "line",
        status: "success",
        strokeLinecap: "round",
        percentage: 80,
        strokeWidth: 10,
        width: 130,
      },
      AtUI: {
        status: "success",
        percent: 80,
        strokeWidth: 10,
      },
      ViewUI: {
        hideInfo: false,
        vertical: false,
        textInside: false,
        status: "normal",
        percent: 80,
        successPercent: 0,
        strokeWidth: 10,
      },
    };
  },
  methods: {},
};
</script>