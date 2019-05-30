<template>
    <div class="system_login">
        <div class="system_form">
            <div class="system_form_img"><img src="/static/images/system/logo.png" alt=""></div>
            <div class="system_form_msg">
                <el-row class="system_form_msg_title">
                    <el-col :span="4">
                        <span class="login">登录</span>
                    </el-col>
                    <el-col :span="4" :offset="16">
                        <span class="register">注册>></span>
                    </el-col>
                </el-row>
                <div class="system_form_msg_info">
                    <el-row class="system_form_msg_info_num">
                        <el-col :span="5">
                            <span class="title">手机号码</span>
                        </el-col>
                        <el-col :span="17" :offset="1">
                            <input class="text" type="text" placeholder="注册的手机号码用于登录">
                        </el-col>
                    </el-row>
                    <el-row class="system_form_msg_info_pwd">
                        <el-col :span="6">
                            <span class="title">短信验证码</span>
                        </el-col>
                        <el-col :span="12">
                            <input class="text" type="text" placeholder="请输入密码">
                        </el-col>
                        <el-col :span="6">
                            <span class="l_part">获取验证码</span>
                        </el-col>
                    </el-row>
                    <el-row class="system_form_msg_info_num">
                        <el-col :span="5">
                            <span class="title">设置密码</span>
                        </el-col>
                        <el-col :span="17" :offset="1">
                            <input class="text" type="text" placeholder="6-16位必须包含数字和字母">
                        </el-col>
                    </el-row>
                    <el-row class="system_form_msg_info_num">
                        <el-col :span="5">
                            <span class="title">邮箱地址</span>
                        </el-col>
                        <el-col :span="17" :offset="1">
                            <input class="text" type="text" placeholder="请输入您的邮箱地址（可选填）">
                        </el-col>
                    </el-row>
                </div>
                <div class="system_form_submit">
                    <el-row>
                        <el-col :span="23" :offset="1">
                            <span>注册</span>
                        </el-col>
                    </el-row>
                    <el-row>
                    	<el-col :span="24" class="protocol">注册即表示同意《小方格软件注册协议》</el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
    .system_login {
        width: 100%;
        height: 100vh;
    }
    .system_login .system_form {
        width: 22vw;
        height: 33vw;
        margin: 8vw auto;
    }

    .system_login .system_form .system_form_img {
        width: 16.197vw;
        height: auto;
        margin: 0 auto;
        margin-bottom: 3.2vw;
    }

    .system_login .system_form .system_form_img img {
        width: 16.197vw;
        height: auto;
    }

    .system_login .system_form .system_form_msg {
        width: 20vw;
        height: 27vw;
        padding: 1vw;
        background: #fff;
        border-radius: 10px;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_title {
        width: 20vw;
        height: auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .system_login .system_form .system_form_msg .system_form_msg_title .login {
        font-size: 24px;
        color: #2E82FF;
    }

    .system_login .system_form .system_form_msg .system_form_msg_title .regiter{
        font-size: 16px;
        color: #999;
    }

    /* system_form_msg_info*/
    .system_login .system_form .system_form_msg>.system_form_msg_info {
        width: 20vw;
        height: auto;
        margin: 1vw 0;
    }

    /*数据排列*/
    .system_form_msg_info_num,
    .system_form_msg_info_regcode,
    .system_form_msg_info_pwd {
        border-bottom: 1px solid #666;
        line-height: 2.5vw;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info .el-row {
        margin: 1vw 0;
    }

    /* num */
    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_num .title {
        font-size: 16px;
        color: #333;
        text-align: left;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_num .text {
        line-height: 2.5vw;
        border: none;
        width: 100%;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_num .text::-webkit-input-placeholder {
        line-height: 2.5vw;
        border: none;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_num .l_part {
        font-size: 16px;
        color: #999;
    }

    /* pwd */
    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_pwd .title {
        font-size: 16px;
        color: #333;
        text-align: left;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_pwd .text {
        line-height: 2.5vw;
        border: none;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_pwd .text::-webkit-input-placeholder {
        font-size: 14px;
        color: #999;
        border: none;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_pwd .l_part {
        font-size: 14px;
        color: rgba(46, 130, 255, 1);
    }

    /* regcode */
    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_regcode .title {
        font-size: 16px;
        color: #333;
        text-align: left;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_regcode .text {
        line-height: 2.5vw;
        border: none;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_regcode .text::-webkit-input-placeholder {
        font-size: 14px;
        color: #999;
        border: none;
    }

    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_info_regcode .l_part {
        width: 3.3vw;
    }

    /* forget_pwd */
    .system_login .system_form .system_form_msg>.system_form_msg_info>.system_form_msg_forget_pwd {
        font-size: 16px;
        color: #999;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        line-height: 2.5vw;
    }

    /* system_form_submit */
    .system_login .system_form .system_form_msg>.system_form_submit {
        width: 20vw;
        height: 3.125vw;
        margin-top: 4vw;
    }

    .system_login .system_form .system_form_msg>.system_form_submit>.el-row span {
        display: inline-block;
        width: 17.86vw;
        text-align: center;
        height: 3.125vw;
        line-height: 3.125vw;
        background: rgba(46, 130, 255, 1);
        border-radius: 6px;
        color: #fff;
        margin: 0 auto;
        font-size: 14px;
    }
    .system_login .system_form .system_form_msg>.system_form_submit .protocol{
        font-size: 14px;
        color:#999;
        text-align: center;
        margin-top: 1vw;
    }
</style>