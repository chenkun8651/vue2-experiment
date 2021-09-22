<template>
  <div class="flex" ref="box">
    <!-- 导航菜单 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 导航菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启多选</span>
            <a-switch v-model="AntDesignVue.multiple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示选中效果</span>
            <a-switch v-model="AntDesignVue.selectable" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置导航菜单排列方向</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.mode">
              <el-option :value="'vertical'">vertical</el-option>
              <el-option :value="'vertical-right'">vertical-right</el-option>
              <el-option :value="'inline'">inline</el-option>
              <el-option :value="'horizontal'">horizontal</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置导航菜单主题</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.theme">
              <el-option :value="'light'">light</el-option>
              <el-option :value="'dark'">dark</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-menu
            style="width: 400px"
            :multiple="AntDesignVue.multiple"
            :selectable="AntDesignVue.selectable"
            :mode="AntDesignVue.mode"
            :theme="AntDesignVue.theme"
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
      <a-card id="2" class="my-5" title="ElementUI 导航菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否一次只能打开一个子菜单</span>
            <a-switch v-model="ElementUI.uniqueOpened" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置导航菜单排列方向</span>
            <el-select size="small" class="w-36" v-model="ElementUI.mode">
              <el-option :value="'vertical'">vertical</el-option>
              <el-option :value="'horizontal'">horizontal</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置菜单背景色</span>
            <a-input class="w-24" v-model="ElementUI.backgroundColor" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置菜单文字颜色</span>
            <a-input class="w-24" v-model="ElementUI.textColor" />
          </div>
        </div>
        <div>
          <el-menu
            style="width: 400px"
            :unique-opened="ElementUI.uniqueOpened"
            :mode="ElementUI.mode"
            :background-color="ElementUI.backgroundColor"
            :text-color="ElementUI.textColor"
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
      <a-card id="3" class="my-5" title="AtUI 导航菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否一次只能打开一个子菜单</span>
            <a-switch v-model="AtUI.inlineCollapsed" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置导航菜单排列方向</span>
            <el-select size="small" class="w-36" v-model="AtUI.mode">
              <el-option :value="'vertical'">vertical</el-option>
              <el-option :value="'inline'">inline</el-option>
              <el-option :value="'horizontal'">horizontal</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置导航菜单主题</span>
            <el-select size="small" class="w-36" v-model="AtUI.theme">
              <el-option :value="'light'">light</el-option>
              <el-option :value="'dark'">dark</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <at-menu
            style="width: 400px"
            :inline-collapsed="AtUI.inlineCollapsed"
            :mode="AtUI.mode"
            :theme="AtUI.theme"
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
      <a-card id="4" class="my-5" title="ViewUI 导航菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否一次只能打开一个子菜单</span>
            <a-switch v-model="ViewUI.accordion" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置导航菜单排列方向</span>
            <el-select size="small" class="w-36" v-model="ViewUI.mode">
              <el-option :value="'vertical'">vertical</el-option>
              <el-option :value="'horizontal'">horizontal</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置导航菜单主题</span>
            <el-select size="small" class="w-36" v-model="ViewUI.theme">
              <el-option :value="'light'">light</el-option>
              <el-option :value="'dark'">dark</el-option>
              <el-option :value="'primary'">primary</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Menu
            style="width: 400px"
            :accordion="ViewUI.accordion"
            :mode="ViewUI.mode"
            :theme="ViewUI.theme"
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
    <BasicAnchor
      :parentList="this.AnchorInfo.menuAnchor"
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
        multiple: false,
        selectable: false,
        mode: "vertical",
        theme: "light",
      },
      ElementUI: {
        uniqueOpened: false,
        mode: "vertical",
        backgroundColor: "#ffffff",
        textColor: "#303133",
      },
      AtUI: {
        inlineCollapsed: false,
        mode: "vertical",
        theme: "light",
      },
      ViewUI: {
        accordion: false,
        mode: "vertical",
        theme: "light",
      },
    };
  },
  methods: {},
};
</script>