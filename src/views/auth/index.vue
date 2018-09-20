<template>
  <div class="main">
    <!-- <div class="m_head defuWidth">
      <div class="h_pic">
        <img src="./img/banner1.jpg">
      </div>
      <div class="h_search fbox">
        <p class="fbox flex">
          <input class="flex s16" type="text" :placeholder="$t('輸入您想要搜索的產品')" v-model="searchTxt">
        </p>
        <p class="b5 c1 fbox">
          <a class="flex posct s18" href="javascript:void(0);">{{$t("搜索")}}</a>
        </p>
      </div>
    </div> -->
    <div class="m_body">
      <ul class="defuWidth fbox f_jc_sb">
        <li v-for="(item,index) in $store.state.app.productCategories" :key="index">
          <p @click="show()"><img src="./img/banner1.jpg"></p>
          <p class="fbox f_jc_sb f_si_c">
            <span class="c3 s22">{{$t(item.name)}}</span>
            <!-- <router-link class="s16 c6 b1" :to="`/products?type=${item.type}`" tag="a">{{$t("查看分類")}}></router-link> -->
          </p>
          <p class="des">你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗</p>
          <p></p>
        </li>
      </ul>
    </div>
    <div :class="this.switch?'position':'position hide'" @click="hide()">
      <div @click.stop><img src="./img/banner1.jpg"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      searchTxt: "",
      switch: 0 //查看大图的开关
    };
  },
  computed: {},
  methods: {
    hide() {
      this.switch = 0;
    },
    show() {
      this.switch = 1;
    }
  },
  created() {
    this.$store.dispatch("setMenuI", 5);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "全部產品", isI18n: true }
    ]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main .m_breadCrumbs {
  border-bottom: 1px solid #f1f1f1;
  line-height: 53px;
  margin-bottom: 39px;
}
.main .m_head .h_search {
  margin: 19px 0 40px;
}
.main .m_head .h_search p:first-child {
  position: relative;
}
.main .m_head .h_search p:first-child:before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border: 2px solid #ccc;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 20px;
  margin: auto;
}
.main .m_head .h_search p:first-child:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 2px;
  background: #ccc;
  top: 15px;
  bottom: 0;
  left: 31px;
  margin: auto;
  transform: rotate(45deg);
}
.main .m_head .h_search p:first-child input {
  padding-left: 3em;
}
.main .m_head .h_search p:last-child {
  width: 160px;
  height: 65px;
}
.main .m_head .h_search p:last-child a {
  opacity: 0.5;
}
.main .m_body ul {
  flex-wrap: wrap;
}
.main .m_body ul li {
  margin-bottom: 60px;
  width: 350px;
}
.main .m_body ul li:nth-child(2n) {
  /*margin-left: 28px;*/
}
.main .m_body ul li img {
  width: 350px;
  height: 400px;
  /*height: 300px;*/
}
.main .m_body ul li:hover img {
  box-shadow: 0 0 5px 1px #4ca9cd;
}
.main .m_body ul li p:last-child {
  margin-top: 20px;
}
.main .m_body ul li p:last-child a {
  padding: 0 24px;
  line-height: 38px;
  border-radius: 3px;
  border: 1px solid #4ca9cd;
}
.main .m_body ul li:hover p:last-child a {
  background: #4ca9cd;
  color: #fff;
}
.main .m_body ul li p span {
  display: block;
  text-align: center;
  width: 100%;
}
.position {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #0000007a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 22;
}
.position > div {
  width: 600px;
}
.position > div > img {
  width: 100%;
}
.hide {
  display: none !important;
}
.des {
  word-wrap: break-word;
  word-break: break-all;
  margin-top: 10px;
}
</style>
