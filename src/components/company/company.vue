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
                                <i-button type="primary">投递简历</i-button>
                            </i-col>
                        </Row>
                        <p class="job">{{item.job}}</p>
                    </Card>
                </li>
            </ul>
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
import { getCurrentCompanyDetail, commentCompany, setSignInModal } from '../../vuex/actions.js'

export default {
    data() {
        return {
            content: ""
        }
    },
    methods: {
        comment() {
            if (this.user) {
                this.commentCompany(this.company.email, this.content);
            } else {
                this.setSignInModal(true);
                return;
            }
        }
    },
    created() {
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
            setSignInModal
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
        .border-right {
            margin-right: 10px;
            border-right: 1px solid #ddd;
            padding-right: 14px;
        }
        .number {
            color: #39f;
            font-style: italic;
        }
    }
    .border-left {
        margin-top: 15px;
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



