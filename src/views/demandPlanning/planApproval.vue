<template>
  <div>
    <div class="nav-child">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">需求计划管理</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">小队需求计划审批</a>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <img src="@/assets/img/planApproval.png" alt>
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