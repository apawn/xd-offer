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
    
            <Form-item label="姓名"
                       prop="name">
                <i-input :value.sync="formInline.name"
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
import { getVertifyCodeAction, signUpAction, routerGo, signIn, setCurrentActiveKey } from '../../vuex/actions'

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
                name: "pawn",
                email: "812647756@qq.com",
                vertifyCode: "",
                password: "lllllll",
                confirmPassword: 'lllllll'
            },
            rulerInline: {
                email: [
                    { required: true, message: '请填写邮箱', trigger: 'blur' }
                ],
                name: [
                    { required: true, message: "请填写姓名", trigger: 'blur' }
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
                console.log(err);
                this.hasSendCode = false;
            })
        },
        signUp() {
            var name = this.formInline.name,
                email = this.formInline.email,
                password = this.formInline.password,
                confirmPassword = this.formInline.confirmPassword,
                vertifyCode = this.formInline.vertifyCode;
            if (!name || !email || !password | !vertifyCode || !confirmPassword || password !== confirmPassword) {
                return;
            }  // name, email, code, password
            this.signUpAction(name, email, vertifyCode, password).then(res => {
                console.log(res);

                switch (res.ok) {
                    case 0: {
                        this.$Message.success('验证码错误');
                        return;
                    }
                    case -1: {
                        this.$Message.success('出错了，请重试');
                        return;
                    }
                    case 1: {
                        this.$Message.success('该邮箱已经被注册');
                        return;
                    }
                    case 2: {
                        // 登录
                        this.signIn(email, password).then(res => {
                            this.routerGo('basic-info');
                        }).catch(err => {
                            this.routerGo('basic-info');
                        })
                        // 跳转

                        return;
                    }
                }

            }).catch(err => {
                console.log(err);
                this.$Message.success('出错了，请重试');
                return;
            })
        }
    },
    created() {
        this.setCurrentActiveKey("");
    },
    vuex: {
        getters: {
            // user: state => state.session
        },
        actions: {
            getVertifyCodeAction,
            signUpAction,
            signIn,
            routerGo,
            setCurrentActiveKey
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