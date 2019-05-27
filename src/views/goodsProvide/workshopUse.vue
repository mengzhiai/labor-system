<template>
  <div>
    <div class="nav-child">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">物品分配管理</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">车间领用记录</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <img src="@/assets/img/workshopUse.png" alt>
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