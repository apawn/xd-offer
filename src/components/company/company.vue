<template>
    <div class="company">
        <h1 class="name"> {{company.name}} </h1>
        <div class="option">
            <span class="border-right"> <i class="fa fa-map-marker"></i>  {{company.location}}</span>
            <span>招聘人数 <i class="number">{{company.number}}</i> 个</span>
        </div>
        <h4 class="border-left">公司介绍 </h4>
        <p class="desc"> {{company.desc}}
        </p>
        <div class="position">
            <h4 v-if="company.position"
                class="title border-left">在招职位 <span class="number">{{company.position.length}}</span>个 </h4>
            <ul class="list">
                <li v-for="item in company.position"
                    class="item">
                    <Card>
                        <Row>
                            <i-col span="18">
                                <h6 class="name">{{item.name}}</h6>
                                <span class="salary">月薪:<i>{{item.salary}}</i> </span>
                            </i-col>
                            <i-col span="6">
                                <i-button @click="deliver(item.name)"
                                          :type="hasDelivered(item.name).type"
                                          :disabled="hasDelivered(item.name).disabled">{{hasDelivered(item.name).content}}</i-button>
                            </i-col>
                        </Row>
                        <p class="job"
                           v-html="item.job"></p>
                    </Card>
                </li>
            </ul>
        </div>
        <div class="contact">
            <h4 class="border-left">联系方式</h4>
            <div class="content"> <i class="fa fa-mobile-phone"></i> 联系电话 <span class="phone border-right">{{company.phone}}</span> <i class="fa fa-envelope-o fa-fw"></i> 邮箱 <span class="email">{{company.email}}</span>
            </div>
        </div>
    
        <div class="comments">
            <h4 class="border-left">公司评价</h4>
            <ul class="list">
                <li v-for="item in company.comments"
                    class="item">
                    <Row>
                        <i-col span="18">
                            <p class="content">
                                {{item.content}}
                            </p>
                        </i-col>
                        <i-col span="6">
                            <p class="time">{{item.time}}</p>
                        </i-col>
                    </Row>
    
                </li>
            </ul>
            <div class="comment">
                <h4 class="border-left">我的评价</h4>
                <textarea class="mycomment"
                          v-model="content">
                </textarea>
                <i-button type="success"
                          @click="comment()">提交评价</i-button>
            </div>
        </div>
    
    </div>
</template>


<script>
import { getCurrentCompanyDetail, commentCompany, setSignInModal, deliveryAction, setCurrentActiveKey } from '../../vuex/actions.js'

export default {
    data() {
        return {
            content: "",
        }
    },
    methods: {
        comment() {
            if (this.user) {
                this.commentCompany(this.company.email, this.content).then(res => {
                    this.$Message.success('评论成功');
                    this.content = "";
                })
            } else {
                this.setSignInModal(true);
                return;
            }
        },
        deliver(position) {
            if (this.user) {
                this.deliveryAction(this.user.email, this.company.email, position).then(res => {
                    this.$Message.success('投递成功');
                }).catch(err => {
                    this.$Message.success('投递失败');
                })
            } else {
                this.setSignInModal(true);
                return;
            }
        },
        hasDelivered(position) {
            if (!this.user) {
                return {
                    type: 'success',
                    content: '请登录',
                    disable: true
                }
            }
            var hasDeliveried = this.user.resumeDelivered,
                email = this.company.email;
            for (var i = 0; i < hasDeliveried.length; i++) {
                var item = hasDeliveried[i];
                // console.log(item);
                console.log(position);
                console.log("-----");
                console.log(email);
                if (item.email == email && item.position == position) {
                    return {
                        type: 'success',
                        content: '已经投递',
                        disabled: true
                    }
                }
            }

            return {
                type: 'success',
                content: '现在投递',
                disable: false
            };
        },
    },

    created() {
        this.setCurrentActiveKey(1);
        if (this.company.name) {
            document.title = this.company.name;
        } else {
            console.log(this.$route.params.companyname);
            this.getCurrentCompanyDetail(this.$route.params.companyname);
        }
    },
    vuex: {
        getters: {
            user: state => state.session,
            company: state => state.currentCompany
        },
        actions: {
            getCurrentCompanyDetail,
            commentCompany,
            setSignInModal,
            deliveryAction,
            setCurrentActiveKey
        }
    }
}

</script>

<style lang="less">
.company {
    padding: 30px 100px;
    margin: 0 auto;
    width: 90%;
    .name {
        font-size: 24px;
        font-weight: 300;
    }
    .option {
        margin-top: 10px;
        .number {
            color: #39f;
            font-style: italic;
        }
    }
    .border-right {
        margin-right: 10px;
        border-right: 1px solid #ddd;
        padding-right: 14px;
    }
    .border-left {
        margin-top: 20px;
        border-left: 3px solid #39f;
        padding: 0 6px;
        font-size: 18px;
        font-weight: 300;
    }
    .desc {
        margin-top: 15px;
    }
    .position {
        margin-top: 15px;
        .list {
            margin-top: 15px;
            .item {
                margin-top: 15px;
                .name {
                    font-size: 15px;
                    font-weight: 300;
                    color: #39f;
                }
                .job {
                    margin-top: 12px;
                }
            }
        }
    }
    .contact {
        .content {
            margin-top: 15px;
            .email,
            .phone {
                color: #39f;
            }
        }
    }
    .comments {
        margin-top: 15px;
        border-top: 1px solid #ccc;
        padding-top: 15px;
        .list {
            margin-top: 15px;
            .item {
                margin-top: 20px;
            }
        }
        .comment {
            .mycomment {
                margin-top: 15px;
                margin-bottom: 15px;
                padding: 15px;
                width: 100%;
                height: 150px;
            }
        }
    }
}
</style>



