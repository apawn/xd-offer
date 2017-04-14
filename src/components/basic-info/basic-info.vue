<template>
    <div class="basic-info">
        <!--一个模态对话框,只有邮箱验证才会通过             -->
        <h3 class="title">完成个人信息，获得 HR 关注</h3>
    
        <i-form :model="formItem"
                :label-width="80">
    
            <Form-item label="姓名">
                <i-input :value.sync="formItem.input"
                         placeholder="请输入"></i-input>
            </Form-item>
    
            <Form-item label="性别">
                <Radio-group :model.sync="formItem.radio">
                    <Radio value="male">男</Radio>
                    <Radio value="female">女</Radio>
                </Radio-group>
            </Form-item>
    
            <Form-item label="生日">
                <Date-picker type="date"
                             placeholder="入学年份"
                             :value.sync="formItem.date">
                </Date-picker>
            </Form-item>
    
            <Form-item label="手机">
                <i-input :value.sync="formItem.input"
                         placeholder="请输入"></i-input>
            </Form-item>
    
            <Form-item label="院系">
                <i-input :value.sync="formItem.input"
                         placeholder="请输入"></i-input>
            </Form-item>
            <Form-item label="专业">
                <i-input :value.sync="formItem.input"
                         placeholder="请输入"></i-input>
            </Form-item>
    
            <Form-item label="最高学历">
                <Radio-group :model.sync="formItem.radio">
                    <Radio value="male">本科</Radio>
                    <Radio value="female">研究生</Radio>
                    <Radio value="female">博士生</Radio>
                </Radio-group>
            </Form-item>
    
            <form-item>
                <i-button type="primary"
                          :style="{width:'25%'}">下一步
                </i-button>
            </form-item>
        </i-form>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            }
        }
    },

    vuex: {
        getters: {

        },
        actions: {

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
}

;
</style>