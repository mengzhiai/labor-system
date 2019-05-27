<template>
  <div>
    <div class="nav-child">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">劳保仓库管理</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">库存明细</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <img src="@/assets/img/detail.png" alt>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-child{
  margin: 20px 0;
}
</style>