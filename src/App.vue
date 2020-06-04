<template>
    <div id="app" class="app">
        <transition
                :name="transitionName"
                :duration="this.transitionName?this.duration:0"
        >
            <div class="wrap" :key="this.$router.name" :style="`transition-duration:${this.duration}ms;`">
                <keep-alive>
                    <div class="contentWrap" v-if="$route.meta.keepAlive">
                        <router-view name="header" class="header" :title=this.$route.meta.title />
                        <div class="content">
                            <router-view ></router-view>
                        </div>
                        <router-view name="footer" class="footer"/>
                    </div>
                </keep-alive>
                <div class="contentWrap" v-if="!$route.meta.keepAlive">
                    <router-view name="header" class="header" :title=this.$route.meta.title />
                    <div class="content">
                        <router-view ></router-view>
                    </div>
                    <router-view name="footer" class="footer"/>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        name:'AppWrap',
        data:function(){
            return{
                transitionName: '',
                duration: 350,
            }
        }
    }

</script>

<style lang="scss" scoped>
    .app{
        width:100%;
        height:100%;
        position:fixed;
        overflow: hidden;
        .wrap{
            width:100%;
            height:100%;
            overflow: hidden;
            .contentWrap{
                position: absolute;
                left: 0;
                top: 0;
                transition-property: transform;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-direction: column;
                background-color: rgba(1,2,3,.2);
                z-index: 1;
                .content{
                    width:100%;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    justify-content: flex-start;
                    align-items: center;
                }
            }
        }
        .van-tabbar{
            height:50px !important;

        }
    }

</style>
