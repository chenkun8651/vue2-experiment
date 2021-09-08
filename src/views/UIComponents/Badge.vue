<template>
  <!-- 徽标数 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 徽标数">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="badgeDot" @change="changeDot">
          <a-radio-button :value="null">数字徽标</a-radio-button>
          <a-radio-button :value="false">圆点徽标</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标附加文本</span>
          <a-input style="width: 100px" v-model="badgeText" />
        </div>
        <a-radio-group v-show="badgeDot === false" v-model="badgeStatus">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'processing'">processing</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
        </a-radio-group>
        <div v-show="badgeDot === false" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标颜色</span>
          <a-input style="width: 100px" v-model="badgeColor" />
        </div>
        <a-radio-group v-show="badgeDot === null" v-model="badgeShowZero">
          <a-radio-button :value="true">显示数字0</a-radio-button>
          <a-radio-button :value="false">隐藏数字0</a-radio-button>
        </a-radio-group>
        <div v-show="badgeDot === null" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示数字</span>
          <a-input-number style="width: 100px" v-model="badgeCount" />
        </div>
        <div v-show="badgeDot === null" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示封顶数字</span>
          <a-input-number style="width: 100px" v-model="badgeOverflowCount" />
        </div>
      </div>
      <div>
        <a-badge
          :dot="badgeDot"
          :status="badgeStatus"
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
    <a-card class="my-5" title="ElementUI 徽标数">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="badgeHiddenE">
          <a-radio-button :value="false">显示徽标</a-radio-button>
          <a-radio-button :value="true">隐藏徽标</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="badgeIsDotE">
          <a-radio-button :value="false">数字徽标</a-radio-button>
          <a-radio-button :value="true">圆点徽标</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="badgeTypeE">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'danger'">danger</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
        </a-radio-group>
        <div v-show="!badgeIsDotE" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示数字</span>
          <a-input-number style="width: 100px" v-model="badgeValueE" />
        </div>
        <div v-show="!badgeIsDotE" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示封顶数字</span>
          <a-input-number style="width: 100px" v-model="badgeMaxE" />
        </div>
      </div>
      <div>
        <el-badge
          :is-dot="badgeIsDotE"
          :type="badgeTypeE"
          :hidden="badgeHiddenE"
          :value="badgeValueE"
          :max="badgeMaxE"
        >
          <el-button>评论</el-button>
        </el-badge>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 徽标数">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="badgeShowA">
          <a-radio-button :value="true">显示徽标</a-radio-button>
          <a-radio-button :value="false">隐藏徽标</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="badgeDotA">
          <a-radio-button :value="false">数字徽标</a-radio-button>
          <a-radio-button :value="true">圆点徽标</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="badgeStatusA">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'info'">info</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
        </a-radio-group>
        <div v-show="!badgeDotA" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示数字</span>
          <a-input-number style="width: 100px" v-model="badgeValueA" />
        </div>
        <div v-show="!badgeDotA" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示封顶数字</span>
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
    <a-card class="my-5" title="ViewUI 徽标数">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="badgeDotV" @change="changeDotV">
          <a-radio-button :value="false">数字徽标</a-radio-button>
          <a-radio-button :value="null">圆点徽标</a-radio-button>
        </a-radio-group>
        <a-radio-group v-show="badgeDotV !== null" v-model="badgeTypeV">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'normal'">normal</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
        </a-radio-group>
        <a-radio-group v-show="badgeDotV !== null" v-model="badgeShowZeroV">
          <a-radio-button :value="true">显示数字0</a-radio-button>
          <a-radio-button :value="false">隐藏数字0</a-radio-button>
        </a-radio-group>
        <div v-show="badgeDotV !== null" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示数字</span>
          <a-input-number style="width: 100px" v-model="badgeCountV" />
        </div>
        <div v-show="badgeDotV !== null" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标展示封顶数字</span>
          <a-input-number style="width: 100px" v-model="badgeOverflowCountV" />
        </div>
        <a-radio-group v-show="badgeDotV === null" v-model="badgeStatusV">
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'processing'">processing</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'error'">error</a-radio-button>
          <a-radio-button :value="'warning'">warning</a-radio-button>
        </a-radio-group>
        <div v-show="badgeDotV === null" class="my-2 mr-5">
          <span style="margin-right: 5px">设置徽标颜色</span>
          <a-input style="width: 100px" v-model="badgeColorV" />
        </div>
        <div v-show="badgeDotV === null" class="my-2 mr-5">
          <span style="margin-right: 5px">设置状态徽标文本</span>
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
      </div>
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
      badgeValueE: 1,
      badgeMaxE: 99,
      // AtUI
      badgeDotA: true,
      badgeStatusA: "success",
      badgeShowA: true,
      badgeValueA: 1,
      badgeMaxNumA: 99,
      // ViewUI
      badgeDotV: null,
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
      if (this.badgeDot === null) {
        // 变成数字徽标
        this.badgeDot = null;
        this.badgeStatus = null;
      } else {
        // 变成圆点徽标
        this.badgeDot = false;
        this.badgeStatus = "default";
      }
    },
    changeDotV() {
      if (this.badgeDotV === null) {
        // 变成圆点徽标
        this.badgeDotV = null;
        this.badgeStatusV = "default";
      } else {
        // 变成数字徽标
        this.badgeDotV = false;
        this.badgeStatusV = null;
      }
    },
  },
};
</script>