<template>
    <div class="announcements">
        <ul>
            <li v-for="item in announcements">
                <Row>
                    <i-col span="18"
                           class="content">
                        <a @click="routerHere(item.id)">{{item.header}}</a>
                    </i-col>
                    <i-col span="6"
                           class="time">
                        {{item.time}}
                    </i-col>
                </Row>
    
            </li>
        </ul>
        <Page :current="2"
              :total="50"
              simple
              class="pager"></Page>
    
    </div>
</template>

<script>
import { routerGo } from '../../vuex/actions.js'
export default {
    methods: {
        routerHere(itemId) {
            this.routerGo(`/announcements/${itemId}`);
        }
    },
    vuex: {
        getters: {
            announcements: state => state.announcements
        },
        actions: {
            routerGo
        }
    }
}
</script>

<style lang="less">
.announcements {
    margin: 0 auto;
    margin-top: 45px;
    width: 50%;
    min-width: 400px;
    min-height: 700px;
    .content {}
    .time {
        text-align: right;
    }
    .pager {
        margin-top: 50px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    }
}
</style>