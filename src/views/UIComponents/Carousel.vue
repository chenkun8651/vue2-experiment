<template>
  <div class="flex" ref="box">
    <!-- 走马灯 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 走马灯">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启自动播放</span>
            <a-switch v-model="AntDesignVue.autoplay" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示左右按钮</span>
            <a-switch v-model="AntDesignVue.arrows" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示指示点</span>
            <a-switch v-model="AntDesignVue.dots" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置指示点位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.dotPosition"
            >
              <el-option :value="'top'">top</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'left'">left</el-option>
              <el-option :value="'right'">right</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置翻动页面效果</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.effect">
              <el-option :value="'scrollx'">scrollx</el-option>
              <el-option :value="'fade'">fade</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-carousel
            :autoplay="AntDesignVue.autoplay"
            :arrows="AntDesignVue.arrows"
            :dots="AntDesignVue.dots"
            :dotPosition="AntDesignVue.dotPosition"
            :effect="AntDesignVue.effect"
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
      <a-card id="2" class="my-5" title="ElementUI 走马灯">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启自动播放</span>
            <a-switch v-model="ElementUI.autoplay" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启循环</span>
            <a-switch v-model="ElementUI.loop" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置走马灯方向</span>
            <el-select size="small" class="w-36" v-model="ElementUI.direction">
              <el-option :value="'horizontal'">横向</el-option>
              <el-option :value="'vertical'">竖向</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置走马灯类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="null">普通走马灯</el-option>
              <el-option :value="'card'">卡片走马灯</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置指示点显示位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="ElementUI.indicatorPosition"
            >
              <el-option :value="null">inside</el-option>
              <el-option :value="'outside'">outside</el-option>
              <el-option :value="'none'">none</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">显示指示点的触发方式</span>
            <el-select size="small" class="w-36" v-model="ElementUI.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'click'">click</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">显示切换箭头的触发方式</span>
            <el-select size="small" class="w-36" v-model="ElementUI.arrow">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'always'">always</el-option>
              <el-option :value="'never'">never</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动播放时间间隔（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.interval" />
          </div>
        </div>
        <div>
          <el-carousel
            :initial-index="0"
            :autoplay="ElementUI.autoplay"
            :loop="ElementUI.loop"
            :direction="ElementUI.direction"
            :type="ElementUI.type"
            :indicator-position="ElementUI.indicatorPosition"
            :trigger="ElementUI.trigger"
            :arrow="ElementUI.arrow"
            :interval="ElementUI.interval"
          >
            <el-carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 走马灯">
        <div class="text-red-500">AtUI框架没有走马灯</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 走马灯">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启自动播放</span>
            <a-switch v-model="ViewUI.autoplay" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启循环</span>
            <a-switch v-model="ViewUI.loop" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示圆点指示点</span>
            <a-switch v-model="ViewUI.radiusDot" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置指示点显示位置</span>
            <el-select size="small" class="w-36" v-model="ViewUI.dots">
              <el-option :value="'inside'">inside</el-option>
              <el-option :value="'outside'">outside</el-option>
              <el-option :value="'none'">none</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">显示指示点的触发方式</span>
            <el-select size="small" class="w-36" v-model="ViewUI.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'click'">click</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">显示切换箭头的触发方式</span>
            <el-select size="small" class="w-36" v-model="ViewUI.arrow">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'always'">always</el-option>
              <el-option :value="'never'">never</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置自动播放时间间隔（毫秒）</span>
            <a-input-number class="w-24" v-model="ViewUI.autoplaySpeed" />
          </div>
        </div>
        <div>
          <Carousel
            :value="0"
            :autoplay="ViewUI.autoplay"
            :loop="ViewUI.loop"
            :radius-dot="ViewUI.radiusDot"
            :dots="ViewUI.dots"
            :trigger="ViewUI.trigger"
            :arrow="ViewUI.arrow"
            :autoplay-speed="ViewUI.autoplaySpeed"
          >
            <CarouselItem class="carousel-item" v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </CarouselItem>
          </Carousel>
        </div>
      </a-card>
    </div>
    <!-- 查询锚点 -->
    <BasicAnchor
      :parentList="this.AnchorInfo.carouselAnchor"
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
        autoplay: false,
        arrows: false,
        dots: false,
        dotPosition: "bottom",
        effect: "scrollx",
      },
      ElementUI: {
        autoplay: false,
        loop: false,
        direction: "horizontal",
        type: null,
        indicatorPosition: null,
        trigger: "hover",
        arrow: "hover",
        interval: 3000,
      },
      ViewUI: {
        autoplay: false,
        loop: false,
        radiusDot: false,
        dots: "inside",
        trigger: "hover",
        arrow: "hover",
        autoplaySpeed: 3000,
      },
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