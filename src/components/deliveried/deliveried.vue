<template>
    <div class="invations-list">
        <i-table :columns="companyColumn"
                 :data="companyData"
                 :content="self"
                 width="100%"></i-table>
    </div>
</template>

<script>
import { routerGo, setCurrentActiveKey, setSignInModal, getCurrentCompanyDetail } from '../../vuex/actions.js'
export default {
    data() {
        return {
            self: this,
            companyColumn: [{
                title: '公司名称',
                key: "name",
                render: function (row, column, index) {
                    return `<a @click="goCurrentCompany('${row.name}')"{>${row.name}</a>`
                }
            }, {
                title: '招聘人数',
                key: "number"
            }, {
                title: '地点',
                key: "location"
            }, {
                title: '招聘职位',
                key: "position"
            }]
        }
    },
    computed: {
        companyData: function () {
            if (!this.session) {
                return []
            }
            var deliveried = this.session.resumeDelivered;
            return this.deliveriedCompany.map(item => {
                let positions = [];
                deliveried.map(_item => {
                    if (item.email == _item.email) {
                        positions.push(_item.position);
                    }
                })
                return {
                    name: item.name,
                    number: item.number,
                    location: item.location,
                    email: item.email,
                    position: positions
                }
            }) || []
        }
    },
    methods: {
        goCurrentCompany(name, email) {
            this.getCurrentCompanyDetail(name).then(res => {
                this.routerGo(`/home/${name}`);
            }).catch(err => {
                return;
            })
        }
    },

    created() {
        this.setCurrentActiveKey(1);
        if (!this.session) {
            this.setSignInModal(true);
        }



    },
    vuex: {
        getters: {
            deliveriedCompany: state => state.deliveriedCompany || [],
            session: state => state.session,

        },
        actions: {
            setSignInModal,
            routerGo,
            setCurrentActiveKey,
            getCurrentCompanyDetail
        }
    }

}

</script>

<style lang="less">
.invations-list {
    padding: 30px 20px;
}
</style>