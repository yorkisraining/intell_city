<!-- home/home.vue -->
<template>
    <div class="home_contain">
        <div class="home_contain_padding">
            <div class="carousel_block">
                <el-carousel 
                :height="setting.height"
                >
                <el-carousel-item v-for="item in imageList" :key="item.id" >
                    <img :src="item.image" :alt="item.remark" @click="toThisNav(item.url)">
                </el-carousel-item>
                </el-carousel>
            </div>
            <div class="nav_block">
                <el-row>
                    <el-col :span="6" class="nav_item"  v-for="item in appList" :key="item.id">
                        <mainNav 
                        :title="item.title" 
                        :src="item.image" 
                        :mButton="'.2rem'" 
                        :w="'.8rem'"
                        :h="'.8rem'"
                        :link="item.url"
                        :blank="item.url != '/serve' ? true : false"
                        @toThisNavEmit="toThisNav"></mainNav>
                    </el-col>
                </el-row>
            </div>
            <div class="list_item qy_block">
                <div class="qy_title"  @click="toThisNav('/framesCompany')">入驻企业成果展示<i class="el-icon-arrow-right"></i></div>
                <div v-for="item in companyPerformanceList" :key="item.id" class="qy_detail_box" @click="toThisNav(item.linkUrl, true)">
                    <img :src="item.imageUrl">
                    <div class="qy_block_name">{{item.title | filterCompanyTitle}}</div>
                    <div class="qy_block_desc">{{item.absContent | filterCompanyContent}}</div>
                </div>
            </div>
            <div class="list_item">
                <globalTitle :title="'资讯'"  :link="'/information'" :showMore="true" @toThisNavEmit="toThisNav"></globalTitle>
                <detailBox2 v-for="item in inforList" 
                :key="item.id" 
                :title="item.policyName" 
                :remark="item.absContent" 
                :src="item.mainImageUrl"
                :id="item.id" 
                :link="item.link" 
                :typeName="item.typeName"
                @toThisNavEmit="toThisNav"></detailBox2>
            </div>
            <div class="list_item">
                <globalTitle :title="'美食'"  :link="'/'" :showMore="false" @toThisNavEmit="toThisNav"></globalTitle>
                <el-row>
                    <el-col :span="12" class="nav_item" v-for="item in cateList" :key="item.id">
                        <detailBox3 
                        :src="item.src" 
                        :topMark="item.topMark" 
                        :color="item.color" 
                        :link="item.link" 
                        @toThisNavEmit="toThisNav"
                        ></detailBox3>
                    </el-col>
                </el-row>
            </div>
            <div class="list_item">
                <globalTitle :title="'项目信息'" :link="projectCenterUrl" :showMore="true" @toThisNavEmit="toThisNav"></globalTitle>
                <div class="slider_block_wrap">
                    <ul class="slider_block clearfix">
                        <li v-for="(item, index) in companyProjectList" :key="item.id">
                            <carouselWithDesc 
                            :src="item.src" 
                            :title="item.title" 
                            :desc="item.desc" 
                            :bgColor="index"
                            :link="item.link" 
                            @toThisNavEmit="toThisNav"></carouselWithDesc>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="fix_bottom_nav">
            <el-row>
                <el-col :span="8" class="nav_item"  v-for="item in bottomNavList" :key="item.name">
                    <mainNav 
                    :title="item.title" 
                    :src="item.src" 
                    :mButton="'.1rem'"
                    :w="'.5rem'"
                    :h="'.5rem'"
                    :link="item.link"
                    @toThisNavEmit="toThisNav"></mainNav>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import mainNav from '@/components/mainNav'
import globalTitle from './globalTitle'
import detailBox1 from './detailBox1'
import detailBox2 from './detailBox2'
import detailBox3 from './detailBox3'
import carouselWithDesc from './carouselWithDesc'
import { ajaxGet } from '@/common/js/public.js'
import { apiUrl } from '@/common/js/api.js'

export default {
    data () {
        return {
            bottomNavList: [
                {
                name: 'home',
                title: '协同',
                src: require('@/assets/button_xt_cur.png'),
                link: '/'
                },
                {
                name: 'project',
                title: '项目',
                src: require('@/assets/button_xm.png'),
                link: '/framesProject'
                },
                {
                name: 'active',
                title: '活动',
                src: require('@/assets/button_hd.png'),
                link: '/activity'
                },
            ],
            setting: {
                height: '2.2rem',
                autoplay: true,
                interval: 2000,
                indicatorPosition: 'inside',
            },
            appList: [],
            cateList: [
                {
                    id: 4001,
                    src: require('@/assets/coffe.png'),
                    topMark: '咖啡厅',
                    color: '#807AFF',
                    link: '/coffee',
                },
                {
                    id: 4002,
                    src: require('@/assets/th.jpg'),
                    topMark: '三品王',
                    color: '#FE5FD9',
                    link: '/foods',
                },
            ],
            imageList: [], //轮播图
            companyPerformanceList: [], //企业成果列表
            companyProjectList: [], //项目列表
            inforList: [], //资讯
            projectCenterUrl: '/framesProject', //项目中心链接
        };
    },
    components: {mainNav, globalTitle, detailBox1, detailBox2, detailBox3, carouselWithDesc},
    filters: {
        filterCompanyTitle(val) {
            if (val) {
                return val.length > 6 ? val.slice(0, 6) : val;
            }
        },
        filterCompanyContent(val) {
            if (val) {
                return val.length > 12 ? val.slice(0, 12) : val;
            }
        }
    },
    created() {
        //获取tooken
        //let code = /\^?code=\w+/.exec(window.location.href)[0].split('=')[1];
        
        /* ajaxGet(apiUrl.token, {
            code: code
        }, res => {
            localStorage.setItem('token', token);
            sessionStorage.setItem('token', token);
        }) */
        ajaxGet(apiUrl.testToken, {}, res => {
            localStorage.setItem('token', res.token);
            sessionStorage.setItem('token', res.token);
        })
        
        //请求首页所有数据
        ajaxGet(apiUrl.homeData, {}, res => {
            res.appList.push({
                id: 1004,
                title: '企业服务',
                image: require('@/assets/nav_qyfw.png'),
                url: '/serve',
            })
            for (let i=0; i<res.appList.length; i++) {
                if (res.appList[i].title == '政策') {
                    
                }
            }
            this.appList = res.appList;
            this.imageList = res.imageList;
            this.navList = res.appList; //导航
            this.companyPerformanceList = res.companyPerformanceList; //企业成果展示
            this.companyProjectList = res.companyProjectList; //项目列表
            this.inforList = res.inforList; //资讯
        })

    },
    methods: {
        toThisNav(url, blank) {
            if (blank) {
                if (!/http/.test(url)) {
                    url = `http://${url}`;
                }
                window.location.href = url;
            } else {
                this.$router.push(url);
            }
        },
    }
}

</script>
<style lang='less' scoped>

    .home_contain {
        margin-bottom: 1rem;
        .home_contain_padding {
            padding: .16rem .32rem;
        }
        .el-carousel__item img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
        }

        .carousel_block {
            margin-bottom: .15rem;
            margin-top: -1px;
        }

        .list_item, .nav_block  {
            background-color: #fff;
            margin-bottom: .15rem;
            padding: .15rem 0;
        }
        .slider_block_wrap {
            width: 100%;
            overflow: hidden;
            overflow-x: scroll;
            .slider_block {
                width: calc(6.2rem * 3 + .16rem * 3);
                li {
                    float: left;
                    margin-right: .16rem;
                }
            }
        }

        .qy_block {
            background-color: #E8F2FF;
            border-radius:15px;
            padding: .16rem;
            .qy_title {
                padding-left: .1rem;
                margin-bottom: .14rem;
                font-size: .34rem;
                font-weight: 500;
                color: #0D9BED;
            }
            .qy_detail_box {
                background-color: #fff;
                border-radius: 10px;
                display: inline-block;
                width: calc((100% - .4rem) / 3);
                margin-right: .2rem;
                padding: .16rem .1rem;
                text-align: center;
                color: #333;
                cursor: pointer;
                &:last-child {
                    margin: 0;
                }
                img {
                    width: 100%;
                    height: 1.4rem;
                    border-radius: 4px;
                    margin-bottom: .04rem;
                }
                .qy_block_name {
                    font-weight: bold;
                    font-size: .3rem;
                    margin-bottom: .1rem;
                    font-weight: 600;
                    width: 100%;
                }
                .qy_block_desc {
                    font-size: .2rem;
                    font-weight: 500;
                    line-height: .28rem;
                    color: #666;
                    width: 100%;
                    text-align: left;
                    word-break: break-all;
                }
            }
        }

        .fix_bottom_nav {
            position: fixed;
            bottom: -1px;
            background-color: #fff;
            width: 100%;
            z-index: 19950606;
            background-attachment: fixed;
        }
    }
</style>