<template>
  <div id="app">
    <router-view/>
    <div v-if="isMobile" v-html="styleDom"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    const styleDom = `
      <style>
        #app{min-width: 100%;}
        .main{margin-top:0 !important;}
        .defuWidth,.main .m_content,.main .m_content .c_body{width:100% !important;}
        .main .m_banner .b_content ul li img{width:100vw;height:30vh;}
        .main .m_content .c_body{margin:0 !important;}
        .main .m_content .c_body .b_head,.main .m_content .c_body .b_foot{display:none;}
        .main .m_banner .b_btns{display:block !important;}
        .main .m_banner .b_btns a{transform: scale(0.55);}
        .defuTitle{transform: scale(0.75);}
        .defuItemBox{padding:0 2vw !important;box-sizing: border-box;}
        .defuItemBox ul{flex-wrap: wrap !important;justify-content: space-between;}
        .defuItemBox ul li{min-width:46.5vw !important;width:46.5vw !important;margin-bottom:20px;}
        .defuItemBox ul li + li{margin-left:0 !important;}
        .defuItemBox ul li p:first-child img{height: 32vw;}
        .defuItemBox1 ul li{width: 39vw !important;min-width: 39vw !important;height:200px;}
        .main .m_items{position:relative;}
        .main .m_items .defuTitle{position:initial;}
        .main .m_items:last-child .defuItemBox{transform: scale(.85);}
        .main .m_items:last-child .defuItemBox ul{flex-wrap:nowrap !important;}
        .defuTitle p:nth-child(3){right: -10vw !important;top: -10vw !important;}
        .b_head1{background: rgba(0,0,0,.3);position: relative;top: 0;z-index: 1;width: 100%;height: 50px;margin-bottom: -50px;}
        .b_head1 img{height: 50px;margin: 0 auto;}
        .b_head1 span{position:absolute;top:0;bottom:0;left:10px;}
        .b_head1 span svg path{fill:#fff;}
        .b_head1.activeHead{background: #fff;margin-bottom:0;}
        .b_head1.activeHead img{background: #4883ad;}
        .b_head1.activeHead span svg path{fill:#4883ad;}
        .w1200{width:100% !important;}
        .main .m_content .c_body .b_breadCrumbs{padding:0 10px;}
        .w1200 .date{display:none;}
        .w1200 .content{width:100%;padding:0 10px;}
        #product .h_pic,#products .h_pic{width: 200%;margin: 0 -50%;}
        #product .h_pic img,#products .h_pic img{width: 100%;}
        #product,#products{margin-top: -39px !important;}
        #product.main .m_body ul li{margin:0 0 50px;padding:0 10px;}
        #product.main .m_body ul li img{width:100%;height:50vw;}
        #products.main .m_head .h_search{padding:0 10px;}
        #products.main .m_head .h_search p{width: 22vw;}
        #products.main .m_head .h_search p:first-child input{border:1px solid #f1f1f1;}
        #products.main .m_body ul{justify-content: space-around;}
        #products.main .m_body ul li{width:47%;margin:0 0 20px;}
        #products.main .m_body ul li img{width: 85%;margin: 10px auto 0;height: 40vw;}
        #products.main .m_body ul li p:nth-child(2){margin-top:15px;}
        #products.main .m_body ul li p:nth-child(3){margin:10px 0 15px;}
        #products.main .m_body ul li p:last-child{padding:10px 0 15px;}
        #productInfo{padding: 0 10px;box-sizing: border-box;}
        #productInfo .m_head{flex-wrap: wrap;}
        #productInfo .m_head .h_pic div:last-child{display:none;}
        #productInfo .m_head .h_pic div:first-child img{width:100%;height:auto;}
        #productInfo .m_head .h_info{margin-left:0 !important;}
        #productInfo .m_head .h_info .i_content .c_inputBox{flex-wrap: wrap;justify-content: center;}
        #productInfo .m_head .h_info .i_content .c_inputBox>div{margin-right: 0px !important;margin-bottom:15px;}
        #productInfo .m_head .h_info .i_content .c_psTxt{flex-wrap: wrap;margin-bottom: 0px !important;}
        #productInfo .m_head .h_info .i_content .c_psTxt p:first-child{margin-bottom:10px;}
        .i_col > p:first-child,.i_col > p:last-child{width:10vw !important;}
        .i_col > p:nth-child(3){display:none;}
        .i_col > p:nth-child(4){width:10vw !important;}
        .i_col > p:nth-child(5){width:20vw !important;}
        .i_list .i_col p input{width:100% !important;}
        .i_list .i_col p img{width:20vw !important;height:20vw !important;margin-right:0 !important;}
        .i_list .i_col p img+span{margin:4px 2vw !important;}
        #shoppingCart .s_body div p:first-child a:last-child,#shoppingCart .s_body span.s12{display:none;}
        #payment textarea{border: 1px solid #f1f1f1;}
        #payment h2{padding-left:10px;}
        #payment .total{padding-right:10px;}
        #payment .submit{padding-right:10px;padding-bottom:50px;}
        #auth .m_body ul li[data-v-9040f476]{width:100%;padding:0 10px;}
        #auth .m_body ul li img[data-v-9040f476]{width:100%;height:50vw;}
        #joinUs .w1200>div>img{width:100%;}
        #joinUs .companyInfo{padding:0 10px;}
        #messageBoard .qAndA{padding: 0 10px;}
        #messageBoard .mesBox{padding: 0 10px;}
        #messageBoard .mesBox > div > div > i{margin-left: .5em;margin-right: .5em;}
        #messageBoard .submit{margin: 0 10px 50px;}
      </style>`;
    return { isMobile: false, styleDom, maxMobileWidth: 1024 };
  },
  methods: {
    getIsMobile() {
      this.isMobile = window.outerWidth < this.maxMobileWidth ? 1 : 0;
      this.$store.dispatch("setIsMobile", this.isMobile);
    }
  },
  created() {
    window.onresize = _ => {
      this.getIsMobile();
    };
    this.getIsMobile();
  }
};
</script>

<style>
</style>
