<template>
  <div class="home">
    <div class="header">
      <div class="switch">
        <div>常用</div>
        <div>全部</div>
      </div>
      <div class="top-menu">
        <li
          v-for="(item,i) in menus"
          :key="i"
          :class="{activeNow: activeNow == i}"
          @click="addClick(i)"
        >
          <img src="../assets/img/warn.png" :class="item.active">
          <div class="tit">{{item.tit}}</div>
        </li>
      </div>
    </div>
    <div class="subtitle">
      <div>
        劳保用品管理
        <span>Labor protection supplies management</span>
      </div>
    </div>
    <div class="content">
      <el-row>
        <div class="side">
          <el-col :span="4">
            <el-row>
              <el-col :span="24">
                <el-menu
                  default-active="1-1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  router
                >
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>需求计划管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="teamPlan">小队需求计划管理</el-menu-item>
                      <el-menu-item index="planApproval">小队需求计划审批</el-menu-item>
                      <el-menu-item index="workshop">车间需求计划审批</el-menu-item>
                      <el-menu-item index="planApproval">厂需求计划管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>物品出入库管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="planApproval">采购入库管理</el-menu-item>
                      <el-menu-item index="planApproval">物品出库管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>物品分配管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="planApproval">物品分配管理</el-menu-item>
                      <el-menu-item index="planApproval">车间领用记录</el-menu-item>
                      <el-menu-item index="planApproval">小队领用记录</el-menu-item>
                      <el-menu-item index="planApproval">个人领用记录</el-menu-item>
                      <el-menu-item index="planApproval">物品调换记录</el-menu-item>
                      <el-menu-item index="planApproval">发放标准管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>周期发放管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="planApproval">发放记录管理</el-menu-item>
                      <el-menu-item index="planApproval">发放记录审核</el-menu-item>
                      <el-menu-item index="planApproval">临时发放管理</el-menu-item>
                      <el-menu-item index="planApproval">临时发放审核</el-menu-item>
                      <el-menu-item index="planApproval">暂停记录管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="5">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>劳保仓库管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="planApproval">库存明细</el-menu-item>
                      <el-menu-item index="planApproval">物品消耗明细</el-menu-item>
                      <el-menu-item index="planApproval"></el-menu-item>
                      <el-menu-item index="planApproval"></el-menu-item>
                      <el-menu-item index="planApproval"></el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="6">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>统计报表</span>
                    </template>
                    <el-menu-item-group></el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="7">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>基础信息模块</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="planApproval">物品信息管理</el-menu-item>
                      <el-menu-item index="planApproval">劳保卡信息管理</el-menu-item>
                      <el-menu-item index="planApproval"></el-menu-item>
                      <el-menu-item index="planApproval"></el-menu-item>
                      <el-menu-item index="planApproval"></el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </el-col>
        </div>
        <el-col :span="20">
          <div class="nav-child">
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/' }">物品采购管理</el-breadcrumb-item>
              <el-breadcrumb-item>
                <a href="/">采购入库管理</a>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <router-view class="main"></router-view>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          tit: "看板"
        },
        {
          tit: "TCS"
        },
        {
          tit: "鼓风"
        },
        {
          tit: "压滤"
        },
        {
          tit: "劳保",
          active: "active"
        },
        {
          tit: "报警"
        },
        {
          tit: "启停"
        },
        {
          tit: "煤质化验"
        },
        {
          tit: "加介"
        },
        {
          tit: "系统"
        }
      ],
      activeNow: 4
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addClick(i) {
      this.activeNow = i;
    },
    //注销
    logOff() {
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .header {
    background: blue;
    color: #fff;
    .switch {
      display: flex;
      justify-content: center;
      line-height: 40px;
      border-bottom: 1px solid #fff;
      > div {
        width: 50%;
        text-align: center;
      }
    }
    .top-menu {
      display: flex;
      justify-content: center;
      line-height: 40px;
      padding: 10px 0;
      li {
        width: 10%;
        color: #fff;
        list-style: none;
        text-align: center;
        cursor: pointer;
        img {
          padding: 10px;
          width: 40px;
          &:hover {
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
      }
      .activeNow {
        img {
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  .subtitle {
    line-height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #ccc;
    > div {
      font-size: 18px;
      font-weight: 600;
      span {
        color: #333;
        font-weight: normal;
        margin-left: 20px;
      }
    }
  }
}
.content {
  .side {
    height: 100%;
    // border: 1px solid #ccc;
  }
  .nav-child {
    margin: 15px;
  }
}
</style>