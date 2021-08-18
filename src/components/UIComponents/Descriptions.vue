<template>
  <!-- 描述列表组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 描述列表">
      <div class="radio-box">
        <a-radio-group v-model="descriptionsBordered">
          <a-radio-button :value="true">显示边框</a-radio-button>
          <a-radio-button :value="false">隐藏边框</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsSize">
          <a-radio-button :value="'default'">默认</a-radio-button>
          <a-radio-button :value="'middle'">中型</a-radio-button>
          <a-radio-button :value="'small'">小型</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="descriptionsLayout">
          <a-radio-button :value="'horizontal'">水平布局</a-radio-button>
          <a-radio-button :value="'vertical'">垂直布局</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-descriptions
          title="用户信息"
          :bordered="descriptionsBordered"
          :size="descriptionsSize"
          :layout="descriptionsLayout"
        >
          <a-descriptions-item label="姓名">陈坤</a-descriptions-item>
          <a-descriptions-item label="电话">1810000000</a-descriptions-item>
          <a-descriptions-item label="现居地">火星</a-descriptions-item>
          <a-descriptions-item label="备注">----</a-descriptions-item>
          <a-descriptions-item label="地址">
            中国 北京 第三大街 185号
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 走马灯">
      <div class="radio-box">
        <a-radio-group v-model="carouselDirectionE">
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselTypeE">
          <a-radio-button :value="null">普通走马灯</a-radio-button>
          <a-radio-button :value="'card'">卡片走马灯</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselAutoplayE">
          <a-radio-button :value="true">开启自动播放</a-radio-button>
          <a-radio-button :value="false">关闭自动播放</a-radio-button>
        </a-radio-group>
        <div v-show="carouselAutoplayE" class="number-set">
          <span style="margin-right: 5px">设置自动播放时间间隔（毫秒）</span>
          <a-input-number style="width: 100px" v-model="carouselIntervalE" />
        </div>
        <a-radio-group v-model="carouselLoopE">
          <a-radio-button :value="true">开启循环</a-radio-button>
          <a-radio-button :value="false">关闭循环</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselTriggerE">
          <a-radio-button :value="'hover'">指示点悬停切换</a-radio-button>
          <a-radio-button :value="'click'">指示点点击切换</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselIndicatorPositionE">
          <a-radio-button :value="null">内部显示指示点</a-radio-button>
          <a-radio-button :value="'outside'">外部显示指示点</a-radio-button>
          <a-radio-button :value="'none'">不显示指示点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselArrowE">
          <a-radio-button :value="'hover'">箭头悬停显示</a-radio-button>
          <a-radio-button :value="'always'">箭头常显示</a-radio-button>
          <a-radio-button :value="'never'">箭头不显示</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <el-descriptions
          title="用户信息"
          :border="border"
          :direction="direction"
          :size="size"
        >
          <el-descriptions-item label="姓名">陈坤</el-descriptions-item>
          <el-descriptions-item label="电话">1810000000</el-descriptions-item>
          <el-descriptions-item label="现居地">火星</el-descriptions-item>
          <el-descriptions-item label="备注">----</el-descriptions-item>
          <el-descriptions-item label="地址">
            中国 北京 第三大街 185号
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 走马灯">
      <div class="c-f5222d">AtUI框架没有走马灯组件</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 走马灯">
      <div class="radio-box">
        <a-radio-group v-model="carouselAutoplayV">
          <a-radio-button :value="true">开启自动播放</a-radio-button>
          <a-radio-button :value="false">关闭自动播放</a-radio-button>
        </a-radio-group>
        <div v-show="carouselAutoplayV" class="number-set">
          <span style="margin-right: 5px">设置自动播放时间间隔（毫秒）</span>
          <a-input-number
            style="width: 100px"
            v-model="carouselAutoplaySpeedV"
          />
        </div>
        <a-radio-group v-model="carouselLoopV">
          <a-radio-button :value="true">开启循环</a-radio-button>
          <a-radio-button :value="false">关闭循环</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselRadiusDotV">
          <a-radio-button :value="true">圆点指示点</a-radio-button>
          <a-radio-button :value="false">宽点指示点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselTriggerV">
          <a-radio-button :value="'hover'">指示点悬停切换</a-radio-button>
          <a-radio-button :value="'click'">指示点点击切换</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselDotsV">
          <a-radio-button :value="'inside'">内部显示指示点</a-radio-button>
          <a-radio-button :value="'outside'">外部显示指示点</a-radio-button>
          <a-radio-button :value="'none'">不显示指示点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselArrowV">
          <a-radio-button :value="'hover'">箭头悬停显示</a-radio-button>
          <a-radio-button :value="'always'">箭头常显示</a-radio-button>
          <a-radio-button :value="'never'">箭头不显示</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Carousel
          :value="0"
          :autoplay="carouselAutoplayV"
          :autoplay-speed="carouselAutoplaySpeedV"
          :loop="carouselLoopV"
          :radius-dot="carouselRadiusDotV"
          :trigger="carouselTriggerV"
          :dots="carouselDotsV"
          :arrow="carouselArrowV"
        >
          <CarouselItem class="carousel-item" v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </CarouselItem>
        </Carousel>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      descriptionsBordered: false,
      descriptionsSize: "default",
      descriptionsLayout: "horizontal",
      // ElementUI
      carouselDirectionE: "horizontal",
      carouselTypeE: null,
      carouselAutoplayE: false,
      carouselIntervalE: 3000,
      carouselLoopE: true,
      carouselTriggerE: "hover",
      carouselIndicatorPositionE: null,
      carouselArrowE: "hover",
      // ViewUI
      carouselAutoplayV: false,
      carouselAutoplaySpeedV: 3000,
      carouselLoopV: false,
      carouselRadiusDotV: false,
      carouselTriggerV: "hover",
      carouselDotsV: "inside",
      carouselArrowV: "hover",
    };
  },
  methods: {},
};
</script>