<template>
    <div class="topbar container">
        <Row>
            <i-col span="12">888</i-col>
            <i-col span="12" class="option-container">
                <a v-if="session" class="option sign-in">消息</a>
                <a v-if="session" class="option sign-in">我的简历</a>
                <a v-if="session" class="option sign-in">投递记录</a>
                <a v-if="session" class="option sign-in">胡飞</a>
                <a v-if="!session" class="option sign-in">登录</a>
                <a v-if="!session" class="option sing-up">注册</a>
                <a v-if="session" class="option sing-up">退出</a>
            </i-col>
        </Row>
    </div>
    <button @click="toggle">click</button>
</template>

<script>
    export default {
        data() {
            return {
                session:false
            }
        },
        methods:{
            toggle() {
                this.session = !this.session;
            }
        },


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
                color: #333;
                margin-left: 8px;
                &:not(:last-child) {
                    border-right: 1px solid rgba(0, 0, 0, 0.3);
                    padding-right: 11px;
                }
            }
        }
    }
</style>