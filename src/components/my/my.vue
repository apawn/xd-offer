

<template>
    <div class="my"
         v-if="currentStudent">
        <div class="tip">
            <span><i class="fa fa-envira"></i> 完善的简历能获得更多的面试机会哟</span>
        </div>
        <div class="avator-name">
            <Row>
                <i-col span="6">
                    <img class="avator"
                         :src="(gender==='女'?'./static/female.jpg':'./static/male.jpg')"
                         alt="">
                </i-col>
                <i-col span="18">
                    <h5 class="name">{{name}}</h5>
                    <div class="collage-wrap">
                        <span class="border-right">{{highest}}</span>
                        <span class="border-right">{{speciality}}</span>
                        <span class="border-right">{{collage}}</span>
                    </div>
                    <div class="detail-wrapper">
                        <div class="detail">
                            <span class="name">性别：</span>
                            <span class="content">{{gender}}</span>
                        </div>
                        <div class="detail">
                            <span class="name"> 生日：</span>
                            <span class="content">{{birthday}}</span>
                        </div>
                        <div class="detail">
                            <span class="name"> 电话：</span>
                            <span class="content">{{phone}}</span>
                        </div>
    
                        <div class="detail">
                            <span class="name"> 邮箱：</span>
                            <span class="content">{{email}}</span>
                        </div>
                    </div>
                </i-col>
            </Row>
    
        </div>
    
        <div class="info">
            <h6 class="info-title">自我评价<i class="fa fa-sort-up info-icon"></i> </h6>
            <a class="edit-link"
               @click="routerGo('/basic-info')">点击修改</a>
            <p class="content">{{introduction}}</p>
        </div>
        <div class="info">
            <h6 class="info-title">基本技能<i class="fa fa-sort-up info-icon"></i></h6>
            <a class="edit-link"
               @click="routerGo('/key-info','#skills')">点击修改</a>
            <ul class="info-list">
                <li class="item"
                    v-for="item in skills">
                    {{$index+1+". " + item}}
                </li>
            </ul>
        </div>
        <div class="info">
            <h6 class="info-title">教育经历<i class="fa fa-sort-up info-icon"></i> </h6>
            <a class="edit-link"
               @click="routerGo('/key-info','#eduction')">点击修改</a>
            <ul class="info-list">
                <li class="item"
                    v-for="item in eduction">
                    <span class="time">{{$index+1+". " + item.start+"------------"+item.end}}</span>
                    <span class="content"> {{item.content}}</span>
                </li>
            </ul>
        </div>
        <div class="info">
            <h6 class="info-title">获奖情况<i class="fa fa-sort-up info-icon"></i> </h6>
            <a class="edit-link"
               @click="routerGo('/key-info','#prize')">点击修改</a>
            <ul class="info-list">
                <li class="item"
                    v-for="item in prizes">
                    <span class="time">{{$index+1+". " + item.time}}</span>
                    <span class="content">{{item.content}}</span>
                </li>
            </ul>
        </div>
        <div class="info">
            <h6 class="info-title">实习经历<i class="fa fa-sort-up info-icon"></i> </h6>
            <a class="edit-link"
               @click="routerGo('/key-info','#pratice')">点击修改</a>
            <ul class="info-list">
                <li class="item"
                    v-for="item in experience">
                    <span class="time"> {{$index+1+". " + item.start+"------------"+item.end}}</span>
                    <span class="content">{{item.content}}</span>
                    <p class="mainwork">
                        主要工作： {{item.mainWork}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { setSignInModal, routerGo } from '../../vuex/actions.js'
export default {
    data() {
        return {
            name: 'pawn',
            birthday: '1994-05-04',
            gender: '女',
            email: '888@qq.com',
            phone: '88888888',
            collage: '软件学院',
            speciality: '软件工程',
            highest: '本科',
            introduction: `认真负责，踏实稳重，具有很强的团队合作精神； 学习：求知欲强，勤奋好学，学习能力强； 生活：热爱生活，为人正直善良，积极进取，敢于挑战自我。 `,
            skills: ['精通JavaScript', '熟悉常用算法和数据结构'],
            // 获奖情况
            prizes: [{
                content: '荣获校级“优秀党员” 、 “三好学生”称号', time: '2015-03-08'
            }, {
                content: '西安电子科技大学学业奖学金二等奖学金” 、 “三好学生”称号', time: '2014-03-05'
            }],
            resumePath: '555555',
            eduction: [{
                content: '西安电子科技大学通信与信息系统本科  ',
                start: '2013-08-24',
                end: '2017-07-01'
            }],
            experience: [{
                content: '“木上花开”项目组主要负责人',
                start: '2014-09-05',
                end: '2015-06-15',
                mainWork: `户县调研，在与户县李氏木刻刘鹏鹂深入沟通的基础上，确定项目的主要发展方向， 设计宣传单，进入西安各大高校进行宣传活动，扩大了项目影响力和活动的传播度 。撰写详实的活动文案，策划组织木刻体验活动，实现项目组的首次盈利`,
            }]
        };
    },
    methods: {},
    created() {

        if (!this.currentStudent) {
            this.setSignInModal(true);
        }
    },
    vuex: {
        getters: {
            currentStudent: state => state.session
        },
        actions: {
            setSignInModal,
            routerGo
        }
    }
}

</script>

<style lang="less">
.my {
    margin: 0 auto;
    margin-top: 20px;
    width: 60%;
    color: #333;
    >.tip {
        border: 1px solid #f4d130;
        padding-left: 8px;
        background: #fffceb;
        height: 43px;
        line-height: 43px;
    }
    >.avator-name {
        margin-top: 20px;
        .avator {
            width: 180px;
            border: 1px solid #e5e5e5;
        }
        .name {
            font-size: 28px;
        }
        .collage-wrap {
            margin-top: 5px;
            .border-right {
                &:not(:last-child) {
                    padding-right: 10px;
                    border-right: 1px solid rgba(0, 0, 0, 0.3);
                }
                &:not(:first-child) {
                    margin-left: 7px;
                }
            }
        }
        .detail-wrapper {
            margin-top: 5px;
            .detail {
                height: 22px;
                >.name {
                    font-size: 14px;
                    color: #333;
                }
                >.content {
                    font-size: 14px;
                    margin-left: 20px;
                    color: #666;
                }
            }
        }
    }
    .info {
        margin-top: 20px;
        background: #f8f8f8;
        >.info-title {
            position: relative;
            margin-top: -5px;
            margin-left: -2px;
            width: 120px;
            height: auto;
            padding-right: 2px;
            display: inline-block;
            background: #555b65;
            line-height: 34px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: normal;
            >.info-icon {
                position: absolute;
                top: -1px;
                right: -5px;
                width: 10px;
                color: #555b65;
            }
        }
        >.edit-link {
            float: right;
            margin-right: 20px;
            margin-top: 3px;
            text-align: right;
            color: #7ab1cc;
        }
        >.content {
            padding: 15px 20px 20px 20px;
            text-indent: 8px;
        }
        >.info-list {
            padding: 15px 20px 20px 20px;
            >.item {
                >.time {
                    display: inline-block;
                    width: 300px;
                }
                >.content {
                    margin-left: 10px;
                }
                >.mainwork {
                    padding: 10px 0;
                }
            }
        }
    }
}
</style>


