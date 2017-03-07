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
                <a v-if="!session" class="option" @click = "signIn('hello',hello)">登录</a>
                <a v-if="!session" class="option">注册</a>
                <a v-if="session" class="option" @click = "signOut()">退出</a>
            </i-col>
        </Row>
    </div>
    <!--<button @click="toggle">click</button>-->
</template>

<script>
    import {signIn , signOut} from '../../vuex/actions.js'
    export default {
        data() {
            return {}
        },
        methods:{
          
        },
        events:{
        },

        vuex:{
            getters:{
                session: state=>state.session
            },

            actions :{
                signIn ,
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
                &:not(:last-child) {
                    border-right: 1px solid rgba(0, 0, 0, 0.3);
                    padding-right: 11px;
                }
            }
        }
        .company-wrapper{
            >.company{
                color:#e92322;
            }
        }
    }
</style>