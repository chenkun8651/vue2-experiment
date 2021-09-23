<template>
  <div class="flex" ref="box">
    <!-- 步骤条 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 步骤条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条排列方向</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.direction"
            >
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条文本排列方向</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.labelPlacement"
            >
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条类型</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'navigation'">navigation</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条状态</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.status">
              <el-option :value="'wait'">wait</el-option>
              <el-option :value="'process'">process</el-option>
              <el-option :value="'finish'">finish</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条进度</span>
            <a-input-number
              class="w-24"
              v-model="AntDesignVue.current"
              :max="2"
              :min="0"
            />
          </div>
        </div>
        <div>
          <a-steps
            :direction="AntDesignVue.direction"
            :label-placement="AntDesignVue.labelPlacement"
            :size="AntDesignVue.size"
            :type="AntDesignVue.type"
            :status="AntDesignVue.status"
            :current="AntDesignVue.current"
          >
            <a-step>
              <a-icon slot="icon" type="solution" />
              <span slot="title">注册</span>
              <span slot="description">第一步：完成注册</span>
            </a-step>
            <a-step
              title="登录"
              sub-title="登录后功能丰富"
              description="第二步：完成登录"
            >
            </a-step>
            <a-step title="验证" description="第三步：验证账号信息">
              <a-icon slot="icon" type="check" />
            </a-step>
          </a-steps>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 步骤条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示简洁风格</span>
            <a-switch v-model="ElementUI.simple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否居中显示</span>
            <a-switch v-model="ElementUI.alignCenter" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条排列方向</span>
            <el-select size="small" class="w-36" v-model="ElementUI.direction">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条状态</span>
            <el-select
              size="small"
              class="w-36"
              v-model="ElementUI.processStatus"
            >
              <el-option :value="'wait'">wait</el-option>
              <el-option :value="'process'">process</el-option>
              <el-option :value="'finish'">finish</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'success'">success</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条完成状态</span>
            <el-select
              size="small"
              class="w-36"
              v-model="ElementUI.finishStatus"
            >
              <el-option :value="'wait'">wait</el-option>
              <el-option :value="'process'">process</el-option>
              <el-option :value="'finish'">finish</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'success'">success</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条进度</span>
            <a-input-number
              class="w-24"
              v-model="ElementUI.active"
              :max="2"
              :min="0"
            />
          </div>
        </div>
        <div>
          <el-steps
            :simple="ElementUI.simple"
            :align-center="ElementUI.alignCenter"
            :direction="ElementUI.direction"
            :process-status="ElementUI.processStatus"
            :finish-status="ElementUI.finishStatus"
            :active="ElementUI.active"
          >
            <el-step
              icon="el-icon-edit"
              title="注册"
              description="第一步：完成注册"
            >
            </el-step>
            <el-step
              icon="el-icon-upload"
              title="登录"
              description="第二步：完成登录"
            >
            </el-step>
            <el-step
              icon="el-icon-picture"
              title="验证"
              description="第三步：验证账号信息"
            >
            </el-step>
          </el-steps>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 步骤条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条排列方向</span>
            <el-select size="small" class="w-36" v-model="AtUI.direction">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条大小</span>
            <el-select size="small" class="w-36" v-model="AtUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条状态</span>
            <el-select size="small" class="w-36" v-model="AtUI.status">
              <el-option :value="'wait'">wait</el-option>
              <el-option :value="'process'">process</el-option>
              <el-option :value="'finish'">finish</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条进度</span>
            <a-input-number
              class="w-24"
              v-model="AtUI.current"
              :max="2"
              :min="0"
            />
          </div>
        </div>
        <div>
          <at-steps
            :direction="AtUI.direction"
            :size="AtUI.size"
            :status="AtUI.status"
            :current="AtUI.current"
          >
            <at-step title="注册" description="第一步：完成注册"></at-step>
            <at-step title="登录" description="第二步：完成登录"></at-step>
            <at-step title="验证" description="第三步：验证账号信息"></at-step>
          </at-steps>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 步骤条">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条排列方向</span>
            <el-select size="small" class="w-36" v-model="ViewUI.direction">
              <el-option :value="'horizontal'">horizontal</el-option>
              <el-option :value="'vertical'">vertical</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条大小</span>
            <el-select size="small" class="w-36" v-model="ViewUI.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条状态</span>
            <el-select size="small" class="w-36" v-model="ViewUI.status">
              <el-option :value="'wait'">wait</el-option>
              <el-option :value="'process'">process</el-option>
              <el-option :value="'finish'">finish</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置步骤条进度</span>
            <a-input-number
              class="w-24"
              v-model="ViewUI.current"
              :max="2"
              :min="0"
            />
          </div>
        </div>
        <div>
          <Steps
            :direction="ViewUI.direction"
            :size="ViewUI.size"
            :status="ViewUI.status"
            :current="ViewUI.current"
          >
            <Step title="注册" content="第一步：完成注册"></Step>
            <Step title="登录" content="第二步：完成登录"></Step>
            <Step title="验证" content="第三步：验证账号信息"></Step>
          </Steps>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.stepsAnchor"
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
        direction: "horizontal",
        labelPlacement: "horizontal",
        size: "default",
        type: "default",
        status: "process",
        current: 0,
      },
      ElementUI: {
        simple: false,
        alignCenter: false,
        direction: "horizontal",
        processStatus: "process",
        finishStatus: "finish",
        active: 0,
      },
      AtUI: {
        direction: "horizontal",
        size: "default",
        status: "process",
        current: 0,
      },
      ViewUI: {
        direction: "horizontal",
        size: "default",
        status: "process",
        current: 0,
      },
    };
  },
  methods: {},
};
</script>