<template>
  <div>
    <table v-if="!isEdit" class="container">
      <th> 个人信息</th>
      <tr>
        <td>昵称：</td>
        <td>{{list.username}}</td>
      </tr>
      <tr>
        <td>性别：</td>
        <td>{{list.sex}}</td>
      </tr>
      <tr>
        <td>手机号：</td>
        <td>{{list.phone}}</td>
      </tr>
      <tr>
        <td>电影标签：</td>
        <td>
          <div>
            <span v-for="n in list.userTags">
              <el-button class="editt">{{n}}</el-button>
              <span>&ensp;</span>
            </span>
          </div>
        </td>
      </tr>
      <tr>
        <td>个人宣言：</td>
        <td>{{list.motto}}</td>
      </tr>
      <tr>
        <td>ID：</td>
        <td>{{list.userMd}}</td>
      </tr>
      <el-button class="edit" @click="changeEdit">编辑</el-button>
      <el-button class="edit" @click="toIndex">返回</el-button>
    </table>
    <el-form :model="list" status-icon :rules="rules2" ref="list" label-width="100px" class="formWrap"
             v-if="isEdit">
      <el-form-item label="昵称" prop="username">
        <el-input v-model="list.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="标签" prop="userTags">
        <div class="mutli">
          <!--          <template v-for="prop in tags">-->
          <dd v-for="op in tags" class="mutli">
            <input type="checkbox" :value="op" v-model="userTags">{{op}}
          </dd>
        </div>
      </el-form-item>
      <el-form-item label="个人宣言" prop="motto">
        <el-input v-model="list.motto" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="list.sex" placeholder="请选择性别" style="width: 100%">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class='editor' @click="backToView">返回</el-button>
        <el-button @click="submitInfo('list')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
  table {
    width: 600px;
    font-size: 16px
  }

  table tr td {
    padding: 11.2px;
    text-align: left;
  }

  .formWrap {
    width: 500px;
    font-size: 18px;
  }

  .edit {
    margin: 10px auto auto 40px;
  }

  .editt {
    margin: 0px auto auto 0px;
  }

  .mutli dd,.singleli dd {
    float: left;
    margin-right: 6px;
    vertical-align: middle;
    padding: 3px 15px 1px 20px;
    cursor: pointer;
    color: #006fbc;
    display: inline-block;
  }

  .mutli input[type="checkbox"], .singleli input[type="checkbox"] {
    display: inline-block;
    width: auto;
    vertical-align: middle;
    padding: 3px 15px;
    cursor: pointer;
    color: #006fbc;
    margin-left: -18px;
  }

</style>

<script>/* eslint-disable indent */

import fetch from '../api/fetch';

export default {
  props: ['list', 'imageUrl'],
  data() {
    const checknickname = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('昵称不能为空'));
      }
      callback();
    };
    const checksex = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('性别不能为空'));
      }
      callback();
    };
    return {
      tags: [],
      userTags: [],
      isEdit: false,
      rules2: {
        username: [{ validator: checknickname, trigger: 'blur' }],
        sex: [{ validator: checksex, trigger: 'blur' }],
      },
    };
  },
  mounted() {
    this.getUserTags();
  },
  watch: {},
  methods: {
    getUserTags() {
      fetch
        .movieTags()
        .then((res) => {
          if (res.status === 200) {
            if (res.data.code === 0) {
              this.tags = res.data.data;
            } else {
              this.$message({
                message: res.data.msg,
                type: 'warning',
              });
            }
          }
        })
        // eslint-disable-next-line no-unused-vars
        .catch((e) => {
          this.$message({
            message: '获取标签失败',
            type: 'warning',
          });
        });
    },
    changeEdit() {
      this.isEdit = !this.isEdit;
    },
    backToView() {
      this.isEdit = !this.isEdit;
      this.list.userTags = JSON.parse(this.list.userTags);
    },
    toIndex() {
      this.$router.push({ name: 'index' });
    },
    // 提交订单信息
    submitInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.list.userTags = JSON.stringify(this.userTags);
          fetch
            .putUserInfo(this.list)
            .then((res) => {
              console.log('list', this.list);
              if (res.data.code === 0) {
                this.$message({
                  message: '保存成功',
                  type: 'success',
                });
              }
            })
            .catch((e) => {
              this.$message({
                message: e,
                type: 'error',
              });
            });
        } else {
          console.log('error submit!!');
        }
      });
    },
  },
};
</script>
