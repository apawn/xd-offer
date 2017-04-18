<template>
    <div class="basic-info"
         v-show="currentStudent">
        <!--一个模态对话框,只有邮箱验证才会通过             -->
        <h3 class="title">完成个人信息，获得 HR 关注</h3>
        <i-form v-ref:form-inline
                :model="formInline"
                :rules="rulerInline"
                :label-width="80">
    
            <Form-item label="姓名">
                <i-input :value="currentStudent ? currentStudent.name : ''"
                         readonly
                         placeholder="请输入"></i-input>
            </Form-item>
    
            <Form-item label="性别"
                       prop="gender">
                <Radio-group :model.sync="formInline.gender">
                    <Radio value="male">男</Radio>
                    <Radio value="female">女</Radio>
                </Radio-group>
            </Form-item>
    
            <Form-item label="生日"
                       prop="birthday">
                <Date-picker type="date"
                             placeholder="请输入"
                             :value.sync="formInline.birthday"
                             format="yyyy年MM月dd日">
                </Date-picker>
            </Form-item>
    
            <Form-item label="手机"
                       prop="phone">
                <i-input :value.sync="formInline.phone"
                         placeholder="请输入"></i-input>
            </Form-item>
    
            <Form-item label="院系"
                       prop="collage">
                <i-input :value.sync="formInline.collage"
                         placeholder="请输入"></i-input>
            </Form-item>
            <Form-item label="专业"
                       prop="specity">
                <i-input :value.sync="formInline.specity"
                         placeholder="请输入"></i-input>
            </Form-item>
    
            <Form-item label="最高学历"
                       prop="highest">
                <Radio-group :model.sync="formInline.highest">
                    <Radio value="undergraduate">本科</Radio>
                    <Radio value="graduate">研究生</Radio>
                    <Radio value="doctor">博士生</Radio>
                </Radio-group>
            </Form-item>
    
            <Form-item label="自我评价"
                       prop="introduction">
                <i-input type="textarea"
                         :value.sync="formInline.introduction"
                         :autosize="{minRows: 5,maxRows: 5}"></i-input>
            </Form-item>
    
            <form-item>
                <i-button type="primary"
                          @click="next('formInline')"
                          :style="{width:'25%'}">下一步
                </i-button>
            </form-item>
    
        </i-form>
    
    </div>
</template>

<script>
import { setSignInModal, routerGo, completeBasicInfo } from '../../vuex/actions.js'
export default {
    data() {
        return {
            formInline: {
                birthday: '',
                phone: '15845565860',
                collage: "软件学院",
                specity: "软件工程",
                highest: 'undergraduate',
                gender: 'male',
                introduction: "工作：认真负责，踏实稳重，具有很强的团队合作精神； 学习：求知欲强，勤奋好学，学习能力强； 生活：热爱生活，为人正直善良，积极进取，敢于挑战自我。"
            },
            rulerInline: {
                name: [
                    { required: true, message: '请填写姓名', trigger: 'blur' }
                ],
                birthday: [
                    { required: true, message: '请填写生日', type: 'date', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: '请填写手机号码', trigger: 'blur' }
                ],
                collage: [
                    { required: true, message: '请填写学院', trigger: 'blur' }
                ],
                specity: [
                    { required: true, message: '请填写专业', trigger: 'blur' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                introduction: [
                    { required: true, message: '请自我评价', trigger: 'blur' }
                ],
                highest: [
                    { required: true, message: '请选择学历', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        next(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.completeBasicInfo({
                        email: this.currentStudent.email,
                        birthday: this.formInline.birthday.toLocaleDateString(),// 2017/4/18
                        name: this.currentStudent.name,
                        phone: this.formInline.phone,
                        collage: this.formInline.collage,
                        speciality: this.formInline.specity,
                        highest: this.formInline.highest,
                        gender: this.formInline.gender,
                        introduction: this.formInline.introduction
                    }).then(res => {
                        if (res.ok) {
                            console.log('shit');
                            // this.routerGo('/key-info');
                        } else {
                            this.$Message.error('出错，请重试');
                        }

                    }).catch(err => {
                        this.$Message.error('出错，请重试');
                    })
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })

        }
    },
    created() {
        console.log(this.currentStudent);
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
            setSignInModal,
            completeBasicInfo

        }
    }
}


</script>

<style lang="less">
.basic-info {
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
    .ivu-input {
        resize: none;
        text-indent: 8px;
    }
}

;
</style>