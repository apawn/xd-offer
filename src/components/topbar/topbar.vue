<template>
    <div class="topbar container">
        <Row>
            <i-col span="6" class="company-wrapper">
                <a class="company">我要招聘</a>
            </i-col>

            <i-col span="18" class="option-container">
                <a v-if="session" class="option">消息</a>
                <a v-if="session" class="option">我的简历</a>
                <a v-if="session" class="option">投递记录</a>
                <a v-if="session" class="option">胡飞</a>
                <a v-if="!session" class="option" @click="signPop()">登录</a>
                <a v-if="!session" class="option" @click="routerGo('/sign-up')">注册</a>
                <a v-if="session" class="option" @click="signOut()">退出</a>
            </i-col>
            <!--登录对话框       -->
            <Modal :visible.sync="signInModal" width="350" :mask-closable="false" @on-ok="signInOk" @on-cancel="signInCancel">
                <p slot="header" class="signin-title">
                    <span class="fa fa-user-circle-o"></span>
                    <span>登录</span>
                </p>
                <div class="form">
                    <i-form :label-width="80" :model="formInline" :rules="ruleInline">
                        <Form-item label="用户名" prop="user">
                            <i-input type="text" :value.sync="formInline.user" placeholder="请输入">
                            </i-input>
                        </Form-item>
                        <Form-item type="password" label="密码" prop="password">
                            <i-input :value.sync="formInline.password" placeholder="请输入">
                            </i-input>
                        </Form-item>
                        <i-form>
                </div>

                <div slot="footer" class="signin-footer">
                    <p class="forget">
                        <a @click="routerGo('./forget')">忘记密码</a>
                    </p>
                    <i-button type="success" size="large" long :loading="modal_loading" @click="signInHere">
                        登录
                    </i-button>
                </div>
            </Modal>
        </Row>
    </div>
</template>

<script>
    import {signIn , signOut,routerGo} from '../../vuex/actions.js'
    export default {
        data() {
            return {
             modal_loading:false,
             formInline:{
                 user:"",
                  password:""
             },
             ruleInline:{
                 user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                 password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                    ]
             },
                signInModal:false
            }
        },
        methods:{
          signPop(){
              this.signInModal = true;
          },
          signInHere() {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.signInModal = false;
                    this.$Message.success('删除成功');
                }, 2000);
          },
          signInOk(){

          },
          signInCancel(){
          }
        },

        vuex:{
            getters:{
                session: state=>state.session
            },

            actions :{
                routerGo,
                signInActions:signIn ,
                signOut
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
        &.container {
            padding: 0 50px;
        }
        .option-container {
            text-align: right;
            > .option {
                color: #111;
                margin-left: 8px;
                &:not(: last-child) {
                    border-right: 1px solid rgba(0, 0, 0, 0.3);
                    padding-right: 11px;
                }
            }
        }
        .company-wrapper {
            >.company {
                color: #e92322;
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