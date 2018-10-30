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
