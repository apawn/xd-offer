
<template>
    <div class="key-info"
         v-if="currentStudent">
        <!--一个模态对话框,只有邮箱验证才会通过             -->
        <h3 class="title">完善信息</h3>
    
        <i-form v-ref:form-inline
                :model="formInline"
                :label-width="80">
    
            <div class="skills common"
                 id="skills">
                <h5 class="title">基本技能</h5>
                <Form-item v-for="item in formItem.skills"
                           :label="($index + 1)+'. '"
                           :prop="'item'"
                           :rules="{required: true, message: '技能' + ($index + 1) +'不能为空', trigger: 'blur'}">
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="ghost">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      long
                                      icon="plus-round">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="edu common"
                 id="eduction">
                <h5 class="title">教育经历</h5>
                <Form-item v-for="item in formInline.eduction"
                           :label="($index + 1)+'. '"
                           :prop="'item'"
                           :rules="{required: true, message: '经历' + ($index + 1) +'不能为空', trigger: 'blur'}">
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="ghost">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      long
                                      icon="plus-round">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="pratice common"
                 id="prize">
                <h5 class="title">获奖情况</h5>
                <Form-item v-for="item in formItem.prize"
                           :label="($index + 1)+'. '"
                           :prop="'item'"
                           :rules="{required: true, message: '经历' + ($index + 1) +'不能为空', trigger: 'blur'}">
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="ghost">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      long
                                      icon="plus-round">新增</i-button>
                        </i-col>
                    </Row>
                </Form-item>
            </div>
    
            <div class="pratice common"
                 id="pratice">
                <h5 class="title">实习经历</h5>
                <Form-item v-for="item in formItem.pratice"
                           :label="($index + 1)+'. '"
                           :prop="'item'"
                           :rules="{required: true, message: '经历' + ($index + 1) +'不能为空', trigger: 'blur'}">
                    <Row>
                        <i-col span="18">
                            <i-input type="text"
                                     :value.sync="item"
                                     placeholder="请输入..."></i-input>
                        </i-col>
                        <i-col span="4"
                               offset="1">
                            <i-button type="ghost">删除</i-button>
                        </i-col>
                    </Row>
    
                </Form-item>
                <Form-item>
                    <Row>
                        <i-col span="12">
                            <i-button type="dashed"
                                      long
                                      icon="plus-round">新增</i-button>
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
            formItem: {
                skills: ["精通JavaScript", "熟练算法和数据结构"]
            }
        }
    },
    methods: {
        prev() { },
        next(name) {
            this.$ref[name].validate((valid) => {
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
    .skills .ivu-form-item {
        margin-bottom: 6px;
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