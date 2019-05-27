<template>
  <div class="home">
    <div class="header">
      <div class="switch">
        <div class="menu">
          <div>常用</div>
          <div class="active">全部</div>
        </div>
        <div class="login-out" @click="logOff" title="注销">管理员<img src="../assets/img/close.png" alt=""></div>
      </div>
      <div class="top-menu">
        <li
          v-for="(item,i) in menus"
          :key="i"
          :class="{activeNow: activeNow == i}"
          @click="addClick(i)"
        >
          <img :src="item.pic" :class="item.active">
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
        <el-col :span="3">
            <el-row>
              <el-col :span="24" class="side">
                <el-menu
                  default-active="1-1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  :default-openeds="openeds"
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
                      <el-menu-item index="demand">厂需求计划管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>物品出入库管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="procurement">采购入库管理</el-menu-item>
                      <el-menu-item index="outWarehouse">物品出库管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>物品分配管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="allocation">物品分配管理</el-menu-item>
                      <el-menu-item index="workshopUse">车间领用记录</el-menu-item>
                      <el-menu-item index="teamUse">小队领用记录</el-menu-item>
                      <el-menu-item index="personalUse">个人领用记录</el-menu-item>
                      <el-menu-item index="exchange">物品调换记录</el-menu-item>
                      <el-menu-item index="provide">发放标准管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>周期发放管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="plan">发放记录管理</el-menu-item>
                      <el-menu-item index="planReview">发放记录审核</el-menu-item>
                      <el-menu-item index="temporaryPlan">临时发放管理</el-menu-item>
                      <el-menu-item index="temporaryAudit">临时发放审核</el-menu-item>
                      <el-menu-item index="pauseRecord">暂停记录管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="5">
                    <template slot="title">
                      <i class="el-icon-menu"></i>
                      <span>劳保仓库管理</span>
                    </template>
                    <el-menu-item-group>
                      <el-menu-item index="detail">库存明细</el-menu-item>
                      <el-menu-item index="costManagement">物品消耗明细</el-menu-item>
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
                      <el-menu-item index="goodsInfo">物品信息管理</el-menu-item>
                      <el-menu-item index="laborInfo">劳保卡信息管理</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </el-col>
        <el-col :span="21">
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
      openeds: ['1'],
      uniqueOpended: false,
      menus: [
        {
          tit: "看板",
          pic: require('../assets/img/kb.png')
        },
        {
          tit: "TCS",
          pic: require('../assets/img/tcs.png')
        },
        {
          tit: "鼓风",
          pic: require('../assets/img/gf.png')
        },
        {
          tit: "压滤",
          pic: require('../assets/img/yl.png')
        },
        {
          tit: "劳保",
          active: "active",
          pic: require('../assets/img/lb.png')
        },
        {
          tit: "报警",
          pic: require('../assets/img/warn.png')
        },
        {
          tit: "启停",
          pic: require('../assets/img/qt.png')
        },
        {
          tit: "煤质化验",
          pic: require('../assets/img/mzhy.png')
        },
        {
          tit: "加介",
          pic: require('../assets/img/jj.png')
        },
        {
          tit: "系统",
          pic: require('../assets/img/system.png')
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
    color: #fff;
    background-image: url("../assets/img/bac.png");
    width: 100%;
    height: 160px;
    background-position: top center;
    background-color: #f5f5f5;
    z-index: 3;
    .switch {
      position: relative;
      line-height: 40px;
      border-bottom: 1px solid #fff;
      .menu{
        display: flex;
        width: 200px;
        margin: 0 auto;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 700;
        >div{
          cursor: pointer;
          width: 60px;
          text-align: center;
          &:hover{
            border-bottom: 3px solid #ccc;
          }
        }
        .active{
          border-bottom: 3px solid #ccc;
        }
      }
      .login-out{
        position: absolute;
        right: 20px;
        top: 0;
        cursor: pointer;
        img{
        width: 25px;
        height: 25px;
        margin: 7px 0;
      }
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
    min-height: 800px;
    border-right: 1px solid #ccc;
  }
  .nav-child {
    margin: 15px;
  }
}
</style>