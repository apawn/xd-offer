<template>
    <h3>这是我的个人主页</h3>
<template>

<script>
    export  default {
        data(){
            return {
                my:{
                    name:'pawn',
                    birthday:'1994-05-04',
                    gender:'男',
                    email:'888@qq.com',
                    phone:'88888888',
                    collage:'软件学院',
                    speciality:'软件工程',
                    highest:'本科',
                    skills:['精通JavaScript','熟悉常用算法和数据结构'],
                    // 获奖情况
                    prizes:[
                        {content:'荣获校级“优秀党员” 、 “三好学生”称号',time:'2015-03-08'},
                        {content:'西安电子科技大学学业奖学金二等奖学金” 、 “三好学生”称号',time:'2014-03-05'},
                    ],
                    resumePath:'555555',
                    eduction:[
                        content:'西安电子科技大学       通信与信息系统  ',
                        start:'2013-08-24',
                        end:'2017-07-01'
                    ],
                    experience:[
                        content:'“木上花开”项目组主要负责人',
                        start:'2014-09-05',
                        end:'2015-06-15',
                        mainWork:`户县调研，在与户县李氏木刻刘鹏鹂深入沟通的基础上，确定项目的主要发展方向， 设计宣传单，进入西安各大高校进行宣传活动，扩大了项目影响力和活动的传播度 。撰写详实的活动文案，策划组织木刻体验活动，实现项目组的首次盈利`,
                                            
                    ],
                    introduction:`认真负责，踏实稳重，具有很强的团队合作精神； 学习：求知欲强，勤奋好学，学习能力强； 生活：热爱生活，为人正直善良，积极进取，敢于挑战自我。 `,
                }
            };
        }
    }
// var Student = new mongoose.Schema({
//     name: String,
//     password: String,
//     birthday: Date,
//     gender: Number,
//     email: String,
//     phone: String,
//     speciality: String,
//     skill: [String],
//     prizes: [{ content: String, time: Date }], // include string and date Schema.Types.Mixed
//     experience: [{ content: String, start: Date, end: Date, mainwork: String }],  // include company startdate, endDate, main work.
//     introduction: String,
//     resumePath: String,
//     //  private 
//     resumeDelivered: [{ email: String, position: String, time: Date }],  // the companies has delivered resume, include company ,job
//     getInvations: [{ company: String, position: String, time: Date }],    // the companies which student has get invations from , include company ,job
//     message: [{ content: String, time: Date, hasread: Boolean }],        // content date hasRead 
//     comments: [{ content: String, time: Date, company: "" }]
// })

</script>

<style>

</style>