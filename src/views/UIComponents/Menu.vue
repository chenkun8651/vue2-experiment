<template>
  <!-- 导航菜单 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 导航菜单">
      <div class="radio-box">
        <a-radio-group v-model="AntDesignVue.menuMode">
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
          <a-radio-button :value="'vertical-right'">
            vertical-right
          </a-radio-button>
          <a-radio-button :value="'inline'">inline</a-radio-button>
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.menuTheme">
          <a-radio-button :value="'light'">亮色模式</a-radio-button>
          <a-radio-button :value="'dark'">深色模式</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.menuMultiple">
          <a-radio-button :value="false">单选</a-radio-button>
          <a-radio-button :value="true">多选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.menuSelectable">
          <a-radio-button :value="false">没有选中效果</a-radio-button>
          <a-radio-button :value="true">有选中效果</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-menu
          style="width: 400px"
          :mode="AntDesignVue.menuMode"
          :theme="AntDesignVue.menuTheme"
          :multiple="AntDesignVue.menuMultiple"
          :selectable="AntDesignVue.menuSelectable"
        >
          <a-menu-item key="1">
            <router-link to="/UIComponents/menu">导航菜单</router-link>
          </a-menu-item>
          <a-menu-item key="2" disabled>
            <router-link to="/UIComponents/pageHeader">页头</router-link>
          </a-menu-item>
          <a-sub-menu key="3">
            <span slot="title">
              <router-link to="/UIComponents/pagination">分页</router-link>
            </span>
            <a-menu-item key="3-1">AntDesignVue 分页</a-menu-item>
            <a-menu-item key="3-2">ElementUI 分页</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="4">
            <span slot="title">
              <router-link to="/UIComponents/list">列表</router-link>
            </span>
            <a-menu-item key="4-1">AntDesignVue 列表</a-menu-item>
            <a-menu-item key="4-2">ElementUI 列表</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 导航菜单">
      <div class="radio-box">
        <a-radio-group v-model="ElementUI.menuMode">
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.menuUniqueOpened">
          <a-radio-button :value="true">开启只能打开一个子菜单</a-radio-button>
          <a-radio-button :value="false">关闭只能打开一个子菜单</a-radio-button>
        </a-radio-group>
        <div class="string-set">
          <span style="margin-right: 5px">设置菜单背景色</span>
          <a-input
            style="width: 100px"
            v-model="ElementUI.menuBackgroundColor"
          />
        </div>
        <div class="string-set">
          <span style="margin-right: 5px">设置菜单文字颜色</span>
          <a-input style="width: 100px" v-model="ElementUI.menuTextColor" />
        </div>
      </div>
      <div>
        <el-menu
          style="width: 400px"
          :mode="ElementUI.menuMode"
          :unique-opened="ElementUI.menuUniqueOpened"
          :background-color="ElementUI.menuBackgroundColor"
          :text-color="ElementUI.menuTextColor"
        >
          <el-menu-item index="1">
            <router-link to="/UIComponents/menu">导航菜单</router-link>
          </el-menu-item>
          <el-menu-item index="2" disabled>
            <router-link to="/UIComponents/pageHeader">页头</router-link>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <router-link to="/UIComponents/pagination">分页</router-link>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">AntDesignVue 分页</el-menu-item>
              <el-menu-item index="3-2">ElementUI 分页</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <router-link to="/UIComponents/list">列表</router-link>
            </template>
            <el-menu-item index="4-1">AntDesignVue 列表</el-menu-item>
            <el-menu-item index="4-2">ElementUI 列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 导航菜单">
      <div class="radio-box">
        <a-radio-group v-model="AtUI.menuMode">
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
          <a-radio-button :value="'inline'">inline</a-radio-button>
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.menuTheme">
          <a-radio-button :value="'light'">light</a-radio-button>
          <a-radio-button :value="'dark'">dark</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AtUI.menuInlineCollapsed">
          <a-radio-button :value="true">开启只能打开一个子菜单</a-radio-button>
          <a-radio-button :value="false">关闭只能打开一个子菜单</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-menu
          style="width: 400px"
          :mode="AtUI.menuMode"
          :theme="AtUI.menuTheme"
          :inline-collapsed="AtUI.menuInlineCollapsed"
        >
          <at-menu-item name="1">
            <router-link to="/UIComponents/menu">导航菜单</router-link>
          </at-menu-item>
          <at-menu-item name="2" disabled>
            <router-link to="/UIComponents/pageHeader">页头</router-link>
          </at-menu-item>
          <at-submenu name="3">
            <template slot="title">
              <router-link to="/UIComponents/pagination">分页</router-link>
            </template>
            <at-menu-item name="3-1">AntDesignVue 分页</at-menu-item>
            <at-menu-item name="3-2">ElementUI 分页</at-menu-item>
          </at-submenu>
          <at-submenu name="4">
            <template slot="title">
              <router-link to="/UIComponents/list">列表</router-link>
            </template>
            <at-menu-item name="4-1">AntDesignVue 列表</at-menu-item>
            <at-menu-item name="4-2">ElementUI 列表</at-menu-item>
          </at-submenu>
        </at-menu>
      </div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 导航菜单">
      <div class="radio-box">
        <a-radio-group v-model="ViewUI.menuMode">
          <a-radio-button :value="'vertical'">vertical</a-radio-button>
          <a-radio-button :value="'horizontal'">horizontal</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.menuTheme">
          <a-radio-button :value="'light'">light</a-radio-button>
          <a-radio-button :value="'dark'">dark</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.menuAccordion">
          <a-radio-button :value="true">开启只能打开一个子菜单</a-radio-button>
          <a-radio-button :value="false">关闭只能打开一个子菜单</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Menu
          style="width: 400px"
          :mode="ViewUI.menuMode"
          :theme="ViewUI.menuTheme"
          :accordion="ViewUI.menuAccordion"
        >
          <MenuItem name="1">
            <router-link to="/UIComponents/menu">导航菜单</router-link>
          </MenuItem>
          <MenuItem name="2" disabled>
            <router-link to="/UIComponents/pageHeader">页头</router-link>
          </MenuItem>
          <Submenu name="3">
            <template slot="title">
              <router-link to="/UIComponents/pagination">分页</router-link>
            </template>
            <MenuGroup>
              <MenuItem name="3-1">AntDesignVue 分页</MenuItem>
              <MenuItem name="3-2">ElementUI 分页</MenuItem>
            </MenuGroup>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <router-link to="/UIComponents/list">列表</router-link>
            </template>
            <MenuGroup>
              <MenuItem name="4-1">AntDesignVue 列表</MenuItem>
              <MenuItem name="4-2">ElementUI 列表</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </div>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AntDesignVue: {
        menuMode: "vertical",
        menuTheme: "light",
        menuMultiple: false,
        menuSelectable: true,
      },
      ElementUI: {
        menuMode: "vertical",
        menuUniqueOpened: false,
        menuBackgroundColor: "#ffffff",
        menuTextColor: "#303133",
      },
      AtUI: {
        menuMode: "vertical",
        menuTheme: "light",
        menuInlineCollapsed: false,
      },
      ViewUI: {
        menuMode: "vertical",
        menuTheme: "light",
        menuAccordion: false,
      },
    };
  },
  methods: {},
};
</script>