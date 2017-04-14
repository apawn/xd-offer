<template>
    <div class="forget">
        <h4 class="title">邮箱验证找回密码</h4>
    
        <i-form :model="formInline"
                :rules="rulerInline"
                :label-width="100">
    
            <Form-item label="填写邮箱"
                       prop="email">
                <i-input :value.sync="formInline.email"
                         placeholder="example@example.com">
                </i-input>
            </Form-item>
    
            <Form-item>
                <i-button @click="getCode()"
                          :type="hasSendCode?'success':'primary'"
                          :disabled="hasSendCode">{{hasSendCode?'验证码已经发送':'发送验证码'}}
                </i-button>
            </Form-item>
    
            <Form-item label="验证码"
                       prop="vertifyCode">
                <i-input :value.sync="formInline.vertifyCode"
                         placeholder="请输入">
    
                </i-input>
            </Form-item>
    
            <Form-item label="填写密码"
                       type="password"
                       prop="password">
                <i-input :value.sync="formInline.password"
                         placeholder="请输入">
                </i-input>
            </Form-item>
    
            <Form-item label="重复密码"
                       type="password"
                       prop="confirmPassword">
                <i-input :value.sync="formInline.confirmPassword"
                         placeholder="请输入">
                </i-input>
            </Form-item>
            <Form-item>
                <i-button type="primary"
                          @click="signUp()">修改密码</i-button>
            </Form-item>
        </i-form>
    
    </div>
</template>

<script></script>

<style lang="less">
.forget {
    margin: 0 auto;
    margin-top: 30px;
    width: 50%;
    min-width: 300px;
    >.title {
        margin-bottom: 20px;
        margin-left: 80px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
        font-size: 24px;
        font-weight: 300;
    }
}
</style>