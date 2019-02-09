<template>
      <el-col :span="21">
        <Breadcrumb></Breadcrumb>
        <router-view></router-view>
      </el-col>
</template>

<script>
import  Breadcrumb from './Breadcrumb'
  export default {
    name: 'AppMain',
    components: {
      Breadcrumb
    },
    computed: {
      // key() {
      //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
      // }
    }
  }
</script>
