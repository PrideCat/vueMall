<template>
  <div class="main">
    <div class="m_body">
      <ul class="defuWidth fbox f_jc_sb">
        <li v-for="(item,index) in items" :key="index">
          <p @click="show(index)"><img :src="item.src"></p>
          <p class="fbox f_jc_sb f_si_c">
            <span class="c3 s22">
              <!-- {{$t(item.name)}} -->
            </span>
          </p>
          <p class="des">
            <!-- 你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗你好吗 -->
          </p>
          <p></p>
        </li>
      </ul>
    </div>
    <div :class="this.switch?'position':'position hide'" @click="hide()">
      <div @click.stop><img :src="items[itemI].src"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
  data() {
    return {
      searchTxt: "",
      switch: 0, //查看大图的开关
      itemI:0,
      items:[
        {name:"1",src:require("./img/1.jpeg")},
        {name:"kmar",src:require("./img/2.jpeg")},
        {name:"發明專利證書",src:require("./img/3.jpeg")},
        {name:"certificate",src:require("./img/4.jpeg")},
        {name:"特許證",src:require("./img/5.jpeg")},
        {name:"6",src:require("./img/6.jpeg")},
        {name:"the united states of amenica",src:require("./img/7.jpeg")},
        {name:"excellent korean technology",src:require("./img/8.jpeg")},
        {name:"certificate of inno-biz",src:require("./img/9.jpg")},
        {name:"certificate",src:require("./img/10.jpg")},
        {name:"ctfa",src:require("./img/11.jpg")},
        {name:"12",src:require("./img/12.jpg")},
      ]
    };
  },
  computed: {},
  methods: {
    hide() {
      this.switch = 0;
    },
    show(i) {
      this.switch = 1;
      this.itemI = i;
    }
  },
  created() {
    document.title = this.$store.state.app.language == "zh" ? "認證" : "Certification";
    this.$store.dispatch("setMenuI", 5);
    this.$store.dispatch("setBreadCrumbs", [
      { label: "認證", isI18n: true }
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
  padding-top: 10px;
}
.main .m_body ul li {
  margin-bottom: 60px;
  
}
.main .m_body ul li p:first-child{
width: 350px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.main .m_body ul li img {
  width: 100%;
  /* height: 400px; */
  /*height: 300px;*/
}
.main .m_body ul li:hover p:first-child {
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
