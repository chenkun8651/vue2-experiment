<template>
  <!-- 下拉菜单 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 下拉菜单">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="dropdownDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownTrigger">
          <a-radio-button :value="['hover']">hover</a-radio-button>
          <a-radio-button :value="['click']">click</a-radio-button>
          <a-radio-button :value="['contextmenu']">
            contextmenu
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownPlacement">
          <a-radio-button :value="'bottomLeft'">bottomLeft</a-radio-button>
          <a-radio-button :value="'bottomCenter'">bottomCenter</a-radio-button>
          <a-radio-button :value="'bottomRight'">bottomRight</a-radio-button>
          <a-radio-button :value="'topLeft'">topLeft</a-radio-button>
          <a-radio-button :value="'topCenter'">topCenter</a-radio-button>
          <a-radio-button :value="'topRight'">topRight</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownType">
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'dashed'">dashed</a-radio-button>
          <a-radio-button :value="'danger'">danger</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownSize">
          <a-radio-button :value="'large'">large</a-radio-button>
          <a-radio-button :value="'default'">default</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-dropdown
          style="margin-right: 50px"
          :disabled="dropdownDisabled"
          :trigger="dropdownTrigger"
          :placement="dropdownPlacement"
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
          :disabled="dropdownDisabled"
          :trigger="dropdownTrigger"
          :placement="dropdownPlacement"
          :type="dropdownType"
          :size="dropdownSize"
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
    <a-card class="my-5" title="ElementUI 下拉菜单">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="dropdownPlacementE">
          <a-radio-button :value="'bottom-start'">bottom-start</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'bottom-end'">bottom-end</a-radio-button>
          <a-radio-button :value="'top-start'">top-start</a-radio-button>
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'top-end'">top-end</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownTypeE">
          <a-radio-button :value="null">default</a-radio-button>
          <a-radio-button :value="'primary'">primary</a-radio-button>
          <a-radio-button :value="'success'">success</a-radio-button>
          <a-radio-button :value="'danger'">danger</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownSizeE">
          <a-radio-button :value="'medium'">medium</a-radio-button>
          <a-radio-button :value="'small'">small</a-radio-button>
          <a-radio-button :value="'mini'">mini</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置展开下拉菜单的延时（毫秒）</span>
          <a-input-number style="width: 100px" v-model="dropdownShowTimeoutE" />
        </div>
        <div class="my-2 mr-5">
          <span style="margin-right: 5px">设置收起下拉菜单的延时（毫秒）</span>
          <a-input-number style="width: 100px" v-model="dropdownHideTimeoutE" />
        </div>
      </div>
      <div>
        <el-dropdown
          style="margin-right: 50px"
          :placement="dropdownPlacementE"
          :show-timeout="dropdownShowTimeoutE"
          :hide-timeout="dropdownHideTimeoutE"
        >
          <span>下拉菜单<i class="el-icon-arrow-down el-icon--right"></i></span>
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
          :placement="dropdownPlacementE"
          :type="dropdownTypeE"
          :size="dropdownSizeE"
          :show-timeout="dropdownShowTimeoutE"
          :hide-timeout="dropdownHideTimeoutE"
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
    <a-card class="my-5" title="AtUI 下拉菜单">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="dropdownTriggerA">
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'click'">click</a-radio-button>
          <a-radio-button :value="'focus'">focus</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownPlacementA">
          <a-radio-button :value="'bottom-left'">bottom-left</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'bottom-right'">bottom-right</a-radio-button>
          <a-radio-button :value="'top-left'">top-left</a-radio-button>
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'top-right'">top-right</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <at-dropdown
          :trigger="dropdownTriggerA"
          :placement="dropdownPlacementA"
        >
          <at-button>下拉菜单<i class="icon icon-chevron-down"></i></at-button>
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
    <a-card class="my-5" title="ViewUI 下拉菜单">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="dropdownTriggerV">
          <a-radio-button :value="'hover'">hover</a-radio-button>
          <a-radio-button :value="'click'">click</a-radio-button>
          <a-radio-button :value="'focus'">focus</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="dropdownPlacementV">
          <a-radio-button :value="'bottom-start'">bottom-start</a-radio-button>
          <a-radio-button :value="'bottom'">bottom</a-radio-button>
          <a-radio-button :value="'bottom-end'">bottom-end</a-radio-button>
          <a-radio-button :value="'top-start'">top-start</a-radio-button>
          <a-radio-button :value="'top'">top</a-radio-button>
          <a-radio-button :value="'top-end'">top-end</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Dropdown :trigger="dropdownTriggerV" :placement="dropdownPlacementV">
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
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      dropdownDisabled: false,
      dropdownTrigger: ["hover"],
      dropdownPlacement: "bottomLeft",
      dropdownType: "default",
      dropdownSize: "default",
      // ElementUI
      dropdownPlacementE: "bottom-start",
      dropdownTypeE: null,
      dropdownSizeE: "small",
      dropdownShowTimeoutE: 250,
      dropdownHideTimeoutE: 150,
      // AtUI
      dropdownTriggerA: "hover",
      dropdownPlacementA: "bottom-left",
      // ViewUI
      dropdownTriggerV: "hover",
      dropdownPlacementV: "bottom-start",
    };
  },
  methods: {},
};
</script>