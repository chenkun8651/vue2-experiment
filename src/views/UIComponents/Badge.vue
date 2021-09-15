<template>
  <div class="flex" ref="box">
    <!-- 徽标数 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 徽标数">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">数字0是否显示</span>
            <a-switch v-model="AntDesignVue.showZero" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标类型</span>
            <el-select
              size="small"
              class="w-40"
              v-model="AntDesignVue.dot"
              @change="changeDot"
            >
              <el-option :value="''">数字徽标</el-option>
              <el-option :value="false">圆点徽标</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标状态</span>
            <el-select size="small" class="w-40" v-model="AntDesignVue.status">
              <el-option :value="'processing'"> processing </el-option>
              <el-option :value="'default'">default</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'error'">error</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标附加文本</span>
            <a-input class="w-24" v-model="AntDesignVue.text" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标颜色</span>
            <a-input class="w-24" v-model="AntDesignVue.color" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标显示数字</span>
            <a-input-number class="w-24" v-model="AntDesignVue.count" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标封顶显示数字</span>
            <a-input-number class="w-24" v-model="AntDesignVue.overflowCount" />
          </div>
        </div>
        <div>
          <a-badge
            :show-zero="AntDesignVue.showZero"
            :dot="AntDesignVue.dot"
            :status="AntDesignVue.status"
            :text="AntDesignVue.text"
            :color="AntDesignVue.color"
            :count="AntDesignVue.count"
            :overflow-count="AntDesignVue.overflowCount"
          >
            <a-button>评论</a-button>
          </a-badge>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 徽标数">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示徽标</span>
            <a-switch v-model="ElementUI.hidden" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标类型</span>
            <el-select size="small" class="w-40" v-model="ElementUI.isDot">
              <el-option :value="false">数字徽标</el-option>
              <el-option :value="true">圆点徽标</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标状态</span>
            <el-select size="small" class="w-40" v-model="ElementUI.type">
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'warning'">warning</el-option>
              <el-option :value="'danger'">danger</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标显示数字</span>
            <a-input-number class="w-24" v-model="ElementUI.value" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标封顶显示数字</span>
            <a-input-number class="w-24" v-model="ElementUI.max" />
          </div>
        </div>
        <div>
          <el-badge
            :is-dot="ElementUI.isDot"
            :type="ElementUI.type"
            :hidden="ElementUI.hidden"
            :value="ElementUI.value"
            :max="ElementUI.max"
          >
            <el-button>评论</el-button>
          </el-badge>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 徽标数">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示徽标</span>
            <a-switch v-model="AtUI.show" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标类型</span>
            <el-select size="small" class="w-40" v-model="AtUI.dot">
              <el-option :value="false">数字徽标</el-option>
              <el-option :value="true">圆点徽标</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标状态</span>
            <el-select size="small" class="w-40" v-model="AtUI.status">
              <el-option :value="'success'">success</el-option>
              <el-option :value="'info'">info</el-option>
              <el-option :value="'warning'">warning</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标显示数字</span>
            <a-input-number class="w-24" v-model="AtUI.value" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标封顶显示数字</span>
            <a-input-number class="w-24" v-model="AtUI.maxNum" />
          </div>
        </div>
        <div>
          <at-badge
            :show="AtUI.show"
            :dot="AtUI.dot"
            :status="AtUI.status"
            :value="AtUI.value"
            :max-num="AtUI.maxNum"
          >
            <at-button>评论</at-button>
          </at-badge>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 徽标数">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">数字0是否显示</span>
            <a-switch v-model="ViewUI.showZero" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标类型</span>
            <el-select size="small" class="w-40" v-model="ViewUI.dot">
              <el-option :value="false">数字徽标</el-option>
              <el-option :value="''">圆点徽标</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置数字徽标状态</span>
            <el-select size="small" class="w-40" v-model="ViewUI.type">
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'normal'">normal</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'warning'">warning</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置圆点徽标状态</span>
            <el-select size="small" class="w-40" v-model="ViewUI.status">
              <el-option :value="'processing'"> processing </el-option>
              <el-option :value="'default'">default</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'error'">error</el-option>
              <el-option :value="'warning'">warning</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标展示数字</span>
            <a-input-number class="w-24" v-model="ViewUI.count" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标展示封顶数字</span>
            <a-input-number class="w-24" v-model="ViewUI.overflowCount" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置徽标颜色</span>
            <a-input class="w-24" v-model="ViewUI.color" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置状态徽标文本</span>
            <a-input class="w-24" v-model="ViewUI.text" />
          </div>
        </div>
        <div>
          <Badge
            :dot="ViewUI.dot"
            :type="ViewUI.type"
            :status="ViewUI.status"
            :show-zero="ViewUI.showZero"
            :count="ViewUI.count"
            :overflow-count="ViewUI.overflowCount"
            :color="ViewUI.color"
            :text="ViewUI.text"
          >
            <Button>评论</Button>
          </Badge>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.badgeAnchor"
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
        showZero: true,
        dot: false,
        status: "default",
        text: "",
        color: null,
        count: 1,
        overflowCount: 99,
      },
      ElementUI: {
        hidden: false,
        isDot: true,
        type: "primary",
        value: 1,
        max: 99,
      },
      AtUI: {
        show: true,
        dot: true,
        status: "success",
        value: 1,
        maxNum: 99,
      },
      ViewUI: {
        showZero: true,
        dot: "",
        type: "normal",
        status: "default",
        count: 1,
        overflowCount: 99,
        color: null,
        text: "",
      },
    };
  },
  methods: {
    changeDot() {
      if (this.AntDesignVue.dot === "") {
        this.AntDesignVue.dot = "";
        this.AntDesignVue.status = "";
      } else {
        this.AntDesignVue.dot = false;
        this.AntDesignVue.status = "default";
      }
    },
    changeDot2() {
      if (this.ViewUI.dot === "") {
        this.ViewUI.dot = "";
        this.ViewUI.status = "default";
      } else {
        this.ViewUI.dot = false;
        this.ViewUI.status = "";
      }
    },
  },
};
</script>