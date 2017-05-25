

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
                         :src="(currentStudent.gender==='female'?'./static/female.jpg':'./static/male.jpg')"
                         alt="">
                </i-col>
                <i-col span="18">
                    <h5 class="name">{{currentStudent.name}}</h5>
                    <div class="collage-wrap">
                        <span class="border-right">{{currentStudent.highest}}</span>
                        <span class="border-right">{{currentStudent.speciality}}</span>
                        <span class="border-right">{{currentStudent.collage}}</span>
                    </div>
                    <div class="detail-wrapper">
                        <div class="detail">
                            <span class="name">性别：</span>
                            <span class="content">{{currentStudent.gender=="male"?'男':'女'}}</span>
                        </div>
                        <div class="detail">
                            <span class="name"> 生日：</span>
                            <span class="content">{{currentStudent.birthday}}</span>
                        </div>
                        <div class="detail">
                            <span class="name"> 电话：</span>
                            <span class="content">{{currentStudent.phone}}</span>
                        </div>
    
                        <div class="detail">
                            <span class="name"> 邮箱：</span>
                            <span class="content">{{currentStudent.email}}</span>
                        </div>
                    </div>
                </i-col>
            </Row>
    
        </div>
    
        <div class="info">
            <h6 class="info-title">自我评价<i class="fa fa-sort-up info-icon"></i> </h6>
            <a class="edit-link"
               @click="routerGo('/basic-info')">点击修改</a>
            <p class="content">{{currentStudent.introduction}}</p>
        </div>
        <div class="info">
            <h6 class="info-title">基本技能<i class="fa fa-sort-up info-icon"></i></h6>
            <a class="edit-link"
               @click="routerGo('/key-info','#skills')">点击修改</a>
            <ul class="info-list">
                <li class="item"
                    v-for="item in currentStudent.skills">
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
                    v-for="item in currentStudent.eduction">
                    <span class="time">{{$index+1+". " + new Date(item.start).toLocaleDateString()+"------------"+new Date(item.end).toLocaleDateString()}}</span>
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
                    v-for="item in currentStudent.prize">
                    <span class="time">{{$index+1+". " + new Date(item.time).toLocaleDateString()}}</span>
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
                    v-for="item in currentStudent.pratice">
                    <span class="time"> {{$index+1+". " + new Date(item.start).toLocaleDateString()+"------------"+new Date(item.end).toLocaleDateString()}}</span>
                    <span class="content">{{item.content}}</span>
                    <p class="mainwork">
                        主要工作： {{item.mainwork}}
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { setSignInModal, routerGo, setCurrentActiveKey, signIn } from '../../vuex/actions.js'
export default {
    data() {
        return {};
    },
    methods: {},
    created() {
        this.setCurrentActiveKey(4);
        if (!this.currentStudent) {
            this.setSignInModal(true);
        } else {
            this.signIn(this.currentStudent.email, this.currentStudent.password);
        }

    },
    vuex: {
        getters: {
            currentStudent: state => state.session
        },
        actions: {
            setSignInModal,
            routerGo,
            setCurrentActiveKey,
            signIn
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


