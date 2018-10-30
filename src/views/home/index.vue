<template>
  <div class="main">
    <div class="m_banner" @mouseover="bannerEnd" @mouseout="bannerStart">
      <div class="b_content">
        <ul class="fbox" :style="`margin-left:${bannerI*-100}%;`">
          <li v-for="(item,index) in banner.lists" :key="index">
            <img width="1920" :src="item.src">
          </li>
        </ul>
      </div>
      <div class="b_btns defuWidth" v-show="banner.timer==banner.timer1">
        <a class="posct" href="javascript:void(0);" @click="bannerI--"><img src="./img/left.png"></a>
        <a class="posct" href="javascript:void(0);" @click="bannerI++"><img src="./img/right.png"></a>
      </div>
      <div class="b_indexs posct">
        <a :class="`b1 ${index==bannerI?'active':''}`" href="javascript:void(0);" v-for="(item,index) in banner.lists" :key="index" @click="bannerI=index"></a>
      </div>
    </div>
    <div class="m_items">
      <div class="defuTitle ct">
        <p class="c4 s26">{{$t('新聞中心')}}</p>
        <p class="c5 s20">NEWS CENTER</p>
        <p class="posct c6">
          <span class="posct">
            <i class="posct c1 b3"></i>
            <router-link to="/news" tag="a">{{$t('查看更多')}}</router-link>
          </span>
        </p>
      </div>
      <div class="defuWidth defuItemBox">
        <ul class="fbox">
          <li v-for="(item,index) in news" :key="index">
            <router-link :to="`/newsDetail?itemInfo=${encodeURIComponent(JSON.stringify(item))}`">
              <p><img width="382" height="250" :src="item.pic"></p>
              <p class="c6 s16">{{item.name}}</p>
              <p class="c7 cr">{{item.createTime.toTimes().format("yyyy-MM-dd")}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="m_items b4">
      <div class="defuTitle ct">
        <p class="c4 s26">{{$t('熱賣產品')}}</p>
        <p class="c8 s20">SELLING PRODUCTS</p>
        <p class="posct c6">
          <span class="posct">
            <i class="posct c1 b3"></i>
            <router-link to="/product" tag="a">{{$t('查看更多')}}</router-link>
          </span>
        </p>
      </div>
      <div class="defuWidth defuItemBox">
        <ul class="fbox">
          <li v-for="(item,index) in orders" :key="index">
            <router-link :to="`/productInfo?id=${item.id}`">
              <p><img width="382" height="250" :src="item.pic"></p>
              <p class="c3 s16">{{item.name}}</p>
              <p class="c7 cr">{{item.create_time.toTimes().format("yyyy-MM-dd")}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="m_items">
      <div class="defuTitle ct">
        <p class="c4 s26">{{$t('公司事件')}}</p>
        <p class="c5 s20">THE COMPANY EVENT</p>
        <p class="posct c6">
          <span class="posct">
            <i class="posct c1 b3"></i>
            <router-link to="/company" tag="a">{{$t('查看更多')}}</router-link>
          </span>
        </p>
      </div>
      <div class="defuWidth defuItemBox defuItemBox1">
        <ul class="fbox">
          <li v-for="(item,index) in companyEvent" :key="index">
            <p class="c7 s24">{{item.createTime.toTimes().format("yyyy-MM-dd")}}</p>
            <router-link class="c6 s16 cursor-p" :to="`/companyDetail?itemInfo=${encodeURIComponent(JSON.stringify(item))}`" tag="p">{{item.name}}</router-link>
            <p>
              <router-link class="b5 c1 posct s16" :to="`/companyDetail?itemInfo=${encodeURIComponent(JSON.stringify(item))}`" tag="a">{{$t("查看詳情")}}</router-link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      banner: {
        index: 0,
        lists: [
          { src: require("./img/banner1.jpg") },
          { src: require("./img/banner1.jpg") },
          { src: require("./img/banner1.jpg") }
        ],
        timer: null,
        timer1: null
      },
      companyEvent: [],
      news: [],
      orders: []
    };
  },
  computed: {
    bannerI: {
      get() {
        return this.banner.index;
      },
      set(i) {
        this.banner.index = i;
        if (i > this.banner.lists.length - 1) this.banner.index = 0;
        if (i < 0) this.banner.index = this.banner.lists.length - 1;
      }
    }
  },
  methods: {
    bannerEnd() {
      clearInterval(this.banner.timer);
      this.banner.timer1 = this.banner.timer;
    },
    bannerStart() {
      this.banner.timer = setInterval(_ => {
        this.bannerI++;
      }, 5000);
    }
  },
  created() {
    const todate = new Date();
    this.bannerStart();
    this.$store.dispatch("setMenuI", 0);
    this.$store.dispatch("setBreadCrumbs", []);

    this.ajax({
      apiName: "news",
      data: {
        type: 0,
        year: todate.getFullYear(),
        no: 1,
        size: 6
      }
    }).then(res => {
      console.log("新聞", res);
      this.news = res.data.items;
    });

    this.ajax({
      apiName: "commoditys",
      data: {
        name: "",
        sort: 2,
        no: 1,
        size: 6,
        dir: 0
      }
    }).then(res => {
      console.log("熱賣產品", res);
      this.orders = res.data.items;
    });

    this.ajax({
      apiName: "news",
      data: {
        type: 1,
        year: todate.getFullYear(),
        no: 1,
        size: 6
      }
    }).then(res => {
      console.log("公司事件", res);
      this.companyEvent = res.data.items;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.defuTitle {
  border-bottom: 1px solid #aed4f0;
  position: relative;
  padding: 12px 0;
  margin-top: 25px;
  line-height: 1.4;
}
.defuTitle p:nth-child(3) {
  position: absolute;
  top: 0;
  right: 360px;
  bottom: 0;
  margin: auto;
}
.defuTitle p:nth-child(3) a {
  font-weight: bold;
  text-decoration: underline;
}
.defuTitle p:nth-child(3) i {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 10px;
}
.defuTitle p:nth-child(3) i:before {
  content: "◇";
  font: initial;
  width: 4px;
  overflow: hidden;
  transform: rotate(180deg);
}

.defuItemBox::-webkit-scrollbar-track-piece {
  background-color: #f8f8f8;
}
.defuItemBox::-webkit-scrollbar {
  height: 8px;
}
.defuItemBox::-webkit-scrollbar-thumb {
  background-color: #ddd;
}
.defuItemBox1::-webkit-scrollbar-track-piece {
  background-color: #e1f5ff;
}
.defuItemBox1::-webkit-scrollbar-thumb {
  background-color: #97deff;
}
.defuItemBox {
  padding: 31px;
  overflow: auto;
}
.defuItemBox ul {
  flex-wrap: nowrap;
}
.defuItemBox ul li {
  min-width: 380px;
  width: 380px;
}
.defuItemBox ul li + li {
  margin-left: 31px;
}
.defuItemBox ul li p {
  line-height: 25px;
  font-weight: bold;
}
.defuItemBox ul li p:first-child img {
  border: 1px solid #ccc;
  width: 100%;
  margin-bottom: 6px;
}
.defuItemBox ul li p:nth-child(2) {
  height: 25px;
}
.defuItemBox1 {
  padding: 0;
}
.defuItemBox1 ul {
  padding-bottom: 48px;
}
.defuItemBox1 ul li {
  border-left: 1px solid #ccc;
  padding: 28px 18px 0;
  width: 254px;
  min-width: 254px;
  height: 260px;
}
.defuItemBox1 ul li:last-child {
  border-right: 1px solid #ccc;
}
.defuItemBox1 ul li p:nth-child(2) {
  height: auto;
  line-height: 28px;
  margin-top: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
.defuItemBox1 ul li p:last-child a {
  width: 109px;
  height: 42px;
  border-radius: 5px;
}

.main {
  margin-top: -118px;
}
.main .m_banner {
  position: relative;
}
.main .m_banner .b_content ul {
  transition: ease-in-out 0.3s;
}
.main .m_banner .b_btns {
  height: 44px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.main .m_banner .b_btns a {
  height: 44px;
  width: 44px;
  position: absolute;
  left: 0;
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
}
.main .m_banner .b_btns a:last-child {
  left: auto;
  right: 0;
}
.main .m_banner .b_indexs {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  margin: auto;
}
.main .m_banner .b_indexs a {
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border-radius: 50%;
}
.main .m_banner .b_indexs a.active {
  background: #4ca9cd;
}
.main .m_items {
  padding-bottom: 32px;
}
</style>
