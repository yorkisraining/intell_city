<!-- home/home.vue -->
<template>
    <div class="home_contain">
        <div class="carousel_block">
            <el-carousel 
            :height="setting.height"
            >
            <el-carousel-item v-for="item in topCarImgList" :key="item.id" >
                <img :src="item.image" :alt="item.remark" @click="toThisNav(item.url)">
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="nav_block">
            <el-row>
                <el-col :span="6" class="nav_item"  v-for="item in navList" :key="item.id">
                    <mainNav 
                    :title="item.title" 
                    :src="item.src" 
                    :mButton="'.2rem'" 
                    :w="'.8rem'"
                    :h="'.8rem'"
                    :link="item.link"
                    @toThisNavEmit="toThisNav"></mainNav>
                </el-col>
            </el-row>
        </div>
        <div class="list_item qy_block">
            <div class="qy_title"  @click="toThisNav('/')">入驻企业成果展示<i class="el-icon-arrow-right"></i></div>
            <div v-for="item in detailBox1List" :key="item.id" class="qy_detail_box" @click="toThisNav(item.link)">
                <img :src="item.src">
                <div class="qy_block_name">{{item.title}}</div>
                <div class="qy_block_desc">{{item.desc}}</div>
            </div>
        </div>
        <div class="list_item">
            <globalTitle :title="'资讯'"  :link="'/information'" :showMore="true" @toThisNavEmit="toThisNav"></globalTitle>
            <detailBox2 v-for="item in detailBox2List" 
            :key="item.id" 
            :title="item.title" 
            :remark="item.remark" 
            :src="item.src"
            :link="item.link" 
            @toThisNavEmit="toThisNav"></detailBox2>
        </div>
        <div class="list_item">
            <globalTitle :title="'美食'"  :link="'/'" :showMore="false" @toThisNavEmit="toThisNav"></globalTitle>
            <el-row>
                <el-col :span="12" class="nav_item" v-for="item in detailBox3List" :key="item.id">
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
            <globalTitle :title="'项目信息'" :link="'/'" :showMore="true" @toThisNavEmit="toThisNav"></globalTitle>
            <div class="slider_block_wrap">
                <ul class="slider_block clearfix">
                    <li v-for="item in carouselList" :key="item.id">
                        <carouselWithDesc 
                        :src="item.src" 
                        :title="item.title" 
                        :desc="item.desc" 
                        :bgColor="item.bgColor"
                        :link="item.link" 
                        @toThisNavEmit="toThisNav"></carouselWithDesc>
                    </li>
                </ul>
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
import { ajaxPost } from '@/common/js/public.js'
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
                link: '/'
                },
                {
                name: 'active',
                title: '活动',
                src: require('@/assets/button_hd.png'),
                link: '/'
                },
            ],
            setting: {
                height: '2.2rem',
                autoplay: true,
                interval: 2000,
                indicatorPosition: 'inside',
            },
            navList: [
                {
                    id: 1001,
                    title: '场地预定',
                    src: require('@/assets/nav_cdyd.png'),
                    link: '/',
                },
                {
                    id: 1002,
                    title: '运动中心',
                    src: require('@/assets/nav_hdzx.png'),
                    link: '/',
                },
                {
                    id: 1003,
                    title: '共享书吧',
                    src: require('@/assets/nav_gxsb.png'),
                    link: '/',
                },
                {
                    id: 1004,
                    title: '企业服务',
                    src: require('@/assets/nav_qyfw.png'),
                    link: '/serve',
                },
                {
                    id: 1005,
                    title: '项目中心',
                    src: require('@/assets/nav_xmzx.png'),
                    link: '/',
                },
                {
                    id: 1006,
                    title: '育托中心',
                    src: require('@/assets/nav_ytzx.png'),
                    link: '/',
                },
                {
                    id: 1007,
                    title: '品牌中心',
                    src: require('@/assets/nav_ppzx.png'),
                    link: '/',
                },
                {
                    id: 1008,
                    title: '餐饮',
                    src: require('@/assets/nav_cy.png'),
                    link: '/',
                },
            ],
            detailBox1List: [
                {
                    id: 2001,
                    desc: '大企业值得信赖',
                    title: '中国移动',
                    src: require('@/assets/41.jpg'),
                    link: '/',
                },
                {
                    id: 2002,
                    desc: '大企业值得信赖',
                    title: '中国联通',
                    src: require('@/assets/41.jpg'),
                    link: '/',
                },
                {
                    id: 2003,
                    desc: '大企业值得信赖',
                    title: '美的集团',
                    src: require('@/assets/41.jpg'),
                    link: '/',
                }
            ],
            detailBox2List: [
                {
                    id: 3001,
                    title: '关注您的健康',
                    remark: '健康与您同行',
                    src: require('@/assets/hb.jpg'),
                    link: '/',
                },
                {
                    id: 3002,
                    title: '关注您的健康',
                    remark: '健康与您同行',
                    src: require('@/assets/hb.jpg'),
                    link: '/',
                },
                {
                    id: 3003,
                    title: '关注您的健康',
                    remark: '健康与您同行',
                    src: require('@/assets/hb.jpg'),
                    link: '/',
                },{
                    id: 3004,
                    title: '关注您的健康',
                    remark: '健康与您同行',
                    src: require('@/assets/hb.jpg'),
                    link: '/',
                },
                {
                    id: 3005,
                    title: '关注您的健康',
                    remark: '健康与您同行',
                    src: require('@/assets/hb.jpg'),
                    link: '/',
                },
                {
                    id: 3006,
                    title: '关注您的健康',
                    remark: '健康与您同行',
                    src: require('@/assets/hb.jpg'),
                    link: '/',
                }
            ],
            detailBox3List: [
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
            carouselList: [
                {
                    id: 5001,
                    desc: '世界如此美好，怎能让忙碌停止我们探索世界的脚步。',
                    title: '第35个！中国又多一处世界遗产！',
                    src: require('@/assets/gd1.jpg'),
                    bgColor: '#F0F5FF',
                    link: '/',
                },
                {
                    id: 5002,
                    desc: '世界如此美好，怎能让忙碌停止我们探索世界的脚步',
                    title: '第35个！中国又多一处世界遗产！',
                    src: require('@/assets/gd2.jpg'),
                    bgColor: '#FFF1F0',
                    link: '/',
                },
                {
                    id: 5003,
                    desc: '世界如此美好，怎能让忙碌停止我们探索世界的脚步',
                    title: '第35个！中国又多一处世界遗产！',
                    src: require('@/assets/gd3.jpg'),
                    bgColor: '#F0F5FF',
                    link: '/',
                },
            ]
        };
    },
    components: {mainNav, globalTitle, detailBox1, detailBox2, detailBox3, carouselWithDesc},
    created() {
        //获取tooken
        console.log(/\^?code=\w+/.exec(window.location.href)[0])
        let code = /\^?code=\w+/.exec(window.location.href)[0].split('=')[1];

        ajaxPost(apiUrl.token, {
            code: code
        }, res => {
            localStorage.setItem('token', token);
            sessionStorage.setItem('token', token);
        })

        if (this.topCarImgList.length == 0) {
            //请求banner
            this.$store.dispatch('homeModule/getHomeBanner');
        }
    },
    computed: {
        topCarImgList() {
            return this.$store.state.homeModule.imageList;
        }
    },
    methods: {
        toThisNav(url) {
            console.log(url)
            this.$router.push(url);
        },
    }
}

</script>
<style lang='less' scoped>

    .home_contain {
        padding: .16rem .32rem;
        margin-bottom: 1rem;
        .el-carousel__item img {
            width: 100%;
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
                }
                .qy_block_desc {
                    font-size: .2rem;
                    font-weight: 500;
                    line-height: .28rem;
                    color: #666;
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