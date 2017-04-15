<template>
    <div class="upload-resume">
        <h3 class="title">上传简历</h3>
        <i-form :label-width="80">
    
            <Form-item label="上传简历">
                <Upload multiple
                        type="drag"
                        action="//jsonplaceholder.typicode.com/posts/">
                    <div style="padding: 20px 0">
                        <Icon type="ios-cloud-upload"
                              size="52"
                              style="color: #3399ff"></Icon>
                        <p>点击或将简历拖拽到这里上传</p>
                    </div>
                </Upload>
            </Form-item>
    
            <Form-item>
                <i-button type=""
                          :style="{width:'25%'}">上一步
                </i-button>
                <i-button type="primary"
                          :style="{width:'25%'}">完成
                </i-button>
            </Form-item>
        </i-form>
    
    </div>
</template>

<script></script>

<style lang="less">
.upload-resume {
    margin: 0 auto;
    width: 50%;
    margin-top: 50px;
    >.title {
        margin-bottom: 20px;
        margin-left: 80px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
        font-size: 24px;
        font-weight: 300;
    }
}
</style>