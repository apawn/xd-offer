<template>
    <div class="header">
        <Row>
            <i-col class="logo-wrapper"
                   span="7"
                   offset="1">
                <a href="">
                    <h1 class="logo"><i class="fa fa-superpowers icon"></i>西电offer</h1>
                </a>
            </i-col>
    
            <i-col class="nav-wrapper"
                   span="16">
                <Menu mode="horizontal"
                      theme="light"
                      :active-key="currentActiveKey">
                    <Menu-item key="1"
                               @click="routerGo('/home')">
                        首页
                    </Menu-item>
                    <Menu-item key="2"
                               @click="routerGo('/meeting-plan')">
                        招聘会安排
                    </Menu-item>
                    <Menu-item key="3"
                               @click="routerGo('/announcements')">
                        公告
                    </Menu-item>
                    <Menu-item key="4"
                               @click="routerGo('/my')">
                        我的主页
                    </Menu-item>
                </Menu>
            </i-col>
        </Row>
    </div>
</template>

<script>
import { routerGo } from '../../vuex/actions.js'
export default {
    data() {
        return {
            light: 'light'
        };
    },
    methods: {

    },

    created() {
    },
    vuex: {
        getters: {
            currentActiveKey: state => state.currentActiveKey
        },
        actions: {
            routerGo
        }
    }


}
</script>

<style lang="less">
.header {
    position: relative;
    height: 80px;
    width: 100%;
    overflow: hidden;
    background-color: #fafafa;
    line-height: 80px;
    font-size: 0;
    .logo-wrapper {
        .logo {
            display: inline;
            font-family: "Hiragino Sans GB", "Microsoft Yahei", SimSun, Arial, "Helvetica Neue", Helvetica;
            font-size: 29px;
            font-weight: 400;
            .icon {
                margin-right: 6px;
            }
        }
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        left: 0;
        bottom: 0;
        display: block;
        background: #d7dde4;
    }
}
</style>