<template>
    <div class="layout-header">
        <div class="layout-header-login">
            <span class="layout-header-login-logo"><b class="layout-header-login-logo-text">K</b></span>
            <span class="layout-header-login-btn">登录</span>
            <span class="layout-header-login-span"> | </span>
            <span class="layout-header-login-register-btn">注册</span>
        </div>
        <div class="layout-header-center">
              <div class="layout-header-search">
                  <span class="layout-header-search-goback">
                    <i class="el-icon-arrow-left"></i>
                  </span>
                  <span class="layout-header-search-span">
                    <input type="text" class="layout-header-search-input" />
                    <i class="el-icon-search layout-header-search-icon-glass"> </i>
                  </span>
                  <span class="layout-header-search-voice-icon">
                    <i class="el-icon-mic"></i>
                  </span>
              </div>
                <ul class="layout-header-operator-list clear-fix">
                    <li class="layout-header-operator-item ">
                        <i class=""></i>
                    </li>
                    <li class="layout-header-operator-item ">
                        <i class="el-icon-menu"></i>
                    </li>
                    <li class="layout-header-operator-item">
                        <i class="el-icon-message"></i>
                    </li>
                    <li class="layout-header-operator-item">
                        <i class="el-icon-user"></i>
                    </li>
                    <li class="layout-header-operator-item">
                        <i class="el-icon-setting"></i>
                    </li>
                    <li class="layout-header-operator-item">
                        <span class="layout-header-operator-item-split">|</span>
                    </li>
                    <li class="layout-header-operator-item ">
                        <i class="el-icon-mobile-phone"></i>
                    </li>
                    <li class="layout-header-operator-item">
                        <i class="el-icon-star-off"></i>
                    </li>
                    <li class="layout-header-operator-item">
                        <i class="el-icon-minus"></i>
                    </li>
                    <li class="layout-header-operator-item">
                        <i class="el-icon-close"></i>
                    </li>
                </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'layout-header'
}
</script>
<style lang="scss">
    .layout-header {
        height: 49px;
        background: #028ee5;
        &-login {
            width: 300px;
            height: 50px;
            line-height: 50px;
            &-btn, &-register-btn,&-span {
                cursor: pointer;
                color: #fff;
            };
            &-logo {
                display: inline-block;
                width: 30px;
                height: 30px;
                border: 2px solid #fff;
                border-radius: 50%;
                background: #028ee5;
                margin: 8px 12px;
                vertical-align: center;
                &-text {
                    font-weight: bold;
                    font-size: 20px;
                    text-align: center;
                    color: #fff;
                    display: block;
                    height: 28px;
                    line-height: 28px;

                }
            }
        };
        &-center {
            // display: inline-block;
            position: absolute;
            top: 0;
            left: 300px;
            width: 900px;
            height: 50px;
        };

        &-search {
            // float: left;
            position: absolute;
            top: 0;
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
            box-sizing: border-box;

            &-span {
                display: inline-block;
                line-height: 50px;
                position: relative;
                top: -2px;
            }
            &-goback { 
                line-height: 50px;
                margin-right: 5px;
                color: #fff;
                cursor: pointer;
            };
            &-input {
                width: 319px;
                height: 26px;
                padding: 0 10px; 
                padding-right: 35px;
                border: none;
                border-radius: 13px;
                box-sizing: border-box;
            };
            &-icon-glass {
                position: absolute;
                top: 17px;
                right: 1px;
                padding: 0 10px;
                cursor: pointer;
            };
            &-voice-icon {
                line-height: 50px;
                color: #fff;
                cursor: pointer;
                padding: 0 5px;
            }
        }
        &-operator-list {
            height: 50px;
            float: right;
            margin-right: 14px;
        }
        &-operator-item {
            float: left;
            margin-right: 14px;
            cursor: pointer;
            height: 50px;
            color: #fff;
            line-height: 50px;
            &-split{
                color: #fff;
            }
        }
    }
</style>