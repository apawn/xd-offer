<template>
    <div class="announcements">
        <ul>
            <li v-for="item in allNews">
                <Row>
                    <i-col span="18"
                           class="content">
                        <a @click="itemClick(item)">{{item.header}}</a>
                    </i-col>
                    <i-col span="6"
                           class="time">
                        {{item.time}}
                    </i-col>
                </Row>
            </li>
        </ul>
    </div>
</template>

<script>
// 在这里下载所有的消息
import { routerGo, setCurrentActiveKey, setCurrentNews, getAllNews } from '../../vuex/actions.js'
export default {
    methods: {
        itemClick(item) {
            console.log(item.id);
            this.routerGo(`/announcements/${item.id}`);
            this.setCurrentNews(item)
        }
    },
    created() {
        this.setCurrentActiveKey(3);
        this.getAllNews();
    },
    vuex: {
        getters: {
            allNews: state => state.allNews
        },
        actions: {
            routerGo,
            setCurrentActiveKey,
            setCurrentNews,
            getAllNews
        }
    }
}
</script>

<style lang="less">
.announcements {
    margin: 0 auto;
    margin-top: 45px;
    margin-bottom: 80px;
    width: 70%;
    min-width: 400px;
    line-height: 25px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 50px;
    .content {}
    .time {
        text-align: left;
    }
}
</style>