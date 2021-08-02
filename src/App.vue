<template>
  <div id="app">
    <div id="app-nav">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/antDesignVue">AntDesignVue</router-link>
      </div>
    </div>
    <router-view id="app-view" />
  </div>
</template>

<style scoped>
#app {
  height: 100%;
}
#app-nav {
  height: 5%;
}
#app-view {
  height: 95%;
}
</style>