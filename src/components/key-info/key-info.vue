
<template>
    <div class="key-info"
         v-show="currentStudent">
        <!--一个模态对话框,只有邮箱验证才会通过             -->
        <h3 class="title">完善信息</h3>
    
        <i-form :label-width="80">
    
            <div class="skills common"
                 id="skills">
                <h5 class="title">基本技能</h5>
                <Form-item v-for="item in formInlineComputed.skills"
                           track-by="$index"
                           :label="($index + 1)+'. '">
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="warning"
                                      @click="removeItem(formInlineComputed.skills,$index)">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      style="border-color:green;"
                                      long
                                      icon="plus-round"
                                      @click="addItem(formInlineComputed.skills)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="edu common"
                 id="eduction">
                <h5 class="title">教育经历</h5>
                <Form-item v-for="item in formInlineComputed.eduction"
                           track-by="$index"
                           :label="($index + 1)+'. '">
    
                    <Row style="margin-bottom:10px;">
                        <i-col span="8">
                            <Date-picker type="date"
                                         :value.sync="item.start"></Date-picker>
                        </i-col>
                        <i-col span="2"
                               style="text-align: center">-</i-col>
                        <i-col span="8">
                            <Date-picker type="date"
                                         :value.sync="item.end"></Date-picker>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item.content"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="warning"
                                      @click="removeItem(formInlineComputed.eduction,$index)">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      style="border-color:green;"
                                      long
                                      icon="plus-round"
                                      @click="addItem(formInlineComputed.eduction)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="pratice common"
                 id="prize">
                <h5 class="title">获奖情况</h5>
                <Form-item v-for="item in formInlineComputed.prize"
                           track-by="$index"
                           :label="($index + 1)+'. '">
                    <Row style="margin-bottom:10px;">
                        <i-col span="8">
                            <Date-picker type="date"
                                         :value.sync="item.time"></Date-picker>
                        </i-col>
                    </Row>
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item.content"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="warning"
                                      @click="removeItem(formInlineComputed.prize,$index)">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      style="border-color:green;"
                                      long
                                      icon="plus-round"
                                      @click="addItem(formInlineComputed.prize)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="pratice common"
                 id="pratice">
                <h5 class="title">实习经历</h5>
                <Form-item v-for="item in formInlineComputed.pratice"
                           track-by="$index"
                           :label="($index + 1)+'. '">
                    <Row style="margin-bottom:10px;">
                        <i-col span="8">
                            <Date-picker type="date"
                                         :value.sync="item.start"></Date-picker>
                        </i-col>
                        <i-col span="2"
                               style="text-align: center">-</i-col>
                        <i-col span="8">
                            <Date-picker type="date"
                                         :value.sync="item.end"></Date-picker>
                        </i-col>
                    </Row>
                    <Row style="margin-bottom:10px;">
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item.content"
                                     placeholder="单位名称"></i-input>
                        </i-col>
                    </Row>
    
                    <Row>
                        <i-col span="18">
                            <i-input type="textarea"
                                     :value.sync="item.mainwork"
                                     placeholder="主要工作 ..."
                                     :autosize="{minRows: 5,maxRows: 5}"></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="warning"
                                      @click="removeItem(formInlineComputed.pratice,$index)">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      style="border-color:green;"
                                      long
                                      icon="plus-round"
                                      @click="addItem(formInlineComputed.pratice)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <Form-item>
                <i-button @click="prev()"
                          :style="{width:'25%'}">上一步
                </i-button>
                <i-button type="primary"
                          @click="next()"
                          :style="{width:'25%'}">下一步
                </i-button>
            </Form-item>
        </i-form>
    
    </div>
</template>

<script>
import { routerGo, setSignInModal, completeKeyInfo, setCurrentActiveKey } from '../../vuex/actions.js'
export default {
    data() {
        return {};
    },
    computed: {
        formInlineComputed: function () {
            return {
                skills: this.currentStudent ? this.currentStudent.skills || [] : [],
                eduction: this.currentStudent ? this.currentStudent.eduction || [] : [],
                prize: this.currentStudent ? this.currentStudent.prize || [] : [],
                pratice: this.currentStudent ? this.currentStudent.pratice || [] : []
            }
        }
    },
    methods: {
        addItem(item) {
            switch (item) {
                case this.formInlineComputed.skills: {
                    console.log(this.formInlineComputed.skills);
                    this.formInlineComputed.skills.push("")
                    return;
                }
                case this.formInlineComputed.eduction: {
                    console.log(this.formInlineComputed.eduction);
                    this.formInlineComputed.eduction.push({
                        start: "",
                        end: "",
                        content: ""
                    })
                    return;
                }
                case this.formInlineComputed.prize: {
                    this.formInlineComputed.prize.push({
                        time: "",
                        content: ""
                    })
                    return;
                }
                case this.formInlineComputed.pratice: {
                    this.formInlineComputed.pratice.push({
                        start: "",
                        end: "",
                        content: "",
                        mainwork: ""
                    })
                    return;
                }
            }

        },
        removeItem(item, index) {
            item.splice(index, 1);
        },
        prev() {
            this.routerGo('/basic-info');
        },
        next() {
            this.completeKeyInfo({
                email: this.currentStudent.email,
                skills: this.formInlineComputed.skills,
                eduction: this.formInlineComputed.eduction,
                prize: this.formInlineComputed.prize,
                pratice: this.formInlineComputed.pratice,
            }).then(res => {
                if (res.ok) {
                    this.routerGo('/my');
                }
            }).catch(err => {
                this.$Message.error("更新失败，请重试");
            })
        }
    },
    created() {
        this.setCurrentActiveKey(4);
        if (!this.currentStudent) {
            this.setSignInModal(true);
        }
        this.formInline = this.formInlineComputed
    },
    vuex: {
        getters: {
            currentStudent: state => state.session
        },
        actions: {
            routerGo,
            setSignInModal,
            completeKeyInfo,
            setCurrentActiveKey
        }
    }

}


</script>

<style lang="less">
.key-info {
    margin: 0 auto;
    margin-top: 30px;
    width: 50%;
    min-width: 300px;
    >.title {
        margin-bottom: 20px;
        margin-left: 80px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
        font-size: 24px;
        font-weight: 300;
    }
    .common {
        margin-bottom: 50px;
        .title {
            margin-left: 80px;
            margin-bottom: 20px;
            padding: 0 7px;
            border-bottom: 0;
            border-left: 4px solid #39f;
            height: 23px;
            line-height: 23px;
            font-size: 20px;
            font-weight: 300;
        }
        .ivu-input {
            resize: none;
            text-indent: 8px;
        }
    }
}

;
</style>