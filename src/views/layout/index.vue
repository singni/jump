<template>
  <el-row>
    <HaderNav></HaderNav>
    <sidebar></sidebar>
    <app-main></app-main>
  </el-row>
</template>
<script>
  import AppMain from '@/views/layout/components/AppMain'//页面布局的右侧区域
  import sidebar from '@/views/layout/components/sidebar'//页面布局的左侧菜单
  import HaderNav from './HaderNav'

  export default {
    name: 'layout',
    components: {
      sidebar,
      AppMain,
      HaderNav,
    }
  }
</script>

<style scoped>

</style>
