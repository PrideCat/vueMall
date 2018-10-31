<template>
  <div class="main s14">
    <div class="m_content">
      <div class="c_body">
        <div class="b_head">
          <div class="maxWidth b2">
            <div class="h_txt fbox f_jc_sb f_si_c defuWidth c1">
              <div>
                <select class="b2 c1" v-model="lang">
                  <option value="zh">{{$t("繁體中文")}}</option>
                  <option value="en">{{$t("英文")}}</option>
                </select>
              </div>
              <div>
                <ul class="fbox">
                  <li>
                    <router-link to="/faq" tag="a">{{$t("如何下單")}}</router-link>
                    <span class="s12">|</span>
                    <a href="javascript:void(0);">{{$t("如何付款")}}</a>
                    <span class="s12">|</span>
                    <a href="javascript:void(0);">{{$t("免責聲明")}}</a>
                    <span class="s12">|</span>
                    <a href="javascript:void(0);">{{$t("隱私政策")}}</a>
                  </li>
                  <li v-if="userInfo">
                    <span>{{$t('歡迎登錄，')+userInfo.nickname}}</span>
                    <span class="s12">|</span>
                    <a href="javascript:void(0);" @click="signOut">{{$t("退出登錄")}}</a>
                  </li>
                  <li v-else>
                    <a href="javascript:void(0);" @click="login">{{$t("登錄")}}</a>
                  </li>
                  <li>
                    <a href="javascript:void(0);" @click="goOrder">{{$t("我的訂單")}}</a>
                    <router-link to="/shoppingCart" tag="a">{{$t("購物車")}}</router-link>
                    <router-link to="/collection" tag="a">{{$t("我的收藏")}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div :class="`h_tab maxWidth s18 c1 ${$route.name==='home'?'':'activeHead'}`">
            <ul class="defuWidth fbox f_jc_sb f_si_c">
              <li v-if="index!=4" :class="`posct ${menuI==index?'active':''}`" :style="item.type=='img'?'width:auto;':''" v-for="(item,index) in menu.item" :key="index">
                <img v-if="item.type=='img'" :src="item.src">
                <router-link v-else :to="item.src" tag="a">{{$t(item.label)}}</router-link>
                <ol v-if="index==1">
                  <li>
                    <router-link to="/news" tag="a">{{$t("新聞中心")}}</router-link>
                  </li>
                  <li>
                    <router-link to="/company" tag="a">{{$t("公司事件")}}</router-link>
                  </li>
                  <li>
                    <router-link to="/care" tag="a">{{$t("關愛社會")}}</router-link>
                  </li>
                </ol>
              </li>
              <li v-else class="posct cursor-p">
                <a @click="toMember">{{$t(item.label)}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div :class="`b_head1 ${$route.name==='home'?'':'activeHead'}`" v-if="isMobile">
          <img :src="menu.item[3].src">
          <span class="posct" @click="showMobileMenu">
            <svg viewBox="0 0 1214 1024" width="23.7" height="20">
              <path d="M890.88 93.090909h-837.818182a46.545455 46.545455 0 0 1 0-93.090909h837.818182a46.545455 46.545455 0 1 1 0 93.090909zM1168.290909 558.545455h-1117.090909a46.545455 46.545455 0 1 1 0-93.09091h1117.090909a46.545455 46.545455 0 0 1 0 93.09091zM584.610909 1024H46.545455a46.545455 46.545455 0 0 1 0-93.090909h538.065454a46.545455 46.545455 0 0 1 0 93.090909z" />
            </svg>
          </span>
        </div>
        <div id="mobileMenu" class="show" v-show="mobileMenuIsShow" @click="hideMobileMenu">
          <ul class="m_content" @click.stop="">
            <li>
              <p><i @click="hideMobileMenu">×</i></p>
            </li>
            <li>
              <ol>
                <li><img src="./img/avatar.png" alt=""></li>
                <li v-if="userInfo">{{userInfo.nickname}}</li>
                <li v-else @click="login">{{$t("未登錄")}}</li>
              </ol>
            <li>
              <ul>
                <li v-for="(item,index) in mobileMenu.item" :key="index">
                  <a href="javascript:void(0);" @click="toMember" v-if="item.src=='/'">{{$t(item.label)}}</a>
                  <router-link :to="item.src" v-else>{{$t(item.label)}}</router-link>
                </li>
              </ul>
            </li>
            <li>
              <p><a><select v-model="lang">
                  <option value="zh">{{$t("繁體中文")}}</option>
                  <option value="en">{{$t("英文")}}</option>
                </select></a><a @click="signOut">{{$t("退出登錄")}}</a></p>
            </li>
          </ul>
        </div>
        <div class="b_breadCrumbs" v-if="breadCrumbs.length">
          <p class="defuWidth">
            <router-link to="/home" tag="a">{{$t("首頁")}}</router-link>
            <span v-for="(item,index) in breadCrumbs" :key="index">
              <b>></b>
              <router-link :class="item.src?'':'c7'" :to="item.src?item.src:''" tag="a">{{item.isI18n?$t(item.label):item.label}}</router-link>
            </span>
          </p>
        </div>
        <router-view :id="routeName"></router-view>
        <div class="b_tools defuWidth">
          <ul>
            <li class="posct b1" v-show="scrollTop>300">
              <a class="posct" @click="toTop" href="javascript:void(0);"><img src="./img/arrow.png"></a>
            </li>
            <li class="posct b6">
              <router-link to="/shoppingCart" tag="a" class="posct" :data-number="cartsLen||''"><img src="./img/shoppingCart.png"></router-link>
            </li>
          </ul>
        </div>
        <div class="b_foot c2">
          <ul class="defuWidth">
            <li>
              <ol class="fbox">
                <li class="fbox flex">
                  <div>
                    <img src="./img/icon.png">
                  </div>
                  <div class="c3">
                    <p>{{$t("本站查詢和聯繫我們")}}</p>
                    <p>whatapps: 9503-2910</p>
                    <p>facebook: balabal</p>
                    <p>{{$t("微信服務號")}}: 0900232</p>
                    <p>{{$t("週一至週六")}}：10:30 -- 20:00</p>
                  </div>
                </li>
                <li>
                  <p class="s18 c3">{{$t("新手上路")}}</p>
                  <p>
                    <a href="javascript:void(0);">{{$t("如何註冊")}}</a>
                  </p>
                  <p>
                    <router-link to="/faq" tag="a">{{$t("如何下單")}}</router-link>
                  </p>
                  <p>
                    <a href="javascript:void(0);">{{$t("如何付款")}}</a>
                  </p>
                </li>
                <li>
                  <p class="s18 c3">{{$t("最新資訊")}}</p>
                  <p>
                    <router-link to="/news" tag="a">{{$t("新聞中心")}}</router-link>
                  </p>
                  <p>
                    <router-link to="/company" tag="a">{{$t("公司事件")}}</router-link>
                  </p>
                  <p>
                    <router-link to="/care" tag="a">{{$t("關愛社會")}}</router-link>
                  </p>
                </li>
                <li>
                  <p class="s18 c3">{{$t("關注我們")}}</p>
                  <p>
                    <a href="javascript:void(0);">{{$t("商店簡介")}}</a>
                  </p>
                  <p>
                    <a href="javascript:void(0);">{{$t("公司介紹")}}</a>
                  </p>
                  <p>
                    <router-link to="/messageBoard" tag="a">{{$t("留言板")}}</router-link>
                  </p>
                </li>
                <li>
                  <p class="s18 c3">{{$t("微信服務號")}}</p>
                  <p><img src="./img/QRcode.jpg"></p>
                </li>
              </ol>
            </li>
            <!-- <li>
              <span>{{$t("友情鏈接")}} ：</span>
              <a href="javascript:void(0);">{{$t("遊民星空")}}</a>
              <a href="javascript:void(0);">{{$t("太平洋網絡")}}</a>
            </li> -->
            <li class="ct">
              <!-- <p>{{$t("广告经营许可证: 430100S003粤ICP备11046297号-4增值电信业务经营许可证: 粤ICP备11046297号")}}</p> -->
              <!-- <p>Copyright 2005~2014 360XH.COM All Rights Reserved</p> -->
              <p>&nbsp;</p>
              <p>© 2018. Headwind International. All Rights Reserved.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      scrollTop: 0,
      menu: {
        index: 0,
        item: [
          {
            src: "/home",
            label: "關於HeadWind"
          },
          {
            src: "/news",
            label: "最新資訊"
          },
          {
            src: "/product",
            label: "產品"
          },
          {
            type: "img",
            src: require("./img/logo.png")
          },
          {
            src: "/",
            label: "會員中心"
          },
          {
            src: "/auth",
            label: "認證"
          },
          {
            src: "/joinUs",
            label: "加入我們"
          }
        ]
      },
      mobileMenu: {
        index: 0,
        item: [
          {
            src: "/home",
            label: "首頁"
          },
          {
            src: "/news",
            label: "最新資訊"
          },
          {
            src: "/company",
            label: "公司事件"
          },
          {
            src: "/care",
            label: "關愛社會"
          },
          {
            src: "/product",
            label: "產品"
          },
          {
            src: "/collection",
            label: "我的收藏"
          },
          {
            src: "/",
            label: "會員中心"
          },
          {
            src: "/auth",
            label: "認證"
          },
          {
            src: "/joinUs",
            label: "加入我們"
          },
          {
            src: "/messageBoard",
            label: "留言板"
          },
          {
            src: "/faq",
            label: "如何下單"
          }
        ]
      }
    };
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.app.language;
      },
      set(lang) {
        this.$i18n.locale = lang;
        this.$store.dispatch("setLanguage", lang);
      }
    },
    menuI() {
      return this.$store.state.app.menuI;
    },
    breadCrumbs() {
      return this.$store.state.app.breadCrumbs;
    },
    cartsLen() {
      return this.$store.state.app.cartsLen;
    },
    userInfo() {
      return this.$store.state.app.userInfo;
    },
    routeName() {
      return this.$route.name;
    },
    isMobile() {
      return this.$store.state.app.isMobile;
    },
    mobileMenuIsShow() {
      return this.$store.state.app.mobileMenuIsShow;
    }
  },
  methods: {
    showMobileMenu() {
      this.$store.dispatch("setMobileMenuIsShow", 1);
    },
    hideMobileMenu() {
      this.$store.dispatch("setMobileMenuIsShow", 0);
    },
    toTop() {
      (document.documentElement || document.body).scrollTop = 0;
    },
    login() {
      window.sessionStorage.setItem("inMellToLogin", 1);
      window.location.href = "../member/index.html";
    },
    goOrder() {
      // window.sessionStorage.setItem("goOrder", 1);
      window.location.href = "../member/index.html#/user/order";
    },
    init(userStorage) {
      userStorage = JSON.parse(userStorage);
      this.ajax({
        apiName: "login",
        data: {
          uid: userStorage.uid,
          password: userStorage.password
        }
      }).then(res => {
        console.log(res);
        this.$store.dispatch("setUserInfo", res.data);
        console.log(this.userInfo);
        this.ajax({
          apiName: "carts",
          data: {
            name: "",
            no: 1,
            size: -1
          }
        }).then(res => {
          console.log(res);
          this.$store.dispatch("setCartsLen", res.data.record);
        });
      });
    },
    signOut() {
      this.ajax({
        apiName: "signOut",
        data: ""
      }).then(res => {
        console.log(res);
        delete sessionStorage.userStorage;
        this.$store.dispatch("setUserInfo", "");
        this.$store.dispatch("setCartsLen", "");
      });
    },
    toMember() {
      window.sessionStorage.setItem("toMember", 1);
      window.location.href = "../member/index.html#/user/index";
    }
  },
  watch: {
    $route: {
      handler() {
        this.toTop();
        this.hideMobileMenu();
      },
      deep: true
    }
  },
  created() {
    window.onscroll = _ => {
      this.scrollTop = (document.documentElement || document.body).scrollTop;
    };
    let userStorage = sessionStorage.getItem("userStorage");
    if (userStorage) this.init(userStorage);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#mobileMenu {
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  transition: all 0.25s;
}
#mobileMenu.show {
  left: 0;
}

#mobileMenu .m_content {
  width: 75% !important;
  height: 100%;
  margin: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
#mobileMenu .m_content > li:nth-child(1) {
  width: 100%;
  text-align: right;
}
#mobileMenu .m_content > li:nth-child(1) p i {
  font-size: 30px;
  display: inline-block;
  margin: 8px 16px;
}
#mobileMenu .m_content > li:nth-child(2) {
  text-align: center;
}
#mobileMenu .m_content > li:nth-child(2) ol li:nth-child(1) img {
  width: 80px;
  margin: -15px auto 0;
}
#mobileMenu .m_content > li:nth-child(2) ol li:nth-child(2) {
  font-size: 18px;
  font-weight: bold;
  margin: 15px;
}
#mobileMenu .m_content > li:nth-child(2) ol li:nth-child(3) {
  background: #e4a751;
  color: #fff;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
}
#mobileMenu .m_content > li:nth-child(3) {
  flex: 1;
  margin-top: 30px;
  width: 100%;
  max-height: calc(100vh - 265px);
  background: #eaeaea;
  overflow: auto;
}
#mobileMenu .m_content > li:nth-child(3) ul {
  min-height: 100%;
  border-top: 1px solid #f1f1f1;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
}
#mobileMenu .m_content > li:nth-child(3) ul li {
  border-bottom: 1px solid #f1f1f1;
  line-height: 40px;
  padding-left: 20px;
}
#mobileMenu .m_content > li:nth-child(3) ul li a{
  display: block;
}
#mobileMenu .m_content > li:nth-child(4) {
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0 7.5%;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  background: #eaeaea;
}
#mobileMenu .m_content > li:nth-child(4) p {
  display: flex;
  justify-content: space-between;
}
#mobileMenu .m_content > li:nth-child(4) p a:last-child:before {
  background: url(./img/exit.png);
  content: "";
  display: inline-block;
  width: 13px;
  height: 13px;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  top: 2px;
  right: 2px;
}

.activeHead {
  background: #fff !important;
  color: #000;
  border-bottom: 2px solid #4883ad;
}
.activeHead ul li:nth-child(4) {
  background: #4883ad;
  height: 118px !important;
}

.main {
  overflow-x: hidden;
}
.main .m_content {
  width: 1200px;
  margin: 0 auto;
}
.main .m_content .c_body {
  width: 1920px;
  margin: 0 -360px;
}
.main .m_content .c_body .b_head {
  position: relative;
  z-index: 1;
}
.main .m_content .c_body .b_head .h_txt {
  height: 38px;
}
.main .m_content .c_body .b_head .h_txt select {
  border: 0;
  outline: none;
}
.main .m_content .c_body .b_head .h_txt a {
  margin: 0 2px;
}
.main .m_content .c_body .b_head .h_txt li {
  margin: 0 12px;
}
.main .m_content .c_body .b_head .h_tab {
  background: rgba(0, 0, 0, 0.25);
}
.main .m_content .c_body .b_head .h_tab ul {
  height: 118px;
}
.main .m_content .c_body .b_head .h_tab ul > li {
  width: 72px;
  height: 60px;
}
.main .m_content .c_body .b_head .h_tab li a {
  margin: 0 -100%;
}
.main .m_content .c_body .b_head .h_tab li.active ol {
  bottom: -167px;
  font-weight: initial;
  color: #fff;
}
.main .m_content .c_body .b_head .h_tab li.active {
  border-bottom: 2px solid #4883ad;
  position: relative;
  color: #4883ad;
  font-weight: bold;
}
.main .m_content .c_body .b_head .h_tab li.active:after {
  content: "";
  position: absolute;
  border-bottom: 4px solid #4883ad;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  bottom: 0;
}
.main .m_content .c_body .b_head .h_tab li ol {
  position: absolute;
  width: 175px;
  text-align: center;
  box-sizing: border-box;
  border-top: 0;
  line-height: 45px;
  bottom: -135px;
  display: none;
  padding-top: 30px;
}
.main .m_content .c_body .b_head .h_tab li ol li {
  background: rgba(0, 0, 0, 0.25);
}
.main .m_content .c_body .b_head .h_tab li ol li:last-child {
  border-radius: 0 0 3px 3px;
}
.main .m_content .c_body .b_head .h_tab li:nth-child(2):hover ol {
  display: block;
}
.main .m_content .c_body .b_head .h_tab li ol a:hover {
  color: #4883ad;
}

.main .m_content .c_body .b_breadCrumbs {
  border-bottom: 1px solid #f1f1f1;
  line-height: 53px;
  margin-bottom: 39px;
}

.main .m_content .c_body .b_tools {
  position: fixed;
  bottom: 200px;
  left: 0;
  right: 0;
  opacity: 0.8;
  height: 0;
}
.main .m_content .c_body .b_tools ul {
  float: right;
}
.main .m_content .c_body .b_tools ul li {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #6d9cbd;
  margin-bottom: 20px;
}
.main .m_content .c_body .b_tools ul li:first-child {
  transform: rotate(180deg);
}
.main .m_content .c_body .b_tools ul li img {
  width: 24px;
}
.main .m_content .c_body .b_tools ul li:nth-child(2) a {
  position: relative;
  top: 4px;
  right: 2px;
}
.main .m_content .c_body .b_tools ul li:nth-child(2) a:before {
  content: attr(data-number);
  position: absolute;
  color: #6d9cbd;
  width: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  right: -8px;
  top: -10px;
  font-size: 12px;
}

.main .m_content .c_body .b_foot {
  margin-top: 50px;
}
.main .m_content .c_body .b_foot ul > li:first-child ol li:first-child {
  padding-top: 40px;
}
.main .m_content .c_body .b_foot ul > li:first-child ol li:first-child img {
  margin-right: 20px;
}
.main .m_content .c_body .b_foot ul > li:first-child ol li:first-child p {
  margin-bottom: 20px;
}
.main
  .m_content
  .c_body
  .b_foot
  ul
  > li:first-child
  ol
  li:first-child
  p:last-child {
  margin-top: 32px;
}
.main .m_content .c_body .b_foot ul > li:first-child ol li:nth-child(n + 2) {
  width: 175px;
  margin-left: 20px;
}
.main .m_content .c_body .b_foot ul > li:first-child ol li:nth-child(n + 3) {
  margin-left: 70px;
}
.main
  .m_content
  .c_body
  .b_foot
  ul
  > li:first-child
  ol
  li:nth-child(n + 2)
  p:first-child {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.main .m_content .c_body .b_foot ul > li:first-child ol li:nth-child(n + 2) p {
  margin: 20px 0;
}
.main .m_content .c_body .b_foot ul > li:nth-child(2) {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  line-height: 52px;
  margin: 30px 0;
}
.main .m_content .c_body .b_foot ul > li:nth-child(2) a {
  margin-right: 0.5em;
}
.main .m_content .c_body .b_foot ul > li:last-child {
  line-height: 30px;
  padding-bottom: 50px;
}
</style>
