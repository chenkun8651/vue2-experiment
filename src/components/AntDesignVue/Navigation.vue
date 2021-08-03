<template>
  <!-- 导航组件 -->
  <div>
    <!-- 面包屑 -->
    <h1 class="title-xy">面包屑</h1>
    <div style="padding: 30px">
      <!-- 正常面包屑 -->
      <div class="title-2-xy">
        <h3>正常面包屑</h3>
        <div>
          <a-breadcrumb>
            <a-breadcrumb-item>
              <router-link to="/">主页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/antDesignVue/basics">基础组件</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/antDesignVue/basics">按钮</router-link>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>
      <!-- 自定义分隔符 > 面包屑 -->
      <div class="title-2-xy">
        <h3>自定义分隔符 => 面包屑</h3>
        <div>
          <a-breadcrumb :separator="'=>'">
            <a-breadcrumb-item>
              <router-link to="/">主页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/antDesignVue/basics">基础组件</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/antDesignVue/basics">按钮</router-link>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>
      <!-- 图标面包屑 -->
      <div class="title-2-xy">
        <h3>图标面包屑</h3>
        <div>
          <a-breadcrumb>
            <a-breadcrumb-item>
              <a-icon type="home" />
              <router-link to="/">主页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <a-icon type="setting" />
              <router-link to="/antDesignVue/basics">基础组件</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <a-icon type="setting" />
              <router-link to="/antDesignVue/basics">按钮</router-link>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>
      <!-- 下拉菜单面包屑 -->
      <div class="title-2-xy">
        <h3>下拉菜单面包屑</h3>
        <div>
          <a-breadcrumb>
            <a-breadcrumb-item>
              <router-link to="/">主页</router-link>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              <router-link to="/antDesignVue/basics">基础组件</router-link>
              <a-menu slot="overlay">
                <a-menu-item>
                  <router-link to="/antDesignVue/basics">基础组件</router-link>
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
              <router-link to="/antDesignVue/basics">按钮</router-link>
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
      </div>
    </div>
    <!-- 下拉菜单 -->
    <h1 class="title-xy">下拉菜单</h1>
    <div style="padding: 30px">
      <!-- 不同触发方式 -->
      <div class="title-2-xy">
        <h3>不同触发方式</h3>
        <div>
          <a-dropdown class="item-i-xy" :trigger="['hover']">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              Hover触发<a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/antDesignVue/basics">基础组件</router-link>
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
          </a-dropdown>
          <a-dropdown class="item-i-xy" :trigger="['click']">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              Click触发<a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/antDesignVue/basics">基础组件</router-link>
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
          </a-dropdown>
          <a-dropdown class="item-i-xy" :trigger="['contextmenu']">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              点击鼠标右键触发<a-icon type="down" />
            </a>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/antDesignVue/basics">基础组件</router-link>
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
          </a-dropdown>
        </div>
      </div>
      <!-- 下拉框的下拉菜单 -->
      <div class="title-2-xy">
        <h3>下拉框的下拉菜单</h3>
        <div>
          <a-dropdown-button class="item-i-xy">
            普通下拉框
            <a-menu slot="overlay">
              <a-menu-item key="1">
                <router-link to="/antDesignVue/basics">基础组件</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/antDesignVue/navigation">
                  导航组件
                </router-link>
              </a-menu-item>
              <a-menu-item key="3">
                <router-link to="/antDesignVue/form">表单组件</router-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown-button>
          <a-dropdown-button class="item-i-xy" :disabled="true">
            禁用下拉框
            <a-menu slot="overlay">
              <a-menu-item key="1">
                <router-link to="/antDesignVue/basics">基础组件</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/antDesignVue/navigation">
                  导航组件
                </router-link>
              </a-menu-item>
              <a-menu-item key="3" :disabled="true">
                <router-link to="/antDesignVue/form">表单组件</router-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown-button>
        </div>
      </div>
    </div>
    <!-- 导航菜单 -->
    <h1 class="title-xy">导航菜单</h1>
    <div style="padding: 30px">
      <!-- 顶部导航栏 -->
      <div class="title-2-xy">
        <h3>顶部导航栏</h3>
        <div>
          <a-menu mode="horizontal">
            <a-menu-item key="mail">
              <router-link to="/antDesignVue/basics">基础组件</router-link>
            </a-menu-item>
            <a-menu-item key="app" :disabled="true">
              <router-link to="/antDesignVue/navigation">导航组件</router-link>
            </a-menu-item>
            <a-sub-menu>
              <span slot="title" class="submenu-title-wrapper">
                <router-link to="/antDesignVue/form">表单组件</router-link>
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
                <router-link to="/antDesignVue/other">其他组件</router-link>
              </div>
            </a-menu-item>
          </a-menu>
        </div>
      </div>
      <!-- 内联导航栏 -->
      <div class="title-2-xy">
        <h3>内联导航栏</h3>
        <div>
          <a-switch :default-checked="false" @change="ChangeMode" />改变模式
          <span class="ant-divider" style="margin: 0 1em" />
          <a-switch :default-checked="false" @change="ChangeTheme" />改变主题色
          <a-menu
            style="width: 256px"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            :mode="mode"
            :theme="theme"
          >
            <a-menu-item key="1">
              <router-link to="/antDesignVue/basics">基础组件</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/antDesignVue/navigation">导航组件</router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <span slot="title">
                <router-link to="/antDesignVue/form">表单组件</router-link>
              </span>
              <a-menu-item key="3">订单管理1</a-menu-item>
              <a-menu-item key="4">订单管理2</a-menu-item>
              <a-sub-menu key="sub1-2" title="子菜单">
                <a-menu-item key="5">订单管理3</a-menu-item>
                <a-menu-item key="6">订单管理4</a-menu-item>
              </a-sub-menu>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title">
                <router-link to="/antDesignVue/other">其他组件</router-link>
              </span>
              <a-menu-item key="7">合约管理1</a-menu-item>
              <a-menu-item key="8">合约管理2</a-menu-item>
              <a-menu-item key="9">合约管理3</a-menu-item>
              <a-menu-item key="10">合约管理4</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </div>
    </div>
    <!-- 页头 -->
    <h1 class="title-xy">页头</h1>
    <div style="padding: 30px">
      <h3>标准页头</h3>
      <div>
        <a-page-header
          style="border: 1px solid rgb(235, 237, 240)"
          title="导航组件"
          sub-title="这是导航组件的页头，箭头返回上一级"
          @back="() => $router.go(-1)"
        />
      </div>
    </div>
    <!-- 分页 -->
    <h1 class="title-xy">分页</h1>
    <div style="padding: 30px">
      <!-- 标准分页 -->
      <div class="title-2-xy">
        <h3>标准分页</h3>
        <div>
          <a-pagination
            :default-current="3"
            :default-page-size="20"
            :page-size-options="['10', '20', '30', '40', '50']"
            :total="500"
            :show-total="(total) => `当前共${total}项`"
            :show-size-changer="true"
            :show-quick-jumper="true"
          />
        </div>
      </div>
      <!-- 迷你分页 -->
      <div class="title-2-xy">
        <h3>迷你分页</h3>
        <div>
          <a-pagination
            size="small"
            :default-current="3"
            :default-page-size="20"
            :page-size-options="['10', '20', '30', '40', '50']"
            :total="500"
            :show-total="(total) => `当前共${total}项`"
            :show-size-changer="true"
            :show-quick-jumper="true"
          />
        </div>
      </div>
      <!-- 简洁分页 -->
      <div class="title-2-xy">
        <h3>简洁分页</h3>
        <div>
          <a-pagination
            :simple="true"
            :default-current="3"
            :default-page-size="20"
            :total="500"
          />
        </div>
      </div>
    </div>
    <!-- 步骤条 -->
    <h1 class="title-xy">步骤条</h1>
    <div style="padding: 30px">
      <!-- 标准步骤条 -->
      <div class="title-2-xy">
        <h3>标准步骤条</h3>
        <div>
          <a-steps :current="0">
            <a-step>
              <template slot="title">注册</template>
              <span slot="description">第一步：完成注册</span>
            </a-step>
            <a-step
              title="登录"
              sub-title="登录后功能丰富"
              description="第二步：完成登录"
            />
            <a-step title="验证" description="第三步：验证账号信息" />
          </a-steps>
        </div>
      </div>
      <!-- 迷你步骤条 -->
      <div class="title-2-xy">
        <h3>迷你步骤条</h3>
        <div>
          <a-steps :current="0" size="small">
            <a-step>
              <template slot="title">注册</template>
              <span slot="description">第一步：完成注册</span>
            </a-step>
            <a-step
              title="登录"
              sub-title="登录后功能丰富"
              description="第二步：完成登录"
            />
            <a-step title="验证" description="第三步：验证账号信息" />
          </a-steps>
        </div>
      </div>
      <!-- 图标步骤条 -->
      <div class="title-2-xy">
        <h3>图标步骤条</h3>
        <div>
          <a-steps>
            <a-step status="finish">
              <a-icon slot="icon" type="solution" />
              <template slot="title">注册</template>
              <span slot="description">第一步：完成注册</span>
            </a-step>
            <a-step status="error" title="登录" description="第二步：完成登录">
              <a-icon slot="icon" type="user" />
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
      <!-- 竖直方向步骤条 -->
      <div class="title-2-xy">
        <h3>竖直方向步骤条</h3>
        <div>
          <a-steps direction="vertical">
            <a-step status="finish" title="注册" description="第一步：完成注册">
            </a-step>
            <a-step status="error" title="登录" description="第二步：完成登录">
            </a-step>
            <a-step
              status="wait"
              title="验证"
              description="第三步：验证账号信息"
            >
            </a-step>
          </a-steps>
        </div>
      </div>
      <!-- 自定义点状步骤条 -->
      <div class="title-2-xy">
        <h3>自定义点状步骤条</h3>
        <div>
          <a-steps :current="1">
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