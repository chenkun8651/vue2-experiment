<template>
  <!-- 导航组件 -->
  <div>
    <!-- 面包屑 -->
    <h1 class="title-xy">面包屑</h1>
    <div style="padding: 30px">
      <!-- 正常面包屑 -->
      <div class="title-2-xy">
        <h3>正常面包屑</h3>
        <a-breadcrumb>
          <a-breadcrumb-item>主页</a-breadcrumb-item>
          <a-breadcrumb-item>会员管理</a-breadcrumb-item>
          <a-breadcrumb-item>会员列表</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <!-- 自定义分隔符 > 面包屑 -->
      <div class="title-2-xy">
        <h3>自定义分隔符 > 面包屑</h3>
        <a-breadcrumb :separator="'>'">
          <a-breadcrumb-item>主页</a-breadcrumb-item>
          <a-breadcrumb-item>会员管理</a-breadcrumb-item>
          <a-breadcrumb-item>会员列表</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <!-- 图标面包屑 -->
      <div class="title-2-xy">
        <h3>图标面包屑</h3>
        <a-breadcrumb>
          <a-breadcrumb-item><a-icon type="home" />主页</a-breadcrumb-item>
          <a-breadcrumb-item>
            <a-icon type="setting" />会员管理
          </a-breadcrumb-item>
          <a-breadcrumb-item><a-icon type="user" />会员列表</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <!-- 下拉菜单面包屑 -->
      <div class="title-2-xy">
        <h3>下拉菜单面包屑</h3>
        <a-breadcrumb>
          <a-breadcrumb-item>主页</a-breadcrumb-item>
          <a-breadcrumb-item>
            <a href="">会员管理</a>
            <a-menu slot="overlay">
              <a-menu-item>
                <a href=""> 会员管理 </a>
              </a-menu-item>
              <a-menu-item>
                <a href=""> 合约管理 </a>
              </a-menu-item>
              <a-menu-item>
                <a href=""> 订单管理 </a>
              </a-menu-item>
            </a-menu>
          </a-breadcrumb-item>
          <a-breadcrumb-item>会员列表</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
    </div>

    <!-- 下拉菜单 -->
    <h1 class="title-xy">下拉菜单</h1>
    <div style="padding: 30px">
      <!-- 不同触发方式下拉菜单 -->
      <div class="title-2-xy">
        <h3>不同触发方式的下拉菜单</h3>
        <a-dropdown class="item-i-xy" :trigger="['hover']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            Hover触发<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a>会员管理</a>
            </a-menu-item>
            <a-menu-item>
              <a>合约管理</a>
            </a-menu-item>
            <a-menu-item>
              <a>订单管理</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a-dropdown class="item-i-xy" :trigger="['click']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            Click触发<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a>会员管理</a>
            </a-menu-item>
            <a-menu-item>
              <a>合约管理</a>
            </a-menu-item>
            <a-menu-item>
              <a>订单管理</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <a-dropdown class="item-i-xy" :trigger="['contextmenu']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            点击鼠标右键触发<a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a>会员管理</a>
            </a-menu-item>
            <a-menu-item>
              <a>合约管理</a>
            </a-menu-item>
            <a-menu-item>
              <a>订单管理</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <!-- 带下拉框的下拉菜单 -->
      <div class="title-2-xy">
        <h3>带下拉框的下拉菜单</h3>
        <a-dropdown-button class="item-i-xy">
          普通下拉框
          <a-menu slot="overlay">
            <a-menu-item key="1"><a-icon type="user" />会员管理</a-menu-item>
            <a-menu-item key="2"><a-icon type="user" />合约管理</a-menu-item>
            <a-menu-item key="3"><a-icon type="user" />订单管理</a-menu-item>
          </a-menu>
        </a-dropdown-button>
        <a-dropdown-button class="item-i-xy" :disabled="true">
          禁用下拉框
          <a-menu slot="overlay">
            <a-menu-item key="1"><a-icon type="user" />会员管理</a-menu-item>
            <a-menu-item key="2"><a-icon type="user" />合约管理</a-menu-item>
            <a-menu-item key="3" :disabled="true">
              <a-icon type="user" />订单管理
            </a-menu-item>
          </a-menu>
        </a-dropdown-button>
      </div>
    </div>

    <!-- 导航菜单 -->
    <h1 class="title-xy">导航菜单</h1>
    <div style="padding: 30px">
      <!-- 顶部导航栏 -->
      <div class="title-2-xy">
        <h3>顶部导航栏</h3>
        <a-menu mode="horizontal">
          <a-menu-item key="mail"><a-icon type="mail" />会员管理</a-menu-item>
          <a-menu-item key="app" :disabled="true">
            <a-icon type="appstore" />合约管理
          </a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">
              <a-icon type="setting" />订单管理
            </span>
            <a-menu-item-group title="子菜单1">
              <a-menu-item key="setting:1">订单管理1</a-menu-item>
              <a-menu-item key="setting:2">订单管理2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="子菜单2">
              <a-menu-item key="setting:3">订单管理3</a-menu-item>
              <a-menu-item key="setting:4">订单管理4</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-menu-item key="alipay">
            <div>
              <a-icon type="copyright" />
              <a href="https://antdv.com" target="_blank">资金统计</a>
            </div>
          </a-menu-item>
        </a-menu>
      </div>
      <!-- 内联导航栏 -->
      <div class="title-2-xy">
        <h3>内联导航栏</h3>
        <a-switch :default-checked="false" @change="ChangeMode" />改变模式
        <span className="ant-divider" style="margin: 0 1em" />
        <a-switch :default-checked="false" @change="ChangeTheme" />改变主题色
        <a-menu
          style="width: 256px"
          :default-selected-keys="['1']"
          :default-open-keys="['sub1']"
          :mode="mode"
          :theme="theme"
        >
          <a-menu-item key="1">
            <a-icon type="mail" />
            会员管理
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="calendar" />
            合约管理
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="appstore" /><span>订单管理</span>
            </span>
            <a-menu-item key="3">订单管理1</a-menu-item>
            <a-menu-item key="4">订单管理2</a-menu-item>
            <a-sub-menu key="sub1-2" title="Submenu">
              <a-menu-item key="5">订单管理3</a-menu-item>
              <a-menu-item key="6">订单管理4</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="setting" /><span>合约管理</span>
            </span>
            <a-menu-item key="7">合约管理1</a-menu-item>
            <a-menu-item key="8">合约管理2</a-menu-item>
            <a-menu-item key="9">合约管理3</a-menu-item>
            <a-menu-item key="10">合约管理4</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>

    <!-- 页头 -->
    <h1 class="title-xy">页头</h1>
    <div style="padding: 30px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "inline",
      theme: "light",
    };
  },
  methods: {
    ChangeMode(checked) {
      this.mode = checked ? "vertical" : "inline";
    },
    ChangeTheme(checked) {
      this.theme = checked ? "dark" : "light";
    },
  },
};
</script>

<style scoped>
.title-xy {
  margin: 10px 0px;
  text-align: center;
}
.title-2-xy {
  margin: 5px 0px;
}
.item-i-xy {
  margin: 5px 20px;
}
</style>