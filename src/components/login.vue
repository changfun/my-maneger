<template>
  <div class="login">
    <div class="login-container">
      <h2>用户登录</h2>
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="loginIn"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      labelPosition: "top",
      formLabelAlign: {
        username: "",
        password: "",
      },

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 3,
            max: 11,
            message: "长度在 3 到 11 个字符",
            trigger: "blur",
          }
        ],
      },
    };
  },
  methods: {
    loginIn() {
      console.log(123);
    },
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  .login {
    position: relative;
    height: 100%;
    background-image: url('../assets/img/login3.jpg');
    .login-container {
      position: absolute;
      padding: 40px 40px 60px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 580px;
      height: 438px;
      border-radius: 5px;
      box-sizing: border-box;
      background-color: #fff;
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
