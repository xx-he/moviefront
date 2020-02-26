<template>
  <div class="login">
    <el-form
    class="login_box"
    :model="form">
      <div class="loading" v-show="isLoading">
        <looping-rhombuses-spinner
        :animation-duration="2500"
        :rhombus-size="15"
        color="#07A5BE"/>
      </div>
      <el-input
      v-model="form.username"
      size="medium"
      placeholder="请输入用户名"
      autofocus="true"
      style="width:290px;margin-bottom:30px"
      v-on:keyup.native.enter="handleLoginButton">
        <div slot="prepend" style="width:40px;text-align:center">用户名</div>
      </el-input>
      <el-input
      v-model="form.password"
      size="medium"
      :type="pwdInputType"
      placeholder="请输入密码"
      autofocus="true"
      style="width:290px"
      v-on:keyup.native.enter="handleLoginButton">
        <div slot="prepend" style="width:40px;text-align:center">密码</div>
        <el-tooltip
        class="item"
        effect="light"
        content="点击显示/隐藏密码"
        slot="suffix"
        placement="bottom">
          <i class="el-input__icon el-icon-view" @click="handlePwdInputView"></i>
        </el-tooltip>
      </el-input>
      <el-button type="primary" style="margin-top:70px" @click="handleLoginButton"> 确认登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners';
import * as types from '../store/types';

export default {
  components: {
    LoopingRhombusesSpinner,
  },
  name: 'login',
  data() {
    return {
      isLoading: false,
      form: {
        username: '',
        password: '',
      },
      isPwdViewable: false,
      pwdInputType: 'password',
    };
  },
  methods: {
    handlePwdInputView() {
      this.isPwdViewable = !this.isPwdViewable;
      this.pwdInputType = this.isPwdViewable ? '' : 'password';
    },
    handleLoginButton() {
      if (this.form.username && this.form.password) {
        this.isLoading = true;
        this.axios.post('/user/login', this.form)
          .then(() => {
            this.isLoading = false;
            this.$store.commit(types.LOGIN);
            const redirect = decodeURIComponent(this.$route.query.redirect || '/');
            this.$router.push({
              path: redirect,
            });
          })
          .catch((error) => {
            this.isLoading = false;
            this.$message.error(`登录出现错误！ 请检查用户名或密码！${error}`);
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
.login {
  left: 0;
  top: 0;
  background-color: #01A5BE;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  z-index: 500;
  border-radius: 5px;
}
.login_box {
  border-radius: 6px;
  margin-top: -200px;
  width: 400px;
  height: 300px;
  background-color: #F2F2F2;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>
