export default {
    // 数据的总条数
    totalCount: 0,
    // 当前页码
    currentPage: 1,
    // 当前页的公司
    currentCompanies: [],

    // 当前展示公司的详细邮箱  默认为 ""
    currentCompanyEmail: "",
    currentCompany: {},
    currentActiveKey: "1",
    currentNews: {},
    allNews: {},
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
                    return `<a class="link" @click="routerGo('/home/${row.company}')"> ${row.company}</a> `;
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
                company: '新华三集团3',
                location: '就业中心116',
                time: '17-03-07 10:00-12:00'
            },
            {
                id: '006',
                company: '新华三集团4',
                location: '就业中心116',
                time: '17-03-07 16:00-17:30'
            },
            {
                id: '007',
                company: '新华三集团5',
                location: 'D211',
                time: '17-03-08 10:00-12:00'
            },
            {
                id: '008',
                company: '新华三集团6',
                location: '就业中心116',
                time: '17/03/08 10:00-12:00'
            }
        ],
        northPlan: [{
            id: '005',
            company: '新华三集团3',
            location: '就业中心116',
            time: '17-03-07 10:00-12:00'
        },
        {
            id: '006',
            company: '新华三集团4',
            location: '就业中心116',
            time: '17-03-07 16:00-17:30'
        },
        {
            id: '007',
            company: '新华三集团5',
            location: 'D211',
            time: '17-03-08 10:00-12:00'
        },
        {
            id: '008',
            company: '新华三集团6',
            location: '就业中心116',
            time: '17/03/08 10:00-12:00'
        }
        ]

    },

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
