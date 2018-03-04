<template>
    <div class="subway-line">
        <div class="alarm-info">
            <div class="line1 flex">
                <img src="~assets/home/icon_line6.png" />
                <div class="infos flex">
                    <label>车站报警</label>
                    <span class="light error"></span>
                    <span class="name">二级报警 1座</span>
                    <span class="light warn"></span>
                    <span class="name">一级报警 1座</span>
                    <span class="light normal"></span>
                    <span class="name">正常 4部</span>
                    <span class="light offline"></span>
                    <span class="name">断网 2部</span>
                    <span class="light stop"></span>
                    <span class="name">停机 1座</span>
                </div>
            </div>
            <div class="line2 flex">
                <div class="infos flex">
                    <img src="~assets/home/icon_escalator.png" />
                    <span>正常 <span class="normal">9</span> 部</span>
                    <span>一级报警 <span class="warn">2</span> 部</span>
                    <span>二级报警 <span class="error">1</span> 部</span>
                </div>
                <div class="infos flex">
                    <img src="~assets/home/icon_fan.png" />
                    <span>正常 <span class="normal">9</span> 部</span>
                    <span>一级报警 <span class="warn">2</span> 部</span>
                    <span>二级报警 <span class="error">1</span> 部</span>
                </div>
                <div class="infos flex">
                    <img src="~assets/home/icon_door.png" />
                    <span>正常 <span class="normal">9</span> 部</span>
                    <span>一级报警 <span class="warn">2</span> 部</span>
                    <span>二级报警 <span class="error">1</span> 部</span>
                </div>
            </div>
        </div>
        <div class="map">
            <div class="button-group flex">
                <div class="button-wrapper">
                    <button class="btn">设备实时状态</button>
                </div>
                <div class="button-wrapper">
                    <button class="btn">测点实时状态</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .subway-line {
        padding: 0 0.2rem;
        .alarm-info {
            .line1 {
                height: 0.7rem;
                img {
                    margin: 0 0.4rem;
                }
                .light {
                    width: 0.12rem;
                    height: 0.12rem;
                    background-color: #cc0000;
                    border-radius: 50%;
                    box-shadow: 0 0 10px 4px #fff;
                    margin-right: 0.1rem;
                    margin-left: 0.3rem;
                    &.error {
                        background-color: red;
                    }
                    &.warn {
                        background-color: #f9af00;
                    }
                    &.normal {
                        background-color: #00ff00;
                    }
                    &.offline {
                        background-color: #54596e;
                    }
                    &.stop {
                        background-color: #7f2d00;
                    }
                }
                .infos {
                    border-radius: 0.5rem;
                    background-color: #000;
                    color: #fff;
                    height: 0.4rem;
                    padding: 0 0.2rem;
                    font-size: 0.16rem;
                }
            }
            .line2 {
                .infos {
                    border-radius: 0.5rem;
                    background-color: #000;
                    color: #fff;
                    height: 0.36rem;
                    padding: 0 0.2rem;
                    font-size: 0.14rem;
                    flex: auto;
                    margin: 0 0.1rem;
                    img {
                        margin-right: 0.05rem;
                    }
                }
                .error {
                    color: red;
                }
                .warn {
                    color: #f9af00;
                }
                .normal {
                    color: #00ff00;
                }
            }
        }
        .map {
            background: url('~assets/home/bg_subway_line.png') no-repeat;
            background-size: 100%;
            position: absolute;
            width: 9.4rem;
            height: 4.82rem;
            left: 50%;
            margin-left: -4.7rem;
            bottom: 0;
            .button-group {
                position: absolute;
                bottom: 0.5rem;
                right: 0rem;
                .button-wrapper {
                    background: url('~assets/home/bg_btn.png') no-repeat;
                    background-size: 100%;
                    height: 0.62rem;
                    width: 2.44rem;
                    &:first-child {
                        margin-right: 0.5rem;
                    }
                    .btn {
                        height: 0.46rem;
                        background: transparent;
                        color: #fff;
                        font-size: 0.22rem;
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
