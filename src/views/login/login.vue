<template>
  <div class="login">
    <div class="header"><img src="../../assets/img/ico.png"> 劳保用品管理系统</div>
    <div class="maxbox">
      <div class="title">
        <!-- <img src="@/assets/img/logo.png" alt> -->
      </div>
    </div>
    <div class="login-box">
      <div class="maxbox">
        <div></div>
        <div class="panel">
          <div class="tab">
            <div class="item">账号登陆</div>
          </div>
          <div class="box">
            <el-form :model="form" ref="form" :rules="rules">
              <el-form-item label prop="userName">
                <el-input v-model="form.userName" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item label prop="password">
                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item class="login-group">
                <el-button type="primary" @click="onSubmit('form')" class="login-btn">登陆</el-button></el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">天津中新智冠信息技术有限公司</div>
  </div>
</template>

<script>
export default {
  data() {
    let userName = (rule, value, callbak) => {
      if (!value) {
        return callbak(new Error("用户名不能为空"));
      } else {
        callbak();
      }
    };
    let password = (rule, value, callbak) => {
      if (value) {
        if (value.length < 8) {
          return callbak(new Error("密码不能小于8位"));
        } else {
          callbak();
        }
      } else {
        return callbak(new Error("密码不能为空"));
      }
    };
    return {
      form: {},
      rules: {
        userName: [
          {
            validator: userName,
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: password,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/teamPlan");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .header{
    line-height: 60px;
    font-size: 26px;
    font-weight: 800;
    background-color: #EBECED;
    padding: 0 20px;
    color: #134990;
  }
  .maxbox{
    width: 1200px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .login-box {
    background-image: url("../../assets/img/login_bg.png");
    width: 100%;
    height: 600px;
    background-position: top center;
    background-color: #f5f5f5;
    z-index: 3;
    // text-align: right;
    .maxbox {
      display: grid;
      grid-template-columns: 800px 400px;
    }
    .panel {
      background-color: #fff;
      margin: 100px 20px;
      padding: 40px 20px;
      .tab {
        display: grid;
        grid-template-columns: 50% 50%;
        text-align: left;
        margin: 0 15px;
        .item {
          cursor: pointer;
          font-size: 22px;
        }
      }
      .box {
        margin: 15px;
        .register {
          display: flex;
          justify-content: space-between;
          .item {
            span {
              &:hover {
                color: #f56600;
                cursor: pointer;
              }
            }
            .line {
              margin: 0 10px;
            }
          }
        }
      }
    }
  }
  .login-group{
    text-align: right;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    line-height: 40px;
    background-color: #f8f7f7;
  }
}

</style>