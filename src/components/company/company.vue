<template>
    <div class="company">
        <h1> {{company.name}} </h1>
        <div>
            <span>{{company.location}}</span>
            <span>{{company.number}}</span>
        </div>
        <p> {{company.desc}}
            <p>
                <ul>
                    <li v-for="item in company.position">
                        <Row>
                            <i-col span="18">
                                <h6>{{item.name}}</h6>
                                <span>{{item.salary}}</span>
                            </i-col>
                            <i-col span="6">
                                <i-button>投递简历</i-button>
                            </i-col>
                        </Row>
                        <p>{{item.job}}</p>
                    </li>
                </ul>
                <ul>
                    <li v-for="item in company.comments">
                        <p>
                            {{item.content}}
                        </p>
                        <span>
                                        {{item.time}}
                                    </span>
                    </li>
                </ul>
    
                <textarea name=""
                          id=""
                          cols="30"
                          rows="10"
                          placeholder="评价该公司">
                </textarea>
    </div>
</template>


<script>
import { getCurrentCompanyDetail } from '../../vuex/actions.js'

export default {
    data() {
        return {}
    },
    method: {

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
            company: state => state.currentCompany
        },
        actions: {
            getCurrentCompanyDetail
        }
    }
}

</script>

<style lang="less"></style>