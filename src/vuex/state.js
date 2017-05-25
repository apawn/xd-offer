export default {
    // 当前用户
    session: null,
    // 是否弹出登录对话框
    signInModal: false,
    // 招聘会信息
    meetingPlan: {
        // 标题
        columns: [
            {
                title: '公司',
                key: 'company',
                render(row, column, index) {
                    return `<a class="link" @click="routerGo('/home/${row.id}')"> ${row.company}</a> `;
                }
            },
            {
                title: '地点',
                key: 'location'
            },
            {
                title: '时间',
                key: 'time'
            }
        ],
        sorthPlan: [
            {
                id: '200',
                company: '西安软通动力技术服务有限公司',
                location: '就业中心116',
                time: '17-03-07 10:00-12:00'
            },
            {
                id: '006',
                company: '中国铁建重工集团',
                location: '就业中心116',
                time: '17-03-07 16:00-17:30'
            },
            {
                id: '007',
                company: '深圳市投控物业管理有限公司产业园分公司',
                location: 'D211',
                time: '17-03-08 10:00-12:00'
            },
            {
                id: '008',
                company: '一诺仪器（中国）有限公司',
                location: '就业中心116',
                time: '17/03/08 10:00-12:00'
            }
        ],
        northPlan: [{
            id: '005',
            company: '西安软通动力技术服务有限公司',
            location: '就业中心116',
            time: '17-03-07 10:00-12:00'
        },
        {
            id: '006',
            company: '中国铁建重工集团',
            location: '就业中心116',
            time: '17-03-07 16:00-17:30'
        },
        {
            id: '007',
            company: '深圳市投控物业管理有限公司产业园分公司',
            location: 'D211',
            time: '17-03-08 10:00-12:00'
        },
        {
            id: '008',
            company: '一诺仪器（中国）有限公司',
            location: '就业中心116',
            time: '17/03/08 10:00-12:00'
        }
        ]

    },

    announcements: [

        {
            id: '005',
            header: '就业指导服务中心寒假值班安排',
            content: "",
            time: '2017-01-15'
        },
        {
            id: '006',
            header: '关于做好江苏省2017年应届优秀大学毕业生选调工作的通知',
            content: "",
            time: '2016-12-29'
        },
        {
            id: '007',
            header: '关于做好2017届毕业求职创业补贴（一次性求职补贴）申报工作的通知',
            content: "",
            time: '2016-12-13'
        },
        {
            id: '008',
            header: '2016年12月8日西安电子科技大学2017届毕业生网络视频双选会公司名单',
            content: "",
            time: '2016-12-08'
        },
        {
            id: '009',
            header: '教育部关于做好2017届全国普通高等学校毕业生就业创业工作的通知',
            content: "",
            time: '2016-12-06'
        }
    ],
    // 数据的总条数
    totalCount: 0,
    // 当前页码
    currentPage: 1,
    // 当前页的工资
    currentCompanies: [],

    // 当前展示公司的详细邮箱  默认为 ""
    currentCompanyEmail: "",
    currentCompany: {},
    currentActiveKey: "1"
}



    // companyList: [{
    //     id: "005",
    //     name: '晨星软件研发（深圳）有限公司',
    //     category: ['电子', '硬件'],
    //     nature: ['外企'],
    //     city: ['深圳'],
    //     description: '晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
    // },
    //     {
    //         id: "007",
    //         name: '晨星软件研发（深圳）有限公司',
    //         category: ['电子', '硬件'],
    //         nature: ['外企'],
    //         city: ['深圳'],
    //         description: '晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
    //     },
    //     {
    //         id: "008",
    //         name: '晨星软件研发（深圳）有限公司',
    //         category: ['电子', '硬件'],
    //         nature: ['外企'],
    //         city: ['深圳'],
    //         description: '晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
    //     },
    //     {
    //         id: "009",
    //         name: '晨星软件研发（深圳）有限公司',
    //         category: ['电子', '硬件'],
    //         nature: ['外企'],
    //         city: ['深圳'],
    //         description: '晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
    //     }
    // ]
