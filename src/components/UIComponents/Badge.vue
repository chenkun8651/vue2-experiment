<template>
  <!-- 徽标数组件 -->
  <div>
    <!-- 徽标数 -->
    <a-card class="card-margin">
      <div slot="title" class="title-xy">徽标数</div>
      <!-- AntDesignVue -->
      <a-card class="card-margin" title="AntDesignVue 徽标数">
        <div class="radio-box">
          <a-radio-group v-model="badgeDot" @change="changeDot">
            <a-radio-button :value="true">显示数字</a-radio-button>
            <a-radio-button :value="false">显示圆点</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="badgeStatus">
            <a-radio-button :value="'success'">成功</a-radio-button>
            <a-radio-button :value="'processing'">处理中</a-radio-button>
            <a-radio-button :value="'default'">默认</a-radio-button>
            <a-radio-button :value="'error'">错误</a-radio-button>
            <a-radio-button :value="'warning'">警告</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="badgeShowZero">
            <a-radio-button :value="true">显示数字0</a-radio-button>
            <a-radio-button :value="false">隐藏数字0</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示数字</span>
            <a-input-number style="width: 100px" v-model="badgeCount" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示封顶数字</span>
            <a-input-number style="width: 100px" v-model="badgeOverflowCount" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置徽标颜色</span>
            <a-input style="width: 100px" v-model="badgeColor" />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置状态点文本</span>
            <a-input style="width: 100px" v-model="badgeText" />
          </div>
        </div>
        <div>
          <a-badge
            style="margin: 5px 10px"
            :status="badgeStatus"
            :dot="badgeDot"
            :show-zero="badgeShowZero"
            :count="badgeCount"
            :overflow-count="badgeOverflowCount"
            :color="badgeColor"
            :text="badgeText"
          >
            <a-button>评论</a-button>
          </a-badge>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card class="card-margin" title="ElementUI 徽标数">
        <div class="radio-box">
          <a-radio-group v-model="badgeIsDotE">
            <a-radio-button :value="false">显示数字</a-radio-button>
            <a-radio-button :value="true">显示圆点</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="badgeTypeE">
            <a-radio-button :value="'success'">成功</a-radio-button>
            <a-radio-button :value="'primary'">默认</a-radio-button>
            <a-radio-button :value="'info'">信息</a-radio-button>
            <a-radio-button :value="'danger'">错误</a-radio-button>
            <a-radio-button :value="'warning'">警告</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="badgeHiddenE">
            <a-radio-button :value="false">显示徽标</a-radio-button>
            <a-radio-button :value="true">隐藏徽标</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示数字</span>
            <a-input-number style="width: 100px" v-model="badgeValueE" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示封顶数字</span>
            <a-input-number style="width: 100px" v-model="badgeMaxE" />
          </div>
        </div>
        <div>
          <el-badge
            :type="badgeTypeE"
            :hidden="badgeHiddenE"
            :max="badgeMaxE"
            :is-dot="badgeIsDotE"
            :value="badgeValueE"
          >
            <el-button>评论</el-button>
          </el-badge>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card class="card-margin" title="AtUI 徽标数">
        <div class="radio-box">
          <a-radio-group v-model="badgeDotA">
            <a-radio-button :value="false">显示数字</a-radio-button>
            <a-radio-button :value="true">显示圆点</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="badgeStatusA">
            <a-radio-button :value="'success'">成功</a-radio-button>
            <a-radio-button :value="'info'">信息</a-radio-button>
            <a-radio-button :value="'warning'">警告</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="badgeShowA">
            <a-radio-button :value="true">显示徽标</a-radio-button>
            <a-radio-button :value="false">隐藏徽标</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示数字</span>
            <a-input-number style="width: 100px" v-model="badgeValueA" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示封顶数字</span>
            <a-input-number style="width: 100px" v-model="badgeMaxNumA" />
          </div>
        </div>
        <div>
          <at-badge
            :dot="badgeDotA"
            :status="badgeStatusA"
            :show="badgeShowA"
            :value="badgeValueA"
            :max-num="badgeMaxNumA"
          >
            <at-button>评论</at-button>
          </at-badge>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card class="card-margin" title="ViewUI 图标">
        <div class="radio-box">
          <a-radio-group v-model="badgeDotV" @change="changeDotV">
            <a-radio-button :value="false">显示数字</a-radio-button>
            <a-radio-button :value="true">显示圆点</a-radio-button>
          </a-radio-group>
          <a-radio-group v-if="!badgeDotV" v-model="badgeTypeV">
            <a-radio-button :value="'success'">成功</a-radio-button>
            <a-radio-button :value="'primary'">默认</a-radio-button>
            <a-radio-button :value="'normal'">普通</a-radio-button>
            <a-radio-button :value="'error'">错误</a-radio-button>
            <a-radio-button :value="'warning'">警告</a-radio-button>
            <a-radio-button :value="'info'">信息</a-radio-button>
          </a-radio-group>
          <a-radio-group v-if="badgeDotV" v-model="badgeStatusV">
            <a-radio-button :value="'success'">成功</a-radio-button>
            <a-radio-button :value="'processing'">处理中</a-radio-button>
            <a-radio-button :value="'default'">默认</a-radio-button>
            <a-radio-button :value="'error'">错误</a-radio-button>
            <a-radio-button :value="'warning'">警告</a-radio-button>
          </a-radio-group>
          <a-radio-group v-model="badgeShowZeroV">
            <a-radio-button :value="true">显示数字0</a-radio-button>
            <a-radio-button :value="false">隐藏数字0</a-radio-button>
          </a-radio-group>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示数字</span>
            <a-input-number style="width: 100px" v-model="badgeCountV" />
          </div>
          <div class="number-set">
            <span style="margin-right: 5px">设置展示封顶数字</span>
            <a-input-number
              style="width: 100px"
              v-model="badgeOverflowCountV"
            />
          </div>
          <div class="string-set">
            <span style="margin-right: 5px">设置徽标颜色</span>
            <a-input style="width: 100px" v-model="badgeColorV" />
          </div>
          <div v-if="!badgeDotV" class="string-set">
            <span style="margin-right: 5px">设置状态点文本</span>
            <a-input style="width: 100px" v-model="badgeTextV" />
          </div>
        </div>
        <div>
          <Badge
            :dot="badgeDotV"
            :type="badgeTypeV"
            :status="badgeStatusV"
            :show-zero="badgeShowZeroV"
            :count="badgeCountV"
            :overflow-count="badgeOverflowCountV"
            :color="badgeColorV"
            :text="badgeTextV"
          >
            <Button>评论</Button>
          </Badge>
          <Badge :dot="true" :status="badgeStatusV">
            <Button>评论</Button>
          </Badge>
        </div>
      </a-card>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      badgeDot: false,
      badgeStatus: "default",
      badgeShowZero: true,
      badgeCount: 1,
      badgeOverflowCount: 99,
      badgeColor: null,
      badgeText: "",
      // ElementUI
      badgeIsDotE: true,
      badgeTypeE: "primary",
      badgeHiddenE: false,
      badgeValueE: 10,
      badgeMaxE: 99,
      // AtUI
      badgeDotA: true,
      badgeStatusA: "success",
      badgeShowA: true,
      badgeValueA: 1,
      badgeMaxNumA: 99,
      // ViewUI
      badgeDotV: true,
      badgeTypeV: "normal",
      badgeStatusV: "default",
      badgeShowZeroV: true,
      badgeCountV: 1,
      badgeOverflowCountV: 99,
      badgeColorV: null,
      badgeTextV: "",
    };
  },
  methods: {
    changeDot() {
      if (this.badgeDot) {
        this.badgeStatus = null;
      } else {
        this.badgeStatus = "default";
      }
    },
    changeDotV() {
      if (this.badgeDotV) {
        this.badgeTypeV = null;
        this.badgeStatusV = "success";
        this.badgeCountV = 0;
        console.log(this.badgeStatusV);
        console.log(this.badgeDotV);
        console.log(this.badgeCountV);
      } else {
        this.badgeStatusV = null;
      }
    },
  },
};
</script>