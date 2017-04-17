<template>
    <div class="basic-info">
        <!--一个模态对话框,只有邮箱验证才会通过             -->
        <h3 class="title">完成个人信息，获得 HR 关注</h3>
        <i-form :model="formInline"
                :label-width="80">
    
            <Form-item label="姓名">
                <i-input :value.sync="formInline.name"
                         readonly
                         placeholder="请输入"></i-input>
            </Form-item>
    
            <Form-item label="性别">
                <Radio-group :model.sync="formInline.gender">
                    <Radio value="male">男</Radio>
                    <Radio value="female">女</Radio>
                </Radio-group>
            </Form-item>
            <!--   
                            <Form-item label="生日">
                                <Date-picker type="date"
                                             placeholder="请输入"
                                             :value.sync="formInline.birthday">
                                </Date-picker>
                            </Form-item>
                    
                            <Form-item label="手机">
                                <i-input :value.sync="formInline.phone"
                                         placeholder="请输入"></i-input>
                            </Form-item>
                    
                            <Form-item label="院系">
                                <i-input :value.sync="formInline.collage"
                                         placeholder="请输入"></i-input>
                            </Form-item>
                            <Form-item label="专业">
                                <i-input :value.sync="formInline.specity"
                                         placeholder="请输入"></i-input>
                            </Form-item>
                    
                            <Form-item label="最高学历">
                                <Radio-group :model.sync="formInline.highest">
                                    <Radio value="male">本科</Radio>
                                    <Radio value="female">研究生</Radio>
                                    <Radio value="female">博士生</Radio>
                                </Radio-group>
                            </Form-item>
                    
                            <Form-item label="自我评价">
                                <i-input type="textarea"
                                         :autosize="{minRows: 5,maxRows: 5}"></i-input>
                            </Form-item>
                    
                            <form-item>
                                <i-button type="primary"
                                          :style="{width:'25%'}">下一步
                                </i-button>
                            </form-item>
                            -->
        </i-form>
    
    </div>
</template>

<script>
import { setSignInModal, routerGo } from '../../vuex/actions.js'
export default {
    data() {
        return {
            formInline: {
                name: this.currentStudent ? this.currentStudent.name : "",
                birthday: '',
                phone: 'male',
                collage: "",
                specity: "",
                highest: '',
                gender: 'male'
            },
            rulerInline: {

            }
        }
    },
    created() {
        console.log(this.currentStudent);
        if (!this.currentStudent) {
            this.routerGo('./home');
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