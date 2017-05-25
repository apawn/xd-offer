<template>
    <div class="home">
        <Row class="search">
            <i-col span="4"
                   class="search-label">
                <label>搜索职位:</label>
            </i-col>
            <i-col span="20">
                <i-input placeholder="搜索的职位或者公司名称.."></i-input>
            </i-col>
        </Row>
    
        <div class="job-list-wrapper">
            <ul class="job-list">
                <li v-for=" item in currentCompanies">
                    <Card class="job-item">
                        <h4><a class="name" @click="companyDetail(item.name)"> {{item.name}}</a></h4>
                        <div class="location">
                            <span class="border-right">在招职位<i class="italic">{{item.position.length}}</i>个</span>
                            <span class="border-right">招聘人数<i class="italic">{{item.number}}</i>个</span>
                            <span class="fa fa-map-marker"></span> {{item.location}}
    
                        </div>
                        <p class="desc">
                            {{item.desc}}
                        </p>
                    </Card>
                </li>
            </ul>
            <Page :current="currentPage"
                  :total="totalCount"
                  :page-size="7"
                  @on-change="pageChange"
                  simple
                  class="pager"></Page>
        </div>
    
    </div>
</template>

<script>
import { routerGo, getCurrentPage, getCompaniesCount, getCurrentCompanyDetail, setCurrentActiveKey } from '../../vuex/actions.js'
export default {
    data() {
        return {
        }
    },
    methods: {
        companyDetail(name) {
            this.getCurrentCompanyDetail(name).then(res => {
                this.routerGo(`/home/${name}`);
            }).catch(err => {
                return;
            })

        },
        pageChange(currentPage) {
            this.getCurrentPage(currentPage);
        }
    },

    created() {
        this.setCurrentActiveKey(1);
        this.getCompaniesCount().then(res => {
            if (res.count > 0) {
                this.getCurrentPage(1).catch(err => {
                    console.log(err);
                    return;
                })
            }
        }).catch(err => {
            console.log(err);
            return;
        })


    },
    vuex: {
        getters: {
            totalCount: state => state.totalCount,
            currentPage: state => state.currentPage,
            currentCompanies: state => state.currentCompanies
        },
        actions: {
            routerGo,
            getCurrentPage,
            getCompaniesCount,
            getCurrentCompanyDetail,
            setCurrentActiveKey
        }
    }

}

</script>

<style lang="less">
.home {
    padding: 30px 100px;
    .search {
        margin: 0 auto;
        width: 60%;
        .search-label {
            height: 32px;
            font-size: 25px;
            line-height: 32px;
            color: #e92322;
        }
    }
    .job-list-wrapper {
        margin: 0 auto;
        margin-top: 50px;
        width: 90%;
        overflow: hidden;
        background: #ececec;
        .job-item {
            margin-top: 20px;
            box-sizing: border-box;
            padding: 0px 15px 5px 15px;
            background: #f7f7f7;
            .name {
                font-size: 20px;
                font-weight: 400;
            }
            .location {
                margin-top: 5px;
                font-size: 15px;
                .border-right {
                    margin-right: 10px;
                    border-right: 1px solid #ddd;
                    padding-right: 14px;
                    .italic {
                        margin: 0 5px;
                        font-style: italic;
                        color: #39f;
                    }
                }
            }
            .desc {
                margin-top: 5px;
                font-size: 14px;
                text-indent: 24px;
            }
        }
        .pager {
            margin-top: 30px;
            margin-bottom: 100px;
            display: flex;
            justify-content: center;
        }
    }
}
</style>