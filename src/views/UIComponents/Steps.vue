<template>
  <!-- 步骤条 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 步骤条">
      <div class="radio-box">
        <a-radio-group v-model="AntDesignVue.direction">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.labelPlacement">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.size">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.type">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'navigation'">navigation</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.status">
          <a-radio-button :value="'wait'">wait</a-radio-button>
          <a-radio-button :value="'process'">process</a-radio-button>
          <a-radio-button :value="'finish'">finish</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置步骤条进度</span>
          <a-input-number
            style="width: 100px"
            v-model="AntDesignVue.current"
            :max="2"
            :min="0"
          />
        </div>
      </div>
      <div>
        <a-steps
          style="height: 200px"
          :current="AntDesignVue.current"
          :direction="AntDesignVue.direction"
          :label-placement="AntDesignVue.labelPlacement"
          :size="AntDesignVue.size"
          :type="AntDesignVue.type"
          :status="AntDesignVue.status"
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
    <a-card class="card-margin" title="ElementUI 步骤条">
      <div class="radio-box">
        <a-radio-group v-model="ElementUI.simple">
          <a-radio-button :value="true">简洁风格</a-radio-button>
          <a-radio-button :value="false">普通风格</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.alignCenter">
          <a-radio-button :value="true">居中显示</a-radio-button>
          <a-radio-button :value="false">不居中显示</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.direction">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.processStatus">
          <a-radio-button :value="'wait'">wait</a-radio-button>
          <a-radio-button :value="'process'">process</a-radio-button>
          <a-radio-button :value="'finish'">finish</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.finishStatus">
          <a-radio-button :value="'wait'">wait</a-radio-button>
          <a-radio-button :value="'process'">process</a-radio-button>
          <a-radio-button :value="'finish'">finish</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置步骤条进度</span>
          <a-input-number
            style="width: 100px"
            v-model="ElementUI.active"
            :max="2"
            :min="0"
          />
        </div>
      </div>
      <div>
        <el-steps
          style="height: 200px"
          :active="ElementUI.active"
          :simple="ElementUI.simple"
          :align-center="ElementUI.alignCenter"
          :direction="ElementUI.direction"
          :process-status="ElementUI.processStatus"
          :finish-status="ElementUI.finishStatus"
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
    <a-card class="card-margin" title="AtUI 步骤条">
      <div class="radio-box">
        <a-radio-group v-model="AtUI.direction">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.size">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.status">
          <a-radio-button :value="'wait'">wait</a-radio-button>
          <a-radio-button :value="'process'">process</a-radio-button>
          <a-radio-button :value="'finish'">finish</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置步骤条进度</span>
          <a-input-number
            style="width: 100px"
            v-model="AtUI.current"
            :max="2"
            :min="0"
          />
        </div>
      </div>
      <div>
        <at-steps
          style="height: 200px"
          :current="AtUI.current"
          :direction="AtUI.direction"
          :size="AtUI.size"
          :status="AtUI.status"
        >
          <at-step title="注册" description="第一步：完成注册"></at-step>
          <at-step title="登录" description="第二步：完成登录"></at-step>
          <at-step title="验证" description="第三步：验证账号信息"></at-step>
        </at-steps>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 步骤条">
      <div class="radio-box">
        <a-radio-group v-model="ViewUI.direction">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.size">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.status">
          <a-radio-button :value="'wait'">wait</a-radio-button>
          <a-radio-button :value="'process'">process</a-radio-button>
          <a-radio-button :value="'finish'">finish</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
        </a-radio-group>
        <div class="number-set">
          <span style="margin-right: 5px">设置步骤条进度</span>
          <a-input-number
            style="width: 100px"
            v-model="ViewUI.current"
            :max="2"
            :min="0"
          />
        </div>
      </div>
      <div>
        <Steps
          style="height: 200px"
          :current="ViewUI.current"
          :direction="ViewUI.direction"
          :size="ViewUI.size"
          :status="ViewUI.status"
        >
          <Step title="注册" content="第一步：完成注册"></Step>
          <Step title="登录" content="第二步：完成登录"></Step>
          <Step title="验证" content="第三步：验证账号信息"></Step>
        </Steps>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        current: 0,
        direction: "horizontal",
        labelPlacement: "horizontal",
        size: "default",
        type: "default",
        status: "process",
      },
      ElementUI: {
        active: 0,
        simple: false,
        alignCenter: false,
        direction: "horizontal",
        processStatus: "process",
        finishStatus: "finish",
      },
      AtUI: {
        current: 0,
        direction: "horizontal",
        size: "default",
        status: "process",
      },
      ViewUI: {
        current: 0,
        direction: "horizontal",
        size: "default",
        status: "process",
      },
    };
  },
  methods: {},
};
</script>