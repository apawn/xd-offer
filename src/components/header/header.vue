<template>
    <div class="header">
        <Row>
            <!--logo-->
            <i-col class="logo-wrapper" span="7" offset="1">
                <a href="">
                    <h1 class="logo"><i class="fa fa-superpowers icon"></i>西电offer</h1>
                </a>
            </i-col>

            <i-col class="nav-wrapper" span="16">
                <Menu mode="horizontal" :theme="light" active-key="1">
                    <Menu-item key="1">
                        <!--<Icon type="ios-paper"></Icon>-->
                        首页
                    </Menu-item>
                     <Menu-item key="2">
                        <!--<Icon type="ios-people"></Icon>-->
                        招聘会安排
                    </Menu-item>
                     <Menu-item key="3">
                        <!--<Icon type="ios-people"></Icon>-->
                        公告
                    </Menu-item>
                     <Menu-item key="4">
                        <!--<Icon type="ios-people"></Icon>-->
                        我的主页
                    </Menu-item>
                </Menu>
            </i-col>
        </Row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                light:'light'
            };
        },
        methods:{

        },  

        created() {

        }

    }
</script>

<style lang="less">
    .header {
        position: relative;
        height: 80px;
        width: 100%;
        overflow:hidden;
        background-color: #fafafa;
        line-height: 80px;
        
        .logo-wrapper {
            .logo {
                display: inline;
                font-family: "Hiragino Sans GB", "Microsoft Yahei", SimSun, Arial, "Helvetica Neue", Helvetica;
                letter-spacing: 1px;
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