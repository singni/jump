<template>
  <div class="navbar">
    <template v-if="levelList.length===0">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template v-else>
      <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        levelList: []
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0];
        if (first && first.name.trim().toLocaleLowerCase() !== 'Dashboard'.toLocaleLowerCase()) {
          matched = [{path: '/dashboard', meta: {title: '首页'}}].concat(matched)
        }
        this.levelList = matched
      }
    }
  }
</script>
<style>
  .navbar{
    display: block;
    text-align: center;
    padding: 14px 10px;
    text-decoration: none;
    border-bottom: #e7e8e6 solid 1px;
  }
</style>
