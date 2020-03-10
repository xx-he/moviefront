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
        <td>phone：</td>
        <td>{{list.phone}}</td>
      </tr>
      <tr>
        <td>标签：</td>
        <td>{{list.userTags}}</td>
      </tr>
      <tr>
        <td>令牌：</td>
        <td>{{list.userMd}}</td>
      </tr>
      <el-button class="edit" @click="changeEdit">编辑</el-button>
      <el-button class="edit" @click="toIndex">返回</el-button>
    </table>
    <el-form  :model="list" status-icon :rules="rules2" ref="list" label-width="100px" class="formWrap"
             v-if="isEdit">
      <el-form-item label="昵称" prop="username">
        <el-input v-model="list.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-select v-model="list.sex" placeholder="请选择性别" style="width: 100%">
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button class='editor' @click="changeEdit">返回</el-button>
        <el-button  @click="submitInfo('list')">提交</el-button>
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
    margin:10px auto auto 40px;
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
        isEdit: false,
        rules2: {
          username: [{ validator: checknickname, trigger: 'blur' }],
          sex: [{ validator: checksex, trigger: 'blur' }],
        },
      };
    },
    mounted() {
    },
    watch: {
    },
    methods: {
      changeEdit() {
        this.isEdit = !this.isEdit;
      },
      toIndex() {
        this.$router.push({ name: 'index', params: { refresh: 1 } });
      },
      // 提交订单信息
      submitInfo(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push({ name: 'index' });
            // fetch
            //   .putUserInfo(this.list)
            //   .then((res) => {
            //     console.log('list', this.list);
            //     if (res.data.success) {
            //       this.$message({
            //         message: '保存成功',
            //         type: 'success',
            //       });
            //     }
            //   })
            //   .catch((e) => {
            //     console.log(e);
            //   });
          } else {
            console.log('error submit!!');
          }
        });
      },
    },
  };
</script>
