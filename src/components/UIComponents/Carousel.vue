<template>
  <!-- 走马灯组件 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 走马灯">
      <div class="radio-box">
        <a-radio-group v-model="carouselAutoplay">
          <a-radio-button :value="true">开启自动播放</a-radio-button>
          <a-radio-button :value="false">关闭自动播放</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselArrowst">
          <a-radio-button :value="true">显示左右按钮</a-radio-button>
          <a-radio-button :value="false">隐藏左右按钮</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselDots">
          <a-radio-button :value="true">显示指示点</a-radio-button>
          <a-radio-button :value="false">隐藏指示点</a-radio-button>
        </a-radio-group>
        <a-radio-group v-show="carouselDots" v-model="carouselDotPosition">
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'left'">left</a-radio-button>
          <a-radio-button :value="'right'">right</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="carouselEffect">
          <a-radio-button :value="'scrollx'">scrollx</a-radio-button>
          <a-radio-button :value="'fade'">fade</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-carousel
          :autoplay="carouselAutoplay"
          :arrows="carouselArrowst"
          :dots="carouselDots"
          :dotPosition="carouselDotPosition"
          :effect="carouselEffect"
        >
          <div slot="prevArrow" class="custom-slick-arrow left-icon">
            <a-icon type="left-circle" />
          </div>
          <div slot="nextArrow" class="custom-slick-arrow right-icon">
            <a-icon type="right-circle" />
          </div>
          <div v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </div>
        </a-carousel>
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
        <el-carousel
          :initial-index="0"
          :direction="carouselDirectionE"
          :type="carouselTypeE"
          :autoplay="carouselAutoplayE"
          :interval="carouselIntervalE"
          :loop="carouselLoopE"
          :trigger="carouselTriggerE"
          :indicator-position="carouselIndicatorPositionE"
          :arrow="carouselArrowE"
        >
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
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
      carouselAutoplay: false,
      carouselArrowst: true,
      carouselDots: true,
      carouselDotPosition: "bottom",
      carouselEffect: "scrollx",
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

<style scoped>
/* AntDesignVue */
.ant-carousel >>> .slick-slide {
  height: 250px;
  line-height: 250px;
  text-align: center;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  background: rgba(31, 45, 61, 0.11);
  color: #fff;
  opacity: 0.3;
}
.ant-carousel >>> .left-icon {
  left: 10px;
  z-index: 1;
}
.ant-carousel >>> .right-icon {
  right: 10px;
  z-index: 1;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
/* ElementUI */
.el-carousel__item {
  height: 300px;
  line-height: 300px;
  background: #364d79;
  overflow: hidden;
}
.el-carousel__item h3 {
  font-size: 25px;
  background: rgba(31, 45, 61, 0.11);
  color: #fff;
  text-align: center;
}
/* ViewUI */
.carousel-item {
  height: 300px;
  line-height: 300px;
  background: #364d79;
  overflow: hidden;
}
.carousel-item h3 {
  font-size: 25px;
  background: rgba(31, 45, 61, 0.11);
  color: #fff;
  text-align: center;
}
</style>