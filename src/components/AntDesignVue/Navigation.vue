<template>
  <!-- 导航组件 -->
  <div>
    <!-- 固钉 -->
    <h1 class="title-xy">固钉</h1>
    <div class="content">
      <!-- 正常固钉 -->
      <div class="content-item">
        <h3 class="title2-xy">正常固钉</h3>
        <div class="content2">
          <div class="radio-box">
            <div class="number-set">
              <span style="margin-right: 5px">顶部偏移量</span>
              <a-input-number style="width: 100px" v-model="affixTop" />
            </div>
            <div class="number-set">
              <span style="margin-right: 5px">底部偏移量</span>
              <a-input-number style="width: 100px" v-model="affixBottom" />
            </div>
          </div>
          <div>
            <a-affix style="margin-bottom: 10px" :offset-top="affixTop">
              <a-button type="primary" @click="affixTop += 10">
                添加固钉到窗口顶部触发的偏移量
              </a-button>
            </a-affix>
            <a-affix :offset-bottom="affixBottom">
              <a-button type="primary" @click="affixBottom += 10">
                添加固钉到窗口底部触发的偏移量
              </a-button>
            </a-affix>
          </div>
        </div>
      </div>
    </div>
    <!-- 面包屑 -->
    <h1 class="title-xy">面包屑</h1>
    <div class="content">
      <!-- 正常面包屑 -->
      <div class="content-item">
        <h3 class="title2-xy">正常面包屑</h3>
        <div class="content2">
          <div class="radio-box">
            <div class="string-set">
              <span style="margin-right: 5px">设置面包屑分隔符</span>
              <a-input style="width: 100px" v-model="breadcrumbSeparator" />
            </div>
          </div>
          <div>
            <a-breadcrumb :separator="breadcrumbSeparator">
              <a-breadcrumb-item>
                <router-link to="/"><a-icon type="home" /></router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <a-icon type="inbox" />
                <router-link to="/antDesignVue/basics">基础组件</router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <span>按钮</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
        </div>
      </div>
      <!-- 下拉菜单面包屑 -->
      <div class="content-item">
        <h3 class="title2-xy">下拉菜单面包屑</h3>
        <div class="content2">
          <div class="string-set">
            <span style="margin-right: 5px">面包屑分隔符</span>
            <a-input style="width: 100px" v-model="breadcrumbSeparator" />
          </div>
          <div>
            <a-breadcrumb :separator="breadcrumbSeparator">
              <a-breadcrumb-item>
                <router-link to="/">主页</router-link>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <router-link to="/antDesignVue/basics">基础组件</router-link>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <router-link to="/antDesignVue/basics">
                      基础组件
                    </router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/antDesignVue/navigation">
                      导航组件
                    </router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <router-link to="/antDesignVue/form">表单组件</router-link>
                  </a-menu-item>
                </a-menu>
              </a-breadcrumb-item>
              <a-breadcrumb-item>
                <span>按钮</span>
              </a-breadcrumb-item>
            </a-breadcrumb>
          </div>
        </div>
      </div>
    </div>
    <!-- 下拉菜单 -->
    <h1 class="title-xy">下拉菜单</h1>
    <div class="content">
      <!-- 标准下拉菜单 -->
      <div class="content-item">
        <h3 class="title2-xy">标准下拉菜单</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="dropdownTrigger">
              <a-radio-button :value="['hover']">悬停触发菜单</a-radio-button>
              <a-radio-button :value="['click']">点击触发菜单</a-radio-button>
              <a-radio-button :value="['contextmenu']">
                右键触发菜单
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dropdownPlacement">
              <a-radio-button value="bottomLeft">左下弹出</a-radio-button>
              <a-radio-button value="bottomCenter">下方弹出</a-radio-button>
              <a-radio-button value="bottomRight">右下弹出</a-radio-button>
              <a-radio-button value="topLeft">左上弹出</a-radio-button>
              <a-radio-button value="topCenter">上方弹出</a-radio-button>
              <a-radio-button value="topRight">右上弹出</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dropdownDisabled">
              <a-radio-button :value="false">启用</a-radio-button>
              <a-radio-button :value="true">禁用</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-dropdown
              :trigger="dropdownTrigger"
              :placement="dropdownPlacement"
              :disabled="dropdownDisabled"
            >
              <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                触发下拉菜单的长链接<a-icon type="down" />
              </a>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/antDesignVue/basics">基础组件</router-link>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <router-link to="/antDesignVue/navigation">
                    导航组件
                  </router-link>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <router-link to="/antDesignVue/form">表单组件</router-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
        </div>
      </div>
      <!-- 按钮下拉菜单 -->
      <div class="content-item">
        <h3 class="title2-xy">按钮下拉菜单</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="dropdownTrigger">
              <a-radio-button :value="['hover']">悬停触发菜单</a-radio-button>
              <a-radio-button :value="['click']">点击触发菜单</a-radio-button>
              <a-radio-button :value="['contextmenu']">
                右键触发菜单
              </a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dropdownPlacement">
              <a-radio-button value="bottomLeft">左下弹出</a-radio-button>
              <a-radio-button value="bottomCenter">下方弹出</a-radio-button>
              <a-radio-button value="bottomRight">右下弹出</a-radio-button>
              <a-radio-button value="topLeft">左上弹出</a-radio-button>
              <a-radio-button value="topCenter">上方弹出</a-radio-button>
              <a-radio-button value="topRight">右上弹出</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dropdownDisabled">
              <a-radio-button :value="false">启用</a-radio-button>
              <a-radio-button :value="true">禁用</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dropdownSize">
              <a-radio-button value="large">大按钮</a-radio-button>
              <a-radio-button value="default">默认大小</a-radio-button>
              <a-radio-button value="small">小按钮</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="dropdownType">
              <a-radio-button value="default">默认按钮</a-radio-button>
              <a-radio-button value="primary">主要按钮</a-radio-button>
              <a-radio-button value="dashed">虚线按钮</a-radio-button>
              <a-radio-button value="danger">危险按钮</a-radio-button>
              <a-radio-button value="link">链接按钮</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-dropdown-button
              :trigger="dropdownTrigger"
              :placement="dropdownPlacement"
              :disabled="dropdownDisabled"
              :size="dropdownSize"
              :type="dropdownType"
            >
              按钮下拉菜单
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/antDesignVue/basics">基础组件</router-link>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <router-link to="/antDesignVue/navigation">
                    导航组件
                  </router-link>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item>
                  <router-link to="/antDesignVue/form">表单组件</router-link>
                </a-menu-item>
              </a-menu>
            </a-dropdown-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 导航菜单 -->
    <h1 class="title-xy">导航菜单</h1>
    <div class="content">
      <!-- 标准导航菜单 -->
      <div class="content-item">
        <h3 class="title2-xy">标准导航菜单</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="menuMode">
              <a-radio-button value="vertical">左垂直</a-radio-button>
              <a-radio-button value="vertical-right">右垂直</a-radio-button>
              <a-radio-button value="horizontal">水平</a-radio-button>
              <a-radio-button value="inline">内联</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="menuTheme">
              <a-radio-button value="light">亮色模式</a-radio-button>
              <a-radio-button value="dark">深色模式</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="menuMultiple">
              <a-radio-button :value="false">单选</a-radio-button>
              <a-radio-button :value="true">多选</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="menuSelectable">
              <a-radio-button :value="false">没有选中效果</a-radio-button>
              <a-radio-button :value="true">有选中效果</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-menu
              style="width: 300px"
              :default-selected-keys="['1']"
              :default-open-keys="['3']"
              :mode="menuMode"
              :theme="menuTheme"
              :multiple="menuMultiple"
              :selectable="menuSelectable"
            >
              <a-menu-item key="1">
                <router-link to="/antDesignVue/basics">基础组件</router-link>
              </a-menu-item>
              <a-menu-item key="2" disabled>
                <router-link to="/antDesignVue/navigation">
                  导航组件
                </router-link>
              </a-menu-item>
              <a-sub-menu key="3">
                <span slot="title">
                  <router-link to="/antDesignVue/form">表单组件</router-link>
                </span>
                <a-menu-item key="3-1">单选框</a-menu-item>
                <a-menu-item key="3-2">多选框</a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="4">
                <span slot="title">
                  <router-link to="/antDesignVue/other">展示组件</router-link>
                </span>
                <a-menu-item key="4-1">日历</a-menu-item>
                <a-menu-item key="4-2">卡片</a-menu-item>
                <a-menu-item key="4-3">走马灯</a-menu-item>
              </a-sub-menu>
            </a-menu>
          </div>
        </div>
      </div>
    </div>
    <!-- 页头 -->
    <h1 class="title-xy">页头</h1>
    <div class="content">
      <!-- 标准页头 -->
      <div class="content-item">
        <h3 class="title2-xy">标准页头</h3>
        <div class="content2">
          <a-page-header
            style="border: 1px solid rgb(235, 237, 240)"
            title="导航组件"
            sub-title="这是导航组件的页头，箭头返回上一级"
            @back="() => $router.go(-1)"
          >
          </a-page-header>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <h1 class="title-xy">分页</h1>
    <div class="content">
      <!-- 标准分页 -->
      <div class="content-item">
        <h3 class="title2-xy">标准分页</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="paginationSize" style="margin-bottom: 10px">
              <a-radio-button value="">默认</a-radio-button>
              <a-radio-button value="small">小型</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="paginationSimple" style="margin-left: 15px">
              <a-radio-button :value="false">复杂分页</a-radio-button>
              <a-radio-button :value="true">简洁分页</a-radio-button>
            </a-radio-group>
            <a-radio-group
              v-model="paginationDisabled"
              style="margin-left: 15px"
            >
              <a-radio-button :value="false">启用</a-radio-button>
              <a-radio-button :value="true">禁用</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-pagination
              :size="paginationSize"
              :simple="paginationSimple"
              :disabled="paginationDisabled"
              :default-current="3"
              :default-page-size="20"
              :page-size-options="['10', '20', '30', '40', '50']"
              :total="500"
              :show-total="(total) => `当前共${total}项`"
              :show-les-items="true"
              :show-quick-jumper="true"
              :show-size-changer="true"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 步骤条 -->
    <h1 class="title-xy">步骤条</h1>
    <div class="content">
      <!-- 标准步骤条 -->
      <div class="content-item">
        <h3 class="title2-xy">标准步骤条</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="stepDirection" style="margin-bottom: 10px">
              <a-radio-button value="horizontal">水平方向</a-radio-button>
              <a-radio-button value="vertical">竖直方向</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="stepSize" style="margin-left: 15px">
              <a-radio-button value="default">默认</a-radio-button>
              <a-radio-button value="small">小型</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="stepType" style="margin-left: 15px">
              <a-radio-button value="default">默认类型</a-radio-button>
              <a-radio-button value="navigation">导航类型</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-steps
              :current="1"
              :direction="stepDirection"
              :size="stepSize"
              :type="stepType"
            >
              <a-step status="finish">
                <a-icon slot="icon" type="solution" />
                <template slot="title">注册</template>
                <span slot="description">第一步：完成注册</span>
              </a-step>
              <a-step
                status="error"
                title="登录"
                sub-title="登录后功能丰富"
                description="第二步：完成登录"
              >
              </a-step>
              <a-step
                status="wait"
                title="验证"
                description="第三步：验证账号信息"
              >
                <a-icon slot="icon" type="check" />
              </a-step>
            </a-steps>
          </div>
        </div>
      </div>
      <!-- 点状步骤条 -->
      <div class="content-item">
        <h3 class="title2-xy">点状步骤条</h3>
        <div class="content2">
          <div>
            <a-steps :current="3">
              <a-popover
                slot="progressDot"
                slot-scope="{ index, status, prefixCls }"
              >
                <template slot="content">
                  <span>步骤：{{ index + 1 }} ，状态: {{ status }}</span>
                </template>
                <span :class="`${prefixCls}-icon-dot`" />
              </a-popover>
              <a-step title="注册" description="第一步：完成注册" />
              <a-step title="登录" description="第二步：完成登录" />
              <a-step title="验证" description="第三步：验证账号信息" />
            </a-steps>
          </div>
        </div>
      </div>
    </div>
    <!-- 标签页 -->
    <h1 class="title-xy">标签页</h1>
    <div class="content">
      <!-- 标准标签页 -->
      <div class="content-item">
        <h3 class="title2-xy">标准标签页</h3>
        <div class="content2">
          <div class="radio-box">
            <a-radio-group v-model="tabPaneMode" style="margin-bottom: 10px">
              <a-radio-button value="top">上方标签页</a-radio-button>
              <a-radio-button value="right">右侧标签页</a-radio-button>
              <a-radio-button value="left">左侧标签页</a-radio-button>
              <a-radio-button value="bottom">下方标签页</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="tabPaneSize" style="margin-left: 15px">
              <a-radio-button value="large">大型</a-radio-button>
              <a-radio-button value="default">默认</a-radio-button>
              <a-radio-button value="small">小型</a-radio-button>
            </a-radio-group>
            <a-radio-group v-model="tabPaneType" style="margin-left: 15px">
              <a-radio-button value="line">横线类型</a-radio-button>
              <a-radio-button value="card">卡片类型</a-radio-button>
              <a-radio-button value="editable-card">
                编辑卡片类型
              </a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-tabs
              default-active-key="1"
              :size="tabPaneSize"
              :type="tabPaneType"
              :tab-position="tabPaneMode"
              :tab-bar-gutter="5"
            >
              <a-tab-pane key="1" tab="基础组件">基础组件内容</a-tab-pane>
              <a-tab-pane key="2" force-render>
                <span slot="tab">
                  <a-icon type="inbox" />
                  导航组件
                </span>
                导航组件内容
              </a-tab-pane>
              <a-tab-pane key="3" tab="表单组件" force-render disabled>
                表单组件内容
              </a-tab-pane>
              <a-button slot="tabBarExtraContent">其他操作</a-button>
            </a-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 固钉
      affixTop: 300,
      affixBottom: 350,
      // 面包屑
      breadcrumbSeparator: "/",
      // 下拉菜单
      dropdownTrigger: ["hover"],
      dropdownPlacement: "bottomLeft",
      dropdownDisabled: false,
      dropdownSize: "default",
      dropdownType: "default",
      // 导航菜单
      menuMode: "inline",
      menuTheme: "light",
      menuMultiple: false,
      menuSelectable: true,
      // 分页
      paginationSize: "",
      paginationSimple: false,
      paginationDisabled: false,
      // 步骤条
      stepDirection: "horizontal",
      stepSize: "default",
      stepType: "default",
      // 标签页
      tabPaneMode: "top",
      tabPaneSize: "default",
      tabPaneType: "line",
    };
  },
  methods: {},
};
</script>