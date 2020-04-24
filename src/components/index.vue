<template>
  <div class="index">
    <div class="header">
      <div class="tit">电商后台管理系统</div>
      <div class="login-out"><a href="#">退出</a></div>
    </div>
    <div class="main">
      <div class="sidebar">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :unique-opened=true
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="1-1"
                    ><i class="el-icon-menu"></i>用户列表</el-menu-item
                  >
                  
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="2-1"
                    ><i class="el-icon-menu"></i>角色列表</el-menu-item
                  >
                  <el-menu-item index="2-2"
                    ><i class="el-icon-menu"></i>权限列表</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>商品管理</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="3-1"
                    ><i class="el-icon-menu"></i>商品列表</el-menu-item
                  >
                  <el-menu-item index="3-2"
                    ><i class="el-icon-menu"></i>分类参数</el-menu-item
                  >
                  <el-menu-item index="3-3"
                    ><i class="el-icon-menu"></i>商品分类</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>订单管理</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="4-1"
                    ><i class="el-icon-menu"></i>订单列表</el-menu-item
                  >
                 
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>数据统计</span>
                </template>

                <el-menu-item-group>
                  <el-menu-item index="5-1"
                    ><i class="el-icon-menu"></i>数据报表</el-menu-item
                  >
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="content">
        <div class="breadcrumb">
          <el-breadcrumb
            class="breadcrumb-ul"
            separator-class="el-icon-arrow-right"
          >
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="view-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.index {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header {
    position: relative;
    width: 100%;
    height: 60px;
    background-color: #afc0d1;
    .tit {
      margin: 0 auto;
      width: 300px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 24px;
    }
    .login-out {
      position: absolute;
      top: 0;
      right: 20px;
      height: 60px;
      line-height: 60px;
      a {
        display: block;
        color: coral;
      }
    }
  }
  .main {
    display: flex;
    width: 100%;
    flex: 1;
    background-color: #e7eef3;
    .sidebar {
      margin-right: 20px;
      width: 200px;
      height: 100%;
      background-color: #fff;
      .tac {
          .el-submenu [class^=el-icon-] {
            margin-right: 10px;
          }
        
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100%;
      .breadcrumb {
        padding-left: 20px;
        width: 100%;
        height: 44px;
        background-color: #d0dce6;
        box-sizing: border-box;
        .breadcrumb-ul {
          height: 100%;
          line-height: 44px;
          font-size: 14px;
        }
      }
      .view-center {
        flex: 1;
        width: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>
