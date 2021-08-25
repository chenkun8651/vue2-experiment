<template>
  <!-- 下拉菜单 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 下拉菜单">
      <!-- 标准下拉菜单 -->
      <div class="card-item">
        <h3>标准下拉菜单</h3>
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
      <!-- 按钮下拉菜单 -->
      <div class="card-item">
        <h3>按钮下拉菜单</h3>
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
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 下拉菜单"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 下拉菜单"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 下拉菜单"></a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // AntDesignVue
      dropdownTrigger: ["hover"],
      dropdownPlacement: "bottomLeft",
      dropdownDisabled: false,
      dropdownSize: "default",
      dropdownType: "default",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {},
};
</script>