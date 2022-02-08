<template>
  <div id="app">
    <el-card style="margin: 10px;font-size: 12px;">
      <div style="text-align: left;" slot="header">子应用child1的跳转入口</div>
      <el-button icon="el-icon-link" @click="$router.push({name:'Home'})">child1 - Home</el-button>
      <el-button icon="el-icon-link" @click="$router.push({name:'About'})">child1 - About</el-button>
    </el-card>

    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "@/scss/common";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
