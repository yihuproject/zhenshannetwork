<template>
    <div class="system_login">
        <div class="system_form">
            <div class="system_form_img"><img src="/static/images/system/logo.png"></div>
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
                            <input class="text" type="text" placeholder="请输入手机号码">
                        </el-col>
                    </el-row>
                    <el-row class="system_form_msg_info_pwd">
                        <el-col :span="5">
                            <span class="title">登录密码</span>
                        </el-col>
                        <el-col :span="12" :offset="1">
                            <input class="text" type="text" placeholder="请输入密码">
                        </el-col>
                        <el-col :span="6">
                            <span class="l_part">获取验证码</span>
                        </el-col>
                    </el-row>
                    <el-row class="system_form_msg_info_regcode">
                        <el-col :span="6">
                            <span class="title">图片验证码</span>
                        </el-col>
                        <el-col :span="12">
                            <input class="text" type="text" placeholder="请输入右边验证码">
                        </el-col>
                        <el-col :span="6">
                            <img class="l_part" src="/static/images/system/logo.png">
                        </el-col>
                    </el-row>
                    <div class="system_form_msg_forget_pwd">
                        <span>忘记密码？</span>
                    </div>
                </div>
                <div class="system_form_submit">
                    <span>登录</span>
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
        font-family: "microsoft yahei";
    }
.system_form {
        width: 400px;
        height: 700px;
        margin: 0 auto;
        margin-top: 5%;
    }

.system_form_img {
        width: 311px;
        height: auto;
        margin: 0 auto;
        margin-bottom: 60px;
    }

.system_form_img img {
        width: 311px;
        height: auto;
    }

.system_form_msg {
        width: 343px;
        height: 465px;
        padding: 18px;
        background: #fff;
        border-radius: 10px;
        margin: 0 auto;
    }

.system_form_msg_title {
        width: 343px;
        height: auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

.login {
        font-size: 24px;
        color: #2E82FF;
    }

.register {
        font-size: 16px;
        color: #999;
        text-align: right;
    }

    /* system_form_msg_info*/
.system_form_msg_info {
        width: 343px;
        height: auto;
        margin-top:70px;
    }

    /*数据排列*/
    .system_form_msg_info_num,
    .system_form_msg_info_regcode,
    .system_form_msg_info_pwd {
        border-bottom: 1px solid #e5e5e5;
        line-height: 20px;
        margin: 20px 0;
    }

.system_form_msg_info .el-row {
        margin-top:35px;
    }

    /* num */
.system_form_msg_info_num .title {
        font-size: 16px;
        color: #333;
        text-align: left;
    }

.system_form_msg_info_num .text::-webkit-input-placeholder {
        line-height: 60px;
        border: none;
        color: #999999;
    }

.system_form_msg_info_num .l_part {
        font-size: 16px;
        color: #999;
    }

    /* pwd */
.system_form_msg_info_pwd .title {
        font-size: 16px;
        color: #333;
        text-align: left;
    }
    
.system_form_msg_info_pwd .text::-webkit-input-placeholder {
        font-size: 14px;
        color: #999;
        border: none;
    }

.system_form_msg_info_pwd .l_part {
        font-size: 14px;
        color: rgba(46, 130, 255, 1);
        text-align: right;
        display: inline-block;
        width: 80px;
    }

    /* regcode */
.system_form_msg_info_regcode .title {
        font-size: 16px;
        color: #333;
        text-align: left;
    }

.system_form_msg_info_regcode .text::-webkit-input-placeholder {
        font-size: 14px;
        color: #999;
        border: none;
    }

.system_form_msg_info_regcode .l_part {
        width: 80px;
    }

    /* forget_pwd */
.system_form_msg_forget_pwd {
        font-size: 16px;
        color: #999;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 85px;
    }

    /* system_form_submit */
.system_form_submit {
        width: 343px;
        height: 60px;
    }

.system_form_submit span {
        display: inline-block;
        width: 343px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        background: rgba(46, 130, 255, 1);
        border-radius: 6px;
        color: #fff;
        margin: 0 auto;
        font-size: 18px;
    }
</style>
