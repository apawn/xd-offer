<template>
    <div class="topbar">
        <Row>
            <i-col span="6"
                   class="company-wrapper">
                <a class="company">我要招聘</a>
            </i-col>
    
            <i-col span="18"
                   class="option-container">
                <a v-if="session"
                   class="option"
                   @click="routerGo('/invations')">收到邀请</a>
                <a v-if="session"
                   class="option"
                   @click="routerGo('/deliveried')">投递记录</a>
                <a v-if="session"
                   class="option">{{session.name}}</a>
                <a v-if="!session"
                   class="option"
                   @click="signPop()">欢迎，请登录</a>
                <a v-if="!session"
                   class="option"
                   @click="routerGo('/sign-up')">注册</a>
                <a v-if="session"
                   class="option"
                   @click="signOut()">退出</a>
            </i-col>
            <!--登录对话框       -->
            <Modal :visible="signInModal"
                   width="350"
                   :mask-closable="false"
                   @on-ok="signInOk"
                   @on-cancel="signInCancel">
                <p slot="header"
                   class="signin-title">
                    <span class="fa fa-user-circle-o"></span>
                    <span>登录</span>
                </p>
                <div class="form">
                    <i-form :label-width="80"
                            :model="formInline"
                            :rules="ruleInline">
                        <Form-item label="邮箱"
                                   prop="user">
                            <i-input type="text"
                                     :value.sync="formInline.user"
                                     placeholder="请输入">
                            </i-input>
                        </Form-item>
                        <Form-item label="密码"
                                   prop="password">
                            <i-input :value.sync="formInline.password"
                                     type="password"
                                     placeholder="请输入">
                            </i-input>
                        </Form-item>
                        <i-form>
                </div>
    
                <div slot="footer"
                     class="signin-footer">
                    <p class="forget">
                        <a @click="routerGo('./forget')">忘记密码</a>
                    </p>
                    <i-button type="success"
                              size="large"
                              long
                              :loading="modal_loading"
                              @click="signInClick">
                        登录
                    </i-button>
                </div>
            </Modal>
        </Row>
    </div>
</template>

<script>
import {
    signIn, signOut, routerGo, setSignInModal, studentGetInvitations,
    studentHasDeliveried
} from '../../vuex/actions.js'
export default {
    data() {
        return {
            modal_loading: false,
            formInline: {
                user: "test@qq.com",
                password: "lllllll"
            },
            ruleInline: {
                user: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                ]
            },
        }
    },
    methods: {
        signPop() {
            this.setSignInModal(true);
        },
        signInClick() {

            this.modal_loading = true;
            this.signInActions(this.formInline.user, this.formInline.password).then((res) => {
                if (res.ok) {
                    this.$Message.success('登录成功');
                    this.setSignInModal(false);
                    this.studentGetInvitations(this.formInline.user);
                    this.studentHasDeliveried(this.formInline.user);
                } else {
                    this.$Message.error('登录失败');
                }
                this.modal_loading = false;
            }).catch(err => {
                this.modal_loading = false;
            })
        },
        signInOk() {
        },
        signInCancel() {
            this.setSignInModal(false);
        }
    },

    vuex: {
        getters: {
            signInModal: state => state.signInModal,
            session: state => state.session
        },

        actions: {
            routerGo,
            signInActions: signIn,
            signOut,
            setSignInModal,
            studentGetInvitations,
            studentHasDeliveried

        }
    }
}
</script>

<style lang="less">
.topbar {
    height: 30px;
    width: 100%;
    background: #fff;
    line-height: 30px;
    color: #000;
    clear: both;
    padding: 0 50px;
    .company-wrapper {
        >.company {
            color: #e92322;
        }
    }
    .option-container {
        text-align: right;
        >.option {
            color: #111;
            margin-left: 8px;
            &:not(:last-child) {
                border-right: 1px solid rgba(0, 0, 0, 0.3);
                padding-right: 11px;
            }
        }
    }
    .signin-title {
        font-size: 17px;
        text-align: center;
        color: #5cadff;
    }
    .ivu-modal-body {
        padding: 0 16px 0 0;
        .form {
            margin-top: 25px;
        }
    }
    .signin-footer {
        margin-top: 0px;
        margin-bottom: 10px;
        .forget {
            text-align: right;
            margin-bottom: 10px;
        }
    }
}
</style>