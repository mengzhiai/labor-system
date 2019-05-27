<template>
  <div>
    <div class="nav-child">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">周期发放管理</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">临时发放审核</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <img src="@/assets/img/temporaryAudit.png" alt>
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