<template>
    <div class="home">
        <lg-header :leftArrow="false" :titleType="1" title="首页"></lg-header>
        <v-touch class="list" tag="div" @swiperight="onSwipeRight('About')">
            <lg-tab :title="title" :scrollerable="false" :animated="true" @tab-change="tabChange"
                    @on-refresh="onRefresh" @on-infinite="onInfinite">
                <p v-for="i in num">{{i}}</p>
                <input type="text" v-model:trim="userInfo.age" placeholder="请输入年龄">
                <div class="button" @click="login"> <IconFont class="icon">&#xe61c;</IconFont> 登录</div>
            </lg-tab>
        </v-touch>

<!--        <lg-footer :index="0"></lg-footer>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: [
                    {id: '1', title: '标题1'},
                    {id: '2', title: '标题2'},
                    {id: '3', title: '标题3'},
                    {id: '4', title: '标题4'},
                    {id: '4', title: '标题5'}
                ],
                num: 20,
                userInfo:{
                    username:"王",
                    password: "12344",
                    age:null
                },
                loading:false,
            }
        },
        methods: {
            tabChange(index, title) {
                this.num = (index + 1) * 20;
            },
            onRefresh(done) {
                setTimeout(() => {
                    done();
                }, 1500)
            },
            onInfinite(done) {
                setTimeout(() => {
                    this.num += 50;
                    done();
                }, 1500)
            },

            login() {
                if (this.username == "") {
                    this.$toast("账号不能为空", 2);
                    return;
                }
                if (this.password == "") {
                    this.$toast("密码不能为空", 2);
                    return;
                }

                this.loading = true;
                this.$toast("正在登录", 0);
                this.$store
                    .dispatch("Login",this.userInfo)
                    .then(isFinishStoreName => {
                        console.log(isFinishStoreName);
                        this.loading = false;
                        this.$toast("登录成功", 1);

                        if (!isFinishStoreName) {
                            this.$router.push({name: "About"});
                            return;
                        }

                        this.$router.push({name: "About",query:{age:this.userInfo.age}});
                    }).catch(msg => this.$toast(msg || '登录失败', 2));

            },
            onSwipeRight(name){
                this.$router.push({'name':name});
            }

        }
    }
</script>
<style lang="scss" scoped>
    .home{
        width:100%;
        height:100%;
        .list {
            width:100%;
            height: 100%;
            padding-top:46px;
            padding-bottom:50px;
        }
        .icon{
            font-size:46px;
            color:red;
        }
        .button{
            display: inline-block;
            width:100%;
            height:auto;
            line-height:46px;
            text-align: center;
        }
    }

</style>
