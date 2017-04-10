<template>
    <div class="sign-up">
    
        <i-form :model="formInline"
                :rules="rulerInline"
                :label-width="100">
            <Form-item>
                <span class="title"><i class="fa fa-envelope-o fa-fw"></i> 邮箱注册</span>
            </Form-item>
            <Form-item label="填写常用邮箱"
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
                          @click="signUp()">注册</i-button>
            </Form-item>
        </i-form>
    </div>
</template>

<script>
import { getVertifyCodeAction, signUpAction } from '../../vuex/actions'

export default {
    data() {

        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请确认密码'));
            } else if (value !== this.formInline.password) {
                callback(new Error('两次密码不一致!'));
            } else {
                callback();
            }
        }
        return {
            hasSendCode: false,
            formInline: {
                email: "888",
                vertifyCode: "",
                password: ""
            },
            rulerInline: {
                email: [
                    { required: true, message: '请填写邮箱', trigger: 'blur' }
                ],
                vertifyCode: [
                    { required: true, message: '请填写邮箱验证码', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                ],
                confirmPassword: [
                    { required: true, validator: validatePassCheck, trigger: 'blur' }
                ]
            }

        };
    },

    methods: {
        getCode() {
            var email = this.formInline.email;
            if (!email)
                return "";
            this.getVertifyCodeAction(email).then(res => {
                console.log(res);
                if (res.ok) {
                    this.hasSendCode = true;
                }
            }).catch(err => {
                this.hasSendCode = false;
            })
        },
        signUp() {
            var email = this.formInline.email,
                password = this.formInline.password,
                confirmPassword = this.formInline.confirmPassword,
                vertifyCode = this.forminline.vertifyVode;
            if (!email || !password | !vertifyCode || !confirmPassword || password !== confirmPassword) {
                return;
            }
            this.getVertifyCodeAction(email, password, vertifyCode).then(res => {

            }).catch(err => {

            })
        }
    },
    vuex: {
        getters: {
            // user: state => state.session
        },
        actions: {
            getVertifyCodeAction,
            signUpAction
        }
    }
}

</script>

<style lang="less">
.sign-up {
    margin: 0 auto;
    margin-top: 50px;
    width: 40%;
    min-width: 300px;
    .title {
        font-size: 18px;
    }
}
</style>