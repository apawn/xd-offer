<template>
    <div class="home">
        <Row class="search">
            <i-col span="4" class="search-label">
                <label>搜索职位:</label>
            </i-col>
            <i-col span="20">
                <i-input placeholder="搜索的职位或者公司名称.."></i-input>
            </i-col>
        </Row>

        <div class="job-list-wrapper">
            <ul class="job-list">
                <li v-for=" item in companyList">
                    <Card class="job-item">
                        <h4>
                            <a class="job-name" @click="routerGoHere(item.id)"> {{item.name}} </a>
                        </h4>
                        {{item.category}} {{item.nature}} {{item.city}}
                        <p>
                            {{item.description}}
                        </p>
                    </Card>
                </li>
            </ul>
            <Page :current="2" :total="50" simple class="pager"></Page>
        </div>

    </div>
</template>

<script>
    import {routerGo} from '../../vuex/actions.js'
    export default {
        data(){
            return {
                }
        },
        methods:{
            routerGoHere(itemId){
                this.routerGo(`/home/${itemId}`);
            }
        },
        vuex:{
            getters:{
                companyList: state=>state.companyList
            },
            actions:{
                routerGo
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
                /*margin-right:5px;*/
                height: 32px;
                font-size: 25px;
                line-height: 32px;
                /*text-align: left;*/
                color: #e92322;
            }
        }
        .job-list-wrapper {
            margin: 0 auto;
            margin-top: 50px;
            width: 90%;
            overflow: hidden;
            // border-top: 1px solid #e92322;
            background: #fff;
            .job-item {
                margin-top: 20px;
                box-sizing: border-box;
                height: 200px;
                padding: 10px 0 10px 20px;
                background: #f7f7f7;
                // border:1px solid #EDEDED;
                &:hover {
                    // border:1px solid #e92322;
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