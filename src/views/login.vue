<template>
    <div class="wrap">
        <v-login-header></v-login-header>
        <div class="main">
            <img class="showPic" src="../assets/login/img_bg.png" />
            <div class="login">
                <dl class="loginBox">
                    <dt>用户登录</dt>
                    <dd class="account"><input type="text" placeholder="Username" /><img src="../assets/login/account_icon.png" /></dd>
                    <dd class="password"><input type="password" placeholder="Password" /><img src="../assets/login/password_icon.png" /></dd>
                    <dd class="btn">
                        <button type="button">登录</button>
                    </dd>
                </dl>
            </div>
            <dl class="notice" v-if="isNotice">
                <dt>提示
                    <span v-on:click="close"><img src="../assets/login/close_icon.png"/></span>
                    <span v-on:click="close"><img src="../assets/login/minimize_icon.png"/></span>
                </dt>
                <dd>插件版本4.9.0.9</dd>
                <dd>同当前服务器版本（4.8.0.5）不一致，使用中如有问题，请点击 <span>更新控件</span> 进行下载并重新安装。</dd>
            </dl>
        </div>
        <v-login-footer></v-login-footer>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                isNotice: true
            };
        },
        methods: {
            close() {
                this.isNotice = false;
            }
        }
    };
</script>

<style scoped="scoped" lang="less">
    .wrap {
        width: 100%;
        height: 100%;
    }
    .main {
        width: 100%;
        background: linear-gradient(to bottom, #464b5f 0%, #a3a7bb 100%);
        height: 100%;
        position: relative;
        .showPic {
            width: 10.85rem;
            margin-top: 1.56rem;
        }
        .login {
            position: absolute;
            width: 6.66rem;
            background: #9195a5;
            right: 1.06rem;
            top: 2.4rem;
            border-radius: 2px;
            z-index: 3;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
            .loginBox {
                width: 4.74rem;
                margin: 0.3rem auto 0.5rem auto;
                dt {
                    text-align: center;
                    height: 0.74rem;
                    line-height: 0.74rem;
                    font-size: 0.24rem;
                    color: #fff;
                }
                dd.account,
                dd.password {
                    width: 100%;
                    border-radius: 3px;
                    height: 0.5rem;
                    background: #fff;
                    text-align: center;
                    margin-bottom: 0.4rem;
                    input {
                        width: 3.8rem;
                        height: 0.5rem;
                        line-height: 0.5rem;
                        font-size: 0.16rem;
                        position: relative;
                    }
                }
                dd.account img {
                    width: 0.15rem;
                    height: 0.15rem;
                }
                dd.password img {
                    width: 0.19rem;
                    height: 0.19rem;
                }
                dd.btn {
                    text-align: center;
                    margin-top: 0.14rem;
                    margin-bottom: 0.14rem;
                }
                dd.btn button {
                    width: 1.34rem;
                    height: 0.53rem;
                    line-height: 0.53rem;
                    background: #445370;
                    color: #fff;
                    font-size: 0.2rem;
                    border-radius: 2px;
                    text-shadow: 0.008rem 0.008rem rgba(0, 252, 225, 0.4);
                    cursor: pointer;
                }
            }
        }
        .notice {
            position: absolute;
            right: 0.04rem;
            bottom: 0.78rem;
            z-index: 1;
            width: 4.26rem;
            background: #a7abbe;
            color: #435370;
            border-radius: 2px;
            overflow: hidden;
            box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
            dt,
            dd {
                padding: 0 0.18rem;
            }
            dd:nth-child(2) {
                margin-top: 0.1rem;
            }
            dd:nth-child(3) {
                margin-bottom: 0.2rem;
            }
            dt {
                height: 0.36rem;
                line-height: 0.36rem;
                text-align: left;
                background: #bec0ce;
                font-size: 0.18rem;
                span {
                    float: right;
                    cursor: pointer;
                }
                span:nth-child(1) {
                    margin-left: 0.1rem;
                }
            }
            dd {
                line-height: 0.24rem;
                span {
                    color: #402700;
                    cursor: pointer;
                }
            }
        }
    }
</style>


