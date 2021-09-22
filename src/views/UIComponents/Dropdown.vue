<template>
  <div class="flex" ref="box">
    <!-- 下拉菜单 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 下拉菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单触发方式</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.trigger">
              <el-option :value="['hover']">hover</el-option>
              <el-option :value="['click']">click</el-option>
              <el-option :value="['contextmenu']">contextmenu</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单弹出位置</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.placement"
            >
              <el-option :value="'bottomLeft'">bottomLeft</el-option>
              <el-option :value="'bottomCenter'">bottomCenter</el-option>
              <el-option :value="'bottomRight'">bottomRight</el-option>
              <el-option :value="'topLeft'">topLeft</el-option>
              <el-option :value="'topCenter'">topCenter</el-option>
              <el-option :value="'topRight'">topRight</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单按钮类型</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.type">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'danger'">danger</el-option>
              <el-option :value="'dashed'">dashed</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单按钮大小</span>
            <el-select size="small" class="w-36" v-model="AntDesignVue.size">
              <el-option :value="'default'">default</el-option>
              <el-option :value="'large'">large</el-option>
              <el-option :value="'small'">small</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-dropdown
            class="mr-12"
            :disabled="AntDesignVue.disabled"
            :trigger="AntDesignVue.trigger"
            :placement="AntDesignVue.placement"
          >
            <span>下拉菜单<a-icon type="down" /></span>
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/UIComponents/divider">分割线</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/UIComponents/dropdown">下拉菜单</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/UIComponents/empty">空状态</router-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <a-dropdown-button
            :disabled="AntDesignVue.disabled"
            :trigger="AntDesignVue.trigger"
            :placement="AntDesignVue.placement"
            :type="AntDesignVue.type"
            :size="AntDesignVue.size"
          >
            下拉菜单
            <a-menu slot="overlay">
              <a-menu-item>
                <router-link to="/UIComponents/divider">分割线</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/UIComponents/dropdown">下拉菜单</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/UIComponents/empty">空状态</router-link>
              </a-menu-item>
            </a-menu>
          </a-dropdown-button>
        </div>
      </a-card>
      <!-- ElementUI -->
      <a-card id="2" class="my-5" title="ElementUI 下拉菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单弹出位置</span>
            <el-select size="small" class="w-36" v-model="ElementUI.placement">
              <el-option :value="'bottom-start'">bottom-start</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'bottom-end'">bottom-end</el-option>
              <el-option :value="'top-start'">top-start</el-option>
              <el-option :value="'top'">top</el-option>
              <el-option :value="'top-end'">top-end</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单按钮类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.type">
              <el-option :value="null">default</el-option>
              <el-option :value="'primary'">primary</el-option>
              <el-option :value="'success'">success</el-option>
              <el-option :value="'danger'">danger</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单按钮大小</span>
            <el-select size="small" class="w-36" v-model="ElementUI.size">
              <el-option :value="null">default</el-option>
              <el-option :value="'medium'">medium</el-option>
              <el-option :value="'small'">small</el-option>
              <el-option :value="'mini'">mini</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置展开下拉菜单延时（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.showTimeout" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置收起下拉菜单延时（毫秒）</span>
            <a-input-number class="w-24" v-model="ElementUI.hideTimeout" />
          </div>
        </div>
        <div>
          <el-dropdown
            class="mr-12"
            :placement="ElementUI.placement"
            :show-timeout="ElementUI.showTimeout"
            :hide-timeout="ElementUI.hideTimeout"
          >
            <span
              >下拉菜单<i class="el-icon-arrow-down el-icon--right"></i
            ></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/UIComponents/divider">分割线</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/UIComponents/dropdown">下拉菜单</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/UIComponents/empty">空状态</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown
            split-button
            :placement="ElementUI.placement"
            :type="ElementUI.type"
            :size="ElementUI.size"
            :show-timeout="ElementUI.showTimeout"
            :hide-timeout="ElementUI.hideTimeout"
          >
            下拉菜单
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/UIComponents/divider">分割线</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/UIComponents/dropdown">下拉菜单</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/UIComponents/empty">空状态</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 下拉菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单触发方式</span>
            <el-select size="small" class="w-36" v-model="AtUI.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'click'">click</el-option>
              <el-option :value="'focus'">focus</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单弹出位置</span>
            <el-select size="small" class="w-36" v-model="AtUI.placement">
              <el-option :value="'bottom-left'">bottom-left</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'bottom-right'">bottom-right</el-option>
              <el-option :value="'top-left'">top-left</el-option>
              <el-option :value="'top'">top</el-option>
              <el-option :value="'top-right'">top-right</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <at-dropdown :trigger="AtUI.trigger" :placement="AtUI.placement">
            <at-button
              >下拉菜单<i class="icon icon-chevron-down"></i
            ></at-button>
            <at-dropdown-menu slot="menu">
              <at-dropdown-item>
                <router-link to="/UIComponents/divider">分割线</router-link>
              </at-dropdown-item>
              <at-dropdown-item>
                <router-link to="/UIComponents/dropdown">下拉菜单</router-link>
              </at-dropdown-item>
              <at-dropdown-item>
                <router-link to="/UIComponents/empty">空状态</router-link>
              </at-dropdown-item>
            </at-dropdown-menu>
          </at-dropdown>
        </div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 下拉菜单">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单触发方式</span>
            <el-select size="small" class="w-36" v-model="ViewUI.trigger">
              <el-option :value="'hover'">hover</el-option>
              <el-option :value="'click'">click</el-option>
              <el-option :value="'focus'">focus</el-option>
            </el-select>
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置下拉菜单弹出位置</span>
            <el-select size="small" class="w-36" v-model="ViewUI.placement">
              <el-option :value="'bottom-start'">bottom-start</el-option>
              <el-option :value="'bottom'">bottom</el-option>
              <el-option :value="'bottom-end'">bottom-end</el-option>
              <el-option :value="'top-start'">top-start</el-option>
              <el-option :value="'top'">top</el-option>
              <el-option :value="'top-end'">top-end</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Dropdown :trigger="ViewUI.trigger" :placement="ViewUI.placement">
            <Button>下拉菜单<Icon type="ios-arrow-down"></Icon></Button>
            <DropdownMenu slot="list">
              <DropdownItem>
                <router-link to="/UIComponents/divider">分割线</router-link>
              </DropdownItem>
              <DropdownItem>
                <router-link to="/UIComponents/dropdown">下拉菜单</router-link>
              </DropdownItem>
              <DropdownItem>
                <router-link to="/UIComponents/empty">空状态</router-link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.dropdownAnchor"
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
        disabled: false,
        trigger: ["hover"],
        placement: "bottomLeft",
        type: "default",
        size: "default",
      },
      ElementUI: {
        placement: "bottom-start",
        type: null,
        size: null,
        showTimeout: 250,
        hideTimeout: 150,
      },
      AtUI: {
        trigger: "hover",
        placement: "bottom-left",
      },
      ViewUI: {
        trigger: "hover",
        placement: "bottom-start",
      },
    };
  },
  methods: {},
};
</script>