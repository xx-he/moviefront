<template>
  <div>
    <div class="wrapper">
      <el-tabs type="border-card" tabPosition="left"
               style="width:1000px;height: 100vh;margin: 14px auto auto auto;position: sticky">
        <el-tab-pane>
          <span slot="label">个人信息<i class="el-icon-arrow-right"></i></span>
          <user :list="list" :imageUrl="imageUrl" class="user"></user>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>/* eslint-disable indent */

import fetch from '../api/fetch';
import Info from '../components/userInfo';

export default {
  data() {
    return {
      activeIndex2: '1',
      btnText: '取消',
      list: {
        username: '',
        sex: '',
        phone: '',
        userTags: '',
        userMd: '',
      },
      imageUrl: '',
      head: {},
      refresh: 0,
    };
  },
  computed: {
    setDefault() {
      return this.list.avatar ? this.list.avatar : 'https://upload-images.jianshu.io/upload_images/9381131-a48cdb07b37dcff1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240';
    },
  },
  mounted() {
    this.getUserInfo();
    this.refresh = this.$route.params.refresh !== undefined ? this.$route.params.refresh : 0;
  },
  watch: {
    refresh() {
      location.reload();
    },
  },
  components: {
    user: Info,
  },
  methods: {
    getUserInfo() {
      fetch
        .getUserInfo(localStorage.getItem('token'))
        .then((res) => {
          this.list = res.data.data !== null ? res.data.data : this.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style>
  html * {
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .box-card {
    width: 1000px;
    margin: 14px auto auto auto;
  }

  .img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }

  .el-card .username {
    float: left;
    margin-left: 14px;
    font-size: 21px;
  }

  .avatar-uploader {
    float: left;
  }

  .avatar-uploader .el-upload {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    margin-bottom: 14px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }

  .avatar {
    width: 5rem;
    height: 5rem;
    display: block;
  }
</style>
