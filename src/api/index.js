const host = 'http://localhost:10015';
// const host = 'http://localhost:10000'

export default {
  userRegister() {
    return `${host}/user`;
  },
  userLogin() {
    return `${host}/user/login`;
  },
  getUserInfo() {
    return `${host}/user`;
  },
  sendCode() {
    return `${host}/outside/code`;
  },
  logout() {
    return `${host}/user/logout`;
  },
  // 提交用户信息
  putUserInfo() {
    return `${host}/user/info`;
  },
  // 修改用户手机号码
  changePhone() {
    return `${host}/user/phone`;
  },
  // 修改用户密码
  changePass() {
    return `${host}/user/password`;
  },
  // 修改用户邮箱
  changeEmail() {
    return `${host}/user/email`;
  },
  // 获取站内信
  getMessage() {
    return `${host}/message/user/get`;
  },
};
