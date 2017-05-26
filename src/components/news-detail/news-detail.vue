<template>
    <div class="news-detail">
        <h3 class="title">{{currentNews.header}}</h3>
        <p class="content">{{currentNews.content}}</p>
        <p class="date">{{currentNews.time}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {

    },
    vuex: {
        getters: {
            currentNews: state => state.currentNews
        }
    }
}
</script>

<style lang="less">
.news-detail {
    margin: 0 auto;
    margin-top: 27px;
    width: 60%;
    color: #333;
    >.title {
        font-size: 27px;
        font-weight: 300;
        color: #39f;
    }
    >.content {
        margin-top: 20px;
        line-height: 23px;
        letter-spacing: 1px;
        text-indent: 26px;
    }
    >.date {
        margin-top: 60px;
        text-align: left;
        font-size: 16px;
    }
}
</style>