<template>
  <el-col :span="3" >
    <el-menu mode="vertical" unique-opened :default-active="$route.path" v-bind:style="{height:browserHight()+'px',minHeight:'500px'}" >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </el-col>
</template>

<script>
import sidebarItem from './sidebarItem'

export default {
  components: { sidebarItem },
  computed: {
    routes() {
      return global.antRouter
    },

  },methods: {
    browserHight: function () {
      return document.documentElement.clientHeight-63;
    }
  }
}
</script>
