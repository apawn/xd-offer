
<template>
    <div class="key-info"
         v-show="currentStudent">
        <!--一个模态对话框,只有邮箱验证才会通过             -->
        <h3 class="title">完善信息</h3>
    
        <i-form v-ref:form-inline
                :model="formInline"
                :label-width="80">
    
            <div class="skills common"
                 id="skills">
                <h5 class="title">基本技能</h5>
                <Form-item v-for="item in formInline.skills"
                           track-by="$index"
                           :label="($index + 1)+'. '"
                           :prop="'skills.'+$index"
                           :rules="{required: true, message: '技能' + ($index + 1) +'不能为空', trigger: 'blur'}">
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="warning"
                                      @click="removeItem(formInline.skills,$index)">删除</i-button>
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
                                      @click="addItem(formInline.skills)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="edu common"
                 id="eduction">
                <h5 class="title">教育经历</h5>
                <Form-item v-for="item in formInline.eduction"
                           track-by="$index"
                           :label="($index + 1)+'. '"
                           :prop="'eduction.'+$index+'.content'"
                           :rules="{required: true, message: '经历' + ($index + 1) +'不能为空', trigger: 'blur'}">
    
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
                                      @click="removeItem(formInline.eduction,$index)">删除</i-button>
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
                                      @click="addItem(formInline.eduction)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="pratice common"
                 id="prize">
                <h5 class="title">获奖情况</h5>
                <Form-item v-for="item in formInline.prize"
                           track-by="$index"
                           :label="($index + 1)+'. '"
                           :prop="'prize.'+$index+'.content'"
                           :rules="{required: true, message: '情况1' + ($index + 1) +'不能为空', trigger: 'blur'}">
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
                                      @click="removeItem(formInline.prize,$index)">删除</i-button>
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
                                      @click="addItem(formInline.prize)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="pratice common"
                 id="pratice">
                <h5 class="title">实习经历</h5>
                <Form-item v-for="item in formInline.pratice"
                           track-by="$index"
                           :label="($index + 1)+'. '"
                           :prop="'pratice.'+$index+'.content'"
                           :rules="{required: true, message: '经历' + ($index + 1) +'不能为空', trigger: 'blur'}">
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
                                      @click="removeItem(formInline.pratice,$index)">删除</i-button>
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
                                      @click="addItem(formInline.pratice)">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <Form-item>
                <i-button @click="prev()"
                          :style="{width:'25%'}">上一步
                </i-button>
                <i-button type="primary"
                          @click="next('formInline')"
                          :style="{width:'25%'}">下一步
                </i-button>
            </Form-item>
        </i-form>
    
    </div>
</template>

<script>
import { routerGo, setSignInModal } from '../../vuex/actions.js'
export default {
    data() {
        return {
            formInline: {
                skills: ["精通JavaScript", "熟练算法和数据结构"],
                eduction: [{
                    start: "",
                    end: "",
                    content: "西安电子科技大学本科"
                }],
                prize: [{
                    time: "",
                    content: ""
                }],
                pratice: [{
                    start: "",
                    end: "",
                    content: "",
                    mainwork: ""
                }]
            }
        }
    },
    methods: {
        addItem(item) {
            switch (item) {
                case this.formInline.skills: {
                    item.push("")
                    return;
                }
                case this.formInline.eduction: {
                    item.push({
                        start: "",
                        end: "",
                        content: ""
                    })
                    return;
                }
                case this.formInline.prize: {
                    item.push({
                        time: "",
                        content: ""
                    })
                    return;
                }
                case this.formInline.pratice: {
                    item.push({
                        start: "",
                        end: "",
                        content: "",
                        mainword: ""
                    })
                    return;
                }
            }

        },
        removeItem(item, index) {
            item.splice(index, 1);
        },
        prev() { },
        next(name) {
            console.log(name);
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        }
    },
    created() {
        if (!this.currentStudent) {
            this.setSignInModal(true);
        }
    },
    vuex: {
        getters: {
            currentStudent: state => state.session
        },
        actions: {
            routerGo,
            setSignInModal
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
    }
}

;
</style>