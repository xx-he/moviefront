<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-col :span="6" style="height:100%"></el-col>
        <el-col :span="12" class="header">大数据电影推荐系统</el-col>
        <el-col :span="6" style="height:100%">
          <el-col :span="6" style="height:100%"></el-col>
          <el-col :span="6" style="height:100%"></el-col>
          <el-col :span="6" style="height:100%"></el-col>
<!--          <el-col :span="6" class="logout_container">-->
<!--            <el-button type="info" @click="handleLogout" plain v-show="logStatus">登出</el-button>-->
<!--          </el-col>-->
        </el-col>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu default-active="/"
                     :router="isRouter">
              <el-menu-item index="/">
                <font-awesome-icon icon="home" style="margin-left:3px;margin-right:10px"/>
                <span slot="title">推荐</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <font-awesome-icon icon="users" style="margin-left:3px;margin-right:10px"/>
                  <span>用户</span>
                </template>
                <el-menu-item index="user_info">用户信息</el-menu-item>
                <el-menu-item index="user_admin">权限管理</el-menu-item>
              </el-submenu>
              <el-menu-item index="classManage">
                <i class="el-icon-tickets"></i>
                <span slot="title">电影数据管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <transition name="fade" mode="out-in" :duration="250">
            <router-view class="router_view"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faComments from '@fortawesome/fontawesome-free-solid/faComments';
import faServer from '@fortawesome/fontawesome-free-solid/faServer';
import { mapState } from 'vuex';
import * as types from './store/types';

fontawesome.library.add(faHome, faUsers, faComments, faServer);

export default {
  name: 'App',
  data() {
    return {
      isRouter: true,
      publicStore,
    };
  },
  created(){
  },
  methods: {
    handleLogout() {
      this.$store.commit(types.LOGOUT);
      this.$router.push({
        path: '/login',
      });
    }
  },
  computed: mapState({
    title: state => state.title,
    logStatus: state => state.log_status,
  }),
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style lang="css">
  #app, .el-container {
    width: 100%;
    height: 100%;
  }

  .logout_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .black {
    color: black;
  }

  .white {
    color: white;
  }

  .el-header {
    background-color: #01A5BE;
    box-sizing: border-box;
  }

  .header {
    font-size: 24px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    color: white;
  }

  .el-aside {
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }

  .el-main {
  }

  .router_view {
    width: 100%;
    height: 100%;
  }
</style>
