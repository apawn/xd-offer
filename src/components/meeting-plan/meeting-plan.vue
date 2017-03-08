<template>
    <div class="plan">
        <Tabs active-key="key1">
            <Tab-pane label="南校区招聘会安排" key="key1">
                <Card class="card">
                    <i-table :content="self" :columns="columns" :data="sorthPlan" class="table"></i-table>
                </Card>
            </Tab-pane>

            <Tab-pane label="北校区招聘会安排" key="key2">
                <i-table :content="self" :columns="columns" :data="northPlanta" class="table"></i-table>
            </Tab-pane>
        </Tabs>
    </div>
</template>

<script>
    import {routerGo}  from '../../vuex/actions'

    export default {
          data () {
            return {
                self: this,
            }
          },
          methods:{
          },
          vuex:{
            getters:{
                columns: state=>state.meetingPlan.columns,
                sorthPlan:state=>state.meetingPlan.sorthPlan,
                northPlanta:state=>state.meetingPlan.northPlan
            },
            actions :{
                 routerGo
            }
        }
    }
</script>

<style lang="less">
    .plan {
        margin: 0 auto;
        margin-top: 30px;
        width: 50%;
        .card {
            .ivu-card-body {
                padding: 0;
                .table.ivu-table-wrapper {
                    border: none;
                    .ivu-table-row {}
                    .ivu-table-row-hover {
                        background: #fff;
                    }
                }
            }
        }
    }
</style>