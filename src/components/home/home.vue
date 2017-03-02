<template>
    <div class="home">
        <Row class="search">
            <i-col span="4" class="search-label">
                <label>搜索职位:</label>
            </i-col>
            <i-col span="20">
                <i-input placeholder="搜索的职位或者公司名称.."></i-input>
            </i-col>
        </Row>


        <!--<Carousel autoplay class="carousel">
            <Carousel-item>
                <div class="carousel-item">1</div>
            </Carousel-item>
            <Carousel-item>
                <div class="carousel-item">2</div>
            </Carousel-item>
            <Carousel-item>
                <div class="carousel-item">3</div>
            </Carousel-item>
            <Carousel-item>
                <div class="carousel-item">4</div>
            </Carousel-item>
        </Carousel>-->

        <div class="job-list">
            <ul>
                <li v-for=" item in companyList">
                   <a href="">
                        {{item.name}}
                   </a>
                   {{item.category}}
                   {{item.nature}}
                   {{item.city}}
                   {{item.description}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // 公司数据结构, 名称, 介绍,
                companyList:[{name: '晨星软件研发（深圳）有限公司',
                    category:['电子','硬件'],
                    nature:['外企'],
                    city:['深圳'],
                    description:'晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
                 },
                 {name: '晨星软件研发（深圳）有限公司',
                    category:['电子','硬件'],
                    nature:['外企'],
                    city:['深圳'],
                    description:'晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
                 },
                 {name: '晨星软件研发（深圳）有限公司',
                    category:['电子','硬件'],
                    nature:['外企'],
                    city:['深圳'],
                    description:'晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
                 },
                 {name: '晨星软件研发（深圳）有限公司',
                    category:['电子','硬件'],
                    nature:['外企'],
                    city:['深圳'],
                    description:'晨星半导体股份有限公司注册于英属开曼群岛，是一家专注于混合视频信号控制芯片技术研发的国际化高科技公司，公司已于去年在台湾成功上市。'
                 }
                ]
            }
        }
    }

</script>

<style lang="less">
    .home {
        padding: 30px 100px;
        .search {
            margin: 0 auto;
            width: 60%;
            .search-label {
                /*margin-right:5px;*/
                height: 32px;
                font-size: 25px;
                line-height: 32px;
                /*text-align: left;*/
                color: #e92322;
            }
        }
        .job-list {
            margin: 0 auto;
            margin-top: 50px;
            width: 90%;
            height: 500px;
            border-top: 1px solid #e92322;
            background: #f7f7f7;
        }
    }
</style>